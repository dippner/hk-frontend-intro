// lag en referanse til div-en med id="grid"
let grid = document.querySelector('#grid');

const dotCount = 128;
// bruk f.eks. en for-løkke til å legge html inn i div-en
for (let i = 0; i < dotCount; i++) {
  grid.innerHTML += '<div class="dot"><div></div></div>';
}

/*
  NB: å legge til innerHTML er en litt tung operasjon, så å legge html-en i en variabel
  og så bruke innerHTML bare én gang (i stedet for hver gang man går gjennom loopen) er
  en mer effektiv løsning:

  let html = "";
  for (let i = 0; i < dotCount; i++) {
    html += '<div class="dot"><div></div></div>';
  }
  grid.innerHTML = html;
*/
