function traerInformacionClient(){
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            pintarRespuestaClient(respuesta.items);
        }
        });

}


function pintarRespuestaClient(items){

    let mytable="<table>";
    mytable+="<td>"+"id"+"</td>";
    mytable+="<td>"+"name"+"</td>";
    mytable+="<td>"+"email"+"</td>";
    mytable+="<td>"+"age"+"</td>";
    for(i=0;i<items.length;i++){
        mytable+="<tr>";
        mytable+="<td>"+items[i].id+"</td>";
        mytable+="<td>"+items[i].name+"</td>";
        mytable+="<td>"+items[i].email+"</td>";
        mytable+="<td>"+items[i].age+"</td>";
        mytable+="<td> <button onclick='borrarElementoClient("+items[i].id+")'>Borrar</button></td>";
        mytable+="</tr>";
    }
    mytable+="</table>";
    $("#resultado").append(mytable);

}

function guardarInformacionClient(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionClient();
            alert("Se ha guardado la información")
        }
        });
}

function editarInformacionClient(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionClient();
            alert("Se ha actualizado la informacion")
        }
        });
}

function borrarElementoClient(idElemento){
    let myData={
        id:idElemento
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionClient();
            alert("Se ha eliminado la informacion")
        }
        });
}
