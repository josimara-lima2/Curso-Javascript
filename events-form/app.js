const form = document.querySelector('.signup-form')
const ipunt = document.querySelector('#username')

form.addEventListener('submit', event => {
    event.preventDefault()
    console.log(form.username.value)
   // console.log(event.target.username.value)
})