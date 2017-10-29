class Term {
    constructor(factors) {
        this.factors = factors;
    }
    toString() {
        var result = '';
        for (var i = 0; i < this.factors.length; i++) {

            result += this.factors[i].toString();
        };
        return result;
    }
}