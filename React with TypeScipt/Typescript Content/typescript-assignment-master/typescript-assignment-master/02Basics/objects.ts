const User = {
    name: "Bhumika",
    isPaid: true
}

function createUser({ name: string, isPaid: boolean }) { }

const newUser = {
    name: "Bhumika",
    isPaid: false,
    email: "bhumika@gmail.com"
}

createUser(newUser)


type User = {
    name: string,
    isPaid: boolean,
    email: string
}

function createUsers(user: User): User {
    return {
        name: "bhumi",
        isPaid: true,
        email: "bhumi@gmail.com"
    }
}

createUsers({
    name: "bhumi",
    isPaid: true,
    email: "bhumi@gmail.com"
})


type Person = {
    readonly _id: string,
    name: string,
    isPaid: boolean,
    email: string,
    creditCardDetails?: number
}

const firstPerson: Person = {
    _id: "1234",
    name: "Bhumi",
    isPaid: true,
    email: "abc@gmail.com"
}

firstPerson.email = "bhumi@gmail.com"

type cardNumber = {
    cardNumber: string
}

type cardDate = {
cardDate:string
}

type cardDetails = cardDate & cardNumber & {
    cvv: number
}
export { }
