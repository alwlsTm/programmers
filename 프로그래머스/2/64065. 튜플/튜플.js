function solution(s) {
    let result = [];
    let tuples = s.slice(2, -2).split(/},{/g);
    
    tuples.sort((a, b) => a.length - b.length);
    tuples.forEach((v) => {
        let tuple = v.split(",");
        tuple.forEach((e) => {
            if (!result.includes(+e)) result.push(+e); 
        });
    });
    return result;
}