import React from 'react';
import { Carousel } from 'antd';
import '../estilos/carucel.css';

const Carrucel = () => (
  <>
    <Carousel arrows infinite={false}>
      <div>
      <img className='contendorImagen'
             src={require('../imagenes/fotos `pet/descarga.jpg')} alt='foto del gatito'/>
      </div>
      <div>
      <img className='contendorImagen'
             src={require('../imagenes/fotos `pet/descarga (6).jpg')} alt='foto del gatito'/>
      </div>
      <div>
      <img className='contendorImagen'
             src={require('../imagenes/fotos `pet/descarga (7).jpg')} alt='foto del gatito'/>
      </div>
      <div>
      <img className='contendorImagen'
             src={require('../imagenes/gatito1.png')} alt='foto del gatito'/>
      </div>
    </Carousel>
    <br />
    
  </>
);
export default Carrucel;