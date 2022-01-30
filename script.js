let getMeme = document.getElementById("getMeme");

getMeme.addEventListener("click", () => {
  let url = "https://meme-api.herokuapp.com/gimme/wholesomememes";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let meme = document.getElementById("meme");
      meme.innerHTML = `<a href="${data["url"]}" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Tap to enlarge"><img class="card-img-top" src="${data["url"]}" alt="${data["title"]}"></a>
                        <div class="card-body"><p class="card-text"><strong>${data["title"]}</strong></p></div>
                        `;
    });
});
