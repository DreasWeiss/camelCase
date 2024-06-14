const camelCase = require('./modules/camelCase.js');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin
});
rl.on('line', function (line) {
    require('child_process').exec(
        `echo "${camelCase(line)}" | pbcopy`,

        function (err, stdout, stderr) {
            console.log(stdout); // to confirm the application has been run
        }
    );
    console.log(camelCase(line));
    process.exit(0);
});
rl.on('end', function () {
    process.exit(0);
});