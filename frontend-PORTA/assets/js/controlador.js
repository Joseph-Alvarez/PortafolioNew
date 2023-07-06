var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
  var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
    return new bootstrap.Offcanvas(offcanvasEl)
  })

  
const opciones = document.querySelectorAll('.opciones');
opciones.forEach(opcion => {
  opcion.addEventListener('click', function() {
    opciones.forEach(o => o.classList.remove('select-opt'));
    this.classList.add('select-opt');
  });
});

window.onload = function() {
  const redes = document.querySelectorAll('.redes');
  redes.forEach(red => {
    red.addEventListener('mouseover', () => {
      red.classList.add('resaltado');
    });
    red.addEventListener('mouseout', () => {
      red.classList.remove('resaltado');
    });
  });

}

const offcanvas = document.getElementById('navbarNav');
const elementosNavegacion = offcanvas.querySelectorAll('.nav-item');
elementosNavegacion.forEach(elemento => {
  elemento.addEventListener('click', function() {
    const offcanvasBootstrap = bootstrap.Offcanvas.getInstance(offcanvas);
    offcanvasBootstrap.hide();
  });
});



    const HOME = 1;
    const LENGUAJES = 2;
    const JUEGOS = 3;
    const APLICACIONES = 4;
    const PROGRAMAS = 5;
    
    const cambiarVentana = (opciones) => {
      switch (opciones) {
        case HOME:
          console.log('Visualizar home');
          document.getElementById('contenido-1').style.display = "block";
          document.getElementById('contenido-2').style.display = "none";
          document.getElementById('contenido-3').style.display = "none";
          document.getElementById('contenido-4').style.display = "none";
          document.getElementById('contenido-5').style.display = "none"; 
          break;
        case LENGUAJES:
          console.log('Visualizar lenguajes');
          document.getElementById('contenido-1').style.display = "none";
          document.getElementById('contenido-2').style.display = "block";
          document.getElementById('contenido-3').style.display = "none";
          document.getElementById('contenido-4').style.display = "none";
          document.getElementById('contenido-5').style.display = "none"; 
          break;
        case JUEGOS:
          console.log('Visualizar juegos');
          document.getElementById('contenido-1').style.display = "none";
          document.getElementById('contenido-2').style.display = "none";
          document.getElementById('contenido-3').style.display = "block";
          document.getElementById('contenido-4').style.display = "none";
          document.getElementById('contenido-5').style.display = "none"; 
          break;
        case APLICACIONES:
          console.log('Visualizar aplicaciones');
          document.getElementById('contenido-1').style.display = "none";
          document.getElementById('contenido-2').style.display = "none";
          document.getElementById('contenido-3').style.display = "none";
          document.getElementById('contenido-4').style.display = "block";
          document.getElementById('contenido-5').style.display = "none"; 
          break;
        case PROGRAMAS:
          console.log('Visualizar programas');
          document.getElementById('contenido-1').style.display = "none";
          document.getElementById('contenido-2').style.display = "none";
          document.getElementById('contenido-3').style.display = "none";
          document.getElementById('contenido-4').style.display = "none";
          document.getElementById('contenido-5').style.display = "block"; 
          break;
        default:
          break;
      }
    }


    const images = document.querySelectorAll('.web');

    images.forEach(image => {
      image.addEventListener('click', () => {
        if (image.classList.contains('active')) {
          image.classList.remove('active');
        } else {
          images.forEach(img => img.classList.remove('active'));
          image.classList.add('active');
        }
      });
    });
    

    $(document).ready(function() {
      $('.switch input').change(function() {
        var isNightMode = $(this).is(':checked');
        if (isNightMode) {
          $('#particles-js').addClass('night-mode');
        } else {
          $('#particles-js').removeClass('night-mode');
        }
      });
    });
    