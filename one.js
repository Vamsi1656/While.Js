/*write a code to print 1 to 10 numbers
let i=1
while(i<=10){
    console.log(i)
    i++
}*/
/*write a code to print 1 to 10 numbers
i=10
while(i>=1){
    console.log(i)
    i--
}*/
/*write a program to print 1 to 10 even  numbers
i=0
while(i<20){
    console.log(i)
    i=i+2
*/
/*write a program to print multiples of 4
i=4
while(i<=40){
    console.log(i)
    i=i+4
}*/
/*write a program to print mutliplication table of 6
i=1
while(i<=10){
    console.log("6*",i,"=",6*i)
    i++
}*/
/*factors of 24
i=1
while(i<=24){
    if(24%i===0)
       console.log(i)
        i++
      }*/
/*reverse a number*/

let number = 123456789;
let reversedNumber = 0;
while (number > 0) {
    reversedNumber = (reversedNumber * 10) + (number % 10);
    number = Math.floor(number / 10);
}
console.log("Reversed number is : "+reversedNumber);
