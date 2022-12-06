import React from 'react';
import Link from 'next/link';

const About = () => {
    return (
        <div className="about-area-two three bg-color-two ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-content">
                            <span>Wecut portal</span>
                            <h2>Our Client Portal</h2>
                            <p>With our easy-to use client portal, you'll have a central place to manage all communication and submit video requests.</p>

                            <div className="c_home_portal_item_dv">
                                <h3>Direct Communication</h3>
                                <p>Send messages directly to our team.</p>
                            </div>

                            <div className="c_home_portal_item_dv">
                                <h3>Submit Requests</h3>
                                <p>Easily submit video requests.</p>
                            </div>

                            <div className="c_home_portal_item_dv">
                                <h3>Full Visbility</h3>
                                <p>Track the progress of your projects in real-time.</p>
                            </div>

                            <Link href="/">
                                <a className="default-btn three">
                                    Learn More
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 p-0">
                                <div className="about-grid-img">
                                    <img src="/img/about-grid/1.png" alt="Image" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6 p-0">
                                <div className="about-grid-img">
                                    <img src="/img/about-grid/2.png" alt="Image" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6 p-0">
                                <div className="about-grid-img m-rs mb-0">
                                    <img src="/img/about-grid/3.png" alt="Image" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6 p-0">
                                <div className="about-grid-img mb-0">
                                    <img src="/img/about-grid/5.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;