/* 
 My project is using the TV api to search for a tv show and display the results.
 It is displaying the Show Name, 3 genres listed and hte medium image on the site
 I plan on doing more with the project and making more information print up when a show is searched, but on my schedule this past few weeks I haven't had much time to work on my projects. I am really happy with how this all came out so far and my experience with going through the API and finding each item within the arrays.
*/
function getAndDisplayData() {
  //collect the word from the inout box
  let userInput = document.getElementById('tv-search-input').value;
  axios.get(`https://api.tvmaze.com/search/shows?q=${userInput}`).then(response => {
    console.log(response.data);
    let showData = response.data;
    let showName = showData[0].show.name;
    let showGenre = showData[0].show.genres[0];
    let showGenre2 = showData[0].show.genres[1];
    let showGenre3 = showData[0].show.genres[2];
    let showImage = showData[0].show.image.medium;
    console.log(showImage);

    document.getElementById('name').innerText = "Name: " + " " + showName;
    document.getElementById('genre').innerText = "Genres: " + " " + showGenre;
    document.getElementById('genre2').innerText = ", " + showGenre2;
    document.getElementById('genre3').innerText = ", " + showGenre3;
    document.getElementById('image').src = showImage;
  })

}
