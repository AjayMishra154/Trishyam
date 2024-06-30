import './index.css'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer';


const Services = () => {
    const MailComponent = () => {
        const emailAddress = 'mediathings.pr@gmail.com'
        const mailtoLink = `mailto:${emailAddress}`
        return (
          <a href={mailtoLink} className='email-href'>mediathings.pr@gmail.com</a>
        )
    }
    const services = [
        {service: 'Digital Marketing', serviceDescript: 'Enhance your online presence with our comprehensive digital marketing services. We specialize in SEO, social media strategies, and targeted advertising to drive traffic and boost conversions.', img: '/services/share-icon.svg'},
        {service: 'Press Release', serviceDescript: 'Ensure your news reaches the right audience with our press release dissemination service. We distribute your announcements to top media outlets, journalists, and industry influencers for maximum impact.', img: '/services/newspaper.svg'},
        {service: 'Press Conference', serviceDescript: 'Organize impactful press conferences with our expert assistance. From venue selection to media invitations and on-site management, we ensure your message is delivered effectively to the press.', img: '/services/podcast.svg'},
        {service: 'Product Launch', serviceDescript: 'Make your product launch unforgettable with our end-to-end event planning and promotion services. We handle everything from pre-launch buzz to post-launch analysis, ensuring a successful debut.', img: '/services/rocket.svg'},
        {service: 'Wikipedia Page', serviceDescript: "Enhance your online credibility with a professionally crafted Wikipedia page. Our team of experienced writers ensures your page meets Wikipedia's guidelines and reflects your brand accurately.", img: '/services/globe.svg'},
        {service: 'Advertorial', serviceDescript: 'Blend advertising with storytelling through our engaging advertorials. We create compelling content that subtly promotes your brand while providing valuable information to readers.', img: '/services/bullhorn.svg'},
        {service: 'Media Training', serviceDescript: 'Prepare your spokespeople for media interactions with our comprehensive media training. We offer practical techniques and personalized coaching to help them communicate effectively and confidently.', img: '/services/person-chalkboard.svg'},
        {service: 'Influencer Management', serviceDescript: "Maximize your brand's reach with our influencer management services. We identify and collaborate with key influencers in your industry to create authentic and impactful campaigns..", img: '/services/handshake.svg'},
        {service: 'Media Tracking', serviceDescript: 'Stay informed with our media tracking services. We monitor and analyze media coverage of your brand, providing insights and reports to help you understand and respond to public perception.', img: '/services/magnifying-glass.svg'},
        // {service: 'Digital Marketing', serviceDescript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores dolor explicabo sint ab exercitationem itaque ducimus modi ratione et aut fuga libero neque, nemo sapiente voluptates quam esse tenetur cupiditate repudiandae autem eveniet qui error. Odit labore ex adipisci quasi cupiditate quis quia, hic velit facilis ab, in dolorum.', img: '/services/bullseye.svg'},
    ]
    return (
        <>
            <div className='specialEffect'>
                <Navbar />
                <div className='empty-div'>
                    <h1 className='serviceHeading1'>What we offer</h1>
                </div>
            </div>
            <div className='services'>
                <div className='cardsContainer'>
                {services.map(eachService => (
                    <div className='card'>
                                <img src={eachService.img} alt="" className='serviceImage' />
                                <h3>{eachService.service}</h3>
                                <p>{eachService.serviceDescript}</p>
                    </div>
                ))}
                </div>
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

export default Services