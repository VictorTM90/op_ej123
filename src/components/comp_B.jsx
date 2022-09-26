import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../model/contact'

function Comp_B( { contacto } ) {

    const {nombre, apellido, email,conectado}=contacto

    return (
    
       <div>
            <h1>{nombre}</h1>
            <h1>{apellido}</h1>
            <h3>{email}</h3>
            <h4>{conectado ? " Contacto En Línea" : "Contacto No Disponible"}</h4>

       </div>
    )
}

Comp_B.PropTypes = {
   contacto: PropTypes.instanceOf(Contacto)
}

export default Comp_B
