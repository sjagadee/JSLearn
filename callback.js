function print(data) {
    console.log(data);
}

function myApp(var1, var2, myCallback) {
    var total = var1 +var2;
    myCallback(total);
}

myApp(1, 5, print);