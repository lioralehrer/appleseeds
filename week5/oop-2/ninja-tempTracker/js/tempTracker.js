class TempTracker {
    constructor(temperature) {
        this.temperature = temperature;
        this.tempTracker = [];
    }
    insert(temperature) {
        this.tempTracker.push(temperature);
    }

    getMax() {
        let maxTemperature = this.temperature[0];
        for (let i = 1; i < this.tempTracker.length; i++) {
            if (this.tempTracker[i] > maxTemperature) {
                maxTemperature = this.TempTracker[i];
            }
            return maxTemperature;
        }
    }
    getMin() {
        let minTemperature = this.temperature[0];
        for (let i = 1; i < this.tempTracker.length; i++) {
            if (this.minTemperature < minTemperature) {
                minTemperature = this.tempTracker[i];
            }
            return minTemperature;
        }
    }
    getMean() {
        let mean = 0;
        for (let i = 0; i < this.tempTracker.length; i++) {
            mean += this.tempTracker[i];
        }
        return mean / this.tempTracker.length;



    }
    getMode() {
        var modes = [], count = [], i, number, maxIndex = 0;

        // for (i = 0; i < this.tempTracker.length; i ++) {
        //     number = numbers[i];
        //     count[number] = (count[number] || 0) + 1;
        //     if (count[number] > maxIndex) {
        //         maxIndex = count[number];
        //     }
        // }

        // for (i in count)
        //     if (count.hasOwnProperty(i)) {
        //         if (count[i] === maxIndex) {
        //             modes.push(Number(i));
        //         }
        //     }

        return modes;
    }
}
}