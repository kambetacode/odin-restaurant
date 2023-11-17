const contactPage = (container) => {

    const contact = document.createElement('div')
    let hero;
    let heroTitle;

    const createHero = () => {
        hero = document.createElement('div')
        hero.classList.add('hero')
        
        heroTitle = document.createElement('h1')
        heroTitle.textContent = 'Contact us'

        hero.appendChild(heroTitle)
        contact.appendChild(hero)
    }

    createHero()
    container.textContent = ''
    container.appendChild(contact)
}

export default contactPage;