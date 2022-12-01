// DOM Elements
const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;
const toggleOnCard = document.getElementById('card-toggle')

// Apply the chached theme on reload
const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
}

// Button Event Handlers
darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
  toggleOnCard.classList.replace('fa-toggle-off', 'fa-toggle-on');
}

lightButton.onclick = () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
  toggleOnCard.classList.replace('fa-toggle-on', 'fa-toggle-off');
}

solarButton.onclick = () => {
  if (body.classList.contains('solar')) {
    body.classList.remove('solar');
    solarButton.style.cssText = `--bg-solar: var(--yellow)`;
    solarButton.innerText = 'solarize';
    localStorage.removeItem('isSolar');

  } else {
    solarButton.style.cssText = `--bg-solar: white`;
    body.classList.add('solar');
    solarButton.innerText = 'normalize';
    localStorage.setItem('isSolar', true);
    // toggleOnCard.classList.replace('fa-toggle-off', 'fa-toggle-on');
  }
}