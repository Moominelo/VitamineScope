import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

if (process.env.API_KEY) {
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
} else {
  console.warn("API_KEY is missing from environment variables.");
}

export const getEducationalContent = async (topic: string, userContext?: string) => {
  if (!ai) {
    return "L'IA n'est pas configurée (clé API manquante). Veuillez vérifier votre configuration.";
  }

  try {
    const prompt = `
      Tu es VitamineScope, un expert pédagogique en nutrition.
      Explique de manière simple, ludique et éducative le sujet suivant : "${topic}".
      Contexte utilisateur (si pertinent) : ${userContext || 'Aucun'}.
      
      Règles :
      1. Utilise des analogies simples.
      2. Sois bienveillant et encourageant.
      3. Structure ta réponse avec des titres clairs (Markdown).
      4. Si la question concerne une carence, rappelle toujours que ceci n'est pas un diagnostic médical.
      5. Termine par une recommandation alimentaire positive.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "Tu es un assistant pédagogique nutritionnel. Tu ne donnes JAMAIS d'avis médical. Tu éduques sur les sources et les rôles des nutriments.",
        temperature: 0.7,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Désolé, je rencontre des difficultés pour accéder à mes connaissances pour le moment.";
  }
};

export const generateQuizQuestion = async () => {
    if (!ai) {
      throw new Error("API Key missing");
    }

    const prompt = `Génère une question de quiz à choix multiples (QCM) sur les vitamines.
    Format JSON attendu :
    {
      "question": "Texte de la question",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0, // Index de la bonne réponse (0-3)
      "explanation": "Courte explication pédagogique"
    }
    `;

    try {
       const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });
      return JSON.parse(response.text || '{}');
    } catch (e) {
      console.error(e);
      return null;
    }
}
