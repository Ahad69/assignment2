const form = document.querySelector("#signup");



form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = form.elements["name"];
	let emailValid = form.elements["email"];
	// if valid, submit the form.
	if (nameValid && emailValid) {
		alert(nameValid.value);
        
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://sheetdb.io/api/v1/4ig4l29fr9p19", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            name: nameValid,
            email:emailValid
        }));
	}
});

