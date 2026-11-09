import { makePiza, menu, type Pizza } from "./pizza";

const bake = (p: Pizza) => {
    console.log(p)
    console.log(`${p.name} baked with ${p.toppings}`)
}

bake(makePiza("custom piza", "chesse", "corn"))