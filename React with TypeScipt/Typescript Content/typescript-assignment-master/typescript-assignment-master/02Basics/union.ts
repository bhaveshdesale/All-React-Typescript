let score: number | string = 33
score = 40;
score = "hdhdh"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let hitesh: User | Admin = { name: "bhumika", id: 332 }
hitesh = { username: "hitesh", id: 334 }

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}

getDbId(6);
getDbId("7")

//array
const data: number[] = [1, 2, 3]
const data2: string[] = ["h", "j"]
const data3: (number | string | boolean)[] = ["23", true, 89]

let seatAllotment : "aisle" | "middle" | "window";

seatAllotment = "aisle"
// seatAllotment = "crew"
