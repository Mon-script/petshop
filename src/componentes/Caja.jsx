import React from 'react'
import ReactDOM from 'react'
import '../estilos/caja.css'

function Caja(){
    return(<div className='contenedortexto'>
            <img className='contendorImagen'
             src={require('../imagenes/gatito1.png')} alt='foto del gatito'/>
        <h4 className='contenedorTitulo'>
            Gatito
        </h4>
        <p>
        los gatos son simplemente superiores
        </p>
        <button className='botonMasInfo'>
            Solicitar Información
        </button>
    </div>

    )
}

export default Caja