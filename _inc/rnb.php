<? 	if($programNum[0]=="1"){ ?>
<dl class="rnb">
	<dt>ABOUT US</dt>
	<dd class="<?if($programNum[1]=="1") echo "on";?>"><a href="/about-us/message.php"><span class="ic"><i class="fa-solid fa-message-lines"></i></span>MESSAGE</a></dd>
	<dd class="<?if($programNum[1]=="2") echo "on";?>"><a href="/about-us/organization.php"><span class="ic"><i class="fa-solid fa-sitemap"></i></span>ORGANIZATION</a></dd>
	<dd class="<?if($programNum[1]=="3") echo "on";?>"><a href="/about-us/history.php"><span class="ic"><i class="fa-solid fa-list-timeline"></i></span>HISTORY</a></dd>
	<dd class="<?if($programNum[1]=="4") echo "on";?>"><a href="/about-us/location.php"><span class="ic"><i class="fa-solid fa-map-location-dot"></i></span>LOCATION</a></dd>
</dl>
<? }elseif($programNum[0]=="2"){ ?>
<dl class="rnb">
	<dt>HULL BLOCK</dt>
	<dd class="<?if($programNum[1]=="1") echo "on";?>"><a href="/hull-block/aft-body.php"><span class="img"><img src="/assets/images/circle.svg" alt=""></span>AFT BODY</a></dd>
	<dd class="<?if($programNum[1]=="2") echo "on";?>"><a href="/hull-block/bottom.php"><span class="img"><img src="/assets/images/circle.svg" alt=""></span>BOTTOM</a></dd>
	<dd class="<?if($programNum[1]=="3") echo "on";?>"><a href="/hull-block/deck.php"><span class="img"><img src="/assets/images/circle.svg" alt=""></span>DECK</a></dd>
	<dd class="<?if($programNum[1]=="4") echo "on";?>"><a href="/hull-block/engine-room.php"><span class="img"><img src="/assets/images/circle.svg" alt=""></span>ENGINE ROOM</a></dd>
	<dd class="<?if($programNum[1]=="5") echo "on";?>"><a href="/hull-block/fore-body.php"><span class="img"><img src="/assets/images/circle.svg" alt=""></span>FORE BODY</a></dd>
	<dd class="<?if($programNum[1]=="6") echo "on";?>"><a href="/hull-block/hopper.php"><span class="img"><img src="/assets/images/circle.svg" alt=""></span>HOPPER</a></dd>
	<dd class="<?if($programNum[1]=="7") echo "on";?>"><a href="/hull-block/side-shell.php"><span class="img"><img src="/assets/images/circle.svg" alt=""></span>SIDE SHELL</a></dd>
	<dd class="<?if($programNum[1]=="8") echo "on";?>"><a href="/hull-block/t-block.php"><span class="img"><img src="/assets/images/circle.svg" alt=""></span>T-BLOCK</a></dd>
</dl>
<? }elseif($programNum[0]=="3"){ ?>
<dl class="rnb">
	<dt>PLANT</dt>
	<dd class="<?if($programNum[1]=="1") echo "on";?>"><a href="/plant/semi-rig.php"><span class="img"><img src="/assets/images/circle.svg" alt=""></span>SEMI-RIG</a></dd>
	<dd class="<?if($programNum[1]=="2") echo "on";?>">
		<a href="/plant/heater.php"><span class="img"><img src="/assets/images/circle.svg" alt=""></span>HEATER</a>
		<ul>
			<li><a href="#heater-1">PRESSURE VESSEL</a></li>
			<li><a href="#heater-2">HEAT EXCHANGER</a></li>
			<li><a href="#heater-3">FIRED HEATER</a></li>
			<li><a href="#heater-4">FLARE SYSTEM</a></li>
			<li><a href="#heater-5">INCINERATOR PACKAGE</a></li>
			<li><a href="#heater-6">HRSG</a></li>
			<li><a href="#heater-7">POWER PLANT EQUIPMENT</a></li>
		</ul>
	</dd>
</dl>
<? }elseif($programNum[0]=="4"){ ?>
<dl class="rnb">
	<dt>PUBLIC RELATIONS</dt>
	<dd class="<?if($programNum[1]=="1") echo "on";?>"><a href="/facilities-certification/layout.php"><span class="ic"><i class="fa-duotone fa-table-layout"></i></span>LAYOUT</a></dd>
	<dd class="<?if($programNum[1]=="2") echo "on";?>"><a href="/facilities-certification/faciliteis-process.php"><span class="ic"><i class="fa-duotone fa-industry"></i></span>FACILITEIS & PROCESS</a></dd>
	<dd class="<?if($programNum[1]=="3") echo "on";?>"><a href="/facilities-certification/certification.php"><span class="ic"><i class="fa-duotone fa-file-certificate"></i></span>CERTIFICATION</a></dd>
	<dd class="<?if($programNum[1]=="4") echo "on";?>"><a href="/facilities-certification/safety-regulation.php"><span class="ic"><i class="fa-duotone fa-helmet-safety"></i></span>SAFETY REGULATION</a></dd>
</dl>
<? }elseif($programNum[0]=="5"){ ?>
<dl class="rnb">
	<dt>FACILITIES & <br>CERTIFICATION</dt>
	<dd class="<?if($programNum[1]=="1") echo "on";?>"><a href="/public-relations/gallery.php"><span class="ic"><i class="fa-duotone fa-folder-image"></i></span>GALLERY</a></dd>
	<dd class="<?if($programNum[1]=="2") echo "on";?>"><a href="/public-relations/notice.php"><span class="ic"><i class="fa-duotone fa-bullhorn"></i></span>NOTICE</a></dd>
	<dd class="<?if($programNum[1]=="3") echo "on";?>"><a href="/public-relations/partner.php"><span class="ic"><i class="fa-duotone fa-handshake"></i></span>PARTNER</a></dd>
</dl>
<? } ?>


<script>
$(function(){
		var topH = 10;
		$(window).scroll(function(){
			var realTop = $(document).scrollTop();
//			realTop = realTop - 300;
			if (realTop > topH)
			{
				$("#header").addClass("on");
			}

			if (realTop<10)
			{
				$("#header").removeClass("on");
			}


		var currentTop = $(this).scrollTop();
		var targetTop = $(".sub-page-wrap .page-right").offset().top
		var footerTop = $("#footer").offset().top
		var realHeight = window.innerHeight;
		var stopTop = currentTop + realHeight;

		var footerH = $("#footer").outerHeight();
		var headerH = $("#header .bot_header").outerHeight();
		var postH = $(".page-right .rnb").outerHeight();
		var val = $(document).height() - $(window).height() - footerH + postH + headerH + 60;
		var val2 = postH + targetTop - $(window).height();
		var val3 = currentTop + headerH;

//				console.log("postH"+postH);
//				console.log("targetTop"+targetTop);
//				console.log(headerH);
//				console.log($(this).scrollTop());
			
		if (val3 > targetTop){
			$(".sub-page-wrap .page-right").addClass("fixed");
//			$(".post-left").stop().animate({top: currentTop - targetTop + 20},500);
		}else{
			$(".sub-page-wrap .page-right").removeClass("fixed");
//			$(".post-left").stop().animate({top: 0},500);
		}
		if (currentTop >= val){
			$(".sub-page-wrap .page-right").addClass("fixedbot");
		}else{
			$(".sub-page-wrap .page-right").removeClass("fixedbot");
		}


		});

		$("#header .gnb > li > a").mouseover(function(){
			
			var num = $(this).data("menu");
//			alert(num);
			$(".sub_ul").hide();
			$(".sub_ul"+num).show();
			$(".hidden_menu").slideDown();
		});

		$("#header").mouseleave(function(){
			$(".hidden_menu").stop(true, false).slideUp();
			$(".sub_ul").hide();
		});

});
</script>