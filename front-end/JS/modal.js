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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4nhH-IW6JD8uN92-6fTnm3RdpWkcoNh1OwqvRrDd9w&s=10",
    "https://http2.mlstatic.com/D_NQ_NP_887660-MLB110350988891_042026-O-sapato-derby-masculino-social-couro-nobre-natural-legitimo.webp"
  ],

  monk_strap: [
    "https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lsfg3tc435jx15",
    "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/manutt/media/uploads/produtos/foto/lenbclup/inserir-um-subtitulo-21.jpg",
    "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/villione/media/uploads/produtos/foto/luerbnfw/1000x1000__0010_monk-strap-2.jpg"
  ],

  loafer: [
    "https://www.louie.com.br/loja/image/cache/data/colecao-2024/LOOKS-SITE/loafer-matteo-look-7-550x550.jpg",
    "https://img.irroba.com.br/filters:fill(fff):quality(80)/jacomett/catalog/produtos/5172-preto/5172-preto-2.jpg",
    "https://www.louie.com.br/loja/image/cache/data/colecao-2025/LOOKS/look-groutie-cam-1-550x550.jpg"
  ],

  brogue: [
    "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/enrico/media/uploads/produtos/foto/ohyegyyt/sapato-social-wingtip-derby-brogue-masculino-boaretto-marrom-conhaque-9.jpg",
    "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/wallford/media/uploads/produtos/foto/uxqsgift/9c0a2c39-0b8b-4486-9fc0-6d7087d6f800.png",
    "https://img.irroba.com.br/filters:fill(fff):quality(80)/jacomett/catalog/produtos/mch005-preto/mch005-preto-2.jpg"
  ],


  // Vestidos
  evase: [
    "https://tuttisposa.com.br/wp-content/uploads/2024/01/MT3237-ivory-tea-rose-b-scaled.jpg",
    "https://tuttisposa.com.br/wp-content/uploads/2022/12/Y22273_F22_Campaign_0372.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFu5vJGhJUkJP4vB985F7Vp6ecJasgw0bfYJCXBIgZNSSafzZD7-_xIoPf&s=10"
  ],

  sereia: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUyWdg3O_bn15jg6xxjyUj00BJNdB_4-pU3heARKer1I6Py9wx8BVzZrwU&s=10",
    "https://http2.mlstatic.com/D_NQ_NP_679205-MLB110157766836_042026-O-vestido-de-noiva-sereia-iser2-queen-manga-longa-renda-cauda.webp",
    "https://tuttisposa.com.br/wp-content/uploads/2022/12/Y22262_F22_Campaign_5670.jpg"
  ],

  semi_sereia: [
    "https://acdn-us.mitiendanube.com/stores/001/205/666/products/design-sem-nome-2025-10-16t095046-080-56bbcb0c62f9991ad617606190417403-480-0.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ6tRc8OWldz_jCktIl3OU9V9aA6asFDxTxA5ni1hRCh3MqvIZrBlqHO8&s=10",
    "https://static.wixstatic.com/media/fb4cf6_805069f357e145eebaee0b289afa800e~mv2_d_2419_3629_s_4_2.jpg/v1/fill/w_1110,h_1665,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb4cf6_805069f357e145eebaee0b289afa800e~mv2_d_2419_3629_s_4_2.jpg"
  ],

  imperio: [
    "https://revista.icasei.com.br/wp-content/uploads/2025/08/vestido-de-noiva-corte-imperio-2.jpeg",
    "https://i.ebayimg.com/images/g/-MkAAeSwszZqKMUC/s-l1200.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHejcQz90QgcMEtwcHaCNvu1eAA9QoqBF25BW3-SOne39SyFM9D9HMgPY&s=10"
  ],

  reto: [
    "https://atelienataliaviana.com/wp-content/uploads/2022/03/3499127844e315d1eb060d223ccb0aaa.jpeg",
    "https://lapisdenoiva.com/wp-content/uploads/2025/01/Lynn-Shapiro-Photography-_Easy-Resize.com_.jpg?x42625",
    "https://tudocommoda.com/wp-content/uploads/2020/03/15-vestido-de-noiva-reto-com-decote-sem-al%C3%A7as.jpg"
  ],

  mullet: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGXcpqV6tvSNoLBszoD7kret0s0Qoy09CK07KJ_Kbt9ZnJqU5L1rRURE&s=10",
    "https://http2.mlstatic.com/D_707673-MLB114438230715_072026-O.jpg",
    "https://cdn0.casamentos.com.br/usr/1/4/4/3/cfb_2x_594040.jpg"
  ],

  princesa: [
    "https://http2.mlstatic.com/D_NQ_NP_626924-MLB96204108608_102025-O-vestido-noiva-princesa-manga-longa-romntico-luxo-bordado.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjBXp0IAvzBzMenQOYzjACTQyeOH0wq8WhKznrDDJWwO_528R8jnLaS0Ec&s=10",
    "https://atelienataliaviana.com/wp-content/uploads/2022/01/cda80cf763e495a6dbbabf69c886520a.jpg"
  ],

  curto: [
    "https://images.tcdn.com.br/img/img_prod/586312/vestido_simples_curto_civil_com_detalhe_costas_1443_1_cd0cda26e6869a43b4f8ef1f240c6ff3.jpg",
    "https://a-static.mlcdn.com.br/450pxx450px/vestido-noiva-curto-debutante-15-anos-com-peito-de-renda-augui-noiva/auguicabeloefesta/9442594606/f7aa34b1c74a319d9ac337c1f7619095.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rpUAbII7H9_FQ0Ks5wEBRndKAAYPzvSqa5UrNz-74JEE0lQwyeq7rWrV&s=10"
  ],

  boho: [
    "https://www.deboranoivas.com.br/wp-content/uploads/2024/10/www.deboranoivas.com.br-img-3824-500x780.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14NWKdw1ODFSaAdOVUIDBaaTXxre36NrPpQhCRDzAuyGzNghpvxEX5AqN&s=10",
    "https://http2.mlstatic.com/D_709615-MLB85114602572_052025-O.jpg"
  ],


  // Ternos
  classico: [
    "https://www.deboranoivas.com.br/wp-content/uploads/2025/05/www.deboranoivas.com.br-lucashenriqueph-68-500x780.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_EQtfRzi7WjMuAyGc37gZxeGx9ptL0eoo1UV9Ys2UeInmC9_4omR2g7Bj&s=10",
    "https://onefabday.com/wp-content/uploads/2025/10/Sheena_T_Photography_-_Anna__Conall_Wedding-52.jpg?w=1024"
  ],

  slim: [
    "https://blog.noivah.com.br/wp-content/uploads/2024/07/slim-fit-683x1024.jpg",
    "https://blacktie.com.br/wp-content/uploads/2024/03/WhatsApp-Image-2024-01-30-at-14.45.56-1.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuxakvFtGqeY1MdpISwss0GxwIAnS73_s0Rd-WSLeImWM6mWZUBwllg&s=10"
  ],

  italiano: [
    "https://http2.mlstatic.com/D_NQ_NP_920576-MLB90548579170_082025-O-terno-masculino-plus-italiano-noivo-poliviscose-elastano.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlR1vQqG5wCi-6AcwxcME5whkbON2FSkM0ksSQXfCmDgChNiGr9DHeHew&s=10",
    "https://mazzinistore.com.br/cdn/shop/files/freepik__enhance__17179.png?v=1757945816&width=2000"
  ],

  fraque: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6vBeJA7apa9AnDDjw2nxHOtcQEDZTJvH-cim79eW3KMp2Zi4Q6_bUcNq7&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwTVG8jDFfURgA1OMeQpaiLEPbffMSvlGIF6NSp4Fkg&s=10",
    "https://http2.mlstatic.com/D_716936-MLB111760033185_052026-C.jpg"
  ],

  meio_fraque: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWa8sSjxbslIjEY7HjdYq2o9F6Ga5D-7iUP627orAP_kDLyveQlwwR4bf&s=10",
    "https://www.srestilo.com.br/arquivos/produtos/produto_capa-56.jpg",
    "https://rosesnoivas.com.br/wp-content/uploads/2024/08/TERNO-AZUL-SERENITY-NOIVO-PADRINHO-2-scaled.jpg"
  ],

  smoking: [
    "https://http2.mlstatic.com/D_NQ_NP_944988-MLB105803771646_022026-O-para-terno-smoking-do-noivo-3-pecas.webp",
    "https://http2.mlstatic.com/D_NQ_NP_791383-MLB97912410948_112025-O.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThnu66aU_3uZXwqtXum7O8kDNd5FyS429hmJ5TDRfGYSxpid2s8sUrnPF2&s=10"
  ],

  risca_de_giz: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVnTriQWCHMSEoLjHaTj9QxSw3ny1dE_4kTOrexpZBgh1HAkQeTyyk4gok&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxmXxP5mM557KjzU2I-keXDRAxy9-qVzvzgAX1CmsDf9XkguntotAk16s&s=10",
    "https://tudocommoda.com/wp-content/uploads/2016/12/terno-risca-de-giz-casamento.jpg"
  ],

  gales: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTPSbKnOC8RyjIdB5liDV7CI3RnoIHiQ6ty0aD60q9zCWUXvzGwgue-APM&s=10",
    "https://http2.mlstatic.com/D_NQ_NP_940202-MLB116586548361_082026-O-terno-italiano-xadrez-principe-de-gales.webp",
    "https://usemister.cdn.magazord.com.br/img/2026/01/produto/1678/img-3329.jpg?ims="
  ],

  cruzadinho: [
    "https://i.etsystatic.com/32206548/r/il/0d1949/5257239175/il_570xN.5257239175_fbq6.jpg",
    "https://www.constancezahn.com/wp-content/uploads/2017/03/0003-constance-zahn-abotoamento-cruzado-traje-noivo.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToOm28AOltGsfOFJ5NF_g2K1JmTSvZjYrMKz_LXpi_mFG5nG_d93LZdtM&s=10"
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