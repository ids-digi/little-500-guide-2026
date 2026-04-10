const flaglContainer = document.querySelector('.flagl');
const flagrContainer = document.querySelector('.flagr');

const flagl = flaglContainer.querySelector('.flag');
const flagr = flagrContainer.querySelector('.flag');

let lastKnownScrollPosition = 0;
let ticking = false;

function swipeFlag(scrollPos) {
	const rotateC = 0.5;
	const transC = 2;
	const initRotate = 50;
	
	flaglContainer.style.transform = `translateX(${scrollPos * -transC}px)`;
	flagl.style.transform = `rotateZ(${rotateC * scrollPos + initRotate}deg)`;

	flagrContainer.style.transform = `rotateY(180deg) translateX(${scrollPos * -transC}px)`;
	flagr.style.transform = `rotateZ(${rotateC * scrollPos + initRotate}deg)`;

	if (initRotate + scrollPos * rotateC < 180) {
		flagrContainer.style.display = 'block';
		flaglContainer.style.display = 'block';
	} else {
		flagrContainer.style.display = 'none';
		flaglContainer.style.display = 'none';
	}
	
}

window.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    // Throttle the event to "do something" every 20ms
    setTimeout(() => {
      swipeFlag(lastKnownScrollPosition);
      ticking = false;
    }, 20);

    ticking = true;
  }
});
