import React from 'react';
import "./Contact.css";
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function Contact() {
// const {} = useLoadScript({ googleMapsApiKey: ""});

    return (
        <div className='contact-container'>
        <h1>Vă așteptăm cu drag!</h1>
            <div className='contact-box'>
                <div className='contact-detailes'>
                    <div className='location'>
                            <i class="fa-solid fa-map-pin"></i>
                            <h2 className='detail'>mun. Ungheni, com. Măcărești</h2>
                        </div>
                        <div className='phone-nr'>
                            <i class="fa-solid fa-phone"></i>
                            <h2 className='detail'>+373 60 026 599</h2>
                        </div>
                        <div className='email-adress'>
                            <i class="fa-solid fa-envelope"></i>
                            <h2 className='detail'>macaresti@gmail.com</h2>
                        </div>
                </div>
                <div className='icons'>
                    <a href='https://ro-ro.facebook.com/'><i class="fa-brands fa-facebook"></i></a>
                    <a href='https://www.instagram.com/'><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
                <div className='location-map'>
                <div class="mapouter">
                <div class="gmap_canvas">
                <iframe width="800" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Ungheni,%20Macaresti&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
                </div>
                </div>

                <div className='location-map-mobile'>
                <div class="mapouter-mobile">
                <div class="gmap_canvas-mobile">
                <iframe width="350" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Ungheni,%20Macaresti&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
                </div>
                </div>
               
        </div>

    );
}

export default Contact;
