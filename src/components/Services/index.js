import './index.css'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer';


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
const Services = () => {
    const MailComponent = () => {
        const emailAddress = 'trishyamwriting@gmail.com'
        const mailtoLink = `mailto:${emailAddress}`
        return (
          <a href={mailtoLink} className='email-href'>trishyamwriting@gmail.com</a>
        )
    }
    
    return (
        <>
            <div className='specialEffect'>
                <Navbar />
                <div className='empty-div'>
                    <h1 className='heading1'>What we offer</h1>
                </div>
            </div>
            <div className='responsive-grid-container'>
                    {images5.map((image, index) => (
                        <div key={index} className='responsive-grid-item'>
                            <img src={image} alt={`Grid ${index}`} className='grid-image1' />
                        </div>
                    ))}</div>
                {/* <div className='redirection about-redirection'>
                    <div className='redirectionAboutStructure'>
                        <h1 className='heading1'>LET'S MEET</h1>
                        <p className='redirection-descript'>Book a free 15-minute session where we will discuss your project, your issues and how to solve them.</p>
                        <Link to='/contactUs' className='redirectionButton'>
                            <button type='button' className='button'>Let's Start a Project</button>
                        </Link>
                    </div>
                </div> */}
            <Footer />
        </>
    )
}

export default Services