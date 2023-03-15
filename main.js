function calcularFuncaoQuadratica() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("bhaskarax1").innerHTML = "";
    document.getElementById("bhaskarax2").innerHTML = "";
    document.getElementById("reduzida").innerHTML = "";

    var digiteA = document.getElementById("digiteA").value;
    var digiteB = document.getElementById("digiteB").value;
    var digiteC = document.getElementById("digiteC").value;

    var delta = (digiteB * digiteB) - 4 * digiteA * digiteC;

    var bhaskaraX1 = (-digiteB + Math.sqrt(delta)) / 2 * digiteA;
    var bhaskaraX2 = (-digiteB - Math.sqrt(delta)) / 2 * digiteA;

    if (delta >= 0) {
        document.getElementById("resultado").innerHTML = "A função é redutível (delta = √" + delta.toFixed(1) + ")";
        document.getElementById("bhaskarax1").innerHTML = "X1 = " + bhaskaraX1.toFixed(1);
        document.getElementById("bhaskarax2").innerHTML = "X2 = " + bhaskaraX2.toFixed(1);

        if (bhaskaraX1 > 0 && bhaskaraX2 < 0) {
            document.getElementById("reduzida").innerHTML = "A equação reduzida é: <br> " + digiteA + "(X +" + bhaskaraX1.toFixed(2) + ").  (X " + bhaskaraX2.toFixed(2) + ")";
        } else if (bhaskaraX1 < 0 && bhaskaraX2 > 0) {
            document.getElementById("reduzida").innerHTML = "A equação reduzida é: <br> " + digiteA + "(X " + bhaskaraX1.toFixed(2) + ").(X +" + bhaskaraX2.toFixed(2) + ")";
        } else {
            document.getElementById("reduzida").innerHTML = "A equação reduzida é: <br> " + digiteA + "(X " + bhaskaraX1.toFixed(2) + ").(X " + bhaskaraX2.toFixed(2) + ")";
        }
    } else {
        document.getElementById("resultado").innerHTML = "A função é irredutível (delta = √" + delta.toFixed(1) + ")";
    }
}