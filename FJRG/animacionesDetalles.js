var saborText = localStorage.getItem("sabor")
var ingredientesText = localStorage.getItem("ingredientes")
var img = localStorage.getItem("img")
var precioText = localStorage.getItem("precio")

console.log(img)


//pongo los datos de la pizza seleccionada en la ventana de detalle
window.addEventListener('load', () => {
    var contenedor = document.getElementById('producto_detalle')

    //creo una nueva iamgen donde se verá la foto de la pizza
    var imgNode = document.createElement('img')
    imgNode.src = img
    imgNode.id = "imgDetalle";
    //se lo añado al contenedor padre
    contenedor.appendChild(imgNode)

    //creo un nuevo parrafo donde se verá el sabor de la pizza
    var saborNode = document.createElement('h3')
    saborNode.textContent = saborText
    saborNode.id = "saborDetalle";
    //se lo añado al contenedor padre
    contenedor.appendChild(saborNode)

    //creo un nuevo parrafo donde se verán los ingredientes de la pizza
    var ingredientesNode = document.createElement('p')
    ingredientesNode.textContent = ingredientesText
    ingredientesNode.id = "ingredientesDetalle";
    //se lo añado al contenedor padre
    contenedor.appendChild(ingredientesNode)

    //creo un nuevo parrafo donde se verá el precio de la pizza
    var precioNode = document.createElement('p')
    precioNode.textContent = precioText
    precioNode.id = "precioDetalle";
    //se lo añado al contenedor padre
    contenedor.appendChild(precioNode)

})

//creo un array con los ingredientes de la pizza para manejarlos fácilmente
var ingredientes = obtenerIngre()

function obtenerIngre() {

    //contenedor para añadir la lista
    var lista_ingre = document.getElementById("lista_ingredientes")

    //guardamos los ingredientes en una variable String quitando "Ingredientes: "
    var cadAux = ingredientesText.substring(14)

    var ingre = cadAux.split(",")

    for (i = 0; i < ingre.length; i++) {
        ingre[i] = ingre[i].trim()
        ingre[i] = ingre[i].replace(".", "")
        ingre[i] = ingre[i].charAt(0).toUpperCase() + ingre[i].substring(1)


        //añadimos un item por cada ingrediente a la lista
        var item = document.createElement("li")
        item.textContent = ingre[i]

        //añadimos boton de eliminar ingrediente
        var btEliminar = document.createElement("button")
        btEliminar.className = "btEliminar"
        btEliminar.textContent = "-"

        btEliminar.onclick = function(it) {
            var boton = it.target
            var ingrediente = boton.parentElement.textContent.replace("-", "")

            var index = ingre.indexOf(ingre.filter(it => it = ingrediente))
            console.log(ingrediente)
        }
        item.appendChild(btEliminar)

        //añadimos el item a la lista
        lista_ingre.appendChild(item)




    }

    console.log(ingre)
}



function aniadirPizza() {
    alert("jol")
}