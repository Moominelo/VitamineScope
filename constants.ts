import { Vitamin } from './types';

export const VITAMINS_DATA: Vitamin[] = [
  {
    id: 'A',
    name: 'Vitamine A',
    chemicalName: 'Rétinol / Bêta-carotène',
    category: 'Liposoluble',
    color: '#fb923c', // orange-400
    functions: ['Vision (surtout nocturne)', 'Système immunitaire', 'Santé de la peau', 'Croissance cellulaire'],
    rda: { male: '900 µg', female: '700 µg', children: '300-600 µg' },
    sources: [
      { food: 'Foie de bœuf', density: 'High' },
      { food: 'Patate douce', density: 'High' },
      { food: 'Carottes', density: 'High' },
      { food: 'Épinards', density: 'Medium' }
    ],
    deficiencySymptoms: ['Cécité nocturne', 'Peau sèche', 'Infections fréquentes'],
    toxicity: 'Peut causer des dommages au foie et des maux de tête à très haute dose.',
    description: "La vitamine de la vision et de la peau. Elle existe sous forme animale (rétinol) et végétale (bêta-carotène)."
  },
  {
    id: 'B1',
    name: 'Vitamine B1',
    chemicalName: 'Thiamine',
    category: 'Hydrosoluble',
    color: '#facc15', // yellow-400
    functions: ['Transformation des glucides en énergie', 'Fonctionnement du système nerveux', 'Contraction musculaire'],
    rda: { male: '1.2 mg', female: '1.1 mg', children: '0.5-0.9 mg' },
    sources: [
      { food: 'Levure de bière', density: 'High' },
      { food: 'Céréales complètes', density: 'Medium' },
      { food: 'Porc', density: 'Medium' },
      { food: 'Noix', density: 'Medium' }
    ],
    deficiencySymptoms: ['Fatigue extrême', 'Faiblesse musculaire', 'Irritabilité', 'Béri-béri (rare)'],
    description: "Essentielle pour produire de l'énergie à partir de ce que vous mangez. Les sportifs en ont souvent besoin d'avantage."
  },
  {
    id: 'B2',
    name: 'Vitamine B2',
    chemicalName: 'Riboflavine',
    category: 'Hydrosoluble',
    color: '#fef08a', // yellow-200
    functions: ['Production d\'énergie', 'Santé des yeux', 'Santé de la peau'],
    rda: { male: '1.3 mg', female: '1.1 mg', children: '0.5-0.9 mg' },
    sources: [
      { food: 'Produits laitiers', density: 'High' },
      { food: 'Œufs', density: 'High' },
      { food: 'Légumes verts', density: 'Medium' }
    ],
    deficiencySymptoms: ['Lèvres gercées', 'Inflammation de la langue', 'Yeux sensibles à la lumière'],
    description: "Joue un rôle clé dans le métabolisme énergétique et protège les cellules contre le stress oxydatif."
  },
  {
    id: 'B3',
    name: 'Vitamine B3',
    chemicalName: 'Niacine',
    category: 'Hydrosoluble',
    color: '#fdba74', // orange-300
    functions: ['Métabolisme énergétique', 'ADN', 'Système nerveux'],
    rda: { male: '16 mg', female: '14 mg', children: '6-12 mg' },
    sources: [
      { food: 'Poulet', density: 'High' },
      { food: 'Thon', density: 'High' },
      { food: 'Champignons', density: 'Medium' }
    ],
    deficiencySymptoms: ['Pellagre (peau rugueuse)', 'Troubles digestifs', 'Fatigue mentale'],
    description: "Importante pour transformer les aliments en carburant et maintenir la peau en bonne santé."
  },
  {
    id: 'B5',
    name: 'Vitamine B5',
    chemicalName: 'Acide pantothénique',
    category: 'Hydrosoluble',
    color: '#cbd5e1', // slate-300
    functions: ['Synthèse des hormones', 'Métabolisme des graisses', 'Production d\'énergie'],
    rda: { male: '5 mg', female: '5 mg', children: '2-4 mg' },
    sources: [
      { food: 'Champignons Shiitake', density: 'High' },
      { food: 'Avocat', density: 'Medium' },
      { food: 'Poulet', density: 'Medium' }
    ],
    deficiencySymptoms: ['Fatigue', 'Insomnie', 'Douleurs abdominales'],
    description: "Présente dans presque tous les aliments, elle aide à fabriquer les cellules sanguines et à convertir les aliments en énergie."
  },
  {
    id: 'B6',
    name: 'Vitamine B6',
    chemicalName: 'Pyridoxine',
    category: 'Hydrosoluble',
    color: '#f87171', // red-400
    functions: ['Synthèse des neurotransmetteurs (humeur)', 'Formation des globules rouges', 'Immunité'],
    rda: { male: '1.3-1.7 mg', female: '1.3-1.5 mg', children: '0.5-1 mg' },
    sources: [
      { food: 'Pois chiches', density: 'High' },
      { food: 'Saumon', density: 'High' },
      { food: 'Pommes de terre', density: 'Medium' }
    ],
    deficiencySymptoms: ['Anémie', 'Dépression', 'Confusion', 'Système immunitaire affaibli'],
    description: "Cruciale pour le cerveau et l'humeur. Elle aide le corps à fabriquer sérotonine et noradrénaline."
  },
  {
    id: 'B7',
    name: 'Vitamine B7',
    chemicalName: 'Biotine',
    category: 'Hydrosoluble',
    color: '#f472b6', // pink-400
    functions: ['Santé des cheveux, peau, ongles', 'Métabolisme'],
    rda: { male: '30 µg', female: '30 µg', children: '8-20 µg' },
    sources: [
      { food: 'Jaune d\'œuf', density: 'High' },
      { food: 'Amandes', density: 'High' },
      { food: 'Chou-fleur', density: 'Medium' }
    ],
    deficiencySymptoms: ['Chute de cheveux', 'Éruption cutanée', 'Ongles cassants'],
    description: "Souvent appelée vitamine de la beauté, elle est essentielle pour transformer les nutriments en énergie."
  },
  {
    id: 'B9',
    name: 'Vitamine B9',
    chemicalName: 'Folates / Acide folique',
    category: 'Hydrosoluble',
    color: '#4ade80', // green-400
    functions: ['Synthèse de l\'ADN', 'Division cellulaire', 'Développement fœtal'],
    rda: { male: '400 µg', female: '400 µg (600 si grossesse)', children: '150-300 µg' },
    sources: [
      { food: 'Légumineuses (Lentilles)', density: 'High' },
      { food: 'Asperges', density: 'High' },
      { food: 'Épinards', density: 'High' }
    ],
    deficiencySymptoms: ['Anémie mégaloblastique', 'Fatigue', 'Palpitations'],
    description: "Vitale pour la croissance cellulaire et la formation du sang. Indispensable durant la grossesse."
  },
  {
    id: 'B12',
    name: 'Vitamine B12',
    chemicalName: 'Cobalamine',
    category: 'Hydrosoluble',
    color: '#818cf8', // indigo-400
    functions: ['Santé du système nerveux', 'Formation des globules rouges', 'Synthèse de l\'ADN'],
    rda: { male: '2.4 µg', female: '2.4 µg', children: '0.9-1.8 µg' },
    sources: [
      { food: 'Palourdes', density: 'High' },
      { food: 'Foie', density: 'High' },
      { food: 'Saumon', density: 'Medium' },
      { food: 'Produits laitiers', density: 'Medium' }
    ],
    deficiencySymptoms: ['Anémie pernicieuse', 'Fourmillements', 'Problèmes de mémoire', 'Fatigue'],
    description: "Essentielle pour les nerfs et le sang. Quasi absente des végétaux, attention aux régimes végétaliens."
  },
  {
    id: 'C',
    name: 'Vitamine C',
    chemicalName: 'Acide ascorbique',
    category: 'Hydrosoluble',
    color: '#fbbf24', // amber-400
    functions: ['Antioxydant', 'Synthèse du collagène', 'Immunité', 'Absorption du fer'],
    rda: { male: '90 mg', female: '75 mg', children: '15-45 mg' },
    sources: [
      { food: 'Poivrons', density: 'High' },
      { food: 'Kiwi', density: 'High' },
      { food: 'Agrumes', density: 'Medium' }
    ],
    deficiencySymptoms: ['Scorbut (grave)', 'Fatigue', 'Gencives qui saignent', 'Mauvaise cicatrisation'],
    description: "Le grand protecteur immunitaire. Elle aide aussi à avoir une belle peau grâce au collagène."
  },
  {
    id: 'D',
    name: 'Vitamine D',
    chemicalName: 'Calciférol',
    category: 'Liposoluble',
    color: '#fcd34d', // yellow-300
    functions: ['Absorption du calcium (os)', 'Fonction musculaire', 'Immunité'],
    rda: { male: '600-800 UI', female: '600-800 UI', children: '600 UI' },
    sources: [
      { food: 'Soleil (Synthèse cutanée)', density: 'High' },
      { food: 'Poissons gras (Saumon)', density: 'High' },
      { food: 'Jaune d\'œuf', density: 'Low' }
    ],
    deficiencySymptoms: ['Douleurs osseuses', 'Faiblesse musculaire', 'Risque accru de fractures', 'Dépression saisonnière'],
    description: "La vitamine du soleil. Unique car le corps peut la fabriquer. Essentielle pour des os solides."
  },
  {
    id: 'E',
    name: 'Vitamine E',
    chemicalName: 'Tocophérol',
    category: 'Liposoluble',
    color: '#a5b4fc', // indigo-300
    functions: ['Puissant antioxydant', 'Protection des cellules', 'Système immunitaire'],
    rda: { male: '15 mg', female: '15 mg', children: '6-11 mg' },
    sources: [
      { food: 'Huile de germe de blé', density: 'High' },
      { food: 'Graines de tournesol', density: 'High' },
      { food: 'Amandes', density: 'High' }
    ],
    deficiencySymptoms: ['Faiblesse musculaire', 'Problèmes de vision', 'Système immunitaire affaibli'],
    description: "Le garde du corps de vos cellules. Elle protège les membranes cellulaires de l'oxydation."
  },
  {
    id: 'K',
    name: 'Vitamine K',
    chemicalName: 'Phylloquinone',
    category: 'Liposoluble',
    color: '#84cc16', // lime-500
    functions: ['Coagulation sanguine', 'Santé des os'],
    rda: { male: '120 µg', female: '90 µg', children: '30-60 µg' },
    sources: [
      { food: 'Chou frisé (Kale)', density: 'High' },
      { food: 'Épinards', density: 'High' },
      { food: 'Brocoli', density: 'Medium' }
    ],
    deficiencySymptoms: ['Saignements excessifs', 'Hématomes faciles', 'Baisse de la densité osseuse'],
    description: "Indispensable pour que le sang coagule correctement. Le 'K' vient de l'allemand 'Koagulation'."
  }
];