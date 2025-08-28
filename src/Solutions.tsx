import React from 'react';
import { Shield, Target, Zap, ArrowRight, CheckCircle, Cloud, DollarSign, Radar, Lock, Eye, Users, Award, Building2, Globe, AlertTriangle, FileText, Cpu, Network, Database, Server, Code, Briefcase, Scale, UserCheck, Brain, Search, ShieldCheck, Wrench, GraduationCap, Vibrate as Migrate, Terminal, Clipboard, Swords, Activity, Satellite, Factory, Droplets, Grid3x3, Microscope, Crosshair, UserX, Radio, FileSearch, Gavel, TrendingUp, BarChart3, GitBranch, Layers, Workflow, Bot, LineChart, PieChart, Zap as Lightning } from 'lucide-react';
import CyRocLogo from './components/CyRocLogo';

/**
 * SOLUTIONS PAGE - SERVICE MAPPING ANNOTATIONS
 * 
 * This page contains the comprehensive service offerings mapped as follows:
 * 
 * 1. CLOUD-NATIVE SECURITY & COMPLIANCE:
 *    - CSPM, CWPP, IAM risk detection, IaC scanning, CI/CD security integration
 *    - Cross-references: All industry pages reference cloud security implementations
 * 
 * 2. CYBER COUNTERINTELLIGENCE & NATION-STATE THREAT OPS:
 *    - Threat attribution (CyRoc Recon), insider threat analytics, disinformation monitoring
 *    - Cross-references: AIPlatform.tsx (AI-driven intelligence), GovernmentDefense.tsx (APT detection)
 * 
 * 3. FRAUD INTELLIGENCE & FINANCIAL CYBERCRIME DEFENSE:
 *    - Anti-fraud AI surveillance, payment system pen testing, crypto crime detection
 *    - Cross-references: BanksFintech.tsx (financial sector focus), Industries.tsx (cross-industry forensics)
 * 
 * 4. AI-POWERED GRC & COMPLIANCE ADVISORY:
 *    - CMMC/FedRAMP/NIST mapping, 365-day audit readiness, Zero Trust roadmaps
 *    - Cross-references: All industry pages for compliance requirements
 * 
 * 5. AI THREAT DETECTION & INCIDENT RESPONSE:
 *    - ML-powered EDR, autonomous threat hunting, IR-as-a-Service, deception/BAS simulation
 *    - Cross-references: AIPlatform.tsx (AI capabilities), GovernmentDefense.tsx (advanced threats)
 * 
 * 6. CRITICAL INFRASTRUCTURE & NATIONAL DEFENSE:
 *    - AI defenses for space, nuclear, water, smart grid, and biolab systems
 *    - Cross-references: OilEnergy.tsx (infrastructure), GovernmentDefense.tsx (national security)
 */
function Solutions() {
  // Custom Icon Components for Enhanced Visual Identity
  const CloudNativeIcon = () => (
    <div className="relative w-16 h-16">
      <Cloud className="absolute inset-0 w-16 h-16 text-tactical-yellow" />
      <Shield className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-tactical-yellow" />
      <div className="absolute inset-0">
        <div className="absolute top-2 left-2 w-1 h-1 bg-tactical-yellow rounded-full animate-ping"></div>
        <div className="absolute top-4 right-3 w-1 h-1 bg-tactical-yellow rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-3 left-4 w-1 h-1 bg-tactical-yellow rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );

  const CounterIntelIcon = () => (
    <div className="relative w-16 h-16">
      <Crosshair className="absolute inset-0 w-16 h-16 text-military-green" />
      <UserX className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-tactical-yellow" />
      <div className="absolute inset-0">
        <div className="absolute top-1 right-1 w-2 h-2 border border-tactical-yellow rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-military-green rounded-full animate-ping"></div>
      </div>
    </div>
  );

  const FraudIntelIcon = () => (
    <div className="relative w-16 h-16">
      <Search className="absolute inset-0 w-16 h-16 text-military-green" />
      <DollarSign className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-tactical-yellow" />
      <div className="absolute inset-0">
        <div className="absolute top-1 right-1 w-2 h-2 border border-tactical-yellow rounded-full opacity-60"></div>
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-military-green rounded-full"></div>
      </div>
    </div>
  );

  const GRCAdvisoryIcon = () => (
    <div className="relative w-16 h-16">
      <Clipboard className="absolute inset-0 w-16 h-16 text-tactical-yellow" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-military-green rounded-full flex items-center justify-center">
        <CheckCircle className="w-5 h-5 text-soft-white" />
      </div>
      <Award className="absolute -top-1 -right-1 w-6 h-6 text-tactical-yellow" />
    </div>
  );

  const AIThreatDetectionIcon = () => (
    <div className="relative w-16 h-16">
      <Cpu className="absolute inset-0 w-16 h-16 text-tactical-yellow" />
      <Brain className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-military-green" />
      <div className="absolute inset-0">
        <div className="absolute top-2 left-6 w-px h-4 bg-tactical-yellow opacity-60"></div>
        <div className="absolute top-6 left-2 w-4 h-px bg-tactical-yellow opacity-60"></div>
        <div className="absolute top-6 right-2 w-4 h-px bg-tactical-yellow opacity-60"></div>
        <div className="absolute bottom-2 left-6 w-px h-4 bg-tactical-yellow opacity-60"></div>
        <div className="absolute top-2 right-6 w-px h-4 bg-tactical-yellow opacity-60"></div>
        <div className="absolute bottom-2 right-6 w-px h-4 bg-tactical-yellow opacity-60"></div>
      </div>
    </div>
  );

  const CriticalInfraIcon = () => (
    <div className="relative w-16 h-16">
      <Factory className="absolute inset-0 w-16 h-16 text-military-green" />
      <Satellite className="absolute -top-1 -right-1 w-8 h-8 text-tactical-yellow" />
      <div className="absolute bottom-1 left-1 flex space-x-1">
        <div className="w-1 h-1 bg-tactical-yellow rounded-full animate-pulse"></div>
        <div className="w-1 h-1 bg-tactical-yellow rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
        <div className="w-1 h-1 bg-tactical-yellow rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
      </div>
    </div>
  );

  // Comprehensive Solutions Data
  const solutionsData = [
    {
      id: 'cloud-native-security',
      title: '🔐 Cloud-Native Security & Compliance',
      description: 'Comprehensive cloud protection with CSPM, CWPP, IAM risk detection, IaC scanning, and CI/CD security integration across multi-cloud environments.',
      features: [
        {
          name: 'Cloud Security Posture Management (CSPM)',
          detail: 'Continuous cloud configuration monitoring and compliance'
        },
        {
          name: 'Cloud Workload Protection Platform (CWPP)',
          detail: 'Runtime protection for containers and serverless workloads'
        },
        {
          name: 'IAM risk detection & remediation',
          detail: 'Identity and access management vulnerability assessment'
        },
        {
          name: 'Infrastructure as Code (IaC) scanning',
          detail: 'Security scanning for Terraform, CloudFormation, and Kubernetes'
        },
        {
          name: 'CI/CD security integration',
          detail: 'DevSecOps pipeline security and automated testing'
        },
        {
          name: 'Multi-cloud compliance automation',
          detail: 'Automated compliance across AWS, Azure, and GCP'
        }
      ],
      techBadges: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform'],
      iconComponent: CloudNativeIcon,
      color: 'tactical-yellow',
      gradient: 'from-tactical-yellow/20 to-tactical-yellow/5',
      hoverGradient: 'from-tactical-yellow/30 to-tactical-yellow/10'
    },
    {
      id: 'cyber-counterintelligence',
      title: '🎯 Cyber Counterintelligence & Nation-State Threat Ops',
      description: 'Advanced threat attribution, insider threat analytics, disinformation monitoring, foreign tech risk assessments, and executive briefings for nation-state threats.',
      features: [
        {
          name: 'Threat attribution (CyRoc Recon)',
          detail: 'Advanced persistent threat attribution and nation-state analysis'
        },
        {
          name: 'Insider threat analytics',
          detail: 'Behavioral analysis and anomaly detection for internal threats'
        },
        {
          name: 'Disinformation monitoring',
          detail: 'Social media and information warfare detection'
        },
        {
          name: 'Foreign technology risk assessments',
          detail: 'Supply chain and vendor security risk evaluation'
        },
        {
          name: 'Executive threat briefings',
          detail: 'C-suite intelligence reports and strategic threat analysis'
        },
        {
          name: 'Nation-state campaign tracking',
          detail: 'Long-term APT campaign monitoring and analysis'
        }
      ],
      techBadges: ['MITRE ATT&CK', 'STIX/TAXII', 'Threat Intel', 'OSINT', 'Behavioral AI'],
      iconComponent: CounterIntelIcon,
      color: 'military-green',
      gradient: 'from-military-green/20 to-military-green/5',
      hoverGradient: 'from-military-green/30 to-military-green/10'
    },
    {
      id: 'fraud-intelligence',
      title: '💰 Fraud Intelligence & Financial Cybercrime Defense',
      description: 'Anti-fraud AI surveillance, payment system penetration testing, crypto crime detection, money laundering investigation, and litigation-grade forensics.',
      features: [
        {
          name: 'Anti-fraud AI surveillance',
          detail: 'Machine learning-powered fraud detection and prevention'
        },
        {
          name: 'Payment system penetration testing',
          detail: 'Security assessments for payment processing infrastructure'
        },
        {
          name: 'Cryptocurrency crime detection',
          detail: 'Blockchain analysis and crypto transaction monitoring'
        },
        {
          name: 'Money laundering investigation',
          detail: 'AML compliance and suspicious transaction analysis'
        },
        {
          name: 'Litigation-grade digital forensics',
          detail: 'Court-admissible evidence collection and expert witness services'
        },
        {
          name: 'Financial crime intelligence',
          detail: 'Global financial crime pattern analysis and reporting'
        }
      ],
      techBadges: ['Blockchain', 'AI/ML', 'RegTech', 'Digital Forensics', 'AML'],
      iconComponent: FraudIntelIcon,
      color: 'military-green',
      gradient: 'from-military-green/20 to-tactical-yellow/10',
      hoverGradient: 'from-military-green/30 to-tactical-yellow/20'
    },
    {
      id: 'ai-grc-compliance',
      title: '📋 AI-Powered GRC & Compliance Advisory',
      description: 'CMMC/FedRAMP/NIST mapping, 365-day audit readiness, Zero Trust roadmaps, executive dashboards, and M&A due diligence for comprehensive governance.',
      features: [
        {
          name: 'CMMC/FedRAMP/NIST framework mapping',
          detail: 'Automated compliance framework alignment and gap analysis'
        },
        {
          name: '365-day audit readiness',
          detail: 'Continuous compliance monitoring and audit preparation'
        },
        {
          name: 'Zero Trust architecture roadmaps',
          detail: 'Strategic planning and implementation guidance'
        },
        {
          name: 'Executive compliance dashboards',
          detail: 'Real-time compliance status and risk visualization'
        },
        {
          name: 'M&A cybersecurity due diligence',
          detail: 'Security assessments for mergers and acquisitions'
        },
        {
          name: 'Regulatory change management',
          detail: 'Automated updates for evolving compliance requirements'
        }
      ],
      techBadges: ['NIST', 'CMMC', 'FedRAMP', 'ISO 27001', 'SOC 2'],
      iconComponent: GRCAdvisoryIcon,
      color: 'tactical-yellow',
      gradient: 'from-tactical-yellow/20 to-military-green/10',
      hoverGradient: 'from-tactical-yellow/30 to-military-green/20'
    },
    {
      id: 'ai-threat-detection',
      title: '🧠 AI Threat Detection & Incident Response',
      description: 'ML-powered EDR, autonomous threat hunting, IR-as-a-Service, and deception/BAS simulation tools for advanced threat detection and response.',
      features: [
        {
          name: 'ML-powered Endpoint Detection & Response',
          detail: 'Machine learning-enhanced endpoint protection and analysis'
        },
        {
          name: 'Autonomous threat hunting',
          detail: 'AI-driven proactive threat discovery and investigation'
        },
        {
          name: 'Incident Response-as-a-Service',
          detail: 'On-demand expert incident response and remediation'
        },
        {
          name: 'Deception technology & BAS simulation',
          detail: 'Breach and attack simulation with honeypot deployment'
        },
        {
          name: 'Automated threat intelligence',
          detail: 'AI-powered threat intelligence collection and analysis'
        },
        {
          name: 'Predictive security analytics',
          detail: 'Forecasting and preventing future security incidents'
        }
      ],
      techBadges: ['TensorFlow', 'PyTorch', 'EDR', 'SOAR', 'Deception Tech'],
      iconComponent: AIThreatDetectionIcon,
      color: 'tactical-yellow',
      gradient: 'from-tactical-yellow/15 to-military-green/15',
      hoverGradient: 'from-tactical-yellow/25 to-military-green/25'
    },
    {
      id: 'critical-infrastructure',
      title: '🏭 Critical Infrastructure & National Defense',
      description: 'AI defenses for space systems (ASCS-AI), nuclear facilities (NRAIS-AI), water infrastructure (WRAITH-AI), smart grid (GridLock-AI), and biolabs (BIOCYBER-AI).',
      features: [
        {
          name: 'Space Systems Defense (ASCS-AI)',
          detail: 'Aerospace and satellite communication security'
        },
        {
          name: 'Nuclear Facility Protection (NRAIS-AI)',
          detail: 'Nuclear reactor and facility cybersecurity systems'
        },
        {
          name: 'Water Infrastructure Security (WRAITH-AI)',
          detail: 'Water treatment and distribution system protection'
        },
        {
          name: 'Smart Grid Defense (GridLock-AI)',
          detail: 'Power grid and energy distribution security'
        },
        {
          name: 'Biolab Security (BIOCYBER-AI)',
          detail: 'Biological research facility and data protection'
        },
        {
          name: 'Critical infrastructure resilience',
          detail: 'Business continuity and disaster recovery planning'
        }
      ],
      techBadges: ['SCADA', 'ICS', 'OT Security', 'NERC CIP', 'IEC 62443'],
      iconComponent: CriticalInfraIcon,
      color: 'military-green',
      gradient: 'from-military-green/20 to-tactical-yellow/20',
      hoverGradient: 'from-military-green/30 to-tactical-yellow/30'
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
              <a href="#solutions" className="text-tactical-yellow font-medium">Solutions</a>
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
        
        {/* Neural Defense Matrix Overlay */}
        <div className="neural-defense-matrix-overlay">
          {/* Neural Network Grid */}
          <div className="neural-grid"></div>
          
          {/* Floating Shield Logo */}
          <div className="floating-shield">
            <Shield className="w-full h-full" />
          </div>
          
          {/* Data Packets */}
          <div className="data-packets">
            <div className="data-packet"></div>
            <div className="data-packet"></div>
            <div className="data-packet"></div>
            <div className="data-packet"></div>
            <div className="data-packet"></div>
            <div className="data-packet"></div>
          </div>
          
          {/* Matrix Pulses */}
          <div className="matrix-pulses">
            <div className="matrix-pulse"></div>
            <div className="matrix-pulse"></div>
            <div className="matrix-pulse"></div>
            <div className="matrix-pulse"></div>
            <div className="matrix-pulse"></div>
          </div>
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
          <Cloud className="h-8 w-8" />
        </div>
        <div className="absolute bottom-32 left-20 text-military-green/30 animate-float-delayed">
          <Shield className="h-12 w-12" />
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
              <span className="text-sm font-medium text-tactical-yellow">COMPREHENSIVE SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-space-grotesk text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
              <span className="block text-soft-white">Next-Generation</span>
              <span className="block text-gradient glow-effect">Cyber Defense.</span>
              <span className="block text-soft-white text-4xl md:text-5xl lg:text-6xl mt-6">
                Built for
                <span className="text-tactical-yellow ml-4">Cloud, Finance</span>
              </span>
              <span className="block text-soft-white text-4xl md:text-5xl lg:text-6xl">
                & Critical
                <span className="text-military-green ml-4">Infrastructure.</span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl lg:text-3xl text-soft-white-dim max-w-5xl mx-auto mb-12 leading-relaxed font-light">
              Comprehensive cybersecurity solutions designed for the world's most 
              <span className="text-tactical-yellow font-medium"> regulated industries</span> and 
              <span className="text-military-green font-medium"> mission-critical environments</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="btn-primary-large group">
              <span>View Case Studies</span>
              <FileText className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary-large group">
              <span>Talk to a Specialist</span>
              <Users className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Solution Categories Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Cloud, title: "Cloud-Native Security", subtitle: "CSPM & CWPP Protection" },
              { icon: Crosshair, title: "Counterintelligence", subtitle: "Nation-State Threat Ops" },
              { icon: Brain, title: "AI Threat Detection", subtitle: "ML-Powered Response" }
            ].map((category, index) => (
              <div key={index} className="solution-preview-card group">
                <div className="solution-preview-icon">
                  <category.icon className="h-12 w-12 text-tactical-yellow group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-space-grotesk text-xl font-bold text-soft-white mb-2 group-hover:text-tactical-yellow transition-colors">
                  {category.title}
                </h3>
                <p className="text-soft-white-dim text-sm">{category.subtitle}</p>
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

      {/* Solutions Grid Section */}
      <section id="solutions-grid" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black to-jet-black-light">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-tactical-yellow/10 border border-tactical-yellow/20 rounded-full px-6 py-3 mb-8">
              <Shield className="h-5 w-5 text-tactical-yellow" />
              <span className="text-sm font-medium text-tactical-yellow tracking-wider">SOLUTION PORTFOLIO</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Enterprise-Grade</span>
              <span className="block text-gradient glow-effect">Security Solutions</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Modular, scalable, and tailored to your industry's unique security challenges
            </p>
          </div>

          {/* Dynamic Solutions Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {solutionsData.map((solution) => {
              const IconComponent = solution.iconComponent;
              
              return (
                <div key={solution.id} className="solution-card group">
                  <div className="solution-header">
                    <div className={`solution-icon-container bg-gradient-to-br ${solution.gradient} group-hover:${solution.hoverGradient}`}>
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        <IconComponent />
                      </div>
                      <div className={`absolute inset-0 bg-${solution.color}/10 rounded-3xl blur-xl group-hover:bg-${solution.color}/20 transition-colors duration-300`}></div>
                    </div>
                    
                    <h3 className={`font-space-grotesk text-2xl font-bold text-soft-white mb-4 group-hover:text-${solution.color} transition-colors`}>
                      {solution.title}
                    </h3>
                    
                    <p className="text-soft-white-dim mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  <div className="solution-services">
                    <h4 className={`font-space-grotesk text-lg font-semibold text-${solution.color} mb-4`}>Core Services:</h4>
                    
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-soft-white-dim">
                          <CheckCircle className={`h-4 w-4 text-${solution.color} mr-3 mt-0.5 flex-shrink-0`} />
                          <div>
                            <span className="font-medium text-soft-white">{feature.name}</span>
                            <div className="text-xs text-soft-white-dim mt-1">{feature.detail}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="solution-footer">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {solution.techBadges.map((badge, idx) => (
                          <span key={idx} className="solution-tech-badge">
                            {badge}
                          </span>
                        ))}
                      </div>
                      <button className="solution-cta group/btn">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
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
                Ready to Secure Your Organization?
              </h3>
              <p className="text-xl text-soft-white-dim mb-8 max-w-2xl mx-auto">
                Our cybersecurity experts will assess your current security posture and recommend the optimal solution mix for your industry and risk profile.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="btn-primary-large group">
                  <span>View Case Studies</span>
                  <FileText className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-secondary-large group">
                  <span>Talk to a Specialist</span>
                  <Users className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-tactical-yellow/10">
                <div className="text-center">
                  <div className="text-3xl font-space-grotesk font-bold text-tactical-yellow mb-1">500+</div>
                  <div className="text-sm text-soft-white-dim">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-space-grotesk font-bold text-military-green mb-1">99.9%</div>
                  <div className="text-sm text-soft-white-dim">SLA Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-space-grotesk font-bold text-tactical-yellow mb-1">24/7</div>
                  <div className="text-sm text-soft-white-dim">SOC Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-space-grotesk font-bold text-military-green mb-1">50+</div>
                  <div className="text-sm text-soft-white-dim">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solutions;