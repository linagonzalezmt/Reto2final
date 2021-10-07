function traerInformacionMessage(){
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            pintarRespuestaMessage(respuesta.items);
        }
        });

}


function pintarRespuestaMessage(items){

    let mytable="<table>";
    mytable+="<td>"+"id"+"</td>"
    mytable+="<td>"+"messagetext"+"</td>"
    for(i=0;i<items.length;i++){
        mytable+="<tr>";
        mytable+="<td>"+items[i].id+"</td>";
        mytable+="<td>"+items[i].messagetext+"</td>";
        mytable+="<td> <button onclick='borrarElementoMessage("+items[i].id+")'>Borrar</button></td>";
        mytable+="</tr>";
    }
    mytable+="</table>";
    $("#resultado").append(mytable);

}

function guardarInformacionMessage(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerInformacionMessage();
            alert("Se ha guardado la información")
        }
        });
}

function editarInformacionMessage(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerInformacionMessage();
            alert("Se ha actualizado la informacion")
        }
        });
}

function borrarElementoMessage(idElemento){
    let myData={
        id:idElemento
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionMessage();
            alert("Se ha eliminado la informacion")
        }
        });
}
