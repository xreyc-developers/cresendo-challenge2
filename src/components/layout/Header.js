import classes from './Header.module.css';
import logoImg from '../../assets/images/logo.png';
import logoDetailImg from '../../assets/images/logo-details.png';
import logoMobile from "../../assets/images/logo2.png";
import Container from '../ui/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = (props) => {
    const [isShowPopup, setIsShowPopUp] = useState(false);

    return (
        <header>
            <Container>
                <div className={classes['header-grid']}>
                    <div>
                        <img src={logoImg} className={classes['brand']}/>
                        <img src={logoDetailImg} className={classes['brand-description']}/>
                    </div>
                    <div>
                        <div><a href="#">Home</a></div>
                        <div><a href="#">About Us</a></div>
                        <div><a href="#">Insights</a></div>
                        <div><a href="#">Events</a></div>
                        <div><a href="#">Contact Us</a></div>
                    </div>
                </div>

                <div className={classes['mobile-header']}>
                    <img src={logoMobile}/>
                    <span onClick={() => setIsShowPopUp(prev => !prev)}><FontAwesomeIcon icon={faBars} className={classes['mobile-header-bar']}/></span>
                </div>

                {isShowPopup && <div className={classes['mobile-popup']}>
                    <div>Site Links</div>
                    <hr></hr>
                    <div className={classes['mobile-popup-menu']}>
                        <div>Home</div>
                        <div>About Us</div>
                        <div>Insights</div>
                        <div>Events</div>
                        <div>Contact Us</div>
                    </div>
                </div>}

                {isShowPopup && <div onClick={() => setIsShowPopUp(prev => !prev)} className={classes['mobile-popup-bg']}></div>}

            </Container>
        </header>
    )
}

export default Header;