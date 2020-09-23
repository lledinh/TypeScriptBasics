{
    const person = {
        firstName: "John",
        lastName: "Miller"
    }

    const person2: {
        firstName: string,
        lastName: string
    } = {
        firstName: "John",
        lastName: "Miller"
    }

    const person3: {
        firstName: string,
        lastName: string,
        age?: number
    } = {
        firstName: "John",
        lastName: "Miller"
    }
    person3.age = 34;
}
