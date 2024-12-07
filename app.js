

// const rand = Math.floor(Math.random()*10)+1;
// let guess;

// interpreter=> v8

// while(true){
//     guess = parseInt(prompt("Please Enter a number between 1 - 100"));
//     if(guess=== rand){
//         console.log("You won!");
//         break;
//     }
//     else if (guess> rand){
//         console.log(`${guess} is high from the number we are expecting`);
//     }
//     else if (guess< rand){
//         console.log(` ${guess} is low from ${rand}`);
//     }
//     else{
//         console.log("you are trying to enter a text, and it is not OK!");
//         break;
//     }
// }
// let fruitArray = ['Apple', 'Banana', 'Mango', 'Berry','Orange'];
// let index = 0
// while(index<fruitArray.length){
//     console.log(fruitArray[index]);
//     index+=1;
// }
// let num = 0;
// while(num<=100){
//     if(num%2!=0){
//         console.log(num)
//     }
//     num++;
// }
// let number = 1000;
// do{
//     console.log(number);
//     number--;
// }while(number>1000);
// // we are going to learn JS tonight!
// js ECMASCRIPT, typescript=> JS, prepared codes for  easy development. prepared codes of a language that does certain things.
// JQuery, Angular= library
// Vue.js, React.js, Next= framework
// static; let a = 10;
// js => hoisting 
//
// let a = 10;
// let b = '10';
// console.log(a ===a )
// let present = fals;
// // if(condition){statement}
// if(present===true){
//     console.log('You are present today');
// }
// else{
//     console.log('You are absent')
// }
const age = 1;
// 12 - 18 child
//1-12 kid
//18< adult
// if(age>= 1 && age<=12){
//     console.log('you are a kid');
// }
// else if(age>12 && age<=18){
//     console.log('you are a child');
// }
// else if(age>18){
//     console.log('you are an adult');
// }
// else{
//     console.log('You are trying to enter a text')
// }
// const shirt_price = 90;
// //250 cheap. 250 normal 250< expensive
// if(shirt_price>50 && shirt_price<250){
//     console.log('This is cheap')
// }
// else if(shirt_price===250){
//     console.log('this is normal price')
// }
// else{
//     console.log('this is expensive');
// }
// condition 
let weather = 'snowy';
switch(weather){
    case 'sunny':
        console.log('Today is sunny');
        // break, continue,
        break;
    case 'stormy':
        console.log('Today is stormy');
        break;
    case 'cloudy':
        console.log('Today is cloudy');
        break;
    default:
        console.log('maybe it is a different type of weather');
        break;
}
// while loop