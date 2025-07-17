import React from 'react';
import './SplashScreen.css';

function SplashScreen() {
  return (
    <div className="preloader">
      <div className="logo-container">
        {/* Seu SVG completo vem aqui */}
        <svg xmlns="http://www.w3.org/2000/svg" width="909" height="680" viewBox="0 0 909 680" fill="none" className="logo-svg">
            <defs>
                <linearGradient id="metal-stroke-gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor:'#4a4a4a'}}/><stop offset="50%" style={{stopColor:'#2a2a2a'}}/><stop offset="100%" style={{stopColor:'#4a4a4a'}}/></linearGradient>
                <linearGradient id="metal-fill-gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopColor:'#333333'}} /><stop offset="50%" style={{stopColor:'#222222'}} /><stop offset="100%" style={{stopColor:'#333333'}} /></linearGradient>
                <linearGradient id="red-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{stopColor:'#FF3B30'}} /><stop offset="100%" style={{stopColor:'#D81E05'}} /></linearGradient>
            </defs>
            <path className="path-fill path-1-fill" d="M315.5 338L637.5 679.5H906.245L612.5 343.5C603.3 332.7 608.667 322.667 612.5 319L907 0.5H633.5L315.5 338Z"/>
            <path className="path-fill path-2-fill" d="M0.5 679.5V0.5H274.5V679.5H0.5Z"/>
            <path className="path-fill path-3-fill" d="M571 0.5H315.5L316 270V274L571 0.5Z"/>
            <path className="path-fill path-4-fill" d="M315.5 405.5V679.5H573.5H574L315.5 405.5Z"/>
            <path className="path-stroke path-1" d="M315.5 338L637.5 679.5H906.245L612.5 343.5C603.3 332.7 608.667 322.667 612.5 319L907 0.5H633.5L315.5 338Z"/>
            <path className="path-stroke path-2" d="M0.5 679.5V0.5H274.5V679.5H0.5V679.5"/>
            <path className="path-stroke path-3" d="M571 0.5H315.5L316 270V274L571 0.5Z"/>
            <path className="path-stroke path-4" d="M315.5 405.5V679.5H573.5H574L315.5 405.5Z"/>
        </svg>
      </div>
    </div>
  );
}

export default SplashScreen;