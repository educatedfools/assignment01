//1)
//let someMonth;
//function theMonth();
//let currentMonth;
//let summerMonth;
//let myLibraryFunction();

//2)
//let numericLiteral = 10;
//let stringLiteral = 'string';
//let booleanLiteral = true;
//let nullLiteral = null;

//3)
//let complexVariable1 = new Date();
//let complexVariable2 = ['arrays', 'are', 'so', 'complex'];

//4)
//let firstName, lastName, address, city, state, zipCode, yourAge, referralSource, mayWeContactYou;

//5) don't fully understand the question so I think I'm doing more than needed here
//var firstName = 'Mike';
//let firstName = 'Mike';
//const firstName = 'Mike';
//var lastName = 'Rhodes'; var lastName = 'Smith'; possible yet bad practice
//let lastName = 'Rhodes'; let lastName = 'Rhodes'; syntaxerror
//const lastName = 'Rhodes'; lastName = 'Smith'; typeerror

//just for fun
/*
function funWithVariables(){
    console.log(varCity); //undefined, declaration is hoisted
    console.log(letCity); //referenceerror
    let letCity = 'San Diego';
    var varCity = 'San Diego';
}

funWithVariables();
*/

//6)
//let numString = 'Mike';
//numString += 10;
//console.log(numString) //'Mike10'

//7)
//let booleanString = true;
//booleanString += 'Mike';
//console.log(booleanString); //trueMike
//let = booleanNum = true;
//booleanNum += 10;
//console.log(booleanNum); //11

//8)
//let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
//this is a syntaxerror, need to escape the I'm to I\'m

//9)
//let nullVar = null;
//let undefVar;

//10)
/*
let num = 10;
let str = 'Mike';
let bool = true;
let obj = {};
let undef;
console.log(typeof(num),typeof(str),typeof(bool),typeof(obj),typeof(undef));
*/

//11 & 12 & 13 & 14 & 15 & 16)
//as a side note I had no idea template literals existed. I'd like to know the cumulative time these would have saved me
/*
let myName = 'Mike Rhodes';
let course = 'JavaScript';
let userName = prompt('What is your name?');
let userClass = prompt('What class are you taking?');
alert('Hello ' +  'Mike Rhodes' + ', welcome to the JavaScript class!');
alert(`Hello ${myName}, welcome to the JavaScript class!`);
alert(`Hello ${myName}, welcome to the ${course} class!`);
alert(`Hello ${myName}, \nwelcome to the ${course} class!`);
if(userName !== null){
    alert(`Hello ${userName}, welcome to the ${course} class!`);
    alert(`Hello ${userName}, welcome to the ${userClass} class!`);    
}
else{
    alert('I can\'t believe you hit cancel');
}
*/

//17)
//let x = 10;
//let y = 20;
//console.log(x+y);

//18)
//let x = 20;
//x += 20;
//console.log(x);

//19)
//let x = 20;
//x *= 5;
//console.log(x);

//20)
//let x = 20 % 3;
//x /= 1;
//console.log(x);

//21)
/*
function returnTrue(){
    let x = 20;
    let y = 10;
    let sum = x + y;
    if(sum === 30 && sum !== null){
        console.log('true', + sum);
        return true; //Can I ask questions in my homework? I know that return true will stop
                     // execution of my function and return me to the calling function, 
                     //but i'd like to know if there's something I can do with this? can I return
                     // the variable sum (for example) and use this in my callbacks? Can I use 'true'
                     // in conditionals down the line? I suppose I just never saw the great value in return
                     // other than killing functions.
    }
    else{
        console.log('uh oh spaghettio');
    }
};
returnTrue();
*/

//22)
/*function returnFalse(arg1, arg2){
    let num1 = arg1;
    let num2 = arg2;
    let remainder = num1 - num2;
    if(remainder >= 100){
        console.log('uh oh spaghettio');
    }
    else{
        console.log('false, ' + remainder);
    }
}
returnFalse(20, 10);
*/

//I know some of these are more than you're asking for, it just felt good to write code
//(been over 3 years) and I couldn't help but go a bit further with it








