const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the Employee?',
            name: 'Name'
        }
    .then(({name})=> {
        this.employee = new Employee(name);

        console.log(name)
    })
    ])
    
}

