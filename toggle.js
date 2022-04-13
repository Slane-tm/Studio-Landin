let menuButton = document.querySelector('.menu');
let menu = document.querySelector('.toggle-nav');
console.log(menuButton)
console.log(menu)
menuButton.addEventListener('click', function(){
    menu.classList.toggle('hidden')
})