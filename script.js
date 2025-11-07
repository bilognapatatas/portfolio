// Animated star background
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let stars = [];
const numStars = 200;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = Array.from({ length: numStars }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    alpha: Math.random(),
    speed: Math.random() * 0.2 + 0.02
  }));
}
resize();
window.addEventListener('resize', resize);

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#fff';
  stars.forEach(star => {
    star.y += star.speed;
    if (star.y > canvas.height) star.y = 0;
    ctx.globalAlpha = star.alpha;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animateStars);
}
animateStars();

// Fade-in scroll animation
const sections = document.querySelectorAll('.glass');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// 🌟 Custom Cursor Glow Effect
const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
  cursor.style.transform = 'translate(-50%, -50%)';
});

// Gentle pulsing effect
setInterval(() => {
  cursor.style.transform += ' scale(1.05)';
  setTimeout(() => cursor.style.transform = 'translate(-50%, -50%)', 200);
}, 1500);
