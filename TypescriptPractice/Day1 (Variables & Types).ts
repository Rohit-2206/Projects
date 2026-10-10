//Exercise 1
let name1: string = "Rohit"
let age: number = 18
let experience: number = 2.5
let isWorking: boolean = true


//Exercise 2
const a = 5;
const b = 6;

console.log("Addition:",a+b);
console.log("Subraction:",a-b);
console.log("Multiplication:",a*b);
console.log("Division",a/b);
console.log("Remainder",a%b);

//Exercise 3 (IF COndition)
if(a+b%2==0)
{
    console.log("Number is Even");
}
else
{
    console.log("Number is odd")
}

//Exercise 4
const exp: number= 2.7;
if (exp > 2)
{
    console.log("Experienced QA")
}
else
{
    console.log("Maverick")
}

//Exercise 5
let numbers: number[] = [1,2,3,4,5];
console.log("First number: ", numbers[0]);
console.log("Last number:", numbers[4]);
console.log("Length:",numbers.length);

//Additional
let maxNumber: number = numbers[0];
for (let i=1; i<numbers.length;i++)
{
    if (numbers[i]>maxNumber)
    {
        maxNumber=numbers[i];
    }
}
console.log("The maximum number is", maxNumber)