const addInput = document.querySelector('.add-input');
const addButton = document.querySelector('.add-btn');
const taskList = document.querySelector('.task-list');

let content;
addInput.addEventListener('change', (event) => {
  content = event.target.value;
});

addInput.addEventListener('keydown', handleEvent);

function handleEvent(event) {
  if (event.key == 'Enter' && this.value) {
    createElement(this.value);
  }
}

addButton.addEventListener('click', () => {
  if (content) {
    createElement(content);
  }
});

function createElement(text) {
  const element = document.createElement('div');
  const key = Math.random();
  element.classList.add('list-item');
  element.innerHTML = `<input id="${key}" type="checkbox"><label for="${key}">${text}</label><button>X</button>`;
  taskList.appendChild(element);
  const btn = element.querySelector('button');
  btn.addEventListener('click', () => element.remove());
}
