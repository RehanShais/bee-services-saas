"use client";

import React, { useState } from 'react';
import { 
  Hexagon, 
  MessageSquare, 
  Zap, 
  Check, 
  Menu, 
  X, 
  LogOut, 
  Send,
  FileText,
  CreditCard,
  ChevronRight,
  Shield,
  Bot
} from 'lucide-react';

// --- Shared UI Components ---

const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white/70 backdrop-blur-lg border border-white/40 shadow-xl rounded-2xl p-6 ${className}`}>
    {children}
  </div>
);

const Button = ({ children, variant = "primary", onClick, className = "", type = "button" }: any) => {
  const baseStyle = "px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants: any = {
    primary: "bg-amber-400 hover:bg-amber-500 text-slate-900 shadow-lg shadow-amber-400/30",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20",
    outline: "border-2 border-slate-900 text-slate-900 hover:bg-slate-100",
    ghost: "text-slate-600 hover:bg-amber-50 hover:text-amber-600",
    danger: "bg-red-50 text-red-600 hover:bg-red-100"
  };

  return (
    <button type={type === "submit" ? "submit" : "button"} onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Input = ({ label, placeholder, type = "text", id, value, onChange, multiline = false }: any) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
    {multiline ? (
      <textarea 
        id={id}
        rows={4}
        className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all resize-none text-slate-900"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    ) : (
      <input 
        id={id}
        type={type}
        className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all text-slate-900"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    )}
  </div>
);

const Badge = ({ children, color = "amber" }: any) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color === 'green' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
    {children}
  </span>
);

// --- Page Components ---

const LandingPage = ({ navigate }: any) => (
  <div className="space-y-24 pb-20">
    <section className="text-center pt-20 px-4 max-w-5xl mx-auto">
      <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold tracking-wide">
        🚀 The No-Code AI Solution
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
        Put your customer support <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">on autopilot.</span>
      </h1>
      <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
        Create a custom AI chatbot for your business in minutes. No coding required. Just upload your data, and we handle the rest.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button onClick={() => navigate('signup')}>Start for Free</Button>
        <Button variant="outline" onClick={() => navigate('pricing')}>View Pricing</Button>
      </div>
      
      <div className="mt-16 relative mx-auto max-w-4xl">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-600 rounded-2xl blur opacity-20"></div>
        <GlassCard className="relative overflow-hidden">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="ml-2 text-xs text-slate-400">Bee Services - Assistant Preview</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 space-y-3 text-left">
              <div className="h-2 w-20 bg-slate-200 rounded"></div>
              <div className="h-8 w-full bg-slate-100 rounded-lg"></div>
              <div className="h-32 w-full bg-slate-100 rounded-lg mt-4"></div>
            </div>
            <div className="col-span-2 bg-slate-50 rounded-xl p-4 border border-slate-100">
               <div className="flex flex-col space-y-4">
                 <div className="self-start bg-white p-3 rounded-t-2xl rounded-br-2xl shadow-sm text-sm border border-slate-100 text-slate-700">
                   👋 Hi! I'm your Bee Assistant. How can I help you today?
                 </div>
                 <div className="self-end bg-amber-400 text-slate-900 p-3 rounded-t-2xl rounded-bl-2xl shadow-sm text-sm font-medium">
                   What are your business hours?
                 </div>
                 <div className="self-start bg-white p-3 rounded-t-2xl rounded-br-2xl shadow-sm text-sm border border-slate-100 text-slate-700">
                   We are available 24/7 thanks to our automated buzzing staff!
                 </div>
               </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>

    <section className="px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900">Simple 3-step setup</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <FileText size={32} />, title: "1. Upload Data", desc: "Paste text or upload documents about your business." },
          { icon: <Zap size={32} />, title: "2. Train", desc: "Our AI learns your specific business knowledge instantly." },
          { icon: <MessageSquare size={32} />, title: "3. Launch", desc: "Add to your site with one click and start saving time." }
        ].map((step, idx) => (
          <GlassCard key={idx} className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-6">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
            <p className="text-slate-600">{step.desc}</p>
          </GlassCard>
        ))}
      </div>
    </section>

    {/* Trust Signals - Fixed unused imports */}
    <section className="text-center px-4 py-10">
      <div className="inline-flex gap-8 justify-center flex-wrap opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
         <span className="text-xl font-bold text-slate-400 flex items-center gap-2"><Shield size={20}/> Secure Data</span>
         <span className="text-xl font-bold text-slate-400 flex items-center gap-2"><Bot size={20}/> GPT-4 Powered</span>
         <span className="text-xl font-bold text-slate-400 flex items-center gap-2"><CreditCard size={20}/> Cancel Anytime</span>
      </div>
    </section>
  </div>
);

const PricingPage = ({ navigate }: any) => {
  const [cycle, setCycle] = useState('monthly');
  const plans = [
    { name: "Starter", price: cycle === 'monthly' ? "29" : "24", feat: ["1 Chatbot", "500 Messages"] },
    { name: "Business", price: cycle === 'monthly' ? "79" : "65", feat: ["5 Chatbots", "2,500 Messages", "No Branding"], popular: true },
    { name: "Agency", price: cycle === 'monthly' ? "199" : "165", feat: ["Unlimited Bots", "White-label"] }
  ];

  return (
    <div className="pt-10 pb-20 px-4 max-w-6xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Pricing Plans</h1>
      <div className="inline-flex bg-slate-100 p-1 rounded-xl mb-12">
        <button onClick={() => setCycle('monthly')} className={`px-6 py-2 rounded-lg text-sm font-medium ${cycle === 'monthly' ? 'bg-white shadow text-slate-900' : 'text-slate-500'}`}>Monthly</button>
        <button onClick={() => setCycle('yearly')} className={`px-6 py-2 rounded-lg text-sm font-medium ${cycle === 'yearly' ? 'bg-white shadow text-slate-900' : 'text-slate-500'}`}>Yearly</button>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((p, i) => (
          <GlassCard key={i} className={p.popular ? 'border-amber-400 ring-2 ring-amber-400' : ''}>
            <h3 className="text-xl font-bold mb-2 text-slate-900">{p.name}</h3>
            <div className="text-4xl font-bold mb-6 text-slate-900">${p.price}<span className="text-sm text-slate-500">/mo</span></div>
            <ul className="text-left space-y-4 mb-8">
              {p.feat.map((f, j) => <li key={j} className="flex items-center gap-2 text-slate-600"><Check size={16} className="text-green-500" /> {f}</li>)}
            </ul>
            <Button className="w-full" variant={p.popular ? 'primary' : 'outline'} onClick={() => navigate('signup')}>Get Started</Button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

const Dashboard = ({ navigate }: any) => (
  <div className="px-4 py-8 max-w-7xl mx-auto">
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-slate-900">Your Bots</h1>
      <Button onClick={() => navigate('bot-builder')}>+ New Assistant</Button>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      <GlassCard>
        <div className="text-slate-500 text-sm mb-1">Total Conversations</div>
        <div className="text-3xl font-bold text-slate-900">1,429</div>
      </GlassCard>
      <GlassCard>
        <div className="text-slate-500 text-sm mb-1">Messages Remaining</div>
        <div className="text-3xl font-bold text-slate-900">1,071 <span className="text-sm font-normal">/ 2,500</span></div>
      </GlassCard>
      <GlassCard className="bg-slate-900 text-white border-none">
        <div className="text-slate-400 text-sm mb-1">Subscription</div>
        <div className="text-xl font-bold">Business Plan</div>
        <button className="text-amber-400 text-xs mt-2 hover:underline" onClick={() => navigate('billing')}>Manage Billing</button>
      </GlassCard>
    </div>
  </div>
);

const BotBuilder = ({ navigate }: any) => {
  const [messages, setMessages] = useState([{ role: 'ai', text: 'Hello! Preview your bot here.' }]);
  return (
    <div className="flex flex-col h-[calc(100vh-80px)] md:flex-row">
      <div className="w-full md:w-1/3 bg-white border-r p-6 overflow-y-auto">
        <h2 className="text-xl font-bold mb-6 text-slate-900">Bot Settings</h2>
        <Input label="Assistant Name" placeholder="e.g. Sales Bee" />
        <Input label="Instructions" placeholder="e.g. You are a helpful assistant..." multiline={true} />
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">Tone</label>
          <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900">
            <option>Professional</option>
            <option>Friendly</option>
          </select>
        </div>
        <Button className="w-full">Save Assistant</Button>
        <button className="w-full text-slate-400 text-sm mt-4 hover:text-slate-600" onClick={() => navigate('dashboard')}>Cancel</button>
      </div>
      <div className="flex-1 bg-slate-50 p-8 flex justify-center">
        <div className="w-full max-w-md h-full bg-white rounded-3xl shadow-2xl border flex flex-col overflow-hidden">
          <div className="bg-amber-400 p-4 font-bold text-slate-900">Chat Preview</div>
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {messages.map((m, i) => (
              <div key={i} className={`p-3 rounded-2xl text-sm ${m.role === 'ai' ? 'bg-slate-100 self-start text-slate-700' : 'bg-amber-100 self-end text-slate-900'}`}>
                {m.text}
              </div>
            ))}
          </div>
          <div className="p-4 border-t flex gap-2">
            <input className="flex-1 bg-slate-100 px-4 py-2 rounded-full outline-none text-slate-900 text-sm" placeholder="Ask something..." />
            <button className="p-2 bg-amber-400 rounded-full"><Send size={16}/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BillingPage = ({ navigate }: any) => (
  <div className="px-4 py-8 max-w-4xl mx-auto">
    <button onClick={() => navigate('dashboard')} className="mb-6 flex items-center gap-2 text-sm text-slate-500 hover:text-amber-600 transition-colors">
      <ChevronRight className="rotate-180" size={16} /> Back to Dashboard
    </button>
    <h1 className="text-3xl font-bold text-slate-900 mb-8">Billing & Subscription</h1>
    <GlassCard>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Current Plan</h2>
          <p className="text-slate-500">Business Plan (Monthly)</p>
        </div>
        <Badge color="green">Active</Badge>
      </div>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-3xl font-bold text-slate-900">$79</span>
        <span className="text-slate-500">/mo</span>
      </div>
      <div className="mt-8 flex gap-4 border-t border-slate-100 pt-6">
        <Button variant="outline">Downgrade</Button>
        <Button variant="danger" className="ml-auto">Cancel</Button>
      </div>
    </GlassCard>
  </div>
);

const ContactPage = () => (
  <div className="pt-10 pb-20 px-4 max-w-4xl mx-auto">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in touch</h1>
      <p className="text-slate-600">We are here to help. Our team responds within 24 hours.</p>
    </div>
    <GlassCard className="max-w-xl mx-auto">
      <form className="space-y-4">
        <Input label="Name" placeholder="Your Name" />
        <Input label="Email" placeholder="you@company.com" type="email" />
        <Input label="Message" placeholder="How can we help?" multiline={true} />
        <Button className="w-full">Send Message</Button>
      </form>
    </GlassCard>
  </div>
);

const LegalPage = ({ type }: any) => (
  <div className="pt-10 pb-20 px-4 max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold text-slate-900 mb-8">{type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}</h1>
    <GlassCard>
      <div className="prose prose-slate text-slate-600">
        <p>This is a placeholder for the {type} page. In a real application, you would include your full legal text here.</p>
      </div>
    </GlassCard>
  </div>
);

export default function App() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = (p: string) => { setPage(p); setIsMobileMenuOpen(false); window.scrollTo(0, 0); };
  const login = () => { setUser(true); setPage('dashboard'); };
  const logout = () => { setUser(false); setPage('home'); };

  return (
    <div className="min-h-screen font-sans selection:bg-amber-200">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('home')}>
          <div className="bg-slate-900 p-1.5 rounded-lg"><Hexagon size={24} className="text-amber-400" fill="currentColor" /></div>
          <span className="font-bold text-xl text-slate-900">Bee Services</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {!user ? (
            <>
              <button onClick={() => navigate('home')} className="text-slate-600 font-medium">Home</button>
              <button onClick={() => navigate('pricing')} className="text-slate-600 font-medium">Pricing</button>
              <button onClick={() => navigate('login')} className="text-slate-900 font-medium">Login</button>
              <Button onClick={() => navigate('signup')}>Start Free</Button>
            </>
          ) : (
            <>
              <button onClick={() => navigate('dashboard')} className="text-slate-600 font-medium">Dashboard</button>
              <button onClick={logout} className="text-red-500"><LogOut size={20}/></button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-900">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-white z-40 p-4 flex flex-col gap-4">
          {!user ? (
            <>
              <button onClick={() => navigate('home')} className="text-left py-2 font-medium text-slate-900">Home</button>
              <button onClick={() => navigate('pricing')} className="text-left py-2 font-medium text-slate-900">Pricing</button>
              <button onClick={() => navigate('login')} className="text-left py-2 font-medium text-slate-900">Login</button>
              <Button onClick={() => navigate('signup')}>Start Free</Button>
            </>
          ) : (
            <>
              <button onClick={() => navigate('dashboard')} className="text-left py-2 font-medium text-slate-900">Dashboard</button>
              <button onClick={logout} className="text-left py-2 font-medium text-red-500">Logout</button>
            </>
          )}
        </div>
      )}

      <main>
        {page === 'home' && <LandingPage navigate={navigate} />}
        {page === 'pricing' && <PricingPage navigate={navigate} />}
        {page === 'dashboard' && <Dashboard navigate={navigate} />}
        {page === 'bot-builder' && <BotBuilder navigate={navigate} />}
        {page === 'billing' && <BillingPage navigate={navigate} />}
        {page === 'contact' && <ContactPage />}
        {page === 'privacy' && <LegalPage type="privacy" />}
        {page === 'terms' && <LegalPage type="terms" />}
        {(page === 'login' || page === 'signup') && (
          <div className="min-h-[80vh] flex items-center justify-center p-4">
            <GlassCard className="w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">{page === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
              <Input label="Email" placeholder="you@company.com" />
              <Input label="Password" type="password" placeholder="••••••••" />
              <Button className="w-full mt-4" onClick={login}>{page === 'login' ? 'Log In' : 'Sign Up'}</Button>
            </GlassCard>
          </div>
        )}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
             <div className="flex items-center gap-2 text-white mb-4">
              <Hexagon size={20} className="text-amber-400" fill="currentColor" />
              <span className="font-bold">Bee Services</span>
            </div>
            <p className="text-sm">© 2024 Bee Services. All rights reserved.</p>
          </div>
          <div className="flex gap-10 text-sm">
            <div className="flex flex-col gap-2">
              <span className="text-white font-bold mb-2">Legal</span>
              <button onClick={() => navigate('privacy')} className="text-left hover:text-amber-400">Privacy</button>
              <button onClick={() => navigate('terms')} className="text-left hover:text-amber-400">Terms</button>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white font-bold mb-2">Support</span>
              <button onClick={() => navigate('contact')} className="text-left hover:text-amber-400">Contact Us</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
