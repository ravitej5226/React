var compute = function (first, second, operation) {
    switch (operation) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case 'x':
            return first * second;
        case '/':
            return first / second;
        default:
            return first + second;
    }
}

export default compute;