const m = new Map([["MaCle", "Test"], ["MaCle2", "Azerty"]]);
console.log(m.size);
console.log(m.get("MaCle"));
m.set("MaCle3", "Qwerty");
console.log(m.get("MaCle3"));
m.delete("MaCle2");
m.forEach((value, key) => {
    console.log(key, value);
});
