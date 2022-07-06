// - Hacer fetch de productos
// https://fakestoreapi.com/products


// fetch(`https://fakestoreapi.com/products`)
//     .then(response => response.json())
//     .then(products => console.log(products))


// // 2 - Generar en el DOM tarjetas que contengan título, foto, descripción, precio de cada elemento.

// function printProducts() {
//     fetch(`https://fakestoreapi.com/products`)
//         .then(response => response.json())
//         .then(products => products.map((product) =>{
//             let cardProduct = `<div>
//                                     <h3>${product.title}</h3>
//                                     <img src=${product.image}>
//                                     <p>${product.description}</p>
//                                     <p>${product.price}</p>
//                                 </div>`

//             document.body.innerHTML += cardProduct

//         })
//         )
// }
// printProducts()



// 3 - Hacer un fetch a fakestoreapi para obtener las categorías de productos 
// (Buscar en la documentación de la API el endpoint correspondiente)

fetch(`https://fakestoreapi.com/products`)
    .then(response => response.json())
    .then(categories => categories.map((category) => {
        console.log(categories.category)

    }))

    //NO ME FUNCIONA