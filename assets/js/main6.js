// let upVote = document.querySelector('#upVote')
// let downVote = document.querySelector('#downVote')

function getPostings() {
    console.log("getPostings")
    firebase.database().ref('/').on('value', (snapshot) => {
        let data = snapshot.val()

        let displayPostings = document.querySelector('#postings')
        displayPostings.innerHTML = ""
        let url = window.location.href
        let id = getParameterByName('id', url)
        for (key in data) {
            console.log(key)
            if (key == id) {
                displayPostings.innerHTML += `<div class="card"  style="">
              <div class="card-body" id = "${key}">
                <div class="card-header">${data[key].title}</div>
                <p class="card-text">${data[key].description}</p>
                <p class="card-text"> <a href="mailto:${data[key].email}"> Email: ${data[key].email}</a> </p>
                <p class="card-text"> Time Posted: ${data[key].time} </a> </p>
                <div class="fb-share-button" data-href="https://cinemastorm.site/post-Page.html?id=${key}" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://cinemastorm.site/post-Page.html?id=${key}" class="fb-xfbml-parse-ignore">Share</a></div>
                <button class = "vote upVote" >👍 ${Object.keys(data[key].upVote).length}</button>
                <button class = "vote downVote">👎 ${Object.keys(data[key].downVote).length}</button>
              </div>
            </div>
            <br>`
            }
        }

        getupVote()
        getdownVote()
    })

}

function getupVote() {
    let upvotes = document.querySelectorAll('.upVote')
    upvotes.forEach(upvote => {
        upvote.addEventListener('click', (e) => {
            let key = e.target.parentNode.id
            let email = localStorage.getItem("email")
            firebase.database().ref("/" + key).child("upVote").push(email)
        })
    })
}

function getdownVote() {
    let downvotes = document.querySelectorAll('.downVote')
    downvotes.forEach(downvote => {
        downvote.addEventListener('click', (e) => {
            let key = e.target.parentNode.id
            let email = localStorage.getItem("email")
            firebase.database().ref("/" + key).child("downVote").push(email)
        })
    })
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
window.onload = function() {
    getPostings()
    let url = window.location.href
    console.log(url)
    console.log(getParameterByName('id', url))
}
