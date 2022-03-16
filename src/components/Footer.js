import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="site-footer">
            {/* <div className="container"> */}
                <div className="row">             
                    <div className="col-4 text-center">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fas fa-github" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '} 
                    </div>
                    <div className="col-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                        <a role="button" className="btn btn-link" id="contact" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> emailhere@gmail.co</a>
                    </div>
                </div>
            {/* </div> */}
        </footer>
    );
}

export default Footer;