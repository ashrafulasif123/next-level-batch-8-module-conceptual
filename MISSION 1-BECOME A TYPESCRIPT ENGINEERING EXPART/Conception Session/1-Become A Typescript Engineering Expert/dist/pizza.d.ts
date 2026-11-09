export type Toppings = "olive" | "chesse" | "corn";
export type Pizza = {
    name: string;
    toppings?: Toppings[];
};
export declare const menu: Pizza[];
export declare const makePiza: (name: string, ...toppings: Toppings[]) => {
    name: string;
    toppings: Toppings[];
};
//# sourceMappingURL=pizza.d.ts.map