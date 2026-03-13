<div class="scrolltop"><img src="/assets/images/scrolltop.png" alt="back to top" title="back to top"></div>
<script>
	var browserH = window.innerHeight;
	$(window).scroll(function(){
		if ($(window).scrollTop() > browserH) {
			$('.scrolltop').show();
		}else{
			$('.scrolltop').hide();
		}
	});
	$(".scrolltop").click(function(){
		$("html, body").stop().animate({ scrollTop: "0" });
	});

$(function(){
	$(".fdropbox").on("click",function(){
		$(".fdropbox-value").slideToggle();
		$(this).toggleClass("on");
	});
	$(document).mouseup(function (e){
		var fdropbox = $(".fdropbox");
		if(fdropbox.has(e.target).length === 0){
			fdropbox.removeClass("on");
			$(".fdropbox-value").slideUp();
		}
	});
});
</script>

<div id="footer" class="<?=$CurrentPage?>">
	<div class="ftop">
		<div class="con">
			<div class="flogo"><img src="/assets/images/logo-daesang-footer.png" alt=""></div>
			<div class="left">
				<div class="companyinfo">
					<div class="col"><span>ADD</span> (58460) 235, Nabul-ro, <br>Samho-eup, Yeongam-gun, <br>Jeollanam-do, Korea</div>
					<div class="col"><span>TEL</span> +82-61-460-1800</div>
					<div class="col"><span>FAX</span> +82-61-460-1898</div>
					<div class="col"><span>MAIL</span> dshi1800@mdshi.com</div>
				</div>
			</div><!-- left -->
			<div class="right">
				<div class="fsitemap">
					<dl>
						<dt><a href="/about-us/message.php">ABOUT US</a></dt>
					</dl>
					<dl>
						<dt><a href="/hull-block/aft-body.php">HULL BLOCK</a></dt>
					</dl>
					<dl>
						<dt><a href="/plant/semi-rig.php">PLANT</a></dt>
					</dl>
					<dl>
						<dt><a href="/facilities-certification/layout.php">FACILITIES & CERTIFICATION</a></dt>
					</dl>
					<dl>
						<dt><a href="/public-relations/gallery.php">PUBLIC RELATIONS</a></dt>
					</dl>
				</div>
			</div><!-- right -->
		</div>
	</div><!-- ftop -->
	<div class="fbot">
		<div class="con">
			<div class="copyright">Copyright ⓒ <span>2022 DAESANG</span> ALL RIGHTS RESERVED.</div>
		</div>
	</div><!-- fbot -->
</div><!-- #footer -->