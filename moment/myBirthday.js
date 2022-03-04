const prompt = require('prompt-sync')();
const moment=require('moment');

function MyBirthday(a){
    
    let b=moment().diff(a,'years')+1;
    let x=a.add(b,'years');
    let dayys=x.diff(moment(),'days')+1;
    if(x.month()===moment().month() && x.date()===moment().date()){
        return "Happy Birthday!";
    }
    if(dayys===1){
        return dayys+" Day is left for your Birthday!";
    }
    return dayys+" Days are left for your Birthday!";
}

let a=prompt("Enter Your Date of Birth (in YYYY-MM-DD format): ");
a=moment(a);

console.log(MyBirthday(a));
