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

/*	var goodOptions = [
	"<p>You jump into the water to try to scare the fish. Frightened, they scatter in all directions like waterdrops. You remember watching icicles melt, waterdrops falling into a puddle underneath and splattering prettily. Your spirits are lifted.</p>", 
	"<p>You scatter some hardtack crumbs around for the seagulls. A few rush over and start pecking at them. One butts your noncorporeal hand affectionately before offering you a small shell held in its beak. You remember hunting for shells on beaches while you were alive. Your spirits are lifted.</p>", 
	"<p>You sit down to watch the waves softly beat against the rusted metal. A refreshing breeze passes through you, wheezing as it passes through metal tubing of the ship. It almost sounds like a melody you half-remember from your childhood. Your spirits are lifted.</p>"];
	var badOptions = [
	"<p>You jump into the water to try to scare the fish. One of them tries to bite you. Its mouth passes through you. You remember that you will never experience being alive and corporeal again. You are struck with nostalgia for your days of life.</p>", 
	"<p>You scatter some hardtack crumbs around for the seagulls. A few rush over but by the time they get to you, the hardtack has soaked in saltwater and attracted fish. The fish are too quick, and none of the seagulls get any hardtack nor catch any fish. One of the birds tries to peck at your knee. You remember the saying 'no good deed goes unpunished' and are filled with regret.</p>", 
	"<p>You sit down to watch the waves softly beat against the rusted metal. You are startled by a loud ocean liner whistle. You whip your non-head around and see a large cruise ship passing by and sending a large wave your way. It beats against the side of the sunken ship, making it careen to the side. It gets terribly uncomfortable to sit, even for a ghost. You are irritated and displeased.</p>"];
*/
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
		var d20img = $("<div class='dice text'><img class='d20' src=" + rollOfDice + "></div>");
		$("body").append(d20img);
	});

	function rollTheDice(index){
		return d20Urls[index];
	}

})