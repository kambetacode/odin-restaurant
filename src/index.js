const container = document.getElementById('content')

import homePage from './home'
import  menuPage from './menu'
import  contactPage from './contact'
homePage(container)

const homeBtn = document.getElementById('home-btn')
const menuBtn = document.getElementById('menu-btn')
const contactBtn = document.getElementById('contact-btn')

homeBtn.addEventListener('click', () => {
    homePage(container)
})

menuBtn.addEventListener('click', () => {
  menuPage(container)
})

contactBtn.addEventListener('click', () => {
    contactPage(container)
  })