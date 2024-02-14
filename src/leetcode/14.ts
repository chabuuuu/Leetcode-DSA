function sliceCharTo(strs: string, index: number): string {
    if (index < 0) {
        return '';
    }
    return strs.slice(0, index);
}
export function longestCommonPrefix(strs: string[]): string {
    if (strs.length == 1) {
        return strs[0];
    }
    var index = 0;
    while (index <= strs[0].length) {
        var pivotString = sliceCharTo(strs[0], index);
        for (var item of strs) {
            var comparisonString = sliceCharTo(item, index);
            if (pivotString.localeCompare(comparisonString) != 0) {
                return sliceCharTo(strs[0], index - 1);
            }
        }
        index++;
    }

    return sliceCharTo(strs[0], index - 1);
}
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
