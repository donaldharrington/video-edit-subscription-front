import React from 'react';
import Link from 'next/link';

const WhatWeDo = () => {
    return (
        <section className="what-we-do-area three bg-color-two pt-100 pb-70">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="what-we-do-content"> 
							<span>What We Do</span>
							<h2>Our Key Features</h2>
							<p>Unlimited Video Editing <br />
							USA Based Team <br />
							2-4 Day Turnarou</p> 

							<div className="brand-wrap">
								<div className="row">
									<div className="col-lg-4 col-md-4 col-sm-6">
										<div className="brand">
											<a href="#">
												<img src="/img/brand/brand1.png" alt="Image" />

												<div className="white-logo">
													<img src="/img/brand/white-brand1.png" alt="Image" />
												</div>
											</a>
										</div>
									</div>
	
									<div className="col-lg-4 col-md-4 col-sm-6">
										<div className="brand">
											<a href="#">
												<img src="/img/brand/brand2.png" alt="Image" />

												<div className="white-logo">
													<img src="/img/brand/white-brand2.png" alt="Image" />
												</div>
											</a>
										</div>
									</div>
	
									<div className="col-lg-4 col-md-4 col-sm-6 offset-sm-3 offset-md-0">
										<div className="brand">
											<a href="#">
												<img src="/img/brand/brand3.png" alt="Image" />

												<div className="white-logo">
													<img src="/img/brand/white-brand3.png" alt="Image" />
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>

                            <Link href="/contact" >
                                <a className="default-btn three">
                                    Contact Us
                                </a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="row">
							<div className="col-lg-6 col-sm-6">
								<div className="what-we-do-item mt-30">
									<i className="flaticon-film-editing-1"></i>
									<h3>Unlimited Monthly Video Editing</h3>
									<p>We help turn around videos at scale and within budget for one flat rate.</p>
								</div>
							</div>

							<div className="col-lg-6 col-sm-6">
								<div className="what-we-do-item">
									<i className="flaticon-film-editing"></i>
									<h3>Dedicated Video Editing Team</h3>
									<p>No matter the scale or difficulty, our team of expert video editors will make your vision come to life.</p>
								</div>
							</div>

							<div className="col-lg-6 col-sm-6">
								<div className="what-we-do-item">
									<i className="flaticon-advertising"></i>
									<h3>2-4 Day Turnaround</h3>
									<p>Our team of experienced professionals will  send over your first draft within 2-4 Days.</p>
								</div>
							</div>

							<div className="col-lg-6 col-sm-6">
								<div className="what-we-do-item mt-mince-30">
									<i className="flaticon-movie"></i>
									<h3>Dedicated Project Manager</h3>
									<p>With every project you'll get a dedicated  project manager to help ensure project success! </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default WhatWeDo;