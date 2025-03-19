const marvel=["thor","ironman","spiderman"]

const dc=["superman","flash","batman"]

// marvel.push(dc)

// console.log(marvel);

// all=marvel.concat(dc)
// console.log(all);

// const all=[...marvel,...dc]
// console.log(all);


const newarr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const a=newarr.flat(Infinity)
console.log(a);

console.log(Array.isArray("arya"))
console.log(Array.from("arya"))
console.log(Array.from({name:"Arya"})) //interesting

let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3));
