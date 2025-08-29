interface IVeiculo{
    marca: string;
    modelo: string;
    ano: number;

    acelerar(): void;
    frear(): void;
    exibir(): void;
}

const carro: IVeiculo ={
    marca: "Wolksvagem",
    modelo: "gol",
    ano: 2020,
    acelerar:() =>{
        console.log("O carro está acelerando");
    },
    frear:() =>{
        console.log("O carro está freando");
    },
    exibir:() =>{
        console.log(`Marca: ${carro.marca}, modelo: ${carro.modelo}, ano: ${carro.ano}`);
    }
}