document.getElementById('copiarAlias').addEventListener('click', function() {
    // Selecciona el texto del párrafo
    let textoACopiar = document.getElementById('alias');
    let seleccion = window.getSelection();
    let rango = document.createRange();
    rango.selectNodeContents(textoACopiar);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);

    // Intenta copiar el texto al portapapeles
    try {
        document.execCommand('copy');
        // Muestra un mensaje visual
        let mensajeCopiado = document.getElementById('mensajeCopiado');
        mensajeCopiado.style.display = 'block';
        mensajeCopiado.textContent = 'Alias copiado';
        // Borra el mensaje después de unos segundos
        setTimeout(function() {
            mensajeCopiado.style.display = 'none';
            mensajeCopiado.textContent = '';
        }, 2000);
    } catch (err) {
        console.error('No se pudo copiar el texto al portapapeles', err);
    }

    // Limpia la selección
    seleccion.removeAllRanges();
});