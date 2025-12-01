import React from 'react';
import { AppView } from '../types';
import { ArrowRight, Activity, Sun, Brain } from 'lucide-react';

export const Home: React.FC<{ setView: (v: AppView) => void }> = ({ setView }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-8 animate-bounce">
            <Sun className="w-4 h-4" />
            <span>Découvrez votre potentiel vital</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
          Comprenez votre <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">chimie intérieure</span>
        </h1>
        
        <p className="mt-4 max-w-2xl text-xl text-slate-500 mb-10">
          Une exploration interactive et pédagogique des vitamines qui alimentent votre corps. Apprenez, analysez et optimisez votre bien-être.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button 
                onClick={() => setView(AppView.EXPLORE)}
                className="px-8 py-4 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl"
            >
                Explorer l'Encyclopédie <ArrowRight className="w-5 h-5" />
            </button>
            <button 
                onClick={() => setView(AppView.ANALYZER)}
                className="px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-bold text-lg hover:bg-slate-50 transition-all shadow-md hover:shadow-lg"
            >
                Faire mon Bilan
            </button>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="bg-white py-24 border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
                { 
                    icon: <Brain className="w-8 h-8 text-indigo-500" />, 
                    title: "Pédagogie IA", 
                    desc: "Notre moteur intelligent explique les concepts complexes simplement." 
                },
                { 
                    icon: <Activity className="w-8 h-8 text-green-500" />, 
                    title: "Analyse Interactive", 
                    desc: "Visualisez comment votre mode de vie impacte vos réserves théoriques." 
                },
                { 
                    icon: <Sun className="w-8 h-8 text-orange-500" />, 
                    title: "Données Fiables", 
                    desc: "Basé sur les standards nutritionnels reconnus (AJR/AJN)." 
                }
            ].map((f, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="p-4 bg-slate-50 rounded-2xl mb-4">{f.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
                    <p className="text-slate-500">{f.desc}</p>
                </div>
            ))}
         </div>
      </div>
    </div>
  );
};
