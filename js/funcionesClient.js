function traerInformacionCliente(){
    $.ajax({
        url:" https://g92c8d59813b029-oraclebd1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            pintarRespuestaCliente(respuesta.items);
        }
        });

}


function pintarRespuestaCliente(items){

    let mytable="<table>";
    mytable+="<td>"+" ID "+"</td>";
    mytable+="<td>"+" NAME "+"</td>";
    mytable+="<td>"+" EMAIL"+"</td>";
    mytable+="<td>"+" AGE "+"</td>";
    for(i=0;i<items.length;i++){
        mytable+="<tr>";
        mytable+="<td>"+items[i].id+"</td>";
        mytable+="<td>"+items[i].name+"</td>";
        mytable+="<td>"+items[i].email+"</td>";
        mytable+="<td>"+items[i].age+"</td>";
        mytable+="<td> <button onclick='eliminarCliente("+items[i].id+")'>Borrar</button></td>";
        mytable+="</tr>";
    }
    mytable+="</table>";
    $("#resultado").append(mytable);

}

function guardarInformacionCliente(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g92c8d59813b029-oraclebd1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionCliente();
            alert("Se ha guardado el cliente exitosamente!")
        }
        });
}

function editarCliente(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g92c8d59813b029-oraclebd1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
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
            traerInformacionCliente();
            alert("Se ha actualizado el cliente exitosamente!")
        }
        });
}

function eliminarCliente(idElemento){
    let myData={
        id:idElemento
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g92c8d59813b029-oraclebd1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionCliente();
            alert("Se ha eliminado el cliente exitosamente!")
        }
        });
}
