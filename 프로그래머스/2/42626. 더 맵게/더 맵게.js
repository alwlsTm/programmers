function solution(scoville, K) {
    let cnt = 0;
    let newScoville = [];
    let idx1 = 0; 
    let idx2 = 0; 
    scoville.sort((a, b) => a - b);

    function findMin() {
        let a = scoville[idx1];
        let b = newScoville[idx2];

        if (a === undefined) return newScoville[idx2++];
        if (b === undefined) return scoville[idx1++];
        return a < b ? scoville[idx1++] : newScoville[idx2++];
    }

    while (scoville.length - idx1 + newScoville.length - idx2 > 0){
        let min1 = findMin();
        if (min1 >= K) return cnt;

        let min2 = findMin();
        if(min2 === undefined) return -1;

        newScoville.push(min1 + min2 * 2);
        cnt++;
    }
}