

const formulario = document.getElementById("formContato");

console.log("FORMULÁRIO ENCONTRADO:", formulario);

formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    console.log("FORMULÁRIO FOI ENVIADO!");

    const Nome = document.getElementById("Nome").value;
    const Email = document.getElementById("Email").value;
    const Assunto = document.getElementById("Assunto").value;
    const Mensagem = document.getElementById("Mensagem").value;

    console.log("DADOS:", Nome, Email, Assunto, Mensagem);

    try {
        const resposta = await fetch("http://localhost:3000/contato", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Nome: Nome,
                Email: Email,
                Assunto: Assunto,
                Mensagem: Mensagem
            })
        });

        console.log("STATUS:", resposta.status);

        const dados = await resposta.json();

        console.log("RESPOSTA:", dados);

    } catch (erro) {
        console.error("ERRO NO FETCH:", erro);
    }
    
});