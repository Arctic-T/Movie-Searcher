var sercher = new Vue({
  el: "#cont-sercher",
  data: {
    movieToSerch: "",
    movie: null,
  },
});

$("#button").on("click", function () {
  $.ajax({
    url:
      "https://private.omdbapi.com/?apikey=bef9c583&t=" + sercher.movieToSerch,
    success: function (datosObtenidos) {
      sercher.movie = datosObtenidos;
    },
  });
});
