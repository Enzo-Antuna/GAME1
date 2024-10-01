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

function jogar(){ 
armadilha.style.animation = '';
armadilha.style.left = '';
stickmen.style.animation = '';
stickmen.style.left = '';
stickmen.style.bottom = '';
pontos = 0;
tempo.innerText = `${pontos}`;
const contador = setInterval(() =>{
    pontos++
    tempo.innerText = `${pontos}`; 
}, 50);

const loop = setInterval(() => {

    const posicaoarmadilha = armadilha.offsetLeft;
    const posicaostickmen = +window.getComputedStyle(stickmen).bottom.replace('px','');
    
    if(pontos>1000 && posicaoarmadilha < 10  ){
        armadilha.classList.remove('armadilha');
    armadilha.classList.add('armadilha2');
    }
    
    
    if(posicaoarmadilha<=115 && posicaoarmadilha > 0 && posicaostickmen<50 ){
        armadilha.style.animation = 'none'
        armadilha.style.left  = '95px';
        stickmen.style.animation = 'none'
       stickmen.style.left  = '50px';
       stickmen.style.bottom  = '50px';
       alert(`Você perdeu! Sua pontuacao foi de : ${pontos}`);
       clearInterval(loop)
       clearInterval(contador)
       armadilha.classList.remove('armadilha2');
    armadilha.classList.add('armadilha');
       if( pontos>pontosm){
        pontosm = pontos
        maximo.innerText = `Pontos maximos : ${pontosm}`
    }
    }
    },10)

    


}
const loop = setInterval(() => {

const posicaoarmadilha = armadilha.offsetLeft;
const posicaostickmen = +window.getComputedStyle(stickmen).bottom.replace('px','');
if(pontos>1000 && posicaoarmadilha < 10 ){
    armadilha.classList.remove('armadilha');
armadilha.classList.add('armadilha2');
}

if(posicaoarmadilha<=115 && posicaoarmadilha > 0 && posicaostickmen<50 ){
    armadilha.style.animation = 'none'
    armadilha.style.left  = '95px';
    stickmen.style.animation = 'none'
   stickmen.style.left  = '50px';
   stickmen.style.bottom  = '50px';
   alert(`Você perdeu! Sua pontuacao foi de : ${pontos}`);
   clearInterval(loop)
   clearInterval(contador)
   armadilha.classList.remove('armadilha2');
    armadilha.classList.add('armadilha');
   if(pontos>pontosm){
    pontosm = pontos
    maximo.innerText = `Pontos maximos : ${pontosm}`
}
}
},25)

document.addEventListener('keydown', jump);

let pontos = 0;
const tempo = document.getElementById('pontos')
const contador = setInterval(() =>{
    pontos++
    tempo.innerText = `${pontos}`; 
}, 50);

let pontosm = 0;
const maximo = document.getElementById('pontosm')
if(pontos>pontosm){
    pontosm = pontos
    maximo.innerText = `Pontos maximos : ${pontosm}`
}

let botao = document.querySelector('#jogar')
botao.addEventListener('keydown', (event) => {
    event.preventDefault();
});
botao.addEventListener("click", () =>{
    jogar()
    
})








});

