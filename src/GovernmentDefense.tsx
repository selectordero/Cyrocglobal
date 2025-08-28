import React, { useState, useEffect } from 'react';
import { Shield, ShieldCheck, ArrowRight, CheckCircle, Users, Award, Globe, Target, Lock, Eye, Brain, AlertTriangle, FileText, TrendingUp, Activity, Clock, MapPin, Star, ChevronLeft, ChevronRight, Play, ExternalLink, Radar, Cpu, Network, Database } from 'lucide-react';

/**
 * GOVERNMENT & DEFENSE PAGE - SERVICE MAPPING ANNOTATIONS
 * 
 * Specialized location for advanced security services:
 * 
 * RED TEAMING / PENETRATION TESTING:
 * - "APT Detection & Response" - advanced persistent threat simulation
 * - "Advanced threat hunting" - proactive red team exercises
 * - Government-grade security testing and validation
 * 
 * CYBER COUNTERINTELLIGENCE:
 * - "Intelligence & Surveillance" - dedicated counterintelligence section
 * - "Threat Detection & Intelligence Layer" - intelligence fusion capabilities
 * - "Behavioral Analytics" - insider threat detection and analysis
 * - Nation-state threat attribution and analysis
 * 
 * Cross-references: AIPlatform.tsx (AI intelligence), Solutions.tsx (threat hunting)
 */
function GovernmentDefense() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "CyRoc's APT detection capabilities have been instrumental in protecting our critical infrastructure from nation-state attacks. Their threat hunting team identified and neutralized three advanced campaigns that our previous systems missed entirely.",
      author: "Colonel James Patterson",
      role: "Chief Information Security Officer",
      company: "Department of Defense",
      location: "Washington, DC",
      rating: 5,
      metrics: "3 APT campaigns neutralized"
    },
    {
      id: 2,
      quote: "The FISMA compliance automation has streamlined our authorization processes across 50+ systems. What used to take months now happens in weeks, with continuous monitoring ensuring ongoing compliance.",
      author: "Dr. Maria Gonzalez",
      role: "Deputy CIO for Cybersecurity",
      company: "Federal Agency",
      location: "Virginia, USA",
      rating: 5,
      metrics: "75% faster compliance processes"
    },
    {
      id: 3,
      quote: "Their classified data protection framework enabled us to modernize our legacy systems while maintaining the highest security standards. The zero-trust implementation was seamless and effective.",
      author: "Admiral Robert Chen",
      role: "Director of Information Systems",
      company: "Defense Intelligence Agency",
      location: "Classified Location",
      rating: 5,
      metrics: "100% classified data protection"
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
          <ShieldCheck className="h-8 w-8" />
        </div>
        <div className="absolute bottom-32 left-20 text-tactical-yellow/30 animate-float-delayed">
          <Radar className="h-12 w-12" />
        </div>
        <div className="absolute top-1/3 right-1/3 text-military-green/15 animate-float-slow">
          <Lock className="h-6 w-6" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            {/* Status Indicator */}
            <div className="inline-flex items-center space-x-2 bg-military-green/20 border border-military-green/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-tactical-yellow rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-tactical-yellow">GOVERNMENT & DEFENSE SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-space-grotesk text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
              <span className="block text-soft-white">National Security</span>
              <span className="block text-gradient glow-effect">Demands Advanced</span>
              <span className="block text-military-green text-5xl md:text-6xl lg:text-7xl mt-4">
                Cyber Defense.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl lg:text-3xl text-soft-white-dim max-w-5xl mx-auto mb-12 leading-relaxed font-light">
              CyRoc protects government agencies and defense contractors with 
              <span className="text-military-green font-medium"> military-grade security</span>, 
              <span className="text-tactical-yellow font-medium"> APT detection</span>, and 
              <span className="text-military-green font-medium"> classified data protection</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="btn-primary-large group">
              <span>Request Security Briefing</span>
              <ShieldCheck className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary-large group">
              <span>View Clearance Requirements</span>
              <FileText className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Government Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "75+", label: "Government Clients", sublabel: "Federal & State Agencies" },
              { value: "20+", label: "Countries", sublabel: "Allied Nations" },
              { value: "Top Secret", label: "Clearance Level", sublabel: "Highest Classification" },
              { value: "99.99%", label: "Threat Detection", sublabel: "APT & Nation-State" }
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
              <span className="text-sm font-medium text-military-green tracking-wider">NATIONAL SECURITY CHALLENGES</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Critical Threats</span>
              <span className="block text-gradient glow-effect">We Counter</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Advanced persistent threats and nation-state attacks targeting government infrastructure
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Radar,
                title: "Advanced Persistent Threats (APTs)",
                description: "Nation-state cyber attacks targeting classified systems, critical infrastructure, and sensitive government operations with sophisticated, long-term infiltration campaigns.",
                challenges: ["Nation-state attribution", "Zero-day exploits", "Lateral movement detection", "Exfiltration prevention"]
              },
              {
                icon: Lock,
                title: "Classified Data Protection",
                description: "Multi-level security for classified information systems, ensuring proper compartmentalization and access controls across different classification levels.",
                challenges: ["Multi-level security", "Compartmentalized access", "Cross-domain solutions", "Insider threat detection"]
              },
              {
                icon: Network,
                title: "Critical Infrastructure Security",
                description: "Protection of essential government services, power grids, communication networks, and defense systems from cyber attacks and disruption.",
                challenges: ["SCADA security", "Legacy system protection", "Air-gapped networks", "Operational continuity"]
              },
              {
                icon: Eye,
                title: "Intelligence & Surveillance",
                description: "Secure intelligence gathering, analysis, and sharing capabilities with advanced threat detection and counterintelligence measures.",
                challenges: ["Intelligence sharing", "Threat attribution", "Counterintelligence", "Operational security"]
              }
            ].map((problem, index) => (
              <div key={index} className="service-card group">
                <div className="service-icon-container bg-gradient-to-br from-military-green/20 to-military-green/5 group-hover:from-military-green/30 group-hover:to-military-green/10">
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
              <span className="text-sm font-medium text-tactical-yellow tracking-wider">DEFENSE ARCHITECTURE</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Military-Grade</span>
              <span className="block text-gradient glow-effect">Security Stack</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Comprehensive defense-in-depth architecture for government and military environments
            </p>
          </div>

          {/* Solution Stack Layers */}
          <div className="space-y-8 mb-16">
            {/* Layer 1: Threat Detection & Intelligence */}
            <div className="solution-card group">
              <div className="solution-header">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-space-grotesk text-2xl font-bold text-military-green">
                    🎯 Threat Detection & Intelligence Layer
                  </h3>
                  <div className="text-sm text-soft-white-dim">Advanced Threat Hunting</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-jet-black-light/50 border border-military-green/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">APT Detection Engine</h4>
                    <p className="text-sm text-soft-white-dim">Advanced persistent threat detection with nation-state attribution</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-military-green/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Threat Intelligence Fusion</h4>
                    <p className="text-sm text-soft-white-dim">Multi-source intelligence correlation and analysis</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-military-green/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Behavioral Analytics</h4>
                    <p className="text-sm text-soft-white-dim">User and entity behavior analysis for insider threats</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 2: Classified Data Protection */}
            <div className="solution-card group">
              <div className="solution-header">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-space-grotesk text-2xl font-bold text-tactical-yellow">
                    🔒 Classified Data Protection Layer
                  </h3>
                  <div className="text-sm text-soft-white-dim">Multi-Level Security</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Multi-Level Security (MLS)</h4>
                    <p className="text-sm text-soft-white-dim">Compartmentalized access controls for classified systems</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Cross-Domain Solutions</h4>
                    <p className="text-sm text-soft-white-dim">Secure data transfer between classification levels</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Cryptographic Controls</h4>
                    <p className="text-sm text-soft-white-dim">NSA-approved encryption for sensitive data</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 3: Infrastructure Hardening */}
            <div className="solution-card group">
              <div className="solution-header">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-space-grotesk text-2xl font-bold text-military-green">
                    🛡️ Infrastructure Hardening Layer
                  </h3>
                  <div className="text-sm text-soft-white-dim">Defense-in-Depth</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-jet-black-light/50 border border-military-green/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">STIG Compliance</h4>
                    <p className="text-sm text-soft-white-dim">Security Technical Implementation Guide hardening</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-military-green/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Air-Gapped Networks</h4>
                    <p className="text-sm text-soft-white-dim">Isolated network security for critical systems</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-military-green/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Continuous Monitoring</h4>
                    <p className="text-sm text-soft-white-dim">Real-time security posture assessment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Partners */}
          <div className="text-center">
            <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-8">
              Trusted by Defense & Intelligence Communities
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['DISA Approved', 'NSA Certified', 'FISMA Compliant', 'FedRAMP Authorized', 'NIST Framework', 'DoD 8570 Certified'].map((cert, index) => (
                <span key={index} className="solution-tech-badge">
                  {cert}
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
              <span className="text-sm font-medium text-military-green tracking-wider">MISSION SUCCESS</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Trusted by</span>
              <span className="block text-gradient glow-effect">Defense Leaders</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              See how government agencies and defense contractors have strengthened their security posture
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
                  <ShieldCheck className="h-5 w-5 text-military-green" />
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
              <span className="text-sm font-medium text-tactical-yellow tracking-wider">GOVERNMENT CERTIFICATIONS</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Defense</span>
              <span className="block text-gradient glow-effect">Compliance Standards</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Meeting the highest security standards for government and defense operations
            </p>
          </div>

          {/* Compliance Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* FISMA */}
            <div className="trust-card group">
              <div className="trust-icon-container bg-gradient-to-br from-military-green/20 to-military-green/5 group-hover:from-military-green/30 group-hover:to-military-green/10">
                <ShieldCheck className="h-12 w-12 text-military-green group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-military-green/10 rounded-2xl blur-xl group-hover:bg-military-green/20 transition-colors duration-300"></div>
              </div>
              
              <div className="trust-content">
                <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-4 group-hover:text-military-green transition-colors">
                  FISMA Compliant
                </h3>
                
                <p className="text-soft-white-dim mb-6 leading-relaxed">
                  Federal Information Security Management Act compliance for government information systems and data protection.
                </p>
                
                <div className="flex items-center text-sm text-military-green font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>ATO Authorized</span>
                </div>
              </div>
            </div>

            {/* FedRAMP */}
            <div className="trust-card group">
              <div className="trust-icon-container bg-gradient-to-br from-tactical-yellow/20 to-tactical-yellow/5 group-hover:from-tactical-yellow/30 group-hover:to-tactical-yellow/10">
                <Lock className="h-12 w-12 text-tactical-yellow group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-tactical-yellow/10 rounded-2xl blur-xl group-hover:bg-tactical-yellow/20 transition-colors duration-300"></div>
              </div>
              
              <div className="trust-content">
                <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-4 group-hover:text-tactical-yellow transition-colors">
                  FedRAMP Authorized
                </h3>
                
                <p className="text-soft-white-dim mb-6 leading-relaxed">
                  Federal Risk and Authorization Management Program authorization for cloud services used by government agencies.
                </p>
                
                <div className="flex items-center text-sm text-tactical-yellow font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>High Impact Level</span>
                </div>
              </div>
            </div>

            {/* NIST Framework */}
            <div className="trust-card group">
              <div className="trust-icon-container bg-gradient-to-br from-military-green/15 to-tactical-yellow/15 group-hover:from-military-green/25 group-hover:to-tactical-yellow/25">
                <Globe className="h-12 w-12 text-military-green group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-military-green/10 to-tactical-yellow/10 rounded-2xl blur-xl group-hover:from-military-green/20 group-hover:to-tactical-yellow/20 transition-colors duration-300"></div>
              </div>
              
              <div className="trust-content">
                <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-4 group-hover:text-military-green transition-colors">
                  NIST Framework
                </h3>
                
                <p className="text-soft-white-dim mb-6 leading-relaxed">
                  National Institute of Standards and Technology cybersecurity framework implementation and compliance.
                </p>
                
                <div className="flex items-center text-sm text-military-green font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Full Implementation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Compliance Badges */}
          <div className="bg-gradient-to-r from-jet-black-light/80 to-jet-black-light/40 border border-military-green/20 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-6 text-center">
              Additional Defense Certifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-space-grotesk font-bold text-military-green mb-2">DISA STIG</div>
                <div className="text-sm text-soft-white-dim">Security Hardening</div>
              </div>
              <div>
                <div className="text-2xl font-space-grotesk font-bold text-tactical-yellow mb-2">DoD 8570</div>
                <div className="text-sm text-soft-white-dim">Personnel Certification</div>
              </div>
              <div>
                <div className="text-2xl font-space-grotesk font-bold text-military-green mb-2">CJIS</div>
                <div className="text-sm text-soft-white-dim">Criminal Justice</div>
              </div>
              <div>
                <div className="text-2xl font-space-grotesk font-bold text-tactical-yellow mb-2">ITAR</div>
                <div className="text-sm text-soft-white-dim">Export Control</div>
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
              Ready to Strengthen National Security?
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim mb-8 max-w-3xl mx-auto leading-relaxed">
              Join 75+ government agencies and defense contractors who trust CyRoc to protect their most sensitive operations and classified information.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button className="btn-primary-large group">
                <span>Request Security Briefing</span>
                <ShieldCheck className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary-large group">
                <span>Download Defense Security Guide</span>
                <FileText className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-military-green/10">
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-military-green mb-1">75+</div>
                <div className="text-sm text-soft-white-dim">Government Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-tactical-yellow mb-1">Top Secret</div>
                <div className="text-sm text-soft-white-dim">Clearance Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-military-green mb-1">99.99%</div>
                <div className="text-sm text-soft-white-dim">Threat Detection</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-tactical-yellow mb-1">20+</div>
                <div className="text-sm text-soft-white-dim">Allied Nations</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GovernmentDefense;