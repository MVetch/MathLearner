class Term {
    constructor(factors) {
        this.factors = factors;
        var maxPower = 0;
        for (var i = 0; i < factors.length; i++) {
            if(factors[i].power > maxPower)
                maxPower = factors[i].power
        }
        this.maxPower = maxPower;
    }
    toString() {
        var result = '';
        var sign;

        for (var i = 0; i < this.factors.length; i++) {
            result += '*' + this.factors[i].getValue();
        }
        return this.getSign() + result.slice(1, result.length);
    }
    getSign() {
        var plus = true;
        for (var i = 0; i < this.factors.length; i++) {
            if (this.factors[i].sign = '-') plus = !plus;
        }
        if (plus) return '+';
        return '-';
    }
}