function solution(order) {
    let truck = 0;
    let stack = [];
    
    for (let i = 1; i <= order.length; i++) {
        stack.push(i);
        
        while (stack.length > 0 && stack[stack.length - 1] === order[truck]) {
            stack.pop();
            truck++;
        }
    }
    return truck;
}
