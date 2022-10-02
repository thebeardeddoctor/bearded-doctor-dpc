const parallax= document.querySelector(".quote-flex");

const change = document.getElementById("change");

window.addEventListener("scroll" , function()
{
 let offset=window.scrollY;
 console.log(offset)
 if (offset>=91){
  change.style.color="black";
 }
 else {
  change.style.color="white";
 }
})
window.addEventListener("scroll", function()
{
 let offset= window.pageYOffset;
 parallax.style.backgroundPositionY= offset * 0.7 + "px";
 console.log(offset)

});

