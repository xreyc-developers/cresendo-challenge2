import React, { useState, useEffect } from 'react';
import CardSet1Desktop from './CardSet1Desktop';
import CardSet1Mobile from './CardSet1Mobile';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
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
    
    return (
        <>
            {!isMobile && <CardSet1Desktop />}
            {isMobile && <CardSet1Mobile />}
        </>
    )
}

export default CardSet1;