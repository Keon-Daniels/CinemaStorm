let upVote = document.querySelector('#upVote')
let downVote = document.querySelector('#downVote')

function getPostings() {
    
    firebase.database().ref('/').on('value', (snapshot) => {
        let data = snapshot.val()
        
        let displayPostings = document.querySelector('#postings')
        displayPostings.innerHTML = ""
        for (key in data) {
            displayPostings.innerHTML += `<div class="card"  style="">
              <div class="card-body" id = "${key}">
                <div class="card-header">${data[key].title}</div>
                <p class="card-text">${data[key].description}</p>
                <p class="card-text"> <a href="mailto:${data[key].email}"> Email: ${data[key].email}</a> </p>
                <p class="card-text"> Time Posted: ${data[key].time} </a> </p>
                <button class = "vote upVote" >👍 ${Object.keys(data[key].upVote).length}</button>
                <button class = "vote downVote">👎 ${Object.keys(data[key].downVote).length}</button>
              </div>
            </div>
            <br>`
        }
        getupVote()
        getdownVote()
    })

}

window.onload = getPostings()
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
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onload = startup()
function startup() {
  if (localStorage.getItem("name") != null) {
    
  }
  else {
    window.location = 'index.html'
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
  /* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show")
  }
function getupVote(){
    let upvotes = document.querySelectorAll('.upVote')
    upvotes.forEach(upvote => {
        upvote.addEventListener('click', (e) => {
            let key = e.target.parentNode.id
            let email = localStorage.getItem("email")
            firebase.database().ref("/" + key).child("upVote").push(email)
        })
    })
}
function getdownVote(){
    let downvotes = document.querySelectorAll('.downVote')
    downvotes.forEach(downvote => {
        downvote.addEventListener('click', (e) => {
            let key = e.target.parentNode.id
            let email = localStorage.getItem("email")
            firebase.database().ref("/" + key).child("downVote").push(email)
        })
    })
}