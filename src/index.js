function displayPoem(response) {
  new Typewriter("#poem-box", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1.5,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "t6468120b34dd22a5f93b7f863a2oc0a";
  let prompt = `user intructions: Generate a Poem about anything in ${instructionsInput.value}`;
  let context =
    "You are a Poems expert and love to write short poems. Your mission is to generate a four line poem in basic HTML and seperate each line with <br/>.Please make sure you follow the user instructions and do not include a title to the poem. Sign the Poem with 'she codes AI' inside <strong> element at the end. ";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key={apiKey}`;

  let poemElement=document.querySelector
  poemElement.classList.remove("hidden");
  poemElement.innerHTML=`Generating a Poem ${instructionsInput.value}...`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
