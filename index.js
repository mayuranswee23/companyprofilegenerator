const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'text',
            message: 'What is the name of the Employee?',
            name: 'Name'
        },
        {
            type: 'input', 
            message: 'What is the ID of the Employee?',
            name: 'ID'
        }
    .then(({name})=> {
        this.player = new Player (name)
    })
   
    ])
    
}

questions()