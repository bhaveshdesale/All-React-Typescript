function addTwo(num: number) {
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
}
function loginUser(name: string, email: string, isPaid: boolean = false) {
}


addTwo(5)
getUpper("hello")
signUpUser("bhumika", "bhumika@gmail.com", false)
loginUser("bhumika", "bhumika@gmail.com")


const getHello = (val: string): string => {
    return ""
}

const heros = ['thor', 'spider']
// const heros = [1, 2, 3]
heros.map((hero: string) => {
    return `${hero}`
})

function consoleError(errorMsg:string):void{
    console.log(errorMsg)
}
function handleError(errorMsg:string):never{
    throw new Error(errorMsg)
}