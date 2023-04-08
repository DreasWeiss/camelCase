function camelCase(str) {
    return str.toLowerCase().split(' ')
        .map((i, idx) => idx > 0 ? i = `${i.slice(0, 1).toUpperCase()}${i.slice(1)}` : i)
        .join('');
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});
rl.on('line', function (line) {
    console.log(camelCase(line));
});
rl.on('end', function () {
    process.exit(0);
});