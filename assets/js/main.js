/*
	Twenty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
	breakpoints({
		wide: ['1281px', '1680px'],
		normal: ['981px', '1280px'],
		narrow: ['841px', '980px'],
		narrower: ['737px', '840px'],
		mobile: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Scrolly.
	$('.scrolly').scrolly({
		speed: 1000,
		offset: function() { return $header.height() + 10; }
	});

	// Dropdowns.
	$('#nav > ul').dropotron({
		mode: 'fade',
		noOpenerFade: true,
		expandMode: (browser.mobile ? 'click' : 'hover')
	});

	// Nav Panel.

	// Button.
	$(
			'<div id="navButton">' +
			'<a href="#navPanel" class="toggle"></a>' +
			'</div>'
		)
		.appendTo($body);

	// Panel.
	$(
			'<div id="navPanel">' +
			'<nav>' +
			$('#nav').navList() +
			'</nav>' +
			'</div>'
		)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'navPanel-visible'
		});

	// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
	if (browser.os == 'wp' && browser.osVersion < 10)
		$('#navButton, #navPanel, #page-wrapper')
		.css('transition', 'none');

	// Header.
	if (!browser.mobile &&
		$header.hasClass('alt') &&
		$banner.length > 0) {

		$window.on('load', function() {

			$banner.scrollex({
				bottom: $header.outerHeight(),
				terminate: function() { $header.removeClass('alt'); },
				enter: function() { $header.addClass('alt reveal'); },
				leave: function() { $header.removeClass('alt'); }
			});

		});

	}

})(jQuery);


let loginButton = document.querySelector('#signUp')
let logOutButton = document.querySelector('#signOut')
let signUpButton = document.querySelector('#sign')
loginButton.addEventListener('click', (e) => {
	console.log("logged in")
	loginButton.classList.add('hidden')
	signInWithGoogle()
	logOutButton.classList.remove('hidden')
	signUpButton.classList.add('hidden')

})
logOutButton.addEventListener('click', (e) => {
	logOutButton.classList.add('hidden')
	signOut()
	loginButton.classList.remove('hidden')
	signUpButton.classList.remove('hidden')
})

function signInWithGoogle() {
	var googleAuthProvider = new firebase.auth.GoogleAuthProvider
	firebase.auth().signInWithPopup(googleAuthProvider)
		.then(function(data) {
			console.log(data)
			addUserToScreen(data)
		})
}

function addUserToScreen(userData) {
	let userName = userData.user.displayName
	localStorage.setItem("name", userName)
	let userEmail = userData.user.email
	localStorage.setItem("email", userEmail)
	let userPicture = userData.user.photoURL
	localStorage.setItem("picture", userPicture)
}
window.onload = startup()

function startup() {
	if (localStorage.getItem("name") != null) {
		loginButton.classList.add('hidden')
		logOutButton.classList.remove('hidden')
		signUpButton.classList.add('hidden')
	}
	else {
		loginButton.classList.remove('hidden')
		logOutButton.classList.add('hidden')
		signUpButton.classList.remove('hidden')
	}
}

function signOut() {
	localStorage.removeItem("name")
	localStorage.removeItem("email")
	localStorage.removeItem("picture")
	firebase.auth().signOut()
		.then(function() {
			// Sign-out successful.
			console.log("Logged Out Successfully!")
		})
		.catch(function(error) {
			// An error happened.
		});
}

function myFunction() {
	var x = document.getElementById("myInput");
	if (x.type === "password") {
		x.type = "text";
	}
	else {
		x.type = "password";
	}
}
let sendButton = document.querySelector('#sendMessage')
sendButton.addEventListener('click', (e) => {
	window.open('mailto:keongi46@gmail.com');
	window.open('mailto:kwallace21@cgps.org');
})

