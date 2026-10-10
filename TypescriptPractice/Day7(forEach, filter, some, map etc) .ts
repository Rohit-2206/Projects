//Exercise 1
const findNumber: number[] = [5, 12, 18, 25, 30];

const firstNumber= findNumber.find((number)=>{
    return number > 20;
})

console.log(firstNumber);

//Exercise 2
const divisibleNumber = [3, 7, 11, 14, 19];

const divNumber = divisibleNumber.find((number)=>{
    return number%7===0;
})

console.log(divNumber);


//Exercise 3
const someNumber = [10, 15, 22, 35];

const findSome = someNumber.some((number)=>{
    return number>30
})

console.log(findSome);


//Exercise 4
const languages = ["Java", "Python", "TypeScript", "SQL"];

const langFind = languages.some((string)=>{
    if(string==="TypeScript")
    {
        return true
    }
})

console.log(langFind);


//Exercise 5
const everyArray: number[] = [2, 4, 6, 8, 10];

const evenNumber = everyArray.every((number)=>{
    return number%2===0;
})

console.log(evenNumber);


//Exercise 6
const everyNumber: number[] = [10, 20, 30, 40, 50];

const findEveryNum = everyNumber.every((number)=>{
    return number>5;
})

console.log(findEveryNum);

//Exercise 7
const numbers = [12, 7, 18, 25, 30];

const firstNum = numbers.find((number)=>{
    return number>20
})

console.log(firstNum);

const divNum = numbers.some((number)=>{
    return number%7===0;
})

console.log(divNum);

const allNum = numbers.every((number)=>{
    return number> 0
})

console.log(allNum);