//Exercise 1
const mark: number = 5;

if (mark>= 90){ 
console.log ("Execllent")
}
else if (mark>= 75 && mark<= 89){
console.log("Good")
}
else if (mark>=50 && mark<=74){
console.log("Average")
}
else{
console.log("Fail")
}

//Exercisse 2
const browser: string = "Chrome"

switch (browser){
    case "Chrome":
        console.log("Chrome browser")
        break;

    case "Firefox":
        console.log("Firefox executed")
        break;

    case "Edge":
        console.log("Edge browser")
        break;

    default:
        console.log("Unsupported browser")
}

//Exercise 3
for(let i=1; i<=10; i++){
    console.log(i)
}

//Exercise 4
let j = 10
while(j>=1)
{
    console.log(j);
    j--;
}


//Exercise 5
const languages = ["TypeScript", "Java", "Python", "SQL"];

for (const language of languages)
{
    console.log(language)
}


//Exercise 6
const num = [12, 7, 5, 18, 20, 9, 14];

for (const n of num)
{
    if(n%2===0)
    {
        console.log(n)
    }
}


//Exercise 7
const num1 = [10, 25, 7, 42, 18, 50];
let minNumber: number = num1[0];

for (let i = 1; i<num1.length;i++)
{
    if(minNumber > num1[i])
    {
        minNumber = num1[i];
    }
}
console.log(minNumber);