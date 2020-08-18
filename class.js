class Person {
    constructor() {
        this.name = 'max';
    }
    printMyName() {            // bad syntax for method this keyword problem use arrow function
        console.log(this.name);
    }
}
const person = new Person(); // keyword new for new instance
person.printMyName()

class Skills extends Person {  //child of person inherit method and constructor
    constructor() {
        super ();               // super() to inherit parent constructor
        this.skill = [
            "mao", "cpu", "framework"
        ]
    }
    printMySkills() {   // bad syntax for method this keyword problem use arrow function
        console.log(this.skill)
    }
}

const skill = new Skills();
skill.printMyName()
skill.printMySkills()

class Behavior extends Skills {       // no need for constructor in modern es7
    trait = [
        "brave",
        "tenacious",
        "sympa",
    ]
    printMyTrait = () => {
        console.log(this.trait)
    }
}
const stuff = new Behavior();
stuff.printMyName()
stuff.printMySkills()
stuff.printMyTrait()