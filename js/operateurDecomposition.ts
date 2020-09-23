{
    const employeesName1 = ["1", "2"];
    const employeesName2 = ["3", "4"];
    const employeesName = [...employeesName1, ...employeesName2];


    function foo(x, y, z) {
        console.log(x, y, z);
    }

    var args = [0, 1, 2];
    foo.apply(void 0, args);
}