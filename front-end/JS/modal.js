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
    "https://http2.mlstatic.com/D_NQ_NP_606692-MLB85241183798_062025-O-veu-noiva-rosto-chapeu-voilet-vintage-tule-classico-ch1.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEDLrcvY_iwac0_ELHhs7NhOblfMesQ6ye2GF0dc3TXh9QtjG_8wEgglM&s=10"

  ],


  ombro: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPNqobXar0LNl3Daca9P7AQfV7tJXjKIpphifJOoy7zUitJVxxpSgvg8rD&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3nTWPbGosy-cDBmtK1aROCbqFYSV-d8EdThC1oMFUjphjW9GlpvQY-vQ&s=10",
    "https://pt.lunss.com/uploads/product/0/1/01021/short-pearl-raw-cut-wedding-veil-2.webp"
  ],


  cotovelo: [
    "https://pt.lunss.com/uploads/product/0/1/01040/two-tier-corded-lace-edge-elbow-length-short-bridal-veil-1.webp",
    "https://www.princessly.com/cdn/shop/products/2-layers-elbow-length-lace-wedding-veil-823_1024x1024.jpg?v=1669101837",
    "https://atelienataliaviana.com/wp-content/uploads/2022/04/623d517a76577c0e7d5b66995eb78ded.jpeg"
  ],


  blusher: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm90hyCxbfmzIWHDiW9P93G7FrVL4sru_1eCgioUJSGVVfS77BkrLTxFhf&s=10",
    "https://images.tcdn.com.br/img/img_prod/1275784/veu_de_noiva_cascata_laisa_1_300cm_755_1_2b6fb5facb5099f91dc2a884e6dacd61.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEpnNwEqRthAcb8CFujwhoVib_TC4eG5jtGIPYeCKRX_fEoajGIWB7Mjy&s=10"
  ],


  pontadededo: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkPA1XPR8-bKNqr1LqEqfMpatRZ_ulSxLgJ6qvST4AbPf-OozfkwBsLU&s=10",
    "https://i.etsystatic.com/54481890/r/il/6ea913/7011027824/il_340x270.7011027824_ctiv.jpg",
    "https://clubenoivas.com/wp-content/uploads/2017/11/0089E96D-36BB-4E3F-99F2-A6A2ADD641DA-788x1024.jpeg"
  ],


  ballet: [
    "https://dcdn-us.mitiendanube.com/stores/006/800/156/products/vl280055_2-745a4ed828a6a2631b17640885190191-1024-1024.webp",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4RAIxcNCA2L7B83XbifCCDMACOnz_TnmLNKIkq_DmSgluI3XOY0PudRTs4edOb9BWnZsg_qdG1pBOedxPMZMBTmM_dnwtXvTPzOp9DrnLthf7Rtviq-eAs0Y_VQQ1EK88MQEJKhIl4v4/s1600/veu+ponta+do+dedo.jpg",
    "https://blog.usealtar.com.br/wp-content/uploads/2023/12/veu-de-noiva-valsa.webp"
  ],


  capela: [
    "https://http2.mlstatic.com/D_NQ_NP_718425-MLA110259673430_052026-O.webp",
    "https://i.pinimg.com/736x/99/6f/9c/996f9ccfa72f51b141ee14607a3719e0.jpg",
    "https://img.ltwebstatic.com/v4/p/spmp/2026/06/02/45/178037976595fb9dadbe92a49d216e68579c4e6d1e_thumbnail_405x552.png"
  ],


  catedral: [
    "https://blog.usealtar.com.br/wp-content/uploads/2023/12/veu-de-noiva-catedral-2.jpg",
    "https://canary.contestimg.wish.com/api/webimage/5a542e515cc9a67692bb04c1-large.jpg?cache_buster=0af98632ac54b7c1ad07f69187f38821",
    "https://images.nexusapp.co/assets/4e/f2/80/111584979.jpg"
  ],

  // Grinalda
  coroa: [
    "https://acdn-us.mitiendanube.com/stores/001/086/775/products/coroa-de-noiva-758-10q1-dff49dfb46b1f516d516681199314870-640-0.webp",
    "https://i.pinimg.com/736x/4e/d6/c3/4ed6c3ec0c8cc1e9e8cfc4d543669f22.jpg",
    "https://http2.mlstatic.com/D_NQ_NP_808804-MLB110597221317_042026-O-coroa-tiara-noiva-delicada-casamento-debutante-linda-festa.webp"
  ],
  
  tiara: [
    "https://boutiquedanoiva.com.br/wp-content/uploads/2020/06/tiara-de-noiva-boho-floral.jpg",
    "https://http2.mlstatic.com/D_NQ_NP_656657-MLM42057227134_062020-O.webp",
    "https://tudocommoda.com/wp-content/uploads/2020/02/35-noiva-com-tiara-delicada.jpg"
  ],

  guirlanda: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74btpLl2rs2UBuQu3zm4LS_pe3JWXwkiHHv3WxWt3vpfvCXL9x8r9n8k5&s=10",
    "https://http2.mlstatic.com/D_NQ_NP_865638-MLB52009029010_102022-O.webp",
    "https://i.pinimg.com/736x/99/95/07/999507e807d97c2d773971a860a4575c.jpg"
  ],

  pente: [
    "https://boutiquedanoiva.com.br/wp-content/uploads/2019/12/pente-boho-prata.jpg",
     "https://i.etsystatic.com/12885825/r/il/0d3ef9/3179537261/il_794xN.3179537261_kmq8.jpg",
    "https://bridalstylesboutique.com/cdn/shop/products/AirBrush_20220527122539.jpg?v=1653671230&width=1080"
  ],

  headbands: [
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQN1q9IT8VVNoNSKB3a-hPmfwBohTleTmQT8jKuOW7_2Xa6silm",
    "https://i.etsystatic.com/22979256/r/il/a100b3/5027683965/il_fullxfull.5027683965_ai64.jpg",
    "https://m.media-amazon.com/images/I/71fKBjbmcBL._AC_UL450_SY450_QL70_.jpg"
  ],

  porta_coque: [
    "https://blog.reisman.com.br/wp-content/uploads/2024/12/porta-coque-683x1024.jpg",
    "https://tse2.mm.bing.net/th/id/OIP.Pqf0roGzmbNkfQ4E8EEM-AHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://a-static.mlcdn.com.br/618x463/porta-coque-p-noiva-c-strass-unidade-damasa/damasa/149/15f49c4e15d5870390b37d221c987e3b.jpg"
  ],

  presilhas_e_grampos: [
    "https://cdn.awsli.com.br/2500x2500/630/630796/produto/370230917/whatsapp-image-2023-04-09-at-11-55-34--3--901twtr3n6.jpeg",
    "https://i.etsystatic.com/57453037/r/il/0341b0/6893119806/il_570xN.6893119806_4tzy.jpg",
    "https://images.nexusapp.co/assets/2d/82/37/718429063.jpg",
  ],


  // Buquê
  buque_redondo: [
    "https://taquariflores.com.br/wp-content/uploads/2024/12/Buque-de-Noiva-Redondo-com-Gipsofila.jpg",
    "https://http2.mlstatic.com/D_NQ_NP_603493-MLB77757522162_072024-O-buque-de-noiva-redondo-azul-serenity.webp",
    "https://taquariflores.com.br/wp-content/uploads/2025/02/buque-de-noiva-redondo-com-girassois.jpg"
  ],

  buque_cascata: [
    "https://s3-sa-east-1.amazonaws.com/casarpontocom-inspiracoes/wp-content/uploads/2015/12/buque-cascata-05-600x901.jpg",
    "https://ohflordelicadezas.com/wp-content/uploads/2026/01/Buque-de-noiva-cascata-2.png",
    "https://tse3.mm.bing.net/th/id/OIP.cBb1hUli4nJP5sQ-NIVoEQHaJ3?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  ],
  
  buque_flor_unica: [
    "https://blog.reisman.com.br/wp-content/uploads/elementor/thumbs/e051270ad32fdf33d6bd1169a34df706-pgmzh5ia0samfaus3cyckpok5lmi61g49n6y1up78s.jpeg",
    "https://static.novaflor.com.br/images/product/33516gg2.jpg",
    "https://www.noivaansiosa.com.br/wp-content/uploads/2021/09/Buque-flor-unica-1.jpeg"
  ],

  buque_desconstruido: [
    "https://lapisdenoiva.com/wp-content/uploads/2025/02/buque-de-noiva-3.webp?x42625",
        "https://buongiorno.vtexassets.com/arquivos/ids/203685/BUQUE-DE-NOIVA--DESCONSTRUIDO--EM-TONS--TERROSOS-1.jpg?v=638575378063600000",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThEU6eqS2vtvoZHXiV0xLMWLoUQeDe61V5eeK_fcCFnMcI8GVP-6-MCiU&s=10"
  ],

  buque_braçada: [
    "https://inesquecivelcasamento.com.br/wp-content/uploads/2023/01/c92da5e65862964c0dfe6b073f023dc6.jpg",
        "https://www.internacionalflores.com.br/wp-content/uploads/2019/08/bq-bracada-de-astromelias.jpg",
    "https://tuttisposa.com.br/blog-imagens/wp-content/uploads/2019/07/buque-bracada.jpg",

  ],


  // Gravata
  gravata_tradicional: [
    "https://images-na.ssl-images-amazon.com/images/I/611v92AM55L._AC_UL600_SR600,600_.jpg",
    "https://d1o6h00a1h5k7q.cloudfront.net/imagens/img_m/31385/15469752.jpg",
    "https://m.media-amazon.com/images/I/41iBTsqa3jL._AC_SY350_.jpg"
  ],

  gravata_slim: [
    "https://img.lojasrenner.com.br/item/581445251/large/12.jpg",
    "https://a-static.mlcdn.com.br/800x600/gravata-slim-fit-lisa-bege-formatura-e-casamento-kaylong/nettuno/95048n/0d72f11019a9f32b1e6340df41031594.jpeg",
    "https://tudocommoda.com/wp-content/uploads/2016/03/gravata-slim-n%C3%B3.jpg"
  ],

  gravata_ponta_reta: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjqmrBL7JlyGnfmPX5NyBTZ1AYmqhOlQD7Q4C3REuPlX-_YGNyZeluOw&s=10",
    "https://cdn.awsli.com.br/2500x2500/491/491087/produto/257640321/gravata-slim-croche-trico-cinza-chumbo--5--z8ljjh2sy1.png",
    "https://www.figaret.com/cdn/shop/files/10ACRTRICOTXSE0001-3.jpg?v=1738242760"
  ],

  gravata_borboleta: [
    "https://images.tcdn.com.br/img/img_prod/743485/gravata_borboleta_marrom_masculina_classica_elegante_7828_1_ce9c4a0fdd6cc8922e8dd66f301747dc.jpg",
    "https://cdn.vnda.com.br/ofrancesgravataria/2023/05/05/15_5_8_800_Gravata_Borboleta_Essential_Sand_2023_2.jpg?v=1683309899",
    "https://www.alastra.com.br/cdn/shop/files/GravataBorboletaVermelha.jpg?v=1776090142"
  ],


  // Lapela
  lapela_broche: [
    "https://mrmaximus.com.br/cdn/shop/files/Sb6570523de8f4b6fa80dd8c1b059c616a.webp?v=1715438554&width=800",
    "https://cdn.vnda.com.br/ofrancesgravataria/2017/09/08/pidl000002-pin-de-lapela-olive-864.jpg?v=1504895370",
    "https://mrmaximus.com.br/cdn/shop/files/Sddc0eabaa3c14dfcbb45876f5f072b60R.webp?v=1742302272&width=800"
  ],

  lapela_flor: [
    "https://cdn.vnda.com.br/floradeserie/2023/04/18/12_4_4_429_LAPELA20AcessC3B3rios20Noivas20e20Noivos20204.jpg?v=1681832936",
    "https://noivinhaflor.com.br/wp-content/uploads/2023/05/WhatsApp-Image-2023-03-06-at-10.25.50.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6uQABQrK8RiwASj80GdzLSh8nmM3gzEEfqsmgZH1xpvPyZkc9Cc6dlVzV&s=10"
  ],

  lapela_lenco: [
    "https://media.istockphoto.com/id/2186823894/pt/foto/navy-blue-pocket-square-elegantly-tucked-into-the-pocket-of-a-plaid-suit-jacket.jpg?s=612x612&w=0&k=20&c=cxm7aICj6ZWIMIcPjYzQE5pbBNpmb4P8qVf3FB8YJ_4=",
    "https://acdn-us.mitiendanube.com/stores/450/224/products/presidente-lenco-2720d-cinza1-828aa5d983a4ef121f16879896261607-640-0.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEl8VSAHe_EYqjQRimpcTJ_RL8L36S-3w7LQ_w7xJE_IKnezdqFUMHvg0&s=10"
  ],


  // Suspensão
  cinto: [
    "https://img.irroba.com.br/fit-in/600x600/filters:format(webp):fill(fff):quality(80)/madokcom/catalog/0412-caramelo.jpg",
    "https://grupooscar.vtexassets.com/arquivos/ids/10688396/Couro-Mania-Cinto-351145-1-Preto_Cafe-Pu5.jpg?v=639021161594300000",
    "https://http2.mlstatic.com/D_NQ_NP_939530-MLB99730579613_112025-O-cinto-masculino-140ao150-em-couro-100-casual-social-preto.webp"
  ],

  suspensorio_x: [
    "https://www.comofazeremcasa.net/wp-content/uploads/2013/07/como-fazer-suspensorio-presente-9.jpg",
    "https://m.media-amazon.com/images/I/41VXqJ7tswL._AC_SY1000_.jpg",
    "https://cdn0.casamentos.com.br/usr/6/9/7/3/cfb_391790.jpg"
  ],

  suspensorio_y: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnNPmoEYYCBzP_ddsjFEmhw0j4gNBr9QUdOACutWBPWjGqyzIEI40htNO&s=10",
    "https://m.media-amazon.com/images/I/31bMNuKBJSL._AC_.jpg",
    "https://viaveneto.com.br/cdn/shop/files/SUREESA23001_01_3.jpg?v=1773422146&width=533"
  ],


  // Abotuadura
  torpedo: [ 
    "https://http2.mlstatic.com/D_NQ_NP_761429-MLB105407777048_012026-O-abotoadura-masculina-p-camisa-social-punho-duplo-c-estojo.webp",
    "https://acdn-us.mitiendanube.com/stores/776/326/products/img_3832-8e610f48ff3194ae3f17056733954425-1024-1024.webp",
    "https://www.aceitosim.com.br/wp-content/uploads/2018/03/abotoadura-para-noivos.jpg"
  ],

  baleia: [
    "https://azhul.com.br/cdn/shop/products/Sce9433fb0d50490ca8facfe726ee39a6L_92633a29-10e5-4381-98ce-fc5f7537c48d.jpg?v=1680626044&width=144501335.jpg?v=1724161696",
    "https://baiqueaccessories.com/wp-content/uploads/whale-back-cufflinks.png",
    "https://tse3.mm.bing.net/th/id/OIP.KX28L0vR_U_nEGArmKICGgHaLH?r=0&w=600&h=900&rs=1&pid=ImgDetMain&o=7&rm=3"
  ],

  corrente: [
    "https://tse3.mm.bing.net/th/id/OIP.MpYrPrDkQDZblSVAXqXeugHaJQ?r=0&pid=ImgDet&w=184&h=230&c=7&dpr=1,3&o=7&rm=3",
    "https://i.etsystatic.com/23473689/r/il/bab746/7232859246/il_570xN.7232859246_87be.jpg",
    "https://i.etsystatic.com/12278175/r/il/d4220d/2435900824/il_fullxfull.2435900824_9hkl.jpg"
  ],

  barbell: [
    "https://img.vuahanghieu.com/unsafe/0x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/news/content/2025/07/khuy-mang-set-la-gi-cach-su-dung-khuy-mang-set-dung-cach-1-jpg-1752035409-09072025113009.jpg",
     "https://a.1stdibscdn.com/tiffany-co-sterling-silver-figural-globe-barbell-cufflinks-for-sale/j_8493/j_281565421765923795166/j_28156542_1765923795589_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=640",
    "https://www.chicagostyleweddings.com/wp-content/uploads/2019/06/Robey-3604.jpg",
   
  ],


  // Sapato
  oxford: [
    "https://assets.sistemawbuy.com.br/arquivos/cd807b26707aff729e16a68e7fd35c27/produtos/650335ac3172e/126306-cinza-68ff90a76d97c_mini.jpeg",
    "https://cdn.awsli.com.br/1500x1500/1423/1423033/produto/383299365/30001-2-0rum4ymjmy.jpg",
    "https://blog.difrancacalcados.com.br/wp-content/uploads/2024/07/image-40-683x1024.png",
    
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
    "https://www.deboranoivas.com.br/wp-content/uploads/2025/08/www.deboranoivas.com.br-uc-02-06--500x780.jpg",
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
    "https://revista.icasei.com.br/wp-content/uploads/2025/08/vestido-de-noiva-corte-imperio-1.jpeg",
    "https://i.ebayimg.com/images/g/-MkAAeSwszZqKMUC/s-l1200.webp",
    "https://atelienataliaviana.com/wp-content/uploads/2022/02/lucky_star-01-b_1691x-768x1024.webp"
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
    "https://acdn-us.mitiendanube.com/stores/655/369/products/vestido-ombro-noiva-1-5ad6b631800ce2491a17103601160095-1024-1024.webp",
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
    "https://cdn0.casamentos.com.br/usr/5/5/4/8/cfb_2x_1067716.jpg",
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


  // Sapatos Noivas

SapatosNoiva: [
  "https://chibinski.com.br/cdn/shop/files/SCB07NVEBA2-S7_2.jpg?v=1788273818&width=1946",
  
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWPaoKztBymQKJcCVLGEN0pTWk5yaOi4SAx-C2rbK-FQ&s=10"
]

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