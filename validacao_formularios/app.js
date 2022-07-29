
const form = document.querySelector('form')


const testUsername = username => /^[a-zA-Z]{6,12}$/.test(username)

const handleSubmit = event => {
  event.preventDefault()


  const isAValidUsername = testUsername(event.target.username.value)
  if (isAValidUsername) {
    feedback.textContent = 'username válido'
    return
  }

  feedback.textContent = 'O username deve conter entre 6 a 12 caracteres e deve conter apenas letras'
}

form.addEventListener('submit', handleSubmit)


form.username.addEventListener('keyup', event => {
  const isAValidUsername = testUsername(event.target.value)
  if (isAValidUsername) {
    form.username.setAttribute('class', 'sucess')
    return
  }

  form.username.setAttribute('class', 'error')

})