const wrapInArray = <T>(value: T) => {
    return [value]
}

const stringArr = wrapInArray<string>("ABC")
const numberArr = wrapInArray<number>(123)

stringArr.map(s => console.log(s.toLowerCase()))
// numberArr.map(s => console.log(s.toLowerCase()))


/* interface UserResponse {
    data: {
        title: string;
        description: string
    },
    success: boolean,
    statusCode: number,
}

interface BlogResponse {
    data: {
        title: string,
        description: string,
        date: string
    }
    success: boolean,
    statusCode: number,
} */
interface User {
    title: string;
    description: string
}

interface Blog {
    title: string,
    description: string,
    date: string
}

interface ApiResponse<T> {
    data: T;
    success: boolean,
    statusCode: number,
}

type UserResponse = ApiResponse<User>
type BlogResponse = ApiResponse<Blog>

const userRes: ApiResponse<User> = {
    statusCode: 200,
    success: true,
    data: {
        title: "Business",
        description: "abcdfg"
    }
}