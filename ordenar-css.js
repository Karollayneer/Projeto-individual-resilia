const readlineSync = require('readline-sync');

const cssProperties = [];

let property = readlineSync.question('Digite uma propriedade CSS (ou SAIR para encerrar): ');

while (property.toUpperCase() !== 'SAIR') {
  cssProperties.push(property);
  property = readlineSync.question('Digite uma propriedade CSS (ou SAIR para encerrar): ');
}

console.log('Propriedades CSS ordenadas em ordem alfabética:');
cssProperties.sort().forEach(property => console.log(property));

