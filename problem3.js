function computeG_optimized(n) {
    return (n ** 3) / 72 + (n ** 2) / 48 + (n) / 144;
}

function formatScientific(num) {
    return num.toExponential(10).replace("e", "e");
}


let b = 1e11;
let result = computeG_optimized(b);
console.log(formatScientific(result));

//neha
// Your code it"s correct
