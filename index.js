const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const fechaNacimientoInput = document.getElementById("fechaNacimiento");

//agregamos una escucha al evento submit
document.getElementById("registroForm").addEventListener("submit", function (event) {
    event.preventDefault();

    //obtienemos las variables definidas anteriormente
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const fechaNac = fechaNacimientoInput.value;

    const dataUsuario = {
        nombre: nombre,
        apellido: apellido,
        fechaNac: fechaNac,

    };
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



