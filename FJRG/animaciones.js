//recojo los links y les añado un listener para recoger el nombre, los ingredientes y el precio

var link_detalle = document.getElementsByClassName('link_detalles')


for (let element of link_detalle) {
    var padre = element.parentElement
    element.addEventListener('click', (it) => {
        var producto = (it.composedPath()[1])

        //variables donde guardo los datos de la pizza seleccionada
        var sabor = (producto.getElementsByClassName('sabor')[0].outerText)
        var ingredientes = (producto.getElementsByTagName('p')[0].outerText)
        var precio = (producto.getElementsByTagName('p')[1].outerText)
        var img = (producto.getElementsByTagName('img')[0].src)

        //guardo los datos para utilizarlos en animacionesDetalles.js
        localStorage.setItem("sabor", sabor)
        localStorage.setItem("ingredientes", ingredientes)
        localStorage.setItem("precio", precio)
        localStorage.setItem("img", img)


    })
}