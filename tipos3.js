var CategoriaCliente;
(function (CategoriaCliente) {
    CategoriaCliente["Regular"] = "Regular";
    CategoriaCliente["Premium"] = "Premium";
    CategoriaCliente["VIP"] = "VIP";
})(CategoriaCliente || (CategoriaCliente = {}));
var categoriaCliente;
categoriaCliente = CategoriaCliente.Premium;
console.log("Categoria do cliente".concat(categoriaCliente));
