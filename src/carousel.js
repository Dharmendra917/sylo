import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./carousel.css"

const ImageCarousel = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider className='slides'{...settings}>
        <div className='slide'>
          <img src="https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Slide 1" />
        </div>
        <div className='slide'>
          <img src="https://images.unsplash.com/photo-1598124146163-36819847286d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8anBnfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Slide 2" />
        </div>
        <div className='slide'>
          <img src="https://images.unsplash.com/photo-1598970829637-89b81d47ae27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8anBnfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
