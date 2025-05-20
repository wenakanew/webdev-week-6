document.getElementById('clickMeBtn').addEventListener('click', () => {
  alert('Button clicked!');
});

const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseenter', () => {
  hoverBox.style.background = 'lightgreen';
});
hoverBox.addEventListener('mouseleave', () => {
  hoverBox.style.background = 'lightblue';
});


document.addEventListener('keydown', (e) => {
  console.log(`Key pressed: ${e.key}`);
});


document.getElementById('secretText').addEventListener('dblclick', () => {
  alert('✨ Secret unlocked!');
});
