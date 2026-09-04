

    // VARIÁVEIS DO CARROSSEL 

let imagensAtuais = [];
let imagemAtual = 0;


// FOTOS

const fotos = {

    voillet: [
        "https://static.wixstatic.com/media/02fdb0_4034a34591fc421a89107dbea8f4f312~mv2.jpg/v1/fill/w_480,h_654,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/02fdb0_4034a34591fc421a89107dbea8f4f312~mv2.jpg",

        "https://claudia.abril.com.br/wp-content/uploads/2016/10/voilette-noivas_4.jpg?crop=1&resize=1212,909",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEDLrcvY_iwac0_ELHhs7NhOblfMesQ6ye2GF0dc3TXh9QtjG_8wEgglM&s=10"
    ],


    ombro: [
        "", 
        "", 
        ""
    ],


    cotovelo: [
        "",
        "",
        ""
    ],


    blusher: [
        "",
        "",
        ""
    ],


    pontadededo: [
        "",
        "",
        ""
    ],


    ballet: [
        "",
        "",
        ""
    ],


    capela: [
        "",
        "",
        ""
    ],


    catedral: [
        "",
        "",
        ""
    ]

};


// ABRIR CARD

function abrirCard(tipo) {

    imagensAtuais = fotos[tipo] || [];

    /* Remove imagens vazias */

    imagensAtuais = imagensAtuais.filter(
        imagem => imagem !== ""
    );

    /* Se não houver imagens */

    if (imagensAtuais.length === 0) {

        document.getElementById("modalImagem").src = "";

        document.getElementById("contadorImagem").textContent =
            "Sem imagens disponíveis";

        document.getElementById("meuModal").style.display = "flex";

        return;
    }


    /* Começa pela primeira foto */

    imagemAtual = 0;

    /* Atualiza imagem */

    atualizarCarrossel();

    /* Abre modal */

    document.getElementById("meuModal").style.display = "flex";
}


// ATUALIZAR CARROSSEL

function atualizarCarrossel() {

    const imagem = document.getElementById("modalImagem");

    const contador = document.getElementById("contadorImagem");

    imagem.src = imagensAtuais[imagemAtual];

    contador.textContent =
        `${imagemAtual + 1} / ${imagensAtuais.length}`;
}

// PRÓXIMA IMAGEM

function proximaImagem() {

    if (imagensAtuais.length === 0) {
        return;
    }

    imagemAtual++;

    /* Volta para a primeira */

    if (imagemAtual >= imagensAtuais.length) {

        imagemAtual = 0;
    }

    atualizarCarrossel();
}

// IMAGEM ANTERIOR

function imagemAnterior() {

    if (imagensAtuais.length === 0) {
        return;
    }

    imagemAtual--;

    /* Vai para a última */

    if (imagemAtual < 0) {

        imagemAtual = imagensAtuais.length - 1;
    }


    atualizarCarrossel();
}

// CONTROLAR MODAL

function controlarModal(abrir) {

    document.getElementById("meuModal").style.display =
        abrir ? "flex" : "none";
}


// FECHAR CLICANDO FORA DO MODAL

document.getElementById("meuModal").addEventListener(
    "click",
    function(event) {

        if (event.target === this) {

            controlarModal(false);
        }
    }
);


/* TECLADO
   ← = anterior
   → = próxima
   ESC = fechar */

document.addEventListener(
    "keydown",
    function(event) {

        const modal =
            document.getElementById("meuModal");

        /* Só funciona quando o modal está aberto */

        if (modal.style.display !== "flex") {
            return;
        }


        if (event.key === "ArrowRight") {

            proximaImagem();

        }


        else if (event.key === "ArrowLeft") {

            imagemAnterior();

        }


        else if (event.key === "Escape") {

            controlarModal(false);

        }

    }
);