import classes from "./CardSet1.module.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../assets/images/7.png";
import img2 from "../../assets/images/5.png";
import img3 from "../../assets/images/6.png";

const CardSet1Mobile = () => {
    return (
        <div style={{ marginTop: '20px' }}>
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
        </div>
    )
}

export default CardSet1Mobile;