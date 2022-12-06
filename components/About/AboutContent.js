import React from 'react';

const AboutContent = () => {
    return (
        <div className="about-area-two bio-data ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-content">
							<span>wecut Bio</span>
							<h2>Video Edit Company</h2>

							<h3>Who We Are</h3>
							<p>Video production work with producing video content. It is the analogical of film making, but the images are digitally recorded instead of film stock. There are three levels of video production.</p>

							<h3 className="mt-30">Who We Work</h3>
							<p>Video production work with producing video content. It is the analogical of film making, but the images are digitally recorded instead of film stock. There are three levels of video production.</p>
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
								<div className="about-grid-img r-sm mb-0">
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

export default AboutContent;