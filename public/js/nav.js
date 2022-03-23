const nav = document.querySelector("nav");
const navwidth = 5;

let lastScrollTop = 0;
window.addEventListener("scroll", function(){
	var st = window.pageYOffset || document.documentElement.scrollTop;
	if (st > lastScrollTop){
		nav.style.transform = `translateX(${navwidth}rem)`;
	} else {
		nav.style.transform = `translateX(0)`;
	}
	lastScrollTop = st <= 0 ? 0 : st;
}, false);