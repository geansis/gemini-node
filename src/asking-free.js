import { doAsking } from "./do-asking.js";
import { initModel } from "./model.js";

const model = await initModel("gemini-1.5-flash");

export async function askingFree() {

  const prompt = await doAsking("Talk me about the destine which you wish to know:");

  const parts = [
    {text: "You are a chatbot for a website that sells travel packages."},
    {text: `input: ${prompt}`},
    {text: "output: "},
  ];

  const request = ({
    contents: [{ role: "user", parts }]
  });

  const result = await model.generateContent(request);

  const entryTotalTokens = await model.countTokens(request);
  console.log(`\nTotal tokens entry: ${entryTotalTokens.totalTokens}\n`);
  
  const text = result.response.text();
  console.log(text);

  const entryTotalExit = await model.countTokens(text);
  console.log(`\nTotal tokens exit: ${entryTotalExit.totalTokens}\n`);
}