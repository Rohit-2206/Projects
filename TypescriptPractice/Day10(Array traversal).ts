//Exercise1
let arrTrav: number[] = [12, 7, 4, 9, 16, 3, 20];

for(let i =0; i<arrTrav.length;i++)
{
    if(arrTrav[i]%2===0)
    {
        console.log(arrTrav[i])
    }
}


//Exercise 2
let arrTrav2: number[] = [10, 25, 30, 45, 50];
let target: number = 45;
let index: number= -1;

for (let i=0; i< arrTrav2.length; i++)
{
    if(arrTrav2[i]===target)
    {
        index = i;
        break;
    }
}

console.log(index)


//Exercise 3
let maxMinArr: number[] = [14, -3, 27, 0, 8, -10, 19];
let maxNum: number = maxMinArr[0];
let minNum: number = maxMinArr[0];

for(let i=1; i<maxMinArr.length;i++)
{
    if(maxNum < maxMinArr[i])
    {
        maxNum = maxMinArr[i]
    }
        if(minNum > maxMinArr[i])
    {
        minNum = maxMinArr[i]
    }
}

console.log(maxNum);
console.log(minNum);

//Exercise 4
let secLargestArr: number[] = [-10, -20, -30];
let largest: number = secLargestArr[0];
let secLargest: number | undefined = undefined;

for(let i=1; i<secLargestArr.length;i++)
{
    if (secLargestArr[i] > largest)
    {
        secLargest = largest
        largest = secLargestArr[i];
    }
    else if(secLargestArr[i] < largest && (secLargest === undefined || secLargestArr[i] > secLargest))
    {
        secLargest= secLargestArr[i]
    }
}
console.log(secLargest);