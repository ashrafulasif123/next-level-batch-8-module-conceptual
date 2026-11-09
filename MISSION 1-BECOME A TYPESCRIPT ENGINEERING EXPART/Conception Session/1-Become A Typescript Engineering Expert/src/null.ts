const find = (id: number): string | undefined => {
    return id === 1 ? "Rahim" : undefined
}
const name = find(1)
console.log(name)