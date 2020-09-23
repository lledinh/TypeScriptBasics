function fun(firstName: string) {
    return function() {
        return `Hello ${firstName}`;
    }
}

const hello = fun("world");

console.log(hello());