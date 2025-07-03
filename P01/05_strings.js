const name = "Kunj"
const repoCount = 50
// console.log(name + repoCount +" Value");

// String interpolation
// console.log(`Hello My Name is ${name} and my Reposetory Count Is ${repoCount}`)


// Give a key Value pair 
const gameName = new String ('VKis-AlwasON')

// console.log(gameName[1]);
// console.log(gameName.__proto__);

console.log(gameName.length);

// it will not change the original valaue because string are Primitive type so it gets copy of original data 
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(8));
// console.log(gameName.indexOf('O'));

// if nagetive value is given then it will be igored
const newString = gameName.substring(0,4)
// console.log(newString);

// in slice we can use nagetive values. the last element is -1
const anotherString = gameName.slice(-4,-1)
// console.log(anotherString);

//Trim : Remove whiteSpace
const newStringOne = "    Kunj    "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url ="https://kunj.com/kunj%22viroja"

console.log(url.replace('%22','-'))

console.log(url.includes('kunj'))


console.log(gameName.split('-'))