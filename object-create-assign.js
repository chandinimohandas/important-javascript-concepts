const proto = {
    a: 0,
    b: 1
};

// create does deep copying and provides a prototype chain
const obj1 = Object.create(proto);

// assign does shallow copying i.e only the properties and methods and it will override the properties and methods declared
// const obj1 = Object.assign(proto);
obj1.c = 12;
console.log(obj1);