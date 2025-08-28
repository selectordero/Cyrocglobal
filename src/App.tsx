import React, { useState } from 'react';
import { Shield, Building2, Heart, Zap, Users, Award, Globe, Target, Lock, Eye, Brain, ArrowRight, CheckCircle, DollarSign, TrendingUp, Activity, Clock, MapPin, Star, ChevronLeft, ChevronRight, Play, ExternalLink, FileText, Mail, Phone, Calendar, Briefcase, Handshake, Network } from 'lucide-react';
import CyRocLogo from './components/CyRocLogo';
import About from './About';
import Solutions from './Solutions';
import Industries from './Industries';
import BanksFintech from './BanksFintech';
import GovernmentDefense from './GovernmentDefense';
import Healthcare from './Healthcare';
import OilEnergy from './OilEnergy';
import AIPlatform from './AIPlatform';
import Newsroom from './Newsroom';
import InvestorsPartners from './InvestorsPartners';
import SignIn from './SignIn';
import Contact from './Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Render different pages based on currentPage state
  if (currentPage === 'about') {
    return <About />;
  }
  
  if (currentPage === 'solutions') {
    return <Solutions />;
  }
  
  if (currentPage === 'industries') {
    return <Industries setCurrentPage={setCurrentPage} />;
  }
  
  if (currentPage === 'banks-fintech') {
    return <BanksFintech />;
  }
  
  if (currentPage === 'government-defense') {
    return <GovernmentDefense />;
  }
  
  if (currentPage === 'healthcare') {
    return <Healthcare />;
  }
  
  if (currentPage === 'oil-energy') {
    return <OilEnergy />;
  }
  
  if (currentPage === 'ai-platform') {
    return <AIPlatform />;
  }
  
  if (currentPage === 'newsroom') {
    return <Newsroom />;
  }
  
  if (currentPage === 'investors-partners') {
    return <InvestorsPartners />;
  }
  
  if (currentPage === 'signin') {
    return <SignIn />;
  }
  
  if (currentPage === 'contact') {
    return <Contact />;
  }

  // Home page content
  return (
    <div className="min-h-screen bg-jet-black text-soft-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-jet-black/90 backdrop-blur-md border-b border-tactical-yellow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <CyRocLogo />
            
            <div className="hidden lg:flex items-center space-x-8">
              <button onClick={() => setCurrentPage('home')} className="text-tactical-yellow font-medium">Home</button>
              <button onClick={() => setCurrentPage('about')} className="text-soft-white-dim hover:text-tactical-yellow transition-colors font-medium">About</button>
              <button onClick={() => setCurrentPage('solutions')} className="text-soft-white-dim hover:text-tactical-yellow transition-colors font-medium">Solutions</button>
              <button onClick={() => setCurrentPage('industries')} className="text-soft-white-dim hover:text-tactical-yellow transition-colors font-medium">Industries</button>
              <button onClick={() => setCurrentPage('newsroom')} className="text-soft-white-dim hover:text-tactical-yellow transition-colors font-medium">Newsroom</button>
            </div>
            
            <div className="flex items-center space-x-4">
              <button onClick={() => setCurrentPage('signin')} className="hidden md:block text-soft-white-dim hover:text-tactical-yellow transition-colors font-medium">
                Sign In
              </button>
              <button onClick={() => setCurrentPage('contact')} className="btn-primary-outline">
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
          <Shield className="h-8 w-8" />
        </div>
        <div className="absolute bottom-32 left-20 text-military-green/30 animate-float-delayed">
          <Lock className="h-12 w-12" />
        </div>
        <div className="absolute top-1/3 right-1/3 text-tactical-yellow/15 animate-float-slow">
          <Brain className="h-6 w-6" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            {/* Status Indicator */}
            <div className="inline-flex items-center space-x-2 bg-military-green/20 border border-military-green/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-tactical-yellow rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-tactical-yellow">ADVANCED CYBERSECURITY SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-space-grotesk text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
              <span className="block text-soft-white">Intelligent</span>
              <span className="block text-gradient glow-effect">Cyber Defense</span>
              <span className="block text-soft-white text-4xl md:text-5xl lg:text-6xl mt-6">
                for the
                <span className="text-tactical-yellow ml-4">Modern</span>
              </span>
              <span className="block text-soft-white text-4xl md:text-5xl lg:text-6xl">
                <span className="text-military-green">Enterprise.</span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl lg:text-3xl text-soft-white-dim max-w-5xl mx-auto mb-12 leading-relaxed font-light">
              CyRoc delivers next-generation cybersecurity with 
              <span className="text-tactical-yellow font-medium"> AI-powered threat detection</span>, 
              <span className="text-military-green font-medium"> zero-trust architecture</span>, and 
              <span className="text-tactical-yellow font-medium"> regulatory compliance automation</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button onClick={() => setCurrentPage('solutions')} className="btn-primary-large group">
              <span>Explore Solutions</span>
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => setCurrentPage('ai-platform')} className="btn-secondary-large group">
              <span>AI Platform Demo</span>
              <Brain className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "500+", label: "Enterprise Clients", sublabel: "Fortune 500 Companies" },
              { value: "99.9%", label: "Threat Detection", sublabel: "AI-Powered Accuracy" },
              { value: "50+", label: "Countries", sublabel: "Global Presence" },
              { value: "24/7", label: "SOC Monitoring", sublabel: "Round-the-Clock Protection" }
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

      {/* Solutions Preview Section */}
      <section id="solutions-preview" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black to-jet-black-light">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-tactical-yellow/10 border border-tactical-yellow/20 rounded-full px-6 py-3 mb-8">
              <Target className="h-5 w-5 text-tactical-yellow" />
              <span className="text-sm font-medium text-tactical-yellow tracking-wider">CORE SOLUTIONS</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Comprehensive</span>
              <span className="block text-gradient glow-effect">Security Portfolio</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Advanced cybersecurity solutions designed for enterprise-scale operations
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Lock,
                title: "Cloud Security",
                description: "Zero-trust architecture with advanced threat detection and compliance automation for multi-cloud environments.",
                features: ["Zero-Trust Implementation", "Multi-Cloud Protection", "Compliance Automation"],
                color: "tactical-yellow"
              },
              {
                icon: DollarSign,
                title: "Fraud & Financial Forensics",
                description: "AI-powered fraud detection and digital forensics for financial crimes and regulatory investigations.",
                features: ["AI Fraud Detection", "Digital Forensics", "Regulatory Compliance"],
                color: "military-green"
              },
              {
                icon: Brain,
                title: "AI-Powered Security",
                description: "Machine learning algorithms for behavioral analysis, threat prediction, and automated incident response.",
                features: ["Behavioral Analytics", "Threat Prediction", "Automated Response"],
                color: "tactical-yellow"
              },
              {
                icon: Shield,
                title: "Cyber Defense",
                description: "Proactive threat hunting, endpoint detection, and security operations center implementation.",
                features: ["Threat Hunting", "EDR Implementation", "SOC Operations"],
                color: "military-green"
              },
              {
                icon: Award,
                title: "Regulatory Compliance",
                description: "Automated compliance monitoring for GDPR, HIPAA, SOX, PCI DSS, and industry-specific regulations.",
                features: ["GDPR Compliance", "HIPAA Automation", "SOX Controls"],
                color: "tactical-yellow"
              },
              {
                icon: Users,
                title: "Security Training",
                description: "Comprehensive cybersecurity awareness and technical training programs for all organizational levels.",
                features: ["Security Awareness", "Technical Training", "Compliance Education"],
                color: "military-green"
              }
            ].map((solution, index) => {
              const IconComponent = solution.icon;
              
              return (
                <div key={index} className="service-card group cursor-pointer" onClick={() => setCurrentPage('solutions')}>
                  <div className={`service-icon-container bg-gradient-to-br from-${solution.color}/20 to-${solution.color}/5 group-hover:from-${solution.color}/30 group-hover:to-${solution.color}/10`}>
                    <IconComponent className={`h-12 w-12 text-${solution.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div className={`absolute inset-0 bg-${solution.color}/10 rounded-2xl blur-xl group-hover:bg-${solution.color}/20 transition-colors duration-300`}></div>
                  </div>
                  
                  <div className="service-content">
                    <h3 className={`font-space-grotesk text-xl font-bold text-soft-white mb-3 group-hover:text-${solution.color} transition-colors`}>
                      {solution.title}
                    </h3>
                    
                    <p className="text-soft-white-dim text-sm leading-relaxed mb-4">
                      {solution.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-soft-white-dim">
                          <CheckCircle className={`h-3 w-3 text-${solution.color} mr-2 flex-shrink-0`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className={`inline-flex items-center text-${solution.color} font-space-grotesk font-semibold text-sm group-hover:translate-x-1 transition-transform`}>
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <button onClick={() => setCurrentPage('solutions')} className="btn-primary-large group">
              <span>View All Solutions</span>
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black-light to-jet-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-military-green/10 border border-military-green/20 rounded-full px-6 py-3 mb-8">
              <Building2 className="h-5 w-5 text-military-green" />
              <span className="text-sm font-medium text-military-green tracking-wider">INDUSTRY EXPERTISE</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Sector-Specific</span>
              <span className="block text-gradient glow-effect">Security Solutions</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Tailored cybersecurity for critical industries and regulated environments
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Building2,
                title: "Banks & Fintech",
                description: "Financial services security with fraud detection, regulatory compliance, and digital banking protection.",
                stats: "150+ Clients",
                color: "tactical-yellow",
                page: "banks-fintech"
              },
              {
                icon: Shield,
                title: "Government & Defense",
                description: "Military-grade security for classified systems, critical infrastructure, and national security operations.",
                stats: "75+ Agencies",
                color: "military-green",
                page: "government-defense"
              },
              {
                icon: Heart,
                title: "Healthcare",
                description: "HIPAA-compliant security for patient data, medical devices, and healthcare infrastructure protection.",
                stats: "200+ Providers",
                color: "tactical-yellow",
                page: "healthcare"
              },
              {
                icon: Zap,
                title: "Oil & Energy",
                description: "Critical infrastructure security for energy operations, SCADA systems, and industrial control networks.",
                stats: "100+ Companies",
                color: "military-green",
                page: "oil-energy"
              }
            ].map((industry, index) => {
              const IconComponent = industry.icon;
              
              return (
                <div key={index} className="industry-card group" onClick={() => setCurrentPage(industry.page)}>
                  <div className="industry-icon-container">
                    <div className={`w-20 h-20 bg-gradient-to-br from-${industry.color}/20 to-${industry.color}/5 group-hover:from-${industry.color}/30 group-hover:to-${industry.color}/10 rounded-3xl flex items-center justify-center mb-6 mx-auto transition-all duration-300`}>
                      <IconComponent className={`h-12 w-12 text-${industry.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                  </div>
                  
                  <div className="industry-content">
                    <h3 className={`font-space-grotesk text-xl font-bold text-soft-white mb-3 group-hover:text-${industry.color} transition-colors`}>
                      {industry.title}
                    </h3>
                    
                    <p className="text-soft-white-dim text-sm leading-relaxed mb-4">
                      {industry.description}
                    </p>
                    
                    <div className={`text-${industry.color} font-space-grotesk font-semibold text-sm mb-4`}>
                      {industry.stats}
                    </div>
                  </div>
                  
                  <div className="industry-overlay">
                    <div className={`flex items-center text-${industry.color} font-space-grotesk font-semibold text-sm`}>
                      <span>Explore Solutions</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <button onClick={() => setCurrentPage('industries')} className="btn-secondary-large group">
              <span>View All Industries</span>
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section id="trust" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black to-jet-black-light">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-tactical-yellow/10 border border-tactical-yellow/20 rounded-full px-6 py-3 mb-8">
              <Award className="h-5 w-5 text-tactical-yellow" />
              <span className="text-sm font-medium text-tactical-yellow tracking-wider">TRUST & COMPLIANCE</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Certified</span>
              <span className="block text-gradient glow-effect">Security Standards</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Meeting the highest global standards for cybersecurity and regulatory compliance
            </p>
          </div>

          {/* Compliance Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Lock,
                title: "ISO 27001 Certified",
                description: "International standard for information security management systems, ensuring comprehensive security controls.",
                badge: "Certified 2019"
              },
              {
                icon: Shield,
                title: "SOC 2 Type II",
                description: "Service Organization Control 2 compliance demonstrating security, availability, and confidentiality controls.",
                badge: "Annual Audits"
              },
              {
                icon: Globe,
                title: "GDPR Compliant",
                description: "General Data Protection Regulation compliance for European data privacy and protection requirements.",
                badge: "EU Certified"
              }
            ].map((cert, index) => {
              const IconComponent = cert.icon;
              
              return (
                <div key={index} className="trust-card group">
                  <div className="trust-icon-container bg-gradient-to-br from-tactical-yellow/20 to-military-green/10 group-hover:from-tactical-yellow/30 group-hover:to-military-green/20">
                    <IconComponent className="h-12 w-12 text-tactical-yellow group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-tactical-yellow/10 rounded-2xl blur-xl group-hover:bg-tactical-yellow/20 transition-colors duration-300"></div>
                  </div>
                  
                  <div className="trust-content">
                    <h3 className="font-space-grotesk text-xl font-bold text-soft-white mb-3 group-hover:text-tactical-yellow transition-colors">
                      {cert.title}
                    </h3>
                    
                    <p className="text-soft-white-dim text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>
                    
                    <div className="flex items-center text-sm text-tactical-yellow font-medium">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span>{cert.badge}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Stats */}
          <div className="bg-gradient-to-r from-jet-black-light/80 to-jet-black-light/40 border border-tactical-yellow/20 rounded-3xl p-12 backdrop-blur-sm">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="trust-stat">
                <div className="text-4xl font-space-grotesk font-bold text-tactical-yellow mb-2">99.9%</div>
                <div className="text-soft-white font-medium mb-1">SLA Uptime</div>
                <div className="text-sm text-soft-white-dim">Guaranteed Availability</div>
              </div>
              <div className="trust-stat">
                <div className="text-4xl font-space-grotesk font-bold text-military-green mb-2">24/7</div>
                <div className="text-soft-white font-medium mb-1">SOC Monitoring</div>
                <div className="text-sm text-soft-white-dim">Round-the-Clock Protection</div>
              </div>
              <div className="trust-stat">
                <div className="text-4xl font-space-grotesk font-bold text-tactical-yellow mb-2">15+</div>
                <div className="text-soft-white font-medium mb-1">Years Experience</div>
                <div className="text-sm text-soft-white-dim">Industry Expertise</div>
              </div>
              <div className="trust-stat">
                <div className="text-4xl font-space-grotesk font-bold text-military-green mb-2">Zero</div>
                <div className="text-soft-white font-medium mb-1">Data Breaches</div>
                <div className="text-sm text-soft-white-dim">Perfect Security Record</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black-light to-jet-black">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-jet-black-light/80 to-jet-black-light/40 border border-tactical-yellow/20 rounded-3xl p-12 backdrop-blur-sm text-center">
            <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold text-soft-white mb-6">
              Ready to Secure Your Enterprise?
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim mb-8 max-w-3xl mx-auto leading-relaxed">
              Join 500+ organizations worldwide who trust CyRoc to protect their most critical assets and maintain regulatory compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button onClick={() => setCurrentPage('contact')} className="btn-primary-large group">
                <span>Get Started Today</span>
                <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => setCurrentPage('ai-platform')} className="btn-secondary-large group">
                <span>Schedule Demo</span>
                <Calendar className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Contact Options */}
            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-tactical-yellow/10">
              <div className="text-center">
                <Mail className="h-8 w-8 text-tactical-yellow mx-auto mb-3" />
                <div className="text-sm font-medium text-soft-white mb-1">Email</div>
                <div className="text-sm text-soft-white-dim">contact@cyroc.com</div>
              </div>
              <div className="text-center">
                <Phone className="h-8 w-8 text-military-green mx-auto mb-3" />
                <div className="text-sm font-medium text-soft-white mb-1">Phone</div>
                <div className="text-sm text-soft-white-dim">+1 (555) 123-4567</div>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 text-tactical-yellow mx-auto mb-3" />
                <div className="text-sm font-medium text-soft-white mb-1">Headquarters</div>
                <div className="text-sm text-soft-white-dim">New York, NY</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;