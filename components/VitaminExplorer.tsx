import React, { useState } from 'react';
import { VITAMINS_DATA } from '../constants';
import { Vitamin } from '../types';
import { Search, Droplets, Sun, Activity, AlertTriangle, ArrowRight } from 'lucide-react';

interface ExplorerProps {
  onSelectVitamin: (v: Vitamin) => void;
}

export const VitaminExplorer: React.FC<ExplorerProps> = ({ onSelectVitamin }) => {
  const [filter, setFilter] = useState<'All' | 'Hydrosoluble' | 'Liposoluble'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVitamins = VITAMINS_DATA.filter(v => {
    const matchesCategory = filter === 'All' || v.category === filter;
    const matchesSearch = v.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          v.chemicalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          v.functions.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Encyclopédie des Vitamines</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Explorez notre base de données complète pour comprendre le rôle crucial de chaque micronutriment dans votre machine biologique.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <div className="flex gap-2">
          {['All', 'Hydrosoluble', 'Liposoluble'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                ? 'bg-slate-900 text-white shadow-lg' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat === 'All' ? 'Toutes' : cat}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Rechercher (ex: Énergie, Vision)..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-all text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVitamins.map((vitamin) => (
          <div 
            key={vitamin.id}
            onClick={() => onSelectVitamin(vitamin)}
            className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full"
          >
            <div className="h-2 w-full" style={{ backgroundColor: vitamin.color }}></div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{vitamin.name}</h3>
                  <p className="text-xs font-mono text-slate-500 mt-1">{vitamin.chemicalName}</p>
                </div>
                <div className={`p-2 rounded-lg bg-slate-50`}>
                    {vitamin.category === 'Liposoluble' ? <Sun className="w-5 h-5 text-amber-500" /> : <Droplets className="w-5 h-5 text-blue-500" />}
                </div>
              </div>

              <p className="text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                {vitamin.description}
              </p>

              <div className="mt-auto space-y-3">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 p-2 rounded-md">
                   <Activity className="w-3 h-3" />
                   <span className="truncate">{vitamin.functions[0]}</span>
                </div>
                {vitamin.deficiencySymptoms.length > 0 && (
                  <div className="flex items-center gap-2 text-xs font-medium text-red-500 bg-red-50 p-2 rounded-md">
                    <AlertTriangle className="w-3 h-3" />
                    <span className="truncate">Manque: {vitamin.deficiencySymptoms[0]}</span>
                  </div>
                )}
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-400">En savoir plus</span>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-orange-500 transform group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
