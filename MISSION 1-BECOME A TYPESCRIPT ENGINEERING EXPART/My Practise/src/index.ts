const product = <T>(value: T) => {
    return value
}

console.log(product<string>("ABC"))

/* type Product<T> = {
    data: T
    pending: boolean
}

type AndroidApp = { name: string, quantity: number, technology: string }
type WebApp = { message: string }

const product1: Product<AndroidApp> = {
    data: { name: "laptop", quantity: 4, technology: "app" },
    pending: true
}

const product2: Product<WebApp> = {
    data: { message: "success" },
    pending: false

}
console.log(product1.data.technology) */

type Product<T> = {
    data: T
    pending: boolean
}

type AndroidApp = {
    name: string
    quantity: number
    technology: string
}

type WebApp = {
    message: string
}


const showProduct = <T>(product: Product<T>) => {
    // console.log(product.data)
    // console.log(product.pending)
}

const product1: Product<AndroidApp> = {
    data: { name: "laptop", quantity: 4, technology: "app" },
    pending: true
}

const product2: Product<WebApp> = {
    data: { message: "success" },
    pending: false
}


showProduct(product1)
showProduct(product2)






