var searcher = new Vue({
  el: "#cont-searcher",
  data: {
    movieToSearch: "",
    movie: null,
  },
});

$("#button").on("click", function () {
  $.ajax({
    url:
      "https://private.omdbapi.com/?apikey=bef9c583&t=" + searcher.movieToSerch,
    success: function (datosObtenidos) {
      searcher.movie = datosObtenidos;
    },
  });
});
