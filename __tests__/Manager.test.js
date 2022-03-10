const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require("../lib/Manager");

test("obtain the details of the Manager", ()=>{
    const manager = new Manager("sdad", 123, "qwqwe", 12345)

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})