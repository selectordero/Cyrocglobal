import React, { useState } from 'react';
import { Shield, ArrowRight, Eye, EyeOff } from 'lucide-react';
import CyRocLogo from './components/CyRocLogo';

function SignIn() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessEmail: '',
    phoneNumber: '',
    jobTitle: '',
    company: '',
    country: '',
    projectDetails: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const countries = [
    'Select...',
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'Japan',
    'Singapore',
    'Netherlands',
    'Sweden',
    'Switzerland',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-jet-black text-soft-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-jet-black/90 backdrop-blur-md border-b border-tactical-yellow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <CyRocLogo />
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-soft-white-dim hover:text-tactical-yellow transition-colors font-medium">Home</a>
              <a href="/about" className="text-soft-white-dim hover:text-tactical-yellow transition-colors font-medium">About</a>
              <a href="/solutions" className="text-soft-white-dim hover:text-tactical-yellow transition-colors font-medium">Solutions</a>
              <a href="/industries" className="text-soft-white-dim hover:text-tactical-yellow transition-colors font-medium">Industries</a>
              <a href="#signin" className="text-tactical-yellow font-medium">Sign In</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="btn-primary-outline">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-military-green/20 border border-military-green/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-tactical-yellow rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-tactical-yellow">SECURE ACCESS</span>
            </div>

            <h1 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-6">
              <span className="text-soft-white">Connect with</span>
              <span className="block text-gradient glow-effect">CyRoc Security</span>
            </h1>
            
            <p className="text-xl text-soft-white-dim max-w-xl mx-auto leading-relaxed">
              Tell us about your project and we'll connect you to the right team faster.
            </p>
          </div>

          {/* Form */}
          <div className="bg-gradient-to-b from-jet-black-light/80 to-jet-black-light/40 border border-tactical-yellow/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-tactical-yellow mb-3 uppercase tracking-wider">
                  First Name: *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-soft-white-dim text-soft-white placeholder-soft-white-dim focus:outline-none focus:border-tactical-yellow transition-colors text-lg"
                  placeholder=""
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-tactical-yellow mb-3 uppercase tracking-wider">
                  Last Name: *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-soft-white-dim text-soft-white placeholder-soft-white-dim focus:outline-none focus:border-tactical-yellow transition-colors text-lg"
                  placeholder=""
                />
              </div>

              {/* Business Email */}
              <div>
                <label htmlFor="businessEmail" className="block text-sm font-medium text-tactical-yellow mb-3 uppercase tracking-wider">
                  Business Email Address: *
                </label>
                <input
                  type="email"
                  id="businessEmail"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-soft-white-dim text-soft-white placeholder-soft-white-dim focus:outline-none focus:border-tactical-yellow transition-colors text-lg"
                  placeholder=""
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-tactical-yellow mb-3 uppercase tracking-wider">
                  Phone Number: *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-soft-white-dim text-soft-white placeholder-soft-white-dim focus:outline-none focus:border-tactical-yellow transition-colors text-lg"
                  placeholder=""
                />
              </div>

              {/* Job Title */}
              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-tactical-yellow mb-3 uppercase tracking-wider">
                  Job Title: *
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-soft-white-dim text-soft-white placeholder-soft-white-dim focus:outline-none focus:border-tactical-yellow transition-colors text-lg"
                  placeholder=""
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-tactical-yellow mb-3 uppercase tracking-wider">
                  Company / Institution: *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-soft-white-dim text-soft-white placeholder-soft-white-dim focus:outline-none focus:border-tactical-yellow transition-colors text-lg"
                  placeholder=""
                />
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-tactical-yellow mb-3 uppercase tracking-wider">
                  Country: *
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-soft-white-dim text-soft-white focus:outline-none focus:border-tactical-yellow transition-colors text-lg appearance-none cursor-pointer"
                >
                  {countries.map((country, index) => (
                    <option key={index} value={country} className="bg-jet-black text-soft-white">
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Details */}
              <div>
                <label htmlFor="projectDetails" className="block text-sm font-medium text-tactical-yellow mb-3 uppercase tracking-wider">
                  Tell us about your project: A bit of context will allow us to connect you to the right team faster.
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-4 bg-jet-black-light/50 border border-soft-white-dim rounded-lg text-soft-white placeholder-soft-white-dim focus:outline-none focus:border-tactical-yellow transition-colors text-lg resize-none"
                  placeholder="Describe your cybersecurity needs, project scope, timeline, and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-tactical-yellow to-tactical-yellow-light text-jet-black font-space-grotesk font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-tactical-yellow/30 flex items-center justify-center group"
                >
                  <span>Submit</span>
                  <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-soft-white-dim">
              By submitting this form, you agree to our{' '}
              <a href="#" className="text-tactical-yellow hover:text-tactical-yellow-light transition-colors">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="#" className="text-tactical-yellow hover:text-tactical-yellow-light transition-colors">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;