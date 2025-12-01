import React from 'react';
import { Vitamin } from '../types';
import { ArrowLeft, CheckCircle, XCircle, Zap, Shield, Eye, AlertTriangle } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

interface DetailProps {
  vitamin: Vitamin;
  onBack: () => void;
}

export const VitaminDetail: React.FC<DetailProps> = ({ vitamin, onBack }) => {
  
  // Fake data for the pie chart visualization of sources
  const data = vitamin.sources.map((s, i) => ({
    name: s.food,
    value: s.density === 'High' ? 50 : s.density === 'Medium' ? 30 : 20,
  }));
  const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <button 
        onClick={onBack}
        className="flex items-center text-slate-500 hover:text-orange-600 mb-6 transition-colors font-medium text-sm"
      >
        <ArrowLeft className="w-4 h-4 mr-1" /> Retour à la liste
      </button>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        {/* Header */}
        <div className="relative p-8 text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-90" style={{ backgroundColor: vitamin.color }}></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
             <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{vitamin.name}</h1>
                <p className="text-xl opacity-90 font-light">{vitamin.chemicalName}</p>
                <span className="inline-block mt-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
                  {vitamin.category}
                </span>
             </div>
             <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20 min-w-[150px]">
                <p className="text-xs uppercase tracking-wider opacity-75 mb-1">AJR Adulte (H)</p>
                <p className="text-2xl font-bold">{vitamin.rda.male}</p>
             </div>
          </div>
        </div>

        <div className="p-8">
            <p className="text-lg leading-relaxed text-slate-700 mb-10 p-6 bg-slate-50 rounded-xl border-l-4 border-slate-300 italic">
                "{vitamin.description}"
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Functions */}
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-orange-500" />
                        Rôles Clés
                    </h3>
                    <ul className="space-y-4">
                        {vitamin.functions.map((func, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700 font-medium">{func}</span>
                            </li>
                        ))}
                    </ul>

                    <h3 className="text-xl font-bold text-slate-900 mt-10 mb-6 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-red-500" />
                        Signes de carence
                    </h3>
                    <ul className="space-y-4">
                        {vitamin.deficiencySymptoms.map((sym, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-600">{sym}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sources Chart */}
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Meilleures Sources</h3>
                    <div className="h-64 w-full bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 relative">
                         <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                              >
                                {data.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={vitamin.color} fillOpacity={1 - (index * 0.2)} />
                                ))}
                              </Pie>
                              <Tooltip />
                            </PieChart>
                          </ResponsiveContainer>
                          {/* Centered Label */}
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                             <div className="text-center">
                                <span className="text-xs text-slate-400 block">Top</span>
                                <span className="font-bold text-slate-800">Aliments</span>
                             </div>
                          </div>
                    </div>
                    <div className="mt-6 space-y-3">
                        {vitamin.sources.map((source, idx) => (
                            <div key={idx} className="flex justify-between items-center p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                                <span className="font-medium text-slate-700">{source.food}</span>
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                    source.density === 'High' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                }`}>
                                    {source.density === 'High' ? 'Excellent' : 'Bon'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {vitamin.toxicity && (
                <div className="mt-12 p-4 bg-orange-50 border border-orange-100 rounded-lg flex gap-4 items-start">
                    <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-orange-800 mb-1">Note de sécurité</h4>
                        <p className="text-sm text-orange-700">{vitamin.toxicity}</p>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};