const homePage = (container) => {

    container.textContent = ''

    const title = document.createElement('h1')
    title.textContent = `An experience you will never forget`
    container.appendChild(title)

    const slogan = document.createElement('p')
    slogan.textContent = 'Tasty and affordable!'
    container.appendChild(slogan)

    const image = document.createElement('img')
    container.appendChild(image)
}

export default homePage;