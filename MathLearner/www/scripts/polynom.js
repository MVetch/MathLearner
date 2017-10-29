class Polynom {
    constructor(terms) {
        this.terms = terms;
    }
    show() {
        var div = document.createElement("div");
        for (var i = 0; i < this.terms.length; i++) {
            var termDiv = document.createElement("div");
            termDiv.style.display = "inline-block";
            termDiv.style.color = randomColor();
            termDiv.innerHTML = this.terms[i].toString();
            div.appendChild(termDiv);
        }
        document.getElementById("container").appendChild(div);
    }
}