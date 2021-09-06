class Producto {
    constructor(id, nombre, precio) {
            this.id = parseInt(id);
            this.nombre = this.verificarNombre(nombre);
            this.precio = parseFloat(precio);
    }

    descuento(valor){
            this.precio -= valor;
    }

    verificarNombre(nombre){
            if(nombre != ''){
                return nombre   
            }else{
                 return "No ha insertado ningun nombre! Por favor repita la operacion.";
            }
    }
}