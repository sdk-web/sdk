const html = document.documentElement;
const canvas1 = document.getElementById("paral-1");
canvas1.width=1920;
canvas1.height=1080;
let context = [];
context[0] = canvas1.getContext("2d");

var sectionTop = [];
var sectionBottom = [];
var currentTotalHeight = index => {
    var prevScrollHeight = 0; // 원하는 값에서 그 값을 또 더한 값들이 스크롤할 때마다 기하급수적으로 더해져서 스크롤 할때 0으로 초기화를 시켜버림.
    for(let i = 0; i < index; i++) {
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
        scrollHeight : 0, // 다른 funtion에서 높이 셋팅을 시켜줄 것이다. 
        // (다양한 기기에 따른 높이 값과 창 사이즈 변화에 대한 처리 때문에 따로 함수로 처리한다.)
        objs: {
            container: document.querySelector('#scroll-section-1')
        }
    },
    {
      // 1
        heightNum: 10,
        scrollHeight : 0,
       objs: {
            container: document.querySelector('#scroll-section-2')
      }
    },
    {
        // 2  
        heightNum: 2,
        scrollHeight : 0,
        objs: {
            container: document.querySelector('#scroll-section-3')
      }
    },
    {
        // 3
        heightNum: 1,
        scrollHeight : 0,
        objs: {
            container: document.querySelector('#scroll-section-4')
      }
    },
    {
        // 4
        heightNum: 10,
        scrollHeight : 0,
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
    `/assets/parallax-main/main_${index.toString().padStart(4, '0')}.jpg`
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


const updateImage = (index,arrNum) => {
    // console.log("arrNum" + arrNum);

    img[arrNum] = new Image()
    img[arrNum].src = currentFrame[0](1);
    img[arrNum].onload=function(){
        context[arrNum].drawImage(img[arrNum], 0, 0);
    }

    img[arrNum].src = currentFrame[arrNum](index);
    console.log(img[arrNum].src);
    context[arrNum].drawImage(img[arrNum], 0, 0);

}


// 캔버스 확인
const checkCanvas = (scrollNum, currentTop) => {
    if(document.querySelector('#paral-' + scrollNum)){
        const scrollNum_1 = scrollNum -1
        // const scrollTop = html.scrollTop;
        const scrollTop = currentTop;
        const maxScrollTop = $("#pl-section-" + scrollNum).height() - window.innerHeight;
        const scrollFraction = scrollTop / maxScrollTop;
        // console.log("maxScrollTop: " + maxScrollTop);
        // console.log("scrollFraction: " + scrollFraction);
        var intFrameCount = frameCount[scrollNum_1];
        intFrameCount = intFrameCount - 1;
        console.log("intFrameCount: " + intFrameCount);
        // intFrameCount = intFrameCount;
        const frameIndex = Math.min(
            intFrameCount,
            Math.ceil(scrollFraction * frameCount[scrollNum_1])
        );
        let frameIndexInt =  frameIndex + 1;
        console.log("frameIndex: " + frameIndexInt);
        requestAnimationFrame(() => updateImage(frameIndex,scrollNum_1))
        // requestAnimationFrame(() => updateImage(frameIndex + 1,scrollNum_1))
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
    let scrollMiddle = winHeight/2;

    for(let i = 0; i < $("section").length; i++){
        sectionTop[i] = $("section").eq(i).offset().top;
        sectionBottom[i] = sectionTop[i] + $("section").eq(i).outerHeight();

        // if(scroll >= sectionTop[i] - 51 && scroll < sectionBottom[i]) {
        if(scroll > sectionTop[i] && scroll < sectionBottom[i]) {
            $("section").eq(i).addClass("active");
            // $(".pl-section").eq(i).addClass("active");
            // $(".canvas-sticky").addClass("start-"+i);
            var currentScene = $("section").eq(i).data("canvas");
            var currentBefore = $("section").eq(i).data("before");
            if(currentScene=="no" && currentBefore=="1"){
                $(".pl-section").eq(0).addClass("active");
            }else{
                var currentScene2 = currentScene -1
                $(".pl-section").eq(currentScene2).addClass("active");
                $(".canvas-sticky").addClass("start-"+i);
                var currentTop = html.scrollTop;
                var currentSectionsHeight = currentTotalHeight(i);
                currentTop = currentTop - currentSectionsHeight;
                console.log("currentTop: " + currentTop)
                checkCanvas(currentScene, currentTop);
                // preloadImages(i);
                
            }
            
        }else{
            $("section").eq(i).removeClass("active");
            var currentScene = $("section").eq(i).data("canvas");
            $(".canvas-sticky").removeClass("start-"+i);
            if(currentScene=="no"){

            }else{
                var currentScene2 = currentScene -1
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
updateImage(0,0);




function setLayout(){
    // 각 Scroll 섹션에 높이를 셋팅하는 함수.
    for(let i = 0; i < sceneInfo.length; i++) {
        if(i==4){
            sceneInfo[i].scrollHeight = document.querySelector("#scroll-section-5").height;
        }else{
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
        }
        // sceneInfo의 scrollHeight 값은 (window.innerHeight)웹페이지 전체 높이 x (heightNum) 5 이다.
        sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`
        // objs객체 안에 container에 id가 scroll-section-__ 인 태그들의 style 속성을 변경 시키는데.
        // 높이 값을 scrollHeight 값으로 모두 적용 시켜준다.
    }

    var winW = window.innerWidth;
    var winH = window.innerHeight;
    
    // var canvas2Width = winW / canvas2.width;
    // var canvas2Height = winH / canvas2.height;
    // var maxRatio2 =  Math.max(canvas2Width, canvas2Height);
    // document.querySelector("#paral-2").style.cssText = "transform: translate(-50%, -50%) scale("+maxRatio2+","+maxRatio2+")";

    var canvas1Width = winW / canvas1.width;
    var canvas1Height = winH / canvas1.height;
    var maxRatio1 =  Math.max(canvas1Width, canvas1Height);
    document.querySelector("#paral-1").style.cssText = "transform: translate(-50%, -50%) scale("+maxRatio1+","+maxRatio1+")";
}
  
window.addEventListener("load", function(event) {
    setLayout();
    $(".parallax-wrap").addClass("on");
}); // 웹페이지가 Load되면 setLayout함수 실행시켜주기.
window.addEventListener('resize',setLayout); // 웹페이지 창 크기가 변경되면 seyLayout의 함수를 재실행 시킨다.

// 텍스트 애니메이션 시작 
var controller = new ScrollMagic.Controller();
var animateElem = [".animate_1", ".animate_2", ".animate_3", ".animate_4", ".animate_5", ".animate_6" ,".animate_7", ".animate_8", ".animate_9", ".animate_10", ".animate_11", ".animate_12"];
var triggerElem = [".trigger_1", ".trigger_2", ".trigger_3", ".trigger_4", ".trigger_5", ".trigger_6", ".trigger_7", ".trigger_8", ".trigger_9", ".trigger_10", ".trigger_11", ".trigger_12"];

for (var i = 0; i < animateElem.length; i++) {
  var currentAnimateElem = animateElem[i];
  var currentTriggerElem = triggerElem[i];

  var timeline = new TimelineMax();

  var tween_move = TweenMax.fromTo(
    currentAnimateElem,
    1,
    {
      ease: SlowMo.ease.config(0.7, 0.7, false),
      y: 50
    },
    {
      ease: SlowMo.ease.config(0.7, 0.7, false),
      y: -50
    }
  );

  var tween_opacity = new TimelineMax();
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

  timeline.add(tween_move, 0).add(tween_opacity, 0);

  var scene_main = new ScrollMagic.Scene({
    triggerElement: currentTriggerElem,
    duration: "100%"
  })
    .setTween(timeline)
    .addTo(controller);
} // 첫번째 애니메이션 (반복문)

var ctrl2 = new ScrollMagic.Controller();	// 1. ScrollMagic 컨트롤러 생성
var ctrl3 = new ScrollMagic.Controller();

var tween2 = TweenMax.to('.animate_bg_1', 0.5, {	
    width: "100%",
    y : 0 
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
      currentAnimateElem2, 0.3,   {
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
