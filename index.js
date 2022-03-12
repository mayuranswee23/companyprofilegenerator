const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
// const generatePage = require('./src');

const {writeHTML, copyStyle} = require('./src/generatePage');
const template = require('./src/page-template');

const team = [];

const managerPrompts = () =>{

  

    return inquirer.prompt([
        {
            type: 'input', 
            name: 'name', 
            message: 'What is your name?',
            validate: nameValue => {
                if (nameValue){
                    return true;
                } else {
                    console.log('Please enter your name')
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'id', 
            message: 'What is the ID of the Manager?'
        }, 
        {
            type: 'input', 
            name: 'email', 
            message: 'What is the email address of the Manager?'
        }, 
        {
            type: 'input', 
            name: 'officeNumber', 
            message: 'What is the office number for the Manager?'
        }
    ])
     .then(response => {
         const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
         team.push(manager); 
         
     })
}


const employeePrompts = () => {
    return inquirer.prompt([
        {
        type: 'list', 
        name: 'employee', 
        message: 'Which employee would you like to create a profile for next?', 
        choices: ['Intern', 'Engineer', 'Exit']
    }
]).then(response => {

    if (response.employee === 'Intern'){
        internPrompts();
    } else if(response.employee === "Engineer"){ 
        engineerPrompts();
    } else if(response.employee ==="Exit"){
        generatePage();
    }
})
}

const internPrompts =()=>{

   
    return inquirer.prompt([
        {
            type: 'input', 
            name: 'name', 
            message: 'What is your name?',
            validate: nameValue => {
                if (nameValue){
                    return true;
                } else {
                    console.log('Please enter your name')
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'id', 
            message: 'What is the ID of the Intern?'
        }, 
        {
            type: 'input', 
            name: 'email', 
            message: 'What is the email address of the Intern?'
        }, 
        {
            type: 'input', 
            name: 'school', 
            message: 'What school does the Intern attend?'
        }
    ]).then(response=>{
        const intern = new Intern(response.name, response.id, response.email, response.school); 
        team.push(intern)
        employeePrompts();
       
    })
}

const engineerPrompts = () => {

    return inquirer.prompt([
        {
            type: 'input', 
            name: 'name', 
            message: 'What is your name?',
            validate: nameValue => {
                if (nameValue){
                    return true;
                } else {
                    console.log('Please enter your name')
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'id', 
            message: 'What is the ID of the Engineer?'
        }, 
        {
            type: 'input', 
            name: 'email', 
            message: 'What is the email address of the Engineer?'
        }, 
        {
            type: 'input', 
            name: 'github', 
            message: 'What is your Github username?'
        }
    ]).then(response=>{
        

        const engineer = new Engineer (response.name, response.id, response.email, response.github);
        team.push(engineer);
        // // console.log(data.enginner);
        employeePrompts();
    })
}

const generatePage = () => {
    fs.writeFileSync('./dist/index.html', template(team))
}


managerPrompts()