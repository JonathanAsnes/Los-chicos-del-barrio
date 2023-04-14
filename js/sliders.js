
let index = 1;
showSlides(index);

function nextSlide(n){
    showSlides(index+=n);
}

function positionSlide(n){
    showSlides(index-=n);
}
setInterval(function time(){
    showSlides(index+=1)
},5000);

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('mySlider');
    let bars = document.getElementsByClassName('bar');

    if(n > 3){
        index = 1;
    }
    if(n < 1){
        index = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < bars.length; i++){
        bars[i].className = bars[i].className.replace(" active", "");
    }

    slides[index-1].style.display = 'block';
    bars[index-1].className += ' active';

}

let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSlides(indice+=n);
}

function posicionSlide(n){
    muestraSlides(indice-=n);
}
setInterval(function tiempo(){
    muestraSlides(indice+=1)
},5000);
function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barras = document.getElementsByClassName('barra');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';

}