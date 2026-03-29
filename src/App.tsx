import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  Car, 
  Rocket, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  ArrowUpRight, 
  RefreshCcw,
  User,
  LayoutDashboard,
  History as HistoryIcon,
  Settings as SettingsIcon,
  X,
  PieChart,
  Target,
  AlertCircle,
  Download,
  Mail,
  CreditCard,
  Briefcase,
  Award
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { cn } from './lib/utils';
import { Screen, GameState, ScenarioOption } from './types';
import { SCENARIOS } from './constants';

// --- Components ---

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  key?: React.Key;
}

const GlassCard = ({ children, className }: GlassCardProps) => (
  <div className={cn("glass-card rounded-2xl p-6", className)}>
    {children}
  </div>
);

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  disabled?: boolean;
}

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className,
  disabled
}: ButtonProps) => {
  const variants = {
    primary: "bg-primary text-on-primary hover:bg-primary/90 glow-primary disabled:opacity-50 disabled:cursor-not-allowed",
    secondary: "bg-secondary text-secondary-container hover:bg-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed",
    outline: "border border-outline-variant hover:bg-surface-container-high text-on-surface disabled:opacity-50 disabled:cursor-not-allowed",
    ghost: "hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface disabled:opacity-50 disabled:cursor-not-allowed"
  };

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "px-6 py-3 rounded-xl font-semibold transition-all active:scale-95 flex items-center justify-center gap-2",
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

// --- Screens ---

const LandingPage = ({ onStart }: { onStart: () => void }) => (
  <div className="min-h-screen bg-grid relative overflow-hidden">
    {/* Hero Background Glows */}
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full" />

    <nav className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between relative z-10">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center glow-primary">
          <BarChart3 className="text-on-primary w-6 h-6" />
        </div>
        <span className="text-xl font-bold tracking-tight">Luminous Ledger</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-on-surface-variant font-medium">
        <a href="#features" className="hover:text-primary transition-colors">Features</a>
        <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
      </div>
      <Button variant="outline" onClick={onStart}>Launch App</Button>
    </nav>

    <main className="relative z-10">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/30 text-xs font-medium text-primary mb-6">
              <Zap className="w-3 h-3" />
              <span>v2.4 Simulation Engine Now Live</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              Master Your <span className="text-primary">Financial</span> Destiny.
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
              Experience a hyper-realistic financial life simulator that projects your life choices across 
              dynamic market scenarios. Build wealth, manage risk, and see your future unfold.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={onStart} className="text-lg px-8 py-4">
                Start Simulation <ChevronRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4">
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-32 border-t border-outline-variant/10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Powerful Features</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Everything you need to simulate your financial future with precision.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, title: "Risk Management", desc: "Learn to navigate black swan events and market volatility." },
            { icon: TrendingUp, title: "Wealth Projection", desc: "See the 30-year impact of your daily spending habits." },
            { icon: Target, title: "Goal Tracking", desc: "Set milestones for retirement, home ownership, and more." },
            { icon: BarChart3, title: "Real-time Analytics", desc: "Dynamic charts that update as you make life-altering decisions." },
            { icon: Wallet, title: "Portfolio Diversification", desc: "Balance your assets between savings, investments, and debt." },
            { icon: Rocket, title: "Future Casting", desc: "Proprietary algorithms that project your net worth decades ahead." }
          ].map((feature, i) => (
            <GlassCard key={i} className="group hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{feature.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-32 border-t border-outline-variant/10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">How It Works</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Three simple steps to financial enlightenment.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { step: "01", title: "Initialize Profile", desc: "Set your starting capital and define your financial baseline to begin your journey." },
            { step: "02", title: "Navigate Scenarios", desc: "Make critical decisions as life events, market shifts, and unexpected expenses occur." },
            { step: "03", title: "Analyze Projections", desc: "Review your 30-year outlook, see your net worth growth, and refine your strategy." }
          ].map((item, i) => (
            <div key={i} className="relative group">
              <div className="text-8xl font-black text-primary/5 absolute -top-10 -left-4 select-none group-hover:text-primary/10 transition-colors">{item.step}</div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">{item.title}</h3>
              <p className="text-on-surface-variant leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>

    <footer className="max-w-7xl mx-auto px-6 py-20 border-t border-outline-variant/10 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center glow-primary">
              <BarChart3 className="text-on-primary w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">Luminous Ledger</span>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            The world's most advanced financial life simulator. Project your future, master your wealth.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Product</h4>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Simulation Engine</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Market Data</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Resources</h4>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Financial Literacy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">API Access</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-outline-variant/5 text-xs text-on-surface-variant">
        <p>© 2026 Luminous Ledger. All rights reserved.</p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  </div>
);

const StartSimulation = ({ onStart }: { onStart: (name: string, email: string, capital: number) => void }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [capital, setCapital] = useState(5000);

  return (
    <div className="min-h-screen flex items-center justify-center bg-grid p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full"
      >
        <GlassCard className="p-8">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <User className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Initialize Profile</h2>
            <p className="text-on-surface-variant">Set your starting parameters for the simulation.</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-2">Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-2">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-2">Starting Capital ($)</label>
              <input 
                type="number" 
                value={capital}
                onChange={(e) => setCapital(Number(e.target.value))}
                className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              />
              <p className="text-[10px] text-on-surface-variant mt-2 italic">Recommended: $5,000 for standard difficulty.</p>
            </div>

            <Button 
              className="w-full py-4 text-lg mt-4" 
              onClick={() => onStart(name || 'Player One', email || 'player@example.com', capital)}
              disabled={!name || !email}
            >
              Begin Journey
            </Button>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

const Sidebar = ({ state, currentScreen, onNavigate }: { state: GameState; currentScreen: Screen; onNavigate: (screen: Screen) => void }) => (
  <aside className="w-20 md:w-64 border-r border-outline-variant/20 flex flex-col p-4 gap-4">
    <div className="flex items-center gap-3 px-2 mb-8 cursor-pointer" onClick={() => onNavigate('landing')}>
      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
        <BarChart3 className="text-on-primary w-6 h-6" />
      </div>
      <span className="font-bold hidden md:block">Luminous</span>
    </div>
    
    <nav className="flex-1 space-y-2">
      {[
        { icon: LayoutDashboard, label: "Dashboard", id: 'dashboard' as Screen },
        { icon: HistoryIcon, label: "History", id: 'history' as Screen },
        { icon: PieChart, label: "Portfolio", id: 'portfolio' as Screen },
        { icon: SettingsIcon, label: "Settings", id: 'settings' as Screen }
      ].map((item, i) => (
        <button 
          key={i} 
          onClick={() => onNavigate(item.id)}
          className={cn(
            "w-full flex items-center gap-3 p-3 rounded-xl transition-colors",
            currentScreen === item.id ? "bg-primary/10 text-primary" : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
          )}
        >
          <item.icon className="w-5 h-5" />
          <span className="font-medium hidden md:block">{item.label}</span>
        </button>
      ))}
    </nav>

    <div className="mt-auto p-2">
      <div className="flex items-center gap-3 p-2 rounded-xl bg-surface-container-high cursor-pointer hover:bg-surface-container-highest transition-colors" onClick={() => onNavigate('settings')}>
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-container font-bold text-xs">
          {state.playerName[0] || 'P'}
        </div>
        <div className="hidden md:block overflow-hidden">
          <p className="text-xs font-bold truncate">{state.playerName}</p>
          <p className="text-[10px] text-on-surface-variant">Level 1 Analyst</p>
        </div>
      </div>
    </div>
  </aside>
);

const Dashboard = ({ state, onNavigate, onNextScenario }: { state: GameState; onNavigate: (screen: Screen) => void; onNextScenario: () => void }) => {
  const currentScenario = SCENARIOS[state.currentScenarioIndex];

  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar state={state} currentScreen="dashboard" onNavigate={onNavigate} />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 md:p-10">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold mb-1">Simulation Dashboard</h1>
            <p className="text-on-surface-variant">Real-time projection of your financial choices.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center gap-2 text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Live Market Data
            </div>
            <Button variant="outline" className="px-4 py-2 text-sm" onClick={() => window.location.reload()}>
              <RefreshCcw className="w-4 h-4" /> Reset
            </Button>
          </div>
        </header>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: "Total Savings", value: state.savings, icon: Wallet, color: "text-primary" },
            { label: "Investments", value: state.investments, icon: TrendingUp, color: "text-secondary" },
            { label: "Total Debt", value: state.debt, icon: AlertCircle, color: "text-tertiary" },
            { label: "Credit Score", value: state.score, icon: ShieldCheck, color: "text-on-surface", noPrefix: true }
          ].map((metric, i) => (
            <GlassCard key={i} className="flex flex-col justify-between min-h-[140px]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-on-surface-variant">{metric.label}</span>
                <metric.icon className={cn("w-5 h-5", metric.color)} />
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {metric.noPrefix ? '' : '$'}{metric.value.toLocaleString()}
                </div>
                <div className="flex items-center gap-1 text-[10px] mt-1">
                  <ArrowUpRight className="w-3 h-3 text-primary" />
                  <span className="text-primary font-medium">+2.4%</span>
                  <span className="text-on-surface-variant">vs last month</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Scenario Card */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" /> Active Scenario
            </h2>
            <GlassCard className="bg-primary/5 border-primary/20 p-8 h-full flex flex-col">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                {currentScenario.icon === 'Wallet' && <Wallet className="w-8 h-8" />}
                {currentScenario.icon === 'TrendingDown' && <TrendingDown className="w-8 h-8" />}
                {currentScenario.icon === 'Car' && <Car className="w-8 h-8" />}
                {currentScenario.icon === 'Rocket' && <Rocket className="w-8 h-8" />}
                {currentScenario.icon === 'ShieldCheck' && <ShieldCheck className="w-8 h-8" />}
                {currentScenario.icon === 'BarChart3' && <BarChart3 className="w-8 h-8" />}
                {currentScenario.icon === 'AlertCircle' && <AlertCircle className="w-8 h-8" />}
                {currentScenario.icon === 'Target' && <Target className="w-8 h-8" />}
                {currentScenario.icon === 'Zap' && <Zap className="w-8 h-8" />}
                {currentScenario.icon === 'TrendingUp' && <TrendingUp className="w-8 h-8" />}
                {currentScenario.icon === 'PieChart' && <PieChart className="w-8 h-8" />}
              </div>
              <h3 className="text-2xl font-bold mb-4">{currentScenario.title}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8 flex-1">
                {currentScenario.description}
              </p>
              <Button onClick={onNextScenario} className="w-full py-4">
                Analyze Options <ChevronRight className="w-5 h-5" />
              </Button>
            </GlassCard>
          </div>

          {/* Chart */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-secondary" /> Historical Performance
            </h2>
            <GlassCard className="h-[400px] p-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={state.history}>
                  <defs>
                    <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00e475" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00e475" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorInvestments" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#b0c6ff" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#b0c6ff" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#45474b" vertical={false} />
                  <XAxis dataKey="name" hide />
                  <YAxis stroke="#8f9095" fontSize={12} tickFormatter={(v) => `$${v/1000}k`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e2024', border: '1px solid #45474b', borderRadius: '12px' }}
                    itemStyle={{ fontSize: '12px' }}
                  />
                  <Area type="monotone" dataKey="savings" stroke="#00e475" fillOpacity={1} fill="url(#colorSavings)" />
                  <Area type="monotone" dataKey="investments" stroke="#b0c6ff" fillOpacity={1} fill="url(#colorInvestments)" />
                </AreaChart>
              </ResponsiveContainer>
            </GlassCard>
          </div>
        </div>
      </main>
    </div>
  );
};

const HistoryView = ({ state, onNavigate }: { state: GameState; onNavigate: (screen: Screen) => void }) => (
  <div className="min-h-screen flex bg-background">
    <Sidebar state={state} currentScreen="history" onNavigate={onNavigate} />
    <main className="flex-1 overflow-y-auto p-6 md:p-10">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-1">Decision History</h1>
        <p className="text-on-surface-variant">Review your past choices and their financial impact.</p>
      </header>

      <div className="space-y-4">
        {state.history.slice(1).map((entry, i) => (
          <GlassCard key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-surface-container-highest rounded-xl flex items-center justify-center text-primary">
                <HistoryIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold">{entry.scenarioTitle}</h4>
                <p className="text-sm text-on-surface-variant">Choice: <span className="text-primary">{entry.choiceLabel}</span></p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-right">
                <p className="text-[10px] text-on-surface-variant uppercase font-bold">Net Worth</p>
                <p className="font-bold text-primary">${(entry.savings + entry.investments - entry.debt).toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-on-surface-variant uppercase font-bold">Credit Score</p>
                <p className="font-bold">{entry.score}</p>
              </div>
            </div>
          </GlassCard>
        ))}
        {state.history.length <= 1 && (
          <div className="text-center py-20">
            <HistoryIcon className="w-12 h-12 text-on-surface-variant mx-auto mb-4 opacity-20" />
            <p className="text-on-surface-variant">No history available yet. Start making decisions!</p>
          </div>
        )}
      </div>
    </main>
  </div>
);

const PortfolioView = ({ state, onNavigate }: { state: GameState; onNavigate: (screen: Screen) => void }) => {
  const portfolioRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (!portfolioRef.current) return;
    
    const canvas = await html2canvas(portfolioRef.current, {
      backgroundColor: '#0a0a0a',
      scale: 2
    });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Luminous_Ledger_Portfolio_${state.playerName}.pdf`);
  };

  const netWorth = state.savings + state.investments - state.debt;

  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar state={state} currentScreen="portfolio" onNavigate={onNavigate} />
      <main className="flex-1 overflow-y-auto p-6 md:p-10">
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold mb-1">Financial Portfolio</h1>
            <p className="text-on-surface-variant">A comprehensive summary of your financial status.</p>
          </div>
          <Button onClick={downloadPDF} variant="primary" className="gap-2">
            <Download className="w-4 h-4" /> Download PDF
          </Button>
        </header>

        <div ref={portfolioRef} className="space-y-8 p-4 bg-background rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard className="bg-primary/5 border-primary/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{state.playerName}</h2>
                  <p className="text-on-surface-variant">{state.email}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                  <span className="text-on-surface-variant">Current Status</span>
                  <span className="font-bold text-primary">Level 1 Analyst</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                  <span className="text-on-surface-variant">Member Since</span>
                  <span className="font-bold">March 2026</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-secondary" /> Financial Summary
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Net Worth</span>
                  <span className="text-2xl font-bold text-primary">${netWorth.toLocaleString()}</span>
                </div>
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '75%' }} />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <p className="text-[10px] text-on-surface-variant uppercase mb-1">Savings</p>
                    <p className="font-bold">${state.savings.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-on-surface-variant uppercase mb-1">Investments</p>
                    <p className="font-bold">${state.investments.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-on-surface-variant uppercase mb-1">Debt</p>
                    <p className="font-bold text-tertiary">${state.debt.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          <GlassCard>
            <h3 className="text-xl font-bold mb-6">Asset Allocation</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={state.history}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#45474b" vertical={false} />
                  <XAxis dataKey="name" hide />
                  <YAxis stroke="#8f9095" fontSize={12} tickFormatter={(v) => `$${v/1000}k`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e2024', border: '1px solid #45474b', borderRadius: '12px' }}
                  />
                  <Area type="monotone" dataKey="savings" stackId="1" stroke="#00e475" fill="#00e475" fillOpacity={0.4} />
                  <Area type="monotone" dataKey="investments" stackId="1" stroke="#b0c6ff" fill="#b0c6ff" fillOpacity={0.4} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </div>
      </main>
    </div>
  );
};

const SettingsView = ({ state, onNavigate }: { state: GameState; onNavigate: (screen: Screen) => void }) => (
  <div className="min-h-screen flex bg-background">
    <Sidebar state={state} currentScreen="settings" onNavigate={onNavigate} />
    <main className="flex-1 overflow-y-auto p-6 md:p-10">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-1">Profile Settings</h1>
        <p className="text-on-surface-variant">Manage your account and simulation preferences.</p>
      </header>

      <div className="max-w-2xl space-y-8">
        <GlassCard>
          <h3 className="text-xl font-bold mb-6">Personal Information</h3>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">Full Name</label>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-highest border border-outline-variant/30">
                  <User className="w-4 h-4 text-primary" />
                  <span className="font-medium">{state.playerName}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">Email Address</label>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-highest border border-outline-variant/30">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="font-medium">{state.email}</span>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="text-xl font-bold mb-6">Simulation Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-bold">Real-time Projections</p>
                  <p className="text-xs text-on-surface-variant">Update charts instantly on decision.</p>
                </div>
              </div>
              <div className="w-12 h-6 bg-primary rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-on-primary rounded-full" />
              </div>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-secondary" />
                <div>
                  <p className="font-bold">Risk Alerts</p>
                  <p className="text-xs text-on-surface-variant">Notify when debt-to-income exceeds 30%.</p>
                </div>
              </div>
              <div className="w-12 h-6 bg-primary rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-on-primary rounded-full" />
              </div>
            </div>
          </div>
        </GlassCard>

        <Button variant="outline" className="w-full text-tertiary border-tertiary/30 hover:bg-tertiary/10" onClick={() => window.location.reload()}>
          Reset All Simulation Data
        </Button>
      </div>
    </main>
  </div>
);

const ScenarioView = ({ scenario, onChoice }: { scenario: any; onChoice: (option: ScenarioOption) => void }) => (
  <div className="min-h-screen bg-grid p-6 flex items-center justify-center">
    <div className="max-w-4xl w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="h-2 flex-1 bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-primary w-3/4" />
          </div>
          <span className="text-sm font-bold text-primary">Decision Required</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="w-20 h-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center">
              {scenario.icon === 'Wallet' && <Wallet className="w-10 h-10" />}
              {scenario.icon === 'TrendingDown' && <TrendingDown className="w-10 h-10" />}
              {scenario.icon === 'Car' && <Car className="w-10 h-10" />}
              {scenario.icon === 'Rocket' && <Rocket className="w-10 h-10" />}
            </div>
            <h1 className="text-4xl font-bold leading-tight">{scenario.title}</h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              {scenario.description}
            </p>
            <div className="p-4 rounded-2xl bg-surface-container-high border border-outline-variant/30 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-secondary shrink-0 mt-1" />
              <p className="text-sm text-on-surface-variant">
                Expert Tip: Maintaining a liquid emergency fund is critical for long-term stability.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {scenario.options.map((option: ScenarioOption, i: number) => (
              <button 
                key={i}
                onClick={() => onChoice(option)}
                className={cn(
                  "w-full text-left p-6 rounded-2xl border transition-all group relative overflow-hidden",
                  option.recommended 
                    ? "bg-primary/5 border-primary/30 hover:border-primary" 
                    : "bg-surface-container border-outline-variant/30 hover:border-outline"
                )}
              >
                {option.recommended && (
                  <div className="absolute top-0 right-0 bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-bl-xl">
                    RECOMMENDED
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{option.label}</h3>
                <p className="text-on-surface-variant text-sm mb-4">{option.description}</p>
                <div className="flex items-center gap-4">
                  {option.impact.savings && (
                    <div className={cn("text-xs font-bold", option.impact.savings > 0 ? "text-primary" : "text-tertiary")}>
                      {option.impact.savings > 0 ? '+' : ''}${Math.abs(option.impact.savings)} Savings
                    </div>
                  )}
                  {option.impact.debt && (
                    <div className={cn("text-xs font-bold", option.impact.debt < 0 ? "text-primary" : "text-tertiary")}>
                      {option.impact.debt > 0 ? '+' : ''}${Math.abs(option.impact.debt)} Debt
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const AnalyticsView = ({ state, onRestart }: { state: GameState; onRestart: () => void }) => {
  const netWorth = state.savings + state.investments - state.debt;
  
  // Calculate Title
  const getTitle = () => {
    const counts = state.behaviorCounts;
    const max = Math.max(counts.saver, counts['risk-taker'], counts.investor, counts.spender);
    if (max === 0) return "The Beginner";
    if (counts.investor === max) return "The Investor";
    if (counts.saver === max) return "The Saver";
    if (counts['risk-taker'] === max) return "The Risk Taker";
    return "The Spender";
  };

  const title = getTitle();
  
  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">Simulation Complete</h1>
            <p className="text-on-surface-variant">Here is your 30-year financial projection based on your choices.</p>
          </div>
          <div className="flex gap-4">
            <Button onClick={onRestart} variant="secondary">
              <RefreshCcw className="w-4 h-4" /> Run New Simulation
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <GlassCard className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Net Worth Growth Journey</h3>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-primary rounded-full" /> Savings</div>
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-secondary rounded-full" /> Investments</div>
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-tertiary rounded-full" /> Debt</div>
              </div>
            </div>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={state.history}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#45474b" vertical={false} />
                  <XAxis dataKey="name" hide />
                  <YAxis stroke="#8f9095" fontSize={12} tickFormatter={(v) => `$${v/1000}k`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e2024', border: '1px solid #45474b', borderRadius: '12px' }}
                  />
                  <Area type="monotone" dataKey="savings" stackId="1" stroke="#00e475" fill="#00e475" fillOpacity={0.4} />
                  <Area type="monotone" dataKey="investments" stackId="1" stroke="#b0c6ff" fill="#b0c6ff" fillOpacity={0.4} />
                  <Area type="monotone" dataKey="debt" stackId="2" stroke="#ff4d4d" fill="#ff4d4d" fillOpacity={0.4} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          <div className="space-y-6">
            <GlassCard className="bg-primary/10 border-primary/20 text-center py-10">
              <p className="text-sm text-on-surface-variant mb-2 uppercase tracking-widest font-bold">Your Financial Title</p>
              <h2 className="text-4xl font-black text-primary mb-4">{title}</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
              <p className="text-xs text-on-surface-variant px-4">
                Based on your decisions across 15 scenarios, you've demonstrated a clear pattern of <span className="text-primary font-bold">{title.split(' ').pop()}</span> behavior.
              </p>
            </GlassCard>

            <GlassCard className="bg-surface-container-highest">
              <p className="text-sm text-on-surface-variant mb-1">Final Net Worth</p>
              <h4 className="text-4xl font-bold text-primary">${netWorth.toLocaleString()}</h4>
              <div className="flex items-center gap-2 mt-4 text-xs font-medium">
                <div className="px-2 py-1 rounded bg-primary/20 text-primary">TOP 5%</div>
                <span className="text-on-surface-variant">of simulated outcomes</span>
              </div>
            </GlassCard>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Financial IQ", value: "142", sub: "Superior Decision Making", icon: Zap },
            { label: "Risk Tolerance", value: "Moderate", sub: "Balanced Portfolio", icon: ShieldCheck },
            { label: "Retirement Age", value: "52", sub: "Early Exit Strategy", icon: Rocket },
            { label: "Credit Score", value: state.score.toString(), sub: "Excellent Standing", icon: CreditCard }
          ].map((stat, i) => (
            <GlassCard key={i} className="text-center">
              <stat.icon className="w-6 h-6 mx-auto mb-4 text-primary opacity-50" />
              <p className="text-sm text-on-surface-variant mb-2">{stat.label}</p>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-[10px] text-primary font-bold uppercase tracking-wider">{stat.sub}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard>
            <h4 className="font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" /> Investment Breakdown
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant">Liquid Savings</span>
                <span className="font-bold">${state.savings.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant">Market Investments</span>
                <span className="font-bold">${state.investments.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
                <span className="font-bold">Total Assets</span>
                <span className="font-bold text-primary">${(state.savings + state.investments).toLocaleString()}</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <h4 className="font-bold mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-tertiary" /> Liabilities & Debt
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant">Outstanding Loans</span>
                <span className="font-bold">${state.debt.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant">Credit Utilization</span>
                <span className="font-bold">12%</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
                <span className="font-bold">Total Debt</span>
                <span className="font-bold text-tertiary">${state.debt.toLocaleString()}</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [screen, setScreen] = useState<Screen>('landing');
  const [gameState, setGameState] = useState<GameState>({
    playerName: '',
    email: '',
    savings: 0,
    debt: 0,
    investments: 0,
    score: 750,
    currentScenarioIndex: 0,
    history: [],
    behaviorCounts: {
      saver: 0,
      'risk-taker': 0,
      investor: 0,
      spender: 0
    }
  });

  const startSimulation = (name: string, email: string, capital: number) => {
    setGameState({
      ...gameState,
      playerName: name,
      email: email,
      savings: capital,
      history: [{ 
        name: 'Start', 
        savings: capital, 
        investments: 0, 
        debt: 0, 
        score: 750,
        scenarioTitle: 'Initialization',
        choiceLabel: 'Initial Capital'
      }]
    });
    setScreen('dashboard');
  };

  const handleChoice = (option: ScenarioOption) => {
    const newSavings = gameState.savings + (option.impact.savings || 0);
    const newInvestments = gameState.investments + (option.impact.investments || 0);
    const newDebt = gameState.debt + (option.impact.debt || 0);
    const newScore = Math.min(850, Math.max(300, gameState.score + (option.impact.score || 0)));

    const nextIndex = gameState.currentScenarioIndex + 1;
    const currentScenario = SCENARIOS[gameState.currentScenarioIndex];
    
    const newBehaviorCounts = {
      ...gameState.behaviorCounts,
      [option.behavior]: gameState.behaviorCounts[option.behavior] + 1
    };

    const newState = {
      ...gameState,
      savings: newSavings,
      investments: newInvestments,
      debt: newDebt,
      score: newScore,
      currentScenarioIndex: nextIndex,
      behaviorCounts: newBehaviorCounts,
      history: [...gameState.history, { 
        name: `Step ${nextIndex}`, 
        savings: newSavings, 
        investments: newInvestments, 
        debt: newDebt,
        score: newScore,
        scenarioTitle: currentScenario.title,
        choiceLabel: option.label
      }]
    };

    setGameState(newState);

    if (nextIndex >= SCENARIOS.length) {
      setScreen('analytics');
    } else {
      setScreen('dashboard');
    }
  };

  return (
    <div className="font-sans text-on-surface bg-background min-h-screen">
      <AnimatePresence mode="wait">
        {screen === 'landing' && (
          <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <LandingPage onStart={() => setScreen('start')} />
          </motion.div>
        )}
        {screen === 'start' && (
          <motion.div key="start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <StartSimulation onStart={startSimulation} />
          </motion.div>
        )}
        {screen === 'dashboard' && (
          <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Dashboard state={gameState} onNavigate={setScreen} onNextScenario={() => setScreen('scenario')} />
          </motion.div>
        )}
        {screen === 'scenario' && (
          <motion.div key="scenario" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ScenarioView 
              scenario={SCENARIOS[gameState.currentScenarioIndex]} 
              onChoice={handleChoice} 
            />
          </motion.div>
        )}
        {screen === 'analytics' && (
          <motion.div key="analytics" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AnalyticsView state={gameState} onRestart={() => setScreen('landing')} />
          </motion.div>
        )}
        {screen === 'history' && (
          <motion.div key="history" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <HistoryView state={gameState} onNavigate={setScreen} />
          </motion.div>
        )}
        {screen === 'portfolio' && (
          <motion.div key="portfolio" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <PortfolioView state={gameState} onNavigate={setScreen} />
          </motion.div>
        )}
        {screen === 'settings' && (
          <motion.div key="settings" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SettingsView state={gameState} onNavigate={setScreen} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
