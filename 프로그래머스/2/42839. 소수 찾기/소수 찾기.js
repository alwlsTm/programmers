function solution(numbers) {
    let numArr = numbers.split('');
    let set = new Set();
    
    function getPermutation(arr, fixed) {
        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                let newFixed = fixed + arr[i];
                let newArr = [...arr];
                newArr.splice(i, 1);
                
                if (isPrime(+newFixed)) {
                    set.add(+newFixed);
                }
                getPermutation(newArr, newFixed);
            }
        }
    }
    
    function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    getPermutation(numArr, '');
    return set.size;
}