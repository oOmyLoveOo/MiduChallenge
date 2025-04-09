let string = "aaaabbbcca";

function solve(str) {
    let result = "";
    let count = 1;

    for (let i = 1; i < str.length; i++) {
        if (str[i] !== str[i - 1]) {
            result += `("${str[i - 1]}", ${count}), `;
            count = 1;
        } else {
            count++;
        }
    }

    // Agregar el último grupo
    result += `("${str[str.length - 1]}", ${count})`;

    return `[${result}]`;
}

console.log(solve(string));
alert(solve(string));