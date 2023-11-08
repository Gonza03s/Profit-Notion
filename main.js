let boton = document.querySelector('.menu_drop');
let contenedor = document.querySelector('.navbar');
let enlaceAncla = document.querySelectorAll('.navbar a');
let hero = document.querySelector('.general__content');
let navbar = document.querySelector('.navbar');

function handleScroll()
{
	let heroBottom = hero.getBoundingClientRect().bottom; 

	if(window.scrollY > heroBottom)
	{
		navbar.classList.add('sticky');
	}
	else
	{
		navbar.classList.remove('sticky');
	}

}

var typed = new Typed('.typed', 
{
	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, 
	startDelay: 300, 
	backSpeed: 75, 
	smartBackspace: true, 
	shuffle: false, 
	backDelay: 1500, 
	loop: true, 
	loopCount: false, 
	showCursor: true, 
	cursorChar: '|', 
	contentType: 'html', 
});

function revealElement(selector, options) {
	ScrollReveal().reveal(selector,
	{
		origin: options.origin,
		distance: options.distance,
		duration: options.duration ,
		reset: false,
		delay: options.delay
	});
	}
	
	
	revealElement('.titulo_h1', { origin: 'left', distance: '85px', duration:1300 , delay: 100 });
	revealElement('.nav_txt_description', { origin: 'left', distance: '85px', duration:1300 , delay: 100 });

	revealElement('.general__content', { origin: 'top', distance: '80px', duration:1500 , delay: 100 });
	revealElement('.results_txt', { origin: 'left', distance: '80px', duration:1500 , delay: 100 });
	revealElement('.protein__content', { origin: 'top', distance: '80px', duration:1500 , delay: 100 });
	revealElement('.socialMedia__container', { origin: 'left', distance: '80px', duration:1500 , delay: 100 });
	revealElement('.change__container', { origin: 'top', distance: '80px', duration:1500 , delay: 100 });

boton.addEventListener("click",()=>
{
	contenedor.classList.toggle('show');

    if (contenedor.classList.contains('show')) 
    {
        boton.innerHTML = '<i class="bx bx-x"></i>'; //carga la X 
    } 
    else 
    {
        boton.innerHTML = '<i class="bx bx-menu"></i>'; //cuando no contenga show carga el icono-menu
    }
});

enlaceAncla.forEach((enlace)=>
{
	enlace.addEventListener("click",()=>
	{
		contenedor.classList.remove('show');
	})
});

// Llama a handleScroll cuando se carga la página para inicializar el estado del navbar
document.addEventListener('DOMContentLoaded', handleScroll);

// Llama a handleScroll en el evento scroll
window.addEventListener('scroll', handleScroll);