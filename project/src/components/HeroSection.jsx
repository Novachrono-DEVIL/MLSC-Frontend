import React, { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const titleRef = useRef(null);
  const countdownRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // GSAP animations for title and countdown
  useEffect(() => {
    // Ensure gsap is available on the window object before running animations
    if (window.gsap) {
      const ctx = window.gsap.context(() => {
        if (titleRef.current) {
          const letters = titleRef.current.children;
          window.gsap.from(letters, {
            opacity: 0,
            y: 100,
            rotationX: -90,
            stagger: 0.05,
            duration: 1,
            ease: 'back.out(1.7)',
            delay: 0.5
          });
        }

        if (countdownRef.current) {
          window.gsap.from(countdownRef.current, {
            scale: 0,
            opacity: 0,
            duration: 1,
            delay: 1.5,
            ease: 'elastic.out(1, 0.5)'
          });
        }
      });

      return () => ctx.revert();
    }
  }, []);

  // Countdown timer logic
  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('2025-10-11T00:00:00');
      const difference = eventDate - new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const title = "MLSC HACKATHON 2025";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1920")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'slowZoom 30s infinite alternate'
          }}
        ></div>
        <div className="stars"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4">

        {/* Title */}
        <div
          ref={titleRef}
          className="mb-6 flex justify-center" // Removed flex-wrap to keep it on one line
        >
          {title.split('').map((char, index) => (
            <span
              key={index}
              // Adjusted font sizes for better responsiveness
              className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black"
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                textShadow: '0 0 30px rgba(220,38,38,0.8), 0 0 60px rgba(220,38,38,0.4), 0 5px 20px rgba(0,0,0,0.8)',
                background: 'linear-gradient(to bottom, #fff, #dc2626)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                // Added slight letter spacing for readability on smaller screens
                letterSpacing: char === ' ' ? '0.5em' : '0.01em',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>

        {/* Subtitles */}
        <p className="text-xl md:text-2xl text-gray-300 mb-2 font-bold tracking-wide text-center">
          INNOVERGENCE XXV
        </p>
        <p className="text-base md:text-lg text-red-400 mb-8 font-semibold text-center">
          October 11-12, 2025 | 24-Hour Innovation Battleground
        </p>

        {/* Countdown Timer */}
        <div
          ref={countdownRef}
          className="mb-10"
        >
          <div className="flex gap-3 md:gap-6 justify-center">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="relative"
              >
                <div
                  className="bg-gradient-to-b from-red-900/50 to-black/50 backdrop-blur-md rounded-lg p-3 md:p-5 border-2 border-red-500/50 min-w-[70px] md:min-w-[100px] text-center"
                  style={{
                    boxShadow: '0 0 30px rgba(220,38,38,0.6), inset 0 0 20px rgba(220,38,38,0.2)',
                    animation: 'glowPulse 2s infinite'
                  }}
                >
                  <div
                    className="text-3xl md:text-5xl font-black text-white mb-1"
                    style={{
                      textShadow: '0 0 10px rgba(220,38,38,0.8)'
                    }}
                  >
                    {String(value).padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 uppercase font-bold tracking-wider">
                    {unit}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-4 font-semibold text-center">
            Time Until Event Launch
          </p>
        </div>

        {/* Action Button */}
        <a
          href="#register"
          className="inline-block px-8 md:px-12 py-4 md:py-5 bg-red-600 text-white text-lg font-black uppercase tracking-wider rounded-lg relative overflow-hidden group mb-4"
          style={{
            boxShadow: '0 0 40px rgba(220,38,38,0.8)',
            animation: 'arcReactorPulse 1.5s infinite'
          }}
        >
          <span className="relative z-10">Assemble Your Team</span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-500"></div>
        </a>

        {/* Registration Info */}
        <p className="text-red-400 font-bold text-sm md:text-base text-center">
          Registration Closes: October 8, 2025
        </p>
      </div>

      {/* Embedded CSS for animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 30px rgba(220,38,38,0.6), inset 0 0 20px rgba(220,38,38,0.2); }
          50% { box-shadow: 0 0 50px rgba(220,38,38,0.9), inset 0 0 30px rgba(220,38,38,0.4); }
        }
        @keyframes arcReactorPulse {
          0%, 100% { box-shadow: 0 0 40px rgba(220,38,38,0.8); }
          50% { box-shadow: 0 0 60px rgba(220,38,38,1), 0 0 80px rgba(220,38,38,0.6); }
        }
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image:
            radial-gradient(2px 2px at 20px 30px, white, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 60px 70px, white, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 50px 50px, white, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 130px 80px, white, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 10px, white, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 5s infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

// You need to export the component to use it in your app
export default HeroSection;

