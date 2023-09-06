const bars = document.getElementById('bars');
const navSmall = document.getElementById('nav-small')

bars.addEventListener('click', () => {
  navSmall.classList.toggle('active')
})