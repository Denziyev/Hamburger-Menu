const hamburger=document.getElementById("svg2");
const close=document.getElementById("svg1");
const card=document.getElementById("divv");

hamburger.addEventListener("click",()=>{
    card.style.left="0px"
});

close.addEventListener("click",()=>{
    card.style.left="-400px"
});