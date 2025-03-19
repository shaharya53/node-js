//singleton

//object literals
//Object.create

const mysy=Symbol("key1")

const jsuser={
    name:"Arya",
    "full_name":"shah arya",
    [mysy]:"mykey1",
    age:19,
    location:"Ahmedabad",
    email:"Arya@gmail.com",
    lastloginon:['monday','sunday']
}
// console.log(jsuser.name);
// console.log(jsuser.email);
// console.log(jsuser["full_name"]);
// console.log( jsuser[mysy]);

// jsuser.email="a@"

// Object.freeze(jsuser)
jsuser.email="b@"
//console.log(jsuser)

jsuser.greeting=function(){
    console.log("Hello js user"); 
}


jsuser.greeting2=function(){
    console.log(`Hello js user,${this.name}`); 
}

console.log(jsuser.greeting());
console.log(jsuser.greeting2());

