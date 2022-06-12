function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const BTN_COUNT = 6;
const CLICK_DELAY = 1000;
const BG_COLORS = [
  'red',
  'chartreuse',
  'darksalmon',
  'darkgoldenrod',
  'greenyellow',
  'hotpink'
];

function handleClick(event) {
  event.target.classList.add('clicked');
  setTimeout(() => {
    event.target.classList.remove('clicked');
  }, CLICK_DELAY);
}

const root = document.getElementById('root');
for (let i = 0; i < BTN_COUNT; i += 1) {
  const btn = document.createElement('div');
  btn.className = 'btn';
  btn.innerText = 'НЕ КНОПКА';
  const width = random(80, 100);
  const height = random(20, 80);
  const bgColor = BG_COLORS[random(0, BG_COLORS.length)];
  btn.style.width = `${width}px`;
  btn.style.height = `${height}px`;
  btn.style.backgroundColor = bgColor;
  btn.onclick = handleClick;
  root.append(btn);
}

function lucky() {
  buttons.forEach(button => {
    button.classList.add('removed');
  });
  const message = document.getElementById('message');
  message.innerText = 'Ти везунчик, чекай на наступну версію';
}

const realBtnIndex = random(0, BTN_COUNT);
const buttons = document.querySelectorAll('.btn');
const realBtn = buttons[realBtnIndex];
realBtn.onclick = lucky;
