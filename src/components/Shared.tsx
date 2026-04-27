import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Target } from 'lucide-react';

export const HorizontalMarquee = ({ text }: { text: string[] }) => {
  return (
    <div className="bg-navx-orange border-y border-white/20 py-4 overflow-hidden select-none z-10 sticky top-[64px] shadow-[0_4px_20px_rgba(255,138,31,0.3)]">
      <div className="animate-marquee whitespace-nowrap py-1">
        {[...text, ...text].map((item, idx) => (
          <span key={idx} className="inline-flex items-center mx-12 text-white font-black text-[12px] tracking-[0.3em] uppercase drop-shadow-sm">
            {item}
            <span className="ml-24 w-1.5 h-1.5 rounded-full bg-white/50" />
          </span>
        ))}
      </div>
    </div>
  );
};

export const GlowButton = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  emphasized = false
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'dark'; 
  className?: string; 
  onClick?: () => void;
  emphasized?: boolean;
}) => {
  const baseStyles = "relative px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden";
  const variants = {
    primary: "bg-navx-orange text-white hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,138,31,0.3)]",
    secondary: "bg-navx-blue text-navx-navy hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(56,189,248,0.3)]",
    outline: "bg-transparent border border-white/20 text-white hover:border-white/40 hover:bg-white/5",
    dark: "bg-navx-navy text-white hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,27,51,0.2)]"
  };

  return (
    <motion.button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${emphasized ? 'animate-pulse-soft' : ''} ${className}`}
      whileHover={{ y: -2 }}
    >
      {(variant === 'primary' || variant === 'secondary') && (
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute inset-0 blur-xl opacity-20 group-hover:opacity-40 ${variant === 'primary' ? 'bg-white' : 'bg-navx-navy'}`}
        />
      )}
      <span className="relative z-10 whitespace-nowrap">{children}</span>
      <ChevronRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.button>
  );
};

export const SectionHeader = ({ eyebrow, title, subtitle, centered = true, dark = false }: { eyebrow?: string; title: string; subtitle?: string; centered?: boolean; dark?: boolean }) => {
  const formatTitle = (text: string) => {
    return text.split('**').map((part, i) => 
      i % 2 === 1 ? <span key={i} className={dark ? 'text-navx-orange' : 'text-navx-orange drop-shadow-glow'}>{part}</span> : part
    );
  };

  return (
    <div className={`mb-16 ${centered ? 'text-center max-w-4xl mx-auto' : 'text-left max-w-2xl'}`}>
      {eyebrow && <span className={`${dark ? 'text-navx-navy/60' : 'text-navx-blue'} text-sm font-bold tracking-[0.2em] uppercase mb-4 block`}>{eyebrow}</span>}
      <h2 className={`text-4xl md:text-6xl font-black leading-[1.1] mb-6 ${dark ? 'text-navx-navy' : 'text-white'}`}>
        {formatTitle(title)}
      </h2>
      {subtitle && <p className={`${dark ? 'text-navx-navy/70' : 'text-navx-text-muted'} text-xl leading-relaxed`}>{subtitle}</p>}
    </div>
  );
};

export const MediaPlaceholder = ({ type = 'image', className = '', label = '' }: { type?: 'image' | 'video'; className?: string; label?: string }) => (
  <div className={`media-placeholder min-h-[300px] ${className} group cursor-pointer relative overflow-hidden flex items-center justify-center`}>
    <div className="absolute inset-0 bg-gradient-to-t from-navx-navy/80 to-transparent z-10" />
    <motion.div 
      whileHover={{ scale: 1.1 }}
      className="z-20 flex flex-col items-center gap-4 text-white/50 group-hover:text-navx-orange transition-colors"
    >
      {type === 'video' ? (
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:bg-navx-orange group-hover:text-white transition-all">
          <ChevronRight className="w-8 h-8 ml-1" />
        </div>
      ) : (
        <Target className="w-12 h-12 opacity-50" />
      )}
      <span className="text-xs font-bold uppercase tracking-widest">{label || (type === 'video' ? 'Play Video' : 'View Media')}</span>
    </motion.div>
    <div className="absolute inset-0 bg-navx-navy/10 animate-pulse" />
  </div>
);
