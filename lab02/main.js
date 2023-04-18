let h1 = document.querySelector('h1')
let btnRed = document.querySelector('.btnRed')
let removeRed = document.querySelector('.removeRed')

btnRed.onclick = function(){
    h1.classList.add('red')
}

removeRed.onclick = function(){
    h1.classList.remove('red')
}
