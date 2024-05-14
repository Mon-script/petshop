import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '350px',
  color: '#fff',
  lineHeight: '350px',
  textAlign: 'center',
  background: '#364d79',
};
const Carrucel = () => (
  <>
    <Carousel arrows infinite={false}>
      <div>
      <img className='contendorImagen'
             src={require('../imagenes/gatito1.png')} alt='foto del gatito'/>
      </div>
      <div>
      <img className='contendorImagen'
             src={require('../imagenes/gatito1.png')} alt='foto del gatito'/>
      </div>
      <div>
      <img className='contendorImagen'
             src={require('../imagenes/gatito1.png')} alt='foto del gatito'/>
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