// - Hacer fetch de productos
// https://fakestoreapi.com/products


fetch(`https://fakestoreapi.com/products`)
    .then(response => response.json())
    .then(products => console.log(products))


// 2 - Generar en el DOM tarjetas que contengan título, foto, descripción, precio de cada elemento.

function printProducts() {
    fetch(`https://fakestoreapi.com/products`)
        .then(response => response.json())
        .then(products => products.map((product) =>{
            let cardProduct = `<div>
                                    <h3>${product.title}</h3>
                                    <img src=${product.image}>
                                    <p>${product.description}</p>
                                    <p>${product.price}</p>
                                </div>`

            document.body.innerHTML += cardProduct

        })
        )
}
printProducts()

