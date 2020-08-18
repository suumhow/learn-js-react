const items = [
    { name: 'bike', price:100, quantity :2},
    { name: 'mike', price:80, quantity :50},
    { name: 'hp', price:4000, quantity :2},
    { name: 'synth', price:500, quantity :20},
    { name: 'manual', price:100, quantity :70},
    { name: 'plugin', price:35, quantity :999},
]

// Filter, doesn t alter original array ;)
const filterItems = items.filter((item) =>{
    return item.price >= 50 && item.quantity <=50
})

//Map
const itemNames = items.map((item) =>{
    return item.name 
})

//find, find firest element that have the return criteria
const foundItem = items.find((item) =>{
    return item.name === 'bike'
})

//forEach , iterate the array doesn t return anything
items.forEach(element => {
    console.log(`do something with ${element}`)
}); 

//some and every , boolean check
const itemExist = items.some((item) =>{
    return item.name === 'bike'   // True
})
const itemAre = items.every((item) =>{
    return item.name === 'bike'   // False
})
//include , return boolean
const list = ['hp','sunth']
const includesHp = list.includes('hp')
console.log(includesHp)