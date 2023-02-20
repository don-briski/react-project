import React from 'react';
import images from '../../constants/images';

const SubHeading = ({title}) => (
  <div styles={{marginBottom: '1rem'}}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt='spoon' className='spoom_img' />
  </div>
);

export default SubHeading;
