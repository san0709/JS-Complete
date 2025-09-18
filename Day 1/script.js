// Write a function isEven(num) that returns "Even" if the number is even, "Odd" otherwise.

const isEven = (num) => (num % 2 == 0 ? "Even" : "Odd");

// Reverse a String using built-in methods and Looping

function reversedStr(str) {
    return str.split("").reverse().join("");
}

function reversedStr(str) {
    let newString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// Filter Numbers Greater than 10

function filterGreater(arr) {
    let newArr = arr.filter(num => num > 10);
    return newArr;
}
filterGreater([1, 11, 3]);


