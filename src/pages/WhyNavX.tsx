import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  CheckCircle2, 
  Target, 
  Rocket, 
  BarChart3, 
  ShieldCheck, 
  TriangleAlert, 
  Zap, 
  ChevronRight, 
  ArrowRight, 
  Layout, 
  BookOpen, 
  Youtube, 
  Instagram, 
  Linkedin, 
  Facebook,
  Heart,
  Eye,
  Star,
  Award,
  MessageSquare
} from 'lucide-react';
import { SectionHeader, GlowButton, MediaPlaceholder, HorizontalMarquee } from '../components/Shared';

export default function WhyNavX() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const trustStrip1 = ["Proof", "Leadership", "Service", "Relationships", "Guidance", "Experience", "Results", "Structure", "Trust"];
  const trustStrip2 = ["$268.2M Sold", "1,199 Transactions", "75+ Years Experience", "1,500+ Properties Sold", "1,100+ Clients Served"];

  return (
    <div className="bg-navx-navy text-white font-sans selection:bg-navx-blue selection:text-navx-navy overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-dot-pattern">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-navx-blue/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="inline-block text-navx-blue font-black tracking-[0.4em] uppercase text-[10px] mb-8 bg-navx-blue/10 px-4 py-2 rounded-full border border-navx-blue/20">
              For agents who want proof before they make a move.
            </span>
            <h1 className="text-5xl md:text-8xl font-black leading-[0.95] mb-10 text-white tracking-tighter max-w-5xl mx-auto text-gradient-white">
              A brokerage should earn your trust before asking for your license.
            </h1>
            <p className="text-xl md:text-2xl text-navx-text-muted leading-relaxed mb-6 max-w-3xl mx-auto font-medium text-balance">
              NavX Realty is built on experience, relationships, transparent support, and results you can actually see.
            </p>
            <p className="text-lg text-white/40 mb-12 max-w-2xl mx-auto font-medium">
              Before you compare caps, splits, or tools — compare the people, the proof, and the philosophy behind the brokerage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <GlowButton variant="primary" emphasized onClick={() => document.getElementById('capture')?.scrollIntoView({ behavior: 'smooth' })}>
                See If NavX Fits Me
              </GlowButton>
              <GlowButton variant="outline" onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}>
                Meet the Team
              </GlowButton>
            </div>
            <div className="flex items-center justify-center gap-3 text-navx-text-muted/60 text-[10px] font-black tracking-[0.2em] uppercase">
              <ShieldCheck className="w-4 h-4 text-navx-blue/60" />
              <span>No pressure. No hype. Just a clearer look at who we are.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <div className="flex flex-col gap-1">
        <HorizontalMarquee text={trustStrip1} />
        <div className="bg-navx-navy border-y border-white/5 py-4 overflow-hidden select-none z-10">
          <div className="animate-marquee-slow whitespace-nowrap py-1">
            {[...trustStrip2, ...trustStrip2].map((item, idx) => (
              <span key={idx} className="inline-flex items-center mx-16 text-navx-blue font-bold text-[14px] tracking-[0.2em] uppercase">
                {item}
                <span className="ml-32 w-1.5 h-1.5 rounded-full bg-navx-orange/40" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. The Belief Block */}
      <section className="py-32 px-6 bg-white relative overflow-hidden text-center bg-dot-pattern-dark">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-navx-orange/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-16">
          <h2 className="text-4xl md:text-7xl font-black text-navx-navy tracking-tighter leading-[0.95] text-balance">
            NavX was not built to be another place to hang your license.
          </h2>
          <div className="space-y-6 text-2xl md:text-4xl font-black text-navx-navy/70 leading-snug tracking-tight">
            <p className="opacity-40">A brokerage should help you think clearer.</p>
            <p className="opacity-60">Grow stronger.</p>
            <p className="opacity-80">Serve better.</p>
            <p className="opacity-90">Keep more.</p>
            <p className="text-navx-navy">And build a business that can last.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4 pt-8">
            <p className="text-xl md:text-2xl font-bold text-navx-navy/60 leading-relaxed italic">
              "Not just more agents. Better-supported agents. Not just more transactions. Better-guided people. Not just a brokerage. <span className="text-navx-blue underline decoration-2 underline-offset-8">A better environment.</span>"
            </p>
          </div>
          <div className="pt-8">
            <GlowButton variant="dark" onClick={() => document.getElementById('metrics')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore the NavX Difference
            </GlowButton>
          </div>
        </div>
      </section>

      {/* 4. Proof Metrics */}
      <section id="metrics" className="py-32 px-6 bg-navx-navy relative overflow-hidden bg-topography">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader 
            eyebrow="The Data of Trust"
            title="Trust gets stronger when **proof** is visible."
            subtitle="The numbers are not the whole story. But they show something important: people keep choosing NavX, Mark, and the teams behind them."
          />

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10">
            {[
              { val: "$268.2M", label: "Total volume sold in 2024" },
              { val: "1,199", label: "Total transactions in 2024" },
              { val: "5.0", label: "Zillow rating" },
              { val: "22", label: "Team reviews" },
              { val: "45", label: "Sales in last 12 mo" },
              { val: "671", label: "Total sales" },
              { val: "20 Yrs", label: "Real estate experience" },
              { val: "75+", label: "Combined years exp." },
              { val: "1,500+", label: "Properties sold" },
              { val: "1,100+", label: "Satisfied clients" },
            ].map((m, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-6 text-center border-white/5 hover:border-navx-orange/30 transition-all group"
              >
                <div className="text-3xl md:text-4xl font-black text-navx-orange mb-2 group-hover:drop-shadow-glow">{m.val}</div>
                <div className="text-[10px] font-bold text-navx-text-muted uppercase tracking-widest">{m.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center border-t border-white/5 pt-12">
            <p className="text-xl md:text-2xl font-bold text-white/50 italic">
              "Numbers do not replace trust. They reinforce it."
            </p>
          </div>
        </div>
      </section>

      {/* 5. About NavX */}
      <section className="py-32 px-6 section-white relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-navx-orange text-sm font-black tracking-[0.3em] uppercase">Built with intention</span>
              <h2 className="text-4xl md:text-7xl font-black text-navx-navy leading-none tracking-tighter">
                A company full of world changers who happen to work in real estate.
              </h2>
              <div className="space-y-6 text-xl text-navx-navy/70 leading-relaxed font-medium">
                <p>NavX Realty was built around a simple but powerful idea:</p>
                <ul className="space-y-2 text-navx-navy">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-navx-orange" />
                    Real estate should move people forward.
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-navx-orange" />
                    Agents should feel supported.
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-navx-orange" />
                    Clients should feel guided.
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-navx-orange" />
                    Teams should feel aligned.
                  </li>
                </ul>
                <p>The NavX mission is to build relationships that move people. That mission shows up in the way the company trains, supports, communicates, and leads.</p>
              </div>
              <GlowButton variant="dark" onClick={() => document.getElementById('capture')?.scrollIntoView({ behavior: 'smooth' })}>
                See If This Feels Like Home
              </GlowButton>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Purpose", body: "Honor God in all we do and help agents discover their purpose.", icon: Heart },
                { title: "Vision", body: "Build a company full of world changers who happen to work in real estate.", icon: Eye },
                { title: "Mission", body: "Build relationships that move people.", icon: Rocket },
                { title: "Values", body: "Serve. Care. Give.", icon: Award }
              ].map((v, i) => (
                <div key={i} className="bg-navx-navy/5 p-8 rounded-[32px] border border-navx-navy/5 space-y-4 hover:bg-white hover:shadow-2xl transition-all">
                  <v.icon className="w-8 h-8 text-navx-orange" />
                  <h4 className="text-xl font-black text-navx-navy uppercase tracking-tight">{v.title}</h4>
                  <p className="text-navx-navy/60 text-sm leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Meet Mark Peebles */}
      <section className="py-32 px-6 bg-navx-navy relative overflow-hidden bg-diagonal-dark">
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-navx-orange/10 blur-[100px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <MediaPlaceholder type="video" label="A Message from Mark" className="rounded-[40px] aspect-[4/5] shadow-2xl border-white/5" />
            </motion.div>
            
            <div className="space-y-8">
              <span className="text-navx-blue text-sm font-black tracking-[0.3em] uppercase">Founder. Educator. Guide.</span>
              <h2 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter">Meet Mark Peebles.</h2>
              <div className="space-y-6 text-lg text-navx-text-muted leading-relaxed">
                <p>Mark Peebles is the Founder and Chief Visionary Officer of NavX Realty. But his role is bigger than leadership on paper.</p>
                <p>Mark is an educator, speaker, podcast host, coach, and real estate business builder who helps agents think clearer about their career, their systems, their relationships, and their future.</p>
                <p>His passion is impact. His language is guidance. His mission is helping people live their best life and achieve meaningful success.</p>
              </div>
              
              <div className="bg-white/5 p-8 rounded-3xl border-l-4 border-navx-orange">
                <p className="text-xl font-medium text-white italic leading-relaxed">
                  "The right leader does not just show you where to go. He helps you understand why the move matters."
                </p>
              </div>

              <div className="pt-6">
                <GlowButton variant="secondary" onClick={() => window.open('https://www.youtube.com/@ThePeeblesGroup', '_blank')}>
                  Watch Mark’s Free Guidance
                </GlowButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. YouTube Section */}
      <section className="py-32 px-6 bg-navx-orange relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-navx-navy text-sm font-black tracking-[0.3em] uppercase">Free guidance from Mark</span>
            <h2 className="text-4xl md:text-6xl font-black text-navx-navy leading-none tracking-tighter">
              Want constant real estate guidance without committing to anything yet?
            </h2>
            <p className="text-xl text-navx-navy/80 font-bold">
              Subscribe to Mark’s YouTube channel and learn from real conversations designed to help you build a sustainable career in real estate.
            </p>
            <div className="space-y-4 text-navx-navy/70 leading-relaxed">
              <p>You do not have to be ready to switch brokerages to start learning from Mark.</p>
              <p>On YouTube, Mark covers business growth, market shifts, AI, private listings, client trust, leadership, and what it takes to stay steady in a changing industry.</p>
              <p className="text-navx-navy font-black text-2xl italic">Watch. Learn. Think. Then decide.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <GlowButton variant="dark" className="border-none" onClick={() => window.open('https://www.youtube.com/@ThePeeblesGroup', '_blank')}>
                <Youtube className="w-5 h-5 mr-2" />
                Subscribe For Free Guidance
              </GlowButton>
              <GlowButton variant="outline" className="border-navx-navy/20 text-navx-navy hover:bg-navx-navy/5" onClick={() => window.open('https://www.youtube.com/@ThePeeblesGroup', '_blank')}>
                Watch Real Life in Real Estate
              </GlowButton>
            </div>
            <p className="text-xs font-bold text-navx-navy/50 tracking-widest uppercase">Free insight first. Better decisions later.</p>
          </div>

          <div className="relative group cursor-pointer" onClick={() => window.open('https://www.youtube.com/@ThePeeblesGroup', '_blank')}>
            <div className="absolute -inset-4 bg-navx-navy/10 blur-2xl rounded-[40px] group-hover:bg-navx-navy/20 transition-all" />
            <div className="relative bg-navx-navy rounded-[40px] p-4 shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-navx-blue/20 to-transparent" />
              <Youtube className="w-24 h-24 text-navx-orange drop-shadow-2xl" />
              <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full backdrop-blur-md border border-white/20" />
                  <div className="space-y-1">
                    <div className="w-32 h-2 bg-white/20 rounded-full" />
                    <div className="w-20 h-2 bg-white/10 rounded-full" />
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-navx-orange rounded-full text-[10px] font-black text-navx-navy uppercase tracking-widest">LIVE NOW</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Meet the Brokerage Team */}
      <section id="team" className="py-32 px-6 section-white relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader 
            dark
            eyebrow="Behind every good brokerage is a real team"
            title="Meet the people helping **agents** move with confidence."
            subtitle="NavX is not just a brand name. It is a leadership and support team built to help agents feel guided, connected, and prepared."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Mark Peebles", "Michael Peebles", "Teresa Hennen", "Arnie Sharp",
              "Julie Domina", "Patty Murphy", "John Hennen", "Lisa Harvey",
              "Kelly Middelthon", "Natalie Correa", "Brittney Lainhart", "Tommy Peebles",
              "Kimie Miller", "Tatianna Chambers"
            ].map((name, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-navx-navy/5 rounded-3xl mb-4 overflow-hidden relative border border-navx-navy/5 group-hover:border-navx-orange/30 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-t from-navx-navy/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center text-navx-navy/10 font-black text-6xl select-none group-hover:text-navx-orange/20 transition-colors">NAVX</div>
                </div>
                <h4 className="text-xl font-black text-navx-navy tracking-tight">{name}</h4>
                <p className="text-sm text-navx-navy/40 font-bold uppercase tracking-widest">Team Member</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center flex flex-col items-center gap-8">
            <p className="text-2xl font-bold text-navx-navy/30 italic">"The right team changes the way growth feels."</p>
            <GlowButton variant="dark" onClick={() => window.open('https://navxcareers.com/about/', '_blank')}>
              See Full Detailed Team Info
            </GlowButton>
          </div>
        </div>
      </section>

      {/* 9. Experience and Legacy */}
      <section className="py-32 px-6 bg-navx-navy relative overflow-hidden bg-diagonal-dark">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navx-blue/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-none">Experience should feel steady.</h2>
          <div className="space-y-6 text-xl text-navx-text-muted leading-relaxed">
            <p>Real estate is not easy work. Markets shift. Clients need answers. Deals get complicated. Agents carry pressure most people never see.</p>
            <p className="text-white font-bold">That is why experience matters.</p>
            <p>NavX is built around leaders who understand both sides of the business — the client experience and the agent experience.</p>
            <p>The company has roots in real production, real service, and real relationships. That matters because agents do not just need a brokerage that looks good from the outside.</p>
            <p className="text-navx-blue text-2xl font-black mt-10">They need one that knows what the work actually feels like.</p>
          </div>
          
          <div className="mt-16 bg-white/5 p-12 rounded-[40px] border border-white/10">
            <p className="text-3xl font-medium text-white italic leading-snug">
              "The best support is built by people who understand the pressure."
            </p>
          </div>
          
          <div className="mt-16">
            <GlowButton variant="primary" emphasized onClick={() => document.getElementById('capture')?.scrollIntoView({ behavior: 'smooth' })}>
              Start a Private Conversation
            </GlowButton>
          </div>
        </div>
      </section>

      {/* 10. Client and Agent Trust */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader 
            dark
            eyebrow="What people remember"
            title="What people remember is how they were **guided**."
            subtitle="A strong transaction is not only measured by the closing. It is measured by how people felt through the process."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { theme: "Knowledgeable. Trustworthy. Steady.", sub: "Clients describe the experience as guided, informed, and dependable.", author: "Client Feedback" },
              { theme: "Above and beyond.", sub: "People remember when someone makes the process smoother than expected.", author: "Client Feedback" },
              { theme: "Clarity through complexity.", sub: "Good guidance helps clients make decisions with confidence.", author: "Client Feedback" },
              { theme: "A relationship beyond the transaction.", sub: "The best real estate professionals become the people clients call again.", author: "Client Feedback" },
            ].map((t, i) => (
              <div key={i} className="bg-navx-navy/5 p-8 rounded-[40px] border border-navx-navy/5 h-full flex flex-col justify-between hover:bg-white hover:shadow-2xl transition-all">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-navx-orange text-navx-orange" />)}
                  </div>
                  <h4 className="text-2xl font-black text-navx-navy mb-4 leading-tight">"{t.theme}"</h4>
                  <p className="text-navx-navy/60 text-sm leading-relaxed">{t.sub}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-navx-navy/10 flex items-center gap-3">
                  <div className="w-10 h-10 bg-navx-navy/10 rounded-full" />
                  <span className="text-xs font-bold text-navx-navy/40 uppercase tracking-widest">{t.author}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-sm text-navx-navy/40 font-bold uppercase tracking-[0.2em]">Based on consistent 5.0 Star Zillow ratings</p>
          </div>
        </div>
      </section>

      {/* 11. What Agents Should Feel */}
      <section className="py-32 px-6 bg-navx-navy relative overflow-hidden bg-topography">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader 
            eyebrow="The Standard"
            title="What should a **brokerage** feel like?"
            subtitle="Not louder. Not flashier. Better."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Clear", body: "You understand the model, the support, and the next step.", icon: Target },
              { title: "Supported", body: "You are not left to figure out growth, compliance, training, or transition alone.", icon: LifeBuoy },
              { title: "Respected", body: "Your goals, production, pace, and future are treated seriously.", icon: ShieldCheck },
              { title: "Equipped", body: "You have access to tools, people, and guidance that help you move.", icon: Zap },
              { title: "Connected", body: "You are part of a culture built on relationships, not isolation.", icon: Users },
              { title: "Purposeful", body: "The work is about more than transactions. It is about people moving forward.", icon: Heart },
            ].map((f, i) => (
              <div key={i} className="glass-card p-10 border-white/5 hover:border-navx-blue/30 transition-all flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-navx-blue">
                  <f.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{f.title}</h4>
                <p className="text-navx-text-muted text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <GlowButton variant="secondary" onClick={() => document.getElementById('capture')?.scrollIntoView({ behavior: 'smooth' })}>
              See If NavX Fits Me
            </GlowButton>
          </div>
        </div>
      </section>

      {/* 12. Why Agents Pay Attention */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader 
            dark
            title="Why **serious agents** pay attention to NavX."
          />

          <div className="grid lg:grid-cols-2 gap-x-20 gap-y-12">
            {[
              { title: "The model is clear.", body: "Agents should know what they are paying and why." },
              { title: "The leadership is visible.", body: "You can learn from the people behind the company before you ever talk to them." },
              { title: "The team is real.", body: "Support has names, roles, and responsibilities." },
              { title: "The proof is public.", body: "Volume, transactions, reviews, sales history, and experience are visible." },
              { title: "The culture has language.", body: "Serve. Care. Give. Build relationships that move people." },
              { title: "The next step is private.", body: "You can explore without pressure or public commitment." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-navx-orange rounded-full flex items-center justify-center font-black text-white text-xl">
                  {i + 1}
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-black text-navx-navy tracking-tight">{item.title}</h4>
                  <p className="text-lg text-navx-navy/60 leading-relaxed font-medium">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 text-center border-t border-navx-navy/5 pt-20">
            <p className="text-3xl md:text-5xl font-black text-navx-navy tracking-tighter italic">
              "Trust does not come from one claim. It compounds through proof."
            </p>
          </div>
        </div>
      </section>

      {/* 13. Lead Capture */}
      <section id="capture" className="py-40 px-6 bg-navx-navy relative overflow-hidden bg-topography">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-navx-orange/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">Curious is enough to start.</h2>
            <p className="text-xl md:text-2xl text-navx-text-muted">You do not have to be ready to switch. You just need a private place to ask better questions.</p>
          </div>

          <div className="glass-card p-8 md:p-16 border-white/10 shadow-2xl relative">
            {!formSubmitted ? (
              <form 
                className="grid md:grid-cols-2 gap-8"
                onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-navx-text-muted uppercase tracking-[0.2em]">First Name</label>
                    <input required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-navx-orange focus:outline-none text-white font-medium" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-navx-text-muted uppercase tracking-[0.2em]">Email Address</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-navx-orange focus:outline-none text-white font-medium" placeholder="jane@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-navx-text-muted uppercase tracking-[0.2em]">Current Brokerage</label>
                    <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-navx-orange focus:outline-none text-white font-medium" placeholder="Current Real Estate Group" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-navx-text-muted uppercase tracking-[0.2em]">Role</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-navx-orange focus:outline-none text-navx-text-muted font-medium appearance-none">
                      <option className="bg-navx-navy">Are you an individual or team leader?</option>
                      <option className="bg-navx-navy">Individual Agent</option>
                      <option className="bg-navx-navy">Team Leader</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-navx-text-muted uppercase tracking-[0.2em]">Last Name</label>
                    <input required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-navx-orange focus:outline-none text-white font-medium" placeholder="Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-navx-text-muted uppercase tracking-[0.2em]">Phone Number</label>
                    <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-navx-orange focus:outline-none text-white font-medium" placeholder="(555) 000-0000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-navx-text-muted uppercase tracking-[0.2em]">Are you licensed?</label>
                    <div className="flex gap-4">
                      {["Yes", "No"].map(opt => (
                        <label key={opt} className="flex-1 cursor-pointer">
                          <input type="radio" name="licensed" value={opt} className="peer sr-only" />
                          <div className="py-4 text-center border border-white/10 rounded-2xl peer-checked:bg-navx-blue peer-checked:text-navx-navy peer-checked:border-navx-blue hover:bg-white/5 transition-all text-navx-text-muted font-bold uppercase text-xs tracking-widest">{opt}</div>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-navx-text-muted uppercase tracking-[0.2em]">What are you curious about?</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-navx-orange focus:outline-none text-navx-text-muted font-medium appearance-none">
                      <option className="bg-navx-navy">The NavX model</option>
                      <option className="bg-navx-navy">The team and support</option>
                      <option className="bg-navx-navy">Training and coaching</option>
                      <option className="bg-navx-navy">Mark’s YouTube / podcast content</option>
                      <option className="bg-navx-navy">Switching brokerages</option>
                      <option className="bg-navx-navy">Team opportunities</option>
                      <option className="bg-navx-navy">Not sure yet</option>
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
                    Request a Private Conversation
                  </motion.button>
                  <motion.button 
                    type="button"
                    onClick={() => window.open('https://www.youtube.com/@ThePeeblesGroup', '_blank')}
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 bg-white/5 border border-white/10 text-white py-6 rounded-3xl font-black text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                  >
                    <Youtube className="w-6 h-6 text-navx-orange" />
                    YouTube Channel
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
                  <h3 className="text-4xl font-black text-white mb-4">Thanks — your request is in.</h3>
                  <p className="text-xl text-navx-text-muted max-w-lg mx-auto leading-relaxed">
                    A NavX team member can help you explore whether the fit feels right. We'll be in touch soon.
                  </p>
                </div>
                <GlowButton variant="outline" onClick={() => setFormSubmitted(false)}>
                  Send Another Inquiry
                </GlowButton>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 14. Final CTA */}
      <section className="py-40 px-6 bg-white relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-navx-blue/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-black text-navx-navy mb-8 tracking-tighter leading-[0.95]">
            You do not have to make a move today.
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold text-navx-navy/40 mb-12 italic leading-relaxed">
            You just have to know who is worth learning from.
          </h3>
          <p className="text-xl text-navx-navy/70 max-w-2xl mx-auto mb-16 font-medium">
            Start with the proof. Meet the people. Watch the guidance. Then decide what your next right step looks like.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <GlowButton variant="dark" emphasized onClick={() => document.getElementById('capture')?.scrollIntoView({ behavior: 'smooth' })}>
              See If NavX Fits Me
            </GlowButton>
            <GlowButton variant="outline" className="border-navx-navy/20 text-navx-navy hover:bg-navx-navy/5" onClick={() => window.open('https://www.youtube.com/@ThePeeblesGroup', '_blank')}>
              Watch Mark’s Free Guidance
            </GlowButton>
          </div>

          <div className="mt-32 grid md:grid-cols-3 gap-12 text-center border-t border-navx-navy/5 pt-20">
            <div>
              <p className="text-3xl font-black text-navx-navy mb-2">Proof</p>
              <p className="text-sm font-bold text-navx-navy/40 uppercase tracking-widest">Builds Trust</p>
            </div>
            <div>
              <p className="text-3xl font-black text-navx-navy mb-2">Guidance</p>
              <p className="text-sm font-bold text-navx-navy/40 uppercase tracking-widest">Builds Confidence</p>
            </div>
            <div>
              <p className="text-3xl font-black text-navx-navy mb-2">Environment</p>
              <p className="text-sm font-bold text-navx-navy/40 uppercase tracking-widest">Builds Momentum</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Additional Icon for the Experience section
const LifeBuoy = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="m4.93 4.93 4.24 4.24" />
    <path d="m14.83 9.17 4.24-4.24" />
    <path d="m14.83 14.83 4.24 4.24" />
    <path d="m9.17 14.83-4.24 4.24" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);
