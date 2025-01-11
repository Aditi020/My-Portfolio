import React from "react";
import "./Animate.css";

function BackgroundAnimation() {
    return (
        <div className="background-animation">
            {/* Animated elements inside the home-content */}

            {/* Floating shapes */}
            <div className="floating-shape shape1"></div>
            <div className="floating-shape shape2"></div>
            <div className="floating-shape shape3"></div>

            {/* Bouncing elements */}
            <div className="bouncing-shape shape4"></div>
            <div className="bouncing-shape shape5"></div>

            {/* Rotating particles */}
            <div className="rotating-particle particle1"></div>
            <div className="rotating-particle particle2"></div>
            <div className="rotating-particle particle3"></div>

            {/* Glowing dots */}
            <div className="glowing-dot dot1"></div>
            <div className="glowing-dot dot2"></div>
            <div className="glowing-dot dot3"></div>
            <div className="glowing-dot dot4"></div>
        </div>
    );
}

export default BackgroundAnimation;
