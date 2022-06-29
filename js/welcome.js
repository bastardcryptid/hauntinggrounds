$(document).ready(function(){

	var clicks = 0;
	var welcomeText = ["<p>'Haunting Grounds,' by Kai Moiseev, photographs courtesy of Anton Moiseev. The map of Haunting Grounds by Kai Moiseev uses <a href='https://www.texturepalace.com/46-great-vintage-book-texture/'>old book texture</a> by <a href='https://www.texturepalace.com/author/admin/'>Sab</a>, licenced under <a href='https://creativecommons.org/licenses/by/4.0/'>CC BY 4.0</a>.</p>", "<p>Welcome to the afterlife. You're a ghost! And these are your Haunting Grounds. How will you spend your days? Will you cause mischief or will you relax and enjoy your days of unlife?</p>", "<p>You decide! Choose a spot to haunt:</p>"];
	
	$(".welcome, .blur").on("click", function(){
		if (clicks==3){
			$(".blur").css ("display", "none");
			$(".welcome").css ("display","none");
		} else {
			$(".welcome")[0].innerHTML = welcomeText[clicks];
			clicks++;
		};
	});

})