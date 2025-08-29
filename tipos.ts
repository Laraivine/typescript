let idade: number;
idade = 20;
console.log(`A idade é:${idade}`);

let nome: string;
nome =  "João";
console.log(`O nome é:${nome}`);

function saudar(pessoa: string): string{
    return `Olá ${pessoa}`;
}

const mensagem = saudar(nome);
console.log(mensagem);
