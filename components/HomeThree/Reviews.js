import React from 'react';
import Link from 'next/link';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const options = {
    loop:true,
    margin: 30,
    nav:false,
    mouseDrag: true,
    dots: true,
    autoplay: true,
    smartSpeed:1500,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
        },
        576:{
            items:2,
        },
        768:{
            items:3,
        },
        992:{
            items:4,
        },
        1200:{
            items:4,
        }
    }
};

const Reviews = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    // Popup Video
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="latest-trailer-three ptb-100 jarallax">
                <div className="container">
                    <div className="section-title white-title">
                        <span>Our Reviews</span>
                        <h2>What  People Are Saying</h2>
                    </div>

                    {display ? <OwlCarousel 
                        className="latest-trailer-wrap-two owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="latest-trailer-item c_home_review_dv">
                            <img className="c_client_img" src="/img/clients/client1.jpg" alt="Image" /> 
                            <i className="flaticon-quotation"></i>
                            <div>Great people and would recommend to anyone I meet! Everyone is impressed and my business ha gotten super busy</div>
                            <div className="c_home_review_authors">Zach Schleien</div>
                            <div className="rate-block" aria-hidden="true">
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                            </div>
                        </div>

                        <div className="latest-trailer-item c_home_review_dv">
                            <img className="c_client_img" src="/img/clients/client2.jpg" alt="Image" /> 
                            <i className="flaticon-quotation"></i>
                            <div>Great people and would recommend to anyone I meet! Everyone is impressed and my business ha gotten super busy</div>
                            <div className="c_home_review_authors">Zach Schleien</div>
                            <div className="rate-block" aria-hidden="true">
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                            </div>
                        </div>

                        <div className="latest-trailer-item c_home_review_dv">
                            <img className="c_client_img" src="/img/clients/client3.jpg" alt="Image" /> 
                            <i className="flaticon-quotation"></i>
                            <div>Great people and would recommend to anyone I meet! Everyone is impressed and my business ha gotten super busy</div>
                            <div className="c_home_review_authors">Zach Schleien</div>
                            <div className="rate-block" aria-hidden="true">
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                            </div>
                        </div>

                        <div className="latest-trailer-item c_home_review_dv">
                            <img className="c_client_img" src="/img/clients/client4.jpg" alt="Image" /> 
                            <i className="flaticon-quotation"></i>
                            <div>Great people and would recommend to anyone I meet! Everyone is impressed and my business ha gotten super busy</div>
                            <div className="c_home_review_authors">Zach Schleien</div>
                            <div className="rate-block" aria-hidden="true">
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                            </div>
                        </div>

                        <div className="latest-trailer-item c_home_review_dv">
                            <img className="c_client_img" src="/img/clients/client5.jpg" alt="Image" /> 
                            <i className="flaticon-quotation"></i>
                            <div>Great people and would recommend to anyone I meet! Everyone is impressed and my business ha gotten super busy</div>
                            <div className="c_home_review_authors">Zach Schleien</div>
                            <div className="rate-block" aria-hidden="true">
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                            </div>
                        </div>

                        <div className="latest-trailer-item c_home_review_dv">
                            <img className="c_client_img" src="/img/clients/client6.jpg" alt="Image" /> 
                            <i className="flaticon-quotation"></i>
                            <div>Great people and would recommend to anyone I meet! Everyone is impressed and my business ha gotten super busy</div>
                            <div className="c_home_review_authors">Zach Schleien</div>
                            <div className="rate-block" aria-hidden="true">
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                                <img src="https://uploads-ssl.webflow.com/60d76a724045793fced379ab/60d76aa187b38e2cc2235d57_icons8-star-filled-96%20(3).png" width="18" alt="" className="star" aria-hidden="true" />
                            </div>
                        </div>

                        

                       
                    </OwlCarousel> : ''}
                </div>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        </>
    )
}

export default Reviews;