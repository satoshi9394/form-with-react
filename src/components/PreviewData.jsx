import React from 'react'


const PreviewDate = props => {
    const users = props.data.map((user, idx) => (
        <div key={idx}>
            <p>Nombre: {user.name}</p>
            <p>telefono: {user.phone} </p>
            <p>Username: {user.username}</p>
        </div>
    ));

    return(
        <div className="col s12">
            Usuarios Capturados
            {users}
        </div>
    );
}

export default PreviewDate;