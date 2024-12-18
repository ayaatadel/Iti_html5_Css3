let range=document.getElementById("inputRange")

let rangeValue=document.getElementById("rangeValue")
// console.log(rangeValue);

range.addEventListener("input",function(){
    rangeValue.innerText="Range Value : "+range.value
})

let color=document.getElementById("color")

let colorValue=document.getElementById("colorValue")

color.addEventListener("input",function(){
    colorValue.innerText="color  : "+color.value
})
/** Mdeia tags action */
let audio=document.querySelector("audio");

function displayAudio()
{
    audio.play();
    audio.currentTime=3
}
function pasueAudio()
{
    audio.pause();
}
function stopAudio()
{
    audio.load();
    audio.pause();
}
function muteAudio()
{
    // toggle
    audio.muted=!audio.muted;
}
