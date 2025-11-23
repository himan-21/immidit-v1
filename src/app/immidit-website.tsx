'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, CheckCircle, Users, Heart, Clock, Shield, TrendingUp, Star } from 'lucide-react';

// Import JSON data
import heroData from '../data/hero.json';
import whyWeExistData from '../data/whyWeExist.json';
import whatWeDoData from '../data/whatWeDo.json';
import howItWorksData from '../data/howItWorks.json';
import medicalProfessionalsData from '../data/medicalProfessionals.json';
import trustSafetyData from '../data/trustSafety.json';
import impactData from '../data/impact.json';
import socialImpactData from '../data/socialImpact.json';
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
          
          <div className="hidden lg:flex items-center space-x-6">
            {footerData.navigation.slice(0, 4).map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                className={`text-sm font-medium hover:text-orange-500 transition-colors whitespace-nowrap ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="/join-waitlist"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-sm whitespace-nowrap"
            >
              Join Waitlist
            </a>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`lg:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {footerData.navigation.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50"
              >
                {item.label}
              </button>
            ))}
            <a
              href="/join-waitlist"
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
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {heroData.companyName}
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-3xl lg:text-4xl text-white mb-4 sm:mb-6 font-light">
            {heroData.tagline}
          </p>

          {/* Subtitle */}
          <p className="text-base sm:text-xl lg:text-2xl text-white text-opacity-90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            {heroData.subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16">
            <a
              href="/join-waitlist"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-10 sm:py-5 bg-orange-500 text-white rounded-xl font-bold text-base sm:text-xl hover:bg-orange-600 transition-all transform hover:scale-105 shadow-2xl"
            >
              {heroData.cta1.text}
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
            <button
              onClick={() => {
                const element = document.getElementById('why-we-exist');
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

// ==================== WHY WE EXIST ====================
const WhyWeExist = () => {
  return (
    <section id="why-we-exist" className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">Why We Exist</h2>
          <div className="w-24 sm:w-32 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Story Card */}
          <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100">
            <div className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-8">
              {whyWeExistData.story.title}
            </div>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed whitespace-pre-line">
              {whyWeExistData.story.text}
            </p>
          </div>

          {/* Gap Card */}
          <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-2xl text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">{whyWeExistData.gap.title}</h3>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed whitespace-pre-line opacity-95">
              {whyWeExistData.gap.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== WHAT WE DO ====================
const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">What We Do</h2>
          <div className="w-24 sm:w-32 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {whatWeDoData.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16">
          {whatWeDoData.services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center text-orange-500 p-8 rounded-2xl">
          <p className="text-3xl font-bold">
            {whatWeDoData.tagline}
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
    <div className="flex items-start space-x-4 sm:space-x-6 mb-8 sm:mb-12">
      <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-purple-500 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold shadow-lg">
        {index + 1}
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-3 sm:mb-4">
          <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">{step.icon}</span>
          <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{step.title}</h4>
        </div>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-2">{step.description}</p>
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
    <section id="how-it-works" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">How It Works</h2>
          <div className="w-24 sm:w-32 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {[
            { id: 'emergencyCare', label: 'Quick on-demand Care', icon: '🚨' },
            { id: 'routineCare', label: 'Routine Care', icon: '🏥' },
            { id: 'nurses', label: 'For Nurses', icon: '👨‍⚕️' },
            { id: 'doctors', label: 'For Doctors', icon: '👩‍⚕️' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 sm:px-8 sm:py-4 rounded-xl font-bold transition-all text-sm sm:text-base lg:text-lg ${
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
        <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 sm:p-12 rounded-2xl sm:rounded-3xl shadow-lg">
          {activeTab === 'emergencyCare' && (
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                {howItWorksData.emergencyCare.title}
              </h3>
              <p className="text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg lg:text-xl italic">
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

// ==================== IMPACT SECTION ====================
const Impact = () => {
  return (
    <section id="impact" className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">{impactData.title}</h2>
          <div className="w-24 sm:w-32 h-1 bg-orange-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-xl lg:text-2xl text-gray-700">{impactData.subtitle}</p>
        </div>

        {/* Current Status */}
        <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl text-white mb-12 sm:mb-16">
          <div className="flex items-center mb-6 sm:mb-8">
            <Clock className="h-8 w-8 sm:h-10 sm:w-10 mr-3 sm:mr-4" />
            <h3 className="text-2xl sm:text-3xl font-bold">{impactData.currentStatus.title}</h3>
          </div>
          <ul className="space-y-3 sm:space-y-4">
            {impactData.currentStatus.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
                <span className="text-base sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Launching Soon */}
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">{impactData.launch.title}</h3>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            {impactData.launch.text}
          </p>
        </div>

        {/* Our Vision */}
        <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-10 rounded-3xl shadow-xl text-white">
          <h3 className="text-3xl font-bold mb-6 text-center">{impactData.expansion.title}</h3>
          <p className="text-xl text-center leading-relaxed opacity-95">
            {impactData.expansion.text}
          </p>
        </div>
      </div>
    </section>
  );
};

// ==================== MEDICAL PROFESSIONALS SECTION ====================
const MedicalProfessionals = () => {
  return (
    <section id="medical-professionals" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">{medicalProfessionalsData.title}</h2>
          <div className="w-24 sm:w-32 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {medicalProfessionalsData.subtitle}
          </p>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto mt-4 sm:mt-6">
            {medicalProfessionalsData.intro}
          </p>
        </div>

        {/* For Nurses & Paramedics */}
        <div className="mb-12 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            {medicalProfessionalsData.forNurses.title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {medicalProfessionalsData.forNurses.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{benefit.icon}</div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{benefit.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* For Doctors */}
        <div className="mb-12 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            {medicalProfessionalsData.forDoctors.title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {medicalProfessionalsData.forDoctors.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{benefit.icon}</div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{benefit.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Join */}
        <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-6 sm:p-12 rounded-2xl sm:rounded-3xl shadow-xl text-white">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center">{medicalProfessionalsData.howToJoin.title}</h3>
          <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
            {medicalProfessionalsData.howToJoin.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white text-orange-400 bg-opacity-20 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4 sm:mb-6">
                  {step.number}
                </div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{step.title}</h4>
                <p className="text-white text-opacity-90 text-sm sm:text-base">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12">
            <a
              href="/join-waitlist"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-10 sm:py-5 bg-white text-blue-600 rounded-xl font-bold text-base sm:text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              {medicalProfessionalsData.cta.primary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== TRUST & SAFETY SECTION ====================
const TrustSafety = () => {
  return (
    <section id="trust-safety" className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">{trustSafetyData.title}</h2>
          <div className="w-24 sm:w-32 h-1 bg-orange-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {trustSafetyData.subtitle}
          </p>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto mt-4 sm:mt-6">
            {trustSafetyData.intro}
          </p>
        </div>

        {/* Verification Process */}
        <div className="mb-12 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            {trustSafetyData.verification.title}
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
            {trustSafetyData.verification.description}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {trustSafetyData.verification.steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{step.icon}</div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{step.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Measures */}
        <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            {trustSafetyData.safety.title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {trustSafetyData.safety.protocols.map((protocol, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-2xl sm:text-3xl lg:text-4xl flex-shrink-0">{protocol.icon}</div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{protocol.title}</h4>
                  <p className="text-sm sm:text-base text-gray-600">{protocol.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Commitment */}
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl text-center">
            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{trustSafetyData.commitment.title}</h4>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {trustSafetyData.commitment.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== SOCIAL IMPACT SECTION ====================
const SocialImpact = () => {
  return (
    <section id="social-impact" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">{socialImpactData.title}</h2>
          <div className="w-24 sm:w-32 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {socialImpactData.subtitle}
          </p>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto mt-4 sm:mt-6">
            {socialImpactData.intro}
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-6 sm:p-12 rounded-2xl sm:rounded-3xl shadow-xl text-white mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">{socialImpactData.mission.title}</h3>
          <p className="text-base sm:text-xl lg:text-2xl text-center leading-relaxed opacity-95 max-w-4xl mx-auto">
            {socialImpactData.mission.text}
          </p>
        </div>

        {/* Impact Areas */}
        <div className="mb-12 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            {socialImpactData.impact.title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {socialImpactData.impact.areas.map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{area.icon}</div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{area.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="bg-white p-6 sm:p-12 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">{socialImpactData.vision.title}</h3>
          <p className="text-base sm:text-xl lg:text-2xl text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            {socialImpactData.vision.text}
          </p>
        </div>

        {/* Values */}
        <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-6 sm:p-12 rounded-2xl sm:rounded-3xl shadow-xl text-white">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center">{socialImpactData.values.title}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {socialImpactData.values.principles.map((principle, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{principle.title}</h4>
                <p className="text-white text-opacity-90 text-sm sm:text-base">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== TEAM SECTION ====================
const Team = () => {
  return (
    <section id="team" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">{teamData.title}</h2>
          <div className="w-24 sm:w-32 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {teamData.founders.map((founder, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mr-4 sm:mr-6 shadow-lg border-4 border-white">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{founder.name}</h3>
                  <p className="text-blue-600 font-bold text-base sm:text-lg">{founder.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">{founder.bio}</p>
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
        <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-10 rounded-3xl shadow-xl text-white mb-16">
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
        <div className="text-center bg-gray-50 p-6 sm:p-8 rounded-2xl">
          <div className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-green-100 text-green-600 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
            Company Status
          </div>
          <p className="text-gray-700 text-base sm:text-lg lg:text-xl font-semibold">{teamData.companyStatus}</p>
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
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <a
                href="/join-waitlist"
                className="bg-orange-500 hover:bg-orange-600 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 rounded-lg text-white text-sm sm:text-base font-bold transition-colors text-center"
              >
                Join Waitlist
              </a>
              <a
                href="/partner"
                className="bg-transparent border-2 border-blue-600 hover:bg-blue-600 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 rounded-lg text-white text-sm sm:text-base font-bold transition-colors text-center"
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

// ==================== MAIN APP COMPONENT ====================
const ImmiditWebsite = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyWeExist />
      <WhatWeDo />
      <HowItWorks />
      <MedicalProfessionals />
      <TrustSafety />
      <Impact />
      <SocialImpact />
      <Team />
      <Footer />
    </div>
  );
};

export default ImmiditWebsite;