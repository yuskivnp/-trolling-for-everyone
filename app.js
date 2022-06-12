const root = document.getElementById('root');

function joke() {
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

  let attempt = 0;

  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function handleClick(event) {
    attempt += 1;
    event.target.classList.add('clicked');
    setTimeout(() => {
      event.target.classList.remove('clicked');
    }, CLICK_DELAY);
  }

  function lucky() {
    buttons.forEach(button => {
      button.classList.add('removed');
    });
    const message = document.getElementById('message');
    if (attempt === 0) {
      message.innerText =
        'Ти супер везунчик, спробуй зіграти в лотерею і чекай на наступну версію';
    } else if (attempt === BTN_COUNT - 1) {
      message.innerText =
        'Можливо ти і не везунчик, але дууже наполегливий, чекай на наступну версію';
    } else if (attempt > BTN_COUNT - 1) {
      message.innerText =
        'Схоже у тебе проблеми з короткочасною пам`яттю, чекай на наступну версію';
    } else {
      message.innerText = 'Молодець, чекай на наступну версію';
    }
  }

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

  const realBtnIndex = random(0, BTN_COUNT);
  const buttons = document.querySelectorAll('.btn');
  const realBtn = buttons[realBtnIndex];
  realBtn.onclick = lucky;
}

joke();
