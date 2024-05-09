var ligar = document.getElementById('ligar')
var desligar = document.getElementById('desligar')
var foto  = document.getElementById('foto')

ligar.addEventListener('click', lig)
desligar.addEventListener('click', des)


function lig(){
    foto.src = 'fotos/lam_ligada.png'
    document.body.style.background = '#F5EF89'
}
function des(){
    foto.src = 'fotos/lam_apagada.png'
    document.body.style.background = 'rgba(0, 0, 0, 0.504)'
}
