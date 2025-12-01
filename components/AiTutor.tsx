import React, { useState } from 'react';
import { getEducationalContent, generateQuizQuestion } from '../services/geminiService';
import { Sparkles, MessageSquare, BookOpen, Send, Loader2 } from 'lucide-react';

export const AiTutor: React.FC = () => {
  const [mode, setMode] = useState<'CHAT' | 'QUIZ'>('CHAT');
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [quizData, setQuizData] = useState<any>(null);
  const [quizState, setQuizState] = useState<'QUESTION' | 'ANSWERED'>('QUESTION');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleAsk = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const answer = await getEducationalContent(input);
    setResponse(answer || "Erreur de connexion.");
    setLoading(false);
  };

  const loadQuiz = async () => {
    setLoading(true);
    setQuizState('QUESTION');
    setSelectedOption(null);
    const data = await generateQuizQuestion();
    setQuizData(data);
    setLoading(false);
  };

  const handleQuizAnswer = (index: number) => {
    setSelectedOption(index);
    setQuizState('ANSWERED');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-8 text-white mb-8 shadow-xl">
        <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Sparkles className="w-8 h-8 text-yellow-300" />
            </div>
            <div>
                <h2 className="text-3xl font-bold">Coach IA Vitamine</h2>
                <p className="opacity-80">Posez vos questions ou testez vos connaissances.</p>
            </div>
        </div>
        
        <div className="flex gap-4 mt-6">
            <button 
                onClick={() => setMode('CHAT')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${mode === 'CHAT' ? 'bg-white text-indigo-600 shadow-lg' : 'bg-indigo-800/50 hover:bg-indigo-800 text-white'}`}
            >
                <MessageSquare className="w-4 h-4" /> Discussion
            </button>
            <button 
                onClick={() => { setMode('QUIZ'); if(!quizData) loadQuiz(); }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${mode === 'QUIZ' ? 'bg-white text-indigo-600 shadow-lg' : 'bg-indigo-800/50 hover:bg-indigo-800 text-white'}`}
            >
                <BookOpen className="w-4 h-4" /> Quiz Express
            </button>
        </div>
      </div>

      {mode === 'CHAT' && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 min-h-[400px] flex flex-col">
            <div className="flex-grow space-y-4 mb-6">
                {!response && !loading && (
                    <div className="text-center text-slate-400 mt-20">
                        <p>Exemples de questions :</p>
                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                            <span className="px-3 py-1 bg-slate-50 rounded-full text-xs border border-slate-200 cursor-pointer hover:border-orange-300" onClick={() => setInput("Quels aliments pour la vitamine D ?")}>Aliments Vitamine D</span>
                            <span className="px-3 py-1 bg-slate-50 rounded-full text-xs border border-slate-200 cursor-pointer hover:border-orange-300" onClick={() => setInput("Pourquoi je suis fatigué ? (Carence B12)")}>Fatigue & B12</span>
                            <span className="px-3 py-1 bg-slate-50 rounded-full text-xs border border-slate-200 cursor-pointer hover:border-orange-300" onClick={() => setInput("Différence entre rétinol et bêta-carotène")}>Rétinol vs Bêta-carotène</span>
                        </div>
                    </div>
                )}
                {loading && (
                    <div className="flex justify-center items-center h-full">
                        <Loader2 className="w-8 h-8 text-orange-500 animate-spin" />
                    </div>
                )}
                {response && (
                    <div className="prose prose-slate max-w-none">
                         <div className="bg-indigo-50 p-6 rounded-2xl text-slate-800 leading-relaxed whitespace-pre-line border border-indigo-100">
                             {response}
                         </div>
                    </div>
                )}
            </div>
            
            <div className="relative">
                <input
                    type="text"
                    className="w-full pl-6 pr-14 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all"
                    placeholder="Posez votre question nutrition..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
                />
                <button 
                    onClick={handleAsk}
                    disabled={!input.trim() || loading}
                    className="absolute right-2 top-2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors"
                >
                    <Send className="w-5 h-5" />
                </button>
            </div>
        </div>
      )}

      {mode === 'QUIZ' && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 min-h-[400px] flex flex-col justify-center items-center">
            {loading ? (
                <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
            ) : quizData ? (
                <div className="w-full max-w-2xl animate-fade-in">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">{quizData.question}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {quizData.options.map((opt: string, idx: number) => (
                            <button
                                key={idx}
                                onClick={() => handleQuizAnswer(idx)}
                                disabled={quizState === 'ANSWERED'}
                                className={`p-4 rounded-xl text-left font-medium transition-all border-2 ${
                                    quizState === 'ANSWERED'
                                        ? idx === quizData.correctAnswer
                                            ? 'bg-green-100 border-green-500 text-green-800'
                                            : idx === selectedOption
                                                ? 'bg-red-100 border-red-500 text-red-800'
                                                : 'bg-slate-50 border-transparent opacity-50'
                                        : 'bg-white border-slate-100 hover:border-indigo-400 hover:shadow-md'
                                }`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                    {quizState === 'ANSWERED' && (
                        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-center">
                            <p className="text-blue-800 font-medium mb-4">{quizData.explanation}</p>
                            <button 
                                onClick={loadQuiz}
                                className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-colors"
                            >
                                Question suivante
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <p>Erreur de chargement du quiz.</p>
            )}
        </div>
      )}
    </div>
  );
};
