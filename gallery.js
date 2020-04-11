var famp = document.getElementById("famp");
var mov = document.getElementById("mov");
famp.style.display = "none";
var movie_button = document.getElementById("movb11");
var fav_button = document.getElementById("fampb11");
movie_button.addEventListener("click",function(){
	famp.style.display = "none";
	mov.style.display = "block";
})
fav_button.addEventListener("click",function(){
	famp.style.display = "block";
	mov.style.display = "none";
})