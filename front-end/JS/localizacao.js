 var mapa;
    var minhaPosicao = null;
    var marcadores = [];

    // O Google chama esta função quando termina de carregar
    function iniciar() {
      mapa = new google.maps.Map(document.getElementById("mapa"), {
        center: { lat: -14.2, lng: -51.9 }, // centro do Brasil
        zoom: 4
      });

      // Pede a localização da pessoa
      if (!navigator.geolocation) {
        document.getElementById("mensagem").textContent = "Seu navegador não suporta localização.";
        return;
      }

      document.getElementById("mensagem").textContent = "Buscando sua localização...";
      navigator.geolocation.getCurrentPosition(achouLocal, erroLocal);
    }

    function achouLocal(posicao) {
      minhaPosicao = {
        lat: posicao.coords.latitude,
        lng: posicao.coords.longitude
      };

      mapa.setCenter(minhaPosicao);
      mapa.setZoom(13);

      // Marcador azul mostra onde a pessoa está
      new google.maps.Marker({
        position: minhaPosicao,
        map: mapa,
        title: "Você está aqui",
        icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
      });

      document.getElementById("mensagem").textContent = "Pronto! Agora digite o que você procura.";
    }

    function erroLocal() {
      document.getElementById("mensagem").textContent =
        "Não foi possível pegar sua localização. Permita o acesso no navegador e recarregue a página.";
    }

    async function buscarLojas() {
      var mensagem = document.getElementById("mensagem");
      var lista = document.getElementById("lista");
      var texto = document.getElementById("busca").value;

      if (texto == "") {
        mensagem.textContent = "Digite o que você procura.";
        return;
      }

      if (minhaPosicao == null) {
        mensagem.textContent = "Ainda não temos sua localização. Permita o acesso e recarregue a página.";
        return;
      }

      mensagem.textContent = "Procurando...";
      lista.innerHTML = "";

      // Apaga os marcadores da busca anterior
      for (var i = 0; i < marcadores.length; i++) {
        marcadores[i].setMap(null);
      }
      marcadores = [];

      try {
        var biblioteca = await google.maps.importLibrary("places");

        // Procura lojas perto da pessoa, das mais próximas para as mais distantes
        var resultado = await biblioteca.Place.searchByText({
          textQuery: texto,
          fields: ["displayName", "location", "formattedAddress", "rating"],
          locationBias: minhaPosicao,
          rankPreference: "DISTANCE",
          maxResultCount: 10,
          language: "pt-BR"
        });

        var lojas = resultado.places;

        if (lojas.length == 0) {
          mensagem.textContent = "Não encontramos lojas perto de você para essa busca.";
          return;
        }

        mensagem.textContent = "Lojas perto de você:";

        for (var j = 0; j < lojas.length; j++) {
          var loja = lojas[j];

          // Marcador da loja no mapa
          var marcador = new google.maps.Marker({
            position: loja.location,
            map: mapa,
            title: loja.displayName
          });
          marcadores.push(marcador);

          // Card da loja na lista
          var html = '<div class="loja">';
          html += "<h3>" + loja.displayName + "</h3>";
          html += "<p>" + loja.formattedAddress + "</p>";
          if (loja.rating) {
            html += "<p>Nota: " + loja.rating + " de 5</p>";
          }
          html += '<p><a target="_blank" href="https://www.google.com/maps/dir/?api=1&destination=' +
                  loja.location.lat() + "," + loja.location.lng() + '">Como chegar</a></p>';
          html += "</div>";

          lista.innerHTML += html;
        }

        // Ajusta o zoom para mostrar a pessoa e todas as lojas
        var area = new google.maps.LatLngBounds(minhaPosicao);
        for (var k = 0; k < lojas.length; k++) {
          area.extend(lojas[k].location);
        }
        mapa.fitBounds(area);

      } catch (erro) {
        mensagem.textContent = "Deu um erro na busca. Confira se a chave da API está correta.";
      }


      var requestOptions = {
  method: 'GET',
};

fetch("https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=rect%3A10.716463143326969%2C48.755151258420966%2C10.835314015356737%2C48.680903341613316&limit=20&apiKey=c90eb177b0e8469884b08e6f25302bb2", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  
    }