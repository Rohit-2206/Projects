//Exercise 1
const numbersArray = [10,20,30];

numbersArray.push(40,50);
console.log(numbersArray);


//Exercise 2
const popArray: number[] = [10,20,30,40];

popArray.pop();
popArray.pop();
console.log(popArray)

//Exercise 3
const shiftArray: number[] = [20,30,40];

shiftArray.unshift(10);
shiftArray.shift();
console.log(shiftArray);


//Exercise 4
const sliceArray: number[] = [10,20,30,40,50];

const resultArray = sliceArray.slice(1,4);
console.log(resultArray);


//Exercise 5
const spliceArray: number[] = [10,20,30,40,50];

spliceArray.splice(2,1);
console.log(spliceArray)

//Exercise 6
const message = "TypeScript is Awesome";

console.log(message.length)
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.includes("Script"));
console.log(message.slice(0,10));


//Exercise 7
const nameString = "Rohit Chandrasekar";

console.log(nameString.toUpperCase());
console.log(nameString.toLowerCase());