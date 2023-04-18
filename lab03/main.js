const form =document.querySelector('form')
const n =document.querySelector('#name')
const p =document.querySelector('#pwd')
const c =document.querySelector('#confirm')

form.onsubmit = function(event){
    // console.log(event)
    event.preventDefault()
    //validation
    if((n.value.length <= 6|| n.value === '') ||
       (p.value === null || p.value === '') ||
       (c.value === null || c.value === '') ) {
        n.focus()
        n.style.background = 'red'
        alert('please complete all input') 

        return false;
    }else    alert('OK Send') 
    event.target.reset()
     // alert('Send Submit Data')
}

const h1 = document.querySelector('h1')

h1.onclick = function(event){
    console.log(event.target)
    event.target.innerHTML = 'CC14'
}

// form.onclick = function(e){
//     console.log(e.target)
//     e.target.style.background = 'red'
// }

// n.onchange = function(e){
//     console.log(e.target.value)
// }
// n.onkeypress = function(e){
//     console.log(e.target.value)
// }