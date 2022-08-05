//Object propery shorthand
const name = 'mari john'
const userAge = 28


const user = {
    name,
    age: userAge,
    location: 'Muntinlupa'
}


console.log(user);



//Object destructuring

const product = {
    label: 'red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 10
}

const {
    label: productLabel,
    price,
    rating = 5
} = product;

// console.log(productLabel, price, rating)


const transaction = (type, {
    label,
    stock,
    price
}) => {
    console.log(label, stock, price);

}


transaction('order', product);