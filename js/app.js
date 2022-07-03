const menu = document.querySelector('.menuh'); 
const navegacion = document.querySelector('.navegacion'); 

document.addEventListener('DOMContentLoaded',()=>{
    eventos();

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