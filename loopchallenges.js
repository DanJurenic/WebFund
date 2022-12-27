// Print odds 1-20
for (var i = 0; i < 20; i++){
    if (i % 2 == 1){
        console.log(i);
    }
}

// Decreasing multiples of 3
for (var j = 100; j > 0; j--){
    if (j % 3 == 0){
        console.log(j);
    }
}

// Print the sequence
for (var k = 4; k > -4; k -= 1.5){
    console.log(k);
}

// Sigma
var sum = 0;
for (var l = 1; l <= 100; l++){
    sum = sum + l;
}

console.log(sum);

//Factorial
var product = 0;
for (var m = 1; m <= 12; m++){
    if(product == 0){
        product = m;
    }
    product = product * m;
}

console.log(product);