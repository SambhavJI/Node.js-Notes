require("./index.js")

const data = require("./data.json")

//import {x,sum} from("./index.js")
const {x , sum} = require("./index.js") // derefrencing the obect exported

console.log("This is our main function")

console.log(data)

sum(100,50);

console.log(x);