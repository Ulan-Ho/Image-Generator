function onButtonClick() {
  let input = document.querySelector(".prompt-box");
  let userInput = input.value;
  generateImage(userInput);
}

async function generateImage(userInput) {
  let key = "ключи опенай";
  let url = "https://api.openai.com/v1/images/generations";
  let payload = {
    model: "dall-e-3",
    n: 1,
    size: "1024x1024",
    prompt: userInput,
  };
  let rawData = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + key,
    },
    body: JSON.stringify(payload),
  });
  let resData = await rawData.json();
  let imageUrl = resData.data[0].url;
  updateImage(imageUrl);
}

function updateImage(imageSrc) {
  let image = document.querySelector(".output-content img");
  image.src = imageSrc;
}

let button = document.querySelector(".generate-button");

button.addEventListener("click", onButtonClick);