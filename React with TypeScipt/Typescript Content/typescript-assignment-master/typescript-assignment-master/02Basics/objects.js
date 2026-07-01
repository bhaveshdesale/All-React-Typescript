"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Bhumika",
    isPaid: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = {
    name: "Bhumika",
    isPaid: false,
    email: "bhumika@gmail.com"
};
createUser(newUser);
function createUsers(user) {
    return {
        name: "bhumi",
        isPaid: true,
        email: "bhumi@gmail.com"
    };
}
createUsers({
    name: "bhumi",
    isPaid: true,
    email: "bhumi@gmail.com"
});
var firstPerson = {
    _id: "1234",
    name: "Bhumi",
    isPaid: true,
    email: "abc@gmail.com"
};
firstPerson.email = "bhumi@gmail.com";
