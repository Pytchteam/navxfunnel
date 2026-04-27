/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { 
  Calculator, 
  ChevronRight, 
  ArrowRight, 
  BarChart3, 
  ShieldCheck, 
  Users, 
  Zap, 
  CheckCircle2, 
  Lock, 
  PhoneCall, 
  Mail, 
  Download,
  Menu,
  X,
  CreditCard,
  Target,
  Rocket,
  TriangleAlert,
  Layout,
  BookOpen
} from 'lucide-react';
import { SectionHeader, GlowButton, MediaPlaceholder, HorizontalMarquee } from './components/Shared';
import WhyNavX from './pages/WhyNavX';
import CourseFunnel from './pages/CourseFunnel';

// --- Types ---

interface CalculatorInputs {
  gci: number;
  transactions: number;
  currentSplit: number;
  currentCap: number;
  currentMonthlyFees: number;
  currentTransactionFee: number;
  currentRoyalty: number;
  isTeam: boolean;
  teamSize: number;
}

interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  currentBrokerage: string;
  isLicensed: string;
  productionLevel: string;
  contactTime: string;
  wantsConfidential: boolean;
}

// --- Components ---


// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'whynavx' | 'course'>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const [calcInputs, setCalcInputs] = useState<CalculatorInputs>({
    gci: 150000,
    transactions: 12,
    currentSplit: 80,
    currentCap: 16000,
    currentMonthlyFees: 150,
    currentTransactionFee: 0,
    currentRoyalty: 0,
    isTeam: false,
    teamSize: 1
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const calculatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowFloatingCta(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const results = useMemo(() => {
    // NavX Logic
    let navXCap = 5400;
    if (calcInputs.isTeam) {
      const size = calcInputs.teamSize;
      if (size === 2) navXCap = 8000;
      else if (size === 3) navXCap = 12000;
      else if (size >= 4 && size <= 7) navXCap = 16000;
      else if (size >= 8) navXCap = 18000 + (size - 8) * 2000;
    }

    const navXSplitLoss = Math.min(calcInputs.gci * 0.4, navXCap);
    const navXFixedFees = (99 + 24) * 12; // Membership + E&O
    const navXTransactionTotal = 125 * calcInputs.transactions;
    const navXTotalCost = navXSplitLoss + navXFixedFees + navXTransactionTotal;

    // Current Brokerage Logic
    let currentSplitLoss = calcInputs.gci * (1 - calcInputs.currentSplit / 100);
    if (calcInputs.currentCap > 0) {
      currentSplitLoss = Math.min(currentSplitLoss, calcInputs.currentCap);
    }
    const currentFixedFees = calcInputs.currentMonthlyFees * 12;
    const currentTransactionTotal = calcInputs.currentTransactionFee * calcInputs.transactions;
    const currentRoyaltyTotal = (calcInputs.currentRoyalty / 100) * calcInputs.gci;
    const currentTotalCost = currentSplitLoss + currentFixedFees + currentTransactionTotal + currentRoyaltyTotal;

    const difference = currentTotalCost - navXTotalCost;

    return {
      currentCost: currentTotalCost,
      navXCost: navXTotalCost,
      difference: Math.max(0, difference)
    };
  }, [calcInputs]);

  const scrollToCalculator = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        calculatorRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      calculatorRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustStripItems = [
    "Lower cap", "Clear fees", "Real support", "Private conversation", 
    "Transition plan", "Relationship-first culture", "Keep more", 
    "Grow with structure", "No hidden fees", "Built for agents", "Built for teams"
  ];

  const togglePage = (page: 'home' | 'whynavx' | 'course') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'auto' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-navx-blue selection:text-navx-navy overflow-x-hidden relative">
      
      {/* --- Background Glow Effects --- */}
      <div className="glow-pill glow-pill-blue -top-[100px] -left-[100px]" />
      <div className="glow-pill glow-pill-orange -bottom-[100px] -right-[100px]" />
      
      <div className="bg-noise fixed inset-0 z-50 pointer-events-none opacity-[0.03]" />
      
      {/* --- Background Patterns --- */}
      <div className="bg-grid-pattern fixed inset-0 z-0 opacity-20 pointer-events-none" />
      
      {/* --- Sticky Navigation --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-navx-navy/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => togglePage('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-navx-blue to-navx-deep rounded-xl flex items-center justify-center shadow-2xl group-hover:scale-105 transition-all">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white transition-colors group-hover:text-navx-blue leading-none">NavX</span>
              <span className="text-[10px] font-black tracking-[0.2em] text-navx-blue uppercase leading-none mt-1">Realty</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10 text-[10px] font-black text-white/40 tracking-[0.3em] uppercase">
            <button 
              onClick={() => togglePage('home')} 
              className={`hover:text-white transition-all relative py-2 ${currentPage === 'home' ? 'text-navx-orange' : ''}`}
            >
              Home
              {currentPage === 'home' && <motion.div layoutId="nav-pill" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-navx-orange" />}
            </button>
            <button 
              onClick={() => togglePage('whynavx')} 
              className={`hover:text-white transition-all relative py-2 ${currentPage === 'whynavx' ? 'text-navx-orange' : ''}`}
            >
              Why NavX
              {currentPage === 'whynavx' && <motion.div layoutId="nav-pill" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-navx-orange" />}
            </button>
            <button 
              onClick={() => togglePage('course')} 
              className={`hover:text-white transition-all relative py-2 ${currentPage === 'course' ? 'text-navx-orange' : ''}`}
            >
              100-Day Course
              {currentPage === 'course' && <motion.div layoutId="nav-pill" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-navx-orange" />}
            </button>
          </div>

          <div className="flex items-center gap-6">
            <GlowButton variant="outline" className="hidden sm:flex" onClick={scrollToCalculator}>
              Earnings Check
            </GlowButton>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-white">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-navx-navy p-8 pt-32 md:hidden"
          >
            <div className="flex flex-col gap-8 text-3xl font-black text-white py-12">
              <button className="text-left tracking-tighter" onClick={() => togglePage('home')}>Home</button>
              <button className="text-left tracking-tighter" onClick={() => togglePage('whynavx')}>Why NavX</button>
              <button className="text-left tracking-tighter" onClick={() => togglePage('course')}>100-Day Course</button>
              <GlowButton variant="primary" className="mt-8 py-6" onClick={() => { setMobileMenuOpen(false); scrollToCalculator(); }}>
                Earnings Check
              </GlowButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* HERO, MARQUEE, etc. - The original sections below */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-dot-pattern">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-navx-blue/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="inline-block text-navx-blue font-black tracking-[0.4em] uppercase text-[10px] mb-8 bg-navx-blue/10 px-4 py-2 rounded-full border border-navx-blue/20">
              For agents who want to keep more of what they earn.
            </span>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mb-10 text-gradient-white tracking-tighter">
              You closed the deal.<br />
              <span className="text-navx-orange drop-shadow-glow">Keep what's yours.</span>
            </h1>
            <p className="text-xl md:text-2xl text-navx-text-muted leading-relaxed mb-12 max-w-xl font-medium text-balance">
              So why did your brokerage **keep so much**? Compare costs against our low-cap, relationship-driven model.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12 items-center lg:items-start">
              <GlowButton variant="primary" emphasized onClick={scrollToCalculator}>Earnings Check</GlowButton>
              <button 
                onClick={() => document.getElementById('compare')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/60 hover:text-white px-6 py-4 font-black text-xs uppercase tracking-[0.3em] transition-all hover:tracking-[0.4em]"
              >
                Show Me The Difference
              </button>
            </div>
            <div className="flex items-center gap-3 text-navx-text-muted/60 text-[10px] font-black tracking-[0.2em] uppercase">
              <Lock className="w-4 h-4 text-navx-blue/60" />
              <span>Confidential. No pressure. Just the numbers.</span>
            </div>
          </motion.div>

          {/* Hero Visual: Calculator Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative perspective-1000"
          >
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-navx-orange/20 rounded-full blur-2xl animate-pulse" />
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-16 -right-12 z-20 hidden xl:flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 bg-white/[0.05] border border-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-2xl">
                <Rocket className="text-navx-orange w-8 h-8 rotate-12" />
              </div>
              <span className="text-[10px] font-bold text-navx-orange uppercase tracking-widest bg-navx-orange/10 px-2 py-0.5 rounded shadow">Scale Your Business</span>
            </motion.div>
            <div className="glass-card p-8 lg:p-10 shadow-2xl relative z-10 glow-blue">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-navx-blue/20 rounded-xl flex items-center justify-center">
                    <Calculator className="text-navx-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Earnings Blueprint</h3>
                    <p className="text-xs text-navx-text-muted tracking-wide uppercase">Real-time Comparison</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-navx-blue/50 uppercase">NavX Individual Cap</span>
                  <p className="text-2xl font-bold text-navx-blue">$5,400</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-navx-text-muted uppercase">Annual GCI</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-navx-text-muted">$</span>
                      <input 
                        readOnly 
                        value="150,000" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-7 pr-3 text-white focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-navx-text-muted uppercase">Current Cap</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-navx-text-muted">$</span>
                      <input 
                        readOnly 
                        value="16,000" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-7 pr-3 text-white focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-navx-orange/10 rounded-2xl border border-navx-orange/20 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-navx-orange/80 mb-1">Potential Monthly Earnings</p>
                    <p className="text-3xl font-bold text-navx-orange">$1,250</p>
                  </div>
                  <div className="flex -space-x-2">
                    <CheckCircle2 className="w-8 h-8 text-navx-orange drop-shadow-lg" />
                  </div>
                </div>

                <button 
                  onClick={scrollToCalculator}
                  className="w-full py-4 text-center text-sm font-bold tracking-widest uppercase hover:text-navx-blue transition-colors flex items-center justify-center gap-2 group"
                >
                  Configure My Full Model
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-navx-orange/20 blur-3xl rounded-full" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-navx-blue/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* --- Running Trust Strip --- */}
      <HorizontalMarquee text={trustStripItems} />

      {/* --- Pain Mirror Section (White Theme) --- */}
      <section className="py-40 px-6 bg-white relative overflow-hidden bg-dot-pattern-dark">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-navx-orange/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader 
            dark
            title="The split is **not the only thing** costing you."
            subtitle="Hidden leakages, silent fees, and the weight of unnecessary overhead can drag down even the most productive business."
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-black text-navx-navy tracking-tight">The "Silent" Cost of Traditional Models</h3>
              <p className="text-xl text-navx-navy/70 leading-relaxed">
                Many agents focus on the split, but forget about the branding fees, royalty payments, and the lack of actual conversion-oriented support.
              </p>
              <div className="space-y-4">
                {['No genuine marketing coaching', 'Complexity that slows momentum', 'Hidden royalties after you cap'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-navx-orange/10 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-navx-orange" />
                    </div>
                    <span className="font-semibold text-navx-navy/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <MediaPlaceholder type="video" label="Watch: Why NavX was Built" className="shadow-2xl border-navx-navy/10" />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Money Leak",
                copy: "You produce. You close. You watch fees quietly stack up—royalties, franchise fees, and high caps that never seem to go away.",
                icon: BarChart3
              },
              {
                title: "The Support Gap",
                copy: "You pay for a brand, but still build your business alone. Without true coaching and structure, you're paying for a logo you don't use.",
                icon: ShieldCheck
              },
              {
                title: "The Switching Fear",
                copy: "You know something needs to change—but moving feels complicated. We make the transition confidential, guided, and safe.",
                icon: TriangleAlert
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="glass-card-light p-10 hover:bg-navx-navy/[0.05] transition-colors border-navx-navy/5"
              >
                <div className="w-14 h-14 bg-navx-navy/5 rounded-2xl flex items-center justify-center mb-8">
                  {card.icon && <card.icon className="text-navx-navy w-7 h-7" />}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-navx-navy">{card.title}</h3>
                <p className="text-navx-navy/70 leading-relaxed">{card.copy}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl font-medium text-navx-navy/50 italic">
              "NavX was built for the agent who wants more than a logo. More clarity. More support. More of what they earned."
            </p>
          </div>
        </div>
      </section>

      {/* --- Calculator Section --- */}
      <section ref={calculatorRef} id="keep more" className="py-24 px-6 relative bg-navx-deep/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            eyebrow="Commission Calculator"
            title="Run the numbers before you make a move."
            subtitle="No sales pitch. Just a clearer view of what your current model may be costing you."
          />

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Inputs Card */}
            <div className="lg:col-span-2 glass-card p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 mb-10 pb-10 border-b border-white/10">
                <div className="flex-1 space-y-6">
                  <label className="block">
                    <span className="text-xs font-bold text-navx-text-muted uppercase tracking-wider">Annual GCI ($)</span>
                    <input 
                      type="number"
                      value={calcInputs.gci}
                      onChange={(e) => setCalcInputs({ ...calcInputs, gci: Number(e.target.value) })}
                      className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-navx-blue focus:outline-none transition-all"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold text-navx-text-muted uppercase tracking-wider">Transactions per Year</span>
                    <input 
                      type="number"
                      value={calcInputs.transactions}
                      onChange={(e) => setCalcInputs({ ...calcInputs, transactions: Number(e.target.value) })}
                      className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-navx-blue focus:outline-none"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold text-navx-text-muted uppercase tracking-wider">Role</span>
                    <div className="mt-2 flex p-1 bg-white/5 rounded-xl border border-white/10">
                      <button 
                        onClick={() => setCalcInputs({ ...calcInputs, isTeam: false })}
                        className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${!calcInputs.isTeam ? 'bg-navx-blue text-navx-navy' : 'text-navx-text-muted hover:text-white'}`}
                      >
                        Individual
                      </button>
                      <button 
                        onClick={() => setCalcInputs({ ...calcInputs, isTeam: true })}
                        className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${calcInputs.isTeam ? 'bg-navx-blue text-navx-navy' : 'text-navx-text-muted hover:text-white'}`}
                      >
                        Team
                      </button>
                    </div>
                  </label>
                  {calcInputs.isTeam && (
                    <label className="block animate-in fade-in slide-in-from-top-2 duration-300">
                      <span className="text-xs font-bold text-navx-text-muted uppercase tracking-wider">Team Size</span>
                      <input 
                        type="number"
                        min="2"
                        value={calcInputs.teamSize}
                        onChange={(e) => setCalcInputs({ ...calcInputs, teamSize: Number(e.target.value) })}
                        className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-navx-blue focus:outline-none"
                      />
                    </label>
                  )}
                </div>

                <div className="flex-1 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-xs font-bold text-navx-text-muted uppercase tracking-wider">Current Split %</span>
                      <input 
                        type="number"
                        value={calcInputs.currentSplit}
                        onChange={(e) => setCalcInputs({ ...calcInputs, currentSplit: Number(e.target.value) })}
                        className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-navx-blue focus:outline-none"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs font-bold text-navx-text-muted uppercase tracking-wider">Current Cap ($)</span>
                      <input 
                        type="number"
                        value={calcInputs.currentCap}
                        onChange={(e) => setCalcInputs({ ...calcInputs, currentCap: Number(e.target.value) })}
                        className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-navx-blue focus:outline-none"
                      />
                    </label>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-xs font-bold text-navx-text-muted uppercase tracking-wider">Monthly Fees ($)</span>
                      <input 
                        type="number"
                        value={calcInputs.currentMonthlyFees}
                        onChange={(e) => setCalcInputs({ ...calcInputs, currentMonthlyFees: Number(e.target.value) })}
                        className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-navx-blue focus:outline-none"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs font-bold text-navx-text-muted uppercase tracking-wider">Transaction Fee ($)</span>
                      <input 
                        type="number"
                        value={calcInputs.currentTransactionFee}
                        onChange={(e) => setCalcInputs({ ...calcInputs, currentTransactionFee: Number(e.target.value) })}
                        className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-navx-blue focus:outline-none"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-xs font-bold text-navx-text-muted uppercase tracking-wider">Royalty / Franchise (%)</span>
                    <input 
                      type="number"
                      step="0.1"
                      value={calcInputs.currentRoyalty}
                      onChange={(e) => setCalcInputs({ ...calcInputs, currentRoyalty: Number(e.target.value) })}
                      className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-navx-blue focus:outline-none"
                    />
                  </label>
                </div>
              </div>

              {/* Lead Form after Calculator */}
              <div className="mt-4">
                <h3 className="text-2xl font-bold mb-6">Send Me My Private Comparison</h3>
                {!formSubmitted ? (
                  <form className="grid sm:grid-cols-2 gap-6" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
                    <input required placeholder="First Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3" />
                    <input required placeholder="Last Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3" />
                    <input required type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3" />
                    <input required type="tel" placeholder="Phone Number" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3" />
                    <input placeholder="Current Brokerage" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3" />
                    <select className="bg-navx-navy border border-white/10 rounded-xl px-4 py-3 text-navx-text-muted">
                      <option>Current Production Level...</option>
                      <option>New Agent</option>
                      <option>1-5 transactions</option>
                      <option>6-15 transactions</option>
                      <option>16-30 transactions</option>
                      <option>30+ transactions</option>
                    </select>
                    <div className="sm:col-span-2 flex items-center gap-3 py-2">
                       <input type="checkbox" id="confidential" className="w-5 h-5 rounded border-white/20 bg-white/5 accent-navx-orange" />
                       <label htmlFor="confidential" className="text-sm text-navx-text-muted">I want a confidential conversation to walk through these numbers.</label>
                    </div>
                    <button type="submit" className="sm:col-span-2 bg-navx-orange text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-navx-orange/20 transition-all">
                      Send My Private Comparison
                    </button>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-navx-sky/10 border border-navx-sky/20 p-10 rounded-2xl text-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-navx-blue mx-auto mb-6" />
                    <h4 className="text-2xl font-bold mb-2">Request Ready</h4>
                    <p className="text-navx-text-muted">Your private comparison request is in. A NavX team member will be in touch shortly to walk you through the specifics.</p>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Sticky Results Sidebar */}
            <div className="space-y-6 lg:sticky lg:top-32">
              <motion.div 
                key={results.difference}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card p-10 grow-orange border-navx-orange/30 overflow-hidden relative shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-navx-orange/20 blur-3xl -mr-16 -mt-16" />
                <div className="earnings-output-hd p-8 flex flex-col items-center text-center shadow-inner relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-navx-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h4 className="text-navx-text-muted text-xs font-bold uppercase tracking-widest mb-2 relative z-10">Potential Annual Earnings</h4>
                  <div className="text-6xl font-black text-navx-orange mb-4 relative z-10 drop-shadow-glow">
                    ${Math.round(results.difference).toLocaleString()}
                  </div>
                  <p className="text-[10px] text-navx-orange/60 font-black uppercase tracking-[0.2em] relative z-10">Verified NavX Individual Cap</p>
                </div>
                <p className="text-sm text-navx-text-muted leading-relaxed italic mt-6 text-center">
                  "Your difference could help fund better marketing, database events, coaching, financial growth, or simply more breathing room."
                </p>
              </motion.div>

              <div className="glass-card p-8 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-navx-text-muted uppercase font-bold">Estimated NavX Cost</span>
                    <span className="text-sm font-bold text-navx-blue">${Math.round(results.navXCost).toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-navx-blue w-1/3" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-navx-text-muted uppercase font-bold">Current Brokerage Cost</span>
                    <span className="text-sm font-bold">${Math.round(results.currentCost).toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-white/20 w-3/4" />
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-navx-blue flex-shrink-0 mt-1" />
                  <p className="text-sm text-navx-text-muted"><span className="text-white font-semibold">Support:</span> Full training, tech suite, and relationship-first culture included.</p>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-navx-orange flex-shrink-0 mt-1" />
                  <p className="text-sm text-navx-text-muted"><span className="text-white font-semibold">Momentum:</span> Transition plan built to protect your upcoming closings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Plans & Revenue Section (Navy Theme) --- */}
      <section id="plans" className="py-24 px-6 bg-navx-navy relative overflow-hidden bg-topography">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-navx-blue/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader 
            eyebrow="Precision Revenue Models"
            title="The structure built for **serious** growth."
            subtitle="Whether you are a solo producer or leading a massive team, our models are designed to be a floor, not a ceiling. Keep more of what you earn, reinvest in your brand, and scale with clarity."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Individual Plan */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-card p-10 border-navx-blue/30 relative overflow-hidden group h-full flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-navx-blue/10 blur-[80px] -mr-16 -mt-16" />
              <div className="mb-8">
                <span className="text-[10px] font-black text-navx-blue uppercase tracking-[0.3em] bg-navx-blue/10 px-3 py-1 rounded-full">Individual Agent</span>
                <h3 className="text-4xl font-black mt-4 text-white">Full Cap<br/><span className="text-navx-orange font-black">$5,400</span></h3>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {['60/40 Split until cap', '100% Commission after cap', 'No annual franchise fees', '$99 Membership / month', '$125 Compliance fee'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-navx-text-muted text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-navx-blue" />
                    {item}
                  </li>
                ))}
              </ul>
              <GlowButton variant="secondary" className="w-full" onClick={() => window.open('https://navxcareers.com/plans/', '_blank')}>
                View Detailed Full Plan
              </GlowButton>
            </motion.div>

            {/* Team Scaling Plan */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-card p-10 border-navx-orange/40 relative overflow-hidden shadow-[0_30px_60px_rgba(255,138,31,0.15)] group h-full flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-navx-orange/10 blur-[80px] -mr-16 -mt-16" />
              <div className="mb-8">
                <span className="text-[10px] font-black text-navx-orange uppercase tracking-[0.3em] bg-navx-orange/10 px-3 py-1 rounded-full">Growth Teams</span>
                <h3 className="text-4xl font-black mt-4 text-white">Scale Caps<br/><span className="text-navx-blue font-black font-mono">From $8k</span></h3>
              </div>
              <div className="space-y-2 mb-8">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-navx-text-muted border-b border-white/5 pb-2">
                  <span>Team Size</span>
                  <span>Annual Cap</span>
                </div>
                {[
                  { size: '2 Agents', cap: '$8,000' },
                  { size: '3 Agents', cap: '$12,000' },
                  { size: '4-7 Agents', cap: '$16,000' },
                ].map((p, i) => (
                  <div key={i} className="flex justify-between py-2 text-sm font-semibold">
                    <span className="text-white">{p.size}</span>
                    <span className="text-navx-blue">{p.cap}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-navx-text-muted italic mb-8">"Built for leaders who want to empower their team without the brokerage eating the margin."</p>
              <GlowButton variant="primary" emphasized className="w-full" onClick={() => window.open('https://navxcareers.com/plans/', '_blank')}>
                Explore Team Models
              </GlowButton>
            </motion.div>

            {/* Expansion Plan */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-card p-10 border-white/10 relative overflow-hidden group h-full flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[80px] -mr-16 -mt-16" />
              <div className="mb-8">
                <span className="text-[10px] font-black text-navx-text-muted uppercase tracking-[0.3em] bg-white/5 px-3 py-1 rounded-full">Mega Expansion</span>
                <h3 className="text-4xl font-black mt-4 text-white">8+ Agents<br/><span className="text-navx-text-muted">$18k+</span></h3>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {['Customized team cap structures', 'Reduced individual member caps', 'Full admin integration support', 'Dedicated growth coaching', 'Expansion roadmap planning'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-navx-text-muted text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-white/30" />
                    {item}
                  </li>
                ))}
              </ul>
              <GlowButton variant="outline" className="w-full" onClick={() => window.open('https://navxcareers.com/plans/', '_blank')}>
                Custom Quote
              </GlowButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Beyond the Numbers (Collective Power Section) --- */}
      <section className="py-32 px-6 section-white relative overflow-hidden bg-diagonal-light">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,138,31,0.03),transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-navx-orange/5 blur-[100px] rounded-full pointer-events-none" />
              <MediaPlaceholder type="video" label="The Power of the Collective" className="shadow-[0_40px_80px_rgba(0,0,0,0.2)] rounded-[40px] aspect-video border-navx-navy/5" />
              <div className="absolute -bottom-10 -right-10 bg-navx-navy p-8 rounded-3xl shadow-2xl border border-navx-orange/20 max-w-[280px] hidden md:block animate-float">
                <Users className="text-navx-orange w-10 h-10 mb-4" />
                <h4 className="text-white font-bold mb-2">Relationship-First Culture</h4>
                <p className="text-white/60 text-xs leading-relaxed">It’s not just a brokerage. It’s an environment where your business thrives through connection.</p>
              </div>
            </motion.div>

            <div className="space-y-8">
              <span className="text-navx-orange text-sm font-black tracking-[0.3em] uppercase">The Member Experience</span>
              <h2 className="text-4xl md:text-7xl font-black text-navx-navy leading-none tracking-tighter">
                An environment built for **high-performance** humans.
              </h2>
              <p className="text-xl text-navx-navy/70 leading-relaxed max-w-xl">
                Real estate can be rewarding, but it shouldn't be lonely. Our model is built around the **collective power** of a curated community that shows up for each other.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                {[
                  { title: "Collaborative Culture", body: "Mastermind with high producers who share their wins and losses openly." },
                  { title: "Smart Ecosystem", body: "Technology that stays in the background so you can stay in front of clients." },
                  { title: "Private Masterminds", body: "Confidential sessions focused on scaling from solo agent to business owner." },
                  { title: "Direct Access", body: "Leadership that isn't just a face on a wall, but a resource for your bottlenecks." }
                ].map((box, i) => (
                  <div key={i} className="space-y-2">
                    <h5 className="font-black text-navx-navy uppercase tracking-tight flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-navx-orange" />
                      {box.title}
                    </h5>
                    <p className="text-sm text-navx-navy/60">{box.body}</p>
                  </div>
                ))}
              </div>

              <div className="pt-10 flex flex-col sm:flex-row gap-6">
                <GlowButton variant="primary" emphasized onClick={scrollToCalculator}>
                  See the Numbers
                </GlowButton>
                <GlowButton variant="dark" onClick={() => window.open('https://navxcareers.com/plans/', '_blank')}>
                  Compare All Options
                </GlowButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Proprietary Tech & Intelligence Section (Luxe Navy) --- */}
      <section id="tools" className="py-24 px-6 bg-navx-navy relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navx-orange/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader 
            eyebrow="The Intelligence Hub"
            title="Technology that powers **production**, not just paperwork."
            subtitle="Most brokerages give you a login. We give you a competitive advantage. Our tech suite is curated for clarity, speed, and real-time business intelligence."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "NAV-X CRM", 
                desc: "A high-conversion engine designed to keep you in front of your most valuable leads automatically.",
                icon: Zap,
                accent: "text-navx-orange"
              },
              { 
                title: "Design Center", 
                desc: "Instant, professional-grade marketing assets that keep your brand consistent and premium.",
                icon: Layout,
                accent: "text-navx-blue"
              },
              { 
                title: "ROI Analytics", 
                desc: "Know exactly where your business stands with real-time financial and production tracking.",
                icon: BarChart3,
                accent: "text-navx-orange"
              },
              { 
                title: "NavX Learning", 
                desc: "On-demand masterclasses and field-tested scripts that turn momentum into mastery.",
                icon: BookOpen,
                accent: "text-navx-blue"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -12, scale: 1.02 }}
                className="glass-card p-8 border-navx-orange/20 hover:border-navx-orange/50 transition-all group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-navx-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                <div className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:bg-white/10 transition-colors`}>
                  <item.icon className={`w-8 h-8 ${item.accent}`} />
                </div>
                <h3 className="text-xl font-black text-white mb-3 tracking-tight group-hover:text-navx-orange transition-colors">{item.title}</h3>
                <p className="text-navx-text-muted text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-[10px] font-black text-navx-orange/50 uppercase tracking-[0.2em] group-hover:text-navx-orange transition-colors">
                  <span>Explore Module</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-6">
            <p className="text-navx-text-muted text-sm font-medium italic">"The right tools don't just save time—they generate it."</p>
            <GlowButton variant="secondary" onClick={() => window.open('https://navxcareers.com/tools/', '_blank')}>
              Explore the Full Tech Suite
            </GlowButton>
          </div>
        </div>
      </section>

      {/* --- Experience NavX Section (Orange Theme) --- */}
      <section id="support" className="py-24 px-6 relative overflow-hidden section-orange">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.2),transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center max-w-4xl mx-auto">
            <span className="text-white/80 text-sm font-bold tracking-[0.3em] uppercase mb-4 block">The NavX Advantage</span>
            <h2 className="text-4xl md:text-7xl font-black leading-[1.05] mb-6 text-white tracking-tighter">Growth doesn't happen **by accident.**</h2>
            <p className="text-white/90 text-xl md:text-2xl leading-relaxed font-medium">It happens when a high-capacity agent is placed in a **high-support** environment.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-stretch">
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {[
                { title: "Relationship First", body: "We value people over transactions. Our culture is built around mutual success and shared growth.", icon: Users },
                { title: "Business Structure", body: "Clear, field-tested systems to help you scale without losing your mind to administrative friction.", icon: Target },
                { title: "Guided Support", body: "Direct coaching and technical support that actually addresses your specific bottlenecks.", icon: Rocket },
                { title: "Transition Safety", body: "A confidential, step-by-step roadmap for your move. No public leap before you are ready.", icon: ShieldCheck }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -8, scale: 1.02, rotateX: 2, rotateY: -2 }}
                  className="bg-white/10 border border-white/20 backdrop-blur-md p-10 flex flex-col h-full rounded-3xl group cursor-default shadow-xl transform-gpu transition-all"
                >
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-8 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] group-hover:bg-white/30 transition-colors">
                    <item.icon className="text-white w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tight">{item.title}</h3>
                  <p className="text-white/80 text-base leading-relaxed flex-grow">{item.body}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-full min-h-[400px] lg:min-h-full"
            >
              <MediaPlaceholder type="image" label="Experience NavX Culture" className="absolute inset-0 h-full w-full shadow-2xl border-white/20 rounded-3xl" />
            </motion.div>
          </div>

          <div className="mt-20 text-center">
            <motion.div 
              className="inline-block p-1 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-xl animate-float"
            >
              <div className="px-10 py-8">
                <p className="text-2xl font-light text-white leading-relaxed italic">
                  "You are not just switching brokerages. <span className="font-bold underline decoration-white/30">You are choosing the environment your business grows inside.</span>"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Transition Plan Section --- */}
      <section id="transition" className="py-24 px-6 bg-navx-deep/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-navx-blue/10 border border-navx-blue/20 rounded-full shadow-lg animate-float">
              <Zap className="w-4 h-4 text-navx-blue" />
              <span className="text-[10px] font-bold text-navx-blue uppercase tracking-widest">Business Momentum Guard</span>
            </div>
          </div>
          <SectionHeader 
            title="Switching should feel **guided, not risky.**"
            subtitle="We handle the complexity so you can focus on your clients. Your momentum is our priority."
          />

          <div className="relative mt-16">
            <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-white/10 z-0" />
            <div className="grid lg:grid-cols-4 gap-12 relative z-10">
              {[
                { step: "01", title: "Private Conversation", body: "Talk through your goals, numbers, and concerns in a locked-door setting." },
                { step: "02", title: "Business Comparison", body: "See a detailed projection of how your current model compares to NavX." },
                { step: "03", title: "Transition Plan", body: "Map the move before you make it. Database, listings, and marketing migration." },
                { step: "04", title: "Confident Launch", body: "Step into NavX with clarity, support, and immediate momentum." }
              ].map((item, idx) => (
                <div key={idx} className="space-y-6">
                  <div className="w-20 h-20 bg-navx-navy border-4 border-navx-deep rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-navx-blue font-black text-2xl">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-navx-text-muted text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <GlowButton variant="primary" onClick={scrollToCalculator}>Map My Move</GlowButton>
          </div>
        </div>
      </section>

      {/* --- Trust Builder (Proof Tiles) --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { val: "$5,400 Cap", label: "Then keep 100% of your splits." },
              { val: "$16K Team Cap", label: "Efficient structure for teams of 4." },
              { val: "No Annual Fee", label: "No activation or franchise fees." },
              { val: "Private First Step", label: "Explore the numbers before you decide." },
              { val: "Training + Coaching", label: "Built for agent business growth." },
              { val: "Elite Tech Suite", label: "Tools that save you time and money." }
            ].map((tile, idx) => (
              <div key={idx} className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] flex flex-col justify-center items-center text-center">
                <span className="text-3xl font-black text-white mb-2">{tile.val}</span>
                <p className="text-navx-text-muted text-sm font-medium tracking-wide">{tile.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Guide Download --- */}
      <section className="py-24 px-6 bg-gradient-to-b from-navx-navy to-navx-deep">
        <div className="max-w-7xl mx-auto glass-card p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-navx-blue/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-navx-blue font-bold tracking-widest uppercase text-xs mb-4 block">The Agent’s Brokerage Comparison Guide</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">Before you switch, know exactly what to compare.</h2>
              <ul className="space-y-4 mb-10">
                {[
                  "The fees agents often forget to calculate",
                  "12 critical questions to ask your prospective broker",
                  "How to protect your listing momentum during transition",
                  "Questions to ask before switching teams",
                  "What to prepare before making your move public"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-navx-text-muted">
                    <CheckCircle2 className="w-5 h-5 text-navx-blue flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navx-navy/50 p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Send Me the Guide</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input required placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3" />
                <input required type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3" />
                <input placeholder="Phone (Optional)" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3" />
                <div className="sm:col-span-2 relative">
                  <div className="absolute -inset-4 bg-navx-blue/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <GlowButton emphasized variant="primary" className="w-full mt-4">
                    <Download className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
                    Get Comparison Guide
                  </GlowButton>
                </div>
                <p className="text-center text-[10px] text-navx-text-muted uppercase tracking-widest mt-4">Confidential • Instant Access</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- Second Trust Strip --- */}
      <HorizontalMarquee text={["Keep More", "Lower Cap", "Clear Fees", "100% After Cap", "No Hidden Fees", "Know Your Numbers", "Training", "Coaching", "Tech Suite", "Transition Plan", "Relationship Culture"]} />

      {/* --- Final CTA Section --- */}
      <section className="py-32 px-6 text-center relative overflow-hidden section-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,138,31,0.05),transparent_50%)]" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <SectionHeader 
            centered
            dark
            title="You do not have to switch today. **You just need to see clearly.**"
            subtitle="Start with a private comparison. If NavX is not the right fit, you will still leave with better questions and a clearer view of your business."
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <GlowButton emphasized variant="primary" className="w-full sm:w-auto text-xl px-12 py-6 shadow-2xl" onClick={scrollToCalculator}>
              Start My Private Comparison
            </GlowButton>
            <GlowButton variant="dark" className="w-full sm:w-auto text-lg px-8 py-5" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Back to Calculator
            </GlowButton>
          </div>
        </motion.div>
      </section>
          </motion.main>
        ) : currentPage === 'whynavx' ? (
          <motion.main
            key="whynavx"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <WhyNavX />
          </motion.main>
        ) : (
          <motion.main
            key="course"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CourseFunnel />
          </motion.main>
        )}
      </AnimatePresence>

      {/* --- Footer & Sticky Mobile CTA --- */}
      <footer className="py-12 bg-navx-navy border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-navx-orange rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl">X</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">NavX <span className="font-light text-navx-text-muted">Realty</span></span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs text-navx-text-muted leading-relaxed max-w-md ml-auto">
              Calculator results are estimates only. Actual results may vary based on production, transactions, fees, team structure, and brokerage agreement. NavX Realty is an Equal Opportunity Brokerage.
            </p>
            <p className="text-xs text-navx-text-muted mt-4">
              &copy; {new Date().getFullYear()} NavX Realty. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* --- Floating Bottom Mobile CTA --- */}
      <AnimatePresence>
        {showFloatingCta && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-6 right-6 z-50 flex justify-center md:hidden"
          >
            <button 
              onClick={() => {
                if (currentPage === 'course') {
                  document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  scrollToCalculator();
                }
              }}
              className="bg-navx-orange text-white w-full py-4 rounded-full font-bold shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all glow-orange"
            >
              {currentPage === 'course' ? 'Join the Framework' : 'See What You Could Earn'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Desktop Floating Pill */}
      <AnimatePresence>
        {showFloatingCta && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 right-8 z-50 hidden md:block"
          >
            <div className="glass-card p-4 flex items-center gap-6 shadow-2xl border-navx-blue/20">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-navx-text-muted uppercase tracking-widest">
                  {currentPage === 'course' ? 'Ready to reset?' : 'Ready for clarity?'}
                </span>
                <span className="text-sm font-bold">
                  {currentPage === 'course' ? '100-Day Framework' : 'Confidential Earnings Check'}
                </span>
              </div>
              <button 
                onClick={() => {
                  if (currentPage === 'course') {
                    document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    scrollToCalculator();
                  }
                }}
                className="bg-navx-blue text-navx-navy px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-all text-sm"
              >
                {currentPage === 'course' ? 'Enroll Now' : 'Calculate Now'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
