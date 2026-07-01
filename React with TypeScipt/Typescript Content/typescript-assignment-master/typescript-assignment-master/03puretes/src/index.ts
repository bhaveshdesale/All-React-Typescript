// class User {
//     email: string
//     name: string
//      readonly city: string = "jaipur"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    protected _count = 0
    readonly city: string = "jaipur"
    constructor(
        public email: string,
        public name: string,
        private userId: string) {

    }

    private deleteToken(){
        console.log("Token deleted");
        
    }
    get courseCount(): number {
        return this._count
    }
    set courseCount(num) {
        if (num <= 1) {
            throw new Error("Error")
        }
        this._count = num  
    }

}

class SubUser extends User {
    isFamily:boolean = true
    changeCourseCount(){
        this._count = 4
    }
}


const hitesh = new User("hitesh@gmail.com", "hitesh", "pqrs")
hitesh.city



class Students{
    readonly state:string ="Mh"
    constructor(
        public name:string,
        public email:string,
        public id:number,
        private address:string
    ){

    }
   

}