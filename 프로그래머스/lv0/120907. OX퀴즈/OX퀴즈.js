function solution(quiz) {
    let result = [];
    quiz.forEach((val, idx) => {
        let arr = val.split(' ');
        let ans = 0;
        if (arr[1] === "+") {
            ans = +arr[0] + +arr[2];  
        } 
        if (arr[1] === "-") {
            ans = +arr[0] - +arr[2];
        }    
        
        if (ans === +arr[4]) result.push("O");
        else result.push("X");
    });
     return result;
}