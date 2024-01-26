document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const botonPlay = document.getElementById('playButton');

    botonPlay.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }    });
});

