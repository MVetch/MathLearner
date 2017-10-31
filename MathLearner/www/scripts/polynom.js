class Polynom {
    constructor(terms) {
        this.terms = terms;
        var maxPower = 0;
        for (var i = 0; i < terms.length; i++) {
            if(terms[i].maxPower > maxPower)
                maxPower = terms[i].maxPower
        }
        this.maxPower = maxPower;
    }

    show() {
        var div = document.createElement("div");
        for (var i = 0; i < this.terms.length; i++) {
            var termDiv = document.createElement("div");
            termDiv.style.display = "inline-block";
            termDiv.style.color = randomColor();
            var term = this.terms[i].toString();
            if(i==0 && term[0] == '+') term = term.slice(1, term.length);
            termDiv.innerHTML = "$" + term + "$";
            div.appendChild(termDiv);
        }
        document.getElementById("container").appendChild(div);
    }

    simplify() {
        var coefs = [];
        for (var i = 0; i < this.maxPower + 1; i++) {
            coefs.push(0);
        }
        var div = document.createElement("div");
        for (var curPower = coefs.length - 1; curPower >= 0; curPower--) {
            var termDiv = document.createElement("div");
            termDiv.style.display = "inline-block";
            termDiv.style.color = randomColor();
            for (var j = 0; j < this.terms.length; j++) {
                if (this.terms[j].maxPower == curPower) {
                    coefs[curPower] += Number.parseFloat(this.terms[j].getSign() + this.terms[j].factors[0].value);
                }
            }
            termDiv.innerHTML = (
                coefs[curPower] != 0 ? (
                    "$" + (
                            coefs[curPower] > 0 ?
                                (curPower != coefs.length - 1?'+':'') :
                                '-'
                        ) +
                        (
                            Math.abs(coefs[curPower]) != 1 ?
                                Math.abs(coefs[curPower]) + (curPower > 0?'*':'') :
                                ''
                        ) +
                        (
                            curPower > 0 ? (
                                " x " + (
                                    curPower > 1 ?
                                        "^ " + curPower :
                                        ''
                                    )
                            ) :
                            ''
                        ) + "$"
                ) :
                ''
            );
            div.appendChild(termDiv);
        }
        document.getElementById("container").appendChild(div);
    }
}