const sculptureList = require('./data.js'); // import data.js

//const element = sculptureList[1] // <---- comment out this line in your solution!
const sculptureListLengths = {};

sculptureList.forEach((element, index) => {
    sculptureListLengths[index] = {};
    for (const key in element) {
        sculptureListLengths[index][key] = element[key].length;
    }
});

console.log(sculptureListLengths);



//for (const key in element){
//    console.log(`${key}: ${element[key].length}`);
