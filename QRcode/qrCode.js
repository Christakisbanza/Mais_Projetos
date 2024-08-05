let input = document.querySelector('#qrCode input')
let botao = document.querySelector('#qrCode button')
let img = document.querySelector('img')
let qrcodeimg = document.querySelector('.qrCodeImg')





// Função
const GerarQrCode = () => {
    const inputVal = input.value

    if(!inputVal) return

    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`

    botao.innerHTML = 'Gerando QR Code...'

    img.addEventListener('load', () => {
        qrcodeimg.classList.add('ativar')
        botao.innerHTML = 'QR Code gerado com sucesso'
    })

}




//Eventos
botao.addEventListener('click', () => {
    GerarQrCode()
})
input.addEventListener('keydown', (e) => {
    if (e.code === 'Enter'){
        GerarQrCode()
    }
})
input.addEventListener('keyup', () => {
    if(!input.value){
        qrcodeimg.classList.remove('ativar')
        botao.innerHTML = 'Gerar QR Code'
    }
})