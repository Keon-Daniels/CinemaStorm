let loginButton = document.querySelector('#signUp')
let logOutButton = document.querySelector('#signOut')

let login = document.querySelector("#logbtn")

login.addEventListener("click", e => {
    let email = document.querySelector("#user").value
    let pass = document.querySelector("#myInput").value
    console.log(email, pass)
    if (email == localStorage.getItem("name") && (pass == localStorage.getItem("pass"))) {
        firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
            console.log(error)
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }
    document.querySelector("#user").value = ""
    document.querySelector("#myInput").value = ""
    loginButton.classList.add('hidden')
    logOutButton.classList.remove('hidden')

})


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
    }
}
window.onload = startup()

function startup() {
	if (localStorage.getItem("name") != null) {
		loginButton.classList.add('hidden')
		logOutButton.classList.remove('hidden')
	}
	else {
		loginButton.classList.remove('hidden')
		logOutButton.classList.add('hidden')
	}
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}