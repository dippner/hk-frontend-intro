const items = [
  {
    id: 'item_1',
    backgroundColor: 'lightcoral'
  },
  {
    id: 'item_2',
    backgroundColor: 'lightblue'
  },
  {
    id: 'item_3',
    backgroundColor: 'lightgray'
  },
  {
    id: 'item_4',
    backgroundColor: 'lightgreen'
  },
  {
    id: 'item_5',
    backgroundColor: 'lightpink'
  },
  {
    id: 'item_6',
    backgroundColor: 'lightseagreen'
  }
];

// for dropHandler: return true if target is item and not same as dragged item
// for other handlers: return true if target is item
// (dataTransfer.getData is only available in dropHandler)
function isTargetItem(e) {
  return e.target.id
      && e.target.id.includes('item_')
      && e.target.id !== e.dataTransfer.getData('text');
}

function dropHandler(e) {
  if (isTargetItem(e)) {
    let sourceIndex = items.findIndex(el=> el.id === e.dataTransfer.getData('text'));
    let targetIndex = items.findIndex(el=> el.id === e.target.id);

    e.target.classList.remove('drag-over');

    // swap elements in array using destructuring
    // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
    [items[sourceIndex], items[targetIndex]] = [items[targetIndex], items[sourceIndex]];

    // redraw items
    drawItems();
  }

}

function dragStartHandler(e) {
  // set element's id as drag data (for use in dropHandler)
  e.dataTransfer.setData('text', e.target.id);
}

function dragEnterHandler(e) {
  // add class to indicate that item is "droppable"
  if (isTargetItem(e))
    e.target.classList.add('drag-over');
}

function dragOverHandler(e) {
  // "allow" drag
  e.preventDefault();
}

function dragLeaveHandler(e) {
  // remove "droppable" class
  if (isTargetItem(e))
    e.target.classList.remove('drag-over');
}


const container = document.querySelector('#drag_container');

// add event listeners
container.addEventListener('dragstart', dragStartHandler);
container.addEventListener('dragenter', dragEnterHandler);
container.addEventListener('dragover', dragOverHandler);
container.addEventListener('dragleave', dragLeaveHandler);
container.addEventListener('drop', dropHandler);

// draw the items in the items array
function drawItems() {
  container.innerHTML = "";
  items.forEach(el => {
    let div = document.createElement('div');
    div.classList.add('item');
    div.setAttribute('draggable', 'true');
    div.style.backgroundColor = el.backgroundColor;
    div.textContent = el.id.split('item_')[1];
    div.id = el.id;
    container.appendChild(div);
  })
}

drawItems();
