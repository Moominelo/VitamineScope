import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { VitaminExplorer } from './components/VitaminExplorer';
import { VitaminDetail } from './components/VitaminDetail';
import { Analyzer } from './components/Analyzer';
import { AiTutor } from './components/AiTutor';
import { AppView, Vitamin } from './types';

function App() {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [selectedVitamin, setSelectedVitamin] = useState<Vitamin | null>(null);

  const handleSelectVitamin = (vitamin: Vitamin) => {
    setSelectedVitamin(vitamin);
    setCurrentView(AppView.VITAMIN_DETAIL);
  };

  const renderContent = () => {
    switch (currentView) {
      case AppView.HOME:
        return <Home setView={setCurrentView} />;
      case AppView.EXPLORE:
        return <VitaminExplorer onSelectVitamin={handleSelectVitamin} />;
      case AppView.VITAMIN_DETAIL:
        return selectedVitamin ? (
          <VitaminDetail 
            vitamin={selectedVitamin} 
            onBack={() => setCurrentView(AppView.EXPLORE)} 
          />
        ) : (
          <VitaminExplorer onSelectVitamin={handleSelectVitamin} />
        );
      case AppView.ANALYZER:
        return <Analyzer />;
      case AppView.TUTOR:
        return <AiTutor />;
      default:
        return <Home setView={setCurrentView} />;
    }
  };

  return (
    <Layout currentView={currentView} setView={setCurrentView}>
      {renderContent()}
    </Layout>
  );
}

export default App;
