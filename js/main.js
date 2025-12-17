document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cita');
    const mensaje = document.getElementById('mensaje');

    form.addEventListener('submit', function (event) {
        event.preventDefault();//Evita que el formulario se mande de forma tradicional

        //Obtener valores del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const telefono = document.getElementById('telefono').value.replace(/\s+/g, "");
        const especialidad = document.getElementById('especialidad').value;

        //Validacion del formulario
        if (nombre === "" || telefono === "" || especialidad === "") {
            mensaje.textContent = "Error: Por favor completa los campos vacios.";
            mensaje.style.color = 'red';
            mensaje.style.fontSize = '25px';
            mensaje.style.backgroundColor = 'white';
            mensaje.style.border = '10px solid white';
            mensaje.style.borderRadius = '10px';
            return;
        }

        //Validar que el nombre solo contenga letras, espacios y puntos en caso de ser necesario
        const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s\.]+$/;
        if (!regexNombre.test(nombre)) {
            mensaje.textContent = "Error: El nombre solo debe contener letras.";
            mensaje.style.color = "red";
            mensaje.style.fontSize = '25px';
            mensaje.style.backgroundColor = 'white';
            mensaje.style.border = '10px solid white';
            mensaje.style.borderRadius = '10px';
            return;
        }

        //Validar el formato del telefono
        if (telefono.length < 8) {
            mensaje.textContent = "Error: El teléfono parece estar incompleto.";
            mensaje.style.color = "red";
            mensaje.style.fontSize = '25px';
            mensaje.style.backgroundColor = 'white';
            mensaje.style.border = '10px solid white';
            mensaje.style.borderRadius = '10px';
            return;
        }

        if (isNaN(Number(telefono))) {
            mensaje.textContent = "Error: Escribe un numero de teléfono válido.";
            mensaje.style.color = "red";
            mensaje.style.fontSize = '25px';
            mensaje.style.backgroundColor = 'white';
            mensaje.style.border = '10px solid white';
            mensaje.style.borderRadius = '10px';
            return;
        }

        //Simulacion de envio exitoso
        mensaje.textContent = `Cita agendada para el paciente: ${nombre}, tel. ${telefono}, para ${especialidad}`;
        mensaje.style.color = 'green';
        mensaje.style.fontSize = '25px';
        mensaje.style.backgroundColor = 'white';
        mensaje.style.border = '10px solid white';
        mensaje.style.borderRadius = '10px';

        //Limpieza del formulario 
        form.reset();
    });
});

// Efecto de scroll para elementos
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = entry.target.dataset.animation || 'fadeIn 0.8s ease-out forwards';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Aplicar observador a elementos con clase animate
    document.querySelectorAll('.contact-item').forEach(item => {
      observer.observe(item);
    });

    // Efecto ripple al hacer click en contactos
    document.querySelectorAll('.contact-item').forEach(item => {
      item.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(245, 44, 44, 0.5)';
        ripple.style.animation = 'rippleEffect 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
      });
    });

    // Animación de números para estadísticas (si las hay)
    function animateValue(element, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    // Efecto de brillo en los títulos
    document.querySelectorAll('h1, h2').forEach(title => {
      title.style.cursor = 'pointer';
      title.addEventListener('mouseover', function() {
        this.style.textShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
      });
      title.addEventListener('mouseout', function() {
        this.style.textShadow = 'none';
      });
    });

    // Efecto de desplazamiento suave
    document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    });

    // Contador de visitas (almacenado localmente)
    function initVisitCounter() {
      const visitCount = localStorage.getItem('visitCount') || 0;
      const newCount = parseInt(visitCount) + 1;
      localStorage.setItem('visitCount', newCount);
      console.log(`Visita número: ${newCount}`);
    }
    initVisitCounter();

    // Animación de fondo en tiempo real
    const header = document.querySelector('header');
    document.addEventListener('mousemove', function(e) {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      header.style.backgroundPosition = `${x}% ${y}%`;
    });