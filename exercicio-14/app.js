const items = document.querySelectorAll('li')
items.forEach(li => {
    li.addEventListener('click', event => {
        const clickedElement = event.target
            //clickedElement.style.textDecoration = 'line-through'
        clickedElement.remove()
    })
})

const ul = document.querySelector('ul')
    // ul.remove()

const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = 'Novo item'
    ul.append(li)
        //ul.innerHTML += `<li>Novo item</li>`
})