import React from 'react';
import images from '../../constants/images';
import './Header.css';
import SubHeading from '../../components/SubHeading/SubHeading';


const Header = () => (
  <div className='app__header app__wrapper section__padding ' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='chase the new flavour' />
      <h1 className='app__header-h1'> The Key to Fine Dining</h1>
    </div>

  </div>
);

export default Header;
