//Exercise 1
function greet(){
    console.log("Hello Rohit");
}
greet();

//Exercise 2:
function greetUser(name: string){
    console.log("Hello", name)
}
greetUser("Test");

//Exercise 3
function addNumber (a: number, b: number){
    return a+b;
}
const result = addNumber (6,7);
console.log (result);

//Exercise 4
function isEven (num: number): boolean{
    if(num%2===0){
        return true;
    }
    else{
        return false;
    }
}
const results = isEven(89);
console.log(results)

//Exercise 5
function maxNumber(num: number[]): number{
    let max = num[0];
    for(let i=1; i< num.length; i++)
    {
        if(num[i]>max)
        {
            max = num[i];
        }
    }
    return max;
}
const maxValue = maxNumber([1,2,3,4,5])
console.log(maxValue);
