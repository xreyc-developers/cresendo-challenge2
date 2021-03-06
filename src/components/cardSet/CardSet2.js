import React, { useState, useEffect } from 'react';
import CardSet2Desktop from './CardSet2Desktop';
import CardSet2Mobile from './CardSet2Mobile';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
}

const CardSet2 = (props) => {
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
            {!isMobile && <CardSet2Desktop />}
            {isMobile && <CardSet2Mobile/>}
        </>
    )
}

export default CardSet2;