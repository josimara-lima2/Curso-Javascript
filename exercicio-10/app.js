/*
  01

  - Crie um objeto "cat" que possui as seguintes propriedades:
    - name, que recebe o nome do gato;
    - age, que recebe a idade;
    - color, que recebe a cor;
    - bestFriends, que recebe um array com os melhores amigos do gato;
    - sound, que é um método que retorna o miado do gato.
  - Exiba o objeto no console.
*/
const cat = {
  name: 'bela',
  age: 0.4,
  color: 'branco',
  bestFriends: ['pançudo', 'pintada'],
  sound: function (){
    return 'miau'
  }
}

console.log(cat)
/*
  02

  - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações  
    corretas.

  Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "X", "age", que recebeu "X", "color", que recebeu "X", "bestFriends", que recebeu um array com os itens "X" e "X", e "sound", que recebeu uma função que retorna "X".
*/

const friends = cat.bestFriends.join(', ').replace(`, ${cat.bestFriends[cat.bestFriends.length - 1]}`,` e ${cat.bestFriends[cat.bestFriends.length - 1]}` )
console.log(`Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "${cat.name}", "age", que recebeu "${cat.age}", "color", que recebeu "${cat.color}", "bestFriends", que recebeu um array com os itens "${friends}", e "sound", que recebeu uma função que retorna "${cat.sound()}".
*/`)
/*
  03

  - Adicione 2 anos à idade do gato e exiba a idade atualizada no console.
*/
cat.age += 2
console.log(cat.age)
/*
  04

  - Crie uma função que adiciona um amigo(a) no array de amigos do gato;
  - Exiba o array de amigos no console para verificar se o novo amigo(a) foi  
    adicionado.
*/
const addFriend = (nameFriend, array) => array.push(nameFriend)
addFriend('feia', cat.bestFriends)
console.log(cat.bestFriends)
/*
  05

  - Crie uma função que adiciona mais uma cor à cor do gato;
  - Utilize a sintaxe de colchetes para fazer isso;
  - Exiba a nova cor do gato no console, também utilizando a sintaxe de  
    colchetes.
*/
const addColor = (color, obj={}) =>{ obj['color'] += ` e ${color}`}
addColor('cinza',cat)
console.log(cat['color'])
/*
  06

  - Crie uma função que retorna um boolean indicando se um valor recebido por  
    parâmetro é um objeto;
  - Utilize a função para exibir no console se "cat" é um objeto.
*/
const isObject = value => typeof value === 'object'

console.log(isObject(cat))
/*
  07

  - Crie um objeto "dog" que possui as mesmas propriedades do objeto "cat";
  - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
  - Exiba a mensagem no console.

  "A soma das idades de NOME_DO_GATO e NOME_DO_CACHORRO é RESULTADO_DA_SOMA."
*/
const dog = {
  name: 'bell',
  age: 0.4,
  color: 'branco',
  bestFriends: ['pançudo', 'pintada'],
  sound: function (){
    return 'Au au'
  }
}
const msg = (dadosCat, dadosDog) => `A soma das idades de ${dadosCat.name} e ${dadosDog.name} é ${dadosCat.age + dadosDog.age}.`
console.log(msg(cat, dog))
/*
  08

  - Se você descomentar os 2 console.log abaixo, verá que a função "isAnSUV"  
    está funcionando corretamente. Mas ela pode ser melhorada;
  - Como você refatoraria esta função?
*/

const marcarAnSunv = ['Honda HR-V', 'Jeep Renegade', 'Ford EcoSport', 'Hyundai iX35']
const isAnSUV = car => marcarAnSunv.includes(car)
// const isAnSUV = car => {
//   if (car === 'Honda HR-V' || car === 'Jeep Renegade' || car === 'Ford EcoSport' || car === 'Hyundai iX35') {
//     return true
//   }

//   return false
// }

 console.log(isAnSUV('Honda Civic'))
console.log(isAnSUV('Ford EcoSport'))

/*
  09

  - Crie uma função que recebe um parâmetro 'type';
  - Dentro da função, crie um objeto com as seguintes propriedades:
    - null, que recebe a mensagem 'Seta, explicitamente, uma variável sem valor.'
    - undefined, que recebe a mensagem 'Representa um valor não-setado.'
    - object, que recebe a mensagem 'Arrays, Datas, Objetos literais, Funções, etc.'
  - Se o valor que o parâmetro type receber corresponder à alguma das 3  
    propriedades, retorne a mensagem que a propriedade armazena;
  - Teste a função, exibindo no console a mensagem de cada propriedade.
*/

const msgType = type => {
  const types = {
    null: 'Seta, explicitamente, uma variável sem valor.',
    undefined: 'Representa um valor não-setado.',
    object: 'Arrays, Datas, Objetos literais, Funções, etc.'
  }


  return types[type]
}

console.log(msgType('null'))
console.log(msgType('undefined'))
console.log(msgType('object'))