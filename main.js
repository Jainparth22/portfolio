
// Theme Toggle (persisted)
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  themeBtn.innerHTML = document.body.classList.contains('light-mode')
    ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});
if(localStorage.getItem('theme')==='light') document.body.classList.add('light-mode');


// Floating Code Elements Animation
document.addEventListener('DOMContentLoaded', () => {
  const codeContainer = document.querySelector('.floating-code-elements');
  if (codeContainer) {
    const icons = [
      '<i class="fab fa-python"></i>',
      '<i class="fab fa-js"></i>',
      '<i class="fab fa-html5"></i>',
      '<i class="fab fa-vuejs"></i>',
      '<i class="fas fa-database"></i>',
      '<i class="fas fa-robot"></i>'
    ];
    icons.forEach((icon, i) => {
      const div = document.createElement('div');
      div.className = 'code-float';
      div.innerHTML = icon;
      div.style.left = `${12 + (i * 16)}%`;
      div.style.animationDelay = `${i * 0.7}s`;
      codeContainer.appendChild(div);
    });
  }

  // Hero subtitle auto-type
  const typeTarget = document.querySelector('.subtitle');
  if (typeTarget) {
    const subtitles = [
      "AI/ML Enthusiast, Full Stack Developer, Data Science Explorer",
      "Building ML + Web Apps with Real Impact",
      "Always Learning. Always Creating."
    ];
    let subIndex = 0;
    setInterval(() => {
      typeTarget.textContent = subtitles[subIndex];
      subIndex = (subIndex + 1) % subtitles.length;
    }, 2400);
  }

  // Carousel for Project Screenshots
  document.querySelectorAll('.carousel').forEach(carousel => {
    const imgs = carousel.querySelectorAll('img');
    if (imgs.length > 1) {
      let cur = 0;
      setInterval(() => {
        imgs.forEach((img, idx) => img.style.display = idx === cur ? 'block' : 'none');
        cur = (cur + 1) % imgs.length;
      }, 2600);
    }
  });

  // Animated Number Counters
  document.querySelectorAll('.animated-counter').forEach(counter => {
    let final = +counter.dataset.count;
    let count = 0, step = Math.ceil(final/55);
    function animate() {
      count += step; if (count > final) count = final;
      counter.innerText = count;
      if (count < final) requestAnimationFrame(animate);
    } animate();
  });
});
// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}); 


// Floating Code Animation
document.addEventListener('DOMContentLoaded', () => {
  // Floating icons
  const codeContainer = document.querySelector('.floating-code-elements');
  if (codeContainer) {
    const icons = [
      '<i class="fab fa-python"></i>','<i class="fab fa-js"></i>','<i class="fab fa-html5"></i>','<i class="fab fa-vuejs"></i>','<i class="fas fa-database"></i>','<i class="fas fa-robot"></i>'
    ];
    icons.forEach((icon, i) => {
      const div = document.createElement('div');
      div.className = 'code-float';
      div.innerHTML = icon;
      div.style.left = `${8 + (i * 17)}%`;
      div.style.animationDelay = `${i * 0.7}s`;
      codeContainer.appendChild(div);
    });
  }
  // Hero subtitle auto-type
  const typeTarget = document.querySelector('.subtitle');
  if (typeTarget) {
    const subtitles = [
      "AI/ML Enthusiast, Full Stack Developer, Data Science Explorer",
      "Building ML + Web Apps with Real Impact",
      "Technology, Data, and Creativity."
    ];
    let subIndex = 0;
    setInterval(()=>{
      typeTarget.textContent = subtitles[subIndex];
      subIndex = (subIndex + 1) % subtitles.length;
    }, 2300);
  }
  // Carousel for Project Media
  document.querySelectorAll('.carousel').forEach(carousel => {
    const imgs = carousel.querySelectorAll('img');
    if (imgs.length > 1) {
      let cur=0;
      setInterval(()=>{
        imgs.forEach((img, idx)=>img.style.display=idx===cur?'block':'none');
        cur = (cur+1)%imgs.length;
      }, 2500);
    }
  });
  // Animated Counters
  document.querySelectorAll('.animated-counter').forEach(counter=>{
    let final = +counter.dataset.count, count=0, step = Math.ceil(final/45);
    function animate() {
      count+=step;
      if(count>final) count=final;
      counter.innerText = count;
      if(count<final) requestAnimationFrame(animate);
    } animate();
  });
});

// Fade/slide-in animation on scroll for all panels/sections
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:0.16});
document.querySelectorAll('.panel,.project-card,.cert-card,.timeline-item,.section h2').forEach(el=>{
  el.classList.add('fade-up'); observer.observe(el);
});
