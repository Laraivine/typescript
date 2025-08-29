enum CategoriaCliente{
    Regular = "Regular",
    Premium = "Premium",
    VIP = "VIP"
}

let categoriaCliente: CategoriaCliente;
categoriaCliente = CategoriaCliente.Premium;

console.log(`Categoria do cliente${categoriaCliente}`);