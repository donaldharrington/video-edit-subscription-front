import React from 'react';
import Link from 'next/link';

const SignupForm = () => {
    return (
        <div className="user-area-style log-in-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-3"></div>
					<div className="col-lg-6">
						<div className="contact-form-action mb-0">
							<div className="section-title">
								<h2>Create An Account!</h2>
								<p>Please enjoy to make happy video on our site</p>
							</div>
							<form method="post">
								<div className="row">
									<div className="col-sm-6">
										<div className="form-group">
											<input className="form-control" type="text" name="name" placeholder="First Name" />
										</div>
									</div>
		
									<div className="col-sm-6">
										<div className="form-group">
											<input className="form-control" type="text" name="name" placeholder="Last Name" />
										</div>
									</div>
                                </div>
							 
                                <div className="form-group">
                                    <input className="form-control" type="text" name="name" placeholder="Enter your Username" />
                                </div>
                            
                                <div className="form-group">
                                    <input className="form-control" type="email" name="email" placeholder="Email Address" />
                                </div>
                        
                                <div className="form-group">
                                    <input className="form-control" type="text" name="password" placeholder="Password" />
                                </div>
                            
                                <div className="form-group">
                                    <input className="form-control" type="text" name="password" placeholder="Confirm Password" />
                                </div>
						 
								<div className="col-12">
										<div className="login-action">
											<span className="forgot-login">
												<Link href="/login">
													<a>Do you have your account?</a>
												</Link>
											</span> <br />
										</div>
									</div>

                                <button className="default-btn two" type="submit">
                                    Register Now
                                </button>
							</form>
						</div>
					</div>
					<div className="col-lg-3"></div>
				</div>
			</div>
		</div>
    )
}

export default SignupForm;