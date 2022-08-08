/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
*/


const correctAnswers = ['A','A','B','B']
const form = document.querySelector('.quiz-form')
const divScore = document.querySelector('.score')
form.addEventListener('submit', event => {
    event.preventDefault()
    let score = 0
    const userAnswers = [
      form.inputQuestion1.value,  
      form.inputQuestion2.value,  
      form.inputQuestion3.value,  
      form.inputQuestion4.value,  
    ]

    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnswers[index]){
            score += 25
        }
    })

    console.log(score)
    divScore.innerHTML = `<p class="text-white bg-danger" style="padding: 24px;margin: 24px;">A sua pontuação foi: ${score} ponto(s)</p>`
})