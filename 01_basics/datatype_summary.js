//primitive

//b7 type: string,Number,Boolearn,null,undedined,symbol,BigInt

const score=100;
const scorevalue=null

let useremail;
const id=Symbol("123")
const anotherid=Symbol("123")

//console.log(id==anotherid);

const heros=["caption","spiderman","hulk"];

let myobj={
    name:"Arya",
    age:"19"
}
//Reference (Non primitive)

//Array,objects,Function

const myfun= function(){
    console.log("Hello world");
    
}




//------------------------------------------------------------------------------

//stack (primitive),Heap memory(non-primitive)

let myname="Arya"
let anothername=myname
anothername="Arya1"
console.log(myname);
console.log(anothername);


//non
let userone={
    name:"Arya",
    id:1
}
let usertwo=userone
usertwo.name="bye"
console.log(userone.name)
console.log(usertwo.name)