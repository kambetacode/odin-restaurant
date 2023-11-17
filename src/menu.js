const menuPage = (container) => {

    const menu = document.createElement('div')
    let hero;
    let heroTitle;

    const createHero = () => {
        hero = document.createElement('div')
        hero.classList.add('hero')
        
        heroTitle = document.createElement('h1')
        heroTitle.textContent = 'Menu'

        hero.appendChild(heroTitle)
        menu.appendChild(hero)
    }


    createHero()
    container.textContent = ''
    container.appendChild(menu)
}

export default menuPage;