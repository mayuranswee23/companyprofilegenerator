const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('obtain the details of the Intern', ()=>{
    const intern = new Intern("sdad", 123, "qwqwe", "dadsad")

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})