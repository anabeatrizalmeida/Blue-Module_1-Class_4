var prompt  = require(`prompt-sync`)();

let saque = parseInt(prompt(`Digite o valor do saque: `));


if (saque < 10 || saque > 600){
    console.log(`Saque indisponivel`);
} else{
    notascem = Math.trunc(saque/100);
    saque = saque%100;

    notascinquenta = Math.trunc(saque/50);
    saque = saque%50;

    notasdez = Math.trunc(saque/10);
    saque = saque%10;

    notascinco = Math.trunc(saque/5);
    saque = saque%5;


    notasum = saque;
}

console.log('Notas R$100,00 = ',notascem);
console.log('Notas R$ 50,00 = ',notascinquenta);
console.log('Notas R$ 10,00 = ',notasdez);
console.log('Notas R$  5,00 = ',notascinco);
console.log('Notas R$  1,00 = ',notasum);