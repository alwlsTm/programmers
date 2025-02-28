function solution(s) {
    let str = s;
    let result = [0, 0];
    while (str.length > 1) {
        let temp = str.replaceAll(/0/g, '');
        result[1] += str.length - temp.length;
        str = temp.length.toString(2);
        result[0]++;
    }
    return result;
}