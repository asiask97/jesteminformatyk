var button = document.getElementById('startbutton');

button.addEventListener('mouseover', playAudio);

function playAudio() {
    var audio = document.getElementById('audio');
    audio.play();
    console.log('hi');
}