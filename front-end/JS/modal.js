

    function abrirCard(tipo) {

      if (tipo === "voillet") {

        document.getElementById("modalTitulo").textContent = "Mais Opções:";

        document.getElementById("modalImagem-1").src =
          "https://static.wixstatic.com/media/02fdb0_4034a34591fc421a89107dbea8f4f312~mv2.jpg/v1/fill/w_480,h_654,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/02fdb0_4034a34591fc421a89107dbea8f4f312~mv2.jpg";

        document.getElementById("modalImagem-2").src =
          "https://claudia.abril.com.br/wp-content/uploads/2016/10/voilette-noivas_4.jpg?crop=1&resize=1212,909";
        
        document.getElementById("modalImagem-3").src =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEDLrcvY_iwac0_ELHhs7NhOblfMesQ6ye2GF0dc3TXh9QtjG_8wEgglM&s=10";
      }


      else if (tipo === "ombro") {

        document.getElementById("modalTitulo").textContent = "Mais Opções:";

        document.getElementById("modalImagem-1").src =
          "https://blog.usealtar.com.br/wp-content/uploads/2023/12/veu-de-noiva-ombro.jpg";

        document.getElementById("modalImagem-2").src =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT04Y7ySCWVpeXY14dARndV3Hl2__tA0R67hIqbNTUkLLc06pu2Be9hjHM&s=10";
        
        document.getElementById("modalImagem-3").src =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ABHbMgMRfNHazGHubZsV-sgIaoeLwEqvpyl88YfWSgIx2HhSXifFhuU&s=10";
      }


      else if (tipo === "cotovelo") {

        document.getElementById("modalTitulo").textContent = "Mais Opções:";

        document.getElementById("modalImagem-1").src =
          "";

        document.getElementById("modalImagem-2").src =
          "";
        
        document.getElementById("modalImagem-3").src =
          "";
      }


      else if (tipo === "blusher") {

        document.getElementById("modalTitulo").textContent = "Mais Opções:";

        document.getElementById("modalImagem-1").src =
          "";

        document.getElementById("modalImagem-2").src =
          "";
        
        document.getElementById("modalImagem-3").src =
          "";
      }


      else if (tipo === "pontadededo") {

        document.getElementById("modalTitulo").textContent = "Mais Opções:";

        document.getElementById("modalImagem-1").src =
          "";

        document.getElementById("modalImagem-2").src =
          "";
        
        document.getElementById("modalImagem-3").src =
          "";
      }


      else if (tipo === "ballet") {

       document.getElementById("modalTitulo").textContent = "Mais Opções:";

        document.getElementById("modalImagem-1").src =
          "";

        document.getElementById("modalImagem-2").src =
          "";
        
        document.getElementById("modalImagem-3").src =
          "";
      }


      else if (tipo === "capela") {

        document.getElementById("modalTitulo").textContent = "Mais Opções:";

        document.getElementById("modalImagem-1").src =
          "";

        document.getElementById("modalImagem-2").src =
          "";
        
        document.getElementById("modalImagem-3").src =
          "";
      }


      else if (tipo === "catedral") {

        document.getElementById("modalTitulo").textContent = "Mais Opções:";

        document.getElementById("modalImagem-1").src =
          "";

        document.getElementById("modalImagem-2").src =
          "";
        
        document.getElementById("modalImagem-3").src =
          "";
      }


      // ABRIR MODAL
      document.getElementById("meuModal").style.display = "flex";
    }


    function controlarModal(abrir) {

      document.getElementById("meuModal").style.display =
        abrir ? "flex" : "none";

    }

 