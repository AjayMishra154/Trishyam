// src/components/Hiring.js
import './index.css';
import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Hiring = () => {
    const MailComponent = () => {
    const emailAddress = 'letsconnect@mediathings.in';
    const mailtoLink = `mailto:${emailAddress}`;
    return (
      <a href={mailtoLink} className='email-href'>letsconnect@mediathings.in</a>
    );
};

return (
    <>
        <div className='specialEffect'>
            <Navbar />
            <div className='empty-div'>
                    <h1 className='serviceHeading1'>Hiring</h1>
                </div>
        </div>
       <div>
         <h3 >Join Our Team at MediaThings</h3>
         <p>
         With a wide range of services at MediaThings, you’ll have the opportunity to work on diverse and challenging projects that will enhance your skills and experience. If you are looking to be part of a dynamic and creative team, we invite you to explore the exciting career opportunities at MediaThings.
         Email your CV to us at {MailComponent()}
         </p>
         
       </div>
        <Footer />

    </>
            )
}
export default Hiring;
