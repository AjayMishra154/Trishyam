import './index.css';
import { Component } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  '/Image1.png',
  '/Image2.png',
  '/Image3.png',
  '/Image4.png'
];

const images5 = [
  '/ball4.webp',
  '/ball2.webp',
  '/ball3.webp',
  '/ball4.webp',
  '/ball2.webp',
  '/ball3.webp',
  '/ball4.webp',
  '/ball2.webp'
];

const image5 = '/Imag5.webp';

class Home extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
        };

        return (
            <>
                <div className='specialEffect'>
                    <Navbar />
                </div>
                <div className='slider-div'>
                  <div className='slider-container'>
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Slide ${index}`} className='slider-image'/>
                            </div>
                        ))}
                    </Slider>
                </div>
                </div>
                <h1 className='heading'>Categories</h1>   
                 <div className='image-grid-container'>
                  
                    {images.map((image, index) => (
                        <div key={index} className='image-grid-item'>
                            <img src={image} alt={`Grid ${index}`} className='grid-image' />
                        </div>
                    ))}
                </div>
                <div className='full-width-image-container'>
                    <img src='/Image5.webp' alt="Full Width" className='full-width-image' />
                </div>
                 <h1 className='heading'>Ball Pen</h1>   
                <div className='responsive-grid-container'>
                    {images5.map((image, index) => (
                        <div key={index} className='responsive-grid-item'>
                            <img src={image} alt={`Grid ${index}`} className='grid-image1' />
                        </div>
                    ))}
                </div>
                
                
                <div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default Home;
