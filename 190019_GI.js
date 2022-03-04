const prompt=require('prompt-sync')();

function APS(amount){
if(amount<=250000){
    console.log("No Tax");
}
else if(amount>250000 && amount<=500000){
    let tax=(5*amount)/100;
    console.log("Tax is: "+""+tax);
}
else if(amount>500000 && amount<=750000){
    let tax=(10*amount)/100;
    console.log("Tax is: "+""+tax);
}
else if(amount>750000 && amount<=1000000){
    let tax=(15*amount)/100;
    console.log("Tax is: "+""+tax);
}
else if(amount>1000000 && amount<=1250000){
    let tax=(20*amount)/100;
    console.log("Tax is: "+""+tax);
}
else if(amount>1250000 && amount<=1500000){
    let tax=(25*amount)/100;
    console.log("Tax is: "+""+tax);
}
else{
    let tax=(30*amount)/100;
    console.log("Tax is: "+""+tax);
}
}

let amount = prompt("Please enter amount: ");
APS(amount)