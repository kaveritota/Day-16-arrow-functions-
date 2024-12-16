// 1.Write an arrow function that takes two parameters, a and b, and returns their sum.
var sum=(a,b)=>a+b;
console.log(sum(10,20));
console.log("-----------------------------------------------------------")
// 2.Create an arrow function that takes a single parameter name and returns a greeting message: “Hello, {name}!”
var myName=name=>`Hello ${name}!`;
console.log(myName("John"));
console.log("---------------------------------------------------------- -")
//3. Write an arrow function that checks if a number is even and returns true if it is, or false otherwise.
var checkEvenOrOdd=a=>{
    if(a%2==0){
         return "Even";
    }
    else{
        return "Odd";
    }
}
console.log(checkEvenOrOdd(20));
console.log("--------------------------------------------------------------")
// 4.Write an arrow function that accepts a number and returns true if the number is greater than 10, or false otherwise.
var checkNum=a=>{
    if(a>10){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkNum(6));
console.log("-----------------------------------------------------------------")
// 5.Create an arrow function that takes two strings, compares their lengths, and returns the longer string. If both have the same length, return “Equal length.”
var checkLength=(str1,str2)=>{
    if(str1.length>str2.length){
        return str1;
    }
    else if(str1.length<str2.length){
        return str2;
    }
    else{
        return "Both Strings have Equal Length";
    }

}
console.log(checkLength("hello","javascript"));