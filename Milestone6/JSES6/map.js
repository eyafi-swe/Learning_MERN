const arr = [1,2,3,4,5];

const doubleArr = arr.map(number => number*2); 
console.log(doubleArr);


const students = [{name:'Neo',age:24,class:'xi'},{name:'Eyafi',age:23,class:'xi'},{name:'Roman',age:24,class:'xi'},{name:'Neo',age:24,class:'xi'}];

const studensNames = students.map(student => student.name); //map access to all of the elements and execute operations and returns output
console.log(studensNames);

students.forEach(student => console.log(student.name)); // foreach doesn't returns only prints and execute.