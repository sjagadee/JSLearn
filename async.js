let test = () => {
    // this is example of a callback function
    setTimeout(() => {
        console.log("Start code");

        console.log("Some operation");
        
        console.log("End code");
    }, 5000);
}

let test2 = () => {
    console.log("get my attention");
}

test();
test2();