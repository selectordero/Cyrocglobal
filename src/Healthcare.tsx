import React, { useState, useEffect } from 'react';
import { Shield, Heart, ArrowRight, CheckCircle, Users, Award, Globe, Target, Lock, Eye, Brain, AlertTriangle, FileText, TrendingUp, Activity, Clock, MapPin, Star, ChevronLeft, ChevronRight, Play, ExternalLink, Stethoscope, Database, Wifi, Monitor } from 'lucide-react';
import CyRocLogo from './components/CyRocLogo';

/**
 * HEALTHCARE PAGE - SERVICE MAPPING ANNOTATIONS
 * 
 * Healthcare-specific implementation of core services:
 * 
 * RED TEAMING / PENETRATION TESTING:
 * - "Medical Device Security" - IoT and medical device penetration testing
 * - HIPAA compliance validation through security assessments
 * - Healthcare network penetration testing
 * 
 * CLOUD SECURITY ARCHITECTURE AND SAAS:
 * - "Electronic Health Records Protection" - cloud-based EHR security
 * - "Telemedicine & Remote Care Security" - SaaS platform security
 * - Healthcare cloud compliance (HIPAA, HITECH)
 * 
 * Cross-references: Solutions.tsx (cloud security), Industries.tsx (healthcare sector)
 */
function Healthcare() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "CyRoc's HIPAA compliance automation has transformed our data protection processes. We now maintain compliance across 15 hospitals with 99.9% accuracy while reducing manual oversight by 80%.",
      author: "Dr. Jennifer Martinez",
      role: "Chief Medical Information Officer",
      company: "Regional Health System",
      location: "California, USA",
      rating: 5,
      metrics: "80% reduction in manual compliance work"
    },
    {
      id: 2,
      quote: "Their medical device security assessment identified critical vulnerabilities in our IoT infrastructure that we never knew existed. The remediation plan was comprehensive and practical.",
      author: "Michael Thompson",
      role: "Director of IT Security",
      company: "Metropolitan Medical Center",
      location: "Texas, USA",
      rating: 5,
      metrics: "100% medical device vulnerability coverage"
    },
    {
      id: 3,
      quote: "The telemedicine security platform enabled us to safely expand remote care during the pandemic while maintaining the highest patient privacy standards. Absolutely essential for modern healthcare.",
      author: "Dr. Sarah Kim",
      role: "Chief Technology Officer",
      company: "Digital Health Innovations",
      location: "New York, USA",
      rating: 5,
      metrics: "500,000+ secure telemedicine sessions"
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
        <div className="absolute inset-0 bg-gradient-to-br from-jet-black via-jet-black to-tactical-yellow/15"></div>
        
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
          <Heart className="h-8 w-8" />
        </div>
        <div className="absolute bottom-32 left-20 text-military-green/30 animate-float-delayed">
          <Monitor className="h-12 w-12" />
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
              <span className="text-sm font-medium text-tactical-yellow">HEALTHCARE SECURITY SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-space-grotesk text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
              <span className="block text-soft-white">Patient Data</span>
              <span className="block text-gradient glow-effect">Deserves the</span>
              <span className="block text-tactical-yellow text-5xl md:text-6xl lg:text-7xl mt-4">
                Highest Protection.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl lg:text-3xl text-soft-white-dim max-w-5xl mx-auto mb-12 leading-relaxed font-light">
              CyRoc secures healthcare organizations with 
              <span className="text-tactical-yellow font-medium"> HIPAA compliance automation</span>, 
              <span className="text-military-green font-medium"> medical device security</span>, and 
              <span className="text-tactical-yellow font-medium"> patient privacy protection</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="btn-primary-large group">
              <span>Request HIPAA Assessment</span>
              <Heart className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary-large group">
              <span>View Healthcare Case Studies</span>
              <FileText className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Healthcare Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "200+", label: "Healthcare Clients", sublabel: "Hospitals & Clinics" },
              { value: "25+", label: "Countries", sublabel: "Global Healthcare" },
              { value: "99.9%", label: "HIPAA Compliance", sublabel: "Accuracy Rate" },
              { value: "5M+", label: "Patient Records", sublabel: "Protected Daily" }
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
              <span className="text-sm font-medium text-tactical-yellow tracking-wider">HEALTHCARE CHALLENGES</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Critical Healthcare</span>
              <span className="block text-gradient glow-effect">Security Challenges</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Unique security challenges facing modern healthcare organizations and patient care
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Heart,
                title: "HIPAA Compliance & Patient Privacy",
                description: "Comprehensive patient data protection with automated HIPAA compliance monitoring, breach detection, and privacy controls across all healthcare systems and workflows.",
                challenges: ["Patient data encryption", "Access control automation", "Breach notification", "Audit trail management"]
              },
              {
                icon: Monitor,
                title: "Medical Device Security",
                description: "IoT medical device security with vulnerability assessments, network segmentation, and continuous monitoring of connected healthcare equipment and systems.",
                challenges: ["IoT device vulnerabilities", "Legacy system integration", "Network segmentation", "Device lifecycle management"]
              },
              {
                icon: Database,
                title: "Electronic Health Records Protection",
                description: "EHR system security with data integrity protection, secure sharing protocols, and interoperability security across healthcare networks and providers.",
                challenges: ["Data integrity assurance", "Secure interoperability", "Version control", "Multi-provider access"]
              },
              {
                icon: Wifi,
                title: "Telemedicine & Remote Care Security",
                description: "Secure telemedicine platforms with end-to-end encryption, identity verification, and compliance controls for remote patient care and consultation.",
                challenges: ["Video encryption", "Identity verification", "Remote access security", "Mobile device management"]
              }
            ].map((problem, index) => (
              <div key={index} className="service-card group">
                <div className="service-icon-container bg-gradient-to-br from-tactical-yellow/20 to-military-green/10 group-hover:from-tactical-yellow/30 group-hover:to-military-green/20">
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
              <span className="text-sm font-medium text-military-green tracking-wider">HEALTHCARE ARCHITECTURE</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Healthcare Security</span>
              <span className="block text-gradient glow-effect">Solution Stack</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Comprehensive security architecture designed specifically for healthcare environments
            </p>
          </div>

          {/* Solution Stack Layers */}
          <div className="space-y-8 mb-16">
            {/* Layer 1: Patient Data Protection */}
            <div className="solution-card group">
              <div className="solution-header">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-space-grotesk text-2xl font-bold text-tactical-yellow">
                    🏥 Patient Data Protection Layer
                  </h3>
                  <div className="text-sm text-soft-white-dim">HIPAA Compliance</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">HIPAA Automation</h4>
                    <p className="text-sm text-soft-white-dim">Automated compliance monitoring and breach detection</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Data Encryption</h4>
                    <p className="text-sm text-soft-white-dim">End-to-end encryption for patient health information</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Access Controls</h4>
                    <p className="text-sm text-soft-white-dim">Role-based access and minimum necessary standards</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 2: Medical Device Security */}
            <div className="solution-card group">
              <div className="solution-header">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-space-grotesk text-2xl font-bold text-military-green">
                    🔬 Medical Device Security Layer
                  </h3>
                  <div className="text-sm text-soft-white-dim">IoT Healthcare Security</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-jet-black-light/50 border border-military-green/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Device Discovery</h4>
                    <p className="text-sm text-soft-white-dim">Automated medical device inventory and classification</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-military-green/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Vulnerability Assessment</h4>
                    <p className="text-sm text-soft-white-dim">Continuous security scanning of medical equipment</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-military-green/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Network Segmentation</h4>
                    <p className="text-sm text-soft-white-dim">Isolated networks for critical medical devices</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 3: Telemedicine Security */}
            <div className="solution-card group">
              <div className="solution-header">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-space-grotesk text-2xl font-bold text-tactical-yellow">
                    📱 Telemedicine Security Layer
                  </h3>
                  <div className="text-sm text-soft-white-dim">Remote Care Protection</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Secure Video Platform</h4>
                    <p className="text-sm text-soft-white-dim">HIPAA-compliant video conferencing and consultation</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Identity Verification</h4>
                    <p className="text-sm text-soft-white-dim">Multi-factor authentication for patients and providers</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Mobile Security</h4>
                    <p className="text-sm text-soft-white-dim">Secure mobile apps and device management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Partners */}
          <div className="text-center">
            <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-8">
              Trusted Healthcare Technology Partners
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Epic Systems', 'Cerner', 'Allscripts', 'athenahealth', 'Philips Healthcare', 'GE Healthcare'].map((partner, index) => (
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
            <div className="inline-flex items-center space-x-2 bg-tactical-yellow/10 border border-tactical-yellow/20 rounded-full px-6 py-3 mb-8">
              <Star className="h-5 w-5 text-tactical-yellow" />
              <span className="text-sm font-medium text-tactical-yellow tracking-wider">PATIENT CARE SUCCESS</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Trusted by</span>
              <span className="block text-gradient glow-effect">Healthcare Leaders</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              See how healthcare organizations have improved patient care while strengthening security
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
                  <Heart className="h-5 w-5 text-tactical-yellow" />
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
              <span className="text-sm font-medium text-military-green tracking-wider">HEALTHCARE COMPLIANCE</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Healthcare</span>
              <span className="block text-gradient glow-effect">Compliance Standards</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Meeting the highest regulatory standards for healthcare data protection and patient privacy
            </p>
          </div>

          {/* Compliance Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* HIPAA */}
            <div className="trust-card group">
              <div className="trust-icon-container bg-gradient-to-br from-tactical-yellow/20 to-tactical-yellow/5 group-hover:from-tactical-yellow/30 group-hover:to-tactical-yellow/10">
                <Heart className="h-12 w-12 text-tactical-yellow group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-tactical-yellow/10 rounded-2xl blur-xl group-hover:bg-tactical-yellow/20 transition-colors duration-300"></div>
              </div>
              
              <div className="trust-content">
                <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-4 group-hover:text-tactical-yellow transition-colors">
                  HIPAA Compliant
                </h3>
                
                <p className="text-soft-white-dim mb-6 leading-relaxed">
                  Health Insurance Portability and Accountability Act compliance for patient health information protection and privacy.
                </p>
                
                <div className="flex items-center text-sm text-tactical-yellow font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Certified Since 2019</span>
                </div>
              </div>
            </div>

            {/* HITECH */}
            <div className="trust-card group">
              <div className="trust-icon-container bg-gradient-to-br from-military-green/20 to-military-green/5 group-hover:from-military-green/30 group-hover:to-military-green/10">
                <Lock className="h-12 w-12 text-military-green group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-military-green/10 rounded-2xl blur-xl group-hover:bg-military-green/20 transition-colors duration-300"></div>
              </div>
              
              <div className="trust-content">
                <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-4 group-hover:text-military-green transition-colors">
                  HITECH Act
                </h3>
                
                <p className="text-soft-white-dim mb-6 leading-relaxed">
                  Health Information Technology for Economic and Clinical Health Act compliance for electronic health records security.
                </p>
                
                <div className="flex items-center text-sm text-military-green font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Full Compliance</span>
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
                  General Data Protection Regulation compliance for patient data privacy in European healthcare operations.
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
              Additional Healthcare Certifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-space-grotesk font-bold text-tactical-yellow mb-2">FDA 21 CFR</div>
                <div className="text-sm text-soft-white-dim">Medical Device Security</div>
              </div>
              <div>
                <div className="text-2xl font-space-grotesk font-bold text-military-green mb-2">HL7 FHIR</div>
                <div className="text-sm text-soft-white-dim">Interoperability</div>
              </div>
              <div>
                <div className="text-2xl font-space-grotesk font-bold text-tactical-yellow mb-2">DICOM</div>
                <div className="text-sm text-soft-white-dim">Medical Imaging</div>
              </div>
              <div>
                <div className="text-2xl font-space-grotesk font-bold text-military-green mb-2">IHE</div>
                <div className="text-sm text-soft-white-dim">Healthcare Integration</div>
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
              Ready to Secure Your Healthcare Organization?
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim mb-8 max-w-3xl mx-auto leading-relaxed">
              Join 200+ healthcare organizations worldwide who trust CyRoc to protect patient data and maintain HIPAA compliance while enabling better patient care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button className="btn-primary-large group">
                <span>Request HIPAA Assessment</span>
                <Heart className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary-large group">
                <span>Download Healthcare Security Guide</span>
                <FileText className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-tactical-yellow/10">
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-tactical-yellow mb-1">200+</div>
                <div className="text-sm text-soft-white-dim">Healthcare Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-military-green mb-1">5M+</div>
                <div className="text-sm text-soft-white-dim">Patient Records Protected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-tactical-yellow mb-1">99.9%</div>
                <div className="text-sm text-soft-white-dim">HIPAA Compliance Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-military-green mb-1">25+</div>
                <div className="text-sm text-soft-white-dim">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Healthcare;