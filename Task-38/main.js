"use strict";
// TASK 38
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}`);
}
describe_city('Karachi');
describe_city('France', 'Europe');
describe_city('Islamabad');
