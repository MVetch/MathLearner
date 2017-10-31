class Member {
    constructor(value, sign, isVar, power) {
        power = (isVar == undefined || !isVar ? 0 : (power==undefined?1:power));
        isVar = (isVar == undefined);
        this.value = value;
        this.sign = sign;
        this.isVar = isVar;
        this.power = power;
    }
    toString() {
        return this.sign.toString() +
            this.value.toString() + 
            (this.power > 1 && this.value.slice(this.value.length - 1, this.value.length) == 'x' ?
                "^" + this.power.toString() :
                ''
            );
    }
    getValue() {
        return this.value.toString() +
            (this.power > 1 && this.value.slice(this.value.length - 1, this.value.length) == 'x' ?
                "^" + this.power.toString() :
                ''
            );
    }
}