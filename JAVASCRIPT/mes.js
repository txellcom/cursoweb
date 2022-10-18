var mes = new Date().getMonth();
var valordelmes = new Date().getMonth();
switch (mes) {   
    case 0:    
        mes = "Gener"; break;
    case 1:
        mes = "Febrer"; break;
    case 2:
        mes = "Març"; break;
    case 3:
        mes = "Abril"; break;
    case 4:
        mes = "Maig"; break;
    case 5:
        mes = "Juny"; break;
    case 6:
        mes = "Juliol"; break;
    case 7:
        mes = "Agost"; break;
    case 8:
        mes = "Setembre"; break;
    case 9:
        mes = "Octubre"; break;
    case 10:
        mes = "Novembre"; break;
    case 11:
        mes = "Desembre"; 
}
document.getElementById("texto").innerHTML = "Avui estem a " + mes + ", el valor del 'case' es " + valordelmes;