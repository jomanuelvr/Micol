document.getElementById('playButton').addEventListener('click', function() {
    // Abre la ventana modal
    var myModal = new bootstrap.Modal(document.getElementById('modalInvitado'));
    myModal.show();

    // Resto del código para reproducir/pausar el audio
    var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});