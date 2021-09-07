// const search = document.querySelector('.search')
// const btn=     document.querySelector('.btn')
// const input=   document.querySelector('.input')

// .btn.addEventListener('click',()=> {
//      search.classList.toggle('active')
//      input.focus()
// })

// const search =document.querySelector('.search')
// const btn = document.querySelector('.btn')
// const input= document.querySelector('.input')

// btn.addEventlistener('click',()=> {
//      search.classList.toggle('active')
//      input.focus()
// })
var search = document.querySelector('.search')
var btn = document.querySelector('.btn')
var input = document.querySelector('.input')

btn.addEventListener('click' , () => {
    search.classList.toggle('active')
    input.focus()
})