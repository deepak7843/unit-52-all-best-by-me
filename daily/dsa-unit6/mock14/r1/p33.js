function frequencyDrome(str) {
    let firstHalf = "";
    let secondHalf = "";
    let n = str.length;
    let mid = Math.floor(n / 2);
    for (let i = 0; i < mid; i++) firstHalf += str[i];
    if(n % 2 !== 0) {
        for (let i = mid + 1; i < n; i++) secondHalf += str[i];
    }
    else {
        for (let i = mid; i < n; i++) secondHalf += str[i];
    }
    let firstObj = {};
    let secondObj = {};
    for (let i = 0; i < firstHalf.length; i++) {
        let char = firstHalf[i];
        firstObj[char] = (firstObj[char]  0) + 1;
    }
    
    for (let i = 0; i < secondHalf.length; i++) {
        let char = secondHalf[i];
        secondObj[char] = (secondObj[char]  0) + 1;
    }
    for (let key in firstObj) {
        if(secondObj[key] != firstObj[key]) return false;
    }
    return true;
}