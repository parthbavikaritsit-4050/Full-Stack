class Student {
    #name;

    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }
}

const s1 = new Student("Parth");

console.log(s1.name); // Parth

// Change the name
s1.name = "Rahul";

console.log(s1.name); // Rahul