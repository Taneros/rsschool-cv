// hljs.highlightAll()

const hamburger = document.getElementById('hamburger')
const hamburgerI = document.getElementById('hamburger-i')

const navUl = document.getElementById('nav-ul')
const headerMenu = document.getElementById('header-menu')

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show')
  headerMenu.classList.toggle('show')
  hamburgerI.classList.toggle('fa-bars')
  hamburgerI.classList.toggle('fa-times')
})