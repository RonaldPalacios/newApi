
const template = {

    welcome : userData => {
        const { nombre, email,username } = userData;
        return `
          <h1>Nuevo usuario registrado</h1>
          </br>
          <table>
             <tbody>
              <tr>
                <td>Nombre:</td>
                <td>${nombre}</td>
              </tr>
              
              <tr>
                <td>Apellido:</td>
                <td>${email}</td>
              </tr>
              <tr>
                <td>Teléfono:</td>
                <td>${username}</td>
              </tr>
              </tbody>
        </table>`;
    }
}

    export default template;