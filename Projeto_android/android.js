var vermelho = document.getElementById('vermelho')
vermelho.addEventListener('click', corverm)

var cabeca = document.getElementById('cabeca')

var link = document.querySelector('a.link')
var link1 = document.querySelector('a.link1')
var link2 = document.querySelector('a.link2')
var link3 = document.querySelector('a.link3')

function corverm(){
    link.addEventListener('mouseenter', entrar)
    link.addEventListener('mouseout', sair)
    link1.addEventListener('mouseenter', entrar1)
    link1.addEventListener('mouseout', sair1)
    link2.addEventListener('mouseenter', entrar2)
    link2.addEventListener('mouseout', sair2)
    link3.addEventListener('mouseenter', entrar3)
    link3.addEventListener('mouseout', sair3)
    
    cabeca.style.background = '#A30000'
    document.body.style.background ='#F55656'

    link.style.color = '#F55656'
    link1.style.color = '#F55656'
    link2.style.color = '#F55656'
    link3.style.color = '#F55656'

    function entrar(){
        link.style.color = 'white'
        link.style.background = 'red'
    }
    function sair(){
        link.style.color = '#F55656'
        link.style.background = '#A30000'
    }
    function entrar1(){
        link1.style.color = 'white'
        link1.style.background = 'red'
    }
    function sair1(){
        link1.style.color = '#F55656'
        link1.style.background = '#A30000'
    }
    function entrar2(){
        link2.style.color = 'white'
        link2.style.background = 'red'
    }
    function sair2(){
        link2.style.color = '#F55656'
        link2.style.background = '#A30000'
    }
    function entrar3(){
        link3.style.color = 'white'
        link3.style.background = 'red'
    }
    function sair3(){
        link3.style.color = '#F55656'
        link3.style.background = '#A30000'
    }
    
}
