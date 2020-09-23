{
    const person = {
        firstName: "John",
        lastName: "Miller",
        age: 34
    }

    const {firstName, lastName, age} = person;

    console.log(firstName);
    console.log(lastName);
    console.log(age);

    const {firstName: n1, lastName: n2, age: n3} = person;
    const {a1, a2 = 34} = {a1: "Evelyn"};
    console.log(a1);
    console.log(a2);

    const a: number[] = [1, 2, 3];

    const [v1, v2, v3] = a;

    console.log(v1);
    console.log(v2);
    console.log(v3);


    const [b1, b2 = 34] = [1];
    console.log(b1);
    console.log(b2);

    const [, , b3] = [1, 2, 3];
}
