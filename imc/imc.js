function clicar(){
    var nome = document.getElementById('nome').value
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value

    if(nome.length == 0 || altura.length == 0 || peso.length == 0){
        alert('Error - Campo não preenchido')
    }else{
        
        var msg = document.getElementById('msg')
        var imc = (peso / (altura*altura)).toFixed(1)

        msg.innerHTML = `${nome} seu IMC é de ${imc}`

        if(imc <= 16.9){
            msg.innerHTML += ' - Muito abaixo do peso'
            msg.style.color = 'red'
        }else if(imc <= 18.4){
            msg.innerHTML += ' - Abaixo do peso'
            msg.style.color = 'red'
        }else if(imc <= 24.9){
            msg.innerHTML += ' - Peso normal'
            msg.style.color = 'green'
        }else if(imc <= 29.9){
            msg.innerHTML += ' - Acima do peso'
            msg.style.color = 'red'
        }else if(imc <= 34.9){
            msg.innerHTML += ' - Obesidade grau 1'
            msg.style.color = 'red'
        }else if(imc <= 40){
            msg.innerHTML += ' - Obesidade grau 2'
            msg.style.color = 'red'
        }else{
            msg.innerHTML += ' - Obesidade grau 3'
            msg.style.color = 'red'
        }
    }
}