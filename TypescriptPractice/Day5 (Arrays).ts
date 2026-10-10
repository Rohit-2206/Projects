//Exercise 1
const numbers2 = [5, 10, 15, 20];

numbers2.forEach((number) =>{
    console.log(number*3)
})


//Exercise 2
const numbers3 = [2, 4, 6, 8];

const result3 = numbers3.map((number)=>{
    return number*2;
})

console.log(result3)

//Exercise 3
const numbers4 = [10, 15, 20, 25, 30, 35];

const result4 = numbers4.filter((number)=>{
    return number > 20;
})

console.log(result4);

//Exercise 4
const languages = ["typescript", "java", "python"];

const res = languages.map((String)=>{
    return String.toUpperCase();
})

console.log(res);

//Exercise 5
const numbers5 = [10, 20, 30, 40];
const result5 = numbers5.reduce((sum, number)=>{
    return sum+number;
})

console.log(result5);


//Exercise 6
const numbers6 = [12, 7, 18, 5, 20, 9, 14];

const evenNumber = numbers6.filter((number)=>{
    return number%2===0;
})

const multiplyValue = evenNumber.map((number)=>{
    return number*2;
})

console.log(multiplyValue);