function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
    }
}
let create = document.querySelector("#acctbtn")

create.addEventListener("click", e => {
    let email = document.querySelector("#user").value
    let pass = document.querySelector("#myInput").value
    localStorage.setItem("name", email)
    localStorage.setItem("password", pass)

    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
        console.log(error)
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
    document.querySelector("#user").value = ""
    document.querySelector("#myInput").value = ""

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log(user)
            user.sendEmailVerification().then(function() {
                // Email sent.
            }).catch(function(error) {
                // An error happened.
            });
            // User is signed in.
        }
        else {
            // No user is signed in.
        }
    });

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
let resetPassword = document.querySelector('#reset')
resetPassword.addEventListener('click', (e) => {
    console.log("reset done")
    var auth = firebase.auth();
    let email = document.querySelector("#user").value

    auth.sendPasswordResetEmail(email).then(function() {
        // Email sent.
    }).catch(function(error) {
        // An error happened.
    });
})
