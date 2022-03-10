const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');


test('obtain the details of the Engineer', ()=>{
    const engineer = new Engineer('John', 123, "asdasda", "asdfasf");

    expect(engineer.name).toBe('John');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})