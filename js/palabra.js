let btncal=document.getElementById("btncal")
btncal.addEventListener("click",function Calcular(e){
    e.preventDefault()

    var pal = document.getElementById("pal").value;
    var op = document.getElementById("op").value;
    var resultado;

    switch (op) {
        case "1":
            resultado = "La longitud de la palabra es: " + pal.length;
            break;
        case "2":
            resultado = "La palabra en mayúsculas es: " + pal.toUpperCase();
            break;
        case "3":
            resultado = "La palabra en minúsculas es: " + pal.toLowerCase();
            break;
        case "4":
            resultado = "El primer carácter de la palabra es: " + pal.charAt(0);
            break;
        default:
            resultado = "Opción inválida";
    }
    alert(resultado)
})
