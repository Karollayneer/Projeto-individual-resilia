const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function getProperties() {
  const properties = [];
  while (true) {
    const property = await new Promise(resolve => {
      rl.question('Digite uma propriedade de CSS (ou "SAIR" para terminar): ', resolve);
    });
    if (property === 'SAIR') {
      properties.sort();
      console.log(properties.join('\n'));
      rl.close();
      break;
    } else {
      properties.push(property);
    }
  }
}

getProperties();
