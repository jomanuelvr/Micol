document.getElementById('controlButton').addEventListener('click', function() {
    const element = document.documentElement;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari y Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // Internet Explorer/Edge
      element.msRequestFullscreen();
    }
  });
document.getElementById('sinMusica').addEventListener('click', function() {
    const element = document.documentElement;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari y Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // Internet Explorer/Edge
      element.msRequestFullscreen();
    }
  });

  document.getElementById('exitFull').addEventListener('click', function() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  });