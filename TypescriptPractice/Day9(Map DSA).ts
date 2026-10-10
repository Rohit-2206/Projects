let numbers = [1, 2, 2, 3, 3, 3];

let frequency = new Map <number, number>();

for (let i =0; i< numbers.length; i++)
{
    if(frequency.has(numbers[i]))
    {
        frequency.set(numbers[i], frequency.get(numbers[i])!+1);
    }
    else 
    {
        frequency.set(numbers[i], 1)
    }
}

console.log(frequency.get(3))
console.log(frequency.get(2));


//Exercise 2
let text: string = "helllloo"

let freq = new Map <String, number>();

for (let i=0; i< text.length; i++)
{
    if(freq.has(text[i]))
    {
        freq.set(text[i], freq.get(text[i])!+1)
    }
    else
    {
        freq.set(text[i], 1);
    }
}

console.log(freq.get("l"));
console.log(freq.get("o"));

//Exercise 3
let word: string = "abacbd"

let count = new Map <string, number>();

for (let i=0; i<word.length;i++)
{
    if(count.has(word[i]))
    {
        count.set(word[i], count.get(word[i])!+1)
    }
    else
    {
        count.set(word[i],1);
    }
}

for(let [key, value] of count)
{
    if(value===1)
    {
        console.log(key);
        break;
    }
}


//Exercise 4
let num: number[] = [1, 2, 3, 2, 4, 5];

let countNum = new Map <number, number>();

for (let i=0; i< num.length; i++)
{
    if(countNum.has(num[i]))
    {
        countNum.set(num[i], countNum.get(num[i])!+1)
    }
    else
    {
        countNum.set(num[i],1);
    }
}

for(let [key, value] of countNum)
{
    if(value!=1)
    {
        console.log(key)
        break;
    }
}


function firstUniqChar(s: string): number {
    let frequency = new Map <string, number>();
    let first: string;
    for(let i=0; i< s.length; i++)
    {
        if(frequency.has(s[i]))
        {
            frequency.set(s[i],frequency.get(s[i])!+1)
        }
        else
        {
            frequency.set(s[i],1);
        }
    }

    for(let [key, value] of frequency)
    {
        if(value===1)
        {
            first = key;
            break;
        }
    }

    for (let i=0; i<s.length;i++)
    {
        if(s[i]===first)
        {
            return i;
        }
        else
        {
            return -1
        }
    }
};