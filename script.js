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
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        var video = document.getElementById('video');
        video.srcObject = stream;
        video.onloadedmetadata = function(e) {
            video.play();
        };
    })
    .catch(function(err) {
        console.error('Error al acceder a la cámara: ', err);
    });

    navigator.mediaDevices.getUserMedia({
        video: {
            facingMode: { exact: 'environment' } // 'environment' para la cámara trasera
        }
    })
    .then(function(stream) {
        var video = document.getElementById('video');
        video.srcObject = stream;
        video.onloadedmetadata = function(e) {
            video.play();
        };
    })
    .catch(function(err) {
        console.error('Error al acceder a la cámara: ', err);
    });
    
});