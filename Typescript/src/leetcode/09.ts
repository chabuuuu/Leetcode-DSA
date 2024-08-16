export function isPalindrome(x: number): boolean {
    const arrayString: any = x.toString().split('');
    const length = x.toString().length;
    let mid = length / 2;
    for (let i: number = 0; i < mid; i++) {
        if (Number(arrayString[i]) != Number(arrayString[length - i - 1])) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome(121));
