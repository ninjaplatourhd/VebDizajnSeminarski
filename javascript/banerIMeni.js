const folderSlika = 'slike/baneri/';
const brojSlika = 3;
let indeksSlike = 1;
let banerElement = document.getElementById('banerSekcija');
let interval;

function selektujSliku(indeks) {
    banerElement.style.backgroundImage = `url('${folderSlika}baner${indeks}.png')`;

}

function promeniSlikuBanera(pomeraj) {
    indeksSlike += pomeraj;

    if(indeksSlike<1)
        indeksSlike=brojSlika;
    else if(indeksSlike>brojSlika)
        indeksSlike=1;

    selektujSliku(indeksSlike);
    resetujInterval();
}

function resetujInterval() {
    clearInterval(interval);
    interval = setInterval(() => promeniSlikuBanera(1), 10000);
}

window.onload = function() {
    selektujSliku(indeksSlike);
    interval = setInterval(() => promeniSlikuBanera(1), 10000);
};


let meniIkonica = document.getElementById('hamburger');

let meni = document.getElementById('meni');


let stanje = meni.style.display;


meniIkonica.addEventListener('click', ()=>{
    meni.classList.toggle('nevidljivo');

})