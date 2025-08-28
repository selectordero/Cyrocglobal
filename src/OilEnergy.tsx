import React, { useState, useEffect } from 'react';
import { Shield, Zap, ArrowRight, CheckCircle, Users, Award, Globe, Target, Lock, Eye, Brain, AlertTriangle, FileText, TrendingUp, Activity, Clock, MapPin, Star, ChevronLeft, ChevronRight, Play, ExternalLink, Cpu, Network, Database, Server, Gauge, Factory } from 'lucide-react';
import CyRocLogo from './components/CyRocLogo';

/**
 * OIL & ENERGY PAGE - SERVICE MAPPING ANNOTATIONS
 * 
 * Critical infrastructure-specific implementation of core services:
 * 
 * RED TEAMING / PENETRATION TESTING:
 * - "SCADA & Industrial Control Systems" - specialized OT/ICS penetration testing
 * - Critical infrastructure security assessments
 * - Industrial protocol security testing (Modbus, DNP3)
 * 
 * CYBER COUNTERINTELLIGENCE:
 * - "Operational Technology Security" - OT-specific threat intelligence
 * - Critical infrastructure threat monitoring and analysis
 * - Nation-state threat detection for energy sector
 * 
 * Cross-references: Solutions.tsx (cyber defense), Industries.tsx (energy sector)
 */
function OilEnergy() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "CyRoc's SCADA security implementation has been transformational for our pipeline operations. We now have real-time threat detection across 2,000+ miles of critical infrastructure with zero operational disruption.",
      author: "Robert Anderson",
      role: "Chief Operations Officer",
      company: "TransEnergy Pipeline Corp",
      location: "Texas, USA",
      rating: 5,
      metrics: "2,000+ miles of pipeline secured"
    },
    {
      id: 2,
      quote: "Their industrial cybersecurity framework helped us achieve 99.99% uptime while maintaining the highest security standards. The air-gapped network protection is exactly what our refinery needed.",
      author: "Dr. Elena Petrov",
      role: "Director of Industrial Security",
      company: "Global Refining Solutions",
      location: "Norway",
      rating: 5,
      metrics: "99.99% operational uptime maintained"
    },
    {
      id: 3,
      quote: "The critical infrastructure resilience program enabled us to modernize our legacy systems while maintaining operational continuity. Their expertise in energy sector threats is unmatched.",
      author: "James Mitchell",
      role: "VP of Cybersecurity",
      company: "National Power Grid",
      location: "United Kingdom",
      rating: 5,
      metrics: "100% legacy system modernization"
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
        <div className="absolute inset-0 bg-gradient-to-br from-jet-black via-jet-black to-military-green/20"></div>
        
        {/* Circuit Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-military-green/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-32 h-32 border border-tactical-yellow/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 border border-military-green/20 rounded-full animate-pulse delay-500"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(58, 95, 58, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(58, 95, 58, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 text-military-green/20 animate-float">
          <Zap className="h-8 w-8" />
        </div>
        <div className="absolute bottom-32 left-20 text-tactical-yellow/30 animate-float-delayed">
          <Factory className="h-12 w-12" />
        </div>
        <div className="absolute top-1/3 right-1/3 text-military-green/15 animate-float-slow">
          <Gauge className="h-6 w-6" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            {/* Status Indicator */}
            <div className="inline-flex items-center space-x-2 bg-military-green/20 border border-military-green/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-tactical-yellow rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-tactical-yellow">OIL & ENERGY SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-space-grotesk text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
              <span className="block text-soft-white">Critical Infrastructure</span>
              <span className="block text-gradient glow-effect">Demands Unbreakable</span>
              <span className="block text-military-green text-5xl md:text-6xl lg:text-7xl mt-4">
                Security.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl lg:text-3xl text-soft-white-dim max-w-5xl mx-auto mb-12 leading-relaxed font-light">
              CyRoc protects oil & energy operations with 
              <span className="text-military-green font-medium"> SCADA security</span>, 
              <span className="text-tactical-yellow font-medium"> industrial control systems</span>, and 
              <span className="text-military-green font-medium"> operational resilience</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="btn-primary-large group">
              <span>Request Infrastructure Assessment</span>
              <Zap className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary-large group">
              <span>View Energy Case Studies</span>
              <FileText className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Energy Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "100+", label: "Energy Clients", sublabel: "Oil, Gas & Power" },
              { value: "30+", label: "Countries", sublabel: "Global Operations" },
              { value: "99.99%", label: "Uptime SLA", sublabel: "Critical Infrastructure" },
              { value: "24/7", label: "Monitoring", sublabel: "Industrial Systems" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-space-grotesk font-bold text-military-green mb-2 group-hover:scale-110 transition-transform">
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
          <div className="w-6 h-10 border-2 border-military-green/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-military-green rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section id="problems" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black to-jet-black-light">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-military-green/10 border border-military-green/20 rounded-full px-6 py-3 mb-8">
              <AlertTriangle className="h-5 w-5 text-military-green" />
              <span className="text-sm font-medium text-military-green tracking-wider">ENERGY SECTOR CHALLENGES</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Critical Infrastructure</span>
              <span className="block text-gradient glow-effect">Threats We Counter</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Unique security challenges facing oil, gas, and energy infrastructure operations
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Gauge,
                title: "SCADA & Industrial Control Systems",
                description: "Supervisory Control and Data Acquisition system security with real-time monitoring, anomaly detection, and protection against industrial cyber attacks targeting critical operations.",
                challenges: ["SCADA vulnerability assessment", "HMI security hardening", "Protocol security (Modbus, DNP3)", "Real-time threat detection"]
              },
              {
                icon: Factory,
                title: "Operational Technology Security",
                description: "Comprehensive OT security for industrial networks, legacy systems, and air-gapped environments with specialized protocols and operational continuity requirements.",
                challenges: ["OT/IT network segmentation", "Legacy system protection", "Air-gapped security", "Operational continuity"]
              },
              {
                icon: Network,
                title: "Pipeline & Distribution Security",
                description: "End-to-end pipeline security with geographic monitoring, remote terminal unit protection, and distributed control system security across vast infrastructure networks.",
                challenges: ["Geographic distribution", "Remote monitoring", "Pipeline integrity", "Environmental compliance"]
              },
              {
                icon: Zap,
                title: "Smart Grid & Power Systems",
                description: "Smart grid cybersecurity with advanced metering infrastructure protection, demand response security, and power generation facility protection against grid-targeted attacks.",
                challenges: ["Smart meter security", "Grid stability protection", "Demand response security", "Generation facility protection"]
              }
            ].map((problem, index) => (
              <div key={index} className="service-card group">
                <div className="service-icon-container bg-gradient-to-br from-military-green/20 to-tactical-yellow/10 group-hover:from-military-green/30 group-hover:to-tactical-yellow/20">
                  <problem.icon className="h-12 w-12 text-military-green group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-military-green/10 rounded-2xl blur-xl group-hover:bg-military-green/20 transition-colors duration-300"></div>
                </div>
                
                <div className="service-content">
                  <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-4 group-hover:text-military-green transition-colors">
                    {problem.title}
                  </h3>
                  
                  <p className="text-soft-white-dim mb-6 leading-relaxed">
                    {problem.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {problem.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-center text-sm text-soft-white-dim">
                        <CheckCircle className="h-4 w-4 text-military-green mr-3 flex-shrink-0" />
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
            <div className="inline-flex items-center space-x-2 bg-tactical-yellow/10 border border-tactical-yellow/20 rounded-full px-6 py-3 mb-8">
              <Target className="h-5 w-5 text-tactical-yellow" />
              <span className="text-sm font-medium text-tactical-yellow tracking-wider">INDUSTRIAL ARCHITECTURE</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Industrial Cybersecurity</span>
              <span className="block text-gradient glow-effect">Solution Stack</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Comprehensive security architecture designed specifically for energy and industrial environments
            </p>
          </div>

          {/* Solution Stack Layers */}
          <div className="space-y-8 mb-16">
            {/* Layer 1: SCADA & Control Systems */}
            <div className="solution-card group">
              <div className="solution-header">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-space-grotesk text-2xl font-bold text-military-green">
                    ⚡ SCADA & Control Systems Layer
                  </h3>
                  <div className="text-sm text-soft-white-dim">Industrial Control Security</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-jet-black-light/50 border border-military-green/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">SCADA Security</h4>
                    <p className="text-sm text-soft-white-dim">Real-time monitoring and protection of supervisory control systems</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-military-green/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">HMI Protection</h4>
                    <p className="text-sm text-soft-white-dim">Human-machine interface security and access controls</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-military-green/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Protocol Security</h4>
                    <p className="text-sm text-soft-white-dim">Industrial protocol protection (Modbus, DNP3, IEC 61850)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 2: Network Segmentation */}
            <div className="solution-card group">
              <div className="solution-header">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-space-grotesk text-2xl font-bold text-tactical-yellow">
                    🔒 Network Segmentation Layer
                  </h3>
                  <div className="text-sm text-soft-white-dim">OT/IT Isolation</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">OT/IT Segmentation</h4>
                    <p className="text-sm text-soft-white-dim">Secure separation of operational and information technology</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Air-Gap Protection</h4>
                    <p className="text-sm text-soft-white-dim">Security for isolated critical control systems</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Secure Remote Access</h4>
                    <p className="text-sm text-soft-white-dim">VPN and secure tunneling for remote operations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 3: Operational Resilience */}
            <div className="solution-card group">
              <div className="solution-header">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-space-grotesk text-2xl font-bold text-military-green">
                    🛡️ Operational Resilience Layer
                  </h3>
                  <div className="text-sm text-soft-white-dim">Business Continuity</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-jet-black-light/50 border border-military-green/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Incident Response</h4>
                    <p className="text-sm text-soft-white-dim">Rapid response for industrial cyber incidents</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-military-green/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Backup Systems</h4>
                    <p className="text-sm text-soft-white-dim">Redundant control systems and failover protection</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-military-green/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Recovery Planning</h4>
                    <p className="text-sm text-soft-white-dim">Business continuity and disaster recovery for operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Partners */}
          <div className="text-center">
            <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-8">
              Trusted Industrial Technology Partners
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Schneider Electric', 'Siemens', 'Rockwell Automation', 'Honeywell', 'ABB', 'Emerson'].map((partner, index) => (
                <span key={index} className="solution-tech-badge">
                  {partner}
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
            <div className="inline-flex items-center space-x-2 bg-military-green/10 border border-military-green/20 rounded-full px-6 py-3 mb-8">
              <Star className="h-5 w-5 text-military-green" />
              <span className="text-sm font-medium text-military-green tracking-wider">OPERATIONAL SUCCESS</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Trusted by</span>
              <span className="block text-gradient glow-effect">Energy Leaders</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              See how energy companies have strengthened their critical infrastructure security
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
                <ChevronLeft className="h-6 w-6 text-military-green group-hover:text-military-green-light transition-colors" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
              <button 
                onClick={nextTestimonial}
                className="blog-nav-btn group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-military-green group-hover:text-military-green-light transition-colors" />
              </button>
            </div>

            {/* Testimonial Content */}
            <div className="bg-gradient-to-b from-jet-black-light/80 to-jet-black-light/40 border border-military-green/20 rounded-3xl p-12 backdrop-blur-sm">
              <div className="text-center">
                {/* Rating Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                    <Star key={index} className="h-6 w-6 text-military-green fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-2xl md:text-3xl font-light text-soft-white mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                {/* Metrics */}
                <div className="inline-flex items-center space-x-2 bg-military-green/10 border border-military-green/20 rounded-full px-6 py-3 mb-8">
                  <Zap className="h-5 w-5 text-military-green" />
                  <span className="text-sm font-medium text-military-green">
                    {testimonials[currentTestimonial].metrics}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-military-green/20 to-tactical-yellow/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-space-grotesk font-bold text-military-green">
                      {testimonials[currentTestimonial].author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-space-grotesk text-xl font-semibold text-soft-white">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-military-green font-medium">
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
                      ? 'bg-military-green scale-110' 
                      : 'bg-military-green/30 hover:bg-military-green/50'
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
            <div className="inline-flex items-center space-x-2 bg-tactical-yellow/10 border border-tactical-yellow/20 rounded-full px-6 py-3 mb-8">
              <Award className="h-5 w-5 text-tactical-yellow" />
              <span className="text-sm font-medium text-tactical-yellow tracking-wider">ENERGY COMPLIANCE</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Energy Sector</span>
              <span className="block text-gradient glow-effect">Compliance Standards</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Meeting the highest regulatory standards for critical infrastructure and energy operations
            </p>
          </div>

          {/* Compliance Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* NERC CIP */}
            <div className="trust-card group">
              <div className="trust-icon-container bg-gradient-to-br from-military-green/20 to-military-green/5 group-hover:from-military-green/30 group-hover:to-military-green/10">
                <Zap className="h-12 w-12 text-military-green group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-military-green/10 rounded-2xl blur-xl group-hover:bg-military-green/20 transition-colors duration-300"></div>
              </div>
              
              <div className="trust-content">
                <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-4 group-hover:text-military-green transition-colors">
                  NERC CIP Compliant
                </h3>
                
                <p className="text-soft-white-dim mb-6 leading-relaxed">
                  North American Electric Reliability Corporation Critical Infrastructure Protection standards for bulk electric system security.
                </p>
                
                <div className="flex items-center text-sm text-military-green font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Full CIP Compliance</span>
                </div>
              </div>
            </div>

            {/* IEC 62443 */}
            <div className="trust-card group">
              <div className="trust-icon-container bg-gradient-to-br from-tactical-yellow/20 to-tactical-yellow/5 group-hover:from-tactical-yellow/30 group-hover:to-tactical-yellow/10">
                <Lock className="h-12 w-12 text-tactical-yellow group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-tactical-yellow/10 rounded-2xl blur-xl group-hover:bg-tactical-yellow/20 transition-colors duration-300"></div>
              </div>
              
              <div className="trust-content">
                <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-4 group-hover:text-tactical-yellow transition-colors">
                  IEC 62443 Certified
                </h3>
                
                <p className="text-soft-white-dim mb-6 leading-relaxed">
                  International Electrotechnical Commission standard for industrial automation and control systems security.
                </p>
                
                <div className="flex items-center text-sm text-tactical-yellow font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Industrial Security Standard</span>
                </div>
              </div>
            </div>

            {/* GDPR */}
            <div className="trust-card group">
              <div className="trust-icon-container bg-gradient-to-br from-military-green/15 to-tactical-yellow/15 group-hover:from-military-green/25 group-hover:to-tactical-yellow/25">
                <Globe className="h-12 w-12 text-military-green group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-military-green/10 to-tactical-yellow/10 rounded-2xl blur-xl group-hover:from-military-green/20 group-hover:to-tactical-yellow/20 transition-colors duration-300"></div>
              </div>
              
              <div className="trust-content">
                <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-4 group-hover:text-military-green transition-colors">
                  GDPR Compliant
                </h3>
                
                <p className="text-soft-white-dim mb-6 leading-relaxed">
                  General Data Protection Regulation compliance for operational data privacy in European energy operations.
                </p>
                
                <div className="flex items-center text-sm text-military-green font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>EU Privacy Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Compliance Badges */}
          <div className="bg-gradient-to-r from-jet-black-light/80 to-jet-black-light/40 border border-military-green/20 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-6 text-center">
              Additional Energy Certifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-space-grotesk font-bold text-military-green mb-2">API 1164</div>
                <div className="text-sm text-soft-white-dim">Pipeline Security</div>
              </div>
              <div>
                <div className="text-2xl font-space-grotesk font-bold text-tactical-yellow mb-2">TSA Pipeline</div>
                <div className="text-sm text-soft-white-dim">Transportation Security</div>
              </div>
              <div>
                <div className="text-2xl font-space-grotesk font-bold text-military-green mb-2">CISA</div>
                <div className="text-sm text-soft-white-dim">Critical Infrastructure</div>
              </div>
              <div>
                <div className="text-2xl font-space-grotesk font-bold text-tactical-yellow mb-2">FERC</div>
                <div className="text-sm text-soft-white-dim">Energy Regulation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Demo CTA Section */}
      <section id="demo-cta" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black to-jet-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-jet-black-light/80 to-jet-black-light/40 border border-military-green/20 rounded-3xl p-12 backdrop-blur-sm text-center">
            <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold text-soft-white mb-6">
              Ready to Secure Your Critical Infrastructure?
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim mb-8 max-w-3xl mx-auto leading-relaxed">
              Join 100+ energy companies worldwide who trust CyRoc to protect their most critical operations and maintain 99.99% uptime while ensuring regulatory compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button className="btn-primary-large group">
                <span>Request Infrastructure Assessment</span>
                <Zap className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary-large group">
                <span>Download Energy Security Guide</span>
                <FileText className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-military-green/10">
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-military-green mb-1">100+</div>
                <div className="text-sm text-soft-white-dim">Energy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-tactical-yellow mb-1">99.99%</div>
                <div className="text-sm text-soft-white-dim">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-military-green mb-1">24/7</div>
                <div className="text-sm text-soft-white-dim">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-tactical-yellow mb-1">30+</div>
                <div className="text-sm text-soft-white-dim">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OilEnergy;