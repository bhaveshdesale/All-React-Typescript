function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
function loginUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
addTwo(5);
getUpper("hello");
signUpUser("bhumika", "bhumika@gmail.com", false);
loginUser("bhumika", "bhumika@gmail.com");
var getHello = function (val) {
    return "";
};
var heros = ['thor', 'spider'];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "".concat(hero);
});
function consoleError(errorMsg) {
    console.log(errorMsg);
}
function handleError(errorMsg) {
    throw new Error(errorMsg);
}
