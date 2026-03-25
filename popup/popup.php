<?php
	$val = isset($_REQUEST["val"]) ? $_REQUEST["val"] : "";
	$name = isset($_REQUEST["name"]) ? $_REQUEST["name"] : "";
	$url   = isset($_REQUEST["url"]) ? $_REQUEST["url"] : "";
?>

<div class="modal">
	<div class="hidden_box">
		<div class="btn_close" onclick="pop_toggle('close');">X</div>
		<div class="img searchResultListBox"><img src="/assets/portfolio/site<?=$val?>.webp" /></div>
		<div class="txt">
			<?=$name?> <br>
			<a href="<?=$url?>" target="_blank"><?=$url?></a>
		</div>
	</div><!-- hidden_box -->
	<a href="javascript:pop_toggle('close')" class="close" >
		<div class="modalbg"></div>
	</a>
</div>
