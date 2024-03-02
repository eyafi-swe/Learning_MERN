
const students = [
    {name:'Neo',age:24,class:'xi'},
    {name:'Eyafi',age:23,class:'xi'},
    {name:'Roman',age:24,class:'xi'},
    {name:'Neo',age:24,class:'xi'},
];

const ageMoreThan23 = students.filter(student => student.age > 23); // filter returns all matching the condition
const age24 = students.find(student => student.age === 24); // find returns the first element matcing the condition
//console.log(age24);
//console.log(ageMoreThan23);

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];

const odd = arr.filter(item => item%2==0);
console.log(odd);