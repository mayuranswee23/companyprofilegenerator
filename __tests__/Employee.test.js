const Employee = require('../lib/Employee.js');

test('obtain the namer of the Employee', ()=>{
    const employee = new Employee('John');

    expect(employee.name).toBe('John');
})