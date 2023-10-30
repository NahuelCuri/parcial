import React from "react";

const Lista = ({doctores}) =>{
    return (
        <ul>
        {doctores.map(doctor => <li key = {doctor.id}>{doctor.id} - {doctor.nombre} - {doctor.especialidad}</li>)}
        </ul>
    )
}

export default Lista