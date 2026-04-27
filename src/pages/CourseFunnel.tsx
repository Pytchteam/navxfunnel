import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Target, 
  Rocket, 
  Zap, 
  ChevronRight, 
  Youtube, 
  Clock, 
  Calendar, 
  ClipboardCheck, 
  Users, 
  MessagesSquare, 
  ShieldCheck, 
  Monitor, 
  Play, 
  ChevronDown, 
  AlertCircle,
  FileText,
  MousePointer2,
  Trophy,
  Activity,
  Layout,
  Briefcase,
  BarChart3,
  TriangleAlert
} from 'lucide-react';
import { SectionHeader, GlowButton, MediaPlaceholder, HorizontalMarquee } from '../components/Shared';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-navx-orange transition-colors group"
      >
        <span className="text-xl font-bold tracking-tight">{question}</span>
        <ChevronDown className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-navx-orange' : 'text-white/20'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pb-6 text-navx-text-muted leading-relaxed"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function CourseFunnel() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    licensed: '',
    brokerage: '',
    productionLevel: '',
    primaryGoal: '',
    interestedIn: '',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionType, setSubmissionType] = useState<'signup' | 'details' | null>(null);

  const handleSubmit = (type: 'signup' | 'details') => {
    let leadIntent = 'course_inquiry';
    let leadType = 'agent';

    if (formData.interestedIn === 'NavX brokerage conversation') leadIntent = 'high_intent_recruiting';
    else if (formData.interestedIn === 'Course signup') leadIntent = 'course_signup';
    else if (formData.interestedIn === 'Course details') leadIntent = 'course_inquiry';
    else if (formData.interestedIn === 'Team training') leadIntent = 'team_training';

    if (formData.productionLevel === 'Team leader') leadType = 'team_leader';

    const leadObject = {
      ...formData,
      submissionType: type,
      leadIntent,
      leadType,
      timestamp: new Date().toISOString(),
      campaign: '100_days_100k_framework'
    };

    console.log('Lead Captured:', leadObject);
    setSubmissionType(type);
    setFormSubmitted(true);
  };

  return (
    <div className="bg-navx-navy text-white font-sans selection:bg-navx-blue selection:text-navx-navy overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-48 pb-32 overflow-hidden bg-dot-pattern">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navx-navy/90 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-navx-navy/0 via-navx-navy/40 to-navx-navy z-20" />
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale opacity-20 scale-110" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-30">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            >
              <span className="inline-block text-navx-blue font-black tracking-[0.4em] uppercase text-[10px] mb-8 bg-navx-blue/10 px-4 py-2 rounded-full border border-navx-blue/20">
                For agents tired of guessing.
              </span>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mb-10 text-white tracking-tighter text-gradient-white">
                Build toward <span className="text-navx-orange drop-shadow-glow">$100K more</span> opportunity.
              </h1>
              <p className="text-xl md:text-2xl text-navx-text-muted leading-relaxed mb-12 max-w-xl font-medium text-balance">
                Most agents do not need more motivation. They need a system. Mark Peebles walks you through the structure, habits, and business plan needed to create serious momentum.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-start mb-12">
                <GlowButton variant="primary" emphasized onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}>
                  Join the 100-Day Framework
                </GlowButton>
                <GlowButton variant="outline" onClick={() => document.getElementById('inside')?.scrollIntoView({ behavior: 'smooth' })}>
                  See What’s Inside
                </GlowButton>
              </div>
              <div className="flex items-center gap-3 text-white/40 text-[10px] font-black tracking-[0.2em] uppercase">
                <ShieldCheck className="w-4 h-4 text-navx-blue/60" />
                <span>No hype. No shortcuts. Just structure you can follow.</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group lg:ml-10"
            >
              <div className="absolute -inset-4 bg-navx-orange/10 blur-3xl rounded-[40px] group-hover:bg-navx-orange/20 transition-all" />
              <div className="glass-card border-white/10 p-8 md:p-10 shadow-2xl relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-navx-orange/20 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-navx-orange" />
                    </div>
                    <div>
                      <h4 className="font-black text-white uppercase tracking-tight text-lg">100-Day Framework</h4>
                      <p className="text-[10px] text-navx-text-muted font-bold tracking-widest uppercase">Premium Business Suite</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-navx-blue/20 text-navx-blue text-[10px] font-black rounded-full uppercase tracking-widest">Active</div>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    { label: "Daily Action Plan", icon: Zap },
                    { label: "Weekly Business Tracker", icon: BarChart3 },
                    { label: "Relationship Builder", icon: Users },
                    { label: "Conversation Scripts", icon: MessagesSquare },
                    { label: "Progress Checklist", icon: ClipboardCheck }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:border-white/10 transition-all hover:bg-white/10">
                      <item.icon className="w-5 h-5 text-navx-blue" />
                      <span className="text-sm font-bold text-white/80">{item.label}</span>
                      <ChevronRight className="w-4 h-4 ml-auto text-white/20" />
                    </div>
                  ))}
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-navx-orange text-white rounded-2xl font-black text-sm tracking-widest uppercase shadow-lg shadow-navx-orange/20"
                >
                  Start My 100-Day Reset
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <div className="flex flex-col gap-1">
        <HorizontalMarquee text={["Structure", "Focus", "Follow-Up", "Relationships", "Lead Flow", "Better Habits", "Clearer Plan", "100 Days"]} />
        <div className="bg-navx-navy border-y border-white/5 py-4 overflow-hidden select-none z-10">
          <div className="animate-marquee-slow whitespace-nowrap py-1">
            {[1, 2].map((i) => (
              <React.Fragment key={i}>
                {["Stop Guessing", "Start Building", "Track What Matters", "Build Daily", "Move With Rhythm"].map((item, idx) => (
                  <span key={idx} className="inline-flex items-center mx-16 text-navx-blue font-bold text-[14px] tracking-[0.2em] uppercase">
                    {item}
                    <span className="ml-32 w-1.5 h-1.5 rounded-full bg-navx-orange/40" />
                  </span>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Pain Mirror Section */}
      <section className="py-40 px-6 bg-white relative overflow-hidden bg-dot-pattern-dark">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-8xl font-black text-navx-navy mb-8 tracking-tighter leading-[0.95] text-balance">
              Real estate agents are not failing because they are lazy.
            </h2>
            <h3 className="text-2xl md:text-5xl font-black text-navx-orange italic tracking-tight">
              They are failing because their business has no rhythm.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "The Daily Guess", body: "“Who should I call today?”", icon: Target },
              { title: "The Content Spiral", body: "“What should I post?”", icon: Layout },
              { title: "The Pipeline Panic", body: "“Where is my next deal coming from?”", icon: TriangleAlert },
              { title: "The Quiet Frustration", body: "“Why am I working so hard but still feeling behind?”", icon: MousePointer2 }
            ].map((card, i) => (
              <div key={i} className="bg-navx-navy/5 p-10 rounded-[40px] border border-navx-navy/5 space-y-6 hover:bg-white hover:shadow-2xl transition-all h-full">
                <div className="w-14 h-14 bg-navx-orange rounded-2xl flex items-center justify-center mb-6 text-white">
                  <card.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-navx-navy uppercase tracking-tight leading-tight">{card.title}</h4>
                <p className="text-navx-navy/60 text-lg italic font-medium leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-2xl md:text-3xl font-black text-navx-navy tracking-tight max-w-3xl mx-auto">
              “The problem is not your ambition. <span className="text-navx-blue">It is the absence of a repeatable system.</span>”
            </p>
          </div>
        </div>
      </section>

      {/* 4. Course Promise Section */}
      <section id="inside" className="py-32 px-6 bg-navx-navy relative overflow-hidden bg-topography">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-navx-blue/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader 
            eyebrow="The Framework Promise"
            title="This is the **100-day reset** your business has been asking for."
            subtitle="Inside 100 Days to $100K, agents learn how to structure their time, build consistent lead flow, strengthen relationships, and create a business plan that can produce more opportunity."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Build a Daily Success Schedule", body: "Know what matters before the day starts.", icon: Clock },
              { title: "Strengthen Your Database", body: "Turn names in your phone into real conversations.", icon: Users },
              { title: "Create Real Conversations", body: "Stop waiting for leads to magically appear.", icon: MessagesSquare },
              { title: "Improve Follow-Up Habits", body: "Because the fortune is not in the lead. It is in the follow-up.", icon: ClipboardCheck },
              { title: "Track the Right Numbers", body: "Measure momentum before income shows up.", icon: BarChart3 },
              { title: "Build With Structure", body: "A business feels different when it has rhythm.", icon: Rocket }
            ].map((p, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-10 border-white/5 hover:border-navx-orange/30 transition-all flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 text-navx-orange">
                  <p.icon className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-black text-white mb-4 tracking-tight leading-tight">{p.title}</h4>
                <p className="text-navx-text-muted text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <GlowButton variant="primary" emphasized onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}>
              Start My 100-Day Reset
            </GlowButton>
          </div>
        </div>
      </section>

      {/* 5. 100-Day Journey Section */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black text-navx-navy mb-6 tracking-tighter">100 days. One framework.</h2>
            <p className="text-2xl text-navx-navy/40 font-bold uppercase tracking-widest">A clearer way to build.</p>
          </div>

          <div className="relative space-y-12">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-navx-navy/5 -translate-x-1/2 hidden md:block" />
            
            {[
              { days: "1–20", title: "Reset the Foundation", copy: "Clarify your goals, schedule, numbers, and daily rhythm." },
              { days: "21–40", title: "Activate Relationships", copy: "Reconnect with your database and create meaningful conversations." },
              { days: "41–60", title: "Build Lead Flow", copy: "Create buyer, seller, referral, and follow-up opportunities." },
              { days: "61–80", title: "Strengthen Conversion", copy: "Improve scripts, consultations, confidence, and next-step conversations." },
              { days: "81–100", title: "Build the Business Plan", copy: "Turn short-term activity into a repeatable growth system." }
            ].map((step, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-12 group ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 flex flex-col items-center md:items-end group-hover:scale-105 transition-transform duration-500">
                  <div className={`p-8 bg-navx-navy/5 rounded-[40px] border border-navx-navy/5 w-full max-w-sm hover:shadow-2xl transition-all ${i % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-navx-orange font-black text-sm tracking-[0.2em] uppercase mb-2 block">Days {step.days}</span>
                    <h4 className="text-2xl font-black text-navx-navy mb-3">{step.title}</h4>
                    <p className="text-navx-navy/60 font-medium">{step.copy}</p>
                  </div>
                </div>
                <div className="absolute left-6 md:left-1/2 w-12 h-12 bg-navx-navy rounded-full -translate-x-1/2 border-8 border-white z-10 flex items-center justify-center text-white font-black text-xs hidden md:flex">
                  {i + 1}
                </div>
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>

          <div className="mt-32 text-center">
            <GlowButton variant="dark" onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}>
              Join the Framework
            </GlowButton>
          </div>
        </div>
      </section>

      {/* 6. Why Mark Section */}
      <section className="py-32 px-6 bg-navx-navy relative overflow-hidden bg-diagonal-dark">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-navx-blue text-sm font-black tracking-[0.3em] uppercase">Learn from experience</span>
              <h2 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter">
                Learn from someone who has built inside the business.
              </h2>
              <div className="space-y-6 text-xl text-navx-text-muted leading-relaxed">
                <p>Mark Peebles is not teaching theory from the sidelines.</p>
                <p>He is a real estate educator, keynote speaker, founder of NavX Realty, and host of Real Life in Real Estate. His work helps agents think clearer, build stronger, and grow with purpose.</p>
                <p className="text-white font-bold leading-relaxed">This course brings his teaching into a focused 100-day framework agents can actually use.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { tag: "Founder", desc: "Built around guidance and growth." },
                  { tag: "Educator", desc: "Practical frameworks agents use." },
                  { tag: "Speaker", desc: "Clarity and energy in the room." },
                  { tag: "Podcast Host", desc: "Real conversations about business." },
                  { tag: "Business Builder", desc: "Focused on systems that last." }
                ].map((t, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <span className="text-navx-orange text-[10px] font-black uppercase tracking-widest">{t.tag}</span>
                    <p className="text-xs text-white/50">{t.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <GlowButton variant="secondary" onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}>
                  Learn From Mark
                </GlowButton>
              </div>
            </div>

            <div className="relative group perspective-1000">
              <div className="absolute -inset-10 bg-navx-blue/10 blur-[100px] rounded-full group-hover:bg-navx-blue/20 transition-all" />
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-white/10 aspect-video group-hover:scale-105 transition-transform duration-700">
                <MediaPlaceholder type="video" label="Watch Mark Teach the Framework" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hidden md:block group-hover:-translate-x-4 transition-transform">
                <span className="text-navx-orange font-black text-2xl drop-shadow-glow">54+</span>
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1">Video Lessons</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Value Stack Section */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <SectionHeader 
            dark
            eyebrow="The Full Reset Package"
            title="You are not just getting a course. You are getting a **business rhythm**."
            subtitle="The value is not in watching lessons. The value is in what the framework helps you do next."
          />

          <div className="space-y-4 mb-16">
            {[
              { item: "Full 100-Day Course", val: "$279" },
              { item: "Agent Daily Action Plan", val: "$97" },
              { item: "Weekly Business Tracker", val: "$47" },
              { item: "Relationship Database Builder", val: "$47" },
              { item: "Buyer/Seller Conversation Scripts", val: "$97" },
              { item: "100-Day Progress Checklist", val: "$27" }
            ].map((v, i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-navx-navy/5 rounded-2xl border border-navx-navy/5 hover:bg-white hover:shadow-lg transition-all group">
                <span className="text-xl font-bold text-navx-navy group-hover:text-navx-orange transition-colors">{v.item}</span>
                <span className="text-navx-navy/40 font-black tracking-widest uppercase">{v.val}</span>
              </div>
            ))}
          </div>

          <div className="bg-navx-navy rounded-[40px] p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-navx-orange/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <p className="text-white/40 text-sm font-bold uppercase tracking-[0.3em] mb-4">Investment Opportunity</p>
              <div className="flex flex-col items-center gap-2 mb-8">
                <span className="text-white/30 text-2xl line-through decoration-navx-orange underline-offset-4">Total Value: $594+</span>
                <span className="text-6xl md:text-8xl font-black text-white tracking-tighter">Today: $279</span>
              </div>
              <GlowButton variant="primary" emphasized className="w-full sm:w-auto" onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}>
                Join the 100 Days to $100K Framework
              </GlowButton>
              <p className="mt-8 text-white/50 text-xs font-bold uppercase tracking-widest">A focused investment in the structure your business keeps asking for.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 & 9. Who This Is For/Not For */}
      <section className="py-32 px-6 bg-navx-navy relative overflow-hidden bg-topography">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <SectionHeader 
              centered={false}
              title="This is for the agent who knows they are **capable of more**."
            />
            <div className="space-y-6">
              {[
                { title: "Newer Agents", body: "You want structure before bad habits take over." },
                { title: "Inconsistent Agents", body: "You have had wins, but the rhythm is not reliable yet." },
                { title: "Busy Agents", body: "You are moving, but not always moving in the right direction." },
                { title: "Relationship-Based", body: "You want to build through trust, not chase strangers forever." },
                { title: "Future Team Leaders", body: "You want a business that can eventually support more than just you." }
              ].map((card, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-8 h-8 rounded-full bg-navx-blue/20 flex items-center justify-center shrink-0 group-hover:bg-navx-blue transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-navx-blue group-hover:text-navx-navy" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white mb-1">{card.title}</h4>
                    <p className="text-navx-text-muted">{card.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12 bg-white/5 p-12 rounded-[40px] border border-white/5 relative">
            <div className="absolute top-10 right-10 opacity-10">
              <TriangleAlert className="w-40 h-40" />
            </div>
            <SectionHeader 
              centered={false}
              title="This is not for agents looking for **shortcuts**."
            />
            <div className="space-y-8 text-xl font-bold text-white/60 leading-relaxed italic">
              <p>“This is not magic.”</p>
              <p>“This is not a guarantee.”</p>
              <p>“This is not a ‘watch once and get rich’ course.”</p>
              <p className="text-white text-2xl leading-snug">It is a focused business framework for agents willing to show up, track the work, and build with intention.</p>
            </div>
            <div className="pt-6">
              <GlowButton variant="secondary" onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}>
                I’m Ready for the Framework
              </GlowButton>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Mental Conversation Block */}
      <section className="py-32 px-6 bg-white relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionHeader 
            dark
            title="Most agents **do not need more leads**."
            subtitle="They need a system that stops leads, relationships, and opportunities from dying in their phone."
          />
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {[
              "Your next $100K starts with your calendar.",
              "Motivation fades. Structure saves you.",
              "Chasing deals is exhausting. Building a business is different."
            ].map((s, i) => (
              <div key={i} className="p-8 bg-navx-navy rounded-3xl text-white font-black text-xl italic leading-relaxed tracking-tight flex items-center justify-center">
                {s}
              </div>
            ))}
          </div>
          <GlowButton variant="dark" onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}>
            Get the 100-Day Framework
          </GlowButton>
        </div>
      </section>

      {/* 11. What You Will Walk Away With */}
      <section className="py-32 px-6 bg-navx-navy relative overflow-hidden bg-diagonal-dark">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader 
            eyebrow="The Outcome"
            title="By the end, you should not just feel inspired. You should **know what to do** next."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "A Clear Weekly Rhythm", desc: "Know where your time should go." },
              { title: "A Stronger Database Plan", desc: "Turn relationships into real opportunities." },
              { title: "Better Follow-Up Habits", desc: "Stop letting warm leads go cold." },
              { title: "Confident Conversations", desc: "Know what to say when the opportunity shows up." },
              { title: "A Business Plan You Use", desc: "Not a document that sits in a folder. A plan that guides your week." },
              { title: "A Better View of Your Future", desc: "Because consistency starts with clarity." }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white/5 rounded-[40px] border border-white/5 hover:border-navx-blue/30 transition-all flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-navx-blue/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-navx-blue" />
                </div>
                <h4 className="text-2xl font-black text-white mb-4 tracking-tight leading-tight">{item.title}</h4>
                <p className="text-navx-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Course Signup / Interest Form */}
      <section id="enroll" className="py-40 px-6 bg-white relative overflow-hidden bg-diagonal-light">
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-navx-blue/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-navx-navy mb-6 tracking-tighter">Start your 100-day reset.</h2>
            <p className="text-xl md:text-2xl text-navx-navy/50 font-bold">Tell us where to send the details and how you want to begin.</p>
          </div>

          <div className="bg-navx-navy p-8 md:p-16 rounded-[60px] shadow-2xl relative overflow-hidden">
            {!formSubmitted ? (
              <form 
                className="grid md:grid-cols-2 gap-8"
                onSubmit={(e) => { e.preventDefault(); handleSubmit('signup'); }}
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-navx-text-muted uppercase tracking-[0.2em]">First Name</label>
                    <input 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-navx-orange focus:outline-none text-white font-medium" 
                      placeholder="Jane" 
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-navx-text-muted uppercase tracking-[0.2em]">Email Address</label>
                    <input 
                      required type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-navx-orange focus:outline-none text-white font-medium" 
                      placeholder="jane@example.com" 
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-navx-text-muted uppercase tracking-[0.2em]">Current Brokerage</label>
                    <input 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-navx-orange focus:outline-none text-white font-medium" 
                      placeholder="Current Agency" 
                      onChange={(e) => setFormData({...formData, brokerage: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-navx-text-muted uppercase tracking-[0.2em]">Production Level</label>
                    <select 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-navx-orange focus:outline-none text-navx-text-muted font-medium appearance-none"
                      onChange={(e) => setFormData({...formData, productionLevel: e.target.value})}
                    >
                      <option className="bg-navx-navy">Select your pace</option>
                      <option className="bg-navx-navy">Not licensed yet</option>
                      <option className="bg-navx-navy">New agent</option>
                      <option className="bg-navx-navy">1–5 transactions</option>
                      <option className="bg-navx-navy">6–15 transactions</option>
                      <option className="bg-navx-navy">16–30 transactions</option>
                      <option className="bg-navx-navy">30+ transactions</option>
                      <option className="bg-navx-navy">Team leader</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-navx-text-muted uppercase tracking-[0.2em]">Last Name</label>
                    <input 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-navx-orange focus:outline-none text-white font-medium" 
                      placeholder="Doe" 
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-navx-text-muted uppercase tracking-[0.2em]">Phone Number</label>
                    <input 
                      required type="tel" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-navx-orange focus:outline-none text-white font-medium" 
                      placeholder="(555) 000-0000" 
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-navx-text-muted uppercase tracking-[0.2em]">Primary Goal</label>
                    <select 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-navx-orange focus:outline-none text-navx-text-muted font-medium appearance-none"
                      onChange={(e) => setFormData({...formData, primaryGoal: e.target.value})}
                    >
                      <option className="bg-navx-navy">Select primary focus</option>
                      <option className="bg-navx-navy">Get more consistent</option>
                      <option className="bg-navx-navy">Improve follow-up</option>
                      <option className="bg-navx-navy">Build better lead flow</option>
                      <option className="bg-navx-navy">Create a business plan</option>
                      <option className="bg-navx-navy">Grow my database</option>
                      <option className="bg-navx-navy">Explore NavX later</option>
                      <option className="bg-navx-navy">Join the course only</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-navx-text-muted uppercase tracking-[0.2em]">Interested In</label>
                    <select 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-navx-orange focus:outline-none text-navx-text-muted font-medium appearance-none"
                      onChange={(e) => setFormData({...formData, interestedIn: e.target.value})}
                    >
                      <option className="bg-navx-navy">How can we help?</option>
                      <option className="bg-navx-navy" value="Course signup">Course signup</option>
                      <option className="bg-navx-navy" value="Course details">Course details</option>
                      <option className="bg-navx-navy" value="Coaching">Coaching</option>
                      <option className="bg-navx-navy" value="NavX brokerage conversation">NavX brokerage conversation</option>
                      <option className="bg-navx-navy" value="Team training">Team training</option>
                      <option className="bg-navx-navy" value="Speaking / workshop">Speaking / workshop</option>
                      <option className="bg-navx-navy" value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-2 pt-8 flex flex-col sm:flex-row gap-6">
                  <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-navx-orange text-white py-6 rounded-3xl font-black text-xl shadow-[0_20px_40px_rgba(255,138,31,0.3)] hover:shadow-[0_20px_40px_rgba(255,138,31,0.5)] transition-all"
                  >
                    Join the 100-Day Framework
                  </motion.button>
                  <motion.button 
                    type="button"
                    onClick={() => handleSubmit('details')}
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 bg-white/5 border border-white/10 text-white py-6 rounded-3xl font-black text-xl hover:bg-white/10 transition-all"
                  >
                    Send Me Framework Details
                  </motion.button>
                </div>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-8"
              >
                <div className="w-24 h-24 bg-navx-blue/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-12 h-12 text-navx-blue" />
                </div>
                <div>
                  <h3 className="text-4xl font-black text-white mb-4">
                    {submissionType === 'signup' ? 'You are in.' : 'Request Received.'}
                  </h3>
                  <p className="text-xl text-navx-text-muted max-w-lg mx-auto leading-relaxed">
                    {submissionType === 'signup' 
                      ? 'Your 100-day reset starts with structure. Watch your email (and spam) for the next step.'
                      : 'Framework details requested. We will send you the overview so you can decide if this is the right next step.'
                    }
                  </p>
                </div>
                <GlowButton variant="outline" onClick={() => setFormSubmitted(false)}>
                  Send Another Request
                </GlowButton>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 13. Soft NavX Bridge Section */}
      <section className="py-40 px-6 bg-navx-navy relative overflow-hidden bg-topography">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-navx-orange/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <SectionHeader 
            eyebrow="The Next Chapter"
            title="Training is the first step. **Environment** is the multiplier."
            subtitle="The 100 Days to $100K Framework helps agents build better habits. NavX was built around the same belief: agents deserve more than a logo."
          />
          <div className="space-y-6 text-xl text-navx-text-muted leading-relaxed mb-16">
            <p>You do not have to explore NavX today.</p>
            <p>But if the way Mark teaches business growth feels aligned, it may be worth seeing what the NavX model looks like from the inside.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GlowButton variant="secondary" onClick={() => window.open('https://navxcareers.com/', '_blank')}>
              See If NavX Fits Me
            </GlowButton>
            <GlowButton variant="outline" onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}>
              Keep Me Focused on the Course
            </GlowButton>
          </div>
        </div>
      </section>

      {/* 14. YouTube Section */}
      <section className="py-32 px-6 bg-navx-orange relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-8">
            <span className="text-navx-navy text-sm font-black tracking-[0.3em] uppercase">Free guidance from Mark</span>
            <h2 className="text-4xl md:text-6xl font-black text-navx-navy leading-[1.05] tracking-tighter">
              Want to learn from Mark before you join anything?
            </h2>
            <p className="text-xl text-navx-navy/70 font-bold leading-relaxed">
              Subscribe to Mark’s YouTube channel for free guidance on real estate growth, lead follow-up, market shifts, and building a sustainable career.
            </p>
            <div className="space-y-4 text-navx-navy font-black text-3xl italic leading-none opacity-40">
              <p>Watch. Learn. Think.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <GlowButton variant="dark" className="border-none" onClick={() => window.open('https://www.youtube.com/@ThePeeblesGroup', '_blank')}>
                <Youtube className="w-5 h-5 mr-2" />
                Subscribe For Free Guidance
              </GlowButton>
              <GlowButton variant="outline" className="border-navx-navy/20 text-navx-navy hover:bg-navx-navy/5" onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}>
                Join the Framework
              </GlowButton>
            </div>
          </div>
          <div className="relative group cursor-pointer" onClick={() => window.open('https://www.youtube.com/@ThePeeblesGroup', '_blank')}>
            <div className="absolute -inset-10 bg-navx-navy/10 blur-[100px] rounded-[60px]" />
            <div className="relative aspect-video rounded-[40px] bg-navx-navy p-2 shadow-2xl overflow-hidden flex items-center justify-center">
              <Youtube className="w-24 h-24 text-navx-orange" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="w-32 h-2 bg-white/20 rounded-full" />
                <div className="px-4 py-1 bg-navx-orange rounded-full text-[10px] font-black text-navx-navy">WATCH FREE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. FAQ Section */}
      <section className="py-32 px-6 bg-navx-navy relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionHeader 
            eyebrow="Questions & Answers"
            title="Commonly asked **questions**."
          />
          <div className="space-y-2">
            <FAQItem 
              question="Is this course only for NavX agents?" 
              answer="No. The framework is designed for agents who want more structure in their business, whether or not they are currently with NavX."
            />
            <FAQItem 
              question="Does this guarantee I will make $100K?" 
              answer="No. Results depend on your market, activity, follow-up, experience, consistency, and execution. The course is designed to help you build toward more opportunity with a clearer plan."
            />
            <FAQItem 
              question="Is this good for new agents?" 
              answer="Yes. Newer agents can use it to build rhythm early instead of guessing their way through the business."
            />
            <FAQItem 
              question="Is this useful for experienced agents?" 
              answer="Yes. Experienced agents often know what to do but need a reset, better tracking, and more consistency."
            />
            <FAQItem 
              question="Will someone try to recruit me immediately?" 
              answer="No. The course is a training pathway first. If you show interest in NavX, the team can follow up with a private conversation."
            />
            <FAQItem 
              question="What happens after I sign up?" 
              answer="You will receive course details and next steps by email. If you request a conversation, someone from the team can reach out."
            />
            <FAQItem 
              question="How much is the course?" 
              answer="The current enrollment price is $279 one-time payment."
            />
          </div>
        </div>
      </section>

      {/* 16. Final CTA Section */}
      <section className="relative py-40 overflow-hidden text-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-navx-navy/90 z-10" />
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale opacity-20" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-20">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            You do not need another year of guessing.
          </h2>
          <p className="text-2xl md:text-3xl text-navx-text-muted font-bold mb-16 italic max-w-3xl mx-auto">
            Give yourself 100 focused days. Build the rhythm. Track the work. Create the plan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GlowButton variant="primary" emphasized onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}>
              Join the 100-Day Framework
            </GlowButton>
            <GlowButton variant="outline" onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}>
              Send Me Framework Details
            </GlowButton>
          </div>

          <div className="mt-24 p-8 bg-black/40 backdrop-blur-xl rounded-[40px] border border-white/5 text-left max-w-3xl mx-auto">
            <div className="flex gap-4 items-start">
              <AlertCircle className="w-6 h-6 text-navx-orange shrink-0 mt-1" />
              <p className="text-xs text-white/40 leading-relaxed font-medium">
                DISCLAIMER: The 100 Days to $100K Framework is educational and does not guarantee income, production, closings, or business results. Individual outcomes vary based on activity, market conditions, experience, consistency, and follow-through.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
