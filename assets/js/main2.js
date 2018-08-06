let postEmail = document.querySelector('#email')
window.onload = startup()

function startup() {
  if (localStorage.getItem("name") != null) {
    document.querySelector('#postingEmail').value = localStorage.getItem("email")
  }
  else {
    window.location = 'index.html'
    }
}



  let submitButton = document.querySelector('#submit')
  submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('button works!')
    let title = document.querySelector('#postingTitle').value
    let description = document.querySelector('#postingDescription').value
    let email = document.querySelector('#postingEmail').value
    let date = new Date()
    let dateLog = String(date)
    let upVote = 0
    let downVote = 0
    console.log(dateLog)
    console.log(title, description, email, dateLog)
    let posting = {
      title: title,
      description: description,
      email: email,
      time: dateLog,
      upVote: upVote,
      downVote: downVote,
    }
    document.querySelector('#postingTitle').value = ""
    document.querySelector('#postingDescription').value= ""
    document.querySelector('#postingEmail').value = ""
    firebase.database().ref('/').push(posting)
  })
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
  /* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show")
  }

