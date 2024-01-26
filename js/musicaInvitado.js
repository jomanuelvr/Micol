document.getElementById('playButton').addEventListener('click', function() {
   
    let audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});