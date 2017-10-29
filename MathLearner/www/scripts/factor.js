class Factor {
    constructor(value, sign) {
        this.terms = [{ value: value, sign: sign }];
    }
    toString() {
        var result = '';
        for (var i = 0; i < this.terms.length; i++) {
            result += this.terms[i].sign.toString() + this.terms[i].value.toString();
        }
        return result;
    }
}