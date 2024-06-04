

const images = [
    {'id': '1', 'url': 'fotos/contesa.png'},
    {'id': '2', 'url': 'fotos/dama.png'},
    {'id': '3', 'url': 'fotos/heroina.png'},
    {'id': '4', 'url': 'fotos/rainha.png'},
    {'id': '5', 'url': 'fotos/wave.png'}
]

const containerItems = document.getElementById('container-fotos')

const loadImages = (images, container) => {
    images.forEach (image => {
        container.innerHTML += `
            <div class = 'item'>
                <img src="${image.url}"
            </div>
            `
    })
}

loadImages(images, containerItems)


let items = document.querySelectorAll('.item')

const previus = () =>{
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item')
}

const proximo = () =>{
    const  lastItem = items[items.length - 1] 
    containerItems.insertBefore(lastItem,items[0])
    items = document.querySelectorAll('.item')
}

let prev = document.getElementById("previous")
prev.addEventListener('click', previus)

let next = document.getElementById("next")
next.addEventListener('click', proximo)
