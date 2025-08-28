import React from 'react';
import { Shield, Building2, ShieldCheck, Heart, Zap, ArrowRight, CheckCircle, Users, Award, Globe, Target, Lock, Eye, Brain, Cpu, Network, Database, Server, Code, Briefcase, Scale, UserCheck, Search, ShieldCheck as SecurityShield, Wrench, GraduationCap, AlertTriangle, FileText, TrendingUp, Activity, Clock, MapPin } from 'lucide-react';
import CyRocLogo from './components/CyRocLogo';

/**
 * INDUSTRIES PAGE - SERVICE MAPPING ANNOTATIONS
 * 
 * Cross-industry application of all four core services:
 * 
 * CROSS-INDUSTRY CAPABILITIES SECTION:
 * 1. RED TEAMING / PENETRATION TESTING:
 *    - "Zero-Trust Architecture" validation through penetration testing
 *    - Industry-specific security assessments and testing
 * 
 * 2. CYBER COUNTERINTELLIGENCE:
 *    - "24/7 SOC Monitoring" - continuous threat intelligence
 *    - "AI-Powered Analytics" - behavioral analysis across industries
 * 
 * 3. CLOUD SECURITY ARCHITECTURE AND SAAS:
 *    - Universal cloud security implementations across all sectors
 *    - Industry-specific cloud compliance requirements
 * 
 * 4. FRAUD INVESTIGATION SERVICES:
 *    - "Digital Forensics" - cross-industry investigation capabilities
 *    - Sector-specific fraud investigation (banking, healthcare, energy)
 * 
 * INDUSTRY-SPECIFIC IMPLEMENTATIONS:
 * - Banks & Fintech: Financial fraud investigations, compliance testing
 * - Government & Defense: Intelligence operations, security clearance investigations
 * - Healthcare: HIPAA compliance testing, medical device security assessments
 * - Oil & Energy: Critical infrastructure testing, operational technology security
 */
function Industries({ setCurrentPage }) {
  // Industry data with detailed information
  const industries = [
    {
      id: 'banks-fintech',
      title: 'Banks & Fintech',
      subtitle: 'Financial Services Security',
      description: 'Comprehensive cybersecurity solutions for banking, fintech, and financial services organizations worldwide.',
      icon: Building2,
      color: 'tactical-yellow',
      gradient: 'from-tactical-yellow/20 to-tactical-yellow/5',
      hoverGradient: 'from-tactical-yellow/30 to-tactical-yellow/10',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        clients: '150+',
        countries: '35+',
        compliance: '99.9%'
      },
      keyServices: [
        'PCI DSS Compliance',
        'Fraud Detection & Prevention',
        'Digital Banking Security',
        'Cryptocurrency Investigations',
        'AML/KYC Automation',
        'Open Banking API Security'
      ],
      challenges: [
        'Regulatory compliance across multiple jurisdictions',
        'Real-time fraud detection and prevention',
        'Secure digital transformation',
        'Third-party risk management',
        'Customer data protection'
      ],
      solutions: [
        'Zero-trust banking architecture',
        'AI-powered fraud analytics',
        'Regulatory compliance automation',
        'Secure API gateway management',
        'Digital forensics and incident response'
      ]
    },
    {
      id: 'government-defense',
      title: 'Government & Defense',
      subtitle: 'National Security & Critical Infrastructure',
      description: 'Advanced cybersecurity solutions for government agencies, defense contractors, and critical infrastructure protection.',
      icon: ShieldCheck,
      color: 'military-green',
      gradient: 'from-military-green/20 to-military-green/5',
      hoverGradient: 'from-military-green/30 to-military-green/10',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        clients: '75+',
        countries: '20+',
        clearance: 'Top Secret'
      },
      keyServices: [
        'FISMA Compliance',
        'APT Detection & Response',
        'Classified Data Protection',
        'Supply Chain Security',
        'Insider Threat Detection',
        'Critical Infrastructure Protection'
      ],
      challenges: [
        'Advanced persistent threats (APTs)',
        'Nation-state cyber attacks',
        'Classified information security',
        'Legacy system modernization',
        'Multi-level security requirements'
      ],
      solutions: [
        'Military-grade encryption',
        'Advanced threat hunting',
        'Secure cloud migration',
        'Zero-trust government networks',
        'Incident response and forensics'
      ]
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      subtitle: 'Medical Data Protection & HIPAA Compliance',
      description: 'Specialized cybersecurity solutions for healthcare providers, medical devices, and patient data protection.',
      icon: Heart,
      color: 'tactical-yellow',
      gradient: 'from-tactical-yellow/15 to-military-green/15',
      hoverGradient: 'from-tactical-yellow/25 to-military-green/25',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        clients: '200+',
        countries: '25+',
        compliance: 'HIPAA'
      },
      keyServices: [
        'HIPAA Compliance',
        'Medical Device Security',
        'Electronic Health Records Protection',
        'Telemedicine Security',
        'Healthcare IoT Security',
        'Patient Data Privacy'
      ],
      challenges: [
        'HIPAA and healthcare regulations',
        'Medical device vulnerabilities',
        'Patient data privacy',
        'Ransomware targeting hospitals',
        'Legacy medical system security'
      ],
      solutions: [
        'Healthcare-specific compliance frameworks',
        'Medical device security assessments',
        'Secure telemedicine platforms',
        'Healthcare data encryption',
        'Incident response for medical facilities'
      ]
    },
    {
      id: 'oil-energy',
      title: 'Oil & Energy',
      subtitle: 'Critical Infrastructure & Industrial Security',
      description: 'Robust cybersecurity solutions for energy companies, oil & gas operations, and critical infrastructure protection.',
      icon: Zap,
      color: 'military-green',
      gradient: 'from-military-green/20 to-tactical-yellow/10',
      hoverGradient: 'from-military-green/30 to-tactical-yellow/20',
      image: 'https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        clients: '100+',
        countries: '30+',
        uptime: '99.99%'
      },
      keyServices: [
        'SCADA Security',
        'Industrial Control Systems',
        'Pipeline Monitoring',
        'Smart Grid Protection',
        'Operational Technology Security',
        'Environmental Compliance'
      ],
      challenges: [
        'Critical infrastructure protection',
        'SCADA and ICS vulnerabilities',
        'Operational technology security',
        'Environmental regulations',
        'Supply chain attacks'
      ],
      solutions: [
        'Industrial cybersecurity frameworks',
        'SCADA security monitoring',
        'Air-gapped network protection',
        'Critical infrastructure resilience',
        'Energy sector threat intelligence'
      ]
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
              <a href="#industries" className="text-tactical-yellow font-medium">Industries</a>
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
          <Shield className="h-12 w-12" />
        </div>
        <div className="absolute top-1/3 right-1/3 text-tactical-yellow/15 animate-float-slow">
          <Heart className="h-6 w-6" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            {/* Status Indicator */}
            <div className="inline-flex items-center space-x-2 bg-military-green/20 border border-military-green/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-tactical-yellow rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-tactical-yellow">INDUSTRY SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-space-grotesk text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
              <span className="block text-soft-white">Sector-Specific</span>
              <span className="block text-gradient glow-effect">Cybersecurity.</span>
              <span className="block text-soft-white text-4xl md:text-5xl lg:text-6xl mt-6">
                Tailored for
                <span className="text-tactical-yellow ml-4">Critical</span>
              </span>
              <span className="block text-soft-white text-4xl md:text-5xl lg:text-6xl">
                <span className="text-military-green">Industries.</span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl lg:text-3xl text-soft-white-dim max-w-5xl mx-auto mb-12 leading-relaxed font-light">
              Specialized security solutions designed for the unique challenges of 
              <span className="text-tactical-yellow font-medium"> regulated industries</span> and 
              <span className="text-military-green font-medium"> critical infrastructure</span>.
            </p>
          </div>

          {/* Industry Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "500+", label: "Enterprise Clients", sublabel: "Across All Sectors" },
              { value: "50+", label: "Countries", sublabel: "Global Coverage" },
              { value: "99.9%", label: "Compliance Rate", sublabel: "Regulatory Standards" },
              { value: "24/7", label: "Monitoring", sublabel: "Critical Infrastructure" }
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

      {/* Industries Grid Section */}
      <section id="industries-grid" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black to-jet-black-light">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-tactical-yellow/10 border border-tactical-yellow/20 rounded-full px-6 py-3 mb-8">
              <Target className="h-5 w-5 text-tactical-yellow" />
              <span className="text-sm font-medium text-tactical-yellow tracking-wider">INDUSTRY EXPERTISE</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Choose Your</span>
              <span className="block text-gradient glow-effect">Industry</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Explore our specialized cybersecurity solutions tailored for your sector's unique challenges
            </p>
          </div>

          {/* Industries Grid - 4 Columns */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              
              return (
                <div 
                  key={industry.id} 
                  className="industry-sector-card group cursor-pointer"
                  onClick={() => setCurrentPage(industry.id)}
                >
                  {/* Industry Image */}
                  <div className="industry-image-container">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="w-full h-48 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-jet-black/80 to-transparent rounded-2xl"></div>
                    
                    {/* Industry Icon */}
                    <div className="absolute top-4 left-4">
                      <div className={`industry-icon-badge bg-gradient-to-br ${industry.gradient} group-hover:${industry.hoverGradient}`}>
                        <IconComponent className={`h-8 w-8 text-${industry.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                    </div>
                    
                    {/* Stats Badge */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-jet-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
                        <div className={`text-xs font-semibold text-${industry.color}`}>
                          {industry.stats.clients} Clients
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Industry Content */}
                  <div className="industry-sector-content">
                    <h3 className={`font-space-grotesk text-2xl font-bold text-soft-white mb-2 group-hover:text-${industry.color} transition-colors`}>
                      {industry.title}
                    </h3>
                    
                    <p className={`text-${industry.color} text-sm font-medium mb-3`}>
                      {industry.subtitle}
                    </p>
                    
                    <p className="text-soft-white-dim text-sm leading-relaxed mb-6">
                      {industry.description}
                    </p>
                    
                    {/* Key Services Preview */}
                    <div className="mb-6">
                      <h4 className="font-space-grotesk text-sm font-semibold text-soft-white mb-3">
                        Key Services:
                      </h4>
                      <div className="space-y-2">
                        {industry.keyServices.slice(0, 3).map((service, index) => (
                          <div key={index} className="flex items-center text-xs text-soft-white-dim">
                            <CheckCircle className={`h-3 w-3 text-${industry.color} mr-2 flex-shrink-0`} />
                            <span>{service}</span>
                          </div>
                        ))}
                        {industry.keyServices.length > 3 && (
                          <div className={`text-xs text-${industry.color} font-medium`}>
                            +{industry.keyServices.length - 3} more services
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Industry Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-tactical-yellow/10">
                      <div className="text-center">
                        <div className={`text-lg font-space-grotesk font-bold text-${industry.color} mb-1`}>
                          {industry.stats.clients}
                        </div>
                        <div className="text-xs text-soft-white-dim">Clients</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-lg font-space-grotesk font-bold text-${industry.color} mb-1`}>
                          {industry.stats.countries}
                        </div>
                        <div className="text-xs text-soft-white-dim">Countries</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-lg font-space-grotesk font-bold text-${industry.color} mb-1`}>
                          {industry.stats.compliance || industry.stats.clearance || industry.stats.uptime}
                        </div>
                        <div className="text-xs text-soft-white-dim">
                          {industry.stats.compliance ? 'Compliance' : industry.stats.clearance ? 'Clearance' : 'Uptime'}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover CTA */}
                  <div className="industry-sector-overlay">
                    <div className={`flex items-center text-${industry.color} font-space-grotesk font-semibold text-sm`}>
                      <span>Explore Solutions</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-jet-black-light/80 to-jet-black-light/40 border border-tactical-yellow/20 rounded-3xl p-12 backdrop-blur-sm">
              <h3 className="font-space-grotesk text-3xl font-bold text-soft-white mb-4">
                Don't See Your Industry?
              </h3>
              <p className="text-xl text-soft-white-dim mb-8 max-w-2xl mx-auto">
                We provide customized cybersecurity solutions for organizations across all sectors. 
                Our experts will assess your unique requirements and design a tailored security strategy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="btn-primary-large group">
                  <span>Schedule Consultation</span>
                  <Users className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-secondary-large group">
                  <span>View All Solutions</span>
                  <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-tactical-yellow/10">
                <div className="text-center">
                  <div className="text-3xl font-space-grotesk font-bold text-tactical-yellow mb-1">500+</div>
                  <div className="text-sm text-soft-white-dim">Total Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-space-grotesk font-bold text-military-green mb-1">15+</div>
                  <div className="text-sm text-soft-white-dim">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-space-grotesk font-bold text-tactical-yellow mb-1">50+</div>
                  <div className="text-sm text-soft-white-dim">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-space-grotesk font-bold text-military-green mb-1">24/7</div>
                  <div className="text-sm text-soft-white-dim">Global Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Industry Capabilities Section */}
      <section id="capabilities" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black-light to-jet-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-military-green/10 border border-military-green/20 rounded-full px-6 py-3 mb-8">
              <Globe className="h-5 w-5 text-military-green" />
              <span className="text-sm font-medium text-military-green tracking-wider">CROSS-INDUSTRY CAPABILITIES</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Universal</span>
              <span className="block text-gradient glow-effect">Security Standards</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Core capabilities that strengthen security across all industries and sectors
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Zero-Trust Architecture",
                description: "Never trust, always verify. Comprehensive identity and access management across all environments.",
                color: "tactical-yellow"
              },
              {
                icon: Eye,
                title: "24/7 SOC Monitoring",
                description: "Round-the-clock security operations center with global threat intelligence and rapid response.",
                color: "military-green"
              },
              {
                icon: Brain,
                title: "AI-Powered Analytics",
                description: "Machine learning algorithms for advanced threat detection and behavioral analysis.",
                color: "tactical-yellow"
              },
              {
                icon: Scale,
                title: "Regulatory Compliance",
                description: "Automated compliance monitoring for GDPR, HIPAA, SOX, PCI DSS, and industry-specific regulations.",
                color: "military-green"
              },
              {
                icon: Search,
                title: "Digital Forensics",
                description: "Expert investigation services for incident response, legal proceedings, and threat attribution.",
                color: "tactical-yellow"
              },
              {
                icon: GraduationCap,
                title: "Security Training",
                description: "Comprehensive cybersecurity awareness and technical training programs for all staff levels.",
                color: "military-green"
              }
            ].map((capability, index) => {
              const IconComponent = capability.icon;
              
              return (
                <div key={index} className="capability-card group">
                  <div className={`capability-icon-container bg-gradient-to-br from-${capability.color}/20 to-${capability.color}/5 group-hover:from-${capability.color}/30 group-hover:to-${capability.color}/10`}>
                    <IconComponent className={`h-12 w-12 text-${capability.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div className={`absolute inset-0 bg-${capability.color}/10 rounded-2xl blur-xl group-hover:bg-${capability.color}/20 transition-colors duration-300`}></div>
                  </div>
                  
                  <div className="capability-content">
                    <h3 className={`font-space-grotesk text-xl font-bold text-soft-white mb-3 group-hover:text-${capability.color} transition-colors`}>
                      {capability.title}
                    </h3>
                    <p className="text-soft-white-dim text-sm leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Industries;