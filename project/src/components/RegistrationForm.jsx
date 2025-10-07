import { useState } from 'react';
import { Users, Target, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    leaderCollege: '',
    leaderDepartment: '',
    leaderYear: '',
    leaderExperience: '',
    members: [
      { name: '', email: '', phone: '', college: '', department: '', year: '', experience: '' },
      { name: '', email: '', phone: '', college: '', department: '', year: '', experience: '' },
      { name: '', email: '', phone: '', college: '', department: '', year: '', experience: '' },
      { name: '', email: '', phone: '', college: '', department: '', year: '', experience: '' }
    ],
    domain: '',
    termsAccepted: false
  });

  const domains = [
    {
      id: 'cybersecurity',
      name: 'CYBERSECURITY',
      description: 'Build security solutions and penetration testing tools',
      color: 'from-red-600 to-red-800'
    },
    {
      id: 'aiml',
      name: 'AI/ML',
      description: 'Create smart systems and predictive models',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 'blockchain',
      name: 'BLOCKCHAIN',
      description: 'Develop decentralized applications',
      color: 'from-purple-600 to-purple-800'
    },
    {
      id: 'cloud',
      name: 'CLOUD COMPUTING',
      description: 'Build scalable cloud-native applications',
      color: 'from-cyan-600 to-cyan-800'
    },
    {
      id: 'secureapps',
      name: 'SECURE APPS',
      description: 'Create applications with security-first approach',
      color: 'from-green-600 to-green-800'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleMemberChange = (index, field, value) => {
    const newMembers = [...formData.members];
    newMembers[index][field] = value;
    setFormData(prev => ({ ...prev, members: newMembers }));
  };

  const handleDomainSelect = (domainId) => {
    setFormData(prev => ({ ...prev, domain: domainId }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully! Check your email for confirmation.');
  };

  const steps = [
    { number: 1, title: 'Team Assembly', icon: Users },
    { number: 2, title: 'Team Members', icon: Users },
    { number: 3, title: 'Domain Selection', icon: Target },
    { number: 4, title: 'Confirmation', icon: CheckCircle }
  ];

  return (
    <section id="register" className="relative py-20 bg-gradient-to-b from-black via-red-950/10 to-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(220,38,38,0.5) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>
    </section>
  );
};

export default RegistrationForm;
