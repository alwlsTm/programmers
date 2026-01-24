function solution(fees, records) {
    let [defaultTime, defaultFee, unitTime, unitFee] = fees;
    let record = records.map((v) => v.split(' '))
    let parkingTime = new Map();
    let inTime = new Map();
    
    for (let [time, car, inout] of record) {
        let [h, m] = time.split(':').map(Number);
        let min = h * 60 + m;
        
        if (inout === "IN") inTime.set(car, min);
        else {
            let inCar = inTime.get(car);
            parkingTime.set(car, (parkingTime.get(car) || 0) + (min - inCar))
            inTime.delete(car);
        }
    }
    
    for (let [car, min] of inTime) {
        parkingTime.set(car, (parkingTime.get(car) || 0) + (1439 - min));
    }
    
    return [...parkingTime.keys()].sort().map((car) => {
       let time = parkingTime.get(car);
        if (time <= defaultTime) return defaultFee;
        return defaultFee + Math.ceil((time - defaultTime) / unitTime) * unitFee;
    });
}