var button = document.getElementById('startbutton');
var buttontwo =document.getElementById('startbutton2');

buttontwo.addEventListener('mousedown', playAudio);
button.addEventListener('mousedown', playAudio);

function playAudio() {
    var audio = document.getElementById('audio');
    audio.play();
    console.log('hi');
}
