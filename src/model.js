import { GoogleGenerativeAI } from "@google/generative-ai";

export async function initModel(model) {
    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const modelGenerated = genAI.getGenerativeModel({ model });
    return modelGenerated;
}