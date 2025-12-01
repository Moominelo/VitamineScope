import React from 'react';
import { AppView } from '../types';
import { Citrus, Brain, BarChart3, GraduationCap, Info } from 'lucide-react';

interface LayoutProps {
  currentView: AppView;
  setView: (view: AppView) => void;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ currentView, setView, children }) => {
  const navItems = [
    { id: AppView.HOME, label: 'Accueil', icon: <Citrus className="w-5 h-5" /> },
    { id: AppView.EXPLORE, label: 'Encyclopédie', icon: <Brain className="w-5 h-5" /> },
    { id: AppView.ANALYZER, label: 'Mon Bilan', icon: <BarChart3 className="w-5 h-5" /> },
    { id: AppView.TUTOR, label: 'IA Coach', icon: <GraduationCap className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div 
              className="flex items-center cursor-pointer gap-2" 
              onClick={() => setView(AppView.HOME)}
            >
              <div className="bg-gradient-to-tr from-orange-400 to-yellow-300 p-2 rounded-lg">
                <Citrus className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">Vitamine<span className="text-orange-500">Scope</span></span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setView(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentView === item.id 
                      ? 'text-orange-600 bg-orange-50' 
                      : 'text-slate-600 hover:text-orange-500 hover:bg-slate-50'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Nav Toggle (Simplified) */}
            <div className="md:hidden flex items-center">
               <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded-full">Menu</span>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu (Always visible for demo simplicity on small screens if needed, usually hidden) */}
        <div className="md:hidden border-t border-slate-100 bg-white flex justify-around py-2">
             {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setView(item.id)}
                  className={`flex flex-col items-center p-2 rounded-md ${
                    currentView === item.id ? 'text-orange-600' : 'text-slate-400'
                  }`}
                >
                  {item.icon}
                  <span className="text-[10px] mt-1">{item.label}</span>
                </button>
              ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Disclaimer Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-orange-400">
            <Info className="w-5 h-5" />
            <span className="font-semibold uppercase tracking-wider text-sm">Avertissement Important</span>
          </div>
          <p className="text-sm leading-relaxed max-w-2xl mx-auto">
            VitamineScope est une application exclusivement pédagogique. Les informations, analyses et suggestions fournies sont générées à titre indicatif et éducatif. Elles ne constituent en aucun cas un diagnostic médical, ni ne remplacent l'avis d'un professionnel de santé. Consultez toujours un médecin avant de modifier votre régime alimentaire ou de prendre des compléments.
          </p>
          <p className="text-xs mt-6 text-slate-600">© 2024 VitamineScope. Propulsé par Google Gemini.</p>
        </div>
      </footer>
    </div>
  );
};
