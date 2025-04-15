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
                    '/trishyam/1 (1).jpg', 
                    '/trishyam/1.jpg', 
                    '/trishyam/2 (1).jpg', 
                    '/trishyam/5.jpg', 
                    '/trishyam/DSC_2766.JPG',
                    '/trishyam/DSC_2772.JPG', 
                    '/trishyam/DSC_2777 (1).JPG',
                    '/trishyam/DSC_2778.JPG',
                    '/trishyam/DSC_3831.JPG',
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
        const OurClientsScroller = () => (
            <div className="marque">
            <div className="marque__group">
                {[
                    { src: '/trishyam/1 (1).jpg', alt: 'Ankita Mehra', className: 'debashi'},
                    { src: '/trishyam/1.jpg', alt: 'Dr Debashi', className: 'debashi'},
                    { src: '/trishyam/2 (1).jpg', alt: 'Dr kiran Rukadikar'},
                    { src: '/trishyam/5.jpg', alt: 'Dr Madhu Chopra'},
                    { src: '/trishyam/DSC_2766.JPG', alt: 'shikha Khanna' , className: 'debashi'},
                    { src: '/trishyam/DSC_2772.JPG', alt: 'Dr shuti Khare Shukla' },
                    { src: '/trishyam/DSC_2777 (1).JPG', alt: 'Ms Tina Vinod', className: 'debashi'},
                    { src: '/trishyam/DSC_2778.JPG', alt: 'Dr Trishna Gupte' },
                    { src: '/trishyam/DSC_3831.JPG', alt: 'Twinkle Jain', className: 'debashi'},
                ].map(client => (
                    <div className="clientImageWrapper" key={client.alt}>
                        <img src={client.src} alt={client.alt} className="clientImages" />
                        {/* <span className={`clientName ${client.className || ''}`}>{client.alt}</span> */}
                    </div>
                ))}
            </div>
    
            <div aria-hidden="true" className="marque__group">
               {[
                    { src: '/trishyam/1 (1).jpg', alt: 'Ankita Mehra', className: 'debashi'},
                    { src: '/trishyam/1.jpg', alt: 'Dr Debashi', className: 'debashi'},
                    { src: '/trishyam/2 (1).jpg', alt: 'Dr kiran Rukadikar'},
                    { src: '/trishyam/5.jpg', alt: 'Dr Madhu Chopra'},
                    { src: '/trishyam/DSC_2766.JPG', alt: 'shikha Khanna' , className: 'debashi'},
                    { src: '/trishyam/DSC_2772.JPG', alt: 'Dr shuti Khare Shukla' },
                    { src: '/trishyam/DSC_2777 (1).JPG', alt: 'Ms Tina Vinod', className: 'debashi'},
                    { src: '/trishyam/DSC_2778.JPG', alt: 'Dr Trishna Gupte' },
                    { src: '/trishyam/DSC_3831.JPG', alt: 'Twinkle Jain', className: 'debashi'},
                ].map(client => (
                    <div className="clientImageWrapper" key={client.alt}>
                        <img src={client.src} alt={client.alt} className="clientImages" />
                        {/* <span className={`clientName ${client.className || ''}`}>{client.alt}</span> */}
                    </div>
                ))}
            </div>
        </div>
        );
        

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
                {/* <div className='logoslider'>
                    <div className="App">
                    <img src='/logo.jpg' alt="Moving" className="moving-image" />
                </div>
                </div> */}
                 
                 <h1 className='heading'> Our Products</h1>
        
              <div className='body'>
                {OurClientsScroller()}
              </div>
                
                <div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default Home;
