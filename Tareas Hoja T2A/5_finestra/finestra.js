const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get("title");

if (title) {
  document.title = title;
}

const currentTime = new Date();

const hour = currentTime.getHours();
const minute = currentTime.getMinutes();
const second = currentTime.getSeconds();

let greetingMessage = "";

if (hour >= 6 && hour <= 14) {
  greetingMessage = "Good morning";
} else if (hour > 14 && hour < 20) {
  greetingMessage = "Good afternoon";
} else {
  greetingMessage = "Good night";
}

window.onload = function () {
  document.getElementById(
    "currentTime"
  ).innerText = `Current time: ${hour}:${minute}:${second}`;
  document.getElementById("greeting").innerText = greetingMessage;
};

// NEW URL
// NEW URL
// NEW URL

window.onload = function () {
  let newUrl = "";
  let isValidUrl = false;

  while (!isValidUrl) {
    newUrl = prompt(
      "Please enter a valid HTML address (starting with http:// or https://):"
    );

    if (newUrl && newUrl.trim() !== "") {
      const urlPattern = /^(http:\/\/|https:\/\/)/;

      if (urlPattern.test(newUrl)) {
        isValidUrl = true;
      } else {
        alert(
          "The URL must start with 'http://' or 'https://'. Please try again."
        );
      }
    } else {
      alert("You must enter a URL. Please try again.");
    }
  }

  // Wenn die URL gültig ist, die URL des Elternfensters ändern
  window.opener.location.href = newUrl;


