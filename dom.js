//query selector

const para = document.querySelector('p'); // the first p tag in the document
const paras = document.querySelectorAll('p');
const buttons = document.querySelectorAll('.btn');// result is a nodelist  can use foreach ;)
const buttonsbyclass = document.getElementsByClassName('btn');//result is an html collection and cant use foreach!!!!
const buttonbyid = document.getElementById('btnid')
const link = document.querySelector('a');

console.log(buttons)
console.log(paras)
console.log(paras[1]) // we can index
console.log(buttonsbyclass)
para.innerText = ' changed' //change text in the tag
para.innerText += ' addition' // append to the etxt
paras.forEach(para =>{
    para.innerText += para.innerText; // += append = overwrite , para.textContent also get hidden text
    para.innerHTML += `<div>another div</div>`
})

console.log(link.getAttribute('href')); // get attribute after query selector
console.log(buttonbyid.getAttribute('href')); // get attribute after get elementby
link.setAttribute("href", "tom.com") //set new/update attribute
buttonbyid.setAttribute("href", "ok");
buttonbyid.setAttribute("name", "submit")
console.log(buttonbyid.getAttribute('href'));
console.log(link.getAttribute('href'));
console.log(buttonbyid.getAttribute('name'));
console.log(para.style); //show all the css properties
para.style.backgroundColor = 'blue'; // add a css style but dont override the others, in javascript camelcase margin-top>< marginTop
console.log(para.classList); //all the classlist of the item
para.classList.add('btn', 'dfsfsdf') // add class to item
console.log(para.classList);
para.classList.remove('btn'); // remove class
para.classList.toggle('someclass') // toggle remove,add

//
paras.forEach(para => {
    if (para.innerText.includes('success')){
        para.classList.add('success')
    }
    if (para.innerText.includes('error')){
        para.classList.add('error')
    }
    
})
// event listener
para.addEventListener('click', e => {  // arrow callback funct(ion)
    e.preventDefault();
    para.style.backgroundColor= "green";
})

paras.forEach(para => {
    para.addEventListener('click', e => {
        para.style.backgroundColor = "green";
    })
})