// referanser til html-elementene
let grid = document.querySelector('#grid');
let widthIndicator = document.querySelector('#width_indicator');
let inputDotCount = document.querySelector('#dot_count');
let inputDotSize = document.querySelector('#dot_size');
let inputGridWidth = document.querySelector('#grid_width');

// funksjon som lager html-en for prikkene
function drawGrid() {
  let dotCount = Number(inputDotCount.value);
  let dotSize = Number(inputDotSize.value);
  let desiredGridWidth = Number(inputGridWidth.value);
  let columnCount = Math.floor(desiredGridWidth / dotSize);

  // dette er bare for å vise ønsket bredde på grid
  // (faktisk bredde styres også av prikkstørrelse)
  widthIndicator.style.width = desiredGridWidth + 'px';

  // sette hvor mye man skal øke/minke input-feltet for gridbredde når man bruker pil opp/ned
  inputGridWidth.step = dotSize;

  grid.style.gridTemplateColumns = `repeat(${columnCount}, ${dotSize}px)`;
  grid.style.gridAutoRows = dotSize + 'px';

  let html = '';
  for (let i = 0; i < dotCount; i++) {
    html += '<div class="dot"><div></div></div>';
  }

  grid.innerHTML = html;
}

// legg til event-lyttere på input-feltene for å kalle funksjonen hver gang en input-verdi endres
inputDotCount.addEventListener('change', drawGrid);
inputDotSize.addEventListener('change', drawGrid);
inputGridWidth.addEventListener('change', drawGrid);

// kall funksjonen første gang man laster siden
drawGrid();