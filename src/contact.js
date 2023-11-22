const contactPage = (container) => {

    const contact = document.createElement('div')
    let hero;
    let heroTitle;
    let contactDiv;

    const createHero = () => {
        hero = document.createElement('div')
        hero.classList.add('hero')
        
        heroTitle = document.createElement('h1')
        heroTitle.textContent = 'Contact us'

        contactDiv = document.createElement('div')
        contactDiv.classList.add('contact-div')
        contactDiv.innerHTML = `
            <p>P Sherman, 42 Wallaby Way, Sydney</p>
            <p>555-555-5555</p>
            <p>Tuesday - Sunday</p>
            <p>11PM - 2AM</p>
        `

        

        hero.appendChild(heroTitle)
        contact.appendChild(hero)
        contact.appendChild(contactDiv)
    }

    createHero()
    container.textContent = ''
    container.appendChild(contact)
}

export default contactPage;