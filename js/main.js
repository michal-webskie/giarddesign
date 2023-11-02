// Navigation Height

const navigationHeight = document.querySelector('.navbar').offsetHeight
document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 'px')

// Navbar Collapse

const nav = document.querySelector('.navbar-collapse')
const navbar = document.querySelector('.navbar')

document.addEventListener('click', event => {
	if (!navbar.contains(event.target) && !nav.contains(event.target)) {
		if (nav.classList.contains('show')) {
			nav.classList.remove('show')
		}
	}
})

// Search Bar 

const searchBtn = document.querySelector('.search-bar');
const searchForm = document.querySelector('.search-form');
const searchBtnMobile = document.querySelector('.search-bar-mobile');
const searchFormMobile = document.querySelector('.search-form-mobile');

function showSearchBar() {
  searchForm.classList.toggle('show-search-bar');
}

function showSearchBarMobile() {
  searchFormMobile.classList.toggle('show-search-bar-mobile');
}

	// Search Bar closing 

document.addEventListener('click', event => {
  if (
    !searchForm.contains(event.target) &&
    !searchBtn.contains(event.target) &&
    !searchFormMobile.contains(event.target) &&
    !searchBtnMobile.contains(event.target)
  ) {

    searchForm.classList.remove('show-search-bar');
    searchFormMobile.classList.remove('show-search-bar-mobile');
  }
});

searchBtn.addEventListener('click', showSearchBar);
searchBtnMobile.addEventListener('click', showSearchBarMobile);


// Show Gallery

const gallery = document.querySelector('.gallery')
const galleryBtn = gallery.querySelector('.gallery-btn')
const galleryGradient = gallery.querySelector('.gallery-gradient')
const arrowIcon = gallery.querySelector('.gallery-btn-arrow')
const galleryBtnText = gallery.querySelector('.gallery-btn-text')

function showGallery() {
	gallery.classList.toggle('show-gallery')
	galleryBtn.classList.toggle('bgc-color')

	if (gallery.classList.contains('show-gallery')) {
		arrowIcon.style.rotate = '-180deg'
		galleryBtnText.innerText = 'Zwiń'
		galleryBtn.classList.add('button-down')
	} else {
		arrowIcon.style.rotate = '0deg'
		galleryBtnText.innerText = 'Rozwiń'
		galleryBtn.classList.remove('button-down')
	}
}
function hideGradient() {
	galleryGradient.classList.toggle('hidden')
}

galleryBtn.addEventListener('click', showGallery)
galleryBtn.addEventListener('click', hideGradient)

// Animations

function reveal() {
	var reveals = document.querySelectorAll('.animation1')

	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight
		var elementTop = reveals[i].getBoundingClientRect().top
		var elementVisible = 0

		if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add('active')
		} 
	}
}

window.addEventListener('scroll', reveal)

// mySwiper

var swiper = new Swiper('.mySwiper', {
	centeredSlides: true,
	loop: true,
	keyboard: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})


var msnry;

function adjustMasonry() {
  var gutter;

  if (window.innerWidth < 1440 && window.innerWidth > 1399.98) {
    gutter = 30;
  } else if (window.innerWidth < 1399.98 && window.innerWidth > 767.98) {
    gutter = 10;
  } else if (window.innerWidth < 767.98 && window.innerWidth > 575.98) {
    gutter = 10;
  } else if (window.innerWidth < 575.98) {
    gutter = 0;
  } else {
    gutter = 44;
  }

  if (msnry) {
    msnry.destroy();
  }

  msnry = new Masonry('.grid', {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: gutter,
  });
}

adjustMasonry(); // Wywołaj funkcję na początku

window.addEventListener('resize', adjustMasonry);


// Lazyload

lazyload()

// Cookies 

const cookieBox = document.querySelector('.cookie-box')
const cookieBtn = document.querySelector('.cookie-btn')


const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie')
	
	if (cookieEaten) {
		cookieBox.classList.add('hide')
	}
}

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true')
	cookieBox.classList.add('hide')
}

cookieBtn.addEventListener('click', handleCookieBox)
showCookie()
