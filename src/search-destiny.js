import { doAsking } from "./do-asking.js";
import { initModel } from "./model.js";

const model = await initModel("gemini-1.0-pro");

export async function searchDestiny() {

  const categorias = await doAsking("Tell me the categories which you wish look for about the destine: ");
  const prompt = await doAsking("Talk me about the destine which you wish to know:");

  const parts = [
    {text: "You are a chatbot for a website that sells travel packages. When asked about a destination, be it a neighborhood, city, country, or continent, for example, you can provide information. If you are asked about something that does not correspond to travel, you must inform them that you cannot answer about it."},
    {text: "input: Tell me about the santos, a traditional neighborhood of the literal city of São Paulo."},
    {text: "output: **The Santos neighborhood is in the southeast region of São Paulo, Brazil.**\n\n* **Characteristics:**\n * It is known for its traditional architecture, cobblestone streets, and lively atmosphere\n **Location:**.\n * The neighborhood is home to many historic buildings, including the Santos Palace, which was built in the 16th century* **Culture:**.\n * Santos is also home to several museums, churches, and art galleries.**Attractions:**\n * The neighborhood is a popular tourist destination and visitors can enjoy its many restaurants\n bars, and shops."},
    {text: `input: tell me about ${categorias} the destine ${prompt}`},
    {text: "output: "},
  ];
  
  const result = await model.generateContent({
    contents: [{ role: "user", parts }]
  });

  console.log(result.response.text());
}