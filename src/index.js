function getJoke() {
  let apiKey = "0adtod78fced068b5db3ce4d3ce10842";
  let prompt = "Can you tell me a joke?";
  let context =
    "Please be clear, the shorter the joke the funnier the punchline and child friendly";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  document.querySelector("#joke").innerHTML =
    "Loading your daily dose of humor... ⏳";

  axios.get(apiUrl).then(showJoke);
}

function showJoke(response) {
  let joke = document.querySelector("#joke");
  joke.innerHTML = "";

  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

let button = document.querySelector("button");
button.addEventListener("click", getJoke);
