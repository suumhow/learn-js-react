
// let or const{or[(var name)=defaultvalue(optional)]or} = object or array we want to destructuralize



const alphabet = ['a','b','c','d','e','f'];
const numbers = ['1','2','3','4','5','6'];

let [a,b] = alphabet; //  position a and b is important [] cause destructuring an array  we can then reassign a,b with let
console.log(a,b); //output a b
 [a,b] = numbers;
console.log(a,b); //output 1 2

const newarray = [...alphabet,...numbers] //... spread operator , combine 2 arrays == alphabet.concat(numbers)
console.log(newarray); //output ['a','b','c','d','e','f','1','2','3','4','5','6'] 

//////////////////////

function sumandmultiply(x,y){
    return [x+y,x*y]
}
let [sum,mul] = sumandmultiply(5,6) // super handy for funstion that return array
console.log(sum,mul) // 11 30
let division
[sum,mul,division ="no div"] = sumandmultiply(5,6) //division now have default value
console.log(sum,mul, division) // 11 30 "no div" cause sumandmultiply only return array of 2 element

////////////
 let user ={
    name: 'crystal',
    age: 30,
    email: 'fdsfsfsd@fdfds.com',
    blogs: [
        {title: 'dcsdfsdsdd', likes: 30},
        {title: 'dcgfdsdfsdsdd', likes: 40},
    ] 
 }
 let user2 ={
    name: 'tom',
    age: 35,
    email: 'fdsfsdfdfsdffsd@fdfds.com',
    blogs: [
        {title: 'dcsdfddfsdsdd', likes: 30},
        {title: 'df', likes: 50},
    ] 
 }
 let {name,age} = user //destructuring an object name matter not position
 console.log(name) // 'crystal'
 let{name:first_name,email:username,...rest} = user2 // constant take property of object
 console.log(first_name,username) // 'tom" 'fdsfsdfdfsdffsd@fdfds.com'
 console.log(rest) // ...spread operator takes rest of object
 

 function print({name}){ //destructuring the argument
     console.log(name)
 }
 print(user2)  // tom