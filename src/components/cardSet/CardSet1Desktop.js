import classes from "./CardSet1.module.css";
import img1 from "../../assets/images/7.png";
import img2 from "../../assets/images/5.png";
import img3 from "../../assets/images/6.png";

const CardSet1Desktop = () => {
    return (
        <div className="row" style={{ marginTop: '20px' }}>
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
        </div>
    )
}

export default CardSet1Desktop;