function enquanto() {

    vet1 = new Array()
    var i
    for (i = 0; i < 5; i++) {
        vet1[i] = Math.floor((Math.random() * 100) + 1)
    }
    var text = "";
    for (i = 0; i < 5; i++) {
        text += vet1[i] + ","
    }

    document.getElementById("demo").innerHTML = text
    document.getElementById("demo1").innerHTML = vet1[0] + vet1[4]
}