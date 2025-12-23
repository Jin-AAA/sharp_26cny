$(document).ready( function() {
    gsap.from("img.slogan", { opacity: 0, scale:0.5, duration: 0.5 });
    gsap.to("img.slogan", { rotation: 5, duration: 1, delay:2, yoyo:true, repeat:-1, repeatDelay:3 });
});

    // 選取 DOM 元素
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        const navLinks = document.querySelectorAll(".nav-link");

        // 1. 漢堡選單點擊事件：切換開關
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // 2. 連結點擊事件：點擊後自動關閉選單
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });