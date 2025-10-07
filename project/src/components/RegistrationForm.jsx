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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-5xl md:text-7xl font-black text-center mb-4"
          style={{
            fontFamily: '"Bebas Neue", sans-serif',
            textShadow: '0 0 20px rgba(220,38,38,0.8)',
            background: 'linear-gradient(to right, #dc2626, #fff, #dc2626)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          TEAM REGISTRATION
        </h2>

        <p className="text-center text-gray-400 mb-4 text-lg">
          Assemble your squad of heroes
        </p>

        <div className="text-center mb-12">
          <div className="inline-block bg-red-950/30 border border-red-500/50 rounded-full px-6 py-2">
            <p className="text-red-400 font-bold text-sm">
              Deadline: October 8, 2025 | 11:59 PM IST
            </p>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex justify-between items-center relative">
            <div className="absolute top-5 left-0 right-0 h-1 bg-red-950/50"></div>
            <div
              className="absolute top-5 left-0 h-1 bg-red-600 transition-all duration-500"
              style={{ width: `${((currentStep - 1) / 3) * 100}%`, boxShadow: '0 0 10px rgba(220,38,38,0.8)' }}
            ></div>

            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;

              return (
                <div key={step.number} className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-red-600 border-red-500 scale-110'
                        : isCompleted
                        ? 'bg-red-800 border-red-700'
                        : 'bg-black border-red-950'
                    }`}
                    style={{
                      boxShadow: isActive ? '0 0 20px rgba(220,38,38,0.8)' : 'none'
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs mt-2 text-gray-400 font-semibold text-center max-w-[80px]">
                    {step.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div
            className="bg-gradient-to-br from-black/80 to-red-950/30 backdrop-blur-sm border-2 border-red-900/50 rounded-lg p-8 mb-8"
            style={{ boxShadow: '0 0 30px rgba(220,38,38,0.2)' }}
          >
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-red-500" />
                  Team Leader Information
                </h3>

                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">Team Name *</label>
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border-2 border-red-900/50 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Enter your team name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">Full Name *</label>
                    <input
                      type="text"
                      name="leaderName"
                      value={formData.leaderName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border-2 border-red-900/50 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="Captain name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">Email *</label>
                    <input
                      type="email"
                      name="leaderEmail"
                      value={formData.leaderEmail}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border-2 border-red-900/50 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">Phone *</label>
                    <input
                      type="tel"
                      name="leaderPhone"
                      value={formData.leaderPhone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border-2 border-red-900/50 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">College *</label>
                    <input
                      type="text"
                      name="leaderCollege"
                      value={formData.leaderCollege}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border-2 border-red-900/50 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="Your institution"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">Department *</label>
                    <input
                      type="text"
                      name="leaderDepartment"
                      value={formData.leaderDepartment}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border-2 border-red-900/50 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="CSE, IT, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">Year *</label>
                    <select
                      name="leaderYear"
                      value={formData.leaderYear}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border-2 border-red-900/50 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select year</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">Experience Level *</label>
                  <select
                    name="leaderExperience"
                    value={formData.leaderExperience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border-2 border-red-900/50 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select experience</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-8">
                <h3 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-red-500" />
                  Team Members (4 Heroes)
                </h3>

                {formData.members.map((member, index) => (
                  <div key={index} className="bg-black/30 border border-red-900/30 rounded-lg p-6">
                    <h4 className="text-lg font-black text-red-400 uppercase mb-4">Member {index + 1}</h4>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">Full Name *</label>
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-black/50 border-2 border-red-900/50 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                          placeholder="Hero name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">Email *</label>
                        <input
                          type="email"
                          value={member.email}
                          onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-black/50 border-2 border-red-900/50 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                          placeholder="email@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">Phone *</label>
                        <input
                          type="tel"
                          value={member.phone}
                          onChange={(e) => handleMemberChange(index, 'phone', e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-black/50 border-2 border-red-900/50 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">College *</label>
                        <input
                          type="text"
                          value={member.college}
                          onChange={(e) => handleMemberChange(index, 'college', e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-black/50 border-2 border-red-900/50 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                          placeholder="Institution"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">Department *</label>
                        <input
                          type="text"
                          value={member.department}
                          onChange={(e) => handleMemberChange(index, 'department', e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-black/50 border-2 border-red-900/50 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                          placeholder="CSE, IT, etc."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">Year *</label>
                        <select
                          value={member.year}
                          onChange={(e) => handleMemberChange(index, 'year', e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-black/50 border-2 border-red-900/50 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                        >
                          <option value="">Select year</option>
                          <option value="1">1st Year</option>
                          <option value="2">2nd Year</option>
                          <option value="3">3rd Year</option>
                          <option value="4">4th Year</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-red-500" />
                  Choose Your Battlefield
                </h3>

                <p className="text-gray-400 mb-6">
                  Select the domain that matches your team's expertise and passion. You'll work on domain-specific challenges.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {domains.map((domain) => (
                    <button
                      key={domain.id}
                      type="button"
                      onClick={() => handleDomainSelect(domain.id)}
                      className={`group relative bg-black/50 border-2 rounded-lg p-6 text-left transition-all duration-300 hover:scale-105 ${
                        formData.domain === domain.id
                          ? 'border-red-500 bg-red-950/30'
                          : 'border-red-900/50 hover:border-red-500/70'
                      }`}
                      style={{
                        boxShadow: formData.domain === domain.id
                          ? '0 0 30px rgba(220,38,38,0.5)'
                          : '0 0 10px rgba(220,38,38,0.1)'
                      }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-20 transition-opacity rounded-lg`}></div>

                      <div className="relative z-10">
                        <h4 className="text-xl font-black text-white uppercase mb-2">
                          {domain.name}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {domain.description}
                        </p>

                        {formData.domain === domain.id && (
                          <div className="mt-4 flex items-center gap-2 text-red-400">
                            <CheckCircle className="w-5 h-5" />
                            <span className="text-sm font-bold">Selected</span>
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-red-500" />
                  Final Confirmation
                </h3>

                <div className="bg-black/30 border border-red-900/30 rounded-lg p-6 space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold">Team Name</p>
                    <p className="text-white font-semibold">{formData.teamName}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold">Team Leader</p>
                    <p className="text-white font-semibold">{formData.leaderName}</p>
                    <p className="text-gray-400 text-sm">{formData.leaderEmail}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold">Domain</p>
                    <p className="text-white font-semibold uppercase">
                      {domains.find(d => d.id === formData.domain)?.name || 'Not selected'}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold">Team Size</p>
                    <p className="text-white font-semibold">5 Members</p>
                  </div>
                </div>

                <div className="bg-red-950/20 border border-red-900/50 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-300 leading-relaxed">
                      I confirm that all information provided is accurate and I agree to the{' '}
                      <a href="#" className="text-red-400 hover:text-red-300 underline">
                        terms and conditions
                      </a>
                      {' '}of INNOVERGENCE XXV. I understand that my team must complete the 24-hour hackathon and submit our project by the deadline.
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 bg-black/50 border-2 border-red-900/50 text-white font-bold uppercase tracking-wider rounded-lg hover:border-red-500 transition-all flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Previous
              </button>
            )}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="ml-auto px-6 py-3 bg-red-600 text-white font-bold uppercase tracking-wider rounded-lg hover:bg-red-700 transition-all flex items-center gap-2"
                style={{ boxShadow: '0 0 20px rgba(220,38,38,0.6)' }}
              >
                Next
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!formData.termsAccepted}
                className="ml-auto px-8 py-3 bg-red-600 text-white font-bold uppercase tracking-wider rounded-lg hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                style={{ boxShadow: '0 0 20px rgba(220,38,38,0.6)' }}
              >
                <CheckCircle className="w-5 h-5" />
                Submit Registration
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
