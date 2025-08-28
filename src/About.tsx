import React, { useState, useEffect } from 'react';
import { Shield, Target, Zap, Globe, Users, Award, ArrowRight, CheckCircle, Building2, Heart, Brain, Eye, Clock, MapPin, Linkedin, Twitter, Mail, TrendingUp, Activity, Zap as Lightning } from 'lucide-react';
import CyRocLogo from './components/CyRocLogo';

/**
 * ABOUT PAGE - SERVICE MAPPING ANNOTATIONS
 * 
 * Company foundation and capability overview:
 * 
 * COMPANY FOUNDATION MENTIONS:
 * - "cloud-first security solutions" - establishes cloud security architecture focus
 * - "forensic capability" - establishes fraud investigation and digital forensics
 * - "layered defense" - implies comprehensive penetration testing and validation
 * - "compliance support" - regulatory and audit support across all services
 * 
 * MISSION & VISION ALIGNMENT:
 * - All four core services support the mission of protecting critical infrastructure
 * - Vision of "global standard for intelligent cybersecurity" encompasses all service areas
 * 
 * Cross-references: All service pages support the company mission outlined here
 */
// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
};

function About() {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);

  // Timeline data
  const timelineData = [
    {
      year: "2019",
      title: "Global Foundation",
      description: "CyRoc established with headquarters in New York, focusing on cloud-first security solutions",
      stats: { continents: 1, clients: 10, audits: 5 },
      icon: Building2,
      color: "tactical-yellow"
    },
    {
      year: "2020",
      title: "European Expansion",
      description: "London office opened, SOC 2 compliance achieved, first major banking partnerships",
      stats: { continents: 2, clients: 50, audits: 12 },
      icon: Globe,
      color: "military-green"
    },
    {
      year: "2022",
      title: "APAC Presence",
      description: "Singapore hub launched, ISO 27001 certification, advanced AI threat detection deployed",
      stats: { continents: 3, clients: 200, audits: 25 },
      icon: Shield,
      color: "tactical-yellow"
    },
    {
      year: "2024",
      title: "Global Leadership",
      description: "Oceania office established, 500+ enterprise clients, industry-leading 99.9% SLA achieved",
      stats: { continents: 4, clients: 500, audits: 40 },
      icon: Award,
      color: "military-green"
    }
  ];

  // Auto-advance timeline
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTimelineItem((prev) => (prev + 1) % timelineData.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [timelineData.length]);

  return (
    <div className="min-h-screen bg-jet-black text-soft-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-jet-black/90 backdrop-blur-md border-b border-tactical-yellow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <CyRocLogo />
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-soft-white-dim hover:text-tactical-yellow transition-colors font-medium">Home</a>
              <a href="#about" className="text-tactical-yellow font-medium">About</a>
              <a href="#solutions" className="text-soft-white-dim hover:text-tactical-yellow transition-colors font-medium">Solutions</a>
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
        
        {/* Digital Fortress Overlay */}
        <div className="digital-fortress-overlay">
          {/* Hex Grid Pattern */}
          <div className="hex-grid"></div>
          
          {/* Floating Shield Logo */}
          <div className="floating-shield">
            <Shield className="w-full h-full" />
          </div>
          
          {/* Blinking Data Nodes */}
          <div className="data-nodes">
            <div className="data-node"></div>
            <div className="data-node"></div>
            <div className="data-node"></div>
            <div className="data-node"></div>
            <div className="data-node"></div>
            <div className="data-node"></div>
          </div>
          
          {/* Data Transfer Lines */}
          <div className="data-transfer-lines">
            <svg className="absolute inset-0 w-full h-full">
              <path className="transfer-line" d="M 20,15 Q 60,25 80,35 T 70,60" />
              <path className="transfer-line" d="M 15,60 Q 40,70 60,25 T 80,80" />
              <path className="transfer-line" d="M 80,20 Q 40,40 20,80 T 70,40" />
            </svg>
          </div>
          
          {/* Circuit Lines Background */}
          <div className="circuit-lines"></div>
        </div>
        
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
          <Globe className="h-8 w-8" />
        </div>
        <div className="absolute bottom-32 left-20 text-military-green/30 animate-float-delayed">
          <Shield className="h-12 w-12" />
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
              <span className="text-sm font-medium text-tactical-yellow">ABOUT CYROC</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-space-grotesk text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
              <span className="block text-soft-white">CyRoc is a</span>
              <span className="block text-gradient glow-effect">Digital Shield</span>
              <span className="block text-soft-white text-5xl md:text-6xl lg:text-7xl mt-4">
                for the
                <span className="text-tactical-yellow ml-4">Modern Age.</span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl lg:text-3xl text-soft-white-dim max-w-5xl mx-auto mb-12 leading-relaxed font-light">
              CyRoc is a mission-critical AI cyber defense suite protecting 
              <span className="text-tactical-yellow font-medium"> space, nuclear, water, energy</span>, and 
              <span className="text-military-green font-medium"> infrastructure sectors</span> from 
              <span className="text-tactical-yellow font-medium"> nation-state and AI-driven cyber threats</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="btn-primary-large group">
              <span>Our Story</span>
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary-large group">
              <span>Meet the Team</span>
              <Users className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "2019", label: "Founded", sublabel: "Global Headquarters" },
              { value: "500+", label: "Enterprise Clients", sublabel: "Worldwide" },
              { value: "50+", label: "Countries", sublabel: "Global Presence" },
              { value: "15+", label: "Years Experience", sublabel: "Combined Team" }
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

      {/* Global Timeline Section */}
      <section id="global-timeline" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black to-jet-black-light">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-tactical-yellow/10 border border-tactical-yellow/20 rounded-full px-6 py-3 mb-8">
              <Globe className="h-5 w-5 text-tactical-yellow" />
              <span className="text-sm font-medium text-tactical-yellow tracking-wider">GLOBAL EXPANSION</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Our Journey to</span>
              <span className="block text-gradient glow-effect">Global Leadership</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              From startup to global cybersecurity leader across four continents
            </p>
          </div>

          {/* Animated Stats Bar */}
          <div className="bg-gradient-to-r from-jet-black-light/80 to-jet-black-light/40 border border-tactical-yellow/20 rounded-3xl p-8 mb-16 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Active Continents */}
              <div className="stat-container group">
                <div className="stat-icon-container bg-gradient-to-br from-tactical-yellow/20 to-tactical-yellow/5 group-hover:from-tactical-yellow/30 group-hover:to-tactical-yellow/10">
                  <Globe className="h-12 w-12 text-tactical-yellow group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-tactical-yellow/10 rounded-2xl blur-xl group-hover:bg-tactical-yellow/20 transition-colors duration-300"></div>
                </div>
                
                <div className="stat-content">
                  <div className="text-5xl md:text-6xl font-space-grotesk font-bold text-tactical-yellow mb-2">
                    <AnimatedCounter end={4} duration={2500} />
                  </div>
                  <div className="text-soft-white font-semibold text-lg mb-1">Active Continents</div>
                  <div className="text-soft-white-dim text-sm">Global Presence</div>
                </div>
              </div>

              {/* SLA Uptime */}
              <div className="stat-container group">
                <div className="stat-icon-container bg-gradient-to-br from-military-green/20 to-military-green/5 group-hover:from-military-green/30 group-hover:to-military-green/10">
                  <Activity className="h-12 w-12 text-military-green group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-military-green/10 rounded-2xl blur-xl group-hover:bg-military-green/20 transition-colors duration-300"></div>
                </div>
                
                <div className="stat-content">
                  <div className="text-5xl md:text-6xl font-space-grotesk font-bold text-military-green mb-2">
                    <AnimatedCounter end={99.9} duration={3000} suffix="%" />
                  </div>
                  <div className="text-soft-white font-semibold text-lg mb-1">SLA Uptime</div>
                  <div className="text-soft-white-dim text-sm">Industry Leading</div>
                </div>
              </div>

              {/* Forensic Audits */}
              <div className="stat-container group">
                <div className="stat-icon-container bg-gradient-to-br from-tactical-yellow/15 to-military-green/15 group-hover:from-tactical-yellow/25 group-hover:to-military-green/25">
                  <Lightning className="h-12 w-12 text-tactical-yellow group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-tactical-yellow/10 to-military-green/10 rounded-2xl blur-xl group-hover:from-tactical-yellow/20 group-hover:to-military-green/20 transition-colors duration-300"></div>
                </div>
                
                <div className="stat-content">
                  <div className="text-5xl md:text-6xl font-space-grotesk font-bold text-tactical-yellow mb-2">
                    <AnimatedCounter end={40} duration={2000} suffix="+" />
                  </div>
                  <div className="text-soft-white font-semibold text-lg mb-1">Forensic Audits</div>
                  <div className="text-soft-white-dim text-sm">Successfully Resolved</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Timeline */}
          <div className="relative">
            {/* Timeline Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-4 bg-jet-black-light/50 border border-tactical-yellow/20 rounded-2xl p-2 backdrop-blur-sm">
                {timelineData.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTimelineItem(index)}
                    className={`timeline-nav-btn ${
                      activeTimelineItem === index 
                        ? 'bg-tactical-yellow text-jet-black' 
                        : 'text-soft-white-dim hover:text-tactical-yellow'
                    }`}
                  >
                    {item.year}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline Content */}
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-military-green/20 rounded-full">
                <div 
                  className="h-full bg-gradient-to-r from-tactical-yellow to-military-green rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${((activeTimelineItem + 1) / timelineData.length) * 100}%` }}
                ></div>
              </div>

              {/* Timeline Items */}
              <div className="grid md:grid-cols-4 gap-8">
                {timelineData.map((item, index) => {
                  const IconComponent = item.icon;
                  const isActive = activeTimelineItem === index;
                  const isPast = index < activeTimelineItem;
                  
                  return (
                    <div 
                      key={index} 
                      className={`timeline-item ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
                    >
                      {/* Timeline Node */}
                      <div className={`timeline-node ${
                        isActive 
                          ? `bg-${item.color} border-${item.color}` 
                          : isPast 
                            ? 'bg-military-green/50 border-military-green' 
                            : 'bg-jet-black-light border-tactical-yellow/30'
                      }`}>
                        <IconComponent className={`h-6 w-6 ${
                          isActive 
                            ? 'text-jet-black' 
                            : isPast 
                              ? 'text-soft-white' 
                              : 'text-tactical-yellow/50'
                        }`} />
                      </div>

                      {/* Timeline Content */}
                      <div className={`timeline-content ${isActive ? 'active' : ''}`}>
                        <div className={`timeline-year ${
                          isActive 
                            ? `text-${item.color}` 
                            : 'text-soft-white-dim'
                        }`}>
                          {item.year}
                        </div>
                        
                        <h3 className={`timeline-title ${
                          isActive ? 'text-soft-white' : 'text-soft-white-dim'
                        }`}>
                          {item.title}
                        </h3>
                        
                        <p className={`timeline-description ${
                          isActive ? 'text-soft-white-dim' : 'text-soft-white-dim/60'
                        }`}>
                          {item.description}
                        </p>

                        {/* Mini Stats */}
                        {isActive && (
                          <div className="timeline-stats">
                            <div className="grid grid-cols-3 gap-2 text-center">
                              <div>
                                <div className="text-lg font-space-grotesk font-bold text-tactical-yellow">
                                  {item.stats.continents}
                                </div>
                                <div className="text-xs text-soft-white-dim">Continents</div>
                              </div>
                              <div>
                                <div className="text-lg font-space-grotesk font-bold text-military-green">
                                  {item.stats.clients}+
                                </div>
                                <div className="text-xs text-soft-white-dim">Clients</div>
                              </div>
                              <div>
                                <div className="text-lg font-space-grotesk font-bold text-tactical-yellow">
                                  {item.stats.audits}+
                                </div>
                                <div className="text-xs text-soft-white-dim">Audits</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Auto-advance Indicator */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center space-x-2 bg-jet-black-light/50 border border-military-green/20 rounded-full px-4 py-2 backdrop-blur-sm">
                <div className="w-2 h-2 bg-military-green rounded-full animate-pulse"></div>
                <span className="text-xs text-soft-white-dim">Auto-advancing timeline</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black-light to-jet-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-tactical-yellow/10 border border-tactical-yellow/20 rounded-full px-6 py-3 mb-8">
              <Target className="h-5 w-5 text-tactical-yellow" />
              <span className="text-sm font-medium text-tactical-yellow tracking-wider">MISSION & VISION</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Protecting What</span>
              <span className="block text-gradient glow-effect">Matters Most</span>
            </h2>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <div className="mission-card group">
              <div className="mission-icon-container bg-gradient-to-br from-tactical-yellow/20 to-tactical-yellow/5 group-hover:from-tactical-yellow/30 group-hover:to-tactical-yellow/10">
                <Eye className="h-16 w-16 text-tactical-yellow group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-tactical-yellow/10 rounded-3xl blur-xl group-hover:bg-tactical-yellow/20 transition-colors duration-300"></div>
              </div>
              
              <div className="mission-content">
                <h3 className="font-space-grotesk text-3xl font-bold text-soft-white mb-6 group-hover:text-tactical-yellow transition-colors">
                  Our Mission
                </h3>
                
                <p className="text-soft-white-dim text-lg leading-relaxed mb-6">
                  To provide intelligent, adaptive cybersecurity solutions that protect critical infrastructure, 
                  financial systems, and sensitive data across the world's most regulated industries.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start text-soft-white-dim">
                    <CheckCircle className="h-5 w-5 text-tactical-yellow mr-3 mt-1 flex-shrink-0" />
                    <span>Deliver proactive threat detection and response capabilities</span>
                  </li>
                  <li className="flex items-start text-soft-white-dim">
                    <CheckCircle className="h-5 w-5 text-tactical-yellow mr-3 mt-1 flex-shrink-0" />
                    <span>Ensure regulatory compliance across global jurisdictions</span>
                  </li>
                  <li className="flex items-start text-soft-white-dim">
                    <CheckCircle className="h-5 w-5 text-tactical-yellow mr-3 mt-1 flex-shrink-0" />
                    <span>Enable secure digital transformation for enterprises</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vision */}
            <div className="mission-card group">
              <div className="mission-icon-container bg-gradient-to-br from-military-green/20 to-military-green/5 group-hover:from-military-green/30 group-hover:to-military-green/10">
                <Globe className="h-16 w-16 text-military-green group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-military-green/10 rounded-3xl blur-xl group-hover:bg-military-green/20 transition-colors duration-300"></div>
              </div>
              
              <div className="mission-content">
                <h3 className="font-space-grotesk text-3xl font-bold text-soft-white mb-6 group-hover:text-military-green transition-colors">
                  Our Vision
                </h3>
                
                <p className="text-soft-white-dim text-lg leading-relaxed mb-6">
                  To become the global standard for intelligent cybersecurity, creating a world where 
                  organizations can innovate fearlessly while maintaining the highest levels of security and trust.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start text-soft-white-dim">
                    <CheckCircle className="h-5 w-5 text-military-green mr-3 mt-1 flex-shrink-0" />
                    <span>Lead the evolution of AI-powered security solutions</span>
                  </li>
                  <li className="flex items-start text-soft-white-dim">
                    <CheckCircle className="h-5 w-5 text-military-green mr-3 mt-1 flex-shrink-0" />
                    <span>Foster global collaboration in threat intelligence</span>
                  </li>
                  <li className="flex items-start text-soft-white-dim">
                    <CheckCircle className="h-5 w-5 text-military-green mr-3 mt-1 flex-shrink-0" />
                    <span>Build resilient digital ecosystems for future generations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section id="values" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black to-jet-black-light">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-military-green/10 border border-military-green/20 rounded-full px-6 py-3 mb-8">
              <Heart className="h-5 w-5 text-military-green" />
              <span className="text-sm font-medium text-military-green tracking-wider">CORE VALUES</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">What Drives</span>
              <span className="block text-gradient glow-effect">Everything We Do</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Our values shape every decision, every solution, and every relationship we build
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Excellence */}
            <div className="value-card group">
              <div className="value-icon-container bg-gradient-to-br from-tactical-yellow/20 to-tactical-yellow/5 group-hover:from-tactical-yellow/30 group-hover:to-tactical-yellow/10">
                <Award className="h-12 w-12 text-tactical-yellow group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="value-content">
                <h3 className="font-space-grotesk text-xl font-bold text-soft-white mb-3 group-hover:text-tactical-yellow transition-colors">
                  Excellence
                </h3>
                <p className="text-soft-white-dim text-sm leading-relaxed">
                  We pursue the highest standards in everything we do, from code quality to customer service.
                </p>
              </div>
            </div>

            {/* Innovation */}
            <div className="value-card group">
              <div className="value-icon-container bg-gradient-to-br from-military-green/20 to-military-green/5 group-hover:from-military-green/30 group-hover:to-military-green/10">
                <Brain className="h-12 w-12 text-military-green group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="value-content">
                <h3 className="font-space-grotesk text-xl font-bold text-soft-white mb-3 group-hover:text-military-green transition-colors">
                  Innovation
                </h3>
                <p className="text-soft-white-dim text-sm leading-relaxed">
                  We continuously push boundaries to stay ahead of evolving threats and emerging technologies.
                </p>
              </div>
            </div>

            {/* Integrity */}
            <div className="value-card group">
              <div className="value-icon-container bg-gradient-to-br from-tactical-yellow/15 to-military-green/15 group-hover:from-tactical-yellow/25 group-hover:to-military-green/25">
                <Shield className="h-12 w-12 text-tactical-yellow group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="value-content">
                <h3 className="font-space-grotesk text-xl font-bold text-soft-white mb-3 group-hover:text-tactical-yellow transition-colors">
                  Integrity
                </h3>
                <p className="text-soft-white-dim text-sm leading-relaxed">
                  We operate with transparency, honesty, and ethical principles in all our interactions.
                </p>
              </div>
            </div>

            {/* Collaboration */}
            <div className="value-card group">
              <div className="value-icon-container bg-gradient-to-br from-military-green/20 to-tactical-yellow/10 group-hover:from-military-green/30 group-hover:to-tactical-yellow/20">
                <Users className="h-12 w-12 text-military-green group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="value-content">
                <h3 className="font-space-grotesk text-xl font-bold text-soft-white mb-3 group-hover:text-military-green transition-colors">
                  Collaboration
                </h3>
                <p className="text-soft-white-dim text-sm leading-relaxed">
                  We believe in the power of teamwork and partnership to solve complex security challenges.
                </p>
              </div>
            </div>

            {/* Agility */}
            <div className="value-card group">
              <div className="value-icon-container bg-gradient-to-br from-tactical-yellow/20 to-military-green/10 group-hover:from-tactical-yellow/30 group-hover:to-military-green/20">
                <Zap className="h-12 w-12 text-tactical-yellow group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="value-content">
                <h3 className="font-space-grotesk text-xl font-bold text-soft-white mb-3 group-hover:text-tactical-yellow transition-colors">
                  Agility
                </h3>
                <p className="text-soft-white-dim text-sm leading-relaxed">
                  We adapt quickly to changing threat landscapes and evolving customer needs.
                </p>
              </div>
            </div>

            {/* Trust */}
            <div className="value-card group">
              <div className="value-icon-container bg-gradient-to-br from-military-green/15 to-tactical-yellow/15 group-hover:from-military-green/25 group-hover:to-tactical-yellow/25">
                <CheckCircle className="h-12 w-12 text-military-green group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="value-content">
                <h3 className="font-space-grotesk text-xl font-bold text-soft-white mb-3 group-hover:text-military-green transition-colors">
                  Trust
                </h3>
                <p className="text-soft-white-dim text-sm leading-relaxed">
                  We earn and maintain trust through consistent delivery and unwavering commitment to security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Preview */}
      <section id="leadership" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black-light to-jet-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-tactical-yellow/10 border border-tactical-yellow/20 rounded-full px-6 py-3 mb-8">
              <Users className="h-5 w-5 text-tactical-yellow" />
              <span className="text-sm font-medium text-tactical-yellow tracking-wider">LEADERSHIP TEAM</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Meet the</span>
              <span className="block text-gradient glow-effect">Visionaries</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Industry veterans leading the charge in next-generation cybersecurity
            </p>
          </div>

          {/* Leadership Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* CEO */}
            <div className="leader-card group">
              <div className="leader-image-container">
                <div className="w-full h-64 bg-gradient-to-br from-tactical-yellow/20 to-military-green/20 rounded-2xl flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-tactical-yellow/30 to-military-green/30 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-space-grotesk font-bold text-tactical-yellow">SC</span>
                  </div>
                </div>
              </div>
              
              <div className="leader-content">
                <h3 className="font-space-grotesk text-xl font-bold text-soft-white mb-1 group-hover:text-tactical-yellow transition-colors">
                  Sarah Chen
                </h3>
                <p className="text-tactical-yellow text-sm font-medium mb-3">Chief Executive Officer</p>
                <p className="text-soft-white-dim text-sm leading-relaxed mb-4">
                  Former CISO at Fortune 500 financial institutions. 15+ years in cybersecurity leadership.
                </p>
                
                <div className="flex space-x-3">
                  <button className="leader-social-btn">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="leader-social-btn">
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button className="leader-social-btn">
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* CTO */}
            <div className="leader-card group">
              <div className="leader-image-container">
                <div className="w-full h-64 bg-gradient-to-br from-military-green/20 to-tactical-yellow/20 rounded-2xl flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-military-green/30 to-tactical-yellow/30 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-space-grotesk font-bold text-military-green">MR</span>
                  </div>
                </div>
              </div>
              
              <div className="leader-content">
                <h3 className="font-space-grotesk text-xl font-bold text-soft-white mb-1 group-hover:text-military-green transition-colors">
                  Marcus Rodriguez
                </h3>
                <p className="text-military-green text-sm font-medium mb-3">Chief Technology Officer</p>
                <p className="text-soft-white-dim text-sm leading-relaxed mb-4">
                  AI/ML expert with deep experience in threat detection and automated response systems.
                </p>
                
                <div className="flex space-x-3">
                  <button className="leader-social-btn">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="leader-social-btn">
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button className="leader-social-btn">
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* CISO */}
            <div className="leader-card group">
              <div className="leader-image-container">
                <div className="w-full h-64 bg-gradient-to-br from-tactical-yellow/15 to-military-green/15 rounded-2xl flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-tactical-yellow/25 to-military-green/25 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-space-grotesk font-bold text-tactical-yellow">AT</span>
                  </div>
                </div>
              </div>
              
              <div className="leader-content">
                <h3 className="font-space-grotesk text-xl font-bold text-soft-white mb-1 group-hover:text-tactical-yellow transition-colors">
                  Alex Thompson
                </h3>
                <p className="text-tactical-yellow text-sm font-medium mb-3">Chief Information Security Officer</p>
                <p className="text-soft-white-dim text-sm leading-relaxed mb-4">
                  Former government cybersecurity analyst specializing in APT detection and incident response.
                </p>
                
                <div className="flex space-x-3">
                  <button className="leader-social-btn">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="leader-social-btn">
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button className="leader-social-btn">
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-jet-black-light/50 border border-tactical-yellow/20 rounded-2xl px-8 py-6 backdrop-blur-sm">
              <div className="text-left">
                <h4 className="font-space-grotesk text-xl font-semibold text-soft-white mb-1">
                  Join Our Team
                </h4>
                <p className="text-soft-white-dim text-sm">
                  We're always looking for talented cybersecurity professionals
                </p>
              </div>
              <button className="btn-primary whitespace-nowrap">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section id="presence" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black to-jet-black-light">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-military-green/10 border border-military-green/20 rounded-full px-6 py-3 mb-8">
              <MapPin className="h-5 w-5 text-military-green" />
              <span className="text-sm font-medium text-military-green tracking-wider">GLOBAL PRESENCE</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Protecting</span>
              <span className="block text-gradient glow-effect">Worldwide</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Strategic locations ensuring 24/7 global coverage and local expertise
            </p>
          </div>

          {/* Global Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-space-grotesk font-bold text-tactical-yellow mb-2">4</div>
              <div className="text-soft-white font-medium mb-1">Global Offices</div>
              <div className="text-sm text-soft-white-dim">Strategic Locations</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-space-grotesk font-bold text-military-green mb-2">50+</div>
              <div className="text-soft-white font-medium mb-1">Countries Served</div>
              <div className="text-sm text-soft-white-dim">Global Reach</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-space-grotesk font-bold text-tactical-yellow mb-2">24/7</div>
              <div className="text-soft-white font-medium mb-1">SOC Operations</div>
              <div className="text-sm text-soft-white-dim">Round-the-Clock</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-space-grotesk font-bold text-military-green mb-2">200+</div>
              <div className="text-soft-white font-medium mb-1">Team Members</div>
              <div className="text-sm text-soft-white-dim">Global Experts</div>
            </div>
          </div>

          {/* Office Locations */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: "New York", country: "USA", role: "Global HQ", timezone: "EST" },
              { city: "London", country: "UK", role: "EMEA Hub", timezone: "GMT" },
              { city: "Singapore", country: "SG", role: "APAC Center", timezone: "SGT" },
              { city: "Sydney", country: "AU", role: "Oceania Office", timezone: "AEST" }
            ].map((office, index) => (
              <div key={index} className="office-card group">
                <div className="office-content">
                  <h3 className="font-space-grotesk text-lg font-bold text-soft-white mb-1 group-hover:text-tactical-yellow transition-colors">
                    {office.city}
                  </h3>
                  <p className="text-tactical-yellow text-sm font-medium mb-2">{office.country}</p>
                  <p className="text-soft-white-dim text-xs mb-3">{office.role}</p>
                  
                  <div className="flex items-center text-xs text-military-green">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{office.timezone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;