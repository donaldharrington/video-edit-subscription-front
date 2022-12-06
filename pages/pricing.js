import React from 'react';
import Navbar from '../components/_App/Navbar';
import HeroSlider from '../components/DefaultHome/HeroSlider'
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import ContactWithUs from '../components/Common/ContactWithUs';
import Footer from '../components/_App/Footer';

const BlogGrid = () => {
    return (
        <>
            <Navbar />

            <HeroSlider />
            
            {/*             
            <PageBanner 
                pageTitle="Unlimited Monthly Video Editing" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Pricing" 
                imgclassName="bg-6" 
            />     */}

            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Pricing</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">                            
                                <div className="blog-content c_pricing_item_dv">
                                    <h2>Beginner</h2>
                                    <h3>$890/month</h3>
                                    <h5>What's Included:</h5>
                                    <div><img src="/img/confirm.jpg" />Unlimited Monthly Video Editing</div>
                                    <div><img src="/img/confirm.jpg" />1 Active Video at a Time</div>
                                    <div><img src="/img/confirm.jpg" />2-4 Day Business Day Turnaround</div>
                                    <div><img src="/img/confirm.jpg" />Dedicated Video Editing Team</div>
                                    <div><img src="/img/confirm.jpg" />Dedicated Project Manager</div>
                                    <div><img src="/img/confirm.jpg" />Royalty Free Music</div>
                                    <div><img src="/img/confirm.jpg" />Free Access to Our Client Portal</div>
                                    <div><img src="/img/confirm.jpg" />Video Resizing for Different Platforms</div>
                                    <div><img src="/img/confirm.jpg" />Color Correction</div>
                                    <div><img src="/img/confirm.jpg" />20 GB limit per active project</div>
                                    <div><img src="/img/confirm.jpg" />Accepted File Types: MOV, MP4, JPEG, PNG</div>
                                    <div><img src="/img/confirm.jpg" />Lower Thirds</div>
                                    <div><a className="default-btn" href="#">Get Start</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">                            
                                <div className="blog-content c_pricing_item_dv">
                                    <h2>Scale</h2>
                                    <h3>$1,750/month</h3>
                                    <h5>What's Included:</h5>
                                    <div><img src="/img/confirm.jpg" />Unlimited Monthly Video Editing</div>
                                    <div><img src="/img/confirm.jpg" />1 Active Video at a Time</div>
                                    <div><img src="/img/confirm.jpg" />2-4 Day Business Day Turnaround</div>
                                    <div><img src="/img/confirm.jpg" />Dedicated Video Editing Team</div>
                                    <div><img src="/img/confirm.jpg" />Dedicated Project Manager</div>
                                    <div><img src="/img/confirm.jpg" />Royalty Free Music</div>
                                    <div><img src="/img/confirm.jpg" />Free Access to Our Client Portal</div>
                                    <div><img src="/img/confirm.jpg" />Video Resizing for Different Platforms</div>
                                    <div><img src="/img/confirm.jpg" />Color Correction</div>
                                    <div><img src="/img/confirm.jpg" />20 GB limit per active project</div>
                                    <div><img src="/img/confirm.jpg" />Accepted File Types: MOV, MP4, JPEG, PNG</div>
                                    <div><img src="/img/confirm.jpg" />Lower Thirds</div>
                                    <div><a className="default-btn" href="#">Get Start</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">                            
                                <div className="blog-content c_pricing_item_dv">
                                    <h2>Pro</h2>
                                    <h3>$2,630/month</h3>
                                    <h5>What's Included:</h5>
                                    <div><img src="/img/confirm.jpg" />Unlimited Monthly Video Editing</div>
                                    <div><img src="/img/confirm.jpg" />1 Active Video at a Time</div>
                                    <div><img src="/img/confirm.jpg" />2-4 Day Business Day Turnaround</div>
                                    <div><img src="/img/confirm.jpg" />Dedicated Video Editing Team</div>
                                    <div><img src="/img/confirm.jpg" />Dedicated Project Manager</div>
                                    <div><img src="/img/confirm.jpg" />Royalty Free Music</div>
                                    <div><img src="/img/confirm.jpg" />Free Access to Our Client Portal</div>
                                    <div><img src="/img/confirm.jpg" />Video Resizing for Different Platforms</div>
                                    <div><img src="/img/confirm.jpg" />Color Correction</div>
                                    <div><img src="/img/confirm.jpg" />20 GB limit per active project</div>
                                    <div><img src="/img/confirm.jpg" />Accepted File Types: MOV, MP4, JPEG, PNG</div>
                                    <div><img src="/img/confirm.jpg" />Lower Thirds</div>
                                    <div><a className="default-btn" href="#">Get Start</a></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
 
            <ContactWithUs />
            
            <Footer />
        </>
    )
}

export default BlogGrid;