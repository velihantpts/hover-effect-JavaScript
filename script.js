const container = document.getElementById('container')
const btnRemove = document.getElementById('btnRemove')

const colors = ['#f55c7a','#f57c73','#f68c70','#f6ac69','#f6bc66']

const SQUARES =400

for ( let i = 0 ; i<SQUARES; i++){
    const square = document.createElement('div')

    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
    container.appendChild(square)

    btnRemove.addEventListener('click',() => {
 
        clear(square)
    })
}

function setColor(element){
       const color = getRandomColor()
       element.style.background = color
       element.style.boxShadow = `0 0 2px ${color}, 0 0  10px ${color}`
}
function removeColor(element){
    element.style.background = '#1d1d1d'

}
function clear(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`

}
function getRandomColor(){
    return colors[Math.floor(Math.random () * colors.length)]
}
