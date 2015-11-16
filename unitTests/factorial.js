function factorial(n) {
    if (n < 0 || isNaN(n)){
        throw new Error('incorrect argument');
    }
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}