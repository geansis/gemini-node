import readline from 'readline';

export function doAsking(asking) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(asking, (answering) => {
      rl.close();
      resolve(answering);
    });
  });
}