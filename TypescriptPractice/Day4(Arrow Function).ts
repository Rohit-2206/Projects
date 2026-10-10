//Exercise 1
const greet = (name: string) => {
    console.log("Hello", name);
}

greet("Test");

//Exercise 2
const multiply = (a: number, b: number) => {
    return a*b;
}
const value = multiply (4,3)
console.log(value);

//Exercise 3
const square = (a: number):number => a*a;

const result1 = square(4);
console.log(result1);

//Exercise 4
const numbers = [10, 20, 30, 40, 50];
numbers.forEach((number)=>{
    console.log(number);
})


//Exercise 5
const numbers1 = [12, 7, 5, 18, 20, 9, 14];
numbers1.forEach((number) =>{
    if(number%2===0){
        console.log("Even",number);
    }
})


//Exercise 6
const processNumber= (a:number) =>{
    console.log(a*a);
}

const callTest = (num: number, callBack: Function) =>{
    callBack(num);
}

callTest(10, processNumber);

//Exercise 7
function sayHello(name: string){
    console.log("Hello", name);
}

function execute(name: string, callback: Function){
    callback(name);
}

execute("Rohit", sayHello);


//Exercise 8
const processNum= (num: number) =>{
    console.log(num*3);
}

const process= (num: number, callBack: Function)=>{
    callBack(num);
}

process(5, processNum);

//Exercise 9
function double (num: number[]){
    for (let i =0; i< num.length; i++){
        console.log(num[i]*2)
    }
}

function processArray (num: number[], callBack: Function){
    callBack(num);
}

processArray([1,2,3,4], double);
