const contactPage = (container) => {

    const contact = document.createElement('div')
    contact.textContent = 'this is a test #2'

    container.textContent = ''
    container.appendChild(contact)
}

export default contactPage;