
    
const btnMobile = document.querySelector('#checkbox-menu');
const nav =document.querySelector('.navbar-links')

// function scrollBehavior () {

//     if ( "active" in nav.classList) {
//         document.documentElement.style.overflow = "hidden"
//      } else {
//         document.documentElement.style.overflow = "visible"
//     }

// }

const toggleMenu = () => {
//   document.documentElement.classList.active ? document.documentElement.style.overflow = "hidden" :  document.documentElement.style.overflow = "visible"
const body = document.querySelector("body")
body.classList.toggle("over-flow-hidden")
console.log(body)
// scrollBehavior()
 nav.classList.toggle('active')  
// console.log( nav.classList)

}


  
    btnMobile.addEventListener('click', toggleMenu );



