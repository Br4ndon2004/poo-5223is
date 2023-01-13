class Cuadrado {
    lado = null
    area = this.lado * this.lado 
    constructor (lad, are){
        this.lado = lad;
        this.area = are;
    }

    el_area = function () {
        return "el area del cuadro es " + this.area
    }

    
}
var Cuadrado_1 = new Cuadrado (3);