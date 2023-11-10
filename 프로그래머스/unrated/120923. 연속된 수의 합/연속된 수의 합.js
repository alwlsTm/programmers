function solution(num, total) {
    let arr = [];
    let x = Math.ceil(total / 2); 
    
    while(true) {   
        for (let i = num; i > 0 ; i--) {
            arr.push(x - i);  
        }
            let sum = arr.reduce((acc, cur) => acc + cur, 0);
            if (sum === total) break;
            else if (sum > total) x--;
            else x++;   
            arr = [];
    }
    return arr; 
}