function generateString(limit) {
    let S = '';
    let num = 1;
    while (S.length < limit) {
        S += num.toString();
        num++;
    }
    return S;
}


function findOccurrences(n, S) {
    let positions = [];
    let str_n = n.toString();
    let idx = 0;


    while ((idx = S.indexOf(str_n, idx)) !== -1) {
        positions.push(idx + 1); 
        idx++; 
    }

    return positions;
}


function solve() {
    
    const limit = 9000000; 
    const S = generateString(limit);

   
    let resultSum = 0;

   
    for (let k = 1; k <= 13; k++) {
        const n = Math.pow(3, k);
        const occurrences = findOccurrences(n, S);
        if (occurrences.length >= 3 ** k) {
            resultSum += occurrences[3 ** k - 1];  
        }
    }

    return resultSum;
}

console.log(solve());
//hello all




