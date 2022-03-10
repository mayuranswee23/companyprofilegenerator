const Employee = require("./Employee");

class Engineer extends Employee{
    constructor (name, id, email, github){
        super(name, id, email);

    this.github = github; 
    }

    getGithub(){
        return `The Github repository for ${this.name} is ${this.github}`
    }

    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;