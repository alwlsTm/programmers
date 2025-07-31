function solution(progresses, speeds) {
    let deploy = [];
    let days = progresses.map((v, i) => 
        Math.ceil((100 - v) / speeds[i])
    );
    let cnt = 1;
    let prev = days[0];
    for (let i = 1; i < days.length; i++) {
        if (prev >= days[i]) {
            cnt++;
        } else {
            deploy.push(cnt);
            prev = days[i];
            cnt = 1;
        }
    }
    deploy.push(cnt);
    return deploy;
}