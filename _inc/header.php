<?
//	$query_string=getenv("QUERY_STRING");
//	if($query_string=="pageNum=45"){
//		$query_string = "pageNum=44";
//	}
  $url=$_SERVER["PHP_SELF"]; //현재 실행되고 있는 페이지의 url을 구합니다.
//	$ko_url = explode('/en', $url);
//	echo $ko_url[1];
	if($url=="/index.php") $url = "/";
//	$ko_url = $url."?".$query_string;
	$kr_url = "/kr".$url;
	$en_url = $url;


//    require_once($_SERVER["DOCUMENT_ROOT"]."/language/korean/korean_lang.php");

//	if(isset($_REQUEST['pageNum']) && $_REQUEST['pageNum']!="")
//	{
//	 $pageNum=(int)($_REQUEST['pageNum']);
//	}
//	else
//	{
//		 $pageNum = "";
//	}

	$programNum = explode("-", $pageNum);
?>

<div id="header" class="<? if($CurrentPage==""){echo "sub_header";}?>">
	<div class="bot_header">
		<div class="con">
			<div class="logo">
				<a href="/">
					<div class="logo_img default"><img src="/assets/images/logo-daesang-white.png" alt=""></div>
					<div class="logo_img fixed"><img src="/assets/images/logo-daesang-black.png" alt=""></div>
				</a>
			</div><!-- logo -->
			<div class="gnb">
				<div class="line_bar"></div>
				<ul class="menu">
					<li class="<?php if($programNum[0]=="1"){ echo "on";} ?>">
						<a href="/about-us/message.php">ABOUT US</a>
					</li>
					<li class="<?php if($programNum[0]=="2"){ echo "on";} ?>">
						<a href="/hull-block/aft-body.php">HULL BLOCK</a>
					</li>
					<li class="<?php if($programNum[0]=="3"){ echo "on";} ?>">
						<a href="/plant/semi-rig.php">PLANT</a>
					</li>
					<li class="<?php if($programNum[0]=="4"){ echo "on";} ?>">
						<a href="/facilities-certification/layout.php">FACILITIES & CERTIFICATION</a>
					</li>
					<li class="<?php if($programNum[0]=="5"){ echo "on";} ?>">
						<a href="/public-relations/gallery.php">PUBLIC RELATIONS</a>
					</li>
				</ul>
			</div><!-- gnb -->
			<div class="lang-menu">
				<div class="lang-current">
					<i class="far fa-globe"></i>
				</div>
				<ul>
					<li data-lang="EN" class="on" onclick="location.href='<?=$en_url?>'">ENG</li>
					<li data-lang="KR" onclick="location.href='<?=$kr_url?>'">KOR</li>
				</ul>
			</div><!-- lang-menu -->

		</div><!-- con -->
	</div><!-- bot_header -->
	<div class="sub_header">
		<div class="con">
			<div class="sub_menu_wrap">
				<div class="sub_menu_box">
					<ul class="sub_menu">
						<li><a href="/about-us/message.php">Message</a></li>
						<li><a href="/about-us/organization.php">Organization</a></li>
						<li><a href="/about-us/history.php">History</a></li>
						<li><a href="/about-us/location.php">Location</a></li>
					</ul>
				</div><!-- sub_menu_box -->
				<div class="sub_menu_box">
					<ul class="sub_menu">
						<li><a href="/hull-block/aft-body.php">Atf Body</a></li>
						<li><a href="/hull-block/bottom.php">Bottom</a></li>
						<li><a href="/hull-block/deck.php">Deck</a></li>
						<li><a href="/hull-block/engine-room.php">Engine Room</a></li>
						<li><a href="/hull-block/fore-body.php">Fore Body</a></li>
						<li><a href="/hull-block/hopper.php">Hopper</a></li>
						<li><a href="/hull-block/side-shell.php">Side Shell</a></li>
						<li><a href="/hull-block/t-block.php">T-Block</a></li>
					</ul>
				</div><!-- sub_menu_box -->
				<div class="sub_menu_box">
					<ul class="sub_menu">
						<li><a href="/plant/semi-rig.php">Semi-Rig</a></li>
						<li><a href="/plant/heater.php">Heater</a></li> 
					</ul>
				</div><!-- sub_menu_box -->
				<div class="sub_menu_box">
					<ul class="sub_menu">
						<li><a href="/facilities-certification/layout.php">Layout</a></li>
						<li><a href="/facilities-certification/faciliteis-process.php">Facilities & Process</a></li>
						<li><a href="/facilities-certification/certification.php">Certification</a></li>
						<li><a href="/facilities-certification/safety-regulation.php">Safety Regulation</a></li>
					</ul>
				</div><!-- sub_menu_box -->
				<div class="sub_menu_box">
					<ul class="sub_menu">
						<li><a href="/public-relations/gallery.php">Gallery</a></li>
						<li><a href="/public-relations/notice.php">Notice</a></li>
						<li><a href="/public-relations/partner.php">Partner</a></li>
					</ul>
				</div><!-- sub_menu_box -->
			</div><!-- sub_menu_wrap -->
		</div><!-- con -->
	</div><!-- sub_haeder -->
</div><!-- #header -->
<div id="mo_header" style="display:none !Important;">
	<div class="con">
		<div class="logo">
<!-- 			<div class="logo_img default"><a href="/"><img src="/assets/images/kopri-logo-color.png" alt=""></a></div> -->
<!-- 			<div class="logo_img fixed"><a href="/"><img src="/assets/images/kopri-logo-color.png" alt=""></a></div> -->
		</div>
		<div class="menu">
<!-- 			<div class="set_nav_btn" title="네비게이션 열기, 닫기 버튼"> -->
<!-- 				<p class="line"></p> -->
<!-- 				<p class="line"></p> -->
<!-- 				<p class="line"></p> -->
<!-- 			</div> -->
			<i class="fa-regular fa-bars"></i>
		</div>
	</div>
</div><!-- #mo_header -->
<div id="mo_menu">
	<div class="logo">
		<a href="/">
<!-- 			<div class="logo_img"><img src="/assets/images/kopri-logo-color.png" alt=""></div> -->
		</a>
<!-- 		<div class="mo_close"><img src="/assets/images/mo_close.png" alt=""></div> -->
	</div><!-- logo -->
	<div class="mo_menu_list">
		<ul id="menu_ul">
			<li class="<?php if($programNum[0]=="1"){ echo "on";} ?>">
				<div class="main_menu">
					<div class="link"><a href="/about-us/message.php">ABOUT US</a></div>
					<div class="more"><a><img src="/assets/images/arrow_down.png" alt=""></a></div>
				</div><!-- main_menu -->
				<ul class="sub_menu">
					<li><a href="/about-us/message.php">Message</a></li>
					<li><a href="/about-us/organization.php">Organization</a></li>
					<li><a href="/about-us/history.php">History</a></li>
					<li><a href="/about-us/location.php">Location</a></li>
				</ul><!-- sub_menu -->
			</li>
			<li class="<?php if($programNum[0]=="2"){ echo "on";} ?>">
				<div class="main_menu">
					<div class="link"><a href="/hull-block/aft-body.php">HULL BLOCK</a></div>
					<div class="more"><a><img src="/assets/images/arrow_down.png" alt=""></a></div>
				</div><!-- main_menu -->
				<ul class="sub_menu">
					<li><a href="/hull-block/aft-body.php">Atf Body</a></li>
					<li><a href="/hull-block/bottom.php">Bottom</a></li>
					<li><a href="/hull-block/deck.php">Deck</a></li>
					<li><a href="/hull-block/engine-room.php">Engine Room</a></li>
					<li><a href="/hull-block/fore-body.php">Fore Body</a></li>
					<li><a href="/hull-block/hopper.php">Hopper</a></li>
					<li><a href="/hull-block/side-shell.php">Side Shell</a></li>
					<li><a href="/hull-block/t-block.php">T-Block</a></li>
				</ul><!-- sub_menu -->
			</li>
			<li class="<?php if($programNum[0]=="3"){ echo "on";} ?>">
				<div class="main_menu">
					<div class="link"><a href="/plant/semi-rig.php">PLANT</a></div>
					<div class="more"><a><img src="/assets/images/arrow_down.png" alt=""></a></div>
				</div><!-- main_menu -->
				<ul class="sub_menu">
					<li><a href="/plant/semi-rig.php">Semi-Rig</a></li>
					<li><a href="/plant/heater.php">Heater</a></li>
				</ul><!-- sub_menu -->
			</li>
			<li class="<?php if($programNum[0]=="4"){ echo "on";} ?>">
				<div class="main_menu">
					<div class="link"><a href="/facilities-certification/layout.php">FACILITIES & CERTIFICATION</a></div>
					<div class="more"><a><img src="/assets/images/arrow_down.png" alt=""></a></div>
				</div><!-- main_menu -->
				<ul class="sub_menu">
					<li><a href="/facilities-certification/layout.php">Layout</a></li>
					<li><a href="/facilities-certification/faciliteis-process.php">Facilities & Process</a></li>
					<li><a href="/facilities-certification/certification.php">Certification</a></li>
					<li><a href="/facilities-certification/safety-regulation.php">Safety Regulation</a></li>
				</ul><!-- sub_menu -->
			</li>
			<li class="<?php if($programNum[0]=="5"){ echo "on";} ?>">
				<div class="main_menu">
					<div class="link"><a href="/public-relations/gallery.php">PUBLIC RELATIONS</a></div>
					<div class="more"><a><img src="/assets/images/arrow_down.png" alt=""></a></div>
				</div><!-- main_menu -->
				<ul class="sub_menu">
					<li><a href="/public-relations/gallery.php">Gallery</a></li>
					<li><a href="/public-relations/notice.php">Notice</a></li>
					<li><a href="/public-relations/partner.php">Partner</a></li>
				</ul><!-- sub_menu -->
			</li>
		</ul><!-- # menu_ul -->
	</div><!-- mo_menu_list -->
	<div class="etc_menu">
		<ul>
			<li class="on">
				<a href="<?=$kr_url?>">
					<div class="link_box">
						<div class="img"><img src="/assets/images/kr.png" alt=""></div>
						<div class="txt">KOR</div>
					</div>
				</a>
			</li>
			<li>
				<a href="<?=$en_url?>">
					<div class="link_box">
						<div class="img"><img src="/assets/images/en.png" alt=""></div>
						<div class="txt">ENG</div>
					</div>
				</a>
			</li>
<!-- 			<li> -->
<!-- 				<a href=""> -->
<!-- 					<div class="link_box"> -->
<!-- 						<div class="img"><img src="/assets/images/mo_icon3.png" alt=""></div> -->
<!-- 						<div class="txt">이용안내</div> -->
<!-- 					</div> -->
<!-- 				</a> -->
<!-- 			</li> -->
<!-- 			<li> -->
<!-- 				<a href=""> -->
<!-- 					<div class="link_box"> -->
<!-- 						<div class="img"><img src="/assets/images/mo_icon4.png" alt=""></div> -->
<!-- 						<div class="txt">고객센터</div> -->
<!-- 					</div> -->
<!-- 				</a> -->
<!-- 			</li> -->
		</ul>
	</div><!-- etc_menu -->
	<div class="mo_copyright">Copyright ⓒ <span>2022 DAESANG</span> <br>ALL RIGHTS RESERVED.</div>
</div><!-- #mo_menu -->
<div class="mo_bb"></div>

<script type="text/javascript" src="/assets/js/jquery.cookie.js"></script>
<script>
$(function(){
	$("#header .lang-menu .lang-current").click(function() {
		var select = $(this);
		
		//드롭다운 열기
		if(!select.hasClass("open")){
			select.addClass("open").next('ul').slideDown(100).addClass("open");
		}else{
			select.removeClass("open").next('ul').slideUp(100).removeClass("open");
		}
		
		//다른영역 클릭 시 닫기
		$(document).mouseup(function(e) {
			var seting = $(".lang-menu");
			if (seting.has(e.target).length === 0) {
				$(".lang-menu ul").slideUp(100).removeClass("open");
				select.removeClass("open");
			}
		});

//		$("#header .lang-menu ul li").click(function() {
//
//			var val = $(this).data("lang");
//			
//			$.removeCookie('USERLANG');
//			var langSelect = val;
//			
//			sessionStorage.setItem("USERLANG", langSelect ); // 저장
//			localStorage.setItem("USERLANG", langSelect); //함수 이용. key-value
//			$.cookie('USERLANG', langSelect, { domain:"kopri.localhost", path: '/' });
//			location.reload();
//		});
	});

//	var numA = <?=$programNum[0]?> + 1;
//	var numB = <?=$ona?> + 1;
//
//	$("#header .gnb ul > li").each(function(){
//		$(this).eq(1).addClass("sdf");
//	});
//	$("#header .gnb ul > li").eq(2).addClass("sdf");
});
</script>