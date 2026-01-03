$(document).ready( function() {

    gsap.from("img.slogan", { opacity: 0, scale:0.5, duration: 0.5 });
    //gsap.to("img.slogan", { rotation: 5, duration: 0.6, scale:1.2, delay:2, yoyo:true, repeat:-1, repeatDelay:3 });
    var tl_a = gsap.timeline({delay:2, yoyo:true, repeat:-1, repeatDelay:3});
    tl_a.to("img.slogan", {rotation: 5, duration: 0.5, scale:1.2});
    tl_a.to("img.slogan", {rotation: -1, duration: 0.3, scale:1.2});
    tl_a.to("img.slogan", {rotation: 5, duration: 0.3, scale:1.2});
    tl_a.to("img.slogan", {rotation: 0, duration: 1, scale:1});

    // 1. 先把所有東西藏起來
    gsap.set(".animate-item", { opacity: 0, scale:0.5 });
    gsap.set(".bag1", { opacity: 0, y:10 });
    gsap.set(".bag2", { opacity: 0, y:10 });
    gsap.set(".bag3", { opacity: 0, y:10 });
    gsap.set(".tag_1", { opacity: 0, y:10 });
    gsap.set(".tag_2", { opacity: 0, y:10 });
    gsap.set(".tag_3", { opacity: 0, y:10 });
    gsap.set(".tag_4", { opacity: 0, y:10 });
    gsap.set(".info_1", { opacity: 0, y:10 });
    gsap.set(".info_2", { opacity: 0, y:10 });
    gsap.set(".info_3", { opacity: 0, y:10 });
    gsap.set(".info_4", { opacity: 0, y:10 });
    gsap.set(".info_5", { opacity: 0, y:10 });

    gsap.registerPlugin(ScrollTrigger);

    //KV過場
    // 建立一個時間軸
    const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#kv",
        start: "top top",
        end: "+=150%",
        scrub: 1,
        pin: true,
        pinSpacing: true, // 必須保持開啟，否則動畫時第二區會蓋上來
        onLeave: (self) => {
        // 1. 取得當前滾動位置
        const scrollPos = self.scroll();
        
        // 2. 徹底殺死觸發器，並傳入 true 要求還原所有 inline 樣式 (清除留白)
        self.kill(true); 
        
        // 3. 確保白色層徹底消失
        gsap.set("#kv .overlay", { autoAlpha: 0, display: "none" });

        // 4. 重要：因為 kill(true) 會瞬間移除 padding 導致頁面高度縮短，
        // 可能會造成畫面閃跳，我們強制讓頁面維持在剛好滑過第一區的位置
        window.scrollTo(0, scrollPos);
        }
    }
    });

    // 定義動畫流程
    tl.fromTo("#kv .overlay", 
        { autoAlpha: 0 }, 
        { autoAlpha: 1, duration: 1 } // 第一步：淡入白色層
    )
    .to("#kv .overlay", { 
        duration: 1 // 第二步：單純停留（這段時間畫面上文字不動）
    })
    .to("#kv .overlay", { 
        autoAlpha: 0, 
        duration: 1 // 第三步：淡出
    });

    //物件淡出
    gsap.to("#sec1 .animate-item", {
    scrollTrigger: {
        trigger: "#sec1",
        start: "top 70%",    // 當 #sec1 的頂部到達螢幕下方 80% 位置時觸發
        once: true,
        markers: false,       // 【重要】開啟視覺輔助線，你會看到 start/end 標記
    },
    opacity: 1,
    scale: 1,                  // 確保這裡回到 0
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
    });

    gsap.to(".bag1", {
    scrollTrigger: {
        trigger: ".bag1",
        start: "top 70%",    // 當 #sec1 的頂部到達螢幕下方 80% 位置時觸發
        once: true,
        markers: false,       // 【重要】開啟視覺輔助線，你會看到 start/end 標記
    },
    opacity: 1,
    y:0,                  // 確保這裡回到 0
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
    });

    gsap.to(".bag2", {
    scrollTrigger: {
        trigger: ".bag2",
        start: "top 70%",    // 當 #sec1 的頂部到達螢幕下方 80% 位置時觸發
        once: true,
        markers: false,       // 【重要】開啟視覺輔助線，你會看到 start/end 標記
    },
    opacity: 1,
    y:0,                  // 確保這裡回到 0
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
    });

    gsap.to(".bag3", {
    scrollTrigger: {
        trigger: ".bag3",
        start: "top 70%",    // 當 #sec1 的頂部到達螢幕下方 80% 位置時觸發
        once: true,
        markers: false,       // 【重要】開啟視覺輔助線，你會看到 start/end 標記
    },
    opacity: 1,
    y:0,                  // 確保這裡回到 0
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
    });

    gsap.to(".tag_1", {
    scrollTrigger: {
        trigger: ".tag_1",
        start: "top 70%",    // 當 #sec1 的頂部到達螢幕下方 80% 位置時觸發
        once: true,
        markers: false,       // 【重要】開啟視覺輔助線，你會看到 start/end 標記
    },
    opacity: 1,
    y:0,                  // 確保這裡回到 0
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
    });

    gsap.to(".tag_2", {
    scrollTrigger: {
        trigger: ".tag_2",
        start: "top 70%",    // 當 #sec1 的頂部到達螢幕下方 80% 位置時觸發
        once: true,
        markers: false,       // 【重要】開啟視覺輔助線，你會看到 start/end 標記
    },
    opacity: 1,
    y:0,                  // 確保這裡回到 0
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
    });

    gsap.to(".tag_3", {
    scrollTrigger: {
        trigger: ".tag_3",
        start: "top 70%",    // 當 #sec1 的頂部到達螢幕下方 80% 位置時觸發
        once: true,
        markers: false,       // 【重要】開啟視覺輔助線，你會看到 start/end 標記
    },
    opacity: 1,
    y:0,                  // 確保這裡回到 0
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
    });

    gsap.to(".tag_4", {
    scrollTrigger: {
        trigger: ".tag_4",
        start: "top 70%",    // 當 #sec1 的頂部到達螢幕下方 80% 位置時觸發
        once: true,
        markers: false,       // 【重要】開啟視覺輔助線，你會看到 start/end 標記
    },
    opacity: 1,
    y:0,                  // 確保這裡回到 0
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
    });

    gsap.to(".info_1", {
    scrollTrigger: {
        trigger: ".info_1",
        start: "top 70%",    // 當 #sec1 的頂部到達螢幕下方 80% 位置時觸發
        once: true,
        markers: false,       // 【重要】開啟視覺輔助線，你會看到 start/end 標記
    },
    opacity: 1,
    y:0,                  // 確保這裡回到 0
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
    });

    gsap.to(".info_2", {
    scrollTrigger: {
        trigger: ".info_2",
        start: "top 70%",    // 當 #sec1 的頂部到達螢幕下方 80% 位置時觸發
        once: true,
        markers: false,       // 【重要】開啟視覺輔助線，你會看到 start/end 標記
    },
    opacity: 1,
    y:0,                  // 確保這裡回到 0
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
    });

    gsap.to(".info_3", {
    scrollTrigger: {
        trigger: ".info_3",
        start: "top 70%",    // 當 #sec1 的頂部到達螢幕下方 80% 位置時觸發
        once: true,
        markers: false,       // 【重要】開啟視覺輔助線，你會看到 start/end 標記
    },
    opacity: 1,
    y:0,                  // 確保這裡回到 0
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
    });

    gsap.to(".info_4", {
    scrollTrigger: {
        trigger: ".info_4",
        start: "top 70%",    // 當 #sec1 的頂部到達螢幕下方 80% 位置時觸發
        once: true,
        markers: false,       // 【重要】開啟視覺輔助線，你會看到 start/end 標記
    },
    opacity: 1,
    y:0,                  // 確保這裡回到 0
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
    });

    gsap.to(".info_5", {
    scrollTrigger: {
        trigger: ".info_5",
        start: "top 70%",    // 當 #sec1 的頂部到達螢幕下方 80% 位置時觸發
        once: true,
        markers: false,       // 【重要】開啟視覺輔助線，你會看到 start/end 標記
    },
    opacity: 1,
    y:0,                  // 確保這裡回到 0
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
    });


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
