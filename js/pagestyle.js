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


        const track = document.querySelector('.carousel-track');
        const items = document.querySelectorAll('.carousel-item');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        
        let currentIndex = 0;
        const totalItems = items.length;
        let autoPlayInterval;

        // 核心功能：移動到指定索引的圖片
        function updateCarousel() {
            // 計算位移距離：索引 * -100%
            const translateX = -(currentIndex * 100);
            track.style.transform = `translateX(${translateX}%)`;
        }

        // 下一張功能
        function nextSlide() {
            currentIndex++;
            if (currentIndex >= totalItems) {
                currentIndex = 0; // 如果超過最後一張，回到第一張
            }
            updateCarousel();
        }

        // 上一張功能
        function prevSlide() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = totalItems - 1; // 如果小於第一張，跳到最後一張
            }
            updateCarousel();
        }

        // 自動輪播計時器設定
        function startAutoPlay() {
            // 清除舊的計時器，避免重複
            if (autoPlayInterval) clearInterval(autoPlayInterval);
            // 設定每 3000 毫秒 (3秒) 執行一次 nextSlide
            autoPlayInterval = setInterval(nextSlide, 3000);
        }

        // 停止自動輪播 (例如手動點擊時暫停一下)
        function resetAutoPlay() {
            clearInterval(autoPlayInterval);
            startAutoPlay(); // 重新開始計時
        }

        // --- 事件監聽 ---

        // 點擊下一張
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoPlay(); // 手動操作後重置計時器，避免馬上又跳下一張
        });

        // 點擊上一張
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoPlay();
        });

        // 頁面載入後開始自動輪播
        startAutoPlay();

        // (選用) 滑鼠移入暫停，移出繼續
        const container = document.querySelector('.carousel-container');
        container.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
        container.addEventListener('mouseleave', startAutoPlay);
