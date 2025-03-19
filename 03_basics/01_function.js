function saymyname(){
    console.log("A");
    console.log("R");
    console.log("Y");
    console.log("A");
    
}
// saymyname()

// function addtwonumber(num1,num2) {
//     console.log(num1+num2);
// }

function addtwonumber(num1,num2) {
    let result=num1+num2
    return result
}
let add=addtwonumber(3,4)
// console.log(add);

function loggedin(username="Sam"){
    if (!username){
        console.log("please enter user name")
        return
    }
    return `${username} just logged in`
}
// console.log(loggedin("Arya"))

function calculateprice(num1,num2,...num3) {
    return num1
}

// console.log(calculateprice(200,400,500,2000))


const user={
    usrename:"Arya",
    price:"100"
}

function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleobject(user)


