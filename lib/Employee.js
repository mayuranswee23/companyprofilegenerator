class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id
        this.email = email
    }

    getName(){
        return `${this.name} is an Employee at Milan`
    }

    getId(){
        return `The ID number for ${this.name} is ${this.id}`
    }

    getEmail(){
        return `The email for ${this.name} is ${this.email}`
    }

    getRole(){
        return `Employee`
    }
}


module.exports = Employee;