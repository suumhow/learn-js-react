// function declaration hoisting can be put wherever cause its declaration
function greet() {
    console.log('hi');
}
//function expression run the function on assignation
const speak = function(name = 'luigi', time) { // default parameter on name
    console.log(`hello ${time} ${name}`);
};


//greet();
const name = "tom"
const time = 'today'
speak(name, time); //order is important

// regular function
const calcArea = function(radius){
    return 3.14 * radius**2;
};
const area = calcArea(5);
console.log(area);

//arrow function can give up paranthesis on number if only one argument
const square = (number) => {
    return number**2
};
console.log(square(5))

//arrow function with just a simple return

const resquare = (number) => number**2;
console.log(resquare(5))

//callback function pass a function as an argument of a method or another function
const div = document.querySelector(".people");

const people = ['mario', 'luigi', 'tom']

let html = '';

people.forEach(i => {
    html += `<li style="color:purple">${i}</li>`;
  
})
console.log(html);
div.innerHTML = html;

//use arrow function to keep the scope of this in a method!!!!

// rest argument

const printList = (...args) => { // ... turns arguments into a list
    console.log(args)
}
printList("yo", "ya", "dfsg")