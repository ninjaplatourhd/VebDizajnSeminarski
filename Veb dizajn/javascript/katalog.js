document.getElementById('brojRedovaYuGiOh').addEventListener('change', function() {
    var selektovanaKlasa = this.value;
    var karte = document.querySelectorAll('#yugiohKarteKontejner .col-4, #yugiohKarteKontejner .col-3, #yugiohKarteKontejner .col-6, #yugiohKarteKontejner .col-12');
    karte.forEach(karta => {
      karta.classList.remove('col-3', 'col-4', 'col-6', 'col-12');
      karta.classList.add(selektovanaKlasa);
    });
  });

  document.getElementById('brojRedovaMtg').addEventListener('change', function() {
    var selektovanaKlasa = this.value;
    var karte = document.querySelectorAll('#mtgKarteKontejner .col-4, #mtgKarteKontejner .col-3, #mtgKarteKontejner .col-6, #mtgKarteKontejner .col-12');
    karte.forEach(karta => {
      karta.classList.remove('col-3', 'col-4', 'col-6', 'col-12');
      karta.classList.add(selektovanaKlasa);
    });
  });

  document.getElementById('brojRedovaPokemon').addEventListener('change', function() {
    var selektovanaKlasa = this.value;
    var karte = document.querySelectorAll('#pokemonKarteKontejner .col-4, #pokemonKarteKontejner .col-3, #pokemonKarteKontejner .col-6, #pokemonKarteKontejner .col-12');
    karte.forEach(karta => {
      karta.classList.remove('col-3', 'col-4', 'col-6', 'col-12');
      karta.classList.add(selektovanaKlasa);
    });
  });