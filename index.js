var alumno = {
    nombre: null,
    apellidos: null,
    fecha_nacimiento: null,
    fecha_actual: null,
    edad: fecha_actual - fecha_nacimiento,
    saluda(){
        return "Hola mi nombre es: "+ this.nombre +" "+ this.apellidos + " mi edad es" +this.edad;
    },
    edad(){
    }
}
function saveStudent(){
    alumno.nombre = document.getElementById('name').value;
    alumno.apellidos = document.getElementById('lastname').value;
    alumno.fecha_actual = document.getElementById('actual').value;
    alumno.fecha_nacimiento = document.getElementById('nacimiento').value;
}

function saludar(){
   alert(alumno.saluda());
}