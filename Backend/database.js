function Enviar() {
  var Nome = document.getElementById("Nome").value;
  var Email = document.getElementById("Email").value;
  var Telefone = document.getElementById("Telefone").value;
  var Assunto = document.getElementById("Assunto").value;
  var Mensagem = document.getElementById("Mensagem").value;

  console.log(JSON.stringify({
    Nome: Nome,
    Email: Email,
    Telefone: Telefone,
    Assunto: Assunto,
    Mensagem: Mensagem
  }));

  fetch('feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      Nome: Nome,
      Email: Email,
      Telefone: Telefone,
      Assunto: Assunto,
      Mensagem: Mensagem
    })
  , 
  headers: {"content-type" : "application/json"}
    
.then(async (response) => {
    var status = response.text();
    console.log(status);
    if(status == 'conectado') {
        location.href = '/acesso-restrito/acesso-html';
    } else {
        alert('Erro ao enviar feedback. Tente novamente mais tarde.');
    }})