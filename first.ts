/* const myNum = 300;
const myNum2 = 400;
const myName = 'Sabiruzzaman Sadman';
console.log('exploring typescript', myNum, myNum2);
console.log(myName);
const myNum3 = 500;
console.log(myNum3); */

let num = 4000;
// num = 'sahidul'; 'string' is not assignable to type 'number'.
let myNum:number = 4000;
let friend:string = 'rabbi';

function add(first: number, second: number): number{
    const result = first + second;
    return result;
}
const output:number = add(34, 23);
console.log(output);



// multi purpose

/* function add(first: number | string, second: number | string): number | string{
    const result: (number | string) = first + second;
    return result;
}
const output:number | string = add(34, 23);
console.log(output);
 */

// when no need to return anything
function doubleIt(number: number): void{
    console.log(2 * number);
}