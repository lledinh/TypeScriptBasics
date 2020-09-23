{
    const f: string[] = ["1", "2", "3"];

    for (const fKey in f) {
        console.log(f[fKey]);
    }

    for (const sf of f) {
        console.log(sf);
    }
}