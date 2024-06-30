import './index.css'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'

const About = () => {

    const OurClientsScroller = () => (
        <div className="marque">
            <div className="marque__group">
                {[
                    { src: '/ball2.webp', alt: 'Ankita Mehra', className: 'debashi'},
                    { src: '/ball3.webp', alt: 'Dr Debashi', className: 'debashi'},
                    { src: '/ball4.webp', alt: 'Dr kiran Rukadikar'},
                    { src: '/ball4.webp', alt: 'Dr Madhu Chopra'},
                    { src: '/ball2.webp', alt: 'shikha Khanna' , className: 'debashi'},
                    { src: '/ball3.webp', alt: 'Dr shuti Khare Shukla' },
                    { src: '/ball1.webp', alt: 'Ms Tina Vinod', className: 'debashi'},
                    { src: '/ball3.webp', alt: 'Dr Trishna Gupte' },
                    { src: '/ball2.webp', alt: 'Twinkle Jain', className: 'debashi'},
                ].map(client => (
                    <div className="clientImageWrapper" key={client.alt}>
                        <img src={client.src} alt={client.alt} className="clientImages" />
                        {/* <span className={`clientName ${client.className || ''}`}>{client.alt}</span> */}
                    </div>
                ))}
            </div>
    
            <div aria-hidden="true" className="marque__group">
               {[
                    { src: '/ball2.webp', alt: 'Ankita Mehra', className: 'debashi'},
                    { src: '/ball3.webp', alt: 'Dr Debashi', className: 'debashi'},
                    { src: '/ball4.webp', alt: 'Dr kiran Rukadikar'},
                    { src: '/ball4.webp', alt: 'Dr Madhu Chopra'},
                    { src: '/ball2.webp', alt: 'shikha Khanna' , className: 'debashi'},
                    { src: '/ball3.webp', alt: 'Dr shuti Khare Shukla' },
                    { src: '/ball1.webp', alt: 'Ms Tina Vinod', className: 'debashi'},
                    { src: '/ball3.webp', alt: 'Dr Trishna Gupte' },
                    { src: '/ball2.webp', alt: 'Twinkle Jain', className: 'debashi'},
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
                <div className='empty-div'>
                    <h1 className='heading1'>About Us</h1>
                    <p className='aboutDescript1 heading1'>"We are your reliable medium for impactful communication"</p>
                </div>
            </div>
            <div className='whatWeOffer1'>
    <div className='aboutContent'>
        
        <div className='aboutText1'>
            {/* <h1>Little Story About Us</h1> */}
            {/* <h3 className='aboutHeading'>Little Story About Us</h3> */}
            <p className='aboutDescriptheader'>
                <span className='specialword'>Trishyam</span> the home of Duster pens—a brand synonymous with innovation, quality, and precision in writing instruments. At Trishyam, we are passionate about creating pens that inspire creativity and enhance the writing experience for people all around the world. <br/><br/> 
            </p>
            <p className='aboutDescript2'>
               Founded with a vision to revolutionize the pen industry, Trishyam has grown to become a trusted name in the market. Our journey began with a simple mission: to design and manufacture pens that are not only functional but also a joy to use. Over the years, we have stayed true to this mission, constantly evolving and innovating to meet the changing needs of our customers.<br/><br/> 

               Duster, our flagship brand, embodies the essence of Trishyam’s commitment to excellence. Every Duster pen is crafted with meticulous attention to detail, ensuring a smooth and effortless writing experience. From sleek, ergonomic designs to high-quality materials, Duster pens are perfect for students, professionals, and anyone who values the art of writing.
                <br/><br/> 
                At Trishyam, we believe that a pen is more than just a tool—it's an expression of individuality and a gateway to creativity. That’s why we are dedicated to providing pens that offer both style and substance. Our commitment to sustainability is also at the forefront of our operations. We strive to minimize our environmental footprint by using eco-friendly materials and manufacturing processes.
            </p>
        </div>
    </div>
</div>
        <h1 className='heading'> Our Products</h1>
        
              <div className='body'>
                {OurClientsScroller()}
              </div>
         
            <Footer />
        </>
    )
}

export default About