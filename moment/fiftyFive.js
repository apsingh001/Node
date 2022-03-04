const moment=require('moment');
function FiftyFive(a){
    let b=a.add(55,'days');
    return b;
}
let a=moment();
console.log(FiftyFive(a).format("DD-MM-YY"));