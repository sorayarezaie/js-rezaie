const rand = Math.floor(Math.random()*10)+1;
let guess;

while(true){
    guess = parseInt(prompt("Please Enter a number between 1 - 100"));
    if(guess=== rand){
        console.log("You won!");
        break;
    }
    else if (guess> rand){
        console.log(`${guess} is high from the number we are expecting`);
    }
    else if (guess< rand){
        console.log(` ${guess} is low from ${rand}`);
    }
    else{
        console.log("you are trying to enter a text, and it is not OK!");
        break;
    }
}
let fruitArray = ['Apple', 'Banana', 'Mango', 'Berry','Orange'];
let index = 0
while(index<fruitArray.length){
    console.log(fruitArray[index]);
    index+=1;
}
let num = 0;
while(num<=100){
    if(num%2!=0){
        console.log(num)
    }
    num++;
}
let number = 1000;
do{
    console.log(number);
    number--;
}while(number>1000);