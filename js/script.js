const formularioUsuarios = document.querySelector("#formularioUsuarios");
const contenedorHTML = document.querySelector(".contenedorUsuarios");
const totalUsuariosHTML = document.querySelector("#totalChicos");
const usuarios = [];

const renderizarUsuarios = () => {
    contenedorHTML.innerHTML = "";
    for (const usuario of usuarios) {
        contenedorHTML.innerHTML += `
        <div class="card-user">
            <h2>Nombre: ${usuario.nombre}</h2>
            <p>Apellido: ${usuario.apellido}</p>
            <p>Matricula: ${usuario.matricula}</p>
            <p>Provincia: ${usuario.provincia}</p>
            <p>Edad: ${usuario.edad}</p>
            <p>titular: ${usuario.titular}</p>            
        </div>
        `;
    }
    totalUsuariosHTML.textContent = `Total de Chicos: ${usuarios.length}`;
};

formularioUsuarios.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(formularioUsuarios.provincia.value);
        usuarios.push({
        nombre: formularioUsuarios.nombre.value,
        apellido: formularioUsuarios.apellido.value,
        matricula: formularioUsuarios.matricula.value,
        edad: formularioUsuarios.edad.value,
        titular: formularioUsuarios.titular.value,        
        provincia: formularioUsuarios.provincia.value,
    });
    renderizarUsuarios();
});
  