import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property vallue called `fill`. `fill` is useful
 * when you want to change your logo depending on the theme you are on.
 */
export default function Logo({fill}) {
    return (
        <svg height="40px" width="40px" id="svg2" version="1.1"
             viewBox="0 0 32 32" >
            <g id="background">
                <rect fill="none" height="35" width="35"/>
            </g>
            <g id="sourcecode">
                <polygon points="22,22 22,26 32,16 22,6 22,10 28,16 " fill={fill}/>
                <polygon points="10,22 10,26 0,16 10,6 10,10 4,16" fill={fill}/>
                <polygon points="10,20 14,20 22,12 18,12" fill={fill}/>
            </g>
        </svg>
    );
}