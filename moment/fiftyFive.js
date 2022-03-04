const prompt = require('prompt-sync')();
const moment=require('moment');
function FiftyFive(a,x){
    let b=a.add(x,'days');
    return b;
}
let a=prompt("Enter the date (in YYYY-MM-DD format): ");
a=moment(a);
let x=prompt("Enter the days you want to add: ")
console.log("The date will be: "+""+FiftyFive(a,x).format("DD-MM-YY"));