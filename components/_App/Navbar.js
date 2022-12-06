import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Link from '../../utils/ActiveLink';
import SidebarModal from './SidebarModal';

const Navbar = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.addedItems)
    const collapsed = useSelector((state) => state.collapsedState)
    
    const toggleNavbar = () => {
        dispatch({
            type: 'COLLAPSED_STATE',
        })
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    })
 
    // Sidebar Modal
    const toggleSidebarModal = () => {
        dispatch({
            type: 'SIDEBAR_MODAL_STATE',
        })
    }
 
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area">
                <div className="main-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg">
                            <Link href="/">
                                <a onClick={toggleNavbar} className="navbar-brand">
                                    <img src="/img/logo.png" alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Home</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/pricing" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Pricing</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/aboutus" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">About Us</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/portfolio" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Portfolio</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/faq" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">FAQ</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/login" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Log In</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/schedule" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Schedule a Call</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="others-option">
                                <div className="menu-icon">
                                    <Link href="#">
                                        <a className="burger-menu" onClick={e=>{e.preventDefault(); toggleSidebarModal()}}>
                                            <i className="flaticon-menu-button"></i>
                                        </a>
                                    </Link>
                                </div>	
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            
            {/* Sidebar Modal */}
            <SidebarModal />
        </>
    );
}

export default Navbar;
