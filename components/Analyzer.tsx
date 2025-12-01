import React, { useState, useMemo } from 'react';
import { UserProfile } from '../types';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { VITAMINS_DATA } from '../constants';
import { Info } from 'lucide-react';

export const Analyzer: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    diet: 'omnivore',
    sunExposure: 5,
    energyLevel: 5,
    stressLevel: 5,
    sleepQuality: 5,
    fruitVegIntake: 5,
  });

  const [showResults, setShowResults] = useState(false);

  // Simplified educational logic (NOT medical)
  const results = useMemo(() => {
    return VITAMINS_DATA.map(v => {
      let score = 80; // Base baseline

      // Diet Logic
      if (profile.diet === 'vegan') {
        if (v.id === 'B12') score -= 70;
        if (v.id === 'D' && profile.sunExposure < 4) score -= 30;
        if (v.id === 'A') score -= 20; // Less retinol
      }
      if (profile.diet === 'vegetarian') {
        if (v.id === 'B12') score -= 30;
      }

      // Lifestyle Logic
      if (v.id === 'D') {
        score += (profile.sunExposure - 5) * 8;
      }
      if (v.id === 'C' || v.id === 'E' || v.id === 'A') {
        score += (profile.fruitVegIntake - 5) * 8;
      }
      if (v.id.startsWith('B')) {
        // B vitamins consumed by stress and needed for energy
        score -= (profile.stressLevel - 5) * 3;
        if (profile.energyLevel < 4) score -= 15;
      }

      // Clamp
      return {
        subject: v.id,
        fullMark: 100,
        score: Math.max(10, Math.min(100, score)),
        color: v.color
      };
    });
  }, [profile]);

  const atRisk = results.filter(r => r.score < 50);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900">Bilan Nutritionnel Éducatif</h2>
        <p className="text-slate-500 mt-2">Ajustez les paramètres pour visualiser l'impact théorique sur vos réserves.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* INPUTS */}
        <div className="lg:col-span-4 space-y-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-fit">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">Régime Alimentaire</label>
            <div className="flex gap-2">
              {['omnivore', 'vegetarian', 'vegan'].map((d) => (
                <button
                  key={d}
                  onClick={() => setProfile({ ...profile, diet: d as any })}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wide border-2 transition-all ${
                    profile.diet === d 
                      ? 'border-orange-500 bg-orange-50 text-orange-700' 
                      : 'border-slate-100 text-slate-400 hover:border-slate-200'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {[
            { label: 'Exposition au soleil', key: 'sunExposure', minLabel: 'Cave', maxLabel: 'Plage' },
            { label: 'Consommation Fruits/Légumes', key: 'fruitVegIntake', minLabel: 'Rare', maxLabel: 'Abondante' },
            { label: 'Niveau d\'énergie ressenti', key: 'energyLevel', minLabel: 'Épuisé', maxLabel: 'Dynamique' },
            { label: 'Niveau de stress', key: 'stressLevel', minLabel: 'Zen', maxLabel: 'Intense' },
          ].map((slider) => (
            <div key={slider.key}>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-slate-700">{slider.label}</label>
                <span className="text-sm font-bold text-orange-500">{(profile as any)[slider.key]}/10</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={(profile as any)[slider.key]}
                onChange={(e) => setProfile({ ...profile, [slider.key]: parseInt(e.target.value) })}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1 uppercase font-semibold">
                <span>{slider.minLabel}</span>
                <span>{slider.maxLabel}</span>
              </div>
            </div>
          ))}
          
          <button 
             onClick={() => setShowResults(true)}
             className="w-full py-3 bg-slate-900 text-white rounded-xl font-semibold shadow-lg hover:bg-slate-800 transition-all mt-4"
          >
            Analyser mon profil
          </button>
        </div>

        {/* RESULTS */}
        <div className="lg:col-span-8 flex flex-col gap-6">
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 min-h-[400px]">
             <h3 className="text-lg font-bold text-slate-800 mb-6">Radar d'Équilibre Global</h3>
             <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={results}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} />
                    <Radar
                      name="Apport Estimé"
                      dataKey="score"
                      stroke="#f97316"
                      strokeWidth={3}
                      fill="#fb923c"
                      fillOpacity={0.5}
                    />
                    <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        itemStyle={{ color: '#ea580c', fontWeight: 'bold' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
             </div>
           </div>

           {/* Alerts */}
           {atRisk.length > 0 && (
             <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Info className="text-orange-600" />
                    <h3 className="text-lg font-bold text-orange-900">Points de vigilance pédagogiques</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {atRisk.map(r => {
                        const vitamin = VITAMINS_DATA.find(v => v.id === r.subject);
                        return (
                            <div key={r.subject} className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-bold text-slate-800">{vitamin?.name}</span>
                                    <span className="text-xs font-mono bg-red-100 text-red-600 px-2 py-1 rounded">Score: {r.score}/100</span>
                                </div>
                                <p className="text-xs text-slate-500 mb-2">Pourquoi ? Carence possible due à {profile.diet === 'vegan' && (r.subject === 'B12' || r.subject === 'D') ? 'votre régime végétalien' : 'vos niveaux d\'énergie ou stress'}.</p>
                                <p className="text-xs font-semibold text-green-600">
                                    Mangez : {vitamin?.sources[0].food}, {vitamin?.sources[1].food}.
                                </p>
                            </div>
                        )
                    })}
                </div>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};
