import './index.css'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'

const About = () => {
    const imageNames = ['bombaytimes', 'cosmopolitan', 'healthshots', 'healthsite', 'Mid-Day', 'pinkvilla', 'thestatesman', 'vouge']
    const ImageScroller = () => (
        <div class="marquee">
            <div class="marquee__group">
                <img src="/tieupCompanies/AICFB.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/bookmychef.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/BVC.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/galalite.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/honey.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/intercont.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/jetking.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/MHS.png" alt="AICFB" className='tieupCompaniesImages MHS' />
                <img src="/tieupCompanies/mum.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/Richkardz.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/SA.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/Sde.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/SKS.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/tea-culture-world.png" alt="AICFB" className='tieupCompaniesImages' />
            </div>
            <div aria-hidden="true" class="marquee__group">
                <img src="/tieupCompanies/AICFB.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/bookmychef.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/BVC.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/galalite.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/honey.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/intercont.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/jetking.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/MHS.png" alt="AICFB" className='tieupCompaniesImages MHS' />
                <img src="/tieupCompanies/mum.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/Richkardz.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/SA.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/Sde.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/SKS.png" alt="AICFB" className='tieupCompaniesImages' />
                <img src="/tieupCompanies/tea-culture-world.png" alt="AICFB" className='tieupCompaniesImages' />
            </div>
        </div>
    )
    const OurClientsScroller = () => (
        <div className="marque">
            <div className="marque__group">
                {[
                    { src: '/clientImages/AnkitMehra.png', alt: 'Ankita Mehra', className: 'debashi'},
                    { src: '/clientImages/debashi.png', alt: 'Dr Debashi', className: 'debashi'},
                    { src: '/clientImages/kiran.png', alt: 'Dr kiran Rukadikar'},
                    { src: '/clientImages/madhu.png', alt: 'Dr Madhu Chopra'},
                    { src: '/clientImages/shikha.png', alt: 'shikha Khanna' , className: 'debashi'},
                    { src: '/clientImages/shuti.png', alt: 'Dr shuti Khare Shukla' },
                    { src: '/clientImages/Tina.png', alt: 'Ms Tina Vinod', className: 'debashi'},
                    { src: '/clientImages/Trishna.png', alt: 'Dr Trishna Gupte' },
                    { src: '/clientImages/Twinkle.png', alt: 'Twinkle Jain', className: 'debashi'},
                ].map(client => (
                    <div className="clientImageWrapper" key={client.alt}>
                        <img src={client.src} alt={client.alt} className="clientImages" />
                        <span className={`clientName ${client.className || ''}`}>{client.alt}</span>
                    </div>
                ))}
            </div>
    
            <div aria-hidden="true" className="marque__group">
                {[
                    { src: '/clientImages/AnkitMehra.png', alt: 'Ankita Mehra', className: 'debashi'},
                    { src: '/clientImages/debashi.png', alt: 'Dr Debashi', className: 'debashi'},
                    { src: '/clientImages/kiran.png', alt: 'Dr kiran Rukadikar'},
                    { src: '/clientImages/madhu.png', alt: 'Dr Madhu Chopra' },
                    { src: '/clientImages/shikha.png', alt: 'shikha Khanna' , className: 'debashi'},
                    { src: '/clientImages/shuti.png', alt: 'Dr shuti Khare Shukla' },
                    { src: '/clientImages/Tina.png', alt: 'Ms Tina Vinod', className: 'debashi'},
                    { src: '/clientImages/Trishna.png', alt: 'Dr Trishna Gupte' },
                    { src: '/clientImages/Twinkle.png', alt: 'Twinkle Jain', className: 'debashi'},
                ].map(client => (
                    <div className="clientImageWrapper" key={client.alt}>
                        <img src={client.src} alt={client.alt} className="clientImages" />
                        <span className={`clientName ${client.className || ''}`}>{client.alt}</span>
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
                    <h1 className='serviceHeading1'>About Us</h1>
                    <p className='aboutDescript1'>"We are your reliable medium for impactful communication"</p>
                </div>
            </div>
            <div className='whatWeOffer1'>
    <div className='aboutContent'>
        
        <div className='aboutText1'>
            {/* <h1>Little Story About Us</h1> */}
            {/* <h3 className='aboutHeading'>Little Story About Us</h3> */}
            <p className='aboutDescriptheader'>
                <span className='specialword'>MediaThings</span> is a pioneering media services company committed to redefining how businesses communicate with their audiences. Combining innovative strategies with a client-focused approach, MediaThings offers a comprehensive suite of services designed to enhance brand visibility and audience engagement in today's dynamic media landscape. <br/><br/> 
            </p>
            <p className='aboutDescript2'>
                A team of seasoned media professionals with extensive industry experience, work together at MediaThings with a vision to deliver integrated media solutions. The company has become a trusted partner for businesses in various sectors like healthcare, entertainment, defence, logistics, FMCG etc, and seeking expert guidance in digital marketing, public relations, and media management. MediaThings excels through its dedication to quality, creativity, and results-driven strategies, ensuring every client achieves their communication objectives with precision and impact.<br/><br/> 

                With a dedication to quality, creativity, and results-driven strategies, MediaThings ensures that every client achieves their communication objectives with precision and impact. Whether you are looking to boost your digital presence, manage public relations, or track media impact, MediaThings is your trusted partner in navigating the complex media landscape.
                <br/><br/> 
            </p>
        </div>
    </div>
</div>
        <h1 className='heading'>Company Who Trust Us</h1>
            <div className='body'>
                {ImageScroller()}
              </div>
              <div className='body'>
                {OurClientsScroller()}
              </div>
            <div className='redirection about-redirection'>
                <div className='redirectionAboutStructure'>
                    <h1>LET'S MEET</h1>
                    <p className='redirection-descript'>Book a free 15-minute session where we will discuss your project, your issues and how to solve them.</p>
                    <Link to='/contactUs' className='redirectionButton'>
                        <button type='button' className='button'>Let's Start a Project</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About