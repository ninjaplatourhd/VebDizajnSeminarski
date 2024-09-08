function menjajFont()
{
let font = document.getElementById('font');
let trenutniFont = font.getAttribute('href');
console.log(trenutniFont);
if(trenutniFont==='css/font/normalanFont.css')
{
    font.setAttribute('href','css/font/velikFont.css');
}
else
{
    font.setAttribute('href','css/font/normalanFont.css');
}
}

function menjajTemu()
{
let tema= document.getElementById('tema');
let trenutnaTema= tema.getAttribute('href');
console.log(trenutnaTema);
if(trenutnaTema==='css/teme/svetla.css'){
tema.setAttribute('href','css/teme/tamna.css');
}
if(trenutnaTema==='css/teme/tamna.css')
{
    tema.setAttribute('href','css/teme/svetla.css');
}
}

function sacuvajKolacice()
{
    let tema= document.getElementById('tema');
    let trenutnaTema= tema.getAttribute('href');

    let font = document.getElementById('font');
    let trenutniFont = font.getAttribute('href');


    
    document.cookie= `tema=${trenutnaTema};`;
    document.cookie= `font=${trenutniFont};`;
    let x= document.cookie;
}

function dajKolacic(ime){
    const vrednostKolacica = `; ${document.cookie}`;
    const segmenti = vrednostKolacica.split(`; ${ime}=`);
    if(segmenti.length===2)
    {
        return segmenti.pop().split(';').shift();
    }
}



let promenaTemeDugmeHamburger= document.getElementById('promeniTemuHamburger');
let promenaFontaDugmeHamburger= document.getElementById('promeniFontHamburger');
let sacuvajKolaciceDugmeHamburger = document.getElementById('sacuvajKolaciceHamburger');

let promenaTemeDugmeMega= document.getElementById('promeniTemuMega');
let promenaFontaDugmeMega= document.getElementById('promeniFontMega');
let sacuvajKolaciceDugmeMega = document.getElementById('sacuvajKolaciceMega');

let temaKolacic= dajKolacic('tema');
let fontKolacic= dajKolacic('font');

let tema= document.getElementById('tema');
let font= document.getElementById('font');

if(temaKolacic)
{
    tema.setAttribute('href',`${temaKolacic}`);
}


if(fontKolacic)
{
    font.setAttribute('href',`${fontKolacic}`);
}

promenaTemeDugmeHamburger.addEventListener('click',menjajTemu);
promenaFontaDugmeHamburger.addEventListener('click',menjajFont);
sacuvajKolaciceDugmeHamburger.addEventListener('click',sacuvajKolacice);

promenaTemeDugmeMega.addEventListener('click',menjajTemu);
promenaFontaDugmeMega.addEventListener('click',menjajFont);
sacuvajKolaciceDugmeMega.addEventListener('click',sacuvajKolacice);