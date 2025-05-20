document.getElementById('clickMeBtn').addEventListener('click', function() {
  this.textContent = 'You clicked me!';
  this.style.backgroundColor = 'purple';
});


const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
let index = 0;

document.getElementById('nextImg').addEventListener('click', () => {
  index = (index + 1) % images.length;
  document.getElementById('gallery').src = images[index];
});


const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
    document.getElementById(tab.dataset.target).style.display = 'block';
  });
});


