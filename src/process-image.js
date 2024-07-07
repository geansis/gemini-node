import { initModel } from "./model.js";
import {readFileSync} from "fs";

const model = await initModel("gemini-pro-vision");

function fileToGenerativePart(path, mimeType) {
    return {
        inlineData: {
            data: Buffer.from(readFileSync(path)).toString("base64"),
            mimeType
        },
    };
}

export async function processImage(image){
     const prompt = "Say me everything you can about the destination this image";

     const imageParts = [
        fileToGenerativePart(image, "image/jpeg"),
    ];

    const result = await model.generateContent([prompt, ...imageParts]);
    const text = result.response.text();
    console.log(text);
}