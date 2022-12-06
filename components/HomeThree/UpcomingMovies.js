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

const UpcomingMovies = () => {
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
                    <div className="section-title white-title c_home_process_div">
                        <h2>Our Streamlined Process</h2>
                        <h4>How it works</h4>
                        <span>Our 3-step video process is super easy. Just send us your footage, we'll handle the editing and have your video delivered in 2-4 days. There are unlimited edits until you're 100% happy.</span>

                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="what-we-do-item">
                                    <i className="flaticon-film-editing-1"></i>
                                    <h1>01</h1>
                                    <h5>Send Us Your Video Footage</h5>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="what-we-do-item">
                                    <i className="flaticon-film-editing"></i>
                                    <h1>02</h1>
                                    <h5>Videos Delivered in 2-4 Days</h5>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="what-we-do-item">
                                    <i className="flaticon-advertising"></i>
                                    <h1>03</h1>
                                    <h5>Unlimited Edits Until You're 100% Happy</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    
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

export default UpcomingMovies;