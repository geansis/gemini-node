import { doAsking } from "./do-asking.js";
import { initModel } from "./model.js";
import { promises as fs} from "fs";

const model = await initModel("gemini-1.0-pro");

export async function processText(){

    const filePath = await doAsking("\nInform me the file path:");

    const datas = await fs.readFile(filePath, "utf8");

    const prompt = `Analise as opiniões descritas em sequência e resuma os pontos positivos e negativos citados pelos clientes sobre esses destinos. Depois, categorize o percentual de respostas em satisfeito, insatisfeitos ou neutros, colocando no seguinte formato, por exemplo:  
    Satisfeitos: 20% - 20 respostas 
    Insatisfeitos: 50% - 50 respostas
    Neutros: 30% - 30 respostas 
    O total de respostas deve coincidir com o total de opiniões lidas. 
    Opiniões: ${datas}`;

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
}