import { askingFree } from "./src/asking-free.js";
import { searchDestiny } from "./src/search-destiny.js";
import { doAsking } from "./src/do-asking.js";
import { processImage } from "./src/process-image.js";
import { processText } from "./src/process-text.js";

async function main(){

  const chosen = await doAsking(`Choice the the question below: \n
    1. Do the free ask about the destiny;
    2. Compare the destiny by category;
    3. See information with base in this image;
    4. Do analize feeling with base in text files;
    \nDesired answer: `);

  if(chosen === '1')
    await askingFree();
  else if(chosen === '2')
    await searchDestiny();
  else if(chosen === '3'){
    const imagem = await doAsking("\nInform me the complete path this image:");
    await processImage(imagem);
  }else if(chosen === '4'){
    await processText();
  }else
    console.log("Invalid input. Exiting...");
}

main();