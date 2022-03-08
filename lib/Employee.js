class Employee {
    constructor(name=""){
        this.name = name;
        // this.id = id
        // this.email = email
    }

    getName(){
        return `${this.name} is an Employee at Milan`
    }
}

module.exports = Employee;