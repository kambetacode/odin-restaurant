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

    const createMenu = () => {

        const menuList = document.createElement('div')

        let menuItems = [
            {
                name: 'Hamburguer',
                description: 'Buns, patty, tomato, onions, lettuce, and our secret family recipe.'
            },
            {
                name: 'Cheeseburger',
                description: 'Similar to our hamburger, but with cheese.'
            },
            {
                name: 'Doublecheeseburger',
                description: 'Similar to our cheeseburger, but with an extra patty.'
            },
            {
                name: 'Steak',
                description: 'A juicy steak made just how you like it.'
            }
        ]
        
        for(let i = 0; i < menuItems.length; i++) {
            const menuItem = document.createElement('div')
            menuItem.classList.add('menu-item')
            menuItem.innerHTML = `
            <h3>${menuItems[i].name}</h3>
            <p>${menuItems[i].description}</p>
            `

            menuList.appendChild(menuItem)
        }

        menu.appendChild(menuList)
    }


    createHero()
    createMenu()
    container.textContent = ''
    container.appendChild(menu)
}

export default menuPage;