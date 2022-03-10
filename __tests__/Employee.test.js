const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('obtain the details of the Employee', ()=>{
    const employee = new Employee('John', 123, "asdasda");

    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

