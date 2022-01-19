import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import classes from "./CardSet1.module.css";
import img1 from "../../assets/images/7.png";
import img2 from "../../assets/images/5.png";
import img3 from "../../assets/images/6.png";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const CardSet1 = (props) => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[]);

    let isMobile = false;
    if(windowDimensions.width < 1000) {
        isMobile = true;
    } else {
        isMobile = false;
    }
    console.log(isMobile)
    

    return (
        <>
            {!isMobile && <div className="row" style={{ marginTop: '20px' }}>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className={classes['card']} style={{ borderBottom: '7px solid var(--color-primary)'}}>
                        <div>
                            <div></div>
                            <div></div>
                            <img src={img1} />
                        </div>
                        <div style={{ color: 'var(--color-primary)'}}>Global Factor Investing Study</div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className={classes['card']} style={{ borderBottom: '7px solid var(--color-secondary)'}}>
                        <div>
                            <div></div>
                            <div></div>
                            <img src={img2} />
                        </div>
                        <div style={{ color: 'var(--color-secondary)'}}>2019</div>
                        <div style={{ color: 'var(--color-secondary)'}}>Outlook</div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className={classes['card']} style={{ borderBottom: '7px solid var(--color-tertiary)'}}>
                        <div>
                            <div></div>
                            <div></div>
                            <img src={img3} />
                        </div>
                        <div style={{ color: 'var(--color-tertiary)'}}>Capital Market Assumptions</div>
                    </div>
                </div>
            </div>}

            {isMobile && <div style={{ marginTop: '20px' }}>
                <Carousel>
                    <div className={classes['card']} style={{ borderBottom: '7px solid var(--color-primary)', marginBottom: '40px'}}>
                        <div>
                            <div></div>
                            <div></div>
                            <img src={img1} />
                        </div>
                        <div style={{ color: 'var(--color-primary)'}}>Global Factor Investing Study</div>
                    </div>
            
                    <div className={classes['card']} style={{ borderBottom: '7px solid var(--color-secondary)', marginBottom: '40px'}}>
                        <div>
                            <div></div>
                            <div></div>
                            <img src={img2} />
                        </div>
                        <div style={{ color: 'var(--color-secondary)'}}>2019</div>
                        <div style={{ color: 'var(--color-secondary)'}}>Outlook</div>
                    </div>
            
                    <div className={classes['card']} style={{ borderBottom: '7px solid var(--color-tertiary)', marginBottom: '40px'}}>
                        <div>
                            <div></div>
                            <div></div>
                            <img src={img3} />
                        </div>
                        <div style={{ color: 'var(--color-tertiary)'}}>Capital Market Assumptions</div>
                    </div>
                </Carousel>
            </div>}
        </>
    )
}

export default CardSet1;