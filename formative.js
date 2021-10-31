/***************
 * Code in lines 8 to 25 is based on this source:
 * Title: Styling Based on Scroll Position
 * Author: Chris Coyier
 * Date: 07/03/2019 - Accessed on 29/10/2021
 * Availability: url: https://css-tricks.com/styling-based-on-scroll-position/
***************/
const debounce = (fn) => {
    let frame;
    return (...params) => {
        if (frame) {
            cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
            fn(...params);
        });
    }
};

const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
}

document.addEventListener('scroll', debounce(storeScroll), {passive: true});
storeScroll();

// Contact Form Submit Alert //

function contactForm() {
    alert("Thank you for your message! We will get back to you as soon as possible!");
}

// Mobile Menu Functions //

function showMenu() {
    nav = document.getElementById("nav-bar");
    nav.style.display = "inline-block";
}

function hideMenu() {
    nav = document.getElementById("nav-bar");
    nav.style.display = "none";
}