var button = document.getElementById('startbutton');
var buttontwo =document.getElementById('startbutton2');
var buttonthree = document.getElementById('startbutton3');

buttontwo.addEventListener('mousedown', playAudio);
button.addEventListener('mousedown', playAudio);
buttonthree.addEventListener('mousedown', playAudio);

function playAudio() {
    var audio = document.getElementById('audio');
    audio.play();
    console.log('hi');
}
