const user = {id:1, name:'Neo', email:'neo@neo.com'};
const stringiFiedUser = JSON.stringify(user)
console.log(typeof stringiFiedUser);
const parsed = JSON.parse(stringiFiedUser);
console.log(stringiFiedUser);
console.log(typeof parsed,parsed['id']);