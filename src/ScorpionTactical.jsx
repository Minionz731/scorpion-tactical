import React, { useState, useEffect } from 'react';
import { Shield, Eye, Users, Lock, Award, ChevronDown, Phone, Mail, MapPin, Download, ExternalLink } from 'lucide-react';

// Reusable "Powered by Stack & Shield" Component
const StackShieldBranding = () => (
  <div className="fixed bottom-6 right-6 z-50 group">
    <a 
      href="https://stackandshield.com" 
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-5 py-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full hover:bg-black/60 hover:border-white/30 transition-all duration-300 hover:scale-105"
    >
      <img 
        src="/assets/stack-shield-logo.png" 
        alt="Stack & Shield Logo" 
        className="w-6 h-6 object-contain"
      />
      <span className="text-white/80 text-sm font-light tracking-wider group-hover:text-white transition-colors">
        Powered by <span className="font-semibold">Stack & Shield</span>
      </span>
    </a>
  </div>
);

const ScorpionTacticalWebsite = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['home', 'about', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  
   const services = [
  {
    icon: Shield,
    title: "Armed Response",
    description: "24/7 rapid armed response with highly trained professionals and state-of-the-art vehicles.",
    image: "/assets/armed.jpg"  // Your local image
  },
  {
    icon: Eye,
    title: "CCTV & Surveillance",
    description: "Advanced monitoring systems with video analytics and real-time threat detection.",
    image: "/assets/cctv.jpeg"  // Your local image
  },
  {
    icon: Users,
    title: "Security Guards",
    description: "PSIRA-licensed professional guards trained to the highest industry standards.",
    image: "/assets/security.jpg"  // Your local image
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Comprehensive access control systems and intruder alarm solutions.",
    image: "/assets/acces.jpeg"  // Your local image
  },
  {
    icon: Award,
    title: "VIP Protection",
    description: "Elite close protection services for executives and high-profile individuals.",
    image: "/assets/vip.jpg"  // Your local image
  },
  {
    icon: Users,
    title: "Event Security",
    description: "Professional crowd control and event management services.",
    image: "/assets/events.jpg"  // Your local image
  }
];

  // Guard images from assets
  const guardImages = [
    '/assets/guard1.jpg',
    '/assets/guard2.jpg',
    '/assets/guard3.jpg',
    '/assets/guard4.jpg'
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Video Background - Very Dark and Faint */}
      <div className="fixed inset-0 z-0">
        {/* Multiple dark overlays to make video very faint */}
        <div className="absolute inset-0 bg-black/85 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-20" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black/90 z-30" />
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25"
        >
          <source src="/assets/bg.mp4" type="video/mp4" />
        </video>
        
        {/* Additional red tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/10 via-transparent to-red-900/5 z-40" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-lg border-b border-red-500/30 shadow-2xl shadow-red-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => scrollToSection('home')}>
              {/* Scorpion Logo */}
              <img 
                src="/assets/ST.logo.png" 
                alt="Scorpion Tactical Logo" 
                className="h-14 w-auto object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
              <div>
                <h1 className="text-2xl font-black tracking-tight text-white uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Scorpion
                </h1>
                <p className="text-xs text-red-500 tracking-widest" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  TACTICAL
                </p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['home', 'about', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-semibold tracking-wider uppercase transition-all duration-300 relative ${
                    activeSection === section ? 'text-red-500' : 'text-white/70 hover:text-white'
                  }`}
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {section}
                  {activeSection === section && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-500 animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            <a
              href="tel:0110748207"
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg shadow-red-500/30"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              <Phone className="w-4 h-4" />
              EMERGENCY
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center z-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-block p-6 bg-red-600/10 backdrop-blur-sm border border-red-500/30 rounded-2xl mb-6">
              <img 
                src="/assets/ST.logo.png" 
                alt="Scorpion Tactical" 
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
          
          <h1 
            className="text-7xl md:text-9xl font-black mb-6 tracking-tighter leading-none uppercase animate-slide-up"
            style={{ 
              fontFamily: 'Rajdhani, sans-serif',
              textShadow: '0 0 60px rgba(239, 68, 68, 0.8), 0 0 100px rgba(239, 68, 68, 0.5)',
              animation: 'slideUp 1s ease-out, glow 2s ease-in-out infinite alternate'
            }}
          >
            Scorpion
            <span className="block text-red-500">Tactical</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light tracking-wide animate-fade-in-delayed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Elite Security Solutions for South Africa
          </p>
          
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto animate-fade-in-delayed-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            Loyalty • Integrity • Service
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed-3">
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full font-bold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              OUR SERVICES
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 hover:border-red-500/50 rounded-full font-bold text-lg tracking-wide transition-all duration-300"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              GET PROTECTED
            </button>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-red-500 opacity-70" />
          </div>
        </div>
      </section>

      {/* About Section with Guard Showcase */}
      <section id="about" className="relative z-20 py-32 bg-gradient-to-b from-black/50 to-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 
                className="text-6xl font-black mb-6 uppercase tracking-tight"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                Why Choose
                <span className="block text-red-500">Scorpion Tactical?</span>
              </h2>
              <div className="w-20 h-1 bg-red-500 mb-8" />
              <p className="text-lg text-white/80 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                In South Africa, where security risks are constantly evolving, you need more than just guards—you need a professional partner committed to your safety.
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Scorpion Tactical combines cutting-edge technology, highly trained personnel, and decades of expertise to deliver security solutions that exceed expectations.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "PSIRA Accredited", value: "100%" },
                  { label: "Staff Retention", value: "#1" },
                  { label: "Response Time", value: "24/7" },
                  { label: "Client Satisfaction", value: "★★★★★" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-red-500/50 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl font-black text-red-500 mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/70 uppercase tracking-wide" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent rounded-2xl transform rotate-3" />
              <img
                src="/assets/guard1.jpg"
                alt="Security Professional"
                className="relative rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl shadow-2xl">
                <div className="text-4xl font-black" style={{ fontFamily: 'Rajdhani, sans-serif' }}>10+</div>
                <div className="text-sm uppercase tracking-wide" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Years Experience</div>
              </div>
            </div>
          </div>

          {/* Guard Showcase Section */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <h3 
                className="text-5xl font-black mb-4 uppercase tracking-tight"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                Our <span className="text-red-500">Elite Team</span>
              </h3>
              <div className="w-20 h-1 bg-red-500 mx-auto mb-6" />
              <p className="text-lg text-white/70 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                PSIRA-licensed professionals deployed across strategic posts
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {guardImages.map((guard, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-xl aspect-[3/4] transform hover:scale-105 transition-all duration-500"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <img
                    src={guard}
                    alt={`Security Guard ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500 transition-all duration-300" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <Shield className="w-5 h-5 text-red-500" />
                      <span className="font-bold tracking-wide" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        GUARD {index + 1}
                      </span>
                    </div>
                    <p className="text-xs text-white/70 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      On-Site Protection
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-20 py-32 bg-black/95">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 
              className="text-6xl md:text-7xl font-black mb-6 uppercase tracking-tight"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              Our
              <span className="text-red-500"> Services</span>
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6" />
            <p className="text-xl text-white/70 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Comprehensive security solutions tailored to protect what matters most
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                
                <div className="p-8">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 
                    className="text-2xl font-black mb-3 uppercase tracking-tight"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {service.description}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Download Section */}
      <section className="relative z-20 py-20 bg-gradient-to-b from-black/95 to-red-950/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-red-600/20 to-black/40 backdrop-blur-sm border border-red-500/30 rounded-2xl p-12 text-center hover:border-red-500/50 transition-all duration-300">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="w-8 h-8 text-white" />
            </div>
            
            <h3 
              className="text-4xl font-black mb-4 uppercase"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              Company Profile
            </h3>
            
            <p className="text-white/80 mb-8 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
              Download our complete corporate profile to learn more about our services, expertise, and commitment to excellence.
            </p>

            <a
              href="/downloads/CorporateProfileScorpion.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full font-bold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              <Download className="w-5 h-5" />
              DOWNLOAD PDF
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-20 py-32 bg-black/95">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 
              className="text-6xl md:text-7xl font-black mb-6 uppercase tracking-tight"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              Get In
              <span className="text-red-500"> Touch</span>
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6" />
            <p className="text-xl text-white/70 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              24/7 Emergency Response • Professional Consultations • Custom Security Solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Phone, title: "Call Us", info: "011 074 8207", link: "tel:0110748207" },
              { icon: Mail, title: "Email Us", info: "info@scorpiontactical.co.za", link: "mailto:info@scorpiontactical.co.za" },
              { icon: MapPin, title: "Visit Us", info: "34 Stella Avenue, Crown Mines, Johannesburg", link: "#" }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className="group p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-red-500/50 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 transition-colors duration-300">
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 
                  className="text-xl font-black mb-2 uppercase"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {contact.title}
                </h3>
                <p className="text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {contact.info}
                </p>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="tel:0110748207"
              className="inline-flex items-center gap-3 px-12 py-5 bg-red-600 hover:bg-red-700 rounded-full font-black text-xl tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 uppercase"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              <Phone className="w-6 h-6" />
              Emergency Response
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 bg-black border-t border-red-500/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/scorpion-logo.png" 
                alt="Scorpion Tactical" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="font-black uppercase text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Scorpion Tactical
                </h3>
                <p className="text-xs text-white/50">PSIRA Registered</p>
              </div>
            </div>

            <p className="text-white/50 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              © 2016-2026 Scorpion Tactical. All rights reserved.
            </p>

            <div className="flex gap-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Reusable Stack & Shield Branding - Clickable */}
      <StackShieldBranding />

      {/* Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          from {
            text-shadow: 0 0 30px rgba(239, 68, 68, 0.5), 0 0 60px rgba(239, 68, 68, 0.3);
          }
          to {
            text-shadow: 0 0 60px rgba(239, 68, 68, 0.8), 0 0 100px rgba(239, 68, 68, 0.5);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fadeIn 1s ease-out 0.3s both;
        }

        .animate-fade-in-delayed-2 {
          animation: fadeIn 1s ease-out 0.6s both;
        }

        .animate-fade-in-delayed-3 {
          animation: fadeIn 1s ease-out 0.9s both;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slideUp 1s ease-out;
        }

        * {
          scroll-behavior: smooth;
        }

        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default ScorpionTacticalWebsite;