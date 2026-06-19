// Loops on Object and Strings Array

// 1. Iterating Object using for-in

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    sw: "swift"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// 2. Iterating Array using for-in

const programming = ["js", "rb", "py", "java", "cpp"];

for(const key in programming) {
    console.log(programming[key]);
}

// 3. High Order Function

// 3.1 Fn which takes other fn as an argument

function GetMarks(num1, num2, cb) {
    let result = num1 + num2;
    cb(result);
}

function PrintResult(result) {
    console.log(`Total marks are ${result} / 150`);
}

// GetMarks(10, 12, PrintResult); // or
GetMarks(72, 75, (result) => {console.log(`Total marks are ${result} / 150`)});

// 3.2 Fn which returns fn

function Marks(s1, s2) {
    let marks = s1 + s2;
    return () => {console.log(`Total marks are ${marks}`)}
}

const Result = Marks(96, 97);
Result();
