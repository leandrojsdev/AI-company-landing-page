import React, { useState, useEffect } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar
} from 'recharts';
import { 
  ArrowRight, ChevronRight, Menu, X, 
  TrendingUp, Globe, Shield, Cpu, ExternalLink 
} from 'lucide-react';

import Section from './components/Section';
import ChatInterface from './components/ChatInterface';
import { 
  COMPANY_NAME, NAVIGATION_LINKS, TIMELINE_EVENTS, 
  PRODUCTS, GROWTH_DATA, AGENT_DATA 
} from './constants';


function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-slate-300 font-sans selection:bg-slate-600 selection:text-white">
      
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-40 transition-all duration-500 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-slate-100 to-slate-500 rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
            <span className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight ml-2">
              ARGENTUM
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {NAVIGATION_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium tracking-wide hover:text-white transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a 
              href="#contact"
              className="border border-slate-600 hover:bg-white hover:text-black hover:border-white px-6 py-2 text-sm transition-all duration-300 rounded-sm"
            >
              Investor Portal
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black flex flex-col items-center justify-center space-y-8 animate-fade-in md:hidden">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif text-white"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0 z-0">
           <img 
            src="/assets/img/bg.jpeg"
            alt="AI Technology Background" 
            className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite] transform rotate-180"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-4 py-1 border border-slate-700 rounded-full bg-slate-900/50 backdrop-blur-sm">
             <span className="text-xs font-semibold tracking-widest uppercase text-slate-300">
               Series B Funding Round Open
             </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 tracking-tight leading-tight">
            Architecting the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-slate-700">
              Autonomous Era
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Argentum Intelligence deploys sovereign AI agents that govern infrastructure, optimize logistics, and drive robotics with zero human intervention.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#trajectory" className="bg-white text-black px-8 py-4 font-semibold tracking-wide hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group">
              View Trajectory <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </a>
            <a href="#vision" className="border border-slate-700 text-white px-8 py-4 font-semibold tracking-wide hover:bg-slate-900 transition-colors">
              Our Vision
            </a>
          </div>
        </div>
      </div>

      {/* Metrics / Impact Section */}
      <Section id="impact" darker>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">Financial Performance</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-white mb-6">Exponential Growth in <br/>Real-World Application</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Since our inception, we have doubled our revenue year-over-year, driven by enterprise adoption in the automotive and aerospace sectors. Our agents don't just chat; they perform.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="border-l border-slate-700 pl-6">
                <div className="text-4xl font-bold text-white mb-1">310M+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide">2024 Revenue</div>
              </div>
              <div className="border-l border-slate-700 pl-6">
                <div className="text-4xl font-bold text-white mb-1">120k+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide">Deployed Agents</div>
              </div>
            </div>
            
            <a href="#products" className="text-white border-b border-white pb-1 inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
              Explore Case Studies <ChevronRight size={16} />
            </a>
          </div>

          <div className="bg-slate-900/30 p-8 rounded-xl border border-slate-800 backdrop-blur-sm">
            <h4 className="text-lg font-medium text-white mb-6">Revenue Trajectory ($M)</h4>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={GROWTH_DATA}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#e2e8f0" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#e2e8f0" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} vertical={false} />
                  <XAxis dataKey="year" stroke="#64748b" tick={{fill: '#64748b'}} />
                  <YAxis stroke="#64748b" tick={{fill: '#64748b'}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#e2e8f0" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </Section>

      {/* Trajectory / History */}
      <Section id="trajectory" className="border-t border-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">Our History</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white">A Legacy of Innovation</h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent"></div>

          {TIMELINE_EVENTS.map((event, index) => (
            <div key={event.year} className={`relative flex items-center mb-12 md:justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              
              {/* Spacer for mobile alignment */}
              <div className="md:hidden w-[50px]"></div>

              {/* Content Box */}
              <div className={`w-full md:w-[45%] bg-slate-900/20 border border-slate-800 p-6 rounded-lg hover:border-slate-600 transition-colors group ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 mb-2">
                  {event.year}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{event.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{event.description}</p>
              </div>

              {/* Dot */}
              <div className="absolute left-[16px] md:left-1/2 transform md:-translate-x-1/2 w-2 h-2 bg-black border-2 border-white rounded-full z-10 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
            </div>
          ))}
        </div>
      </Section>

      {/* Vision / Mission */}
      <Section id="vision" darker>
        <div className="max-w-4xl mx-auto text-center">
           <Globe className="w-12 h-12 text-slate-400 mx-auto mb-8 opacity-80" />
           <h3 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
             "To liberate human potential by delegating the complexity of the physical and digital world to reliable, ethical, and autonomous intelligence."
           </h3>
           <div className="flex justify-center gap-12 mt-12">
             <div className="text-center">
               <div className="text-white font-bold tracking-wider uppercase text-sm mb-2">Precision</div>
               <div className="w-12 h-px bg-slate-700 mx-auto"></div>
             </div>
             <div className="text-center">
               <div className="text-white font-bold tracking-wider uppercase text-sm mb-2">Autonomy</div>
               <div className="w-12 h-px bg-slate-700 mx-auto"></div>
             </div>
             <div className="text-center">
               <div className="text-white font-bold tracking-wider uppercase text-sm mb-2">Elegance</div>
               <div className="w-12 h-px bg-slate-700 mx-auto"></div>
             </div>
           </div>
        </div>
      </Section>

      {/* Products */}
      <Section id="products" className="border-t border-slate-900">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">Core Technology</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white max-w-2xl">
            The Trinity of Argentum
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group p-8 border border-slate-800 bg-slate-950/50 hover:bg-slate-900 transition-all duration-500 rounded-sm hover:-translate-y-2">
              <div className="mb-6 text-slate-300 group-hover:text-white transition-colors">
                <product.icon size={40} strokeWidth={1} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{product.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 border-b border-slate-800 pb-6 group-hover:border-slate-600">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 uppercase">Impact Metric</span>
                <span className="text-sm font-bold text-white">{product.stats}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA / Contact */}
      <Section id="contact" darker className="text-center">
        <div className="max-w-3xl mx-auto py-12 border border-slate-800 bg-gradient-to-b from-slate-900/50 to-black p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Invest in the Future</h2>
          <p className="text-slate-400 mb-8">
            Access our data room, schedule a meeting with the founding team, or request a technical demonstration of the Argent Core.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button className="bg-white text-black px-8 py-3 font-medium hover:bg-slate-200 transition-colors">
               Request Access
             </button>
             <button className="border border-slate-700 text-white px-8 py-3 font-medium hover:bg-slate-800 transition-colors">
               Download 2024 Report
             </button>
          </div>
          
          <p className="mt-8 text-xs text-slate-600">
            Authorized investors only. All inquiries subject to NDA.
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-700 rotate-45"></div>
            <span className="text-lg font-serif font-bold text-white tracking-tight">
              ARGENTUM
            </span>
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Investor Login</a>
          </div>
          <div className="text-xs text-slate-600">
            © 2024 Argentum Intelligence AG. Zurich, Switzerland.
          </div>
        </div>
      </footer>

      {/* Interactive Chatbot */}
      <ChatInterface />
    </div>
  );
}

export default App;
