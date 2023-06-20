const links = document.querySelectorAll('a');

links.forEach((link) => {  

link.addEventListener('mouseover', () => {
  link.style.color = '#1881CF';
});

link.addEventListener('mouseout', () => {
    link.style.color = '#004070';
});

});

const copyrightYear = document.getElementById('year');

const currentYear = new Date().getFullYear();
copyrightYear.textContent = currentYear;