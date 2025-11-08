'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, CheckCircle, Users, Heart, Clock, Shield, TrendingUp, MapPin, Star } from 'lucide-react';

// Import JSON data
import heroData from '../data/hero.json';
import problemData from '../data/problem.json';
import solutionData from '../data/solution.json';
import marketData from '../data/market.json';
import howItWorksData from '../data/howItWorks.json';
import businessModelData from '../data/businessModel.json';
import pilotData from '../data/pilot.json';
import competitionData from '../data/competition.json';
import teamData from '../data/team.json';
import footerData from '../data/footer.json';
import configData from '../data/config.json';

// ==================== NAVBAR COMPONENT ====================
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold ${
              scrolled ? 'text-blue-600' : 'text-white'
            }`}>
              {heroData.companyName}
            </h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {footerData.navigation.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                className={`capitalize hover:text-orange-500 transition-colors ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="/coming-soon"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            >
              Join Waitlist
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {footerData.navigation.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 capitalize"
              >
                {item.label}
              </button>
            ))}
            <a
              href="/coming-soon"
              className="block w-full text-center bg-orange-500 text-white px-3 py-2 rounded-lg hover:bg-orange-600 font-semibold"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

// ==================== HERO SECTION ====================
const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-orange-400 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-300 opacity-10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20 sm:pt-16">
        <div className="animate-fade-in-up">
          {/* Launch Info Badge */}
          <div className="inline-block mb-6 px-4 py-2 sm:px-6 sm:py-3 bg-white bg-opacity-20 rounded-full text-orange-500 text-sm font-semibold backdrop-blur-sm border border-white border-opacity-30">
            {heroData.launchInfo}
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            {heroData.companyName}
          </h1>

          {/* Tagline */}
          <p className="text-3xl sm:text-4xl text-white mb-6 font-light">
            {heroData.tagline}
          </p>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white text-opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {heroData.subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 sm:mb-8">
            <a
              href="/coming-soon"
              className="inline-flex items-center justify-center px-10 py-5 bg-orange-500 text-white rounded-xl font-bold text-xl hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl"
            >
              {heroData.cta1.text}
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
            <button
              onClick={() => {
                const element = document.getElementById('problem');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-3 border-white text-white rounded-xl font-bold text-xl hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
            >
              {heroData.cta2.text}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile to avoid overlap */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

// ==================== PROBLEM STATEMENT ====================
const ProblemStatement = () => {
  return (
    <section id="problem" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">The Problem</h2>
          <div className="w-32 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Card */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
            <div className="inline-block px-6 py-3 bg-red-100 text-red-600 rounded-full text-sm font-bold mb-8">
              {problemData.story.title}
            </div>
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {problemData.story.text}
            </p>
          </div>

          {/* Gap Card */}
          <div className="bg-gradient-to-br from-blue-600 to-orange-500 p-10 rounded-3xl shadow-2xl text-white">
            <h3 className="text-3xl font-bold mb-8">{problemData.gap.title}</h3>
            <p className="text-xl leading-relaxed whitespace-pre-line opacity-95">
              {problemData.gap.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== SOLUTION SECTION ====================
const Solution = () => {
  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Our Solution</h2>
          <div className="w-32 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {solutionData.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutionData.services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 text-lg">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center text-orange-500 p-8 rounded-2xl">
          <p className="text-3xl font-bold">
            {solutionData.tagline}
          </p>
        </div>
      </div>
    </section>
  );
};

// ==================== MAIN APP COMPONENT ====================
const ImmiditWebsite = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemStatement />
      <Solution />
      <MarketSize />
      <HowItWorks />
      <BusinessModel />
      <Competition />
      <Pilot />
      <Team />
      <Footer />
    </div>
  );
};

// ==================== MARKET SIZE SECTION ====================
const MarketSize = () => {
  return (
    <section id="market" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Market Size</h2>
          <div className="w-32 h-1 bg-orange-500 mx-auto mb-8"></div>
          <h3 className="text-3xl font-bold text-blue-600 mb-8">{marketData.opportunity.title}</h3>
        </div>

        {/* Opportunity Stats */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {marketData.opportunity.stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <p className="text-lg text-gray-700">{stat.text}</p>
            </div>
          ))}
        </div>

        {/* Demographics */}
        <div className="bg-gradient-to-br from-blue-600 to-orange-500 p-10 rounded-3xl shadow-xl text-white mb-16">
          <h3 className="text-3xl font-bold mb-8">Target Demographics</h3>
          <ul className="space-y-4">
            {marketData.demographics.map((demo, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                <span className="text-lg">{demo}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Beachhead Market */}
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 mb-16">
          <div className="flex items-center mb-8">
            <MapPin className="h-8 w-8 text-blue-600 mr-4" />
            <h3 className="text-3xl font-bold text-gray-900">{marketData.beachhead.title}</h3>
          </div>
          <ul className="space-y-4">
            {marketData.beachhead.stats.map((stat, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg">{stat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Vision */}
        <div className="text-center space-y-8">
          <p className="text-xl text-gray-700 italic max-w-4xl mx-auto">
            {marketData.bottleneck}
          </p>
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
            {marketData.vision}
          </p>
        </div>
      </div>
    </section>
  );
};

// ==================== HOW IT WORKS SECTION ====================
const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('emergencyCare');

  const FlowStep = ({ step, index }: { step: any, index: number }) => (
    <div className="flex items-start space-x-6 mb-12">
      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
        {index + 1}
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-3">{step.icon}</span>
          <h4 className="text-2xl font-bold text-gray-900">{step.title}</h4>
        </div>
        <p className="text-gray-700 text-lg mb-2">{step.description}</p>
        {step.example && (
          <p className="text-sm text-blue-600 italic">Example: {step.example}</p>
        )}
        {step.note && (
          <p className="text-sm text-orange-600 font-semibold mt-2">⏱️ {step.note}</p>
        )}
      </div>
    </div>
  );

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">How It Works</h2>
          <div className="w-32 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { id: 'emergencyCare', label: 'Quick on-demand Care', icon: '🚨' },
            { id: 'routineCare', label: 'Routine Care', icon: '🏥' },
            { id: 'nurses', label: 'For Nurses', icon: '👨‍⚕️' },
            { id: 'doctors', label: 'For Doctors', icon: '👩‍⚕️' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-xl font-bold transition-all text-lg ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-xl transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-3">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-12 rounded-3xl shadow-lg">
          {activeTab === 'emergencyCare' && (
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                {howItWorksData.emergencyCare.title}
              </h3>
              <p className="text-gray-600 mb-12 text-xl italic">
                {howItWorksData.emergencyCare.subtitle}
              </p>
              {howItWorksData.emergencyCare.steps.map((step, index) => (
                <FlowStep key={index} step={step} index={index} />
              ))}
            </div>
          )}

          {activeTab === 'routineCare' && (
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                {howItWorksData.routineCare.title}
              </h3>
              <p className="text-gray-600 mb-12 text-xl italic">
                {howItWorksData.routineCare.subtitle}
              </p>
              {howItWorksData.routineCare.steps.map((step, index) => (
                <FlowStep key={index} step={step} index={index} />
              ))}
            </div>
          )}

          {activeTab === 'nurses' && (
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">
                {howItWorksData.nurses.title}
              </h3>
              {howItWorksData.nurses.steps.map((step, index) => (
                <FlowStep key={index} step={step} index={index} />
              ))}
            </div>
          )}

          {activeTab === 'doctors' && (
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">
                {howItWorksData.doctors.title}
              </h3>
              {howItWorksData.doctors.steps.map((step, index) => (
                <FlowStep key={index} step={step} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// ==================== BUSINESS MODEL SECTION ====================
const BusinessModel = () => {
  return (
    <section id="business-model" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Business Model</h2>
          <div className="w-32 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
            {businessModelData.title}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Current Revenue Model */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <div className="inline-block px-6 py-3 bg-green-100 text-green-600 rounded-full text-sm font-bold mb-8">
              {businessModelData.currentModel.title}
            </div>
            <div className="space-y-8">
              {businessModelData.currentModel.items.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Revenue Streams */}
          <div className="bg-gradient-to-br from-blue-600 to-orange-500 p-10 rounded-3xl shadow-xl text-white">
            <div className="inline-block px-6 py-3 bg-white text-blue-500 bg-opacity-20 rounded-full text-sm font-bold mb-8">
              {businessModelData.futureStreams.title}
            </div>
            <div className="space-y-8">
              {businessModelData.futureStreams.items.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-white text-opacity-90 text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== COMPETITION SECTION ====================
const Competition = () => {
  return (
    <section id="competition" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">{competitionData.title}</h2>
          <div className="w-32 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            {competitionData.intro}
          </p>
        </div>

        {/* Existing Players */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{competitionData.existingPlayers.title}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {competitionData.existingPlayers.competitors.map((competitor, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{competitor.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900">{competitor.title}</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-bold text-gray-600">Focus: </span>
                    <span className="text-gray-700">{competitor.focus}</span>
                  </div>
                  {competitor.pricing && (
                    <div>
                      <span className="text-sm font-bold text-gray-600">Pricing: </span>
                      <span className="text-gray-700">{competitor.pricing}</span>
                    </div>
                  )}
                  {competitor.booking && (
                    <div>
                      <span className="text-sm font-bold text-gray-600">Booking: </span>
                      <span className="text-gray-700">{competitor.booking}</span>
                    </div>
                  )}
                  <div className="pt-4 border-t border-gray-300">
                    <span className="text-sm font-bold text-red-600">Gap: </span>
                    <span className="text-gray-700">{competitor.gap}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Edge */}
        <div className="bg-gradient-to-br from-blue-600 to-orange-500 p-12 rounded-3xl shadow-xl text-white">
          <h3 className="text-4xl font-bold mb-12 text-center">{competitionData.ourEdge.title}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitionData.ourEdge.differentiators.map((diff, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl mb-4">{diff.icon}</div>
                <h4 className="text-xl text-gray-900 font-bold mb-4">{diff.title}</h4>
                <p className="text-gray-500 text-opacity-90">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== PILOT SECTION ====================
const Pilot = () => {
  return (
    <section id="pilot" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">{pilotData.title}</h2>
          <div className="w-32 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-2xl text-gray-700">{pilotData.subtitle}</p>
        </div>

        {/* Launch Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <div className="flex items-center mb-8">
              <MapPin className="h-10 w-10 text-blue-600 mr-4" />
              <h3 className="text-3xl font-bold text-gray-900">Launch Details</h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700">{pilotData.details.location}</p>
              <p className="text-lg text-gray-700">{pilotData.details.timeline}</p>
              <p className="text-lg text-gray-700">{pilotData.details.coverage}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-orange-500 p-10 rounded-3xl shadow-xl text-white">
            <div className="flex items-center mb-8">
              <Clock className="h-10 w-10 mr-4" />
              <h3 className="text-3xl font-bold">{pilotData.currentStatus.title}</h3>
            </div>
            <ul className="space-y-4">
              {pilotData.currentStatus.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pilot Goals */}
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{pilotData.goals.title}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pilotData.goals.items.map((goal, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl text-center">
                <div className="text-4xl mb-4">{goal.icon}</div>
                <p className="text-gray-700 font-semibold text-lg">{goal.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Gurgaon */}
        <div className="bg-gradient-to-br from-blue-600 to-orange-500 p-10 rounded-3xl shadow-xl text-white">
          <h3 className="text-3xl font-bold mb-8">{pilotData.whyGurgaon.title}</h3>
          <ul className="space-y-4">
            {pilotData.whyGurgaon.reasons.map((reason, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// ==================== TEAM SECTION ====================
const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">{teamData.title}</h2>
          <div className="w-32 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {teamData.founders.map((founder, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-orange-50 p-10 rounded-3xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden mr-6 shadow-lg border-4 border-white">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{founder.name}</h3>
                  <p className="text-blue-600 font-bold text-lg">{founder.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 text-lg">{founder.bio}</p>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-bold"
              >
                <Users className="h-5 w-5 mr-2" />
                LinkedIn Profile
              </a>
            </div>
          ))}
        </div>

        {/* Our Story 
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">{teamData.story.title}</h3>
          <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            {teamData.story.text}
          </p>
        </div>
        */}

        {/* Advisor 
        <div className="bg-gradient-to-br from-blue-600 to-orange-500 p-10 rounded-3xl shadow-xl text-white mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Advisor</h3>
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6">
              {teamData.advisor.name.charAt(0)}
            </div>
            <h4 className="text-2xl font-bold mb-2">{teamData.advisor.name}</h4>
            <p className="text-white text-opacity-90 font-bold text-lg mb-4">{teamData.advisor.role}</p>
            <p className="text-white text-opacity-85 mb-6 text-lg">{teamData.advisor.bio}</p>
            <a
              href={teamData.advisor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-gray-200 font-bold"
            >
              <Users className="h-5 w-5 mr-2" />
              LinkedIn Profile
            </a>
          </div>
        </div>
        */}

        {/* Company Status */}
        <div className="text-center bg-gray-50 p-8 rounded-2xl">
          <div className="inline-block px-6 py-3 bg-green-100 text-green-600 rounded-full text-sm font-bold mb-4">
            Company Status
          </div>
          <p className="text-gray-700 text-xl font-semibold">{teamData.companyStatus}</p>
        </div>
      </div>
    </section>
  );
};

// ==================== FOOTER SECTION ====================
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-orange-400 mb-6">{heroData.companyName}</h3>
            <p className="text-gray-300 mb-8 max-w-md text-lg">
              {heroData.tagline}
            </p>
            <div className="flex space-x-4">
              <a
                href={footerData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg transition-colors"
              >
                <Users className="h-6 w-6" />
              </a>
              <a
                href={`mailto:${footerData.contact.email}`}
                className="bg-orange-500 hover:bg-orange-600 p-4 rounded-lg transition-colors"
              >
                <Heart className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerData.navigation.slice(0, 4).map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.href.replace('#', ''));
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerData.navigation.slice(4).map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.href.replace('#', ''));
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              {footerData.ctas.slice(1).map((cta) => (
                <li key={cta.text}>
                  <a
                    href={configData.tallyForms[cta.href.replace('/', '') as keyof typeof configData.tallyForms]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {cta.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              {footerData.copyright}
            </p>
            <div className="flex space-x-6">
              <a
                href="/coming-soon"
                className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg text-white font-bold transition-colors"
              >
                Join Waitlist
              </a>
              <a
                href="/coming-soon"
                className="bg-transparent border-2 border-blue-600 hover:bg-blue-600 px-8 py-3 rounded-lg text-white font-bold transition-colors"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ImmiditWebsite;