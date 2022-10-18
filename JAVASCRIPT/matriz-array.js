var bici = ["BH", "Orbea", "Specialized"];
document.getElementById("demo").innerHTML = bici[0] = "Mi nueva bici es " + bici[3];
bici[3] = "Decathlon";
document.getElementById("demo2").innerHTML = bici[0] = "Mi nueva bici es " + bici[3];
document.getElementById("demo3").innerHTML = bici[0] = "Mi nueva bici es " + bici[1];
bici[1] = "OTRA";
document.getElementById("demo4").innerHTML = bici[0] = "Mi nueva bici es " + bici[1];