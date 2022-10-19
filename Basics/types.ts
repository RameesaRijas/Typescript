
let userInput: unknown;
let userName: string
userInput = 5;
userInput = "max"


//unknown type
//userName = userInput will give error
//so
//unknown type is not assignable
//unknown is strict, so first want to check the type of variable and then assign
if(typeof userInput === 'string') {
  userName = userInput
}

const generateError = (message: string, code: number) => {
  throw {message : message, errorCode: code};
}

generateError("An error occured", 500)

