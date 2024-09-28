function solution(s) {
    let arr = [];
    let cnt = 0;
    
    for(let i = 0; i < s.length; i++){
        arr.push(s[i]);
        
        let same = arr.filter((v) => v === arr[0]);
        let notSame = arr.filter((v) => v !== arr[0]);

        if(same.length === notSame.length){
            cnt += 1;
            arr = [];
        }
    }    
    
    if(arr.length !== 0){
        cnt += 1;
    }   
    return cnt;
}