$(".tbox .big").click(function(){
    // var pofolIdx = $(".tbox").index(this);
    var val = $(this).parent().data("val");
    var name = $(this).parent().data("name");
    var url = $(this).parent().data("url");
    pofolPopup(val, name, url);
});

function pofolPopup(val, name, url) {
	var result =
	{
		url : "/popup/popup.php",
		type : "POST",
        data: { val : val, name : name, url : url },
		// dataType : "html",
		async : true,
		success : returnPopSuccess
	};

	$.ajax(result);
}

function returnPopSuccess(msg) {
	document.getElementById("pop_wrap").innerHTML = msg;
	pop_toggle('open');
	$(".searchResultListBox").mCustomScrollbar({
		 theme:"light",
         mouseWheelPixels: 200,
		scrollInertia:500
	});
}

function pop_toggle(n){
        if (n == "close") {
            $("html").css("overflow-y","auto");
			$(".hidden_box").removeClass("on");
            setTimeout(function() {
				$("#pop_wrap").hide();
			}, 500);
        }
        if (n == "open")
        {
            $("html").css("overflow-y","hidden");
            $("#pop_wrap").show();
			setTimeout(function() {
				$(".hidden_box").addClass("on");
			}, 100);
        }
    }
