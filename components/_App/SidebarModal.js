import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux'

const SidebarModal = () => {
	const dispatch = useDispatch()
	const sidebarModal = useSelector((state) => state.sidebarModalState)

	// Sidebar Modal
    const toggleSidebarModal = () => {
        dispatch({
            type: 'SIDEBAR_MODAL_STATE',
        })
	}
	
    return (
        <div className={`sidebar-modal ${sidebarModal ? 'active' : ''}`}>
            <div className="sidebar-modal-inner">
				<div className="sidebar-header">
					<div className="sidebar-logo">
                        <Link href="/">
						    <a><img src="/img/logo.png" alt="Image" /></a>
                        </Link>
					</div>
					
					<span className="close-btn sidebar-modal-close-btn" onClick={toggleSidebarModal}>
						<i className="bx bx-x"></i>
					</span>
				</div>

                <div className="sidebar-about">
                    <div className="title">
                        <p>WeCut is a high quality video production house. We make a awesome branded videos. It is the analogical of film making, but the images are digitally recorded instead of film stock.</p>
                    </div>
                </div>

                <div className="contact-us">
                    <h2>Contact Us</h2>

                    <ul>
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
							<a href="tel:+1-587-785-4578">+1 587 785 4578, +1 485 456 0102</a>
						</li>
					</ul>
				</div>

                <div className="sidebar-follow-us">
					<h2>Sidebar Follow</h2>

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
        </div>
    )
}

export default SidebarModal;