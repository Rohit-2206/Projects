//Exercise 1 (Left Rotation)
/*let numArr: number[] = [1,2,3,4,5];

if(numArr.length>0){
let left = numArr[0];
for(let i=0; i<numArr.length-1;i++)
{
    numArr[i] = numArr[i+1];
}
numArr[numArr.length-1]= left;
}
for(let i=0; i<numArr.length;i++)
{
    console.log(numArr[i]);
}


//Exercise 2 (Right Rotation)
let numArr1: number[] = [1,2,3,4,5];
if(numArr1.length>0)
{
    let right: number = numArr1[numArr1.length-1]
    for(let i=numArr1.length-2; i>=0;i--)
    {
        numArr1[i+1]= numArr1[i];
    }
    numArr1[0] = right;
}
for(let i=0; i<numArr1.length;i++)
{
    console.log(numArr1[i]);
}


//Exercise 3 (Rotate array by k times)
let kArr: number[] = [1,2,3,4,5,6,7 ];
let k: number = 3;
if(kArr.length>0)
{
    k = k % kArr.length;
    for(let j=0; j<k; j++)
    {
        let temp: number = kArr[kArr.length-1]
        for(let i=kArr.length-2; i>=0;i--)
        {
            kArr[i+1] = kArr[i];
        }
        kArr[0] = temp;
    }
}
for(let i=0; i<kArr.length;i++)
{
    console.log(kArr[i]);
}


//Exercise 4 (Insert an element)
let insertArr: number[] = [10,20,40,50];
let position: number = 2;
let value: number = 30;

if (position >= 0 && position <= insertArr.length) {
    insertArr.length = insertArr.length + 1;

    for (let i = insertArr.length - 2; i >= position; i--) {
        insertArr[i + 1] = insertArr[i];
    }

    insertArr[position] = value;
}

for(let k=0; k<insertArr.length;k++)
{
    console.log(insertArr[k]);
}


//Exercise 4 (Delete at end)
let deleteArr: number[] = [10, 20, 30, 40, 50];
let pos: number = 2;

if(pos>=0 && pos < deleteArr.length)
{
    for (let i=pos; i<deleteArr.length-1;i++)
    {
        deleteArr[i] = deleteArr[i+1];
    }
}

deleteArr.pop();

for(let j=0; j<deleteArr.length;j++)
{
    console.log(deleteArr[j])
}*/


//Exercise 5 (Missing Number)
let missingNum: number[] = [1,2,3,4];
let maxNum: number = 5;
let arrSum: number = 0;

for(let i=0; i<missingNum.length;i++)
{
    arrSum+=missingNum[i];
}

let sum: number = maxNum*(maxNum+1)/2
console.log(sum)
console.log(arrSum);

console.log("Missing number", sum-arrSum);


//Exercise 6 (Missing Number Approach 2)

let n: number=1;
let found: boolean = false;

for(let i=0; i<missingNum.length;i++)
{
    if(missingNum[i]===n)
    {
        n++;
        continue;
    }
    else
    {
        console.log(n);
        found = true;
        break;
    }
}

if(found===false)
{
    console.log(maxNum+1);
}

