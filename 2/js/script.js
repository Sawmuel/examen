var titulo = document.getElementById("titulo");
var descripcion = document.getElementById("descripcion");
var fila = "";
var est = 0;
function registrar(){
    if(est == 0){
    var table = document.getElementById("table");
    var tbody = document.getElementById("tbd");

    //crear fila
    var fil = document.createElement("tr");

    //crear celda
    var celda_titulo = document.createElement("td");
    celda_titulo.innerHTML=titulo.value;
    var celda_accion = document.createElement("td");
    celda_accion.classList.add("accion");
    celda_accion.innerHTML=
    "<a href='#' class='icono2' onclick='editar(this)'>editar</a>"
    +"<a href='#' class='icono1' onclick='eliminar(this)'>eliminar</a>"
    fil.appendChild(celda_titulo);
    fil.appendChild(celda_descripcion);
    fil.appendChild(celda_accion);
    tbody.appendChild(fil);
    table.appendChild(tbody);
    limpiar();
    }else{
        fila.cells[0].innerHTML = titulo.value;
        fila = "";
        limpiar();
        estado = 0;
    }
}
function limpiar(){
    nombre.value = "";
    nombre.focus();
}
function editar(row){
    fila = row.parentNode.parentNode;
    nombre.value = fila.cells[0].innerHTML;
    est = 1;
}
function eliminar(row){
    let f = row.parentNode.parentNode;
    f.parentNode.removeChild(f);
}