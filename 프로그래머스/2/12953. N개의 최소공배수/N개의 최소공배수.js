function solution(arr) {
    let cnt = 0;
    let last = arr[arr.length - 1];
    for (let i = 1; ; i++) {
        let num = last * i;
        for (let j = 0; j < arr.length; j++) {
            if (num % arr[j] === 0) cnt++;   
            else break;
        }
        if (cnt === arr.length) return num;
        else cnt = 0;
    }
}