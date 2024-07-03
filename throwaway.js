class Accumulator {
    constructor(startingValue) {
        this.startingValue = startingValue;
        this.value = startingValue;
    }
    read() {
        this.added = +prompt('Value?', 0);
        this.value += this.added;
        alert(this.value);
    }
}

const accu = new Accumulator(5);
accu.read(5);