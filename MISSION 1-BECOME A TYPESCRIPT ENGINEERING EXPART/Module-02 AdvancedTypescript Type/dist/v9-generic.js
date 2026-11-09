const wrapInArray = (value) => {
    return [value];
};
const stringArr = wrapInArray("ABC");
const numberArr = wrapInArray(123);
stringArr.map(s => console.log(s.toLowerCase()));
const userRes = {
    statusCode: 200,
    success: true,
    data: {
        title: "Business",
        description: "abcdfg"
    }
};
export {};
