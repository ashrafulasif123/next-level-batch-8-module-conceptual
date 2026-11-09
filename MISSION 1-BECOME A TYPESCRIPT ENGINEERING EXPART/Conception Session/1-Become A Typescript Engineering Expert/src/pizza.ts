export type Toppings = "olive" | "chesse" | "corn"


export type Pizza = {
    name: string
    toppings?: Toppings[],
}

const piza: Pizza = {
    name: "Duot",
    toppings: ["chesse", "olive"]
}

export const menu: Pizza[] = [
    {
        name: "piza-1",
        toppings: ["chesse"]
    },
    {
        name: "piza-2",
        toppings: ["corn", "olive"]
    }
]

export const makePiza = (name: string, ...toppings: Toppings[]) => {
    console.log({ name, toppings })
    return { name, toppings }
}





