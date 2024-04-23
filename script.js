const cont = document.getElementById('contenedorDeRayas');
const raya1 = document.querySelector('.raya1');
const raya2 = document.querySelector('.raya2');
const menu = document.getElementById('menu')
const body = document.body;

cont.addEventListener('click', cambiar)
let cambiante = 1;

function cambiar() {
    if(cambiante===1){
        raya1.classList.remove('raya1')
        raya1.classList.add('raya1invertido')

        raya2.classList.remove('raya2')
        raya2.classList.add('raya2invertido')

        menu.style.top='-35px'

        cambiante=2;
    }else{
        raya1.classList.remove('raya1invertido')
        raya1.classList.add('raya1')
        
        raya2.classList.remove('raya2invertido')
        raya2.classList.add('raya2')
        
        menu.style.top='-860px'
        
        cambiante=1;
    }
}


