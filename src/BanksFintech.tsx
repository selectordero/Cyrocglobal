import React, { useState, useEffect } from 'react';
import { Shield, Building2, ArrowRight, CheckCircle, Users, Award, Globe, Target, Lock, Eye, Brain, DollarSign, AlertTriangle, FileText, TrendingUp, Activity, Clock, MapPin, Star, ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react';
import CyRocLogo from './components/CyRocLogo';

/**
 * BANKS & FINTECH PAGE - SERVICE MAPPING ANNOTATIONS
 * 
 * Primary location for FRAUD INVESTIGATION SERVICES:
 * 
 * FRAUD INVESTIGATION SERVICES (INCLUDING CERTIFIED FRAUD EXAMINERS):
 * - "AI fraud detection" - advanced fraud analytics and detection
 * - "Real-time monitoring & MSSP" - continuous fraud monitoring
 * - "AML analytics" - anti-money laundering investigations
 * - "KYC advisory" - know your customer compliance and verification
 * - Financial crime investigation capabilities (implied CFE involvement)
 * 
 * SUPPORTING PENETRATION TESTING:
 * - Banking security assessments and vulnerability testing
 * - Financial system penetration testing for compliance
 * 
 * Cross-references: Solutions.tsx (fraud & financial forensics), Industries.tsx (financial sector security)
 */
function BanksFintech() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "CyRoc's fraud detection system has reduced our false positives by 85% while catching sophisticated attacks we never would have detected with traditional rules-based systems.",
      author: "Sarah Mitchell",
      role: "Chief Risk Officer",
      company: "Global Trust Bank",
      location: "London, UK",
      rating: 5,
      metrics: "85% reduction in false positives"
    },
    {
      id: 2,
      quote: "The regulatory compliance automation has been a game-changer. We now maintain SOX and PCI DSS compliance across 15 countries with minimal manual oversight.",
      author: "Michael Chen",
      role: "CISO",
      company: "FinTech Innovations Ltd",
      location: "Singapore",
      rating: 5,
      metrics: "100% compliance across 15 countries"
    },
    {
      id: 3,
      quote: "Their zero-trust banking architecture implementation allowed us to securely enable remote work for 5,000+ employees without compromising our security posture.",
      author: "Dr. Amanda Rodriguez",
      role: "Head of Digital Security",
      company: "Regional Banking Corp",
      location: "New York, USA",
      rating: 5,
      metrics: "5,000+ secure remote workers"
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
              <a href="/industries" className="text-tactical-yellow font-medium">Industries</a>
              <a href="#contact" className="text-soft-white-dim hover:text-tactical-yellow transition-colors font-medium">Contact</a>
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
        <div className="absolute inset-0 bg-gradient-to-br from-jet-black via-jet-black to-tactical-yellow/20"></div>
        
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
          <DollarSign className="h-12 w-12" />
        </div>
        <div className="absolute top-1/3 right-1/3 text-tactical-yellow/15 animate-float-slow">
          <Lock className="h-6 w-6" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            {/* Status Indicator */}
            <div className="inline-flex items-center space-x-2 bg-military-green/20 border border-military-green/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-tactical-yellow rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-tactical-yellow">BANKS & FINTECH SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-space-grotesk text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
              <span className="block text-soft-white">Modern Banking</span>
              <span className="block text-gradient glow-effect">Needs Modern</span>
              <span className="block text-tactical-yellow text-5xl md:text-6xl lg:text-7xl mt-4">
                Security.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl lg:text-3xl text-soft-white-dim max-w-5xl mx-auto mb-12 leading-relaxed font-light">
              CyRoc helps banks detect fraud, meet compliance, and defend against digital crime with 
              <span className="text-tactical-yellow font-medium"> AI-powered analytics</span> and 
              <span className="text-military-green font-medium"> regulatory automation</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="btn-primary-large group">
              <span>Request a Demo</span>
              <Play className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary-large group">
              <span>View Case Studies</span>
              <FileText className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Banking Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "150+", label: "Banking Clients", sublabel: "Global Financial Institutions" },
              { value: "35+", label: "Countries", sublabel: "Regulatory Compliance" },
              { value: "99.9%", label: "Fraud Detection", sublabel: "Accuracy Rate" },
              { value: "$2.5B+", label: "Protected Assets", sublabel: "Under Management" }
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

      {/* Problems We Solve Section */}
      <section id="problems" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black to-jet-black-light">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-tactical-yellow/10 border border-tactical-yellow/20 rounded-full px-6 py-3 mb-8">
              <AlertTriangle className="h-5 w-5 text-tactical-yellow" />
              <span className="text-sm font-medium text-tactical-yellow tracking-wider">BANKING CHALLENGES</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Problems</span>
              <span className="block text-gradient glow-effect">We Solve</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Critical security challenges facing modern banking and financial services
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: DollarSign,
                title: "Real-time monitoring & MSSP",
                description: "24/7 managed security service provider operations with continuous threat monitoring, incident response, and compliance reporting across all banking channels.",
                challenges: ["Multi-channel fraud detection", "Real-time transaction monitoring", "Cross-border compliance", "Legacy system integration"]
              },
              {
                icon: Brain,
                title: "AI fraud detection",
                description: "Advanced machine learning algorithms that analyze transaction patterns, user behavior, and risk indicators to detect sophisticated fraud attempts in real-time.",
                challenges: ["Sophisticated fraud schemes", "False positive reduction", "Behavioral analysis", "Pattern recognition"]
              },
              {
                icon: Users,
                title: "KYC advisory",
                description: "Know Your Customer compliance automation with identity verification, risk assessment, and ongoing customer due diligence across global regulatory frameworks.",
                challenges: ["Identity verification", "Risk assessment automation", "Regulatory compliance", "Customer onboarding"]
              },
              {
                icon: TrendingUp,
                title: "AML analytics",
                description: "Anti-Money Laundering analytics with transaction monitoring, suspicious activity reporting, and regulatory compliance across multiple jurisdictions.",
                challenges: ["Transaction monitoring", "Suspicious activity detection", "Regulatory reporting", "Cross-border compliance"]
              }
            ].map((problem, index) => (
              <div key={index} className="service-card group">
                <div className="service-icon-container bg-gradient-to-br from-tactical-yellow/20 to-tactical-yellow/5 group-hover:from-tactical-yellow/30 group-hover:to-tactical-yellow/10">
                  <problem.icon className="h-12 w-12 text-tactical-yellow group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-tactical-yellow/10 rounded-2xl blur-xl group-hover:bg-tactical-yellow/20 transition-colors duration-300"></div>
                </div>
                
                <div className="service-content">
                  <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-4 group-hover:text-tactical-yellow transition-colors">
                    {problem.title}
                  </h3>
                  
                  <p className="text-soft-white-dim mb-6 leading-relaxed">
                    {problem.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {problem.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-center text-sm text-soft-white-dim">
                        <CheckCircle className="h-4 w-4 text-tactical-yellow mr-3 flex-shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Stack Section */}
      <section id="solution-stack" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black-light to-jet-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-military-green/10 border border-military-green/20 rounded-full px-6 py-3 mb-8">
              <Target className="h-5 w-5 text-military-green" />
              <span className="text-sm font-medium text-military-green tracking-wider">SOLUTION ARCHITECTURE</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Banking Security</span>
              <span className="block text-gradient glow-effect">Solution Stack</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology stack designed specifically for banking and financial services
            </p>
          </div>

          {/* Solution Stack Layers */}
          <div className="space-y-8 mb-16">
            {/* Layer 1: Detection & Prevention */}
            <div className="solution-card group">
              <div className="solution-header">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-space-grotesk text-2xl font-bold text-tactical-yellow">
                    🛡️ Detection & Prevention Layer
                  </h3>
                  <div className="text-sm text-soft-white-dim">Real-time Protection</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">AI Fraud Engine</h4>
                    <p className="text-sm text-soft-white-dim">Machine learning models for transaction analysis and behavioral detection</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Real-time Monitoring</h4>
                    <p className="text-sm text-soft-white-dim">24/7 transaction monitoring across all banking channels</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Threat Intelligence</h4>
                    <p className="text-sm text-soft-white-dim">Global financial crime intelligence and pattern recognition</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 2: Compliance & Governance */}
            <div className="solution-card group">
              <div className="solution-header">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-space-grotesk text-2xl font-bold text-military-green">
                    📋 Compliance & Governance Layer
                  </h3>
                  <div className="text-sm text-soft-white-dim">Regulatory Automation</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-jet-black-light/50 border border-military-green/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">AML/KYC Automation</h4>
                    <p className="text-sm text-soft-white-dim">Automated anti-money laundering and customer verification</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-military-green/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Regulatory Reporting</h4>
                    <p className="text-sm text-soft-white-dim">Automated compliance reporting for global regulations</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-military-green/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Risk Assessment</h4>
                    <p className="text-sm text-soft-white-dim">Continuous risk scoring and assessment automation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 3: Infrastructure Security */}
            <div className="solution-card group">
              <div className="solution-header">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-space-grotesk text-2xl font-bold text-tactical-yellow">
                    🔐 Infrastructure Security Layer
                  </h3>
                  <div className="text-sm text-soft-white-dim">Zero-Trust Architecture</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Zero-Trust Banking</h4>
                    <p className="text-sm text-soft-white-dim">Identity verification and least-privilege access controls</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">API Security</h4>
                    <p className="text-sm text-soft-white-dim">Secure API gateway for open banking and fintech integration</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Data Encryption</h4>
                    <p className="text-sm text-soft-white-dim">End-to-end encryption for sensitive financial data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Partners */}
          <div className="text-center">
            <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-8">
              Powered by Industry-Leading Technology
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['AWS Financial Services', 'Microsoft Azure', 'Palantir Foundry', 'Splunk Enterprise', 'IBM Watson', 'SAS Fraud Management'].map((tech, index) => (
                <span key={index} className="solution-tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black to-jet-black-light">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-tactical-yellow/10 border border-tactical-yellow/20 rounded-full px-6 py-3 mb-8">
              <Star className="h-5 w-5 text-tactical-yellow" />
              <span className="text-sm font-medium text-tactical-yellow tracking-wider">CLIENT SUCCESS</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Trusted by</span>
              <span className="block text-gradient glow-effect">Banking Leaders</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              See how leading financial institutions have transformed their security posture with CyRoc
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="relative max-w-5xl mx-auto">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
              <button 
                onClick={prevTestimonial}
                className="blog-nav-btn group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-tactical-yellow group-hover:text-tactical-yellow-light transition-colors" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
              <button 
                onClick={nextTestimonial}
                className="blog-nav-btn group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-tactical-yellow group-hover:text-tactical-yellow-light transition-colors" />
              </button>
            </div>

            {/* Testimonial Content */}
            <div className="bg-gradient-to-b from-jet-black-light/80 to-jet-black-light/40 border border-tactical-yellow/20 rounded-3xl p-12 backdrop-blur-sm">
              <div className="text-center">
                {/* Rating Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                    <Star key={index} className="h-6 w-6 text-tactical-yellow fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-2xl md:text-3xl font-light text-soft-white mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                {/* Metrics */}
                <div className="inline-flex items-center space-x-2 bg-tactical-yellow/10 border border-tactical-yellow/20 rounded-full px-6 py-3 mb-8">
                  <TrendingUp className="h-5 w-5 text-tactical-yellow" />
                  <span className="text-sm font-medium text-tactical-yellow">
                    {testimonials[currentTestimonial].metrics}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-tactical-yellow/20 to-military-green/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-space-grotesk font-bold text-tactical-yellow">
                      {testimonials[currentTestimonial].author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-space-grotesk text-xl font-semibold text-soft-white">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-tactical-yellow font-medium">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-soft-white-dim text-sm">
                      {testimonials[currentTestimonial].company} • {testimonials[currentTestimonial].location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index 
                      ? 'bg-tactical-yellow scale-110' 
                      : 'bg-tactical-yellow/30 hover:bg-tactical-yellow/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Badges Section */}
      <section id="compliance" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black-light to-jet-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-military-green/10 border border-military-green/20 rounded-full px-6 py-3 mb-8">
              <Award className="h-5 w-5 text-military-green" />
              <span className="text-sm font-medium text-military-green tracking-wider">COMPLIANCE & CERTIFICATIONS</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Banking</span>
              <span className="block text-gradient glow-effect">Compliance Standards</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Meeting the highest regulatory standards for financial services worldwide
            </p>
          </div>

          {/* Compliance Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* PCI DSS */}
            <div className="trust-card group">
              <div className="trust-icon-container bg-gradient-to-br from-tactical-yellow/20 to-tactical-yellow/5 group-hover:from-tactical-yellow/30 group-hover:to-tactical-yellow/10">
                <Lock className="h-12 w-12 text-tactical-yellow group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-tactical-yellow/10 rounded-2xl blur-xl group-hover:bg-tactical-yellow/20 transition-colors duration-300"></div>
              </div>
              
              <div className="trust-content">
                <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-4 group-hover:text-tactical-yellow transition-colors">
                  PCI DSS Level 1
                </h3>
                
                <p className="text-soft-white-dim mb-6 leading-relaxed">
                  Payment Card Industry Data Security Standard compliance for secure payment processing and cardholder data protection.
                </p>
                
                <div className="flex items-center text-sm text-tactical-yellow font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Certified Since 2019</span>
                </div>
              </div>
            </div>

            {/* SOX Compliance */}
            <div className="trust-card group">
              <div className="trust-icon-container bg-gradient-to-br from-military-green/20 to-military-green/5 group-hover:from-military-green/30 group-hover:to-military-green/10">
                <FileText className="h-12 w-12 text-military-green group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-military-green/10 rounded-2xl blur-xl group-hover:bg-military-green/20 transition-colors duration-300"></div>
              </div>
              
              <div className="trust-content">
                <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-4 group-hover:text-military-green transition-colors">
                  SOX Compliance
                </h3>
                
                <p className="text-soft-white-dim mb-6 leading-relaxed">
                  Sarbanes-Oxley Act compliance for financial reporting controls and corporate governance in public companies.
                </p>
                
                <div className="flex items-center text-sm text-military-green font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Annual Audits Passed</span>
                </div>
              </div>
            </div>

            {/* GDPR */}
            <div className="trust-card group">
              <div className="trust-icon-container bg-gradient-to-br from-tactical-yellow/15 to-military-green/15 group-hover:from-tactical-yellow/25 group-hover:to-military-green/25">
                <Globe className="h-12 w-12 text-tactical-yellow group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-tactical-yellow/10 to-military-green/10 rounded-2xl blur-xl group-hover:from-tactical-yellow/20 group-hover:to-military-green/20 transition-colors duration-300"></div>
              </div>
              
              <div className="trust-content">
                <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-4 group-hover:text-tactical-yellow transition-colors">
                  GDPR Compliant
                </h3>
                
                <p className="text-soft-white-dim mb-6 leading-relaxed">
                  General Data Protection Regulation compliance for customer data privacy and protection across European operations.
                </p>
                
                <div className="flex items-center text-sm text-tactical-yellow font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>EU Privacy Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Compliance Badges */}
          <div className="bg-gradient-to-r from-jet-black-light/80 to-jet-black-light/40 border border-tactical-yellow/20 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-6 text-center">
              Additional Banking Certifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-space-grotesk font-bold text-tactical-yellow mb-2">ISO 27001</div>
                <div className="text-sm text-soft-white-dim">Information Security</div>
              </div>
              <div>
                <div className="text-2xl font-space-grotesk font-bold text-military-green mb-2">SOC 2 Type II</div>
                <div className="text-sm text-soft-white-dim">Security Controls</div>
              </div>
              <div>
                <div className="text-2xl font-space-grotesk font-bold text-tactical-yellow mb-2">FFIEC</div>
                <div className="text-sm text-soft-white-dim">US Banking Guidance</div>
              </div>
              <div>
                <div className="text-2xl font-space-grotesk font-bold text-military-green mb-2">Basel III</div>
                <div className="text-sm text-soft-white-dim">Risk Management</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Demo CTA Section */}
      <section id="demo-cta" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black to-jet-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-jet-black-light/80 to-jet-black-light/40 border border-tactical-yellow/20 rounded-3xl p-12 backdrop-blur-sm text-center">
            <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold text-soft-white mb-6">
              Ready to Secure Your Banking Operations?
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim mb-8 max-w-3xl mx-auto leading-relaxed">
              Join 150+ financial institutions worldwide who trust CyRoc to protect their most critical assets and maintain regulatory compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button className="btn-primary-large group">
                <span>Request a Demo</span>
                <Play className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary-large group">
                <span>Download Banking Security Guide</span>
                <FileText className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-tactical-yellow/10">
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-tactical-yellow mb-1">150+</div>
                <div className="text-sm text-soft-white-dim">Banking Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-military-green mb-1">$2.5B+</div>
                <div className="text-sm text-soft-white-dim">Assets Protected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-tactical-yellow mb-1">99.9%</div>
                <div className="text-sm text-soft-white-dim">Fraud Detection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-military-green mb-1">35+</div>
                <div className="text-sm text-soft-white-dim">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BanksFintech;