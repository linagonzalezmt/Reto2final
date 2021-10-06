function traerInformacionCuarto(){
    $.ajax({
        url:" https://g92c8d59813b029-oraclebd1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/room/room",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            pintarRespuestaCuarto(respuesta.items);
        }
        });

}


function pintarRespuestaCuarto(items){

    let mytable="<table>";
    mytable+="<td>"+" ID "+"</td>";
    mytable+="<td>"+" ROOM "+"</td>";
    mytable+="<td>"+" STARS"+"</td>";
    mytable+="<td>"+" Category "+"</td>";
    mytable+="<td>"+" Description "+"</td>";
    for(i=0;i<items.length;i++){
        mytable+="<tr>";
        mytable+="<td>"+items[i].id+"</td>";
        mytable+="<td>"+items[i].room+"</td>";
        mytable+="<td>"+items[i].stars+"</td>";
        mytable+="<td>"+items[i].category_id+"</td>";
        mytable+="<td>"+items[i].description+"</td>";
        mytable+="<td> <button onclick='eliminarCuarto("+items[i].id+")'>Borrar</button></td>";
        mytable+="</tr>";
    }
    mytable+="</table>";
    $("#resultado").append(mytable);

}

function guardarInformacionCuarto(){
    let myData={
        id:$("#id").val(),
        room:$("#room").val(),
        stars:$("#stars").val(),
        category_id:$("#category_id").val(),
        description:$("#description").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:" https://g92c8d59813b029-oraclebd1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/room/room",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#room").val("");
            $("#stars").val("");
            $("#category_id").val("");
            $("#description").val("");
            traerInformacionCuarto();
            alert("Se ha guardado el cuarto exitosamente!")
        }
        });
}

function editarCuarto(){
    let myData={
        id:$("#id").val(),
        room:$("#room").val(),
        stars:$("#stars").val(),
        category_id:$("#category_id").val(),
        description:$("#description").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:" https://g92c8d59813b029-oraclebd1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/room/room",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#room").val("");
            $("#stars").val("");
            $("#category_id").val("");
            $("#description").val("");
            traerInformacionCuarto();
            alert("Se ha actualizado el cuarto exitosamente!")
        }
        });
}

function eliminarCuarto(idElemento){
    let myData={
        id:idElemento
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:" https://g92c8d59813b029-oraclebd1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/room/room",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionCuarto();
            alert("Se ha eliminado el cuarto exitosamente!")
        }
        });
}
