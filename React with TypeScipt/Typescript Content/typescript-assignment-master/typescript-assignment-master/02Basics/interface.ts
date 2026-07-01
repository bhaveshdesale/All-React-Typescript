interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail:()=>string,
    startTrail(): string,
    getCoupon(couponName: string): number

}


interface User2{
    readonly dbId:number,
    email:string,
    userId:number,
    googleId?:string,
    startTrail():string,
    getCoupon(couponName:string):number
}

interface User {
    githubToken: string
}
interface Admin extends User {
    role: "admin" | "ta"
}
const hitesh: Admin = {
    dbId: 22,
    role: "admin", 
    githubToken: "1235",
    email: "h@h.com", userId: 2211, stratTrail: () => {
        return "trail"
    }, getCoupon: () => {
        return 10;
    }
}


