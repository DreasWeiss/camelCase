function camelCase(str) {
    return str.toLowerCase().split(' ')
        .map((i, idx) => idx > 0 ? i = `${i.slice(0, 1).toUpperCase()}${i.slice(1)}` : i)
        .join('');
}

camelCase('');
console.log(camelCase('Access the JSON Data from an API'));