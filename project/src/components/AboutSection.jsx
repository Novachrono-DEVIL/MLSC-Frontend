import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Users, Trophy, Calendar, Zap } from 'lucide-react';

// Import hover images
import hulk from '../assets/download.jpeg';

// import spiderman from '../assets/spiderman.png';
import doctor from '../assets/doctor.jpg'
import volverin from '../assets/volverine.jpeg';
import spider from '../assets/spider.jpeg'
import arc from '../assets/arcreator.jpeg'
import loki from '../assets/loki.jpg'
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const domains = [
    { icon: Shield, title: 'WEB DEVELOPEMENT', color: 'from-red-600 to-red-800', description: 'Defend the digital realm. Build security solutions and penetration testing tools.',hoverImage:loki },
    { icon: Zap, title: 'APP DEVELOPMENT', color: 'from-blue-600 to-blue-800', description: 'Harness the power of intelligence. Create smart systems and predictive models.',hoverImage:spider },
    { icon: Shield, title: 'BLOCKCHAIN', color: 'from-purple-600 to-purple-800', description: 'Forge the future of trust. Develop decentralized applications and smart contracts.', hoverImage: hulk },
    { icon: Zap, title: 'GEN AI', color: 'from-cyan-600 to-cyan-800', description: 'Command infinite resources. Build scalable cloud-native applications.',hoverImage:arc },
    { icon: Shield, title: 'AI/ML', color: 'from-green-600 to-green-800', description: 'Create invulnerable software. Develop applications with a security-first approach.',hoverImage:doctor },
    { icon: Shield, title: 'AGENTIC AI', color: 'from-green-600 to-green-800', description: 'Create invulnerable software. Develop applications with a security-first approach.',hoverImage:volverin }
    
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-title', {
        scrollTrigger: { trigger: '.about-title', start: 'top 80%' },
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.about-content', {
        scrollTrigger: { trigger: '.about-content', start: 'top 80%' },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
      });

      gsap.from('.battlefield-title', {
        scrollTrigger: { trigger: '.battlefield-title', start: 'top 85%' },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.utils.toArray('.domain-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 50,
          duration: 0.6,
          ease: 'power2.out',
          delay: i * 0.1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-20 bg-black overflow-hidden">
  <div className="absolute inset-0 opacity-10">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(220,38,38,0.1) 2px, rgba(220,38,38,0.1) 4px)',
      }}
    ></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="about-title text-5xl md:text-7xl font-black text-center mb-16"
        style={{
          fontFamily: '"Bebas Neue", sans-serif',
          textShadow: '0 0 20px rgba(220,38,38,0.8)',
          background: 'linear-gradient(to right, #dc2626, #fff, #dc2626)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
      MISSION BRIEFING
    </h2>

    {/* Info boxes omitted for brevity */}

    <div className="mb-12 md:mb-16">
      <h3 className="battlefield-title text-4xl md:text-5xl font-black text-center text-white uppercase"
          style={{ textShadow: '0 0 15px rgba(220,38,38,0.8), 0 0 25px rgba(220,38,38,0.6)' }}>
        Choose Your Battlefield
      </h3>
    </div>

    <div ref={scrollContainerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
      {domains.map((domain, index) => {
        const Icon = domain.icon;
        return (
          <div
            key={index}
            className="domain-card group relative bg-black/50 border-2 border-red-900/50 rounded-lg overflow-hidden transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 w-full max-w-xs min-h-[300px]"
            style={{ boxShadow: '0 0 30px rgba(220,38,38,0.2), inset 0 0 10px rgba(0,0,0,0.5)' }}
          >
            {/* Hover image positioned lower */}
           
{domain.hoverImage && (
  <img
    src={domain.hoverImage}
    alt={domain.title}
    className={`absolute w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 object-contain ${
      domain.title === 'AI/ML'
        ? 'object-[50%_50%] scale-[1.45]'   // Doctor: slightly bigger & centered
        : domain.title === 'GEN AI'
        ? 'object-[50%_50%] scale-[1.85]'   // Arc: slightly bigger & centered
        : domain.title === 'AGENTIC AI'
        ? 'object-[50%_50%] scale-125'     // Volverine: unchanged
        : domain.title === 'WEB DEVELOPEMENT'
        ? 'object-[50%_5%] scale-120'
        : domain.title === 'APP DEVELOPMENT'
        ? 'object-[50%_-5%] scale-[1.6]'
        : 'object-bottom'
    }`}
  />
)}













{/* Content over the hover image */}
<div className="relative z-10 p-6 flex flex-col items-center justify-center h-full
    group-hover:translate-y-12 transition-transform duration-300"> 
  {/* Title with black glassy background */}
  <div className="mb-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-lg">
    <h4 className="text-lg font-black text-center text-white uppercase tracking-wider">{domain.title}</h4>
  </div>

  {/* Description with hover background */}
  <div className="p-2 rounded transition-colors duration-300 group-hover:bg-black/80">
    <p className="text-sm text-gray-400 text-center leading-relaxed">{domain.description}</p>
  </div>
</div>
            {/* Content over the hover image */}
<div className="relative z-10 p-6 flex flex-col items-center justify-center h-full
    group-hover:translate-y-12 transition-transform duration-300"> {/* Text moves further down */}
  <div className="flex justify-center mb-4">
    
  </div>
  <h4 className="text-lg font-black text-center mb-3 text-white uppercase tracking-wider">{domain.title}</h4>

  {/* Description with hover background */}
  <div className="p-2 rounded transition-colors duration-300 group-hover:bg-black/80">
    <p className="text-sm text-gray-400 text-center leading-relaxed">{domain.description}</p>
  </div>
</div>



            {/* Dimmer border overlay on hover */}
            <div className="absolute inset-0 border-2 border-red-900/100 group-hover:border-red-800/50 rounded-lg pointer-events-none transition-colors duration-300"></div>
          </div>
        );
      })}
    </div>
  </div>
</section>

  );
};

export default AboutSection;