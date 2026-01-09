import React, { useState, useEffect } from 'react';
import { 
  Hexagon, 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  CreditCard, 
  BarChart3, 
  Bot,
  ChevronDown,
  ChevronUp,
  Globe,
  Lock
} from 'lucide-react';

// --- Sub-Components ---

// 1. Payment Gateway Icons (Simple SVG mocks for the buttons)
const StripeLogo = () => (
  <svg viewBox="0 0 60 25" className="h-6 w-auto fill-current">
    <path d="M59.6 10.6c0-1.7-1.3-2.6-3.4-2.6-2.5 0-4.7 1.2-4.7 3.8 0 2.5 3.3 3.1 3.3 5 0 .8-.8 1.4-2 1.4-1.7 0-3.8-1-3.8-1l-.5 2.5s2.2 1.1 4.5 1.1c2.7 0 5-1.4 5-4 0-3-3.4-3.5-3.4-5.3 0-.6.5-1 1.6-1 .9 0 2.6.5 2.6.5l.8-2.4zm-45.7 6l-.5 2.3s1.5.5 2.9.5c1.9 0 2.7-1 2.7-2.3 0-1.8-2.8-2.4-2.8-4.2 0-.6.5-1.1 1.6-1.1 1 0 2.1.4 2.1.4l.5-2.2s-1.1-.5-2.5-.5c-1.8 0-2.8 1-2.8 2.4 0 1.9 2.8 2.4 2.8 4.2 0 .7-.6 1.1-1.6 1.1-1.4 0-2.4-.6-2.4-.6zM28.4 8h-3.4l-3.3 11h2.9l.6-2.3h3.5l.6 2.3h3l-3.9-11zm-2.4 6.7l1.1-4.2 1.1 4.2h-2.2zm11.7-8.9h-2.7v13.1h2.7V5.8zm-7.6-2h-2.7v15.2h2.7V3.8zm21.4 4.3h-2.5V19h-2.7V8.1h-2.5v10.9h6.4l1.3-10.9zm-41 2.1c0 2.2 1.6 3.1 3.6 3.1 1.4 0 2.6-.4 2.6-.4l.4-2.2s-1 .4-2.1.4c-.8 0-1.2-.3-1.2-1 0-.1 0-.3.1-.5l5.5-2.2c.1-.4.1-.7.1-1.1 0-2.4-1.8-3.9-4.5-3.9-2.8 0-4.6 1.8-4.6 4.7 0 1.3.4 2.3 1.1 3.1h-.9l-.3 1.1h3.3l-3.1 11h2.7l1.9-6.6c-2.3-.3-4-2.1-4-4.5zm2.7-2.7c.9 0 1.4.5 1.4 1.3 0 .2-.1.4-.1.5l-3.2 1.3c-.1-.7.4-3.1 1.9-3.1z"/>
  </svg>
);

const PayPalLogo = () => (
  <svg viewBox="0 0 100 26" className="h-5 w-auto fill-current">
    <path d="M12.9 2.6H8.5L5.7 20.3h4.3l.6-3.9h2.5c4.1 0 6.3-2 7.1-5.1.5-2.5-.5-5.3-4-7.3-1.1-.6-2.2-.9-3.3-1.4zM13 9.8h-1.6l.8-4.5h1.6c1.6 0 2.2.8 1.9 2.4-.2 1.5-1.2 2.1-2.7 2.1zM34.7 9.8h-1.6l.8-4.5h1.6c1.6 0 2.2.8 1.9 2.4-.2 1.5-1.2 2.1-2.7 2.1zM34.6 2.6H30.2L27.4 20.3h4.3l.6-3.9h2.5c4.1 0 6.3-2 7.1-5.1.5-2.5-.5-5.3-4-7.3-1.1-.6-2.2-.9-3.3-1.4zM53.1 2.6H49.7L44.2 23.3h4.4l1.1-4h1.7c3.1 0 5.4-1.5 6-4.9.7-3.6-1.4-6.2-4.3-11.8zm-2.1 7.2h-1.6l.8-4.5h1.6c1.6 0 2.2.8 1.9 2.4-.2 1.5-1.2 2.1-2.7 2.1z" />
  </svg>
);

const RazorpayLogo = () => (
  <div className="flex items-center gap-1 font-bold text-lg tracking-tight">
    <div className="bg-current transform -skew-x-12 px-2 py-0.5 text-xs text-white">Razor</div>
    <span>pay</span>
  </div>
);

// 2. Checkout Modal
const CheckoutModal = ({ isOpen, onClose, planName, price }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden scale-100 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-slate-50 p-6 border-b border-slate-100 flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Secure Checkout</h3>
            <p className="text-slate-500 text-sm mt-1">Completing setup for <span className="text-amber-600 font-semibold">{planName}</span></p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center bg-amber-50 rounded-xl p-4 border border-amber-100">
            <span className="font-medium text-amber-900">Total Due Today</span>
            <span className="text-2xl font-bold text-amber-600">{price}</span>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Select Payment Method</p>
            
            <button className="w-full flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-amber-400 hover:bg-amber-50/50 hover:shadow-md transition-all group">
              <span className="font-medium text-slate-700">Pay with Stripe</span>
              <div className="text-slate-400 group-hover:text-[#635BFF] transition-colors"><StripeLogo /></div>
            </button>

            <button className="w-full flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-amber-400 hover:bg-amber-50/50 hover:shadow-md transition-all group">
              <span className="font-medium text-slate-700">Pay with PayPal</span>
              <div className="text-slate-400 group-hover:text-[#003087] transition-colors"><PayPalLogo /></div>
            </button>

            <button className="w-full flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-amber-400 hover:bg-amber-50/50 hover:shadow-md transition-all group">
              <span className="font-medium text-slate-700">Pay with Razorpay</span>
              <div className="text-slate-400 group-hover:text-[#3395FF] transition-colors"><RazorpayLogo /></div>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
             <Lock size={12} />
             <span>256-bit SSL Encrypted Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Pricing Card Component
const PricingCard = ({ 
  plan, 
  isAnnual, 
  onSelect, 
  isPopular = false,
  isEnterprise = false 
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const price = isEnterprise ? "Custom" : (isAnnual ? plan.price.annual : plan.price.monthly);
  const period = isEnterprise ? "" : (isAnnual ? "/year" : "/mo");

  return (
    <div 
      className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
        isPopular 
          ? 'bg-white border-2 border-amber-400 shadow-xl shadow-amber-100/50 scale-105 z-10' 
          : 'bg-white/60 backdrop-blur-md border border-white/50 hover:border-amber-200 hover:shadow-lg'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          MOST POPULAR
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
        <p className="text-slate-500 text-sm mt-2">{plan.description}</p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-extrabold text-slate-900">{isEnterprise ? '' : '$'}{price}</span>
          <span className="text-slate-500 font-medium">{period}</span>
        </div>
        {isAnnual && !isEnterprise && plan.price.monthly > 0 && (
          <p className="text-xs text-green-600 font-medium mt-2 bg-green-50 inline-block px-2 py-1 rounded">
            Save ${(plan.price.monthly * 12) - plan.price.annual} per year
          </p>
        )}
      </div>

      <div className="space-y-4 mb-8 flex-1">
        <div className="flex items-center gap-3">
          <div className="p-1 rounded-full bg-amber-100 text-amber-600"><Bot size={16}/></div>
          <span className="font-semibold text-slate-700">{plan.bots}</span>
        </div>
        {plan.features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-slate-600">{feature}</span>
          </div>
        ))}
      </div>

      {/* Accordion FAQ / Details */}
      <div className="mb-6 border-t border-slate-100 pt-4">
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center justify-between w-full text-xs font-bold text-slate-400 uppercase tracking-wider hover:text-amber-600 transition-colors"
        >
          <span>What's Included</span>
          {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        <div className={`grid transition-all duration-300 ease-in-out overflow-hidden ${showDetails ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="min-h-0 text-sm text-slate-500 space-y-2">
            <p>• {plan.details.support}</p>
            <p>• {plan.details.storage}</p>
            <p>• {plan.details.analytics}</p>
          </div>
        </div>
      </div>

      <button 
        onClick={() => onSelect(plan)}
        className={`w-full py-3 rounded-xl font-bold transition-all shadow-md active:scale-95 ${
          isPopular || isEnterprise
            ? 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg' 
            : 'bg-white border border-slate-200 text-slate-700 hover:border-amber-400 hover:text-amber-600'
        }`}
      >
        {isEnterprise ? 'Contact Us' : (plan.price.monthly === 0 ? 'Start Free Trial' : 'Sign Up Now')}
      </button>
    </div>
  );
};


// --- Main App Component ---

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanSelect = (plan) => {
    if (plan.name === "Enterprise") {
      // Mock navigation to Contact Page
      scrollToSection('contact-placeholder'); // In a real router, this would be history.push('/contact')
      alert("Redirecting to Contact Us Page...");
    } else {
      setSelectedPlan(plan);
      setCheckoutModalOpen(true);
    }
  };

  // Pricing Data
  const plans = [
    {
      name: "Trial",
      description: "Perfect for testing the waters.",
      bots: "1 Chatbot",
      price: { monthly: 0, annual: 0 },
      features: ["Basic Responses", "Standard Theme", "Community Support"],
      details: { support: "Email Support", storage: "7-day History", analytics: "Basic Stats" }
    },
    {
      name: "Basic",
      description: "For individuals and hobbyists.",
      bots: "3 Chatbots",
      price: { monthly: 29, annual: 290 },
      features: ["Custom Branding", "Remove Watermark", "Email Support"],
      details: { support: "Priority Email", storage: "30-day History", analytics: "Standard Stats" }
    },
    {
      name: "Start-up",
      description: "For growing teams.",
      bots: "7 Chatbots",
      price: { monthly: 79, annual: 790 },
      features: ["Everything in Basic", "Advanced Analytics", "GPT-4 Access", "Priority Support"],
      details: { support: "24/7 Chat Support", storage: "Unlimited History", analytics: "Advanced Insights" }
    },
    {
      name: "Organization",
      description: "Scale your operations.",
      bots: "10 Chatbots",
      price: { monthly: 149, annual: 1490 },
      features: ["Everything in Start-up", "API Access", "Team Collaboration", "SSO"],
      details: { support: "Dedicated Manager", storage: "Unlimited + Backup", analytics: "Exportable Reports" }
    },
    {
      name: "Enterprise",
      description: "Custom solutions for big players.",
      bots: "Unlimited",
      price: { monthly: 0, annual: 0 },
      features: ["Custom LLM Training", "On-Premise Deployment", "SLA Guarantee", "White Glove Onboarding"],
      details: { support: "24/7 Phone + Slack", storage: "Custom Retention", analytics: "Custom Dashboards" }
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden selection:bg-amber-200">
      
      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={checkoutModalOpen} 
        onClose={() => setCheckoutModalOpen(false)}
        planName={selectedPlan?.name}
        price={selectedPlan && (isAnnual ? `$${selectedPlan.price.annual}` : `$${selectedPlan.price.monthly}`)}
      />

      {/* Background Ambient Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-amber-300/20 rounded-full blur-3xl opacity-60 animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* 2️⃣ Navbar Skeleton */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-3 shadow-sm' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="relative">
              <Hexagon className="w-8 h-8 text-amber-500 fill-amber-500/20 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-amber-400 blur-lg opacity-20"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Bee Services</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">How it Works</button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Features</button>
            
            <div className="h-4 w-px bg-slate-300 mx-2"></div>
            
            <button className="text-sm font-medium text-slate-900 hover:text-amber-600 transition-colors">Login</button>
            <button onClick={() => scrollToSection('pricing')} className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
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
            <button onClick={() => scrollToSection('how-it-works')} className="text-left font-medium text-slate-600 py-2">How it Works</button>
            <button onClick={() => scrollToSection('pricing')} className="text-left font-medium text-slate-600 py-2">Pricing</button>
            <button className="text-left font-medium text-slate-900 py-2">Login</button>
            <button onClick={() => scrollToSection('pricing')} className="bg-amber-500 text-white font-bold py-3 rounded-xl w-full text-center shadow-md">
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* 3️⃣ Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-full px-4 py-1.5 mb-8 shadow-sm animate-in fade-in zoom-in duration-700">
            <span className="flex h-2 w-2 rounded-full bg-amber-500"></span>
            <span className="text-xs font-bold text-amber-700 tracking-wide uppercase">The No-Code AI Solution</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Put your customer support <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
              on autopilot.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Create intelligent, human-like support agents in minutes. No coding required. Just pure, sweet efficiency.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => scrollToSection('pricing')} className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-lg px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-amber-400/50 transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
              Start for Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-lg px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs">▶</span>
              See How It Works
            </button>
          </div>
        </div>
      </section>

      {/* 4️⃣ Dashboard / Product Preview */}
      <section className="px-4 pb-32">
        <div className="max-w-5xl mx-auto relative group">
          {/* Glowing Backdrop */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          {/* Glass Card */}
          <div className="relative bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-slate-900/5">
            
            {/* Fake Browser Header */}
            <div className="h-10 bg-white/50 border-b border-white/20 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
              <div className="ml-4 px-3 py-1 bg-white/40 rounded-md text-[10px] text-slate-400 font-mono w-64">bee-services.com/dashboard/agent-01</div>
            </div>

            {/* Content Mockup */}
            <div className="flex h-[400px] md:h-[500px]">
              {/* Fake Sidebar */}
              <div className="hidden md:flex w-64 border-r border-white/20 flex-col p-4 gap-3 bg-white/20">
                <div className="h-8 w-full bg-slate-900/5 rounded-lg mb-4"></div>
                {[1,2,3,4].map(i => (
                  <div key={i} className="h-6 w-3/4 bg-slate-900/5 rounded px-2"></div>
                ))}
                <div className="mt-auto h-16 w-full bg-amber-100/50 rounded-xl border border-amber-200/50 p-3 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-amber-400"></div>
                   <div className="h-2 w-20 bg-amber-900/10 rounded"></div>
                </div>
              </div>

              {/* Chat UI */}
              <div className="flex-1 flex flex-col bg-white/30 p-6 relative">
                 {/* Chat Messages */}
                 <div className="flex-1 space-y-6">
                    {/* Bot Message */}
                    <div className="flex gap-4 max-w-[80%]">
                      <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 text-white">
                        <Hexagon size={20} fill="currentColor" />
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-none p-5 shadow-sm border border-slate-100">
                        <p className="text-slate-700 text-sm md:text-base">Hello! I noticed you're looking at our Premium Plan. Do you have any questions about the features?</p>
                      </div>
                    </div>

                    {/* User Message */}
                    <div className="flex gap-4 max-w-[80%] ml-auto flex-row-reverse">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 text-amber-700 font-bold">JD</div>
                      <div className="bg-slate-900 text-white rounded-2xl rounded-tr-none p-5 shadow-md">
                        <p className="text-sm md:text-base">Yes, does it include multi-language support?</p>
                      </div>
                    </div>

                    {/* Bot Reply with Typing Indicator */}
                    <div className="flex gap-4 max-w-[80%] animate-pulse">
                       <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 text-white">
                        <Hexagon size={20} fill="currentColor" />
                      </div>
                       <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm border border-slate-100 flex gap-1 items-center">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                       </div>
                    </div>
                 </div>

                 {/* Input Area */}
                 <div className="mt-4 bg-white rounded-xl border border-slate-200 p-3 flex items-center justify-between shadow-sm">
                   <div className="text-slate-400 text-sm ml-2">Type your message...</div>
                   <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center text-slate-900">
                     <ArrowRight size={16} />
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ How It Works */}
      <section id="how-it-works" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Effortless Setup</h2>
          <p className="text-slate-500 text-lg">Go from zero to deployed in three simple steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "1. Upload Knowledge", desc: "Drag and drop your PDFs, websites, or Notion docs.", icon: <BarChart3 className="text-amber-600" /> },
            { title: "2. Train Your Bee", desc: "Our AI processes your data instantly to understand your business.", icon: <Bot className="text-amber-600" /> },
            { title: "3. Embed Anywhere", desc: "Copy one line of code to your site. You are live.", icon: <Zap className="text-amber-600" /> }
          ].map((item, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-amber-100/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-400 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6️⃣ Features (Dark Section) */}
      <section id="features" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Text Content */}
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Powerful analytics <br/>
              <span className="text-amber-400">built for growth.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-lg">
              Stop guessing what your customers want. Bee Services analyzes every conversation to give you actionable insights.
            </p>
            
            <ul className="space-y-4 mt-8">
              {[
                "Real-time sentiment analysis",
                "Automatic ticket escalation",
                "Multi-language support (95+ languages)",
                "Custom brand voice training"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-slate-200 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-8 py-3 rounded-full transition-colors">
                Explore All Features
              </button>
            </div>
          </div>

          {/* Right: Glass Card Mockup */}
          <div className="flex-1 w-full">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3"></div>
              
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="text-slate-400 text-sm">Total Conversations</div>
                  <div className="text-3xl font-bold text-white">12,405</div>
                </div>
                <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">+24%</div>
              </div>

              {/* Fake Bars */}
              <div className="flex items-end gap-2 h-40 mb-6">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div key={i} className="flex-1 bg-slate-700/50 rounded-t-lg relative overflow-hidden group">
                    <div style={{height: `${h}%`}} className="absolute bottom-0 left-0 right-0 bg-amber-500/80 group-hover:bg-amber-400 transition-all duration-500"></div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between text-xs text-slate-500 font-mono uppercase">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🆕 PRICING SECTION */}
      <section id="pricing" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-slate-500 text-lg mb-8">Choose the perfect plan for your business needs.</p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-semibold ${!isAnnual ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-16 h-8 bg-slate-200 rounded-full relative p-1 transition-colors hover:bg-slate-300 focus:outline-none"
              >
                <div className={`w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}></div>
              </button>
              <span className={`text-sm font-semibold ${isAnnual ? 'text-slate-900' : 'text-slate-400'}`}>
                Yearly <span className="text-amber-600 text-xs bg-amber-100 px-2 py-0.5 rounded-full ml-1">Save 20%</span>
              </span>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
            
            {/* Trial */}
            <PricingCard 
              plan={plans[0]} 
              isAnnual={isAnnual} 
              onSelect={handlePlanSelect} 
            />

            {/* Basic */}
            <PricingCard 
              plan={plans[1]} 
              isAnnual={isAnnual} 
              onSelect={handlePlanSelect} 
            />

            {/* Start-up (Popular) */}
            <PricingCard 
              plan={plans[2]} 
              isAnnual={isAnnual} 
              onSelect={handlePlanSelect} 
              isPopular={true}
            />

            {/* Organization */}
            <PricingCard 
              plan={plans[3]} 
              isAnnual={isAnnual} 
              onSelect={handlePlanSelect} 
            />
          </div>

          {/* Enterprise Full Width */}
          <div className="mt-8 max-w-4xl mx-auto">
             <div className="bg-slate-900 text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
               <div className="flex-1">
                 <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 bg-slate-800 rounded-lg"><Globe className="text-amber-400" size={24}/></div>
                   <h3 className="text-2xl font-bold">Enterprise</h3>
                 </div>
                 <p className="text-slate-400">For large-scale deployments, custom integrations, and SLA guarantees.</p>
               </div>
               <button onClick={() => handlePlanSelect(plans[4])} className="whitespace-nowrap bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-amber-400 transition-colors">
                 Contact Sales
               </button>
             </div>
          </div>

          {/* Payment Methods Visual */}
          <div className="mt-12 flex justify-center items-center gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             <div className="h-6 text-slate-400"><StripeLogo/></div>
             <div className="h-6 text-slate-400"><PayPalLogo/></div>
             <div className="h-5 text-slate-400"><RazorpayLogo/></div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Trust Signals */}
      <section className="py-20 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 opacity-70 hover:opacity-100 transition-opacity duration-300">
            
            <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300">
              <ShieldCheck className="w-8 h-8 text-amber-500" />
              <div className="text-sm font-semibold text-slate-900">
                SOC2 Compliant<br/><span className="text-slate-500 font-normal">Enterprise Security</span>
              </div>
            </div>

            <div className="h-10 w-px bg-slate-200 hidden md:block"></div>

            <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300">
              <Bot className="w-8 h-8 text-amber-500" />
              <div className="text-sm font-semibold text-slate-900">
                GPT-4 Powered<br/><span className="text-slate-500 font-normal">Latest AI Models</span>
              </div>
            </div>

            <div className="h-10 w-px bg-slate-200 hidden md:block"></div>

            <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300">
              <CreditCard className="w-8 h-8 text-amber-500" />
              <div className="text-sm font-semibold text-slate-900">
                Cancel Anytime<br/><span className="text-slate-500 font-normal">No Hidden Fees</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8️⃣ Final CTA (Placeholder for Contact Page) */}
      <section id="contact-placeholder" className="py-32 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 rounded-[3rem] border border-white p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
          {/* Decor */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-amber-400/20 blur-3xl rounded-full"></div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 relative z-10">
            Ready to automate your support?
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto relative z-10">
            Join 4,000+ companies using Bee Services to delight customers 24/7.
          </p>
          
          <button onClick={() => scrollToSection('pricing')} className="relative z-10 bg-slate-900 text-white text-lg font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
            Get Started Now
            <ArrowRight size={20} />
          </button>
          
          <p className="mt-6 text-sm text-slate-500 relative z-10">No credit card required · 14-day free trial</p>
        </div>
      </section>

      {/* 9️⃣ Footer */}
      <footer className="bg-slate-950 text-slate-400 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6 text-white">
              <Hexagon className="fill-amber-500 text-amber-500" />
              <span className="font-bold text-xl">Bee Services</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Making AI accessible, affordable, and actually useful for businesses of all sizes.
            </p>
            <div className="text-xs text-slate-600">
              © 2024 Bee Services Inc.
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default App;
