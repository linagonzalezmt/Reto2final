function traerInformacionRoom(){
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/room/room",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            pintarRespuestaRoom(respuesta.items);
        }
        });

}


function pintarRespuestaRoom(items){

    let mytable="<table>";
    mytable+="<td>"+"id"+"</td>";
    mytable+="<td>"+"room"+"</td>";
    mytable+="<td>"+"stars"+"</td>";
    mytable+="<td>"+"Category_id"+"</td>";
    mytable+="<td>"+"Description"+"</td>";
    for(i=0;i<items.length;i++){
        mytable+="<tr>";
        mytable+="<td>"+items[i].id+"</td>";
        mytable+="<td>"+items[i].room+"</td>";
        mytable+="<td>"+items[i].stars+"</td>";
        mytable+="<td>"+items[i].category_id+"</td>";
        mytable+="<td>"+items[i].description+"</td>";
        mytable+="<td> <button onclick='borrarElementoRoom("+items[i].id+")'>Borrar</button></td>";
        mytable+="</tr>";
    }
    mytable+="</table>";
    $("#resultado").append(mytable);

}

function guardarInformacionRoom(){
    let myData={
        id:$("#id").val(),
        room:$("#room").val(),
        stars:$("#stars").val(),
        category_id:$("#category_id").val(),
        description:$("#description").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/room/room",
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
            traerInformacionRoom();
            alert("se ha guardado la")
        }
        });
}

function editarInformacionRoom(){
    let myData={
        id:$("#id").val(),
        room:$("#room").val(),
        stars:$("#stars").val(),
        category_id:$("#category_id").val(),
        description:$("#description").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/room/room",
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
            traerInformacionRoom();
            alert("Se ha actualizado la informacion")
        }
        });
}

function borrarElementoRoom(idElemento){
    let myData={
        id:idElemento
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/room/room",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionRoom();
            alert("Se ha eliminado la informacion")
        }
        });
}
