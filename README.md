# <a href="https://vlodnik.github.io/OutYet/" target="_blank">OutYet</a>

## Introduction 
OutYet lets you check the latest episodes of your favorite TV shows. Just type in the
name of the show, confirm the show you were looking for, and you'll be told the name of the latest
episode, its season and episode number, and the airdate. Then you can get recommendations for other
shows you might enjoy. The recommendations are provided on new cards with the name of the show, a
video showing a trailer, and a link to the suggested show's wikipedia page.

## Technologies 
OutYet is an API hack using HTML, CSS, and Javascript/jQuery. It uses AJAX calls to get data from
two APIs: 

1. TVmaze, a database collecting info about television shows. It includes info regarding a given
show's most recent episode.

2. TasteDive, an API that takes an input of one or more books, TV shows, movies, or authors, then 
gives you a list of suggestions you might enjoy.

The app is fully responsive to different screen sizes, making use of flexbox styling and media
queries to ensure pages display appropriately.


## Screenshots
Here are screenshots of the app's landing page, in 
<a href="https://user-images.githubusercontent.com/33362393/33808155-b417f1d0-ddaf-11e7-83a2-1ed85dadce1f.png" target="_blank">desktop</a> 
and <a href="https://user-images.githubusercontent.com/33362393/33808161-bd8291ee-ddaf-11e7-8dce-c06c7774617a.png" target="_blank">mobile</a> views.

This is the initial 
<a href="https://user-images.githubusercontent.com/33362393/33808162-c257570e-ddaf-11e7-9faf-7864bbad5b59.png" target="_blank">search-results</a> 
page, and then the selected show's 
<a href="https://user-images.githubusercontent.com/33362393/33808163-c5f4a1e6-ddaf-11e7-98e8-d93ae155dc3d.png" target="_blank">information</a> 
and <a href="https://user-images.githubusercontent.com/33362393/33808164-c9ac7214-ddaf-11e7-96d9-d3600a91079c.png" target="_blank">suggestions</a>.

Finally, these are displayed if the search result is 
<a href="https://user-images.githubusercontent.com/33362393/33808166-cc26488a-ddaf-11e7-84c7-1f5d78b291b5.png" target="_blank">not-found</a>
, or if the show produces 
<a href="https://user-images.githubusercontent.com/33362393/33808169-ce806f98-ddaf-11e7-9a4c-4f3668281bc2.png" target="_blank">no-suggestions</a>.
