function fun(firstName) {
    return function () {
        return `Hello ${firstName}`;
    };
}
const hello = fun("world");
console.log(hello());
