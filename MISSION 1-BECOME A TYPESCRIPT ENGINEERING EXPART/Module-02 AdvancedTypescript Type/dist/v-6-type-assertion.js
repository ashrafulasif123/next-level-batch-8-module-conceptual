//** Type assertion */ 
let message = "pending";
const showStatus = (status) => {
    console.log("Your current application status is " + status);
};
showStatus(message); //?message-কে Status type হিসেবে বিবেচনা করা হচ্ছে এবং value কে ভালমত যাচাই করতে হবে।
const config = {
    port: 5000
};
const currentPort = config.port; //? Null বা undefinded এর ক্ষেত্রে এটি বেশী প্রচলিত
// todo OR
// const currentPort: number = config.port as number
//* constant assertion
const configuration = {
    port: 8000,
    prefix: "/api/v1"
};
//! configuration.port = 5000() Cannot assign to port because it is a read-only property
configuration.port = 5000();
export {};
