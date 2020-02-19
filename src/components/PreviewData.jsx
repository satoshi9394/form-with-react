import React from 'react'


const PreviewDate = props => {
    const users = props.data.map((user, idx) => (
        <div key={idx}>
            <p>Nombre: {user.name}</p>
            <p>Edad: {user.age} años</p>
        </div>
    ));

    return(
        <div className="col s4">
            Usuarios Capturados
            {users}
        </div>
    );
}

export default PreviewDate;