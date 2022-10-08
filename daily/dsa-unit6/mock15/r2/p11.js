function isPrime(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if(n % i === 0) count++;
    }
    return count === 2;
}

function strongMemory(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if(isPrime(i)) count++;
    }
    console.log(count);
}