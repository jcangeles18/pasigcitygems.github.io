const navSlide =() => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');
    
        navLinks.forEach((link, index) => {
        if (link.style.animation) {
                link.style.animation = '';
        } else {
            link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s';
        }
     });

     burger.classList.toggle('toggle');

    });

}
 
navSlide();


//  rotating banner
		  var myIndex = 0;
		  carousel();
		  
		  function carousel() {
			var i;
			var x = document.getElementsByClassName("mySlides");
			for (i = 0; i < x.length; i++) {
			  x[i].style.display = "none";  
			}
			myIndex++;
			if (myIndex > x.length) {myIndex = 1}    
			x[myIndex-1].style.display = "block";  
			setTimeout(carousel, 2000);    
		  }
