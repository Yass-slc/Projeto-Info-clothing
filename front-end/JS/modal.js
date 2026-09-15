/* =========================================
/*          VARIÁVEIS
        ========================================= */

let imagensAtuais = [];
let imagemAtual = 0;


/* =========================================
   COLOQUE OS LINKS DAS OUTRAS FOTOS
   NOS CAMPOS VAZIOS.
========================================= */

const fotosVeus = {

  // Véus
  voillet: [
    "https://static.wixstatic.com/media/02fdb0_4034a34591fc421a89107dbea8f4f312~mv2.jpg/v1/fill/w_480,h_654,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/02fdb0_4034a34591fc421a89107dbea8f4f312~mv2.jpg",
    "https://claudia.abril.com.br/wp-content/uploads/2016/10/voilette-noivas_4.jpg?crop=1&resize=1212,909",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEDLrcvY_iwac0_ELHhs7NhOblfMesQ6ye2GF0dc3TXh9QtjG_8wEgglM&s=10"

  ],


  ombro: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPNqobXar0LNl3Daca9P7AQfV7tJXjKIpphifJOoy7zUitJVxxpSgvg8rD&s=10",
    "https://i.etsystatic.com/8264119/r/il/3f926d/3282622421/il_570xN.3282622421_i30x.jpg",
    "https://pt.lunss.com/uploads/product/0/1/01021/short-pearl-raw-cut-wedding-veil-2.webp"
  ],


  cotovelo: [
    "https://pt.lunss.com/uploads/product/0/1/01040/two-tier-corded-lace-edge-elbow-length-short-bridal-veil-1.webp",
    "https://noivinhadebrasilia.wordpress.com/wp-content/uploads/2015/07/veu-cotovelo.jpg?w=640",
    "https://atelienataliaviana.com/wp-content/uploads/2022/04/623d517a76577c0e7d5b66995eb78ded.jpeg"
  ],


  blusher: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm90hyCxbfmzIWHDiW9P93G7FrVL4sru_1eCgioUJSGVVfS77BkrLTxFhf&s=10",
    "https://revista.icasei.com.br/wp-content/uploads/2017/03/Tudo-o-que-voce-precisa-saber-sobre-veus-abre.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEpnNwEqRthAcb8CFujwhoVib_TC4eG5jtGIPYeCKRX_fEoajGIWB7Mjy&s=10"
  ],


  pontadededo: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ZJG1XiBu5-XnE_JinJX0nk5pieYDeHT7pGdBiCcqUBNpdROqjPfnhfT8&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkPA1XPR8-bKNqr1LqEqfMpatRZ_ulSxLgJ6qvST4AbPf-OozfkwBsLU&s=10",
    "https://clubenoivas.com/wp-content/uploads/2017/11/0089E96D-36BB-4E3F-99F2-A6A2ADD641DA-788x1024.jpeg"
  ],


  ballet: [
    "https://dcdn-us.mitiendanube.com/stores/006/800/156/products/vl280055_2-745a4ed828a6a2631b17640885190191-1024-1024.webp",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4RAIxcNCA2L7B83XbifCCDMACOnz_TnmLNKIkq_DmSgluI3XOY0PudRTs4edOb9BWnZsg_qdG1pBOedxPMZMBTmM_dnwtXvTPzOp9DrnLthf7Rtviq-eAs0Y_VQQ1EK88MQEJKhIl4v4/s1600/veu+ponta+do+dedo.jpg",
    "https://cdn0.casamentos.com.br/article-vendor/0210/original/1280/jpg/16275e30-5b49-47cd-b874-02534f8e8966_13_160210-164132250210825.jpeg"
  ],


  capela: [
    "https://http2.mlstatic.com/D_NQ_NP_718425-MLA110259673430_052026-O.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4BEg9hfaKiz3V9gfM4QQL6rJ7ekgnBlFuFo-B5gx9TLxdZUoIfOv5ZM&s=10",
    "https://img.ltwebstatic.com/v4/p/spmp/2026/06/02/45/178037976595fb9dadbe92a49d216e68579c4e6d1e_thumbnail_405x552.png"
  ],


  catedral: [
    "https://blog.usealtar.com.br/wp-content/uploads/2023/12/veu-de-noiva-catedral-2.jpg",
    "https://dcdn-us.mitiendanube.com/stores/001/893/589/products/img_4681-ac13d816bc74da49f217499367351735-480-0.webp",
    "https://images.nexusapp.co/assets/4e/f2/80/111584979.jpg"
  ],

  // Grinalda
  coroa: [
    "https://acdn-us.mitiendanube.com/stores/001/086/775/products/coroa-de-noiva-758-10q1-dff49dfb46b1f516d516681199314870-640-0.webp",
    "https://http2.mlstatic.com/D_NQ_NP_808804-MLB110597221317_042026-O-coroa-tiara-noiva-delicada-casamento-debutante-linda-festa.webp",
    "https://http2.mlstatic.com/D_NQ_NP_952940-MLB111415801036_052026-O-tiara-coroa-noiva-casamento-debutante-festa-allora-noivas.webp"
  ],
  
  tiara: [
    "https://boutiquedanoiva.com.br/wp-content/uploads/2020/06/tiara-de-noiva-boho-floral.jpg",
    "https://m.media-amazon.com/images/I/71mbkoVEFvL._AC_UF1000,1000_QL80_.jpg",
    "https://noivadeluxo.com.br/wp-content/uploads/2024/07/317.png"
  ],

  guirlanda: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69-Ih-lYBrD3ZyhQpZmkBrEkcdIzPQeRT7rlVwd0KrNIZv81iBnnFPrs6&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74btpLl2rs2UBuQu3zm4LS_pe3JWXwkiHHv3WxWt3vpfvCXL9x8r9n8k5&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4POt_AJd4_hjH0GH1hP1ePee9YYVSlYzot223Y2Op7sIZ5XXNndBhpSx&s=10"
  ],

  pente: [
    "https://cdn.awsli.com.br/600x1000/630/630796/produto/36441579/fc59458a47.jpg",
    "https://boutiquedanoiva.com.br/wp-content/uploads/2019/12/pente-boho-prata.jpg",
    "https://www.pietraefiori.com.br/wp-content/uploads/2024/03/MG_7789-scaled.jpg"
  ],

  headbands: [
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQN1q9IT8VVNoNSKB3a-hPmfwBohTleTmQT8jKuOW7_2Xa6silm",
    "https://www.lulus.com/images/product/xlarge/8292301_1686676.jpg?w=375&hdpi=1",
    "https://m.media-amazon.com/images/I/71fKBjbmcBL._AC_UL450_SY450_QL70_.jpg"
  ],

  porta_coque: [
    "https://blog.reisman.com.br/wp-content/uploads/2024/12/porta-coque-683x1024.jpg",
    "https://cdn0.casamentos.com.br/usr/4/8/6/9/cfb_1075330.jpg",
    "https://a-static.mlcdn.com.br/618x463/porta-coque-p-noiva-c-strass-unidade-damasa/damasa/149/15f49c4e15d5870390b37d221c987e3b.jpg"
  ],

  presilhas_e_grampos: [
    "https://cdn.awsli.com.br/2500x2500/630/630796/produto/370230917/whatsapp-image-2023-04-09-at-11-55-34--3--901twtr3n6.jpeg",
    "https://images.nexusapp.co/assets/2d/82/37/718429063.jpg",
    "https://i.etsystatic.com/57453037/r/il/0341b0/6893119806/il_570xN.6893119806_4tzy.jpg"
  ],


  // Buquê
  buque_redondo: [
    "https://www.oficinadasflores.com/userfiles/produtos/d09b3da9d849ed5a5c3e5514a83e041d.jpg",
    "https://http2.mlstatic.com/D_NQ_NP_603493-MLB77757522162_072024-O-buque-de-noiva-redondo-azul-serenity.webp",
    "https://blog.usealtar.com.br/wp-content/uploads/2022/07/buque-redondo.jpg"
  ],

  buque_cascata: [
    "https://enrose.net/cdn/shop/files/2454ddf6237604cb9963152f4132a0d0.jpg?v=1774758499&width=1445",
    "https://s3-sa-east-1.amazonaws.com/casarpontocom-inspiracoes/wp-content/uploads/2015/12/buque-cascata-02-600x902.jpg",
    "https://taquariflores.com.br/wp-content/uploads/2024/12/buque-de-noiva-cascata-com-denphale-pink-e-angelica-600x600.jpg"
  ],
  
  buque_flor_unica: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUjPQ97HXTeBYK-q1UeeTm8NUiVGlqR5VgJpJqy3RUenChYIelpsVInk&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9YP2cLxuna1ZGrdQfebX9IPVvUrK_ouH-m07kUGKp3Ecg2A4x8u3-74Z0&s=10",
    "https://www.noivaansiosa.com.br/wp-content/uploads/2021/09/Buque-flor-unica-1.jpeg"
  ],

  buque_desconstruido: [
    "https://buongiorno.vtexassets.com/arquivos/ids/203685/BUQUE-DE-NOIVA--DESCONSTRUIDO--EM-TONS--TERROSOS-1.jpg?v=638575378063600000",
    "https://lapisdenoiva.com/wp-content/uploads/2025/02/buque-de-noiva-3.webp?x42625",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThEU6eqS2vtvoZHXiV0xLMWLoUQeDe61V5eeK_fcCFnMcI8GVP-6-MCiU&s=10"
  ],

  buque_braçada: [
    "https://inesquecivelcasamento.com.br/wp-content/uploads/2023/01/c92da5e65862964c0dfe6b073f023dc6.jpg",
    "https://blog.reisman.com.br/wp-content/uploads/2021/12/2b06f4b65e488b4142d1fe49a29756d8.jpeg",
    "https://tuttisposa.com.br/blog-imagens/wp-content/uploads/2019/07/buque-bracada.jpg"
  ],


  // Gravata
  gravata_tradicional: [
    "",
    "",
    ""
  ],

  gravata_slim: [
    "",
    "",
    ""
  ],

  gravata_ponta_reta: [
    "",
    "",
    ""
  ],

  gravata_borboleta: [
    "",
    "",
    ""
  ],


  // Lapela
  lapela_broche: [
    "",
    "",
    ""
  ],

  lapela_flor: [
    "",
    "",
    ""
  ],

  lapela_lenco: [
    "",
    "",
    ""
  ],


  // Suspensão
  cinto: [
    "",
    "",
    ""
  ],

  suspensorio_x: [
    "",
    "",
    ""
  ],

  suspensorio_y: [
    "",
    "",
    ""
  ],


  // Abotuadura
  torpedo: [
    "",
    "",
    ""
  ],

  baleia: [
    "",
    "",
    ""
  ],

  corrente: [
    "",
    "",
    ""
  ],

  barbell: [
    "",
    "",
    ""
  ],


  // Sapato
  oxford: [
    "",
    "",
    ""
  ],

  derby: [
    "",
    "",
    ""
  ],

  monk_strap: [
    "",
    "",
    ""
  ],

  loafer: [
    "",
    "",
    ""
  ],

  sapato_brogue: [
    "",
    "",
    ""
  ],


  // Vestidos
  evase: [
    "",
    "",
    ""
  ],

  sereia: [
    "",
    "",
    ""
  ],

  semi_sereia: [
    "",
    "",
    ""
  ],

  imperio: [
    "",
    "",
    ""
  ],

  reto: [
    "",
    "",
    ""
  ],

  mullet: [
    "",
    "",
    ""
  ],

  princesa: [
    "",
    "",
    ""
  ],

  brogue: [
    "",
    "",
    ""
  ],

  curto: [
    "",
    "",
    ""
  ],

  boho: [
    "",
    "",
    ""
  ],


  // Ternos
  classico: [
    "",
    "",
    ""
  ],

  slim: [
    "",
    "",
    ""
  ],

  italiano: [
    "",
    "",
    ""
  ],

  fraque: [
    "",
    "",
    ""
  ],

  meio_fraque: [
    "",
    "",
    ""
  ],

  smoking: [
    "",
    "",
    ""
  ],

  risca_de_giz: [
    "",
    "",
    ""
  ],

  gales: [
    "",
    "",
    ""
  ],

  cruzadinho: [
    "",
    "",
    ""
  ],
};


/* =========================================
   ABRIR CARD
========================================= */

function abrirCard(tipo) {

  imagensAtuais = fotosVeus[tipo] || [];


  /* Remove campos vazios */

  imagensAtuais = imagensAtuais.filter(
    imagem => imagem.trim() !== ""
  );


  /* Sempre começa na primeira foto */

  imagemAtual = 0;


  /* Caso não existam fotos */

  if (imagensAtuais.length === 0) {
    document.getElementById("modalImagem").src = "";
    document.getElementById("contadorImagem").textContent =
      "Sem imagens disponíveis";
    document.getElementById("meuModal").style.display = "flex";
    return;
  }


  /* Atualiza o carrossel */

  atualizarCarrossel();


  /* Abre o modal */

  document.getElementById("meuModal").style.display = "flex";

}


/* =========================================
   ATUALIZAR CARROSSEL
========================================= */

function atualizarCarrossel() {

  const imagem =
    document.getElementById("modalImagem");

  const contador =
    document.getElementById("contadorImagem");


  imagem.src =
    imagensAtuais[imagemAtual];


  contador.textContent =
    `${imagemAtual + 1} / ${imagensAtuais.length}`;

}


/* =========================================
   PRÓXIMA IMAGEM
========================================= */

function proximaImagem() {

  if (imagensAtuais.length === 0) {
    return;
  }


  imagemAtual++;


  /* Quando chegar ao final,
     volta para a primeira */

  if (imagemAtual >= imagensAtuais.length) {

    imagemAtual = 0;

  }


  atualizarCarrossel();

}


/* =========================================
   IMAGEM ANTERIOR
========================================= */

function imagemAnterior() {

  if (imagensAtuais.length === 0) {
    return;
  }


  imagemAtual--;


  /* Se estiver na primeira,
     vai para a última */

  if (imagemAtual < 0) {

    imagemAtual =
      imagensAtuais.length - 1;

  }


  atualizarCarrossel();

}


/* =========================================
   CONTROLAR MODAL
========================================= */

function controlarModal(abrir) {

  document.getElementById("meuModal").style.display =
    abrir ? "flex" : "none";

}


/* =========================================
   FECHAR AO CLICAR FORA
========================================= */

document
  .getElementById("meuModal")
  .addEventListener("click", function (event) {

    if (event.target === this) {

      controlarModal(false);

    }

  });


/* =========================================
   CONTROLES DO TECLADO

   ← = anterior
   → = próxima
   ESC = fechar
========================================= */

document.addEventListener("keydown", function (event) {

  const modal =
    document.getElementById("meuModal");


  /* Só executa se o modal estiver aberto */

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

});