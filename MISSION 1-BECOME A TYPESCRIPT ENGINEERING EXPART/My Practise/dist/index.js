const product = (value) => {
    return value;
};
console.log(product("ABC"));
const showProduct = (product) => {
    // console.log(product.data)
    // console.log(product.pending)
};
const product1 = {
    data: { name: "laptop", quantity: 4, technology: "app" },
    pending: true
};
const product2 = {
    data: { message: "success" },
    pending: false
};
showProduct(product1);
showProduct(product2);
export {};
