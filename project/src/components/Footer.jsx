import { useState, useEffect } from 'react';
import { Shield, Mail, MapPin, Phone, Twitter, Linkedin, Github, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('2025-10-11T00:00:00');
      const difference = eventDate - new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const domains = ['Cybersecurity', 'AI/ML', 'Blockchain', 'Cloud', 'Secure Apps'];

  return (
    <footer className="relative bg-black border-t-2 border-red-900/50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="starfield"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black"></div>
      </div>

      <div className="absolute bottom-0 right-0 opacity-5">
        <Shield className="w-96 h-96 text-red-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <h3
              className="text-3xl font-black mb-4"
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                textShadow: '0 0 15px rgba(220,38,38,0.8)',
                background: 'linear-gradient(to right, #dc2626, #fff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              INNOVERGENCE XXV
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              A 24-hour innovation battleground where heroes unite to build the future. Join us for an epic journey of coding, collaboration, and creation.
            </p>
            <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-3">
              <p className="text-xs text-gray-500 uppercase font-bold mb-1">Event Countdown</p>
              <p className="text-red-400 font-black text-sm">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
              </p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xl font-black text-white uppercase mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-500" />
              Mission Navigation
            </h4>
            <ul className="space-y-2">
              {['About', 'Timeline', 'Prizes', 'Sponsors', 'FAQ', 'Register'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">▸</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {domains.map((domain) => (
                <span
                  key={domain}
                  className="px-2 py-1 bg-red-950/30 border border-red-900/50 rounded text-xs text-red-400 font-semibold hover:border-red-500 hover:bg-red-950/50 transition-all cursor-pointer"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-xl font-black text-white uppercase mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-red-500" />
              Mission Control
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3 hover:text-red-400 transition-colors cursor-pointer">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">innovergence@mlsc.kare.edu</span>
              </li>
              <li className="flex items-start gap-3 hover:text-red-400 transition-colors cursor-pointer">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 hover:text-red-400 transition-colors cursor-pointer">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">KARE Campus, Tamil Nadu, India</span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-gray-500 uppercase font-bold mb-3">Follow The Mission</p>
              <div className="flex gap-3">
                {[
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Github, label: 'GitHub' },
                  { icon: Instagram, label: 'Instagram' }
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-10 h-10 bg-red-950/30 border border-red-900/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500 hover:bg-red-950/50 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4: Partners */}
          <div>
            <h4 className="text-xl font-black text-white uppercase mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-500" />
              Allied Forces
            </h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div>
                <p className="text-red-400 font-bold mb-1">Title Partners</p>
                <p>Space Zee Tech Chennai</p>
                <p>K7 Computing</p>
              </div>
              <div>
                <p className="text-red-400 font-bold mb-1">Host & Tech</p>
                <p>KARE</p>
                <p>Microsoft Learn</p>
              </div>
              <div>
                <p className="text-red-400 font-bold mb-1">Community</p>
                <p>MLSC KARE</p>
                <p>Tech Community</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-900/30 pt-8">
          <div className="bg-gradient-to-r from-red-950/20 via-red-900/10 to-red-950/20 border border-red-900/30 rounded-lg p-6 mb-8">
            <h4 className="text-lg font-black text-white uppercase mb-4 text-center">
              Production Credits
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-center text-sm text-gray-400">
              <div>
                <p className="text-red-400 font-bold mb-1">Organized By</p>
                <p>Microsoft Learn Student Chapter</p>
                <p>KARE</p>
              </div>
              <div>
                <p className="text-red-400 font-bold mb-1">Powered By</p>
                <p>Space Zee Tech & K7 Computing</p>
                <p>Microsoft Learn</p>
              </div>
              <div>
                <p className="text-red-400 font-bold mb-1">Supported By</p>
                <p>Tech Community</p>
                <p>Industry Partners</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              &copy; 2025 INNOVERGENCE XXV. All rights reserved.
              <span className="text-red-500 ml-2">MLSC KARE</span>
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-red-500 transition-colors flex items-center gap-1">
                Privacy Policy <ExternalLink className="w-3 h-3" />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors flex items-center gap-1">
                Terms of Service <ExternalLink className="w-3 h-3" />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors flex items-center gap-1">
                Code of Conduct <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm italic">
              "With great power comes great responsibility... to code." 🕷️
            </p>
          </div>

          <div className="mt-6 text-center">
            <a
              href="#register"
              className="inline-block px-8 py-3 bg-red-600 text-white font-bold uppercase tracking-wider rounded-lg hover:bg-red-700 transition-all duration-300"
              style={{ boxShadow: '0 0 30px rgba(220,38,38,0.6)' }}
            >
              Register Now - Deadline Oct 8
            </a>
          </div>
        </div>
      </div>

      {/* FIX: Removed the 'jsx' attribute from the style tag */}
      <style>{`
        .starfield {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(1px 1px at 20px 30px, white, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 60px 70px, white, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 50px 50px, white, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 130px 80px, white, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          opacity: 0.3;
        }
      `}</style>
    </footer>
  );
};

export default Footer;