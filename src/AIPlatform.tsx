import React, { useState, useEffect } from 'react';
import { Shield, Brain, ArrowRight, CheckCircle, Users, Award, Globe, Target, Lock, Eye, AlertTriangle, FileText, TrendingUp, Activity, Clock, MapPin, Star, ChevronLeft, ChevronRight, Play, ExternalLink, Cpu, Network, Database, Server, Code, Zap, BarChart3, GitBranch, Layers, Workflow, Bot, LineChart, PieChart, Radar } from 'lucide-react';
import ThreatGridAIMap from './components/ThreatGridAIMap';
import CyRocLogo from './components/CyRocLogo';

/**
 * AI PLATFORM PAGE - SERVICE MAPPING ANNOTATIONS
 * 
 * This page is the cornerstone of CYBER COUNTERINTELLIGENCE capabilities:
 * 
 * CYBER COUNTERINTELLIGENCE SERVICES:
 * - "AI-powered analytics" - behavioral analysis for threat detection
 * - "Automated risk scoring" - continuous threat assessment
 * - "Anomaly detection" - identifying unusual patterns and potential threats
 * - "Predictive threat intelligence" - forecasting potential security incidents
 * - "Real-time threat detection" - immediate response to emerging threats
 * 
 * SUPPORTING RED TEAMING/PENETRATION TESTING:
 * - AI models validate security controls through continuous testing
 * - Behavioral analytics identify weaknesses in security posture
 * - Threat simulation capabilities for red team exercises
 * 
 * Cross-references: Solutions.tsx (core AI capabilities), GovernmentDefense.tsx (intelligence fusion)
 */
function AIPlatform() {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  // Demo scenarios for the AI platform
  const demoScenarios = [
    {
      id: 1,
      title: "Real-time Threat Detection",
      description: "AI identifies suspicious network activity and automatically escalates high-risk events",
      riskScore: 87,
      anomalies: 12,
      alerts: 3,
      status: "Critical",
      color: "tactical-yellow"
    },
    {
      id: 2,
      title: "Behavioral Analysis",
      description: "Machine learning models detect unusual user behavior patterns across enterprise systems",
      riskScore: 34,
      anomalies: 5,
      alerts: 1,
      status: "Monitoring",
      color: "military-green"
    },
    {
      id: 3,
      title: "Predictive Risk Assessment",
      description: "AI forecasts potential security incidents based on historical data and current trends",
      riskScore: 62,
      anomalies: 8,
      alerts: 2,
      status: "Elevated",
      color: "tactical-yellow"
    }
  ];

  // Auto-advance demo scenarios
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demoScenarios.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [demoScenarios.length]);

  // Simulate processing animation
  useEffect(() => {
    const processingTimer = setInterval(() => {
      setIsProcessing(prev => !prev);
    }, 2000);

    return () => clearInterval(processingTimer);
  }, []);

  const nextDemo = () => {
    setCurrentDemo((prev) => (prev + 1) % demoScenarios.length);
  };

  const prevDemo = () => {
    setCurrentDemo((prev) => (prev - 1 + demoScenarios.length) % demoScenarios.length);
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
              <a href="/industries" className="text-soft-white-dim hover:text-tactical-yellow transition-colors font-medium">Industries</a>
              <a href="#ai-platform" className="text-tactical-yellow font-medium">AI Platform</a>
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
        
        {/* AI Circuit Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-tactical-yellow/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-32 h-32 border border-military-green/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 border border-tactical-yellow/20 rounded-full animate-pulse delay-500"></div>
          
          {/* Neural Network Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.05) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(58, 95, 58, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating AI Elements */}
        <div className="absolute top-20 right-20 text-tactical-yellow/20 animate-float">
          <Brain className="h-8 w-8" />
        </div>
        <div className="absolute bottom-32 left-20 text-military-green/30 animate-float-delayed">
          <Cpu className="h-12 w-12" />
        </div>
        <div className="absolute top-1/3 right-1/3 text-tactical-yellow/15 animate-float-slow">
          <Bot className="h-6 w-6" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            {/* Status Indicator */}
            <div className="inline-flex items-center space-x-2 bg-military-green/20 border border-military-green/30 rounded-full px-4 py-2 mb-8">
              <div className={`w-2 h-2 bg-tactical-yellow rounded-full ${isProcessing ? 'animate-pulse' : ''}`}></div>
              <span className="text-sm font-medium text-tactical-yellow">AI PLATFORM ACTIVE</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-space-grotesk text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
              <span className="block text-soft-white">Your Intelligence</span>
              <span className="block text-gradient glow-effect">Layer,</span>
              <span className="block text-soft-white text-5xl md:text-6xl lg:text-7xl mt-4">
                Powered by
                <span className="text-tactical-yellow ml-4">CyRoc.</span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl lg:text-3xl text-soft-white-dim max-w-5xl mx-auto mb-12 leading-relaxed font-light">
              Advanced AI-driven cybersecurity platform with 
              <span className="text-tactical-yellow font-medium"> automated risk scoring</span>, 
              <span className="text-military-green font-medium"> anomaly detection</span>, and 
              <span className="text-tactical-yellow font-medium"> predictive threat intelligence</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="btn-primary-large group">
              <span>Request AI Demo</span>
              <Brain className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary-large group">
              <span>View Technical Specs</span>
              <FileText className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* AI Platform Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "99.7%", label: "Detection Accuracy", sublabel: "AI-Powered Analysis" },
              { value: "<100ms", label: "Response Time", sublabel: "Real-time Processing" },
              { value: "50M+", label: "Events/Day", sublabel: "Data Pipeline Capacity" },
              { value: "24/7", label: "AI Monitoring", sublabel: "Continuous Learning" }
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

      {/* AI Capabilities Section */}
      <section id="ai-capabilities" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black to-jet-black-light">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-tactical-yellow/10 border border-tactical-yellow/20 rounded-full px-6 py-3 mb-8">
              <Brain className="h-5 w-5 text-tactical-yellow" />
              <span className="text-sm font-medium text-tactical-yellow tracking-wider">AI CAPABILITIES</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Intelligent Security</span>
              <span className="block text-gradient glow-effect">Automation</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Advanced AI capabilities that transform how organizations detect, analyze, and respond to cyber threats
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: BarChart3,
                title: "Automated Risk Scoring",
                description: "Machine learning algorithms continuously assess and score security risks across your entire infrastructure, providing real-time risk prioritization and automated threat classification.",
                features: ["Real-time risk assessment", "Dynamic scoring algorithms", "Threat prioritization", "Risk trend analysis"]
              },
              {
                icon: Radar,
                title: "AI-based Anomaly Detection",
                description: "Advanced behavioral analytics and pattern recognition identify unusual activities, zero-day threats, and sophisticated attacks that traditional signature-based systems miss.",
                features: ["Behavioral baseline learning", "Zero-day threat detection", "Pattern recognition", "False positive reduction"]
              },
              {
                icon: GitBranch,
                title: "Data Pipeline Integration",
                description: "Cloud-native data processing pipelines that seamlessly integrate with your existing security infrastructure, providing unified threat intelligence and automated response workflows.",
                features: ["Cloud-native architecture", "API-first integration", "Real-time data processing", "Scalable infrastructure"]
              },
              {
                icon: LineChart,
                title: "Behavior Mapping & Predictive Alerts",
                description: "Comprehensive user and entity behavior mapping with predictive analytics that forecast potential security incidents before they occur, enabling proactive threat mitigation.",
                features: ["User behavior profiling", "Predictive threat modeling", "Proactive alerting", "Risk forecasting"]
              }
            ].map((capability, index) => (
              <div key={index} className="service-card group">
                <div className="service-icon-container bg-gradient-to-br from-tactical-yellow/20 to-military-green/10 group-hover:from-tactical-yellow/30 group-hover:to-military-green/20">
                  <capability.icon className="h-12 w-12 text-tactical-yellow group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-tactical-yellow/10 rounded-2xl blur-xl group-hover:bg-tactical-yellow/20 transition-colors duration-300"></div>
                </div>
                
                <div className="service-content">
                  <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-4 group-hover:text-tactical-yellow transition-colors">
                    {capability.title}
                  </h3>
                  
                  <p className="text-soft-white-dim mb-6 leading-relaxed">
                    {capability.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-soft-white-dim">
                        <CheckCircle className="h-4 w-4 text-tactical-yellow mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live AI Demo Section */}
      <section id="ai-demo" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black-light to-jet-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-military-green/10 border border-military-green/20 rounded-full px-6 py-3 mb-8">
              <Activity className="h-5 w-5 text-military-green" />
              <span className="text-sm font-medium text-military-green tracking-wider">LIVE AI DEMO</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">See AI in</span>
              <span className="block text-gradient glow-effect">Action</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Watch our AI platform analyze real-time security data and generate intelligent insights
            </p>
          </div>

          {/* Interactive Demo Dashboard */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
              <button 
                onClick={prevDemo}
                className="blog-nav-btn group"
                aria-label="Previous demo"
              >
                <ChevronLeft className="h-6 w-6 text-tactical-yellow group-hover:text-tactical-yellow-light transition-colors" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
              <button 
                onClick={nextDemo}
                className="blog-nav-btn group"
                aria-label="Next demo"
              >
                <ChevronRight className="h-6 w-6 text-tactical-yellow group-hover:text-tactical-yellow-light transition-colors" />
              </button>
            </div>

            {/* Demo Dashboard */}
            <div className="bg-gradient-to-b from-jet-black-light/80 to-jet-black-light/40 border border-tactical-yellow/20 rounded-3xl p-8 backdrop-blur-sm">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-tactical-yellow/10">
                <div>
                  <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-2">
                    CyRoc AI Security Dashboard
                  </h3>
                  <p className="text-soft-white-dim">Real-time threat intelligence and automated analysis</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className={`flex items-center space-x-2 ${isProcessing ? 'animate-pulse' : ''}`}>
                    <div className="w-3 h-3 bg-tactical-yellow rounded-full"></div>
                    <span className="text-sm text-tactical-yellow font-medium">AI Processing</span>
                  </div>
                  <div className="text-sm text-soft-white-dim">
                    {new Date().toLocaleTimeString()}
                  </div>
                </div>
              </div>

              {/* Current Demo Scenario */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Analysis Panel */}
                <div className="lg:col-span-2">
                  <div className="bg-jet-black/50 border border-military-green/20 rounded-2xl p-6 mb-6">
                    <h4 className="font-space-grotesk text-xl font-semibold text-soft-white mb-4">
                      {demoScenarios[currentDemo].title}
                    </h4>
                    <p className="text-soft-white-dim mb-6">
                      {demoScenarios[currentDemo].description}
                    </p>
                    
                    {/* Simulated Data Visualization */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-tactical-yellow/10 border border-tactical-yellow/20 rounded-xl p-4 text-center">
                        <div className="text-2xl font-space-grotesk font-bold text-tactical-yellow mb-1">
                          {demoScenarios[currentDemo].riskScore}%
                        </div>
                        <div className="text-xs text-soft-white-dim">Risk Score</div>
                      </div>
                      <div className="bg-military-green/10 border border-military-green/20 rounded-xl p-4 text-center">
                        <div className="text-2xl font-space-grotesk font-bold text-military-green mb-1">
                          {demoScenarios[currentDemo].anomalies}
                        </div>
                        <div className="text-xs text-soft-white-dim">Anomalies</div>
                      </div>
                      <div className="bg-tactical-yellow/10 border border-tactical-yellow/20 rounded-xl p-4 text-center">
                        <div className="text-2xl font-space-grotesk font-bold text-tactical-yellow mb-1">
                          {demoScenarios[currentDemo].alerts}
                        </div>
                        <div className="text-xs text-soft-white-dim">Active Alerts</div>
                      </div>
                    </div>
                  </div>

                  {/* AI Insights */}
                  <div className="bg-jet-black/50 border border-tactical-yellow/20 rounded-2xl p-6">
                    <h5 className="font-space-grotesk text-lg font-semibold text-tactical-yellow mb-4">
                      AI-Generated Insights
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Brain className="h-5 w-5 text-tactical-yellow mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-soft-white">Pattern Recognition</div>
                          <div className="text-xs text-soft-white-dim">Unusual login patterns detected from multiple geographic locations</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <TrendingUp className="h-5 w-5 text-military-green mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-soft-white">Risk Assessment</div>
                          <div className="text-xs text-soft-white-dim">Elevated risk score based on behavioral analysis and threat intelligence</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-tactical-yellow mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-soft-white">Recommended Actions</div>
                          <div className="text-xs text-soft-white-dim">Implement additional authentication and monitor user activity</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Panel */}
                <div className="space-y-6">
                  <div className="bg-jet-black/50 border border-military-green/20 rounded-2xl p-6">
                    <h5 className="font-space-grotesk text-lg font-semibold text-military-green mb-4">
                      System Status
                    </h5>
                    <div className={`inline-flex items-center space-x-2 bg-${demoScenarios[currentDemo].color}/10 border border-${demoScenarios[currentDemo].color}/20 rounded-full px-4 py-2 mb-4`}>
                      <div className={`w-2 h-2 bg-${demoScenarios[currentDemo].color} rounded-full animate-pulse`}></div>
                      <span className={`text-sm font-medium text-${demoScenarios[currentDemo].color}`}>
                        {demoScenarios[currentDemo].status}
                      </span>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-soft-white-dim">AI Models Active</span>
                        <span className="text-tactical-yellow">12/12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-soft-white-dim">Data Sources</span>
                        <span className="text-military-green">Connected</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-soft-white-dim">Processing Speed</span>
                        <span className="text-tactical-yellow">Real-time</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-jet-black/50 border border-tactical-yellow/20 rounded-2xl p-6">
                    <h5 className="font-space-grotesk text-lg font-semibold text-tactical-yellow mb-4">
                      Recent Activity
                    </h5>
                    <div className="space-y-3 text-xs">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-tactical-yellow rounded-full"></div>
                        <span className="text-soft-white-dim">Threat model updated</span>
                        <span className="text-soft-white-dim ml-auto">2m ago</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-military-green rounded-full"></div>
                        <span className="text-soft-white-dim">Baseline recalculated</span>
                        <span className="text-soft-white-dim ml-auto">5m ago</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-tactical-yellow rounded-full"></div>
                        <span className="text-soft-white-dim">New patterns detected</span>
                        <span className="text-soft-white-dim ml-auto">8m ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {demoScenarios.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentDemo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentDemo === index 
                      ? 'bg-tactical-yellow scale-110' 
                      : 'bg-tactical-yellow/30 hover:bg-tactical-yellow/50'
                  }`}
                  aria-label={`Go to demo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture Section */}
      <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black to-jet-black-light">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-tactical-yellow/10 border border-tactical-yellow/20 rounded-full px-6 py-3 mb-8">
              <Layers className="h-5 w-5 text-tactical-yellow" />
              <span className="text-sm font-medium text-tactical-yellow tracking-wider">TECHNICAL ARCHITECTURE</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">AI Platform</span>
              <span className="block text-gradient glow-effect">Architecture</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Cloud-native AI infrastructure designed for enterprise-scale security operations
            </p>
          </div>

          {/* Architecture Layers */}
          <div className="space-y-8 mb-16">
            {/* Layer 1: Data Ingestion */}
            <div className="solution-card group">
              <div className="solution-header">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-space-grotesk text-2xl font-bold text-tactical-yellow">
                    📊 Data Ingestion & Processing Layer
                  </h3>
                  <div className="text-sm text-soft-white-dim">Real-time Data Pipeline</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Multi-Source Integration</h4>
                    <p className="text-sm text-soft-white-dim">SIEM, EDR, network logs, cloud APIs, and custom data sources</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Real-time Processing</h4>
                    <p className="text-sm text-soft-white-dim">Stream processing with Apache Kafka and real-time analytics</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Data Normalization</h4>
                    <p className="text-sm text-soft-white-dim">Automated data cleaning and standardization for AI models</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 2: AI/ML Engine */}
            <div className="solution-card group">
              <div className="solution-header">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-space-grotesk text-2xl font-bold text-military-green">
                    🧠 AI/ML Engine Layer
                  </h3>
                  <div className="text-sm text-soft-white-dim">Machine Learning Models</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-jet-black-light/50 border border-military-green/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Anomaly Detection</h4>
                    <p className="text-sm text-soft-white-dim">Unsupervised learning for behavioral analysis and outlier detection</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-military-green/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Risk Scoring</h4>
                    <p className="text-sm text-soft-white-dim">Multi-factor risk assessment with dynamic scoring algorithms</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-military-green/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Predictive Analytics</h4>
                    <p className="text-sm text-soft-white-dim">Time-series forecasting and threat prediction models</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 3: Intelligence & Response */}
            <div className="solution-card group">
              <div className="solution-header">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-space-grotesk text-2xl font-bold text-tactical-yellow">
                    ⚡ Intelligence & Response Layer
                  </h3>
                  <div className="text-sm text-soft-white-dim">Automated Response</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Threat Intelligence</h4>
                    <p className="text-sm text-soft-white-dim">Global threat feeds and contextual intelligence integration</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Automated Response</h4>
                    <p className="text-sm text-soft-white-dim">Orchestrated incident response and remediation workflows</p>
                  </div>
                  <div className="bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl p-4">
                    <h4 className="font-space-grotesk font-semibold text-soft-white mb-2">Continuous Learning</h4>
                    <p className="text-sm text-soft-white-dim">Model retraining and adaptation based on new threat patterns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="text-center">
            <h3 className="font-space-grotesk text-2xl font-bold text-soft-white mb-8">
              Powered by Leading AI Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['TensorFlow', 'PyTorch', 'Apache Kafka', 'Elasticsearch', 'Kubernetes', 'Docker', 'AWS SageMaker', 'Azure ML'].map((tech, index) => (
                <span key={index} className="solution-tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Threat Intelligence Section */}
      <section id="global-threat-intelligence" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black to-jet-black-light">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-tactical-yellow/10 border border-tactical-yellow/20 rounded-full px-6 py-3 mb-8">
              <Globe className="h-5 w-5 text-tactical-yellow" />
              <span className="text-sm font-medium text-tactical-yellow tracking-wider">GLOBAL THREAT INTELLIGENCE</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Real-time Global</span>
              <span className="block text-gradient glow-effect">Threat Monitoring</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Our AI platform continuously monitors global threat patterns across critical sectors and geographic regions
            </p>
          </div>

          {/* Threat Grid AI Map */}
          <div className="mb-16">
            <ThreatGridAIMap />
          </div>

          {/* Global Intelligence Stats */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-space-grotesk font-bold text-tactical-yellow mb-2">50M+</div>
              <div className="text-soft-white font-medium mb-1">Global Data Points</div>
              <div className="text-sm text-soft-white-dim">Analyzed Daily</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-space-grotesk font-bold text-military-green mb-2">8</div>
              <div className="text-soft-white font-medium mb-1">Critical Sectors</div>
              <div className="text-sm text-soft-white-dim">Continuously Monitored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-space-grotesk font-bold text-tactical-yellow mb-2">150+</div>
              <div className="text-soft-white font-medium mb-1">Countries</div>
              <div className="text-sm text-soft-white-dim">Under Surveillance</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-space-grotesk font-bold text-military-green mb-2">99.7%</div>
              <div className="text-soft-white font-medium mb-1">Detection Accuracy</div>
              <div className="text-sm text-soft-white-dim">AI-Powered Analysis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Demo CTA Section */}
      <section id="demo-cta" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black-light to-jet-black">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-jet-black-light/80 to-jet-black-light/40 border border-tactical-yellow/20 rounded-3xl p-12 backdrop-blur-sm text-center">
            <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold text-soft-white mb-6">
              Ready to Experience AI-Powered Security?
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim mb-8 max-w-3xl mx-auto leading-relaxed">
              See how our AI platform can transform your security operations with intelligent automation, predictive analytics, and real-time threat detection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button className="btn-primary-large group">
                <span>Request AI Demo</span>
                <Brain className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary-large group">
                <span>Download Technical Whitepaper</span>
                <FileText className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-tactical-yellow/10">
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-tactical-yellow mb-1">99.7%</div>
                <div className="text-sm text-soft-white-dim">AI Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-military-green mb-1">50M+</div>
                <div className="text-sm text-soft-white-dim">Events/Day</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-tactical-yellow mb-1">&lt;100ms</div>
                <div className="text-sm text-soft-white-dim">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-military-green mb-1">24/7</div>
                <div className="text-sm text-soft-white-dim">AI Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AIPlatform;