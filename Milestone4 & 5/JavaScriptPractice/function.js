let str = "0111000100111100111101011";
let list = str.split('0');
list2 = [];
for(let i = list.length - 1;i>=0;i--){
    if(list[i] != ''){
        list2.push(list[i]);
    }
}
let tom = 0;
for(let i=0;i<list2.length;i+=2){
    tom += list2[i].length;
}
console.log(list2);
console.log(tom);