const slides = document.querySelector(".slides");
const imagens = document.querySelectorAll(".slide");

const anterior = document.querySelector(".btn-prev");
const proximo = document.querySelector(".btn-next");

const dots = document.querySelectorAll(".dot");


let indice = 0;


function mostrarSlide(){

    slides.style.transform = 
    `translateX(-${indice * 100}%)`;


    dots.forEach(dot=>{
        dot.classList.remove("active");
    });


    dots[indice].classList.add("active");

}



// Próximo

proximo.addEventListener("click",()=>{

    indice++;


    if(indice >= imagens.length){

        indice = 0;

    }


    mostrarSlide();

});



// Anterior

anterior.addEventListener("click",()=>{


    indice--;


    if(indice < 0){

        indice = imagens.length - 1;

    }


    mostrarSlide();


});



// Bolinhas

dots.forEach((dot,posicao)=>{


    dot.addEventListener("click",()=>{


        indice = posicao;


        mostrarSlide();


    });


});



// Troca automática

setInterval(()=>{


    indice++;


    if(indice >= imagens.length){

        indice = 0;

    }


    mostrarSlide();


},5000);