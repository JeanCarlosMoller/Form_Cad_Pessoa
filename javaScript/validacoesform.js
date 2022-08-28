var botaoAdicionar = document.querySelector("#adicionar-pessoa");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

  var form = document.querySelector("#form-adiciona");

 //Extraindo informações da pessoa do form
  var pessoa =  obtemPessoaDoFormulario(form);

  //criando a tr e a td da Pessoa 
  var pessoaTr = montarTr(pessoa);

  //adicionando pessoa na tabela
  var tabela = document.querySelector("#tabela-pessoas");
  tabela.appendChild(pessoaTr);
  form.reset();
});

function exibeMensagemsDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");

  //apaga o conteudo de ul
  ul.innerHTML = "";
  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function obtemPessoaDoFormulario(form){
  var pessoa = {
    nome: form.nome.value,
    cpf: form.cpf.value,
    rg: form.rg.value,
    email: form.email.value,
    dataNascimento: form.dataNascimento.value
  }
  return pessoa;
}

//coleta as informações do TR
function montarTr(pessoa){
  var pessoaTr = document.createElement("tr");
  pessoaTr.classList.add("pessoa");
  pessoaTr.appendChild(montaTd(pessoa.nome, "info-nome"));
  pessoaTr.appendChild(montaTd(pessoa.cpf, "info-cpf"));
  pessoaTr.appendChild(montaTd(pessoa.rg, "info-rg"));
  pessoaTr.appendChild(montaTd(pessoa.email, "info-email"));
  pessoaTr.appendChild(montaTd(pessoa.dataNascimento, "info-dataNascimento"));
  return pessoaTr;
}

//Apresenta as informações da pessoa cadastrada
function montaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

//valida campos
function validaCampos(pessoa){

}



