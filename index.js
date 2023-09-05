const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const fechaNacimientoInput = document.getElementById("fechaNacimiento");

//Agregamos un evento de escucha al formulario cuando se envia
document.getElementById("registroForm").addEventListener("submit", function (event) {
    event.preventDefault();

    //Obtenemos los valores de los campos que el usuario ingresa
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const fechaNac = fechaNacimientoInput.value;
    
    //Creamos un objeto con los datos
    const dataUsuario = {
        nombre: nombre,
        apellido: apellido,
        fechaNac: fechaNac,

    };

    //Enviamos los datos al servidor en formato json
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: 'POST',
        data: JSON.stringify(dataUsuario)

    })
        .then(Response => Response.json())
        .then(dato => {
            console.log("Respuesta del servidor", dato);
            alert("Los datos se enviaron correctamente");
        })
        .catch(error => {
            console.log("Error al enviar los datos", error);
            alert("Error al enviar los datos");
        })

});



