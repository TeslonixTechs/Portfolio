import React from 'react';
import Images from '../Utilities/Images';
import image from '../../images/IMG-20241113-WA0022.jpg';
const Hero = () => {
  return (
    <div>
        <Images src={image} alt={`logo`} width={`36`} height={`36`} />
        <div>
            <p>about me here</p>
        </div>
    </div>
  );
};

export default Hero;