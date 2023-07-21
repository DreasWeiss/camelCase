const latKir = {
    'а': 'a',
    'б': 'b',
    'в': 'v',
    'г': 'g',
    'д': 'd',
    'е': 'e',
    'ё': 'e',
    'ж': 'zh',
    'з': 'z',
    'и': 'i',
    'й': 'j',
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'о': 'o',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'у': 'u',
    'ф': 'f',
    'х': 'h',
    'ц': 'ts',
    'ч': 'ch',
    'ш': 'sh',
    'щ': 'sht',
    'ъ': '',
    'ы': 'y',
    'ь': '',
    'э': 'e',
    'ю': 'yu',
    'я': 'ya'
}

function translit(str) {
    return str.toLowerCase('').split('')
        .map(i => latKir.hasOwnProperty(i) ? latKir[i] : i)
        .join('');
}

function camelCase(str) {
    return translit(str).replace(/[^a-z0-9]/gi, ' ').toLowerCase().split(' ')
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