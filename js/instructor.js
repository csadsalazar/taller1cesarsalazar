let btncal=document.getElementById("btncal")
btncal.addEventListener("click",function Calcular(e){
    e.preventDefault()
     
    var nom = parseFloat(document.getElementById("nom").value);
    var ap = parseFloat(document.getElementById("ap").value);
    var mat = parseFloat(document.getElementById("mat").value);

    if (nom===1 && ap===1 && mat===1 || nom===2 && ap===2 && mat===2 || nom===3 && ap===3 && mat===3 || nom===4 && ap===4 && mat===4 || nom===5 && ap===5 && mat===5 || nom===6 && ap===4 && mat===6 || nom===7 && ap===7 && mat===7) {
        alert("La respuesta es correcta");
    } else {
        alert("La respuesta es incorrecta");
    }
})

