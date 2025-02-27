async function getMovie(title) {
  if(navigator.onLine){
  const apikey = "9d464382";
  const apiurl = `https://www.omdbapi.com/?t=${title}&apikey=${apikey}`;
  let respond = await fetch(apiurl);
  var data = await respond.json();
  console.log(data);
  localStorage.setItem(title,JSON.stringify(data))
  }else{
    var data=JSON.parse(localStorage.getItem(title))
  }
  document.querySelector("#titles").innerHTML =
    `<strong>Title: </strong>` + data.Title;
  document.querySelector("#director").innerHTML =
    `<strong> Director: </strong>` + data.Director;
  document.querySelector("#genre").innerHTML =
    `<strong>Genre: </strong>` + data.Genre;
  document.querySelector("#actor").innerHTML =
    `<strong>Actors: </strong>` + data.Actors;
  document.querySelector("#country").innerHTML =
    `<strong>Country:  </strong>` + data.Country;
  document.querySelector("#rating").innerHTML =
    `<strong>Rating: </strong>` +
    data.Ratings[0].Value +
    `<strong>  By: </strong>` +
    data.Ratings[0].Source;
  document.querySelector("#img").innerHTML = `<img src=${data.Poster} />`;
  document.querySelector("#time").innerHTML =
    `<strong>Run Time: </strong>` + data.Runtime;
  document.querySelector("#year").innerHTML =
    `<strong>Released: </strong>` + data.Released;
  document.querySelector("#boxOffice").innerHTML =
    `<strong>Box Office: </strong>` + data.BoxOffice;
  document.querySelector("#writer").innerHTML =
    `<strong>Writer: </strong>` + data.Writer;
  document.querySelector("#plot").innerHTML =
    `<strong>Plot: </strong>` + data.Plot;
}

const input = document.querySelector("#input");
const btn = document.querySelector("#button");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value === "") {
    alert("please enter valid movie name");
  } else {
    getMovie(input.value);
  }
});
