function calcularFuncaoQuadratica() {
    var digiteA = document.getElementById("digiteA").value;
    var digiteB = document.getElementById("digiteB").value;
    var digiteC = document.getElementById("digiteC").value;

    var delta = (digiteB * digiteB) - 4 * digiteA * digiteC;

    if (delta >= 0) {
        var bhaskaraX1 = (-digiteB + Math.sqrt(delta)) / 2 * digiteA;
        var bhaskaraX2 = (-digiteB - Math.sqrt(delta)) / 2 * digiteA;

        document.getElementById("resultado").innerHTML = "A função é redutível (delta =" + delta.toFixed(2) + ")";
        document.getElementById("reduzida").innerHTML = "E a equação reduzida é " + digiteA + "(X" + bhaskaraX1.toFixed(2) + ")(X" + bhaskaraX2.toFixed(2) + ")";
    } else {
        document.getElementById("resultado").innerHTML = "A função é irredutível (delta =" + delta.toFixed(2) + ")";
    }
}