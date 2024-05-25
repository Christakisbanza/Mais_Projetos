let num     = document.getElementById('num')
let lista   = document.getElementById('lista')
let msg     = document.getElementById('msg')
let botao1  = document.getElementById('botao1')
let botao2  = document.getElementById('botao2')
let valores = []

// Verificando se o num digitado está dentros 1 - 200
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 200){
        return true
    }else{
        return false
    }
}

// Verificando se o número detro da lista é diferente do -1
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

//Adicionando um evento click no botão1, seguida de uma função que vai verificar as duas funções de cima.
botao1.addEventListener('click',function(){
    if (isNumero(num.value)  && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.innerText = `Valor ${num.value}`
        lista.appendChild(item)
        msg.innerHTML = ''
    }else{
        alert('Invalido')
    }
    num.value = ''
    num.focus()
})

//Adicionando um evento click no botão2, seguida de uma função que vai verificar o comprimento da nossa array 
botao2.addEventListener('click', function(){
    if(lista.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        let tot    = valores.length
        let maior  = valores[0]
        let menor  = valores[0]
        let soma   = 0
        let media  = 0
        for(let pos in valores){
            soma = soma + valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        msg.innerText = ''
        msg.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        msg.innerHTML += `<p>O maior valor é ${maior}</p>`
        msg.innerHTML += `<p>O menor valor é ${menor}</p>` 
        msg.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        msg.innerHTML += `<p>A media dos númros é ${media } </p>`
    }
})