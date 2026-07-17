const html = document.documentElement;
const canvas1 = document.getElementById("paral-1");
canvas1.width = 1920;
canvas1.height = 1080;
let context = [];
context[0] = canvas1.getContext("2d");

var sectionTop = [];
var sectionBottom = [];
var currentTotalHeight = index => {
    var prevScrollHeight = 0; // 원하는 값에서 그 값을 또 더한 값들이 스크롤할 때마다 기하급수적으로 더해져서 스크롤 할때 0으로 초기화를 시켜버림.
    for (let i = 0; i < index; i++) {
        prevScrollHeight = prevScrollHeight + sceneInfo[i].scrollHeight;
    }
    console.log("prevScrollHeight : " + prevScrollHeight);
    return prevScrollHeight;
}

// currentSectionSize();

const sceneInfo = [
    {
        // 0
        heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 셋팅.
        scrollHeight: 0, // 다른 funtion에서 높이 셋팅을 시켜줄 것이다. 
        // (다양한 기기에 따른 높이 값과 창 사이즈 변화에 대한 처리 때문에 따로 함수로 처리한다.)
        objs: {
            container: document.querySelector('#scroll-section-1')
        }
    },
    {
        // 1 — 포폴 7개만 (문구는 section-3)
        heightNum: 10,
        scrollHeight: 0,
        objs: {
            container: document.querySelector('#scroll-section-2')
        }
    },
    {
        // 2 — 참여물 문구 전용 (캔버스 마지막 프레임 유지)
        heightNum: 2.5,
        scrollHeight: 0,
        objs: {
            container: document.querySelector('#scroll-section-3')
        }
    },
    {
        // 3
        heightNum: 1,
        scrollHeight: 0,
        objs: {
            container: document.querySelector('#scroll-section-4')
        }
    },
    {
        // 4
        heightNum: 10,
        scrollHeight: 0,
        objs: {
            container: document.querySelector('#scroll-section-5')
        }
    },
];


var frameCount = [];
var currentFrame = [];

//frameCount[0] = 169;
frameCount[0] = 61;
currentFrame[0] = index => (
    `/assets/parallax-main/main_${index.toString().padStart(4, '0')}.webp`
)

var img = [];

const preloadImages = (arrNum) => {
    // for (let o = 0; o < currentFrame.length; o++){
    for (let i = 1; i < frameCount[arrNum]; i++) {
        img[arrNum] = new Image();
        img[arrNum].src = currentFrame[arrNum](i);
    }
    // }
};


const updateImage = (index, arrNum) => {
    // console.log("arrNum" + arrNum);

    img[arrNum] = new Image()
    img[arrNum].src = currentFrame[0](1);
    img[arrNum].onload = function () {
        context[arrNum].drawImage(img[arrNum], 0, 0);
    }

    img[arrNum].src = currentFrame[arrNum](index);
    console.log(img[arrNum].src);
    context[arrNum].drawImage(img[arrNum], 0, 0);

}


// 캔버스 확인
// 캔버스 프레임 = scroll-section-2 진행률에 매핑
// (pl-section 1000vh 기준이면 프레임이 거의 안 넘어가 마지막 이미지와 문구가 어긋남)
const checkCanvas = (scrollNum, currentTop) => {
    if (document.querySelector('#paral-' + scrollNum)) {
        const scrollNum_1 = scrollNum - 1;
        const sectionEl = document.querySelector('#scroll-section-2');
        const sectionH = sectionEl
            ? sectionEl.offsetHeight
            : $("#pl-section-" + scrollNum).height();
        const maxScrollTop = Math.max(1, sectionH - window.innerHeight);
        const scrollFraction = Math.min(1, Math.max(0, currentTop / maxScrollTop));
        var intFrameCount = frameCount[scrollNum_1];
        intFrameCount = intFrameCount - 1;
        const frameIndex = Math.min(
            intFrameCount,
            Math.ceil(scrollFraction * frameCount[scrollNum_1])
        );
        let frameIndexInt = frameIndex + 1;
        console.log("frameIndex: " + frameIndexInt + " / fraction: " + scrollFraction.toFixed(3));
        requestAnimationFrame(() => updateImage(frameIndex, scrollNum_1))
    }
};


window.addEventListener('scroll', () => {
    // var scrollNum = "";
    // let scrollNumIndex = "";
    // $("section").each(function(){
    //     if($(this).hasClass("active")){
    //         let sectionIndex = $(this).index() + 1
    //         scrollNumIndex = $(this).index();
    //         scrollNum = sectionIndex;
    //     }
    // });
    // console.log("scrollNum: " + scrollNum);
    // preloadImages(scrollNumIndex);


    let scroll = $(window).scrollTop();
    let winHeight = $(window).height();
    let scrollMiddle = winHeight / 2;

    for (let i = 0; i < $("section").length; i++) {
        sectionTop[i] = $("section").eq(i).offset().top;
        sectionBottom[i] = sectionTop[i] + $("section").eq(i).outerHeight();

        // if(scroll >= sectionTop[i] - 51 && scroll < sectionBottom[i]) {
        if (scroll > sectionTop[i] && scroll < sectionBottom[i]) {
            $("section").eq(i).addClass("active");
            // $(".pl-section").eq(i).addClass("active");
            // $(".canvas-sticky").addClass("start-"+i);
            var currentScene = $("section").eq(i).data("canvas");
            var currentBefore = $("section").eq(i).data("before");
            if (currentScene == "no" && currentBefore == "1") {
                $(".pl-section").eq(0).addClass("active");
            } else {
                var currentScene2 = currentScene - 1
                $(".pl-section").eq(currentScene2).addClass("active");
                $(".canvas-sticky").addClass("start-" + i);
                var currentTop = html.scrollTop;
                var currentSectionsHeight = currentTotalHeight(i);
                currentTop = currentTop - currentSectionsHeight;
                console.log("currentTop: " + currentTop)
                checkCanvas(currentScene, currentTop);
                // preloadImages(i);

            }

        } else {
            $("section").eq(i).removeClass("active");
            var currentScene = $("section").eq(i).data("canvas");
            $(".canvas-sticky").removeClass("start-" + i);
            if (currentScene == "no") {

            } else {
                var currentScene2 = currentScene - 1
                $(".pl-section").eq(currentScene2).removeClass("active");
                // $(".canvas-sticky").removeClass("start-"+i);
            }
            // context[i].beginPath();
        }
    }

    // const currentTop = html.scrollTop;
    // if($("#scroll-section-2").offset().top < currentTop){

    // }else{

    // }

});

preloadImages(0);
preloadImages(1);
updateImage(0, 0);




function setLayout() {
    // 각 Scroll 섹션에 높이를 셋팅하는 함수.
    for (let i = 0; i < sceneInfo.length; i++) {
        var container = sceneInfo[i].objs.container;
        if (!container) continue;

        if (i === 1 || i === 2) {
            // 포폴/문구: 강제 height 가 콘텐츠보다 작으면 trigger 가 겹쳐
            // 참여물 문구가 포폴보다 먼저 뜨는 버그가 난다 → 실측 높이 이상 확보
            container.style.height = "auto";
            var contentH = container.scrollHeight;
            sceneInfo[i].scrollHeight = Math.max(
                sceneInfo[i].heightNum * window.innerHeight,
                contentH
            );
        } else if (i == 4) {
            container.style.height = "auto";
            sceneInfo[i].scrollHeight = Math.max(
                container.scrollHeight,
                sceneInfo[i].heightNum * window.innerHeight
            );
        } else {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
        }
        container.style.height = sceneInfo[i].scrollHeight + "px";
    }

    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var canvas1Width = winW / canvas1.width;
    var canvas1Height = winH / canvas1.height;
    var maxRatio1 = Math.max(canvas1Width, canvas1Height);
    document.querySelector("#paral-1").style.cssText = "transform: translate(-50%, -50%) scale(" + maxRatio1 + "," + maxRatio1 + ")";

    if (window.__bmaScrollController) {
        window.__bmaScrollController.update(true);
    }
}

window.addEventListener("load", function (event) {
    setLayout();
    $(".parallax-wrap").addClass("on");
    syncClosingCopy();
});
window.addEventListener('resize', function () {
    setLayout();
    syncClosingCopy();
});

// 텍스트 애니메이션 시작 
var controller = new ScrollMagic.Controller();
window.__bmaScrollController = controller;
var animateElem = [".animate_1", ".animate_2", ".animate_3", ".animate_4", ".animate_5", ".animate_6", ".animate_7", ".animate_8", ".animate_9", ".animate_10", ".animate_11", ".animate_12"];
var triggerElem = [".trigger_1", ".trigger_2", ".trigger_3", ".trigger_4", ".trigger_5", ".trigger_6", ".trigger_7", ".trigger_8", ".trigger_9", ".trigger_10", ".trigger_11", ".trigger_12"];

for (var i = 0; i < animateElem.length; i++) {
    var currentAnimateElem = animateElem[i];
    var currentTriggerElem = triggerElem[i];
    var isPofol = i >= 0 && i <= 6;
    var isAbout = currentAnimateElem === ".animate_11";
    var isClosingCopy = currentAnimateElem === ".animate_8";

    // animate_8 은 ScrollMagic 으로 돌리면 포폴보다 먼저 뜨는 문제 → 수동 제어
    if (isClosingCopy) {
        continue;
    }

    // 트리거가 없으면 스킵 (없는 .trigger_12 등)
    if (!document.querySelector(currentTriggerElem) || !document.querySelector(currentAnimateElem)) {
        continue;
    }

    var timeline = new TimelineMax();

    var tween_move = TweenMax.fromTo(
        currentAnimateElem,
        1,
        {
            ease: SlowMo.ease.config(0.7, 0.7, false),
            y: isPofol ? 24 : 50
        },
        {
            ease: SlowMo.ease.config(0.7, 0.7, false),
            y: isPofol ? -24 : -50
        }
    );

    var tween_opacity = new TimelineMax();
    if (isAbout) {
        tween_opacity
            .to(currentAnimateElem, 0.2, {
                ease: Linear.easeNone,
                opacity: 1
            })
            .to(currentAnimateElem, 0.2, {
                ease: Linear.easeNone,
                opacity: 1
            }, "+=2.4")
            .to(currentAnimateElem, 0.35, {
                ease: Linear.easeNone,
                opacity: 0
            });
    } else if (isPofol) {
        tween_opacity
            .to(currentAnimateElem, 0.2, {
                ease: Linear.easeNone,
                opacity: 1
            })
            .to(currentAnimateElem, 0.2, {
                ease: Linear.easeNone,
                opacity: 1
            }, "+=0.45")
            .to(currentAnimateElem, 0.25, {
                ease: Linear.easeNone,
                opacity: 0
            });
    } else {
        tween_opacity
            .to(currentAnimateElem, 0.3, {
                ease: Linear.easeNone,
                opacity: 1
            })
            .to(
                currentAnimateElem,
                0.3,
                {
                    ease: Linear.easeNone,
                    opacity: 0
                },
                "+=0.4"
            );
    }

    timeline.add(tween_move, 0).add(tween_opacity, 0);

    var sceneDuration = isAbout ? "140%" : "100%";

    var scene_main = new ScrollMagic.Scene({
        triggerElement: currentTriggerElem,
        duration: sceneDuration
    })
        .setTween(timeline)
        .addTo(controller);

    if (isPofol) {
        (function (selector) {
            scene_main.on("progress", function (e) {
                var el = document.querySelector(selector);
                if (!el) return;
                if (e.progress >= 0.06 && e.progress <= 0.88) {
                    el.classList.add("is-visible");
                } else {
                    el.classList.remove("is-visible");
                }
            });
            scene_main.on("leave", function () {
                var el = document.querySelector(selector);
                if (el) el.classList.remove("is-visible");
            });
        })(currentAnimateElem);
    }
} // 첫번째 애니메이션 (반복문)

/**
 * 참여물 문구(animate_8):
 * - 마지막 포폴(.pofol-pin 7번째)이 화면에서 완전히 사라진 뒤에만 표시
 * - 그 다음 trigger_8 구간에서 페이드 인 → 유지 → 페이드 아웃
 * ScrollMagic 타이밍에 맡기지 않음 (포폴보다 먼저 뜨던 원인)
 */
function syncClosingCopy() {
    var pins = document.querySelectorAll("#scroll-section-2 .pofol-pin");
    var closing = document.querySelector(".animate_8");
    var trigger8 = document.querySelector(".trigger_8");
    if (!pins.length || !closing || !trigger8) return;

    var lastPin = pins[pins.length - 1];
    var winH = window.innerHeight || document.documentElement.clientHeight;
    var lastPinBottom = lastPin.getBoundingClientRect().bottom;

    // 마지막 포폴이 아직 화면에 남아 있으면 문구 강제 숨김
    if (lastPinBottom > winH * 0.08) {
        closing.classList.remove("is-closing-show");
        closing.style.opacity = "0";
        closing.style.transform = "translateY(30px)";
        return;
    }

    closing.classList.add("is-closing-show");

    // trigger_8 구간 진행률로 등장/퇴장
    var tRect = trigger8.getBoundingClientRect();
    var start = winH * 0.75;   // 트리거가 이 지점 위로 오면 등장 시작
    var end = -winH * 0.2;     // 위로 충분히 지나면 퇴장
    var progress = (start - tRect.top) / (start - end);
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    var opacity = 0;
    var y = 30;
    if (progress < 0.18) {
        var a = progress / 0.18;
        opacity = a;
        y = 30 * (1 - a);
    } else if (progress < 0.72) {
        opacity = 1;
        y = 0;
    } else {
        var b = (progress - 0.72) / 0.28;
        opacity = 1 - b;
        y = -30 * b;
    }

    closing.style.opacity = String(opacity);
    closing.style.transform = "translateY(" + y + "px)";
}

window.addEventListener("scroll", syncClosingCopy, { passive: true });

var ctrl2 = new ScrollMagic.Controller();	// 1. ScrollMagic 컨트롤러 생성
var ctrl3 = new ScrollMagic.Controller();

var tween2 = TweenMax.to('.animate_bg_1', 0.5, {
    width: "100%",
    y: 0
});

var tween3 = TweenMax.to('.overlay', 0.5, {
    opacity: 0
});


var scene2 = new ScrollMagic.Scene({	//3. Scene object 생성
    triggerElement: '.trigger_bg',	//스크롤 애니메이션 시작 지점 설정
    // triggerHook: "onLeave",
    duration: '100%',	//애니메이션 재생 시간 '100%'지정하면 화면 높이에 따라 유동적으로 end위치가 정해짐
})
    .setTween(tween2)	//4. 2번을 3번에 추가
    .addTo(ctrl2);	//5. 1번(controller)을 3번에 추가
// .addIndicators();

var scene3 = new ScrollMagic.Scene({	//3. Scene object 생성
    triggerElement: '.trigger_bg',	//스크롤 애니메이션 시작 지점 설정
    // triggerHook: "onLeave",
    duration: '100%',	//애니메이션 재생 시간 '100%'지정하면 화면 높이에 따라 유동적으로 end위치가 정해짐
})
    .setTween(tween3)	//4. 2번을 3번에 추가
    .addTo(ctrl3);	//5. 1번(controller)을 3번에 추가
// .addIndicators();



// 텍스트 애니메이션 시작 22
var controller2 = new ScrollMagic.Controller();
var animateElem2 = [".bma_ani_color_1", ".bma_ani_color_2", ".bma_ani_color_3"];
var triggerElem2 = [".bma_tgr_color_1", ".bma_tgr_color_2", ".bma_tgr_color_3"];

for (var i = 0; i < animateElem2.length; i++) {
    var currentAnimateElem2 = animateElem2[i];
    var currentTriggerElem2 = triggerElem2[i];

    var timeline2 = new TimelineMax();


    var tween_opacity2 = new TimelineMax();
    tween_opacity2
        .to(currentAnimateElem2, 0.3, {
            ease: Linear.easeNone,
            opacity: 1,
            color: "#ffffff"
        })
        .to(
            currentAnimateElem2, 0.3, {
            ease: Linear.easeNone,
            // opacity: 0,
            color: "#aaaaaa"
        }, "+=0.4");

    timeline2.add(tween_opacity2, 0);

    var scene_main2 = new ScrollMagic.Scene({
        triggerElement: currentTriggerElem2,
        duration: "100%"
    })
        .setTween(timeline2)
        .addTo(controller2);
} // 두번쨰 애니메이션 (반복문) 22

var first_sc_ctrl = new ScrollMagic.Controller();	// 1. ScrollMagic 컨트롤러 생성
var first_sc_tween = TweenMax.to('.first_sc_ani', 0.5, {
    opacity: 0
});
var first_sc_scene = new ScrollMagic.Scene({	//3. Scene object 생성
    triggerElement: '.bma_tgr_color_4',	//스크롤 애니메이션 시작 지점 설정
    // triggerHook: "onLeave",
    duration: '100%',	//애니메이션 재생 시간 '100%'지정하면 화면 높이에 따라 유동적으로 end위치가 정해짐
})
    .setTween(first_sc_tween)	//4. 2번을 3번에 추가
    .addTo(first_sc_ctrl);	//5. 1번(controller)을 3번에 추가
// .addIndicators();
