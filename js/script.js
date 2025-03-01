// fvスライドショーここから
window.addEventListener("DOMContentLoaded", () => {
    // スライドショー画像のリスト
    const images = [
        "images/fv-bg1.png",
        "images/fv-bg2.png",
        "images/fv-bg3.png",
    ];

    let currentIndex = 0;
    const firstViewWrapper = document.querySelector('.first-view-wrapper');

    if (!firstViewWrapper) {
        console.error("first-view-wrapperが見つかりません");
        return;
    }

    function changeBackgroundImage() {
        firstViewWrapper.style.backgroundImage = `url("${images[currentIndex]}")`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    changeBackgroundImage();
    setInterval(changeBackgroundImage, 5000);
});

// fvスライドショーここまで

// 店舗カウントアップここから
$(function () {
    $(window).on("load scroll", function () {
        $(".taiou-tenpo-sum-wrapper").each(function () {
            var txtPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > txtPos - windowHeight + windowHeight / 5) { // 画面サイズの下から1/5までスクロールしたらカウントアップを開始
                if ($(".tenpo-number", this).attr("data-num").indexOf(".") > -1) {
                    var rounding = 1;
                } else {
                    var rounding = 0;
                }
                $(".tenpo-number", this).numerator({ //以下はオプション
                    easing: "linear", // カウントアップの動き方
                    duration: 500, // カウントアップにかかる時間
                    toValue: $(".tenpo-number", this).attr("data-num"), // カウントアップする数値
                    rounding: rounding, // 小数点以下の桁数（初期値：0）
                });
            }
        });
    });
});
// 店舗カウントアップここまで

// キャッシュレスカウントアップここから
$(function () {
    $(window).on("load scroll", function () {
        $(".taiou-pay-sum-wrapper").each(function () {
            var txtPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > txtPos - windowHeight + windowHeight / 5) { // 画面サイズの下から1/5までスクロールしたらカウントアップを開始
                if ($(".pay-number", this).attr("data-num").indexOf(".") > -1) {
                    var rounding = 1;
                } else {
                    var rounding = 0;
                }
                $(".pay-number", this).numerator({ //以下はオプション
                    easing: "linear", // カウントアップの動き方
                    duration: 500, // カウントアップにかかる時間
                    toValue: $(".pay-number", this).attr("data-num"), // カウントアップする数値
                    rounding: rounding, // 小数点以下の桁数（初期値：0）
                });
            }
        });
    });
});
// キャッシュレスカウントアップここまで

// フェードインここから
$(window).scroll(function () {
    $('.fade-in').each(function () {
        var pos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var wHeight = $(window).height();
        if (scroll > pos - wHeight + wHeight / 100) {
            $(this).addClass('inview');
        }
    });
});
// フェードインここまで