const score = 40000000
console.log(score);  // o/p 400

const balance = new Number(score);
console.log(balance);                 //o/p [Number: 400]

console.log(balance.toString().length) //Converts to string value and gives the length
console.log(balance.toFixed(2))  //Gives decimal precision
console.log(balance.toLocaleString())  //Gives comma separated values

/*------------------------------------------------------------------------*/

//Math----->

console.log(Math)  //It is an object
console.log(Math.abs(-9))  //Changes the sign i.e., -ve to +ve, +ve remains +ve
console.log(Math.round(5.6))
console.log(Math.floor(2.3)) //Return the value i.e., smallest
console.log(Math.ceil(5.6)) //Return the value i.e, greater
console.log(Math.min(4,5,6,7)) //Returns the minimum value
console.log(Math.max(6,7,8,9)) //Returns the max value

console.log(Math.random())  //Gives random values b/w 0 and 1
console.log((Math.random()*10)+1) 
console.log(Math.floor((Math.random()*10)+1))  //Gives value b/w 1-9


const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1) + min))



