
$(document).ready(function(){

    $("#btonlogin").click(function(){

        var username = $("#namer").val()
        var password = $("#passr").val()

        var matchFound = false;
        var objeto_actual = null;
        var session = null;

        $.ajax({
            type: 'GET',
            url: 'https://mockapi.io/clone/6462ca664dca1a66134ddc72',

            error: function(){
                //mostramos el error
            },
            success: function(data){
                $("#capa").html("<h1>Resultados:</h1>")
                

                $.each(data, function(index, obj) {
                    if (obj.username === username && obj.password === password) {
                        matchFound = true;
                        objeto_actual = obj
                    }
                });
                
                if (matchFound) {
                    console.log("¡La combinación de username y password coincide!");
                    console.log(objeto_actual.id)
                    console.log(objeto_actual.username)
                    console.log(objeto_actual.password)


                    $("#capa").append("<p>Username: "+objeto_actual.username+"</p>")


                    session = objeto_actual.username
                    localStorage.setItem("x", session);




                } else {
                    console.log("La combinación de username y password no coincide.");
                }
                

            }
        });
        
    });
    

    $("#botonregis").click(function(){
        
        var us = $("#namer").val()
        var em = $("#emailr").val()
        var pass = $("#passr").val()



        var objeto = {
            username: us,
            email: em,
            password: pass,

        }

        $.ajax({
            type: 'POST',
            data: objeto,
            url: 'https://mockapi.io/clone/6462ca664dca1a66134ddc72',

            error: function(xhr, status, error){
                console.log(error)
            },
            success: function(data){
                $("#capa").html("<h1>Registrado OK:</h1>")
                $("#capa").append(data)
            }
        })

    });

    $("#btoncontac").click(function(){
        
        var us = $("#namer").val()
        var em = $("#emailr").val()
        var ph = $("#phonor").val()
        var sg = $("#sugerenr").val()



        var objeto = {
            username: us,
            email: em,
            phono: ph,
            sugerencia: sg,


        }

        $.ajax({
            type: 'POST',
            data: objeto,
            url: 'https://mockapi.io/clone/6462ca664dca1a66134ddc72',

            error: function(xhr, status, error){
                console.log(error)
            },
            success: function(data){
                $("#capa").html("<h1>contacto enviado:</h1>")
                $("#capa").append(data)
            }
        })

    });




});