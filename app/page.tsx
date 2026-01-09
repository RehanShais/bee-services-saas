"use client";

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Standard Next.js import (disabled for preview environment)
import { 
  Hexagon, 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  LayoutDashboard, 
  Code, 
  Users,
  Bot
} from 'lucide-react';

// Mock Link component to make the preview work without Next.js router
const Link = ({ href, children, className, ...props }) => (
  <a 
    href={href} 
    className={className} 
    {...props} 
    onClick={(e) => {
      e.preventDefault(); 
      console.log(`Navigating to ${href}`);
    }}
  >
    {children}
  </a>
);

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden selection:bg-amber-200">
      
      {/* Global Background Ambient Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-amber-300/20 rounded-full blur-3xl opacity-60 animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-3 shadow-sm' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer group">
            <div className="relative">
              <Hexagon className="w-8 h-8 text-amber-500 fill-amber-500/20 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-amber-400 blur-lg opacity-20"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Bee Services</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Home</Link>
            <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Pricing</Link>
            <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Contact</Link>
            
            <div className="h-4 w-px bg-slate-300 mx-2"></div>
            
            <button className="text-sm font-medium text-slate-900 hover:text-amber-600 transition-colors">Login</button>
            <button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
            <Link href="/" className="text-left font-medium text-slate-600 py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/pricing" className="text-left font-medium text-slate-600 py-2" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link href="/contact" className="text-left font-medium text-slate-600 py-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <button className="bg-amber-500 text-white font-bold py-3 rounded-xl w-full text-center shadow-md">
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-full px-4 py-1.5 mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-amber-500"></span>
            <span className="text-xs font-bold text-amber-700 tracking-wide uppercase">AI White-Label SaaS</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Put your customer support <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
              on autopilot.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Bee Services provides the infrastructure you need to deploy intelligent, human-like support agents in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-lg px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-amber-400/50 transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link href="/pricing" className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-lg px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What We Offer</h2>
          <p className="text-slate-500 text-lg">Everything you need to run a modern AI business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "AI Chatbots", 
              desc: "Train custom bots on your own data sources instantly.", 
              icon: <Bot className="text-amber-600" /> 
            },
            { 
              title: "White-Label APIs", 
              desc: "Build your own frontend while we handle the AI logic.", 
              icon: <Code className="text-amber-600" /> 
            },
            { 
              title: "SaaS Dashboard", 
              desc: "Manage all your clients and bots from one beautiful panel.", 
              icon: <LayoutDashboard className="text-amber-600" /> 
            },
            { 
              title: "Multi-Tenant", 
              desc: "Data isolation and sub-accounts built-in by default.", 
              icon: <Users className="text-amber-600" /> 
            }
          ].map((item, idx) => (
            <div key={idx} className="group p-6 rounded-3xl bg-white/60 backdrop-blur-sm border border-slate-100 hover:border-amber-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-amber-100/40 transition-all duration-300">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-400 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-white/40 border-y border-slate-200/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-500 text-lg">Go from zero to deployed in three simple steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "1. Choose a Plan", desc: "Select the capacity that fits your agency needs.", step: "01" },
              { title: "2. Create AI Bots", desc: "Upload knowledge bases and configure personality.", step: "02" },
              { title: "3. Embed & Sell", desc: "Deploy to client sites or resell via API.", step: "03" }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50">
                <div className="text-6xl font-black text-slate-100 absolute top-4 right-6 select-none -z-0">
                  {item.step}
                </div>
                <div className="relative z-10 pt-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Bee Services (Dark Section) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Why Bee Services?
            </h2>
            <p className="text-slate-400 text-lg max-w-lg">
              We built the platform we wished we had when we started. Secure, scalable, and designed for growth.
            </p>
            
            <ul className="space-y-6 mt-8">
              {[
                { label: "Fast Deployment", sub: "Launch new bots in seconds, not days." },
                { label: "Scalable Infrastructure", sub: "Handle millions of messages without lag." },
                { label: "Secure & Reliable", sub: "Enterprise-grade encryption and uptime." },
                { label: "Built for Startups", sub: "Pricing and features that scale with you." }
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 mt-1">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <span className="text-slate-200 font-bold block">{feature.label}</span>
                    <span className="text-slate-500 text-sm">{feature.sub}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-1 flex justify-center">
             {/* Visual Abstraction for Trust/Speed */}
             <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-amber-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl h-full flex flex-col justify-center items-center text-center">
                   <Zap size={64} className="text-amber-400 mb-6" />
                   <h3 className="text-2xl font-bold mb-2">Lightning Fast</h3>
                   <p className="text-slate-400">Optimized for low-latency responses worldwide.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h2>
          <p className="text-slate-600 text-lg mb-10">
            Start small and scale as you grow. No hidden fees, no long-term contracts.
          </p>
          
          <Link href="/pricing" className="inline-flex items-center gap-2 bg-white text-slate-900 border border-slate-200 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-slate-50 hover:scale-105 transition-all duration-300">
             View Full Pricing
             <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 pb-32">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 rounded-[3rem] border border-white p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 relative z-10">
            Ready to start building?
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto relative z-10">
            Join the platform powering the next generation of AI support.
          </p>
          
          <button className="relative z-10 bg-slate-900 text-white text-lg font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
            Get Started Now
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand */}
          <div className="flex items-center gap-2 text-white">
            <Hexagon className="fill-amber-500 text-amber-500" />
            <span className="font-bold text-xl">Bee Services</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <Link href="/pricing" className="hover:text-amber-400 transition-colors">Pricing</Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-slate-600">
            © {new Date().getFullYear()} Bee Services. All rights reserved.
          </div>

        </div>
      </footer>

    </div>
  );
}
