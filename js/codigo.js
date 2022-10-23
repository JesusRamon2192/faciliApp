//Secciones
const seccionPortada=document.getElementById("seccionPortada")
const seccionActividad=document.getElementById("seccionSeleccionarActividad")
const seccionMapa=document.getElementById("verMapa")
const seccionAreas=document.getElementById("seccionAreas")

//Contenedores
const contenedorTareas=document.getElementById("contenedorOpciones")
const contenedorActividades=document.getElementById("contenedorActividades")

//Opciones Tareas
let inputPlanEntrenamiento
let inputOrganigrama
let inputAreas

//Opciones Actividades de plan de 
//entrenamiento
let inputDesenergizadoMaster
let inputTapadoGoteras
let inputTomaLecturas

//Botones
let botonSeleccionarTarea=document.getElementById("botonSeleccionar")
let botonSeleccionarActividad=document.getElementById("botonSeleccionarActividad")

let actividades=[]
let tareas=[]
let opcionDeTareas
let opcionDeActividades


class Tarea{
    constructor(id, n){
        this.id = id
        this.nombre=n
    }
}

class Actividad{
    constructor(id, n){
        this.id=id
        this.nombre=n
    }
}

let planEntrenamiento= new Tarea("planEntrenamiento", "Plan de Entrenamiento")
let organigrama= new Tarea("organigrama", "Organigrama del equipo")
let areas= new Tarea("area", "Areas del Departamento")

let desenergizarMaster= new Actividad("desenergizadoMaster", "Desenergizado de Master Pack")
let reparacionGoteras= new Actividad("tapadoGoteras", "Tapado de goteras")
let tomaLecturas= new Actividad("tomaLecturas", "Toma de lecturas")

actividades.push(desenergizarMaster, reparacionGoteras, tomaLecturas)
tareas.push(planEntrenamiento, organigrama, areas)

window.addEventListener("load", start)

function start(){
    seccionActividad.style.display="none"
    seccionMapa.style.display="none"
    //seccionPortada.style.display="none"
    seccionAreas.style.display="none"
    
    tareas.forEach((tarea) => {
        opcionDeTareas=
        `<input type="radio" name="tarea" id=${tarea.id}>${tarea.nombre}</input> 
        <label class="tarjetaTarea" for=${tarea.id}>
        </label> <br><br>`
        contenedorTareas.innerHTML += opcionDeTareas

        inputPlanEntrenamiento=document.getElementById("planEntrenamiento")
        inputOrganigrama=document.getElementById("organigrama")
        inputAreas=document.getElementById("area")
    })
    botonSeleccionarTarea.addEventListener("click", seleccionarTarea)
}

function seleccionarTarea() {
    if(inputPlanEntrenamiento.checked){
        seccionActividad.style.display="grid"
        planDeEntrenamiento()
    } else if (inputOrganigrama.checked) {
    } else if (inputAreas.checked){
        seccionAreas.style.display="grid"
    } else {
        alert("Selecciona una opcion para avanzar")
        location.reload()
    }
    seccionPortada.style.display="none"
}

function planDeEntrenamiento() {
    actividades.forEach((actividad) => {
        opcionDeActividades=
        `<input type="radio" name="actividad" id=${actividad.id}>${actividad.nombre}</input> 
        <label class="tarjetaactividad" for=${actividad.id}>
        </label> <br><br>`
        contenedorActividades.innerHTML += opcionDeActividades

        inputDesenergizadoMaster=document.getElementById("desenergizadoMaster")
        inputTapadoGoteras=document.getElementById("tapadoGoteras")
        inputTomaLecturas=document.getElementById("tomaLecturas")
    })
    botonSeleccionarActividad.addEventListener("click", seleccionarActividadEnetrenamiento())
}

function seleccionarActividadEnetrenamiento() {
    
}