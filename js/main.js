/* productos.push(new Producto(1, "Camiseta de futbol", 8500));
productos.push(new Producto(2, "Short de futbol", 6000));
productos.push(new Producto(3, "Medias de futbol", 550));
productos.push(new Producto(4, "Botines a medida", 10000)); */
productosUI(productos);
const formulario = document.getElementById('registroProducto');
formulario.onsubmit = (event) =>{
        event.preventDefault();
        const inputs = formulario.children;
        console.log(inputs);
        const nuevoProducto = new Producto(getID(),inputs[0].value, inputs[1].value);
        console.log(nuevoProducto);
        productos.push(nuevoProducto);
        productosUI(productos);
}

