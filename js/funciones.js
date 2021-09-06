function getDetalleProducto(producto){
    return `<h2>${producto.nombre}</h2>
            </h3>${'$ '+producto.precio}</h3>
            <button id='${producto.id}' class="btnCompra">ADQUIRIR</button>
            <h4>`
}

function productosUI(productos){
    const divProductosUI = document.getElementById('productosUI');
    divProductosUI.innerHTML = '';      
    for (const producto of productos) {
            let div = document.createElement("div");
            div.innerHTML = getDetalleProducto(producto);
            divProductosUI.appendChild(div);
    }
    const botones = document.getElementsByClassName('btnCompra');
    for (const boton of botones) {
            boton.addEventListener("click", confirmarCompra);
    }
}

/* function confirmarCompra(){
    console.log(this.id);
    const seleccionado = productos.find(producto => producto.id == this.id);
    carrito.push(seleccionado);
    let innerCarrito = '';
    for (const producto of carrito) {
            innerCarrito += `<p> ${producto.nombre} - $ ${producto.precio}</p>` 
    }
    const divCarrito = document.getElementById('carrito');
    divCarrito.innerHTML = innerCarrito;
} */

function getID(){
    return productos.length + 1;                                                                                                
}