
function foodSearch(){
var userInput = document.getElementById("recipeSearch").value;
alert(userInput);


 fetch(`https://crossorigin.me/http://www.recipepuppy.com/api/?i=${userInput}`)

  .then(
    function(response){
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }

      response.json().then(function(data){
        let main = document.querySelector(".main")
        var template =`
        <div class = "searchBar">
            <input type="search" id="recipeSearch">
            <input type="submit" onclick="foodSearch();">
        </div>
        <div class = foodContainer>
        `
for (var i = 0; i < data.results.length; i++) {
  console.log(data.results[i].title);

  template += `
  <div clas = foodItem>

    <h3>${data.results[i].title}</h3>
    <a href="${data.results[i].href}"><img src = "${data.results[i].thumbnail}"></a>
  </div>
    `
}
template += `</div>`;
document.querySelector('body').innerHTML = template




    });
}
)


.catch(function(error){
  console.log('Fetch Error :-S', err);
});
}
