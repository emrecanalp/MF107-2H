const themeSelector = document.getElementById('themeSelector');
const navbar = document.querySelector('.navbar');

themeSelector.addEventListener('change', (e) => {
  navbar.classList.remove('light-theme', 'dark-theme', 'blue-theme');
  if(e.target.value === 'light') navbar.classList.add('light-theme');
  if(e.target.value === 'dark') navbar.classList.add('dark-theme');
  if(e.target.value === 'blue') navbar.classList.add('blue-theme');
});
