const form = document.querySelector('.signup-form')
const ipunt = document.querySelector('#username')

form.addEventListener('submit', event => {
    event.preventDefault()
    console.log(form.username.value)
   // console.log(event.target.username.value)
})


//Expressão regular
const username = 'josimara'
// Letras minúsculas e pelo menos 6 caracteres
const pattern = /^[a-z]{6,}$/
// const isAMatch = pattern.test('username')
// console.log(isAMatch)
// if(isAMatch){
//     console.log('o teste da regex passou')
// }else{
//     console.log('o teste da regex não passou')
// }

// se o match nao acontece retorna -1
const result = username.search(pattern)
console.log(result)