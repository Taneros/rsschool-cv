const hamburger = document.getElementById('hamburger')
const navUl = document.getElementById('nav-ul')
const headerMenu = document.getElementById('header-menu')

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show')
  headerMenu.classList.toggle('show')
})