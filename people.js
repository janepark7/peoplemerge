const fs = require ('fs');

//	read me files from json - contains people's names

const people1 = require ("./people1.json");
const people2 = require ("./people2.json");
// console.log(people1);
// console.log(people2);
//
let peopleMerge = people1.concat(people2);
console.log(peopleMerge.sort());
