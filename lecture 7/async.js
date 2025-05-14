const fs = require("fs");
const https = require("https");

console.log("hello");

https.get("https://dummyjson.com/products/1", (res) => {
    let data = '';

    res.on("data", chunk => {
        data += chunk;
    });

    res.on("end", () => {
        console.log("API Response:", JSON.parse(data));
    });
}).on("error", err => {
    console.error("Error fetching data:", err.message);
});

setTimeout(() => {
    console.log("After 5 seconds");
}, 5000);

fs.readFile("./file.txt", "utf8", (err, data) => {
    if (err) {
        return console.error("Error reading file:", err);
    }
    console.log("File contents:", data);
});

function multiply(x, y) {
    return x * y;
}

console.log(multiply(10, 50));
