import classes from "./CardSet2.module.css";
const CardSet2Desktop = (props) => {
    return (
        <div className="row" style={{ marginTop: '20px' }}>
            <div className="col-lg-4">
                <div className={classes['card']}>
                    <div className={classes['card-date-shadow']}></div>
                    <div className={classes['card-date']}>
                        <div>JAN</div>
                        <div>28</div>
                    </div>
                    <div className={classes['card-content']}>
                        <div>
                            <div>Insight Exchange Network</div>
                            <div>Join us for this conference showcasing innovation.</div>
                        </div>
                        <div><a href="#">Get More Insight</a></div>
                    </div>
                </div>
                <div className={classes['card-footer']}>
                    <div className={classes['card-footer-pad']}>
                        <div></div>
                        <div></div>
                    </div>
                    <div>Chicago, IL</div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className={classes['card']}>
                    <div className={classes['card-date-shadow']}></div>
                    <div className={classes['card-date']}>
                        <div>FEB</div>
                        <div>12</div>
                    </div>
                    <div className={classes['card-content']}>
                        <div>
                            <div>Citywide Buyer's Retreat</div>
                            <div>Find out how banks are responding to the changing future of interest...</div>
                        </div>
                        <div><a href="#">Get More Insight</a></div>
                    </div>
                </div>
                <div className={classes['card-footer']}>
                    <div className={classes['card-footer-pad']}>
                        <div></div>
                        <div></div>
                    </div>
                    <div>The Wagner, New York</div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className={classes['card']}>
                    <div className={classes['card-date-shadow']}></div>
                    <div className={classes['card-date']}>
                        <div>MAY</div>
                        <div>6</div>
                    </div>
                    <div className={classes['card-content']}>
                        <div>
                            <div>Research Exchange</div>
                            <div>Find the best online resources to help with your investments...</div>
                        </div>
                        <div><a href="#">Get More Insight</a></div>
                    </div>
                </div>
                <div className={classes['card-footer']}>
                    <div className={classes['card-footer-pad']}>
                        <div></div>
                        <div></div>
                    </div>
                    <div>London, England</div>
                </div>
            </div>
        </div>
    )
}

export default CardSet2Desktop;