let date=new Date()
console.log(date.toString());

let timestamp=Date.now()
// console.log(timestamp);
// console.log(timestamp.getTime());
console.log(Math.floor(Date.now()/1000));


let date1=new Date()
console.log(date1);
console.log(date1.getMonth()+1);
console.log(date1.getDay());

date1.toLocaleString("default",{
    weekday:"long"
})