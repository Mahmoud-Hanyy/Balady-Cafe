"use strict";

const header = document.getElementById("site-header");
const menuButton = document.getElementById("menu-button");
const heroVideo = document.querySelector(".hero-video");


/* =========================================================
   HEADER SCROLL
   ========================================================= */

function updateHeader() {
    if (!header) return;

    header.classList.toggle(
        "scrolled",
        window.scrollY > 35
    );
}

window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);

updateHeader();


/* =========================================================
   VIDEO
   ========================================================= */

if (heroVideo) {

    heroVideo.play().catch(() => {
        // Poster/frame stays visible if autoplay is blocked.
    });

}


/* =========================================================
   MOBILE BUTTON
   ========================================================= */

if (menuButton) {

    menuButton.addEventListener("click", () => {

        const expanded =
            menuButton.getAttribute("aria-expanded") === "true";

        menuButton.setAttribute(
            "aria-expanded",
            String(!expanded)
        );

    });

}