function checkBracket(open: string, close: string): boolean {
    if (open == undefined) {
        return true;
    }
    if (open === '{' && close === '}') {
        return true;
    }
    if (open == '[' && close == ']') {
        return true;
    }
    if (open == '(' && close == ')') {
        return true;
    }
    return false;
}

function isValid(s: string): boolean {
    const stringArray = s.split('');
    var bracketArray: Array<string> = [];
    var reachClose: boolean = false;
    for (var s of stringArray) {
        // console.log(s);
        if (reachClose == true && bracketArray.length > 0) {
            if (s == '{' || s == '[' || s == '(') {
                bracketArray.push(s);
                continue;
            }
            if (
                checkBracket(bracketArray[bracketArray.length - 1], s) == false
            ) {
                return false;
            }
        }
        if (
            checkBracket(bracketArray[bracketArray.length - 1], s) &&
            bracketArray.length > 0
        ) {
            bracketArray.pop();
            reachClose = true;
            continue;
        }
        bracketArray.push(s);
    }
    if (bracketArray.length > 0) {
        return false;
    }
    return true;
}

console.log(isValid('(]'));
