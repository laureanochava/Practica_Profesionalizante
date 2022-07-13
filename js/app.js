const menu = document.querySelector('.menuh'); 
const navegacion = document.querySelector('.navegacion'); 
const imagenes = document.querySelectorAll('img'); 

const btnTodos = document.querySelector('.todos');
const btnRopa = document.querySelector('.ropa');
const btnTazas = document.querySelector('.tazas');
const btnMates = document.querySelector('.mates');
const btnAcc = document.querySelector('.acc');

const contenedorArticulos = document.querySelector('.catalogo');


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
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen);
        }
    });
});

imagenes.forEach(imagen=>{
     
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

    const ropa2 = articulosArreglo.filter(ropa => ropa.getAttribute('data-articulo') === 'ropa1'); 
    const tazas2 = articulosArreglo.filter(tazas => tazas.getAttribute('data-articulo') === 'tazas1'); 
    const mates2 = articulosArreglo.filter(mates => mates.getAttribute('data-articulo') === 'mates1'); 
    const acc2 = articulosArreglo.filter(acc => acc.getAttribute('data-articulo') === 'acce1'); 

    mostrarArticulos(ropa2, tazas2, mates2, acc2, articulosArreglo); 
}

const mostrarArticulos = (ropa2, tazas2, mates2, acc2, todos) =>{
        btnRopa.addEventListener('click', ()=>{
            limpiarHtml(contenedorArticulos); 
            ropa2.forEach(ropa=> contenedorArticulos.appendChild(ropa)); 
          });
          btnTazas.addEventListener('click', ()=>{
            limpiarHtml(contenedorArticulos); 
            tazas2.forEach(tazas=> contenedorArticulos.appendChild(tazas)); 
          });
          btnMates.addEventListener('click', ()=>{
            limpiarHtml(contenedorArticulos); 
            mates2.forEach(mates=> contenedorArticulos.appendChild(mates)); 
          });
          btnAcc.addEventListener('click', ()=>{
            limpiarHtml(contenedorArticulos); 
            acc2.forEach(acc=> contenedorArticulos.appendChild(acc)); 
          });
          btnTodos.addEventListener('click', ()=>{
            limpiarHtml(contenedorArticulos); 
            todos.forEach(todo=> contenedorArticulos.appendChild(todo)); 
          });
}

const limpiarHtml = (contenedor) =>{
    while (contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);


    }
}