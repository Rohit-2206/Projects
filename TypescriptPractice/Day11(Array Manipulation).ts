//Exercise 1 (Reverse an Array)
function reverseArray (num: number[]){
    let left: number = 0;
    let right: number = num.length-1;
   
    while(left<right)
    {
        let temp: number = num[left];
        num[left] = num[right];
        num[right] = temp;

        left++;
        right--;
    }

    for (let i=0; i< num.length;i++)
    {
        console.log(num[i])
    }
}

let arr = [1,2,3,4,5];
reverseArray(arr);


//Exercise 2 (Swap elements in an Array)
const swapArr = (num: number[], a: number, b: number)=>{
    let temp: number = num[a];
    num[a] = num [b]
    num [b] = temp;

    for (let i=0; i< num.length;i++)
    {
        console.log("Swapped Array",num);
    }
}

swapArr(arr,1,3);