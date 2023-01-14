class Hipotenusa{
    nombre;
    apellido;
    f_nacimiento;
    #curp;
    #rfc;
    asig_valores = function(name, apell, f_na, curp, rfc){
        this.nombre = name;
        this.apellido = apell;
        this.f_nacimiento = f_na;
        this.#curp = curp;
        this.#rfc = rfc;

   
    }
mostrar_rfc = function (){
    return parseFloat(this.rfc, 12123123)
 
}
genero = function (){
    return parseInt(this.curp, M )
}
edad = function (){
    return parseInt(this.edad, 17)

}
}
