//const tinderuser=new Object()

const tinderuser={}

tinderuser.id="123abc"
tinderuser.name="Arya"
tinderuser.isloggein=true
// console.log(tinderuser);

const regular={
    email:"a@",
    fullname:{
        userfullname:{
            firstname:"Arya",
            lastname:"shah"
            
        }
    }
}

// console.log(regular.fullname);
// console.log(regular.fullname.userfullname);
// console.log(regular.fullname.userfullname.firstname);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
// console.log(obj3);

const users=[
    {
        id:1,
        email:"a@"
    },
    {
        id:2,
        email:"a@"
    },
    {
        id:3,
        email:"a@"
    }
]
users[1].email
// console.log(tinderuser)
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isloggein'));


const course={
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"Arya"
}
const {courseinstructor : instructor} = course

//console.log(courseinstructor);
console.log(instructor);


// {
//     "name" :"Arya",
//     "course" :"js in hindi",
//     "price" :"free"
// }