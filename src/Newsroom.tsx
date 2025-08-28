import React, { useState, useEffect } from 'react';
import { Shield, FileText, ArrowRight, CheckCircle, Users, Award, Globe, Target, Lock, Eye, Brain, AlertTriangle, TrendingUp, Activity, Clock, MapPin, Star, ChevronLeft, ChevronRight, Play, ExternalLink, Search, Filter, Calendar, Mail, Bell, Rss, Download, Share2, BookOpen, Newspaper, Zap } from 'lucide-react';
import CyRocLogo from './components/CyRocLogo';

/**
 * NEWSROOM PAGE - SERVICE MAPPING ANNOTATIONS
 * 
 * Output and thought leadership for all core services:
 * 
 * CYBER COUNTERINTELLIGENCE OUTPUT:
 * - "Threat Intelligence" category - analysis of emerging threats
 * - "Technical Insights" - counterintelligence methodologies and findings
 * - "Industry Analysis" - sector-specific threat landscape analysis
 * 
 * SUPPORTING ALL SERVICES:
 * - Research and analysis output from penetration testing engagements
 * - Fraud investigation case studies and methodologies
 * - Cloud security architecture best practices and insights
 * 
 * Cross-references: All service pages contribute content to this knowledge base
 */
function Newsroom() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Article categories
  const categories = [
    { id: 'all', name: 'All Articles', count: 24 },
    { id: 'threat-intelligence', name: 'Threat Intelligence', count: 8 },
    { id: 'technical', name: 'Technical Insights', count: 6 },
    { id: 'industry', name: 'Industry Analysis', count: 5 },
    { id: 'compliance', name: 'Compliance', count: 3 },
    { id: 'company', name: 'Company News', count: 2 }
  ];

  // Featured articles data
  const featuredArticles = [
    {
      id: 1,
      category: "Threat Intelligence",
      title: "Q1 2025 Threat Landscape: APT Groups Targeting Critical Infrastructure",
      excerpt: "Comprehensive analysis of advanced persistent threat campaigns against energy, healthcare, and financial sectors in the first quarter of 2025.",
      author: "Dr. Sarah Chen",
      role: "Chief Threat Intelligence Officer",
      date: "2025-01-15",
      readTime: "12 min read",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["APT", "Critical Infrastructure", "Threat Analysis", "Q1 2025"],
      featured: true,
      urgent: true
    },
    {
      id: 2,
      category: "Technical Insights",
      title: "Zero-Trust Architecture Implementation: Lessons from 500+ Enterprise Deployments",
      excerpt: "Technical deep-dive into zero-trust implementation challenges, best practices, and measurable security improvements across enterprise environments.",
      author: "Marcus Rodriguez",
      role: "Principal Security Architect",
      date: "2025-01-12",
      readTime: "15 min read",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Zero-Trust", "Enterprise", "Architecture", "Implementation"],
      featured: true,
      urgent: false
    },
    {
      id: 3,
      category: "Industry Analysis",
      title: "The $2.5 Trillion Cost of Cybercrime: Economic Impact Analysis 2025",
      excerpt: "In-depth economic analysis of global cybercrime costs, industry-specific impacts, and the ROI of proactive cybersecurity investments.",
      author: "Dr. Jennifer Park",
      role: "Economic Research Director",
      date: "2025-01-10",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Economics", "Cybercrime", "ROI", "Industry Impact"],
      featured: true,
      urgent: false
    }
  ];

  // All articles data
  const allArticles = [
    ...featuredArticles,
    {
      id: 4,
      category: "Technical Insights",
      title: "AI-Powered Behavioral Analytics: Detecting Insider Threats with Machine Learning",
      excerpt: "Technical breakdown of machine learning algorithms used to identify anomalous user behavior and potential insider threats in enterprise environments.",
      author: "Alex Thompson",
      role: "AI Research Lead",
      date: "2025-01-08",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["AI", "Machine Learning", "Insider Threats", "Behavioral Analytics"],
      featured: false,
      urgent: false
    },
    {
      id: 5,
      category: "Compliance",
      title: "GDPR and Cybersecurity: 2025 Compliance Updates and Best Practices",
      excerpt: "Updated guidance on maintaining GDPR compliance while implementing robust cybersecurity measures across global operations.",
      author: "Emma Williams",
      role: "Compliance Director",
      date: "2025-01-05",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["GDPR", "Privacy", "Compliance", "Regulations"],
      featured: false,
      urgent: false
    },
    {
      id: 6,
      category: "Threat Intelligence",
      title: "Ransomware Evolution: New Tactics and Defense Strategies",
      excerpt: "Analysis of emerging ransomware techniques, including AI-powered attacks and multi-stage extortion campaigns targeting enterprise networks.",
      author: "Michael Chen",
      role: "Senior Threat Analyst",
      date: "2025-01-03",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Ransomware", "Threat Evolution", "Defense Strategies", "Enterprise Security"],
      featured: false,
      urgent: true
    },
    {
      id: 7,
      category: "Industry Analysis",
      title: "Banking Cybersecurity Trends: Digital Transformation and Security Challenges",
      excerpt: "Comprehensive analysis of cybersecurity challenges facing the banking industry as digital transformation accelerates post-pandemic.",
      author: "Dr. Amanda Rodriguez",
      role: "Financial Services Analyst",
      date: "2025-01-01",
      readTime: "11 min read",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Banking", "Digital Transformation", "Financial Services", "Industry Trends"],
      featured: false,
      urgent: false
    },
    {
      id: 8,
      category: "Company News",
      title: "CyRoc Achieves SOC 2 Type II Certification for Enhanced Security Controls",
      excerpt: "CyRoc successfully completes SOC 2 Type II audit, demonstrating commitment to security, availability, and confidentiality controls.",
      author: "Corporate Communications",
      role: "CyRoc Team",
      date: "2024-12-28",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SOC 2", "Certification", "Company News", "Security Controls"],
      featured: false,
      urgent: false
    }
  ];

  // Filter articles based on category and search
  const filteredArticles = allArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category.toLowerCase().replace(' ', '-') === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Auto-advance featured articles
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [featuredArticles.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length);
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
              <a href="#newsroom" className="text-tactical-yellow font-medium">Newsroom</a>
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
          <Newspaper className="h-8 w-8" />
        </div>
        <div className="absolute bottom-32 left-20 text-military-green/30 animate-float-delayed">
          <BookOpen className="h-12 w-12" />
        </div>
        <div className="absolute top-1/3 right-1/3 text-tactical-yellow/15 animate-float-slow">
          <FileText className="h-6 w-6" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            {/* Status Indicator */}
            <div className="inline-flex items-center space-x-2 bg-military-green/20 border border-military-green/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-tactical-yellow rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-tactical-yellow">NEWSROOM & INSIGHTS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-space-grotesk text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
              <span className="block text-soft-white">Cyber Threat</span>
              <span className="block text-gradient glow-effect">Intelligence</span>
              <span className="block text-soft-white text-5xl md:text-6xl lg:text-7xl mt-4">
                & Security
                <span className="text-tactical-yellow ml-4">Insights.</span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl lg:text-3xl text-soft-white-dim max-w-5xl mx-auto mb-12 leading-relaxed font-light">
              Stay ahead of emerging threats with 
              <span className="text-tactical-yellow font-medium"> expert analysis</span>, 
              <span className="text-military-green font-medium"> technical insights</span>, and 
              <span className="text-tactical-yellow font-medium"> industry intelligence</span> 
              from our cybersecurity research team.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="btn-primary-large group">
              <span>Subscribe to Updates</span>
              <Bell className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary-large group">
              <span>RSS Feed</span>
              <Rss className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Content Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "500+", label: "Articles Published", sublabel: "Expert Analysis" },
              { value: "50K+", label: "Monthly Readers", sublabel: "Global Audience" },
              { value: "24", label: "Research Reports", sublabel: "This Quarter" },
              { value: "Weekly", label: "Threat Updates", sublabel: "Fresh Intelligence" }
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

      {/* Featured Articles Slider */}
      <section id="featured" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black to-jet-black-light">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-tactical-yellow/10 border border-tactical-yellow/20 rounded-full px-6 py-3 mb-8">
              <Star className="h-5 w-5 text-tactical-yellow" />
              <span className="text-sm font-medium text-tactical-yellow tracking-wider">FEATURED INSIGHTS</span>
            </div>
            
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold mb-6">
              <span className="text-soft-white">Latest Threat</span>
              <span className="block text-gradient glow-effect">Intelligence</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim max-w-3xl mx-auto leading-relaxed">
              Critical security insights and analysis from our expert research team
            </p>
          </div>

          {/* Featured Article Slider */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
              <button 
                onClick={prevSlide}
                className="blog-nav-btn group"
                aria-label="Previous article"
              >
                <ChevronLeft className="h-6 w-6 text-tactical-yellow group-hover:text-tactical-yellow-light transition-colors" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
              <button 
                onClick={nextSlide}
                className="blog-nav-btn group"
                aria-label="Next article"
              >
                <ChevronRight className="h-6 w-6 text-tactical-yellow group-hover:text-tactical-yellow-light transition-colors" />
              </button>
            </div>

            {/* Featured Article Content */}
            <div className="bg-gradient-to-b from-jet-black-light/80 to-jet-black-light/40 border border-tactical-yellow/20 rounded-3xl overflow-hidden backdrop-blur-sm">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Article Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={featuredArticles[currentSlide].image} 
                    alt={featuredArticles[currentSlide].title}
                    className="w-full h-96 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jet-black/60 to-transparent"></div>
                  
                  {/* Urgent Badge */}
                  {featuredArticles[currentSlide].urgent && (
                    <div className="absolute top-4 left-4">
                      <div className="inline-flex items-center space-x-2 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-full px-3 py-1">
                        <AlertTriangle className="h-4 w-4 text-red-400" />
                        <span className="text-xs font-semibold text-red-400">URGENT</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-tactical-yellow/20 backdrop-blur-sm text-tactical-yellow text-xs font-semibold px-3 py-1 rounded-full border border-tactical-yellow/30">
                      {featuredArticles[currentSlide].category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-soft-white mb-4 leading-tight">
                    {featuredArticles[currentSlide].title}
                  </h3>
                  
                  <p className="text-soft-white-dim text-lg leading-relaxed mb-6">
                    {featuredArticles[currentSlide].excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredArticles[currentSlide].tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-military-green/20 text-military-green text-xs font-medium px-2 py-1 rounded-md border border-military-green/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Author & Meta */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-tactical-yellow/20 to-military-green/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-tactical-yellow">
                          {featuredArticles[currentSlide].author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-soft-white">{featuredArticles[currentSlide].author}</div>
                        <div className="text-xs text-soft-white-dim">{featuredArticles[currentSlide].role}</div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center text-xs text-soft-white-dim mb-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(featuredArticles[currentSlide].date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center text-xs text-tactical-yellow">
                        <Clock className="h-3 w-3 mr-1" />
                        {featuredArticles[currentSlide].readTime}
                      </div>
                    </div>
                  </div>
                  
                  {/* Read Article Button */}
                  <button className="btn-primary group self-start">
                    <span>Read Full Article</span>
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {featuredArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-tactical-yellow scale-110' 
                      : 'bg-tactical-yellow/30 hover:bg-tactical-yellow/50'
                  }`}
                  aria-label={`Go to article ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid with Filters */}
      <section id="articles" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black-light to-jet-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold text-soft-white mb-6">
              All Articles & Reports
            </h2>
            <p className="text-xl text-soft-white-dim max-w-2xl mx-auto">
              Browse our complete library of cybersecurity insights and analysis
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-soft-white-dim" />
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl text-soft-white placeholder-soft-white-dim focus:outline-none focus:border-tactical-yellow/50 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-tactical-yellow text-jet-black'
                      : 'bg-jet-black-light/50 text-soft-white-dim border border-tactical-yellow/20 hover:border-tactical-yellow/50 hover:text-tactical-yellow'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {filteredArticles.slice(0, 9).map((article) => (
              <article key={article.id} className="blog-card group cursor-pointer">
                {/* Article Image */}
                <div className="blog-image-container">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jet-black/60 to-transparent rounded-2xl"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="blog-category-badge">
                      {article.category}
                    </span>
                  </div>
                  
                  {/* Urgent Badge */}
                  {article.urgent && (
                    <div className="absolute top-4 right-4">
                      <div className="inline-flex items-center space-x-1 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-full px-2 py-1">
                        <AlertTriangle className="h-3 w-3 text-red-400" />
                        <span className="text-xs font-semibold text-red-400">URGENT</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Share Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-tactical-yellow/20 backdrop-blur-sm rounded-full p-2 border border-tactical-yellow/30 hover:bg-tactical-yellow/30 transition-colors">
                      <Share2 className="h-4 w-4 text-tactical-yellow" />
                    </button>
                  </div>
                </div>

                {/* Article Content */}
                <div className="blog-content">
                  <h3 className="font-space-grotesk text-xl font-bold text-soft-white mb-3 group-hover:text-tactical-yellow transition-colors leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-soft-white-dim text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Author & Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-tactical-yellow/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-tactical-yellow/20 to-military-green/20 rounded-full flex items-center justify-center">
                        <span className="text-xs font-semibold text-tactical-yellow">
                          {article.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-soft-white">{article.author}</div>
                        <div className="text-xs text-soft-white-dim">{article.role}</div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center text-xs text-soft-white-dim mb-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(article.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center text-xs text-tactical-yellow">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="blog-overlay">
                  <div className="flex items-center text-tactical-yellow font-space-grotesk font-semibold text-sm">
                    <span>Read Article</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <button className="btn-secondary-large group">
              <span>Load More Articles</span>
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section id="newsletter" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jet-black to-jet-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-jet-black-light/80 to-jet-black-light/40 border border-tactical-yellow/20 rounded-3xl p-12 backdrop-blur-sm text-center">
            <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold text-soft-white mb-6">
              Stay Ahead of Emerging Threats
            </h2>
            
            <p className="text-xl md:text-2xl text-soft-white-dim mb-8 max-w-3xl mx-auto leading-relaxed">
              Subscribe to our weekly threat intelligence briefings and get the latest cybersecurity insights delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 max-w-2xl mx-auto">
              <div className="relative flex-1 w-full">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-soft-white-dim" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 bg-jet-black-light/50 border border-tactical-yellow/20 rounded-xl text-soft-white placeholder-soft-white-dim focus:outline-none focus:border-tactical-yellow/50 transition-colors"
                />
              </div>
              <button className="btn-primary-large group whitespace-nowrap">
                <span>Subscribe</span>
                <Bell className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Subscription Benefits */}
            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-tactical-yellow/10">
              <div className="text-center">
                <Zap className="h-8 w-8 text-tactical-yellow mx-auto mb-3" />
                <div className="text-sm font-medium text-soft-white mb-1">Weekly Briefings</div>
                <div className="text-sm text-soft-white-dim">Latest threat intelligence and analysis</div>
              </div>
              <div className="text-center">
                <Download className="h-8 w-8 text-military-green mx-auto mb-3" />
                <div className="text-sm font-medium text-soft-white mb-1">Exclusive Reports</div>
                <div className="text-sm text-soft-white-dim">In-depth research and whitepapers</div>
              </div>
              <div className="text-center">
                <Bell className="h-8 w-8 text-tactical-yellow mx-auto mb-3" />
                <div className="text-sm font-medium text-soft-white mb-1">Breaking Alerts</div>
                <div className="text-sm text-soft-white-dim">Urgent security notifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Newsroom;