const moment=require('moment');

function MyBirthday(a){
    let b=moment().diff(a,'years');
    let x=a.add(b,'years');
    if(x.isSame(moment().format("YYYY-MM-DD"))){
        return "Happy Birthday!";
    }
    else{
        x=x.add(1,'years');
        return x.diff(moment(),'days')+1;
    }
}
let a="2000-03-04";
a=moment(a);


console.log(MyBirthday(a));
