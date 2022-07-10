var sum = 0;

for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum -= 1 / i;
    } else {
        sum += 1 / i;
    }
};
console.log(sum)