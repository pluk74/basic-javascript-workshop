/*
Write a function that takes a string and returns the first character of the string. 
Test your function on a few inputs, including the empty string.
*/

function firstChar(str) {

    return str.substring(0, 1);

}

/*
Write a function that takes a string and returns the last character of a string. 
Test your function on a few inputs, including the empty string.
*/

function lastChar(str) {

    return str.substring(str.length - 1, str.length);
}


/*
Write a function that takes a string and a number, and returns the character at the position represented by the number. 
The indexing of number should start at 0. Test your function on a few inputs, including the empty string.*/


function charAtPos(str, num) {

    return str.substring(num, num + 1);
}

/*

Write a function that takes two numbers and adds them together. 
Test your function on a few inputs. 
Write in the comments what happens when you pass something other than a number to your function.
*/

function adder(x, y) {
    return x + y; //adds numbers or concatenates strings
}


/*
Write a function that takes two numbers and multiplies them together. 
Test your function on a few inputs. 
Write in your comments what happens when you pass something other than a number to your function.
*/

function multiplier(x, y) {
    return x * y; //multiplies numbers only - multiplying strings results in NaN
}


/*
Write a function that takes two numbers and a string. 
If the string is ‘add’, then return the sum of the numbers. 
If the string is ‘subtract’, return the difference. 
If the string is ‘mult’, return the product. 
If the string is ‘div’, return the ratio. Otherwise return 0.
*/

function calculator(x, y, str) {

    switch (str) {
        case "add":
            return x + y;
        case "subtract":
            return Math.abs(x - y);
        case "mult":
            return x * y;
        case "div":
            return x / y;
        default:
            return 0;
    }

}


/*
Write a function that takes a string and a number, and returns the string repeated that many number of times. 
Test your function with various inputs.
*/

function stringRepeater(str, x) {

    var arr = [];
    for (var i = 1; i <= x; i++) {
        arr.push(str);
    }
    return arr;
}


/*
Write a function that takes a string, and returns the reverse of that string. 
For example, if you pass the function the string “hello”, it should return “olleh”. 
Test your function on a few inputs, including the empty string.
*/

function strReverser(str) {

    return str.split("").reverse().join("");
}

/*
Write a function that takes a number and returns the factorial of a number. 
The factorial of 5 is 5x4x3x2x1. The factorial of 0 is 1. 
Test your input on a few numbers, including negative numbers.
*/

function myFactorialNonRecursive(x) {


    var arr = [];
    var ans = 1;

    if (x === 0) {
        return 1;
    }
    else if (x < 0) {
        return "Number must be greater than 0";
    }
    else {
        for (var i = 1; i <= x; i++) {
            arr.push(i);
        }
    }
    //return arr;
    for (var j = 0; j < arr.length; j++) {

        ans = ans * arr[j];
    }
    return ans;
}

/*
Write a function that takes a phrase as a string, and returns the longest word in that phrase. 
If the phrase contains more than one such word, return the first occurrence. 
Test your function on a few inputs.*/

function retLongestWord(str) {

    var arr = str.split(" ");
    var lengthLongest = 0;
    var posLongest;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length >= lengthLongest) {
            lengthLongest = arr[i].length;
            posLongest = i;
        }
    }

    return arr[posLongest];
}


/*
Write a function that takes a phrase, and returns the same phrase with every word capitalized. 
For example, if you pass your function "hello world", 
it should return “Hello World” and if you pass it “HELLO WORLD” or even "HeLLo WoRLD", 
it will also return "Hello World". Test your function of a few inputs.
*/

function retInUpper(str) {

    var arr = str.toLowerCase().split(" ");

    for (var i in arr) {
        arr[i] = arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1, arr[i].length);

    }
    return arr.join(" ");
}

/*
Write a function that takes an array and returns the largest number of the array. 
Test your function on a few inputs.
*/
function largestNum() {

    var largest = -Infinity;
    var posLargest = 0;

    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] >= largest) {
            largest = arguments[i];
            posLargest = i;
        }
    }
    return arguments[posLargest];
}


/*
Write a function that takes an array, and returns a filtered array. 
The filtered array should only contain the truthy values from the initial array. 
Hint: there is an array method called filter that can help you with this :)

*/

function findTruthy(val) {

    if (val) {
        return val;
    }

}

function retTruthyOnly(arr) {

    var newArr = [];
    newArr.push(arr.filter(findTruthy));


    return newArr;
}

//var x = [1, false, 0, null, 3, 8, "hello"]
//console.log(retTruthyOnly(x))


/*
Exercise 14:
Write a function that takes an array of numbers, and returns the sum of all the numbers in the array.*/

function retSum(arr) {

    var sum = 0;
    for (var i in arr) {
        sum += arr[i];
    }
    return sum;

}

//var x = [5, 3, 2, 45];
//console.log(retSum(x));


/*
Exercise 15:
Write a function that takes two arrays, and returns an array of all elements that are only in one array. 
For example, with [1,2,3] and [1,2,4,5] the function should return [3,4,5]. 
Test your function on different inputs. Hint: you should look up array methods indexOf and slice.*/

function retUniqueElements(arr1, arr2) {

    var arr3 = arr1.concat(arr2).sort();
    
    for (var i in arr1) {
        for (var j in arr2) {
            if(arr1[i] === arr2[j]) {
                while(arr3.indexOf(arr1[i])>=0) {
                    arr3.splice(arr3.indexOf(arr1[i]),1);
                }
            }
        }

    }

    return arr3;
}

var x = [1,2,3,44];
var y = [0,1,2,4,5,6,9];


//console.log(retUniqueElements(x,y));
/*
Mini Challenge: write a function that takes an array and a function as arguments. 
The function should return a new array that maps every element of the input array by passing it through the function you received. 
You are not allowed to use Array.map for this challenge, otherwise it would be too easy :)
*/


function procArray (val) {

    return val + 1;
}

//console.log(procArray(3));

function retMappingArr (arr,fnct) {
    
    var arr2 = [];
    //loop over arr
    for(var i in arr) {
        //pass each element to fnct
        arr2.push(fnct(arr[i]));    //push result to new array
    }
    return arr2;
    
    //return new array
}

var x = [2,3,4,5];

console.log(retMappingArr(x,procArray))