function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var campoano = document.getElementById('ano')
    var res = document.getElementById('res')
    if(campoano.value.length == 0 || campoano.value > ano){
        alert('Verifique o ano digitado')
    }else{
        var sexo = document.getElementsByName('sexo')
        var idade = ano - campoano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(sexo[0].checked){
            genero = 'Homem'
            if (idade <= 10){
                img.setAttribute('src','foto/crianca-m.png')
            }else if (idade <= 21){
                img.setAttribute('src','foto/jovem-m.png')
            }else if (idade <= 50){
                img.setAttribute('src','foto/adulto.png')
            }else{
                img.setAttribute('src','foto/idoso.png')
            }
        }else if(sexo[1].checked){
            genero = 'Mulher'
            if (idade <= 10){
                img.setAttribute('src','foto/crianca-f.png')
            }else if (idade <= 21){
                img.setAttribute('src','foto/jovem-f.png')
            }else if (idade <= 50){
                img.setAttribute('src','foto/adulta.png')
            }else{
                img.setAttribute('src','foto/idosa.png')
            }
        }
        res.style.textAlign = 'center'
    }   res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
}