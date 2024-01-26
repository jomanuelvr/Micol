document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('controlButton').addEventListener('click', function() {
        let audio = document.getElementById('audio');
        audio.play();
    });
});