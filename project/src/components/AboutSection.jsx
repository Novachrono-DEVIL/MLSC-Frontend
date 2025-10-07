import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Users, Trophy, Calendar, Zap } from 'lucide-react';

// Make sure to register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const domains = [
    { icon: Shield, title: 'CYBERSECURITY', color: 'from-red-600 to-red-800', description: 'Defend the digital realm. Build security solutions and penetration testing tools.' },
    { icon: Zap, title: 'AI/ML', color: 'from-blue-600 to-blue-800', description: 'Harness the power of intelligence. Create smart systems and predictive models.' },
    { icon: Shield, title: 'BLOCKCHAIN', color: 'from-purple-600 to-purple-800', description: 'Forge the future of trust. Develop decentralized applications and smart contracts.' },
    { icon: Zap, title: 'CLOUD COMPUTING', color: 'from-cyan-600 to-cyan-800', description: 'Command infinite resources. Build scalable cloud-native applications.' },
    { icon: Shield, title: 'SECURE APPS', color: 'from-green-600 to-green-800', description: 'Create invulnerable software. Develop applications with security-first approach.' }
  ];

  useEffect(() => {
    // gsap.context() is the modern way to use GSAP in React, it handles cleanup automatically.
    const ctx = gsap.context(() => {
      
      // --- ANIMATION FOR "MISSION BRIEFING" TITLE ---
      // Targets only the '.about-title' class.
      gsap.from('.about-title', {
        scrollTrigger: { 
          trigger: '.about-title', 
          start: 'top 80%' 
        },
        opacity: 0, 
        y: 100, 
        duration: 1, 
        ease: 'power3.out'
      });

      // --- ANIMATION FOR THE FOUR INFO BOXES ---
      // Targets only the '.about-content' class.
      gsap.from('.about-content', {
        scrollTrigger: { 
          trigger: '.about-content', 
          start: 'top 80%' 
        },
        opacity: 0, 
        y: 50, 
        stagger: 0.2, 
        duration: 0.8, 
        ease: 'power2.out'
      });
      
      // --- ANIMATION FOR THE "CHOOSE YOUR BATTLEFIELD" SUBTITLE ---
      // Targets only the '.battlefield-title' class.
      gsap.from('.battlefield-title', {
        scrollTrigger: { 
          trigger: '.battlefield-title', 
          start: 'top 85%' 
        },
        opacity: 0, 
        y: 40, 
        duration: 0.8, 
        ease: 'power3.out',
      });

      // --- ANIMATION FOR THE DOMAIN CARDS ---
      // This is the key fix: It targets ONLY '.domain-card' elements
      // and uses their container (scrollContainerRef) as the trigger.
      gsap.from('.domain-card', {
        scrollTrigger: { 
          trigger: scrollContainerRef.current, 
          start: 'top 80%' 
        },
        opacity: 0, 
        y: 50, 
        stagger: 0.15, 
        duration: 0.6, 
        ease: 'power2.out'
      });

    }, sectionRef); // Scoping all animations to the main section element

    return () => ctx.revert(); // Cleanup function to remove animations when component unmounts
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(220,38,38,0.1) 2px, rgba(220,38,38,0.1) 4px)' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="about-title text-5xl md:text-7xl font-black text-center mb-16" 
          style={{ 
            fontFamily: '"Bebas Neue", sans-serif', 
            textShadow: '0 0 20px rgba(220,38,38,0.8)', 
            background: 'linear-gradient(to right, #dc2626, #fff, #dc2626)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}
        >
          MISSION BRIEFING
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="about-content bg-gradient-to-br from-red-950/30 to-black/50 backdrop-blur-sm border-2 border-red-900/50 rounded-lg p-8" style={{ boxShadow: '0 0 30px rgba(220,38,38,0.2)' }}>
            <div className="flex items-center mb-4"><Calendar className="w-8 h-8 text-red-500 mr-4" /><h3 className="text-2xl font-black text-white uppercase">Event Intel</h3></div>
            <div className="space-y-3 text-gray-300">
                <p><span className="text-red-400 font-bold">Date:</span> October 11-12, 2025</p>
                <p><span className="text-red-400 font-bold">Duration:</span> 24 Hours Non-Stop</p>
                <p><span className="text-red-400 font-bold">Venue:</span> KARE Campus</p>
                <p><span className="text-red-400 font-bold">Format:</span> In-Person Battleground</p>
            </div>
          </div>
          <div className="about-content bg-gradient-to-br from-red-950/30 to-black/50 backdrop-blur-sm border-2 border-red-900/50 rounded-lg p-8" style={{ boxShadow: '0 0 30px rgba(220,38,38,0.2)' }}>
            <div className="flex items-center mb-4"><Users className="w-8 h-8 text-red-500 mr-4" /><h3 className="text-2xl font-black text-white uppercase">Team Formation</h3></div>
            <div className="space-y-3 text-gray-300">
                <p><span className="text-red-400 font-bold">Team Size:</span> 5 Heroes per Squad</p>
                <p><span className="text-red-400 font-bold">Credits:</span> 2 per participant</p>
                <p><span className="text-red-400 font-bold">Eligibility:</span> All students welcome</p>
                <p><span className="text-red-400 font-bold">Deadline:</span> October 8, 2025</p>
            </div>
          </div>
          <div className="about-content bg-gradient-to-br from-red-950/30 to-black/50 backdrop-blur-sm border-2 border-red-900/50 rounded-lg p-8" style={{ boxShadow: '0 0 30px rgba(220,38,38,0.2)' }}>
            <div className="flex items-center mb-4"><Trophy className="w-8 h-8 text-red-500 mr-4" /><h3 className="text-2xl font-black text-white uppercase">Mission Objectives</h3></div>
            <ul className="space-y-2 text-gray-300">
                <li className="flex items-start"><span className="text-red-500 mr-2">▸</span><span>Build innovative solutions in 24 hours</span></li>
                <li className="flex items-start"><span className="text-red-500 mr-2">▸</span><span>Collaborate with fellow innovators</span></li>
                <li className="flex items-start"><span className="text-red-500 mr-2">▸</span><span>Learn from industry mentors</span></li>
                <li className="flex items-start"><span className="text-red-500 mr-2">▸</span><span>Win prizes and internships</span></li>
            </ul>
          </div>
          <div className="about-content bg-gradient-to-br from-red-950/30 to-black/50 backdrop-blur-sm border-2 border-red-900/50 rounded-lg p-8" style={{ boxShadow: '0 0 30px rgba(220,38,38,0.2)' }}>
            <div className="flex items-center mb-4"><Zap className="w-8 h-8 text-red-500 mr-4" /><h3 className="text-2xl font-black text-white uppercase">Special Features</h3></div>
            <ul className="space-y-2 text-gray-300">
                <li className="flex items-start"><span className="text-red-500 mr-2">▸</span><span>24/7 mentorship support</span></li>
                <li className="flex items-start"><span className="text-red-500 mr-2">▸</span><span>Tech workshops and sessions</span></li>
                <li className="flex items-start"><span className="text-red-500 mr-2">▸</span><span>Networking with industry leaders</span></li>
                <li className="flex items-start"><span className="text-red-500 mr-2">▸</span><span>Swag and refreshments</span></li>
            </ul>
          </div>
        </div>

        <div className="mb-12 md:mb-16">
          <h3 
            className="battlefield-title text-4xl md:text-5xl font-black text-center text-white uppercase" 
            style={{ textShadow: '0 0 15px rgba(220,38,38,0.8), 0 0 25px rgba(220,38,38,0.6)' }}
          >
            Choose Your Battlefield
          </h3>
        </div>
        
        <div ref={scrollContainerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <div 
                key={index} 
                className="domain-card group relative bg-black/50 backdrop-blur-sm border-2 border-red-900/50 rounded-lg p-6 text-center overflow-hidden transform hover:scale-105 hover:-translate-y-2 transition-all duration-300" 
                style={{ boxShadow: '0 0 30px rgba(220,38,38,0.2), inset 0 0 10px rgba(0,0,0,0.5)' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-br from-red-600/20 to-red-900/20 rounded-full border-2 border-red-500/50 group-hover:border-red-400 group-hover:bg-red-900/30 transition-all duration-300">
                      <Icon className="w-8 h-8 text-red-500 group-hover:text-red-400 transition-colors" />
                    </div>
                  </div>
                  <h4 className="text-lg font-black text-center mb-3 text-white uppercase tracking-wider">{domain.title}</h4>
                  <p className="text-sm text-gray-400 text-center leading-relaxed">{domain.description}</p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-colors"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;