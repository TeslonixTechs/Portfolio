import React from 'react';
import image from '../../images/picture.jpg';
import Images from '../Utilities/Images';
const Hero = () => {
  return (
    <div className='flex-1 w-full flex-row'>
        <Images alt={`picture`} src={image} height={`64`} width={`64`} />
        <div>
            <p>My name is Samuel Oni. I am a Full stack web developer</p>
        </div>
    </div>
  );
};

export default Hero;