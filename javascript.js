//menu
var btnMenu = $(".btn-menu");
var menu = $("nav .menu ul");

function klikmenu() {
	btnMenu.click(function () {
		menu.toggle();
	});
	menu.click(function () {
		menu.toggle();
	});
}

$(document).ready(function () {
	var width = $(window).width();
	if(width < 990) {
		klikmenu();
	}
})

//lebar
$(window).resize(function(){
	var width = $(window).width();
	if(width > 989){
		menu.css("display","block");
	} else {
		menu.css("display","none");
	}
	klikMenu();
});

//efek scroll
$(document).ready(function () {
	var scroll_pos = 0;
	$(document).scroll(function(){
		scroll_pos = $(this).scrollTop();
		if(scroll_pos > 0){
			$("nav").addClass("putih");
			$("nav img.hitam").show();
			$("nav img.putih").hide();
		} else {
			$("nav").removeClass("putih");
			$("nav img.hitam").hide();
			$("nav img.putih").show();
		}
	})
})

//hide and show elemen
var div = document.getElementById('hongjoong');
var display = 0;

function hideShow()
{
	if(display == 1)
	{
		div.style.display = 'block';
		display = 0;
	}
	else
	{
		div.style.display = 'none'
		display = 1;
	}
}
