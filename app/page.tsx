"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Hexagon, 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  LayoutDashboard, 
  Code, 
  Users,
  Bot
} from 'lucide-react';

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Logic for scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden selection:bg-amber-200">
      
      {/* Background Decorative Elements - Fixed Z-Index for Vercel rendering */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-300/20 rounded-full blur-[80px] md:blur-[120px] opacity-60"></div>
        <div className="absolute top-[40%] right-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-orange-200/20 rounded-full blur-[80px] md:blur-[120px] opacity-50"></div>
      </div>

      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Hexagon className="w-8 h-8 text-amber-500 fill-amber-500/20 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Bee Services</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Home</Link>
            <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Pricing</Link>
            <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Contact</Link>
            <div className="h-4 w-px bg-slate-300 mx-2"></div>
            <button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl p-6 flex flex-col gap-4">
            <Link href="/" className="font-medium text-slate-600" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/pricing" className="font-medium text-slate-600" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link href="/contact" className="font-medium text-slate-600" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <button className="bg-amber-500 text-white font-bold py-3 rounded-xl w-full">Get Started</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-full px-4 py-1.5 mb-8">
            <span className="text-xs font-bold text-amber-700 tracking-wide uppercase">AI White-Label SaaS</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Put your customer support <br className="hidden md:block" />
            <span className="text-amber-500">on autopilot.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Bee Services provides the infrastructure you need to deploy intelligent, human-like support agents in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-lg px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg">
              Get Started <ArrowRight size={20} />
            </button>
            <Link href="/pricing" className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-lg px-8 py-4 rounded-full transition-all text-center">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "AI Chatbots", desc: "Train custom bots on your own data sources instantly.", icon: <Bot /> },
            { title: "White-Label APIs", desc: "Build your own frontend while we handle the AI logic.", icon: <Code /> },
            { title: "SaaS Dashboard", desc: "Manage all your clients and bots from one panel.", icon: <LayoutDashboard /> },
            { title: "Multi-Tenant Support", desc: "Data isolation and sub-accounts built-in.", icon: <Users /> }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6 text-amber-600">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-slate-100/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <span className="text-amber-500 font-black text-xl mb-4 block">STEP 01</span>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Choose a plan</h3>
              <p className="text-slate-500">Select the infrastructure capacity that fits your agency needs.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <span className="text-amber-500 font-black text-xl mb-4 block">STEP 02</span>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Create AI bots</h3>
              <p className="text-slate-500">Upload your documents or website URLs to train your custom models.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <span className="text-amber-500 font-black text-xl mb-4 block">STEP 03</span>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Embed & Sell</h3>
              <p className="text-slate-500">Embed on client sites or resell access via your white-label portal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bee Services */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
          <div className="flex-1 z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Built for startups <br/>and agencies</h2>
            <div className="space-y-4">
              {["Fast deployment", "Scalable infrastructure", "Secure & reliable"].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-amber-400" size={20} />
                  <span className="text-lg text-slate-300">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative z-10 w-full">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
              <Zap className="text-amber-400 mb-4" size={40} />
              <p className="text-xl font-semibold">Scale instantly</p>
              <p className="text-slate-400 mt-2 text-sm">Our infrastructure handles the heavy lifting so you can focus on your clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Ready to scale?</h2>
        <p className="text-slate-500 mb-10 max-w-xl mx-auto">Get access to all white-label features starting today.</p>
        <Link href="/pricing" className="bg-white border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-colors inline-block">
          Explore All Pricing Plans
        </Link>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-amber-400 rounded-[2.5rem] p-12 text-center text-slate-900">
          <h2 className="text-4xl font-bold mb-6">Start your AI agency today.</h2>
          <p className="text-lg font-medium opacity-80 mb-10">Sign up now and get your first chatbot live in under 5 minutes.</p>
          <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Hexagon className="text-amber-500 fill-amber-500/10" />
            <span className="font-bold text-xl">Bee Services</span>
          </div>
          <div className="flex justify-center gap-8 font-medium text-slate-500">
            <Link href="/" className="hover:text-slate-900">Home</Link>
            <Link href="/pricing" className="hover:text-slate-900">Pricing</Link>
            <Link href="/contact" className="hover:text-slate-900">Contact</Link>
          </div>
          <div className="text-sm text-slate-400 md:text-right">
            © {new Date().getFullYear()} Bee Services. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
