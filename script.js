document.addEventListener('DOMContentLoaded', function(){
const stickmen = document.querySelector('.correndo');
const armadilha = document.querySelector('.armadilha')
let pulando = false

function jump(){
    if(!pulando){
    pulando = true
    stickmen.classList.remove('correndo');
    stickmen.classList.add('pulando');
    setTimeout(() => {
        stickmen.classList.remove('pulando');
        stickmen.classList.add('correndo');
        pulando = false
    }, 500);
}
}

const loop = setInterval(() => {

const posicaoarmadilha = armadilha.offsetLeft;
const posicaostickmen = +window.getComputedStyle(stickmen).bottom.replace('px','');


if(posicaoarmadilha<=115 && posicaoarmadilha > 0 && posicaostickmen<50 ){
    armadilha.style.animation = 'none'
    armadilha.style.left  = '95px';
    stickmen.style.animation = 'none'
   stickmen.style.left  = '50px';
   stickmen.style.bottom  = '50px';
   alert(`Você perdeu! Sua pontuacao foi de : ${pontos} Recarregue a pagina para jogar novamente`);
   clearInterval(loop)
   clearInterval(contador)
}
},10)

document.addEventListener('keydown', jump);

let pontos = 0;
const tempo = document.getElementById('pontos')
const contador = setInterval(() =>{
    pontos++
    tempo.innerText = `${pontos}`; 
}, 50);





});

