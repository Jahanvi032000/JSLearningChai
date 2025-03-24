//date

let myDate = new Date();
console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())


let myCreatedDate = new Date(2025,0,1)
console.log(myCreatedDate.toDateString())

let myTimestamp = Date.now()  //Gives value in milisecond
console.log(myTimestamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000)) //Gives value in sec when divided by 1000 and math.floor is used to remove decimal values

