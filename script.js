let contadorVisitas = document.getElementById('contadorVisitas');
let visitas = localStorage.getItem('visitas');
visitas = visitas ? parseInt(visitas) + 1 : 1;
contadorVisitas.textContent = visitas;
localStorage.setItem('visitas', visitas);

const menuButton = document.getElementById('botondemenu');
const sidebar = document.getElementById('sidebar');

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target) && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
    }
});

document.addEventListener('scroll', () => {
    const inicio = document.querySelector('.Inicio');
    if (window.scrollY > 100) { 
        inicio.classList.add('scrolled');
    } else {
        inicio.classList.remove('scrolled');
    }
});