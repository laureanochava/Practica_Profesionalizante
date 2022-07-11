const menu = document.querySelector('.menuh'); 
const navegacion = document.querySelector('.navegacion'); 
const imagenes = document.querySelectorAll('img'); 
const btnTodos = document.querySelector('.todos');
const btnRopa = document.querySelector('.ropa');
const btnTazas = document.querySelector('.tazas');
const btnMates = document.querySelector('.mates');
const btnAcc = document.querySelector('.acc');

const contenedorArticulos = document.querySelector('.articulos');


document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    articulos(); 

});

const eventos =()=>{
    menu.addEventListener('click',abrirMenuh);
}

const abrirMenuh =()=> {
    navegacion.classList.remove('ocultar');
    botoCerrar();
}

const botoCerrar =()=> {
    const btnCerrar = document.createElement('p');
    const overley = document.createElement('div');
    overley.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return; 
    body.appendChild(overley);
    btnCerrar.textContent = 'x'; 
    btnCerrar.classList.add('btnCerrar');
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar, overley); 
}

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const imagen = entry.target; 
            observer.unobserve(imagen);
        }
    });
});

imagenes.forEach(imagen=>{
    imagen.src = imagen.dataset.src; 
    observer.observe(imagen); 
});

const cerrarMenu =(boton, overley)=> {
    boton.addEventListener('click',()=>{
       navegacion.classList.add('ocultar'); 
       overley.remove(); 
       boton.remove();
    });

    overley.onclick = function(){
        overley.remove(); 
        navegacion.classList.add('ocultar');
        boton.remove();
    } 
}

const articulos = () => {
    let articulosArreglo = []; 
    const articulos = document.querySelectorAll('.articulo');  
    articulos.forEach(articulo => articulosArreglo = [...articulosArreglo,articulo] );
    const ropa = articulosArreglo.filter(ropa => ropa.getAttribute('data-articulo') === 'ropa'); 
    const tazas = articulosArreglo.filter(tazas => tazas.getAttribute('data-articulo') === 'tazas'); 
    const mates = articulosArreglo.filter(mates => mates.getAttribute('data-articulo') === 'mates'); 
    const acc = articulosArreglo.filter(acc => acc.getAttribute('data-articulo') === 'acc'); 

    mostrarArticulos(ropa, tazas, mates, acc); 
}

const mostrarArticulos = (ropa, tazas, mates, acc) =>{
        btnRopa.addEventListener('click', ()=>{
            ropa.forEach(ropa=> contenedorArticulos.appendChild(ropa));
    })
}