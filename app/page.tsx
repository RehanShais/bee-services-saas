import React, { useState, useEffect } from 'react';
import { 
  Hexagon, 
  MessageSquare, 
  Zap, 
  Shield, 
  Check, 
  Menu, 
  X, 
  ChevronRight, 
  LayoutDashboard, 
  Bot, 
  CreditCard, 
  Settings, 
  LogOut, 
  Send,
  User,
  Mail,
  Lock,
  HelpCircle,
  FileText
} from 'lucide-react';

/**
 * Bee Services - Complete SaaS Frontend
 * Theme: Honey Yellow, Black/Dark Gray, Soft White
 * Style: Glassmorphism, Modern, Clean
 */

// --- Shared UI Components ---

const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-white/70 backdrop-blur-lg border border-white/40 shadow-xl rounded-2xl p-6 ${className}`}>
    {children}
  </div>
);

const Button = ({ children, variant = "primary", onClick, className = "", type = "button" }) => {
  const baseStyle = "px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-amber-400 hover:bg-amber-500 text-slate-900 shadow-lg shadow-amber-400/30",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20",
    outline: "border-2 border-slate-900 text-slate-900 hover:bg-slate-100",
    ghost: "text-slate-600 hover:bg-amber-50 hover:text-amber-600",
    danger: "bg-red-50 text-red-600 hover:bg-red-100"
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Input = ({ label, placeholder, type = "text", id, value, onChange, multiline = false }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
    {multiline ? (
      <textarea 
        id={id}
        rows="4"
        className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all resize-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    ) : (
      <input 
        id={id}
        type={type}
        className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    )}
  </div>
);

const Badge = ({ children, color = "amber" }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${color}-100 text-${color}-800`}>
    {children}
  </span>
);

// --- Pages ---

// 1. Home / Landing Page
const LandingPage = ({ navigate }) => (
  <div className="space-y-24 pb-20">
    {/* Hero */}
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
        <Button variant="outline" onClick={() => navigate('how-it-works')}>See How It Works</Button>
      </div>
      
      {/* Abstract Dashboard Preview */}
      <div className="mt-16 relative mx-auto max-w-4xl">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-600 rounded-2xl blur opacity-20"></div>
        <GlassCard className="relative overflow-hidden">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="ml-2 text-xs text-slate-400">Bee Services - Bot Preview</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 space-y-3">
              <div className="h-2 w-20 bg-slate-200 rounded"></div>
              <div className="h-8 w-full bg-slate-100 rounded-lg"></div>
              <div className="h-8 w-3/4 bg-slate-100 rounded-lg"></div>
              <div className="h-32 w-full bg-slate-100 rounded-lg mt-4"></div>
            </div>
            <div className="col-span-2 bg-slate-50 rounded-xl p-4 border border-slate-100">
               <div className="flex flex-col space-y-4">
                 <div className="self-start bg-white p-3 rounded-t-2xl rounded-br-2xl shadow-sm text-sm border border-slate-100">
                   👋 Hi! I'm your Bee Assistant. How can I help you today?
                 </div>
                 <div className="self-end bg-amber-400 text-slate-900 p-3 rounded-t-2xl rounded-bl-2xl shadow-sm text-sm font-medium">
                   What are your pricing plans?
                 </div>
                 <div className="self-start bg-white p-3 rounded-t-2xl rounded-br-2xl shadow-sm text-sm border border-slate-100">
                   We have three simple tiers starting at just $29/mo. Would you like to see the comparison?
                 </div>
               </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>

    {/* How it Works */}
    <section className="px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900">As easy as 1-2-3</h2>
        <p className="text-slate-600 mt-2">You don't need a developer. You just need 5 minutes.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <FileText size={32} />, title: "1. Upload Info", desc: "Paste your website text, PDFs, or FAQs into our secure system." },
          { icon: <Zap size={32} />, title: "2. Train Bot", desc: "Our AI reads your content instantly and learns your business tone." },
          { icon: <MessageSquare size={32} />, title: "3. Embed", desc: "Copy one line of code to your site and start answering customers 24/7." }
        ].map((step, idx) => (
          <GlassCard key={idx} className="text-center hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-6">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-slate-600">{step.desc}</p>
          </GlassCard>
        ))}
      </div>
    </section>

    {/* Features */}
    <section className="bg-slate-900 text-white py-20 -mx-4 md:rounded-3xl md:mx-4 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for growth, designed for simplicity.</h2>
          <div className="space-y-4">
            {[
              "24/7 Automated Customer Support",
              "95+ Languages Supported",
              "Custom Brand Colors & Logos",
              "Seamless Website Integration",
              "Smart Fallback to Human Email"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="bg-amber-500 rounded-full p-1">
                  <Check size={16} className="text-slate-900" />
                </div>
                <span className="text-lg text-slate-200">{feature}</span>
              </div>
            ))}
          </div>
          <Button variant="primary" className="mt-8" onClick={() => navigate('signup')}>Build Your Bot Now</Button>
        </div>
        <div className="relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 blur-[100px] opacity-20"></div>
          <GlassCard className="bg-white/10 border-white/10 backdrop-blur-xl">
             <div className="space-y-4">
                <div className="flex justify-between items-center text-sm text-slate-300 border-b border-white/10 pb-2">
                  <span>Usage This Month</span>
                  <span className="text-amber-400 font-bold">84%</span>
                </div>
                <div className="flex items-center gap-4">
                   <div className="h-2 flex-1 bg-white/10 rounded-full overflow-hidden">
                     <div className="h-full w-[84%] bg-amber-500 rounded-full"></div>
                   </div>
                </div>
                <div className="pt-4">
                  <p className="text-2xl font-bold text-white">1,240</p>
                  <p className="text-sm text-slate-400">Conversations handled automatically</p>
                </div>
             </div>
          </GlassCard>
        </div>
      </div>
    </section>

    {/* Trust Signals */}
    <section className="text-center px-4">
      <div className="inline-flex gap-8 justify-center flex-wrap opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
         <span className="text-xl font-bold text-slate-400 flex items-center gap-2"><Shield size={20}/> Secure Data</span>
         <span className="text-xl font-bold text-slate-400 flex items-center gap-2"><Bot size={20}/> GPT-4 Powered</span>
         <span className="text-xl font-bold text-slate-400 flex items-center gap-2"><CreditCard size={20}/> Cancel Anytime</span>
      </div>
    </section>

    {/* Final CTA */}
    <section className="text-center py-10">
      <GlassCard className="max-w-3xl mx-auto bg-gradient-to-br from-amber-100 to-white border-amber-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to automate your support?</h2>
        <p className="text-slate-600 mb-8">Join 500+ businesses saving hours every day.</p>
        <Button onClick={() => navigate('signup')}>Get Started Free</Button>
      </GlassCard>
    </section>
  </div>
);

// 2. Pricing Page
const PricingPage = ({ navigate }) => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: "Starter",
      price: billingCycle === 'monthly' ? "29" : "24",
      desc: "Perfect for solo founders.",
      features: ["1 AI Chatbot", "500 Messages/mo", "Basic Analytics", "Email Support"],
      cta: "Start Free Trial",
      highlight: false
    },
    {
      name: "Business",
      price: billingCycle === 'monthly' ? "79" : "65",
      desc: "For growing startups.",
      features: ["3 AI Chatbots", "2,500 Messages/mo", "Remove 'Powered by Bee'", "Priority Support", "Custom Tone"],
      cta: "Get Business",
      highlight: true
    },
    {
      name: "Agency",
      price: billingCycle === 'monthly' ? "199" : "165",
      desc: "White-label for clients.",
      features: ["10 AI Chatbots", "Unlimited Messages", "Full White-Labeling", "API Access", "Dedicated Account Manager"],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <div className="pt-10 pb-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h1>
        <p className="text-slate-600 mb-8">No hidden fees. Change plans anytime.</p>
        
        {/* Toggle */}
        <div className="inline-flex bg-slate-100 p-1 rounded-xl">
          <button 
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>
          <button 
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${billingCycle === 'yearly' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
            onClick={() => setBillingCycle('yearly')}
          >
            Yearly <span className="text-xs text-amber-600 ml-1">-20%</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <GlassCard key={i} className={`relative flex flex-col ${plan.highlight ? 'border-amber-400 ring-4 ring-amber-400/10' : ''}`}>
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
            )}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
              <p className="text-slate-500 text-sm mt-1">{plan.desc}</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <div className="space-y-4 flex-grow mb-8">
              {plan.features.map((feature, f) => (
                <div key={f} className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="bg-green-100 rounded-full p-0.5">
                    <Check size={12} className="text-green-600" />
                  </div>
                  {feature}
                </div>
              ))}
            </div>
            <Button 
              variant={plan.highlight ? 'primary' : 'outline'} 
              className="w-full"
              onClick={() => navigate(plan.name === "Agency" ? 'contact' : 'signup')}
            >
              {plan.cta}
            </Button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

// 3. Signup Page
const SignupPage = ({ navigate, onLogin }) => (
  <div className="min-h-screen flex items-center justify-center px-4 py-12">
    <GlassCard className="w-full max-w-md">
      <div className="text-center mb-8">
        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center mx-auto mb-4 text-slate-900">
          <Hexagon size={28} fill="currentColor" className="text-amber-400 bg-slate-900 rounded-lg p-1" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Create your Bee account</h2>
        <p className="text-slate-600 mt-2">Start your 14-day free trial.</p>
      </div>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
        <Input id="s-name" label="Company Name" placeholder="Acme Inc." />
        <Input id="s-email" label="Work Email" placeholder="you@company.com" type="email" />
        <Input id="s-pass" label="Password" placeholder="••••••••" type="password" />
        
        <div className="flex items-start gap-3 mt-4">
          <input type="checkbox" id="terms" className="mt-1" required />
          <label htmlFor="terms" className="text-xs text-slate-500">
            I agree to the <button type="button" onClick={() => navigate('terms')} className="text-amber-600 hover:underline">Terms</button> and <button type="button" onClick={() => navigate('privacy')} className="text-amber-600 hover:underline">Privacy Policy</button>.
          </label>
        </div>

        <Button type="submit" className="w-full mt-6">Create Account</Button>
      </form>
      <div className="mt-6 text-center text-sm text-slate-500">
        Already have an account? <button onClick={() => navigate('login')} className="text-amber-600 font-semibold hover:underline">Log in</button>
      </div>
    </GlassCard>
  </div>
);

// 4. Login Page
const LoginPage = ({ navigate, onLogin }) => (
  <div className="min-h-screen flex items-center justify-center px-4 py-12">
    <GlassCard className="w-full max-w-md">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Welcome back</h2>
        <p className="text-slate-600 mt-2">Manage your intelligent assistants.</p>
      </div>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
        <Input id="l-email" label="Email Address" placeholder="you@company.com" type="email" />
        <div className="relative">
          <Input id="l-pass" label="Password" placeholder="••••••••" type="password" />
          <button type="button" className="absolute top-0 right-0 text-xs text-amber-600 hover:underline">Forgot?</button>
        </div>
        <Button type="submit" className="w-full mt-2">Log In</Button>
      </form>
      <div className="mt-6 text-center text-sm text-slate-500">
        Don't have an account? <button onClick={() => navigate('signup')} className="text-amber-600 font-semibold hover:underline">Sign up</button>
      </div>
    </GlassCard>
  </div>
);

// 5. Dashboard
const Dashboard = ({ navigate }) => (
  <div className="px-4 py-8 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600">Welcome back, Acme Inc.</p>
      </div>
      <div className="flex gap-3">
        <Button variant="outline" onClick={() => navigate('billing')}>Manage Subscription</Button>
        <Button onClick={() => navigate('bot-builder')}>+ Create New Bot</Button>
      </div>
    </div>

    {/* Plan Summary */}
    <div className="grid md:grid-cols-3 gap-6 mb-10">
      <GlassCard className="flex flex-col justify-between">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-amber-100 rounded-lg text-amber-600">
             <Bot size={24} />
          </div>
          <Badge>Business Plan</Badge>
        </div>
        <div>
          <p className="text-sm text-slate-500 mb-1">Active Bots</p>
          <p className="text-3xl font-bold text-slate-900">2<span className="text-base font-normal text-slate-400">/5</span></p>
        </div>
      </GlassCard>

      <GlassCard className="flex flex-col justify-between">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
             <MessageSquare size={24} />
          </div>
        </div>
        <div>
          <p className="text-sm text-slate-500 mb-1">Messages Used</p>
          <p className="text-3xl font-bold text-slate-900">1,245<span className="text-base font-normal text-slate-400">/2,500</span></p>
          <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3">
            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-white/10 rounded-lg text-amber-400">
             <Zap size={24} />
          </div>
        </div>
        <div>
          <p className="text-sm text-slate-400 mb-1">Est. Time Saved</p>
          <p className="text-3xl font-bold text-white">42 hrs</p>
          <p className="text-xs text-slate-400 mt-2">Based on avg. manual response time</p>
        </div>
      </GlassCard>
    </div>

    {/* Bots List */}
    <h2 className="text-xl font-bold text-slate-900 mb-4">Your Assistants</h2>
    <GlassCard className="p-0 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="px-6 py-4 font-semibold text-slate-900">Bot Name</th>
              <th className="px-6 py-4 font-semibold text-slate-900">Status</th>
              <th className="px-6 py-4 font-semibold text-slate-900">Last Trained</th>
              <th className="px-6 py-4 font-semibold text-slate-900">Embed</th>
              <th className="px-6 py-4 font-semibold text-slate-900 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="hover:bg-amber-50/50 transition-colors">
              <td className="px-6 py-4 font-medium text-slate-900">Sales Support Bee</td>
              <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-green-100 text-green-700 text-xs font-medium"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active</span></td>
              <td className="px-6 py-4">2 hours ago</td>
              <td className="px-6 py-4"><button className="text-amber-600 hover:text-amber-700 font-medium text-xs">Copy Code</button></td>
              <td className="px-6 py-4 text-right"><button className="text-slate-400 hover:text-slate-600" onClick={() => navigate('bot-builder')}><Settings size={18} /></button></td>
            </tr>
            <tr className="hover:bg-amber-50/50 transition-colors">
              <td className="px-6 py-4 font-medium text-slate-900">Internal HR Helper</td>
              <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Draft</span></td>
              <td className="px-6 py-4">Yesterday</td>
              <td className="px-6 py-4"><button className="text-amber-600 hover:text-amber-700 font-medium text-xs">Copy Code</button></td>
              <td className="px-6 py-4 text-right"><button className="text-slate-400 hover:text-slate-600" onClick={() => navigate('bot-builder')}><Settings size={18} /></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </GlassCard>
  </div>
);

// 6. Bot Builder
const BotBuilder = ({ navigate }) => {
  const [activeTab, setActiveTab] = useState('settings');
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hi! I am the preview bot. Ask me anything based on the data you provided on the left.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if(!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: "This is a simulated response. In the real app, I would answer based on your business data!" }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)]">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('dashboard')} className="p-2 hover:bg-slate-100 rounded-lg text-slate-500"><X size={20}/></button>
          <div>
            <h1 className="text-lg font-bold text-slate-900">Edit "Sales Support Bee"</h1>
            <p className="text-xs text-slate-500">Last saved: Just now</p>
          </div>
        </div>
        <div className="flex gap-3">
           <Button variant="ghost">Reset</Button>
           <Button>Save & Publish</Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left: Configuration */}
        <div className="w-full md:w-1/2 lg:w-2/5 border-r border-slate-200 bg-slate-50 overflow-y-auto p-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-1 mb-6 flex">
             <button onClick={() => setActiveTab('settings')} className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === 'settings' ? 'bg-amber-100 text-amber-900' : 'text-slate-500 hover:text-slate-900'}`}>Settings</button>
             <button onClick={() => setActiveTab('knowledge')} className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === 'knowledge' ? 'bg-amber-100 text-amber-900' : 'text-slate-500 hover:text-slate-900'}`}>Knowledge Base</button>
          </div>

          {activeTab === 'settings' ? (
            <div className="space-y-6">
              <Input label="Bot Name" placeholder="e.g. Support Bee" value="Sales Support Bee" />
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Primary Instructions</label>
                <p className="text-xs text-slate-500 mb-2">Tell the bot who it is and how to behave (e.g., "You are a helpful assistant for a shoe store").</p>
                <textarea rows="4" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 outline-none text-sm" placeholder="You are a helpful assistant..." defaultValue="You are a polite, helpful support assistant for Bee Services. You help users understand our pricing and features. Keep answers short and professional." />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Tone of Voice</label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="px-4 py-3 border-2 border-amber-400 bg-amber-50 text-amber-900 rounded-xl text-sm font-medium">Friendly & Casual 🐝</button>
                  <button className="px-4 py-3 border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 rounded-xl text-sm font-medium">Professional & Formal 👔</button>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 mb-2">Embed Code</h3>
                <div className="bg-slate-900 rounded-lg p-3 group relative cursor-pointer" onClick={() => alert("Copied to clipboard!")}>
                  <code className="text-xs text-green-400 font-mono break-all block">
                    &lt;script src="https://beeservices.io/chat.js?id=123"&gt;&lt;/script&gt;
                  </code>
                  <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                    <span className="text-white text-xs font-bold">Click to copy</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
             <div className="space-y-6">
               <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-sm text-blue-800">
                 Add your business data here. The bot will use this to answer questions.
               </div>
               <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Text Content</label>
                  <textarea rows="10" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 outline-none text-sm" placeholder="Paste your FAQs, About Us page, or product details here..." defaultValue="Bee Services Pricing: Starter is $29/mo, Business is $79/mo. We support 95 languages. Our bots are white-label on the Agency plan." />
               </div>
               <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Characters: 145/200,000</span>
                  <Button variant="outline" className="text-xs py-2 h-auto">Clear Data</Button>
               </div>
             </div>
          )}
        </div>

        {/* Right: Preview */}
        <div className="hidden md:flex flex-1 bg-slate-100 items-center justify-center p-8 relative">
          <div className="absolute inset-0 pattern-grid-lg text-slate-200 opacity-20"></div> {/* Abstract background */}
          
          {/* Phone Frame */}
          <div className="w-[375px] h-[650px] bg-white rounded-[3rem] shadow-2xl border-8 border-slate-900 overflow-hidden flex flex-col relative z-10">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20"></div>
            
            {/* Chat Header */}
            <div className="bg-amber-400 p-4 pt-10 text-slate-900 flex items-center gap-3 shadow-sm">
               <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-slate-900 font-bold">B</div>
               <div>
                 <p className="font-bold text-sm">Support Bee</p>
                 <p className="text-[10px] opacity-80 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span> Online</p>
               </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 bg-slate-50 p-4 overflow-y-auto space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-slate-900 text-white rounded-tr-none' : 'bg-white border border-slate-100 shadow-sm text-slate-700 rounded-tl-none'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-3 bg-white border-t border-slate-100">
               <div className="flex gap-2">
                 <input 
                   className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-amber-400" 
                   placeholder="Type a message..."
                   value={input}
                   onChange={(e) => setInput(e.target.value)}
                   onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                 />
                 <button onClick={handleSend} className="w-9 h-9 bg-amber-400 rounded-full flex items-center justify-center text-slate-900 hover:bg-amber-500">
                   <Send size={16} />
                 </button>
               </div>
               <div className="text-center mt-2">
                 <span className="text-[10px] text-slate-400">Powered by Bee Services</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 7. Billing Page
const BillingPage = ({ navigate }) => (
  <div className="px-4 py-8 max-w-4xl mx-auto">
    <button onClick={() => navigate('dashboard')} className="mb-6 flex items-center gap-2 text-sm text-slate-500 hover:text-amber-600 transition-colors">
      <ChevronRight className="rotate-180" size={16} /> Back to Dashboard
    </button>
    <h1 className="text-3xl font-bold text-slate-900 mb-8">Billing & Subscription</h1>

    <div className="grid gap-8">
      {/* Current Plan Card */}
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
        <p className="text-sm text-slate-500 mt-2">Next billing date: <span className="font-medium text-slate-900">Oct 24, 2024</span></p>
        
        <div className="mt-8 flex gap-4 border-t border-slate-100 pt-6">
          <Button variant="outline">Downgrade to Starter</Button>
          <Button variant="danger" className="ml-auto bg-transparent border-none shadow-none text-red-500 hover:bg-red-50 hover:text-red-700 px-4">Cancel Subscription</Button>
        </div>
      </GlassCard>

      {/* Payment Method */}
      <GlassCard>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-slate-900">Payment Method</h2>
          <button className="text-sm text-amber-600 font-medium hover:underline">Update</button>
        </div>
        <div className="flex items-center gap-4 p-4 border border-slate-200 rounded-xl">
           <div className="bg-slate-100 p-2 rounded-lg">
             <CreditCard size={24} className="text-slate-600"/>
           </div>
           <div>
             <p className="font-medium text-slate-900">Visa ending in 4242</p>
             <p className="text-xs text-slate-500">Expires 12/28</p>
           </div>
        </div>
      </GlassCard>

      {/* Invoice History */}
      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-4">Invoice History</h2>
        <div className="bg-white/50 border border-slate-200 rounded-xl overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-3 font-medium text-slate-500">Date</th>
                <th className="px-6 py-3 font-medium text-slate-500">Amount</th>
                <th className="px-6 py-3 font-medium text-slate-500">Status</th>
                <th className="px-6 py-3 font-medium text-slate-500 text-right">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-6 py-4 text-slate-900">Sep 24, 2024</td>
                <td className="px-6 py-4 text-slate-900">$79.00</td>
                <td className="px-6 py-4"><Badge color="green">Paid</Badge></td>
                <td className="px-6 py-4 text-right"><button className="text-amber-600 hover:underline">Download</button></td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-slate-900">Aug 24, 2024</td>
                <td className="px-6 py-4 text-slate-900">$79.00</td>
                <td className="px-6 py-4"><Badge color="green">Paid</Badge></td>
                <td className="px-6 py-4 text-right"><button className="text-amber-600 hover:underline">Download</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

// 8. Contact Page
const ContactPage = () => (
  <div className="pt-10 pb-20 px-4 max-w-4xl mx-auto">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in touch</h1>
      <p className="text-slate-600">We are here to help. Our team responds within 24 hours.</p>
    </div>

    <GlassCard className="max-w-xl mx-auto">
      <form className="space-y-4">
        <Input id="c-name" label="Name" placeholder="Your Name" />
        <Input id="c-email" label="Email" placeholder="you@company.com" type="email" />
        <Input id="c-msg" label="Message" placeholder="How can we help?" multiline={true} />
        <Button className="w-full">Send Message</Button>
      </form>
      <div className="mt-8 pt-8 border-t border-slate-100 text-center">
        <p className="text-slate-500 text-sm">Or email us directly at <a href="#" className="text-amber-600">support@beeservices.io</a></p>
      </div>
    </GlassCard>
  </div>
);

// 9 & 10. Legal Pages
const LegalPage = ({ type }) => (
  <div className="pt-10 pb-20 px-4 max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold text-slate-900 mb-8">{type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}</h1>
    <GlassCard>
      <div className="prose prose-slate text-slate-600">
        <p>Last updated: December 16, 2025</p>
        <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">1. Introduction</h3>
        <p className="mb-4">Welcome to Bee Services. We are committed to protecting your data and providing a transparent service.</p>
        
        <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">{type === 'privacy' ? '2. Data Collection' : '2. Usage Rights'}</h3>
        <p className="mb-4">
          {type === 'privacy' 
            ? "We collect only essential information required to operate your chatbot, including business text data you upload and chat logs. We do not sell your data."
            : "You retain all rights to the content you upload. By using our service, you grant us a license to process this data solely for the purpose of generating chatbot responses."}
        </p>

        <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">3. Limitation of Liability</h3>
        <p className="mb-4">Bee Services is provided "as is". While we strive for accuracy, AI responses may occasionally be incorrect. We are not liable for business decisions made based on bot outputs.</p>

        <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">4. Contact</h3>
        <p>For legal inquiries, please contact legal@beeservices.io.</p>
      </div>
    </GlassCard>
  </div>
);

// --- Main Layout & App Wrapper ---

const BeeServicesApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('home');
  };

  // Render current view based on state
  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <LandingPage navigate={navigate} />;
      case 'pricing': return <PricingPage navigate={navigate} />;
      case 'signup': return <SignupPage navigate={navigate} onLogin={handleLogin} />;
      case 'login': return <LoginPage navigate={navigate} onLogin={handleLogin} />;
      case 'dashboard': return <Dashboard navigate={navigate} />;
      case 'bot-builder': return <BotBuilder navigate={navigate} />;
      case 'billing': return <BillingPage navigate={navigate} />;
      case 'contact': return <ContactPage />;
      case 'privacy': return <LegalPage type="privacy" />;
      case 'terms': return <LegalPage type="terms" />;
      default: return <LandingPage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans text-slate-900 selection:bg-amber-200">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Navigation */}
      {currentPage !== 'bot-builder' && ( // Hide nav on Bot Builder for focus
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => navigate(isLoggedIn ? 'dashboard' : 'home')}>
                <div className="bg-slate-900 p-1.5 rounded-lg">
                   <Hexagon size={24} className="text-amber-400" fill="currentColor" />
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-900">Bee Services</span>
              </div>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center space-x-8">
                {!isLoggedIn ? (
                  <>
                    <button onClick={() => navigate('home')} className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Home</button>
                    <button onClick={() => navigate('pricing')} className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Pricing</button>
                    <button onClick={() => navigate('contact')} className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Contact</button>
                    <div className="h-6 w-px bg-slate-200"></div>
                    <button onClick={() => navigate('login')} className="text-slate-900 font-medium hover:text-amber-600 transition-colors">Login</button>
                    <Button onClick={() => navigate('signup')}>Get Started</Button>
                  </>
                ) : (
                  <>
                    <button onClick={() => navigate('dashboard')} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"><LayoutDashboard size={18}/> Dashboard</button>
                    <div className="h-6 w-px bg-slate-200"></div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 font-bold text-xs">
                        AC
                      </div>
                      <button onClick={handleLogout} className="text-sm text-slate-500 hover:text-red-500"><LogOut size={18}/></button>
                    </div>
                  </>
                )}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 hover:text-slate-900 p-2">
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute w-full bg-white border-b border-slate-100 shadow-lg p-4 flex flex-col gap-4">
              {!isLoggedIn ? (
                <>
                  <button onClick={() => navigate('home')} className="text-left font-medium py-2">Home</button>
                  <button onClick={() => navigate('pricing')} className="text-left font-medium py-2">Pricing</button>
                  <button onClick={() => navigate('contact')} className="text-left font-medium py-2">Contact</button>
                  <button onClick={() => navigate('login')} className="text-left font-medium py-2 text-amber-600">Login</button>
                  <Button onClick={() => navigate('signup')} className="w-full">Get Started</Button>
                </>
              ) : (
                 <>
                  <button onClick={() => navigate('dashboard')} className="text-left font-medium py-2">Dashboard</button>
                  <button onClick={() => navigate('billing')} className="text-left font-medium py-2">Billing</button>
                  <button onClick={() => navigate('bot-builder')} className="text-left font-medium py-2">New Bot</button>
                  <button onClick={handleLogout} className="text-left font-medium py-2 text-red-500">Logout</button>
                 </>
              )}
            </div>
          )}
        </nav>
      )}

      {/* Main Content Area */}
      <main className="relative z-10 w-full">
        {renderPage()}
      </main>

      {/* Footer */}
      {currentPage !== 'bot-builder' && (
        <footer className="bg-slate-900 text-slate-400 py-12 px-4 relative z-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-4 text-white">
                <Hexagon size={24} className="text-amber-400" fill="currentColor" />
                <span className="font-bold text-xl">Bee Services</span>
              </div>
              <p className="text-sm mb-4">Making AI support accessible for everyone.</p>
              <div className="text-xs">© 2025 Bee Services Inc.</div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigate('pricing')} className="hover:text-amber-400">Pricing</button></li>
                <li><button onClick={() => navigate('home')} className="hover:text-amber-400">Features</button></li>
                <li><button onClick={() => navigate('login')} className="hover:text-amber-400">Log In</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigate('privacy')} className="hover:text-amber-400">Privacy Policy</button></li>
                <li><button onClick={() => navigate('terms')} className="hover:text-amber-400">Terms of Service</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>support@beeservices.io</li>
                <li>Twitter: @BeeServices</li>
              </ul>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default BeeServicesApp;