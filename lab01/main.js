const h1 = document.querySelector('h1')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const hide = document.querySelector('.h')
const show = document.querySelector('.s')


btn1.onclick = function() {

    h1.style.color = this.innerHTML

}

btn2.onclick = function() {

    h1.style.color = this.innerHTML

}

btn3.onclick = function() {

    h1.style.color = btn3.innerHTML

}

function changeColor() {
    
    let color = document.getElementById('colorInput').value;
    h1.style.color = color;

}

hide.onclick = function () {
   h1.style.display = 'none'
}

show.onclick = function () {
   h1.style.display = 'block'
}

const btnShowHide = document.querySelector('.btnShowHide')

btnShowHide.onclick = function(){
if(btnShowHide.innerText ==='Hide'){
    // h1.style.visibility = 'hidden'
    h1.style.opacity = 0
    btnShowHide.innerText = 'Show'
}else {
    // h1.style.visibility = 'visible'
    h1.style.opacity = 100
    btnShowHide.innerText = 'Hide'
}
}

