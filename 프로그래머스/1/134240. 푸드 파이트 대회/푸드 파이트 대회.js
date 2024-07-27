function solution(food) {
    let str = "";
    for (let i = 0; i < food.length; i++) {
        if (food[i] > 1) {
            str += String(i).repeat(food[i] / 2);
        }
    }
    return str + "0" + [...str].reverse().join("");
}