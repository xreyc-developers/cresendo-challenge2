import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import classes from "./Footer.module.css";
import logoMobile from "../../assets/images/logo2.png";

const Footer = () => {
    return (
        <>
            <footer className={classes['mobile-footer']}>
                <div className="container">
                    <img src={logoMobile}/>
                </div>
                <div className={classes['mobile-footer-menu']}>
                    <div className={classes['mobile-footer-dual']}>
                        <div>Privacy Policy</div>
                        <div>Terms of Use</div>
                    </div>
                    <div>Site Links</div>
                    <hr></hr>
                    <div className={classes['mobile-footer-single']}>
                        <div>Home</div>
                        <div>About Us</div>
                        <div>Insights</div>
                        <div>Events</div>
                        <div>Due Diligence</div>
                        <div>Contact Us</div>
                    </div>
                </div>
            </footer>


            <footer className={classes['footer']}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <span>Call us at 111-222-3333</span><br/>
                            <span>fot more information</span>
                        </div>
                        <div className={"col-lg-6" + " " + classes['footer-social']}>
                            <span>Social Share</span>
                            <span><FontAwesomeIcon icon={faTwitter}/></span>
                            <span><FontAwesomeIcon icon={faFacebook}/></span>
                            <span><FontAwesomeIcon icon={faLinkedin}/></span>
                            <span><FontAwesomeIcon icon={faGithub}/></span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;