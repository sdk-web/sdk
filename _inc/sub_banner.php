<div class="common_banner sub_banner <?=$filenameClass?>">
	<div class="con">
		<div class="sb_txt">
			<h1>
				<?=$subtitle?>
			</h1>
		</div><!-- sb_txt -->
		<div class="location-navi">
			<div class="home"><a href="/"><i class="fa-regular fa-house"></i></a></div>
			<span class="arr"><i class="fa-solid fa-angle-right"></i></span>
<? if($programNum[0]=="1"){?>
			<div class="name-1"><a href="/about-us/message.php">ABOUT US</a></div>
<? }elseif($programNum[0]=="2"){ ?>
			<div class="name-1"><a href="/hull-block/aft-body.php">HULL BLOCK</a></div>
<? }elseif($programNum[0]=="3"){ ?>
			<div class="name-1"><a href="/plant/semi-rig.php">PLANT</a></div>
<? }elseif($programNum[0]=="4"){ ?>
			<div class="name-1"><a href="/facilities-certification/layout.php">FACILITIES & CERTIFICATION</a></div>
<? }elseif($programNum[0]=="5"){ ?>
			<div class="name-1"><a href="/public-relations/gallery.php">PUBLIC RELATIONS</a></div>
<? } ?>
			<span class="arr"><i class="fa-solid fa-angle-right"></i></span>
			<div class="name-2"><a href="<?=$uri?>"><?=$currentLocation?></a></div>
		</div><!-- location -->
	</div><!-- con -->
</div><!-- common_banner -->
<!-- 	<script> -->
<!--   function readyGo(){ -->
<!--     alert("준비중입니다."); -->
<!--   } -->
<!-- </script> -->