const numbers: number[] = [200, 300, 400, 500, 100, 300];
console.log(numbers);

const person: {name: string, age: number, id: number} = {
    name:'shahed',
    age: 21,
    id: 23
}

type Person = {name: string, age: number, id: number};
const person2: Person  = {
    name:'shahed',
    age: 21,
    id: 23
}