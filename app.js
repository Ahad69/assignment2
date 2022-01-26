const form = document.querySelector("#signup");



form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = form.elements["name"];
	let emailValid = form.elements["email"];
	// if valid, submit the form.
	if (nameValid && emailValid) {
		alert("congrats");
        
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://boiling-waters-50126.herokuapp.com/addpurchase", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            name: nameValid.value,
            email: emailValid.value
        }));

        var xhr1 = new XMLHttpRequest();
        xhr1.open("POST", "https://chilling-phantom-97094.herokuapp.com/addbooking", true);
        xhr1.setRequestHeader('Content-Type', 'application/json');
        xhr1.send(JSON.stringify({
            name: nameValid.value,
            email: emailValid.value
        }));

        const scriptURL = "https://script.google.com/macros/s/AKfycbwffzFM1yise-YH63oHFH8MTJCpVAJjWht0X7PbDD5zOPwX8LDCRabJAEfJZ_yknY6lFg/exec";
			const form = document.forms['google']
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => alert('Success!', response))
				.catch(error => console.error('Error!', error.message))
        .reset()
			})
	}
});

