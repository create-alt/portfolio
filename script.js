document.addEventListener("DOMContentLoaded", function () {
    // 全てのスライドショーを初期化
    document.querySelectorAll(".slideshow-container").forEach((slideshow, index) => {
        let slides = slideshow.querySelectorAll(".slide");
        let currentIndex = 0;

        function showSlide(n) {
            slides.forEach((slide, i) => {
                slide.style.display = (i === n) ? "block" : "none";
            });
        }

        function changeSlide(step) {
            currentIndex += step;
            if (currentIndex >= slides.length) currentIndex = 0;
            if (currentIndex < 0) currentIndex = slides.length - 1;
            showSlide(currentIndex);
        }

        // 初期スライドを表示
        showSlide(currentIndex);

        // ボタンイベントを設定
        slideshow.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
        slideshow.querySelector(".next").addEventListener("click", () => changeSlide(1));
    });
});
