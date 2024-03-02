// reduce executes operations like sum/mul/sub etc and returns the final value of all the elements of array


const students = [
    {name:'Neo',age:24,class:'xi'},
    {name:'Eyafi',age:23,class:'xi'},
    {name:'Roman',age:24,class:'xi'},
    {name:'Neo',age:24,class:'xi'},
];

const totalAge = students.reduce((accumulator,student) =>{
    console.log(accumulator,student.age);
    return accumulator+student.age;
},0);

console.log(totalAge);

const arr = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];

const removeDuplicate = arr.reduce((accumulator,current) =>{
    if(accumulator.indexOf(current) === -1){
        accumulator.push(current);
    }
    return accumulator;
},[]);

console.log(removeDuplicate);