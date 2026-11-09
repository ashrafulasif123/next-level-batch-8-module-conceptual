const piza = {
    name: "Duot",
    toppings: ["chesse", "olive"]
};
export const menu = [
    {
        name: "piza-1",
        toppings: ["chesse"]
    },
    {
        name: "piza-2",
        toppings: ["corn", "olive"]
    }
];
export const makePiza = (name, ...toppings) => {
    console.log({ name, toppings });
    return { name, toppings };
};
//# sourceMappingURL=pizza.js.map