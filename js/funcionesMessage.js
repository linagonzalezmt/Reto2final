function traerInformacionMensaje(){
    $.ajax({
        url:"https://g92c8d59813b029-oraclebd1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            pintarRespuestaMensaje(respuesta.items);
        }
        });

}


function pintarRespuestaMensaje(items){

    let mytable="<table>";
    mytable+="<td>"+" ID "+"</td>"
    mytable+="<td>"+" MESSAGE TEXT "+"</td>"
    for(i=0;i<items.length;i++){
        mytable+="<tr>";
        mytable+="<td>"+items[i].id+"</td>";
        mytable+="<td>"+items[i].messagetext+"</td>";
        mytable+="<td> <button onclick='eliminarMensaje("+items[i].id+")'>Borrar</button></td>";
        mytable+="</tr>";
    }
    mytable+="</table>";
    $("#resultado").append(mytable);

}

function guardarInformacionMensaje(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g92c8d59813b029-oraclebd1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerInformacionMensaje();
            alert("Se ha guardado el mensaje exitosamente!")
        }
        });
}

function editarMensaje(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g92c8d59813b029-oraclebd1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerInformacionMensaje();
            alert("Se ha actualizado el mensaje exitosamente!")
        }
        });
}

function eliminarMensaje(idElemento){
    let myData={
        id:idElemento
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g92c8d59813b029-oraclebd1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionMensaje();
            alert("Se ha eliminado el cuarto exitosamente!")
        }
        });
}
