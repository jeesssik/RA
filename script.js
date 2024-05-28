document.addEventListener('DOMContentLoaded', function() {
    // Configura la detección de la imagen marcadora usando AR.js
    AFRAME.registerComponent('markerhandler', {
        init: function() {
            // Configura el marcador para ser detectado
            var marker = document.querySelector('#marker');
            marker.addEventListener('markerFound', function() {
                // Elimina el contenido existente del contenedor AR
                var arContainer = document.getElementById('ar-container');
                arContainer.innerHTML = '';

                // Crea un elemento de video y configura su fuente
                var video = document.createElement('video');
                video.setAttribute('id', 'video');
                video.setAttribute('controls', '');
                var source = document.createElement('source');
                source.setAttribute('src', 'https://youtu.be/8_JbZvHc92U?si=Mf549g0RDC-0UdMK&t=6');
                source.setAttribute('type', 'video/mp4');
                video.appendChild(source);
                arContainer.appendChild(video);
            });
        }
    });
});