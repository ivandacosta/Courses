class Usuario {
    constructor(user, pass){
        this.user = user
        this.pass = pass
    }
}

const user1 = new Usuario("ivandacosta11@hotmail.com", "1234")

const button = document.getElementById("ingresar")
const email = document.querySelector("#email")
const password = document.querySelector("#password")

button.addEventListener("click", () => {
    if(email.value === user1.user && password.value === user1.pass){
        setInterval(() => {
            window.location.replace("./logueado.html")
        }, 3000);
    }else{
        Toastify({
            text: "Datos incorrectos",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #FF3131, #FF5858)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
 })
