// type Vehicle = {
//     rickshaw: number,
//     cng: number,
//     bus: number,
//     bike: number,
//     car: number,
//     train: number,
//     launch: number,
//     metro: number,
//     airplane: number,
//     van: number,
// }
const fare = {
    rickshaw: 60,
    cng: 400,
    bus: 30,
    bike: 100,
    car: 500,
    train: 150,
    launch: 250,
    metro: 60,
    airplane: 5000,
    van: 80,
}

type VehicleName = keyof typeof fare

const getFare = (v: VehicleName) => {
    if (v === "rickshaw") {
        return fare[v]
    }
}

console.log(getFare("rickshaw"))



