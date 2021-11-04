document.addEventListener("DOMContentLoaded",
      function(event) {
            fetch("https://api.nasa.gov/planetary/apod?api_key=hJYa2jH70BxNL5QgxVlODK4ERGRsfzht6S77iaeO#")
                  .then(response => response.json())
                  .then(universe => {
                        document.getElementById("title")
                              .innerText = universe.title;
                        document.getElementById("caption")
                              .innerText = universe.explanation;
                        document.getElementById("photo")
                              .src = universe.url
                  })
                  .catch(error => console.log(error));
      })