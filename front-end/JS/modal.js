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
    "https://images-na.ssl-images-amazon.com/images/I/611v92AM55L._AC_UL600_SR600,600_.jpg",
    "https://d1o6h00a1h5k7q.cloudfront.net/imagens/img_m/31385/15469752.jpg",
    "https://a-static.mlcdn.com.br/450pxx450px/gravata-tradicional-luxo-homens-slim-fit-ref-253-hero-men/stylestoremodas/1a8b3eb88df011ed90894201ac185019/85bf1fa8b741f43c04a70e328f7ffef2.jpeg"
  ],

  gravata_slim: [
    "https://img.lojasrenner.com.br/item/581445251/large/12.jpg",
    "https://a-static.mlcdn.com.br/800x600/gravata-slim-fit-lisa-bege-formatura-e-casamento-kaylong/nettuno/95048n/0d72f11019a9f32b1e6340df41031594.jpeg",
    "https://tudocommoda.com/wp-content/uploads/2016/03/gravata-slim-n%C3%B3.jpg"
  ],

  gravata_ponta_reta: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPUHJSo02h_OxjsJbxhV0e5Q1ilZ1JdvERTQpB_FBt3Bg7kSoM1ARh5KL&s=10",
    "https://cdn.awsli.com.br/2500x2500/491/491087/produto/257640321/gravata-slim-croche-trico-cinza-chumbo--5--z8ljjh2sy1.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPrmAMQrAgnjYE5Dr-wddrBMDlSvdxO3EPch3yrC30AURsd8xHU1o-36h4&s=10"
  ],

  gravata_borboleta: [
    "https://images.tcdn.com.br/img/img_prod/743485/gravata_borboleta_marrom_masculina_classica_elegante_7828_1_ce9c4a0fdd6cc8922e8dd66f301747dc.jpg",
    "https://images.tcdn.com.br/img/img_prod/489490/gravata_borboleta_preta_fosca_infantil_para_pajens_3_20260807171001_74359c9ddaff.jpg",
    "https://www.alastra.com.br/cdn/shop/files/GravataBorboletaVermelha.jpg?v=1776090142"
  ],


  // Lapela
  lapela_broche: [
    "https://mrmaximus.com.br/cdn/shop/files/Sb6570523de8f4b6fa80dd8c1b059c616a.webp?v=1715438554&width=800",
    "https://mrmaximus.com.br/cdn/shop/files/Sddc0eabaa3c14dfcbb45876f5f072b60R.webp?v=1742302272&width=800",
    "https://i.etsystatic.com/54717487/r/il/7f3539/6990175174/il_570xN.6990175174_d99i.jpg"
  ],

  lapela_flor: [
    "https://cdn.vnda.com.br/floradeserie/2023/04/18/12_4_4_429_LAPELA20AcessC3B3rios20Noivas20e20Noivos20204.jpg?v=1681832936",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0RXgbl5qSyhg8DQ4Yg9IEcyE5Z16wLeyouIBJzgOFXjh2qlUYSeEoRr0&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6uQABQrK8RiwASj80GdzLSh8nmM3gzEEfqsmgZH1xpvPyZkc9Cc6dlVzV&s=10"
  ],

  lapela_lenco: [
    "https://media.istockphoto.com/id/2194977479/pt/foto/elegant-businessman-wearing-a-blue-pocket-square-and-matching-tie.jpg?s=612x612&w=0&k=20&c=WQ8wPy_qFPykjBydGT_6pwyeJFliSmgyaYaw_b5woG8=",
    "https://media.istockphoto.com/id/2186823894/pt/foto/navy-blue-pocket-square-elegantly-tucked-into-the-pocket-of-a-plaid-suit-jacket.jpg?s=612x612&w=0&k=20&c=cxm7aICj6ZWIMIcPjYzQE5pbBNpmb4P8qVf3FB8YJ_4=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEl8VSAHe_EYqjQRimpcTJ_RL8L36S-3w7LQ_w7xJE_IKnezdqFUMHvg0&s=10"
  ],


  // Suspensão
  cinto: [
    "https://pegada.vtexassets.com/arquivos/ids/180574/Cintos-Pegada-Masculino-em-Elastico-e-Couro-Cinza-CI002345-11--3-.jpg?v=638990663831370000",
    "https://grupooscar.vtexassets.com/arquivos/ids/10688396/Couro-Mania-Cinto-351145-1-Preto_Cafe-Pu5.jpg?v=639021161594300000",
    "https://images.tcdn.com.br/img/img_prod/747651/cinto_feminino_em_couro_legtimo_reale_1_20251015171117_28edb793744f.jpg"
  ],

  suspensorio_x: [
    "https://m.media-amazon.com/images/I/41nxUtjkuUL._AC_SY1000_.jpg",
    "https://m.media-amazon.com/images/I/41VXqJ7tswL._AC_SY1000_.jpg",
    "https://m.media-amazon.com/images/I/610+j8WBDqL._AC_UF894,1000_QL80_.jpg"
  ],

  suspensorio_y: [
    "https://img.kwcdn.com/product/fancy/20213ff5-c6a6-4944-ac27-d1122f366157.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
    "https://m.media-amazon.com/images/I/31bMNuKBJSL._AC_.jpg",
    "https://viaveneto.com.br/cdn/shop/files/SUREESA23001_01_3.jpg?v=1773422146&width=533"
  ],


  // Abotuadura
  torpedo: [
    "https://acdn-us.mitiendanube.com/stores/776/326/products/img_3832-8e610f48ff3194ae3f17056733954425-1024-1024.webp",
    "https://http2.mlstatic.com/D_NQ_NP_761429-MLB105407777048_012026-O-abotoadura-masculina-p-camisa-social-punho-duplo-c-estojo.webp",
    "https://acdn-us.mitiendanube.com/stores/776/326/products/img_3869-66da1ed3b8ffc72f9f17056740306429-1024-1024.webp"
  ],

  baleia: [
    "https://baiqueaccessories.com/wp-content/uploads/whale-back-cufflinks.png",
    "https://www.cufflinkman.co.uk/cdn/shop/products/james-kinross-cufflinks-carbon-reflections-cufflinks-42588525101335.jpg?v=1724161696",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxUJL0MDnt0GI3AYcZNJImDGuwGVkiz2EFy29Qx9c7PCGf8QzZXhsfxUg&s=10"
  ],

  corrente: [
    "https://http2.mlstatic.com/D_NQ_NP_708282-MLB78301030665_082024-O-abotoaduras-folhadas-a-ouro-krementz-usa-antigas.webp",
    "https://i.etsystatic.com/23473689/r/il/bab746/7232859246/il_570xN.7232859246_87be.jpg",
    "https://s3-sa-east-1.amazonaws.com/arrematearte-farm/cristinagoston/lot_photos/62929/b85c8f0f3eefde5932a8ee35ee53536b0bc73d53_ms.JPG?1508119701"
  ],

  barbell: [
    "https://i0.wp.com/www.canalmasculino.com.br/wp-content/uploads/2014/02/abotoaduras_the_barbell1.jpg",
    "https://a.1stdibscdn.com/archivesE/upload/j_548/j_20233231476807995476/395_1_223_c_master.jpg",
    "https://a.1stdibscdn.com/tiffany-co-sterling-silver-figural-globe-barbell-cufflinks-for-sale/j_8493/j_281565421765923795166/j_28156542_1765923795589_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=640"
  ],


  // Sapato
  oxford: [
    "https://assets.sistemawbuy.com.br/arquivos/cd807b26707aff729e16a68e7fd35c27/produtos/650335ac3172e/126306-cinza-68ff90a76d97c_mini.jpeg",
    "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/majorano/media/uploads/produtos/foto/nrwpixzi/sapato-masculino-oxford-maurizio-tan.jpg",
    "https://cdn.awsli.com.br/1500x1500/1423/1423033/produto/383299365/30001-2-0rum4ymjmy.jpg"
  ],

  derby: [
    "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/enrico/media/uploads/produtos/foto/tumaqudy/sapato-social-derby-sola-de-couro-masculino-preto-boaretto-2.jpg",
    "",
    "https://http2.mlstatic.com/D_NQ_NP_887660-MLB110350988891_042026-O-sapato-derby-masculino-social-couro-nobre-natural-legitimo.webp"
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