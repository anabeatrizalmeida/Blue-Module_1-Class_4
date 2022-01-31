var prompt  = require(`prompt-sync`)();

let num = Math.floor(Math.random() * 11);

let chute = parseInt(prompt("Digite seu chute: "));

if (chute == num){
    console.log(`Venceu!`);
} else {
    console.log(`Perdeu!`);
}