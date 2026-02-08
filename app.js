const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionCard = document.getElementById('questionCard');
const landingCard = document.getElementById('landingCard');
const picturesBtn = document.getElementById('picturesBtn');
const bgMusic = document.getElementById('bgMusic');

const funnyTexts = [
  "Nice try 😏",
  "Oops! Not today 😜",
  "Wrong button 😆",
  "Hehe, you missed 🤭"
];

// No button escape
noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * 260 - 130;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  noBtn.innerText = funnyTexts[Math.floor(Math.random() * funnyTexts.length)];
});

// Floating hearts
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerText = '💓';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 4 + Math.random() * 3 + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}, 400);

// Confetti explosion
function confettiBoom() {
  for (let i = 0; i < 120; i++) {
    const conf = document.createElement('div');
    conf.className = 'confetti';
    conf.style.left = Math.random() * 100 + 'vw';
    conf.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
    conf.style.animationDuration = 2 + Math.random() * 3 + 's';
    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 5000);
  }
}

// Yes click
yesBtn.addEventListener('click', () => {
  questionCard.style.display = 'none';
  landingCard.style.display = 'block';
  bgMusic.play();
  confettiBoom();
});

// Pictures button click
picturesBtn.addEventListener('click', () => {
  window.location.href = 'pictures.html';
});