function solution(n) {
    let cnt = 0;
    const arr = new Array(n + 1).fill(true); 

    for(let x = 2; x <= Math.sqrt(n); x++){
        if(arr[x] === false) continue; 
        for(let y = x * x; y <= n; y += x){
             arr[y] = false;
        }
    }

    for(let z = 2; z <= n; z++){
        if(arr[z] === true) cnt++;
    }
    return cnt;
}