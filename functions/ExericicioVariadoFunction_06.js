const remove_espacos = (mensagem)=> {

    return mensagem.trim()

}

let mensagem = "  Estou aprendendo JavaScript        ";

let resultado = remove_espacos(mensagem);

console.log(resultado.length);