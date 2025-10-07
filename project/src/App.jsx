import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TimelineSection from './components/TimelineSection';
import PrizesSection from './components/PrizesSection';
import SponsorsSection from './components/SponsorsSection';
import RegistrationForm from './components/RegistrationForm';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <PrizesSection />
      <SponsorsSection />
      <RegistrationForm />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
