import React from 'react'

import {Contacto} from '../model/contact'
import Comp_B from './comp_B'


const Comp_A = ()=> {
    
    const defaultContact = new Contacto("juan", "pachango", "pachango@gmail.com", false)
    
    return (
    <div>
        <Comp_B contacto ={defaultContact}></Comp_B>
    </div>
  )
}


export default Comp_A

