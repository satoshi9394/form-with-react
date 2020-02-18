import React from 'react'


const PreviewDate = props => {
    const users = props.data.map((user, idx) => (
        <div key={idx}>
            <p>{user.name}</p>
            <p>{user.age}</p>
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