{
    let variable = Symbol("Unique and immutable");
    let variable2 = Symbol("Unique and immutable");

    let bo = (variable == variable2);

    // renvoie false
    console.log(bo);
}