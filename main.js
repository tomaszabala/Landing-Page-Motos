



// Dark mode
const btnSwitch = document.querySelector('#switch')

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');          //con la propiedad "toggle" si el elemento tiene una clase se la va a quitar, y si no tiene se la va a agregar
    btnSwitch.classList.toggle('active');
})
