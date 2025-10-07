import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Award, Star, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PrizesSection = () => {
  const sectionRef = useRef(null);

  const prizes = [
    {
      place: '1st Place',
      artifact: 'Infinity Gauntlet',
      prize: '₹25,000',
      internship: 'Space Zee Tech Chennai',
      gradient: 'from-yellow-500 via-yellow-600 to-orange-600',
      glow: 'rgba(234, 179, 8, 0.6)',
      icon: '🥇',
      rank: 1
    },
    {
      place: '2nd Place',
      artifact: 'Mjolnir',
      prize: '₹15,000',
      internship: 'K7 Computing',
      gradient: 'from-gray-400 via-gray-500 to-gray-600',
      glow: 'rgba(156, 163, 175, 0.6)',
      icon: '🥈',
      rank: 2
    },
    {
      place: '3rd Place',
      artifact: "Captain's Shield",
      prize: '₹10,000',
      internship: 'Recognition Award',
      gradient: 'from-orange-600 via-orange-700 to-orange-800',
      glow: 'rgba(234, 88, 12, 0.6)',
      icon: '🥉',
      rank: 3
    }
  ];

  const specialAwards = [
    {
      title: 'Best Innovation',
      icon: Star,
      description: 'Most creative and unique solution',
      color: 'from-blue-600 to-blue-800'
    },
    {
      title: 'Best Teamwork',
      icon: Heart,
      description: 'Outstanding collaboration',
      color: 'from-purple-600 to-purple-800'
    },
    {
      title: 'Technical Excellence',
      icon: Award,
      description: 'Superior technical implementation',
      color: 'from-green-600 to-green-800'
    },
    {
      title: "People's Choice",
      icon: Trophy,
      description: 'Community favorite project',
      color: 'from-pink-600 to-pink-800'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.prizes-title', {
        scrollTrigger: {
          trigger: '.prizes-title',
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: 'back.out(1.7)'
      });

      gsap.from('.prize-card', {
        scrollTrigger: {
          trigger: '.prizes-container',
          start: 'top 80%',
        },
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.special-award', {
        scrollTrigger: {
          trigger: '.special-awards',
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
        duration: 0.8,
        ease: 'back.out(1.7)'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="prizes" ref={sectionRef} className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1920")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="prizes-title text-5xl md:text-7xl font-black text-center mb-4"
          style={{
            fontFamily: '"Bebas Neue", sans-serif',
            textShadow: '0 0 20px rgba(220,38,38,0.8)',
            background: 'linear-gradient(to right, #dc2626, #fff, #dc2626)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          LEGENDARY ARTIFACTS
        </h2>

        <p className="text-center text-gray-400 mb-16 text-lg">
          Claim the rewards worthy of heroes
        </p>

        <div className="prizes-container grid md:grid-cols-3 gap-8 mb-20">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="prize-card group relative"
            >
              <div
                className={`relative bg-gradient-to-br ${prize.gradient} rounded-lg p-8 transform hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden`}
                style={{
                  boxShadow: `0 0 40px ${prize.glow}, 0 20px 60px rgba(0,0,0,0.8)`,
                }}
              >
                <div className="absolute top-0 right-0 text-9xl opacity-10 font-black"
                  style={{ textShadow: '0 0 30px rgba(255,255,255,0.5)' }}
                >
                  {prize.icon}
                </div>

                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="inline-block px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full mb-4">
                      <span className="text-white font-black text-sm uppercase tracking-wider">
                        {prize.place}
                      </span>
                    </div>

                    <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-wider"
                      style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
                    >
                      {prize.artifact}
                    </h3>
                  </div>

                  <div className="space-y-4 text-center">
                    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border-2 border-white/20">
                      <p className="text-sm text-white/80 font-semibold uppercase mb-2">Cash Prize</p>
                      <p className="text-4xl font-black text-white"
                        style={{ textShadow: '0 0 20px rgba(255,255,255,0.5)' }}
                      >
                        {prize.prize}
                      </p>
                    </div>

                    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border-2 border-white/20">
                      <p className="text-sm text-white/80 font-semibold uppercase mb-2">Internship</p>
                      <p className="text-lg font-black text-white leading-tight">
                        {prize.internship}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)'
                  }}
                ></div>
              </div>

              {prize.rank === 1 && (
                <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full font-black text-sm uppercase transform rotate-12"
                  style={{ boxShadow: '0 0 20px rgba(220,38,38,0.8)' }}
                >
                  Winner!
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="special-awards">
          <h3 className="text-3xl md:text-4xl font-black text-center mb-12 text-white uppercase"
            style={{ textShadow: '0 0 15px rgba(220,38,38,0.6)' }}
          >
            Special Recognition Awards
          </h3>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {specialAwards.map((award, index) => {
              const Icon = award.icon;
              return (
                <div
                  key={index}
                  className="special-award group relative bg-gradient-to-br from-black/80 to-red-950/30 backdrop-blur-sm border-2 border-red-900/50 rounded-lg p-6 hover:border-red-500 transition-all duration-300"
                  style={{ boxShadow: '0 0 20px rgba(220,38,38,0.2)' }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg`}></div>

                  <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className={`p-4 bg-gradient-to-br ${award.color} rounded-full`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <h4 className="text-lg font-black text-center mb-2 text-white uppercase">
                      {award.title}
                    </h4>

                    <p className="text-sm text-gray-400 text-center">
                      {award.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-red-950/50 to-black/50 backdrop-blur-sm border-2 border-red-500 rounded-lg p-8"
            style={{ boxShadow: '0 0 40px rgba(220,38,38,0.3)' }}
          >
            <Trophy className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <p className="text-2xl font-black text-white mb-3 uppercase">Ready to Claim Glory?</p>
            <p className="text-gray-400 mb-6 max-w-2xl">
              Join INNOVERGENCE XXV and compete for amazing prizes, internship opportunities with top companies, and recognition in the tech community.
            </p>
            <a
              href="#register"
              className="inline-block px-8 py-4 bg-red-600 text-white text-lg font-black uppercase tracking-wider rounded-lg hover:bg-red-700 transition-all duration-300"
              style={{ boxShadow: '0 0 30px rgba(220,38,38,0.6)' }}
            >
              Register Your Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
