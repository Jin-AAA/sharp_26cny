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
    gsap.set(".lne_1", { opacity: 0, y:10 });
    gsap.set(".lne_2", { opacity: 0, y:10 });
    gsap.set(".lne_3", { opacity: 0, y:10 });
    gsap.set(".lne_4", { opacity: 0, y:10 });
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
            pinSpacing: true,
            onLeave: (self) => {
                // 1. 先抓到下一個區塊（也就是 Section 2）的元素
                // 請將 "#section-2" 換成你實際的第二區 ID 或 Class
                const nextSection = document.querySelector("#sec1"); 

                // 2. 殺死觸發器並還原樣式
                self.kill(true); 

                // 3. 隱藏透明層
                gsap.set("#kv .overlay", { autoAlpha: 0, display: "none" });

                // 4. 強制重新計算位置
                ScrollTrigger.refresh();

                // 5. 使用 scrollIntoView 直接對齊，這是最保險的做法
                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                }
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

    // 物件淡入組合
    const animateTargets = [
    "#sec1 .animate-item", ".bag1", ".bag2", ".bag3", 
    ".tag_1", ".tag_2", ".tag_3", ".tag_4",
    ".info_1", ".info_2", ".info_3", ".info_4", ".info_5",
    ".lne_1", ".lne_2", ".lne_3", ".lne_4"
    ];

    animateTargets.forEach(target => {
    gsap.to(target, {
        scrollTrigger: {
        trigger: target,   // 以物件本身作為觸發點更精準
        start: "top 70%",
        once: true,
        markers: false,
        },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out"
    });
    });


    Fancybox.bind("[data-fancybox]", {
        // Your custom options
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
