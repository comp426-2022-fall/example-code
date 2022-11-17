// returns an array of the first n fibonacci numbers
export {fibonacci};

function fibonacci(n) {
    const nums = [];
    let x = 0, y = 1, next;
    for (let i=0; i<n; i++) {
        nums[i] = x;
        next = x + y;
        x = y;
        y = next;
    }
    return nums;
}