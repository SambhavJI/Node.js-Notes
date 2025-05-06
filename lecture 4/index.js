console.log("Hi This statement will automatically run even though you didnt export.");


let x = 100;
// use export in front of the function and let keywords to export he function 
// export sum(a,b){}
function sum(a,b) {
    console.log(a+b)
    console.log("This statement will only run if you will export the function.")
}

module.exports = {
    x,sum
}