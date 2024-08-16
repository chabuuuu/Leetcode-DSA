function converttToInt(value: string): number {
    switch (value) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return -1;
    }
}
export function romanToInt(s: string): number {
    const romanArray = s.split('');
    var lastInt = 100000;
    var result = 0;
    for (var i = 0; i < romanArray.length; i++) {
        var atInt = converttToInt(romanArray[i]);
        if (atInt > lastInt) {
            result = result - 2 * lastInt + atInt;
        } else {
            result += atInt;
        }
        lastInt = atInt;
    }
    return result;
}
console.log(romanToInt('III'));
