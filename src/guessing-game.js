class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.guessValue = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guessValue = Math.floor((this.min + this.max) / 2);
        return this.guessValue;
    }

    lower() {
        this.max = this.guessValue - 1;
    }

    greater() {
        this.min = this.guessValue + 1;
    }
}


module.exports = GuessingGame;
