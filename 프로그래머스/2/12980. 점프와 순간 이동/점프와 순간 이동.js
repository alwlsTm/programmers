function solution(n) {
    let cell = 0;
    while (n > 0) {
        if (n % 2 === 0) {
            n /= 2;
        } else {
            n--;
            cell++;
        }
    }
    return cell;
}