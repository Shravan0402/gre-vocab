import { GoogleGenAI, Type } from "@google/genai";
import { WordData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const fetchWordDetails = async (word: string): Promise<WordData | null> => {
  if (!process.env.API_KEY) {
    console.error("API Key is missing");
    return null;
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Provide the definition, part of speech, phonetic pronunciation, and a sophisticated example sentence for the GRE vocabulary word: "${word}".`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            definition: { type: Type.STRING },
            example: { type: Type.STRING },
            pronunciation: { type: Type.STRING },
            type: { type: Type.STRING, description: "Part of speech, e.g. Adjective, Verb" }
          },
          required: ["definition", "example", "pronunciation", "type"]
        }
      }
    });

    if (response.text) {
      const data = JSON.parse(response.text);
      return {
        word: word,
        ...data
      };
    }
    return null;
  } catch (error) {
    console.error("Error fetching word details from Gemini:", error);
    // Fallback in case of error (though UI handles null)
    return null;
  }
};
