window.onload = function() {
	document.getElementById("footer").innerHTML = `<div class="page-footer"><span><a href="https://www.instagram.com/margaritaines/" target="_blank"><img src="images/InstagramIcon.svg" alt="Instagram Icon" /></a></span>
	<span><a href="https://www.linkedin.com/in/mpapakosta/" target="_blank"><img src="images/LinkedInIcon.svg" alt="LinkedIn Icon" /></a></span>
	<span><a href="mailto:margaritainespap@gmail.com"><img src="images/EmailIcon.svg" alt="Email Icon" /></a></span>
	<span><a href="https://www.facebook.com/margarita.ines.5" target="_blank"><img src="images/FacebookIcon.svg" alt="Facebook Icon" /></a></span></div>`
}

function moreAboutMeFunction () {
	window.location.replace("about.html");
}

const MyLogo = document.getElementById("MyLogo");

MyLogo.onclick = function() {
	window.location.replace("index.html");
}

function viewResumeFunction () {
	window.location.replace("MargPapakostaResume.pdf");
}




 const next = document.querySelector(".carousel__btn--next"),
 back = document.querySelector(".carousel__btn--back"),
 carousel = document.querySelector(".carousel__cards");
let angle = 0;

next.addEventListener("click", () => {
  angle -= 45;
  carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
});

back.addEventListener("click", () => {
  angle += 45;
  carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
});