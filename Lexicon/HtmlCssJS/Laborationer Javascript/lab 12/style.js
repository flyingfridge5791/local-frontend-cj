
 const hamburgerButton = document.querySelector("a.hamburger");
 const hamburgerMenu = document.querySelectorAll("li.navbutton");

hamburgerButton.addEventListener('click', () => {

	for (let index = 0; index < hamburgerMenu.length; index++) {
		hamburgerMenu[ index ].classList.toggle("menuReveal");
	}
	
  

})



