import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="footer-top-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a><img src="/img/white-logo.png" alt="Image" /></a>
                                    </Link>
                                </div>
                                
                                <div className="newsletter-wrap">
                                    <h3>Subscribe Newsletter</h3>
                                    <form className="newsletter-form">
                                        <input type="email" className="form-control" placeholder="Enter email address" name="email" required />
            
                                        <button className="send-btn" type="submit">
                                            <i className="bx bx-right-arrow-alt"></i>
                                        </button>
                                    </form>
                                </div>

                                <ul className="social-wrap">
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className="bx bxl-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="bx bxl-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/" target="_blank">
                                            <i className="bx bxl-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-widget">
                                <h3>Contact Us</h3>

                                <ul className="address">
                                    <li>
                                        <i className="flaticon-pin"></i>
                                        6890 Blvd, The Bronx, NY 1058 Jerusalem, Israel
                                    </li>
                                    <li>
                                        <i className="flaticon-email-1"></i>
                                        <a href="mailto:ian@webanimtech.com">
                                            ian@webanimtech.com
                                        </a>  <br />
                                        <a href="#">
                                            Skype: live:.cid.a015688843710816
                                        </a> <br />
                                        <a href="#">
                                            Telegram: https://t.me/bobankankaras
                                        </a>
                                    </li>
                                    <li>
                                        <i className="flaticon-phone-call"></i>
                                        <a href="tel:+1-587-785-4578">
                                            +1 587 785 4578,  +1 485 456 0102
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-widget">
                                <h3>Additional Links</h3>

                                <ul className="additional-link">
                                    <li>
                                        <Link href="/pricing">
                                            <a>Pricing</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/aboutus">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio">
                                            <a>Portfolio</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">
                                            <a>Help (FAQ)</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/login">
                                            <a>Login</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/schedule">
                                            <a>Schedule Call</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
		 
            <footer className="footer-bottom-area">
                <div className="container">
                    <div className="copyright-wrap">
                        <p>Copyright @{currentYear} WeCut. Built By <a href="#" target="blank">Ian Sebbagh</a></p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;