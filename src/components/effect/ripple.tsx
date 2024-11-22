// RippleLoader.jsx

import React from 'react';

const RippleLoader = (props: any) => {
  const { className } = props;

  return (
    <div className={`${className} flex justify-center items-center bg-gray-900`}>
      <div className="relative flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <span 
            key={index} 
            className={`inline-block w-9 h-9 rounded-full mx-1 relative ${
              index === 0 ? 'bg-red-500 animate-ripple-1' :
              index === 1 ? 'bg-orange-500 scale-90 animate-ripple-2' :
              index === 2 ? 'bg-teal-500 scale-80 animate-ripple-3' :
              index === 3 ? 'bg-green-500 scale-70 animate-ripple-4' :
              index === 4 ? 'bg-pink-400 scale-60 animate-ripple-5' : ''
            }`}
          >
            <style>
              {`
                .animate-ripple-1::before {
                  content: "";
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  background-color: inherit;
                  border-radius: 50%;
                  opacity: 1;
                  animation: ripple 1.5s ease-out infinite 0.2s;
                  z-index: -1;
                }
                .animate-ripple-2::before {
                  content: "";
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  background-color: inherit;
                  border-radius: 50%;
                  opacity: 1;
                  animation: ripple 1.5s ease-out infinite 0.4s;
                  z-index: -1;
                }
                .animate-ripple-3::before {
                  content: "";
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  background-color: inherit;
                  border-radius: 50%;
                  opacity: 1;
                  animation: ripple 1.5s ease-out infinite 0.6s;
                  z-index: -1;
                }
                .animate-ripple-4::before {
                  content: "";
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  background-color: inherit;
                  border-radius: 50%;
                  opacity: 1;
                  animation: ripple 1.5s ease-out infinite 0.8s;
                  z-index: -1;
                }
                .animate-ripple-5::before {
                  content: "";
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  background-color: inherit;
                  border-radius: 50%;
                  opacity: 1;
                  animation: ripple 1.5s ease-out infinite 1s;
                  z-index: -1;
                }
                @keyframes ripple {
                  from { opacity: 1; transform: scale(0); }
                  to { opacity: 0; transform: scale(3); }
                }
              `}
            </style>
          </span>
        ))}
      </div>
    </div>
  );
};

export default RippleLoader;