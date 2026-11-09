
type Data = {
  id: number;
  name: string,
  price: number
}
const data = JSON.parse(`[
  {
    "id": 101,
    "name": "Laptop",
    "price": 55000
    
  },
  {
    "id": 102,
    "name": "Mobile",
    "price": 25000
  },
  {
    "id": 103,
    "name": "Keyboard",
    "price": 1500
  }
]`) as Data[]

// console.log(data[1]?.price)



