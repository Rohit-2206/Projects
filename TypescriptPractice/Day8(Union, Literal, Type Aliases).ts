//Exercise 1
let employeeId: string | number;
employeeId = 90;
employeeId= "LO90"

//Exercise 2
function printValue(value: string | number): string | number{
    return value;
}

const result = printValue(100)
console.log(result);

const result1 = printValue("PP");
console.log(result1)


//Exercise 3
let statusValue: "Pass" | "Fail" | "In progress"
//statusValue = "Completed"


//Exercise 4
type browser= "Chrome" | "Firefox" | "Edge"
const currentTab: browser = "Chrome";
console.log(currentTab);

//Exercise 5
type Employee= {
    "name": string,
    "ID": number,
    "Role": string 
}

const employee1: Employee = {
    name: "Rohit",
    ID: 90,
    Role:"CEO"
}
console.log(employee1.name)

//Exercise 6
type EmployeeID = string | number;

const employee= (Id: EmployeeID) => {
    return Id;
}

const result6 = employee(100)
console.log(result6);

//Exercise 7
let students : Map <string, number> = new Map();

students.set("Rohit", 90);

console.log(students.get("Rohit"));


//Exercise 8
const employeeMap = new Map<number, string>();

employeeMap.set(101, "Rohit");
employeeMap.set(102, "Rahul");
employeeMap.set(103, "Arun")

console.log(employeeMap.has(102));

//Exercise 9
console.log(employeeMap.get(103));

//Exercise 10
const marks = new Map<string, number>();

marks.set("A1", 150);
marks.set("B2", 400);
marks.set("C3", 336);

console.log(marks.get("A1"));

console.log(marks.has("F4"));

marks.delete("A1");

console.log(marks.size);

