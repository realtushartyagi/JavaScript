const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise resolved after 2 seconds");
        resolve("Promise is resolved");
},1000)
})

promiseOne.then(() => {
    console.log("This is the then block");
})
// this is a comment 