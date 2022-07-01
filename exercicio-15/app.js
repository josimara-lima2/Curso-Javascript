/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/

const ul = document.querySelector('ul')
const lis = ul.children
Array.from(lis).forEach(li => {

    li.classList.add('video')
})




/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/

const h2 = document.querySelector('h2')
const paiH2 = h2.parentElement
console.log(paiH2)
    /*
      03

      - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
    */

const h1 = document.querySelector('h1')
const nextIrmao = h1.nextElementSibling
console.log(nextIrmao)

/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/

const previousIrmaoUL = ul.previousElementSibling
console.log(previousIrmaoUL)
    /*
      05

      - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
        exibida no console.
*/

const items = document.querySelectorAll('li')

const handleClickLis = event => console.log(event.target)

items.forEach(li => {
    li.addEventListener('click', handleClickLis)
})

/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [{
    name: 'Como o promise all funciona | JavaScript',
    length: '00:01:52'
}, {
    name: 'Como refatorar um for loop | JavaScript',
    length: '00:04:18'
}, {
    name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
    length: '00:02:55'
}]

const insertValueLi = ({ name }) => {
    const li = document.createElement('li')
    li.textContent = name
    ul.append(li)
}
const handleClickButton = () => {
    videos.forEach(insertValueLi)
}
const btn = document.querySelector('button')
btn.addEventListener('click', handleClickButton)

/*
  07
  
  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/
const body = document.querySelector('body')
h1.addEventListener('click', () => {
    body.innerHTML = ''

})