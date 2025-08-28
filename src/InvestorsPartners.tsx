import React, { useState } from 'react';
import { Shield, Users, Award, Globe, Target, Lock, Eye, Brain, Building2, TrendingUp, Activity, Clock, MapPin, Star, ArrowRight, CheckCircle, Download, ExternalLink, Linkedin, FileText, Mail, Phone, Calendar, DollarSign, Handshake, Network, Briefcase } from 'lucide-react';
import CyRocLogo from './components/CyRocLogo';

function InvestorsPartners() {
  const [activeTab, setActiveTab] = useState('investors');

  // Partner logos data
  const partners = [
    {
      name: "Microsoft Azure",
      category: "Cloud Infrastructure",
      logo: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Strategic cloud security partnership for enterprise solutions"
    },
    {
      name: "AWS Security",
      category: "Cloud Security",
      logo: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Advanced threat detection and compliance automation"
    },
    {
      name: "Palantir Technologies",
      category: "Data Analytics",
      logo: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "AI-powered threat intelligence and data fusion"
    },
    {
      name: "Splunk Enterprise",
      category: "SIEM Platform",
      logo: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Security information and event management integration"
    },
    {
      name: "CrowdStrike",
      category: "Endpoint Security",
      logo: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Next-generation endpoint protection and response"
    },
    {
      name: "Palo Alto Networks",
      category: "Network Security",
      logo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Advanced firewall and network security solutions"
    },
    {
      name: "IBM Security",
      category: "Enterprise Security",
      logo: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "AI-powered security operations and threat hunting"
    },
    {
      name: "Deloitte Cyber",
      category: "Consulting",
      logo: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Strategic cybersecurity consulting and implementation"
    }
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
              <a href="#investors" className="text-tactical-yellow font-medium">Investors</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="hidden md:block text-soft-white-dim hover:text-tactical-yellow transition-colors font-medium">
                Sign In
              </button>
              <button className="btn-primary-outline">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-jet-black via-jet-black to-military-green/20"></div>
        
        {/* Circuit Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-tactical-yellow/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-32 h-32 border border-military-green/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 border border-tactical-yellow/20 rounded-full animate-pulse delay-500"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 215, 0, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 215, 0, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 text-tactical-yellow/20 animate-float">
          <Building2 className="h-8 w-8" />
        </div>
        <div className="absolute bottom-32 left-20 text-military-green/30 animate-float-delayed">
          <Handshake className="h-12 w-12" />
        </div>
        <div className="absolute top-1/3 right-1/3 text-tactical-yellow/15 animate-float-slow">
          <TrendingUp className="h-6 w-6" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            {/* Status Indicator */}
            <div className="inline-flex items-center space-x-2 bg-military-green/20 border border-military-green/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-tactical-yellow rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-tactical-yellow">INVESTORS & PARTNERS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-space-grotesk text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
              <span className="block text-soft-white">Building the Future</span>
              <span className="block text-gradient glow-effect">of Cybersecurity</span>
              <span className="block text-soft-white text-5xl md:text-6xl lg:text-7xl mt-4">
                Together.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl lg:text-3xl text-soft-white-dim max-w-5xl mx-auto mb-12 leading-relaxed font-light">
              Join our ecosystem of 
              <span className="text-tactical-yellow font-medium"> strategic investors</span> and 
              <span className="text-military-green font-medium"> technology partners</span> 
              shaping the next generation of enterprise security.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4 bg-jet-black-light/50 border border-tactical-yellow/20 rounded-2xl p-2 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab('investors')}
                className={`px-8 py-4 rounded-xl font-space-grotesk font-semibold transition-all duration-300 ${
                  activeTab === 'investors' 
                    ? 'bg-tactical-yellow text-jet-black' 
                    : 'text-soft-white-dim hover:text-tactical-yellow'
                }`}
              >
                Investors
              </button>
              <button
                onClick={() => setActiveTab('partners')}
                className={`px-8 py-4 rounded-xl font-space-grotesk font-semibold transition-all duration-300 ${
                  activeTab === 'partners' 
                    ? 'bg-tactical-yellow text-jet-black' 
                    : 'text-soft-white-dim hover:text-tactical-yellow'
                }`}
              >
                Partners
              </button>
            </div>
          </div>

          {/* Partnership Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "$50M+", label: "Funding Raised", sublabel: "Series B Complete" },
              { value: "25+", label: "Strategic Partners", sublabel: "Global Technology" },
              { value: "150%", label: "YoY Growth", sublabel: "Revenue Expansion" },
              { value: "500+", label: "Enterprise Clients", sublabel: "Fortune 500" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-space-grotesk font-bold text-tactical-yellow mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-soft-white font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-soft-white-dim">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-tactical-yellow/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-tactical-yellow rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {activeTab === 'investors' && (
        <>
          {/* Investor Interest Section */}
          <section id="investor-interest" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black to-jet-black-light">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-20">
                <div className="inline-flex items-center space-x-2 bg-tactical-yellow/10 border border-tactical-yellow/20 rounded-full px-6 py-3 mb-8">
                  <DollarSign className="h-5 w-5 text-tactical-yellow" />
                  <span className="text-sm font-medium text-tactical-yellow tracking-wider">INVESTOR RELATIONS</span>
                </div>
                
                <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
                  <span className="text-soft-white">Investment</span>
                  <span className="block text-gradient glow-effect">Opportunity</span>
                </h2>
                
                <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
                  Join leading investors backing the future of enterprise cybersecurity
                </p>
              </div>

              {/* Investment Highlights */}
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {/* Market Opportunity */}
                <div className="service-card group">
                  <div className="service-icon-container bg-gradient-to-br from-tactical-yellow/20 to-tactical-yellow/5 group-hover:from-tactical-yellow/30 group-hover:to-tactical-yellow/10">
                    <TrendingUp className="h-12 w-12 text-tactical-yellow group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-tactical-yellow/10 rounded-2xl blur-xl group-hover:bg-tactical-yellow/20 transition-colors duration-300"></div>
                  </div>
                  
                  <div className="service-content">
                    <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-4 group-hover:text-tactical-yellow transition-colors">
                      Market Opportunity
                    </h3>
                    
                    <p className="text-soft-white-dim mb-6 leading-relaxed">
                      The global cybersecurity market is projected to reach $345 billion by 2026, with enterprise security solutions representing the fastest-growing segment.
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-sm text-soft-white-dim">
                        <CheckCircle className="h-4 w-4 text-tactical-yellow mr-3 flex-shrink-0" />
                        <span>$345B global market by 2026</span>
                      </li>
                      <li className="flex items-center text-sm text-soft-white-dim">
                        <CheckCircle className="h-4 w-4 text-tactical-yellow mr-3 flex-shrink-0" />
                        <span>15% CAGR in enterprise security</span>
                      </li>
                      <li className="flex items-center text-sm text-soft-white-dim">
                        <CheckCircle className="h-4 w-4 text-tactical-yellow mr-3 flex-shrink-0" />
                        <span>Growing regulatory compliance demand</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Competitive Advantage */}
                <div className="service-card group">
                  <div className="service-icon-container bg-gradient-to-br from-military-green/20 to-military-green/5 group-hover:from-military-green/30 group-hover:to-military-green/10">
                    <Award className="h-12 w-12 text-military-green group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-military-green/10 rounded-2xl blur-xl group-hover:bg-military-green/20 transition-colors duration-300"></div>
                  </div>
                  
                  <div className="service-content">
                    <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-4 group-hover:text-military-green transition-colors">
                      Competitive Advantage
                    </h3>
                    
                    <p className="text-soft-white-dim mb-6 leading-relaxed">
                      Unique positioning at the intersection of AI-powered threat detection, regulatory compliance, and digital forensics for critical industries.
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-sm text-soft-white-dim">
                        <CheckCircle className="h-4 w-4 text-military-green mr-3 flex-shrink-0" />
                        <span>AI-first security platform</span>
                      </li>
                      <li className="flex items-center text-sm text-soft-white-dim">
                        <CheckCircle className="h-4 w-4 text-military-green mr-3 flex-shrink-0" />
                        <span>Industry-specific solutions</span>
                      </li>
                      <li className="flex items-center text-sm text-soft-white-dim">
                        <CheckCircle className="h-4 w-4 text-military-green mr-3 flex-shrink-0" />
                        <span>Proven enterprise traction</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Investor Interest Form */}
              <div className="bg-gradient-to-r from-jet-black-light/80 to-jet-black-light/40 border border-tactical-yellow/20 rounded-3xl p-12 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <h3 className="font-space-grotesk text-3xl font-bold text-soft-white mb-4">
                    Interested in Learning More?
                  </h3>
                  <p className="text-xl text-soft-white-dim max-w-2xl mx-auto">
                    Connect with our investor relations team to discuss partnership opportunities and access our investor deck.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button className="btn-primary-large group">
                    <span>Connect on LinkedIn</span>
                    <Linkedin className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="btn-secondary-large group">
                    <span>Schedule Meeting</span>
                    <Calendar className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                {/* Contact Information */}
                <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-tactical-yellow/10">
                  <div className="text-center">
                    <Mail className="h-8 w-8 text-tactical-yellow mx-auto mb-3" />
                    <div className="text-sm font-medium text-soft-white mb-1">Email</div>
                    <div className="text-sm text-soft-white-dim">investors@cyroc.com</div>
                  </div>
                  <div className="text-center">
                    <Phone className="h-8 w-8 text-military-green mx-auto mb-3" />
                    <div className="text-sm font-medium text-soft-white mb-1">Phone</div>
                    <div className="text-sm text-soft-white-dim">+1 (555) 123-4567</div>
                  </div>
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-tactical-yellow mx-auto mb-3" />
                    <div className="text-sm font-medium text-soft-white mb-1">Location</div>
                    <div className="text-sm text-soft-white-dim">New York, NY</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'partners' && (
        <>
          {/* Partners Grid Section */}
          <section id="partners-grid" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black to-jet-black-light">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-20">
                <div className="inline-flex items-center space-x-2 bg-military-green/10 border border-military-green/20 rounded-full px-6 py-3 mb-8">
                  <Handshake className="h-5 w-5 text-military-green" />
                  <span className="text-sm font-medium text-military-green tracking-wider">STRATEGIC PARTNERSHIPS</span>
                </div>
                
                <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
                  <span className="text-soft-white">Technology</span>
                  <span className="block text-gradient glow-effect">Partners</span>
                </h2>
                
                <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
                  Leading technology companies powering our cybersecurity ecosystem
                </p>
              </div>

              {/* Partners Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {partners.map((partner, index) => (
                  <div key={index} className="partner-card group">
                    <div className="partner-image-container">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="w-full h-48 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-jet-black/80 to-transparent rounded-2xl"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-tactical-yellow/20 backdrop-blur-sm text-tactical-yellow text-xs font-semibold px-3 py-1 rounded-full border border-tactical-yellow/30">
                          {partner.category}
                        </span>
                      </div>
                    </div>

                    <div className="partner-content">
                      <h3 className="font-space-grotesk text-xl font-bold text-soft-white mb-2 group-hover:text-tactical-yellow transition-colors">
                        {partner.name}
                      </h3>
                      
                      <p className="text-soft-white-dim text-sm leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="partner-overlay">
                      <div className="flex items-center text-tactical-yellow font-space-grotesk font-semibold text-sm">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Partner Program Section */}
              <div className="bg-gradient-to-r from-jet-black-light/80 to-jet-black-light/40 border border-military-green/20 rounded-3xl p-12 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <h3 className="font-space-grotesk text-3xl font-bold text-soft-white mb-4">
                    Join Our Partner Program
                  </h3>
                  <p className="text-xl text-soft-white-dim max-w-2xl mx-auto">
                    Become a certified CyRoc partner and access exclusive resources, training, and co-marketing opportunities.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                  <button className="btn-primary-large group">
                    <span>Download Partner Kit</span>
                    <Download className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="btn-secondary-large group">
                    <span>Apply for Partnership</span>
                    <ExternalLink className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                {/* Partner Benefits */}
                <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-military-green/10">
                  <div className="text-center">
                    <Network className="h-8 w-8 text-military-green mx-auto mb-3" />
                    <div className="text-sm font-medium text-soft-white mb-1">Technical Integration</div>
                    <div className="text-sm text-soft-white-dim">API access and technical support</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-tactical-yellow mx-auto mb-3" />
                    <div className="text-sm font-medium text-soft-white mb-1">Co-Marketing</div>
                    <div className="text-sm text-soft-white-dim">Joint marketing and sales opportunities</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-8 w-8 text-military-green mx-auto mb-3" />
                    <div className="text-sm font-medium text-soft-white mb-1">Certification</div>
                    <div className="text-sm text-soft-white-dim">Partner certification and training</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default InvestorsPartners;