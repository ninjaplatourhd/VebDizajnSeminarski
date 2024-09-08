function posalji(event) {
    event.preventDefault(); 
    
    let poljeIme = document.querySelector('input[name="poljeIme"]');
    let poljePrezime = document.querySelector('input[name="poljePrezime"]');
    let poljeTelefon = document.querySelector('input[name="poljeTelefon"]');
    let poljeEmail = document.querySelector('input[name="poljeEmail"]');
    let poljeKomentar = document.querySelector('textarea[name="poljeKomentar"]');
    let uspelo;

    if(poljeIme.value==="" || poljePrezime.value==="" || poljeTelefon.value==="" || poljeEmail.value==="" || poljeKomentar.value==="")
       uspelo=false;
    else
       uspelo=true;

    const modal = document.getElementById('obavestenjeModal');
    const modalPoruka = document.getElementById('modalPoruka');
    
    if (uspelo) {
        modalPoruka.innerText = 'Uspešno poslato!';
    } else {
        modalPoruka.innerText = 'Došlo je do greške pri slanju!';
    }
    
    modal.style.display = 'flex';
    
    return false; 
}

function zatvoriModal() {
    document.getElementById('obavestenjeModal').style.display = 'none';
    window.location.href="index.html";
}