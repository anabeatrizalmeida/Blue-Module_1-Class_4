var prompt  = require(`prompt-sync`)();

const salario = +prompt('Digite seu salario: ');

if (salario <= 280 ){
    percentual = `20%`;
    valorAumento = 0.2*salario
    novoSalario = salario + valorAumento;
} else if (salario <= 700 ){
    percentual = `15%`;
    valorAumento = 0.15*salario
    novoSalario = salario + valorAumento;
} else if (salario <= 1500){
    percentual = `10%`;
    valorAumento = 0.1*salario
    novoSalario = salario + valorAumento;
} else if (salario < 1500){
    percentual = `5%`;
    valorAumento = 0.05*salario
    novoSalario = salario + valorAumento;
} 
console.log(`Salário anterior: ${salario}\nPercentual aplicado: ${percentual}\nValor do aumento: ${valorAumento}\nNovo salário: ${novoSalario}`);
