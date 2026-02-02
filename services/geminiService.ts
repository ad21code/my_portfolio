import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

// Initialize Gemini Client
// Note: process.env.API_KEY is assumed to be available.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

const MODEL_NAME = 'gemini-3-flash-preview';

/**
 * Generates a system instruction string based on the portfolio data.
 * This gives the AI the context it needs to answer questions about the user.
 */
const getSystemInstruction = (): string => {
  return `
    You are an AI assistant for a portfolio website belonging to ${PORTFOLIO_DATA.name}.
    Your goal is to answer visitor questions specifically about ${PORTFOLIO_DATA.name}'s skills, experience, projects, and contact info.
    
    Here is the context data about ${PORTFOLIO_DATA.name}:
    ${JSON.stringify(PORTFOLIO_DATA)}
    
    Guidelines:
    - Be polite, professional, and concise.
    - Only answer based on the provided data. If a user asks something personal or unrelated to the portfolio, gently steer them back to professional topics.
    - If asked for contact info, provide the email.
    - Keep answers under 3-4 sentences unless detailed explanation is requested.
    - Use formatting (bullet points) if listing skills or projects.
  `;
};

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  if (!apiKey) {
    return "Error: API Key is missing. Please configure the environment.";
  }

  try {
    // We construct a fresh chat session for each request in this simple implementation,
    // or we could maintain a chat object if we wanted to use the stateful API.
    // For simplicity and to ensure context is always fresh, we'll use generateContent with the history simulated or just single-turn for now if we want to be stateless,
    // BUT best practice for chat is using ai.chats.create.
    
    const chat = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response.";
    
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to my brain right now. Please try again later.";
  }
};