//** Type assertion */ 

//* "as" syntax

type Status = "pending" | "approved" | "rejected"
let message: string = "pending"

const showStatus = (status: Status) => {
    console.log("Your current application status is " + status)
}
showStatus(message as Status) //?message-কে Status type হিসেবে বিবেচনা করা হচ্ছে এবং value কে ভালমত যাচাই করতে হবে।

//* non-null assertion

interface Config {
    port?: number
}

const config: Config = {
    port: 5000
}

if (config.port) {
    const currentPort: number = config.port
} //? Null বা undefinded এর ক্ষেত্রে এটি বেশী প্রচলিত
// todo OR
// const currentPort: number = config.port as number

//* constant assertion
const configuration = {
    port: 8000,
    prefix: "/api/v1"
} as const

//! configuration.port = 5000 Cannot assign to port because it is a read-only property

