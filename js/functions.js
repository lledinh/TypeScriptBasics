function basicFun(arg1, arg2) {
}
function basicFun2(arg1, arg2) {
    return 1;
}
const functionPointer = basicFun2;
function funWithDefaultParameter(arg1, arg2 = 2) {
    return 1;
}
function funWithOptionalParameter(arg1, arg2) {
    return 1;
}
function funVarArgs(arg1, ...args) {
    const values = args.reduce(function (a, b) { return a + b; }, 0);
    return arg1 + values;
}
console.log(funVarArgs(1));
console.log(funVarArgs(1, 2, 3));
