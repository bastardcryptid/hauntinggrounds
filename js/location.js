$(document).ready(function(){
	
	var mapgifurls = ["../images/map-gif-closed.png", "../images/map-gif-open.gif", "../images/map-gif-close.gif"];

	$(".map").on("mouseenter", function(){
		$(".map").toggleClass("open");
		var mapGifOpen = setTimeout(changeMenuPic, 100, 1);
		$(".map").on("mouseleave", function(){
			clearTimeout(mapGifOpen);
		});
	});

	$(".map").on("mouseleave", function(){
		$(".map").toggleClass("open");
		var mapGifClose = setTimeout(changeMenuPic, 100, 2);
		$(".map").on("mouseenter", function(){
			clearTimeout(mapGifClose);
		});
	});

	$(".map").on("click", function(){
		console.log("yo");
		location.href = 'map.html';
	});

	function changeMenuPic(index, callback){
		$(".map")[0].src = mapgifurls[index];
	};

	var goodOptions = results.goodOptions;
	var badOptions = results.badOptions;


	var d20Urls = [
	"../images/d20/d20-1.png",
	"../images/d20/d20-2.png",
	"../images/d20/d20-3.png",
	"../images/d20/d20-4.png",
	"../images/d20/d20-5.png",
	"../images/d20/d20-6.png",
	"../images/d20/d20-7.png",
	"../images/d20/d20-8.png",
	"../images/d20/d20-9.png",
	"../images/d20/d20-10.png",
	"../images/d20/d20-11.png",
	"../images/d20/d20-12.png",
	"../images/d20/d20-13.png",
	"../images/d20/d20-14.png",
	"../images/d20/d20-15.png",
	"../images/d20/d20-16.png",
	"../images/d20/d20-17.png",
	"../images/d20/d20-18.png",
	"../images/d20/d20-19.png",
	"../images/d20/d20-20.png",
	]

	$(".answer").on("click", function(){
		var rollForIt = Math.floor(Math.random()*20);
		var rollOfDice = rollTheDice(rollForIt);
		var index = $(".answer").index(this);
		$(".answer, .question").css ("display", "none");
		if (rollForIt<10){
			var result = $("<div class='text'>" + badOptions[index] + "</div>");
			$(".cyoa").append(result);
		} else {
			var result = $("<div class='text'>" + goodOptions[index] + "</div>");
			$(".cyoa").append(result);
		}
		var d20img = $("<div class='dice text'><img class='d20' alt='A d20 die landed on " + rollForIt + "' src='" + rollOfDice + "''></div>");
		$("body").append(d20img);
	});

	function rollTheDice(index){
		return d20Urls[index];
	}

})