
const ciberseguridad = document.getElementById("ciberseguridad")
const diseño = document.getElementById("diseño")
const html = document.querySelector(".js-secciones-cursos")

const programacion = document.getElementById("programacion")
programacion.addEventListener("click", () => {
    const element = document.createElement("div")
    // element.className = "js-seccion-design"
    html.innerHTML = `
    <a href="./python.html">
    <div class="js-seccion-design"><h2>Curso python</h2>
    <img src="../img/python.png" alt="python">
    <p>💸Precio: $30.000</p>
    </div></a>
    
    <a href="./javascript.html">
    <div class="js-seccion-design">
    <h2>Javascript</h2>
    <img src="../img/javascript.png" alt="javascript">
            <p>💸Precio: $40.000</p>
            </div></a>
            
            <a href="./htmlcss.html">
            <div class="js-seccion-design">
            <h2>HTML5 CSS3</h2>
            <img src="../img/htmlcss.png" alt="htmlcss">
            <p>💸Precio: $35.000</p>
            </div></a>
            `
    html.append()

})

const cripto = document.getElementById("cripto")

cripto.addEventListener("click", () => {

})


