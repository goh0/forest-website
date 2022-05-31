const navBtn = document.querySelector('.nav__hamburger-btn');
const navMobile = document.querySelector('.nav__items-mobile');
const navItems = document.querySelectorAll('.nav__items-mobile-link');
const nav = document.querySelector('.nav');
const footerYear = document.querySelector('.year')

const toggleNav = () => {
	navMobile.classList.toggle('nav__items-mobile--active');
};

navItems.forEach((item) => {
	item.addEventListener('click', toggleNav);
});

const navSticky = () => {
	const currentPos = window.scrollY;
	if (currentPos >= 40) {
		nav.classList.add('nav--scrolled');
		nav.classList.remove('nav-pages')
	} else if (currentPos === 0) {
		nav.classList.remove('nav--scrolled');
		nav.classList.add('nav-pages')
	}
};

const handleYear = () => {
	const currentYear = (new Date).getFullYear()
	footerYear.innerHTML = currentYear;
}

handleYear()
navBtn.addEventListener('click', toggleNav);
window.addEventListener('scroll', navSticky);
