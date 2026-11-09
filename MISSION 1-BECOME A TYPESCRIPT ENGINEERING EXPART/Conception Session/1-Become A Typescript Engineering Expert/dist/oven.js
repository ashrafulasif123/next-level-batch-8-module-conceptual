import { makePiza, menu } from "./pizza";
const bake = (p) => {
    console.log(p);
    console.log(`${p.name} baked with ${p.toppings}`);
};
bake(makePiza("custom piza", "chesse", "corn"));
//# sourceMappingURL=oven.js.map