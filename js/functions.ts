function basicFun(arg1: string, arg2: number) : void {

}

function basicFun2(arg1: string, arg2: number) : number {
    return 1;
}

const functionPointer = basicFun2;

function funWithDefaultParameter(arg1: string, arg2: number = 2) : number {
    return 1;
}

function funWithOptionalParameter(arg1: string, arg2?: number) : number {
    return 1;
}

function funVarArgs(arg1: number, ...args: number[]) : number {
    const values : number = args.reduce(function(a, b){ return a + b; }, 0);

    return arg1 + values;
}

console.log(funVarArgs(1));
console.log(funVarArgs(1, 2, 3));
