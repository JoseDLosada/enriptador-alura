const textInput = document.getElementById("textInput");
const btnEncrypt = document.getElementById("btnEncrypt");
const btnDecrypt = document.getElementById("btnDecrypt");
const btnCopy = document.getElementById("btnCopy");
const finalMessage = document.getElementById("finalMessage");
const outputToy = document.getElementById("outputToy");
const outputInfo = document.getElementById("outputInfo");
const outputSection = document.getElementById("outputSection");

// const inputSection = document.getElementById("inputSection");
// Las "llaves" de encriptación que utilizaremos son las siguientes:
// La letra "a" es convertida para "ai"
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

let keyLetter = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function resetHome() {
  finalMessage.innerHTML = "";
  textInput.value = "";
  outputToy.classList.remove("hide");
  outputInfo.style.display = "block";
  btnCopy.style.display = "none"; //Para añadir un estilo
  outputSection.classList.remove("adjust"); //Para añadir una clase
  finalMessage.classList.remove("adjust");
}
const replaceText = (finalText) => {
  finalMessage.innerHTML = finalText;
  outputToy.classList.add("hide");
  outputInfo.style.display = "none";
  btnCopy.style.display = "block"; //Para añadir un estilo
  outputSection.classList.add("adjust"); //Para añadir una clase
  finalMessage.classList.add("adjust");
};

btnEncrypt.addEventListener("click", () => {
  const inputText = textInput.value.toLowerCase();
  if (inputText != "") {
    function encrypt(newText) {
      for (let i = 0; i < keyLetter.length; i++) {
        if (newText.includes(keyLetter[i][0])) {
          newText = newText.replaceAll(keyLetter[i][0], keyLetter[i][1]);
        }
      }
      return newText;
    }
  }else{
    alert("Ingrese un Texto Porfavir")
  }
  replaceText(encrypt(inputText));
});

btnDecrypt.addEventListener("click", () => {
  const inputText = textInput.value.toLowerCase();
  if (inputText != "") {
    function decrypt(newText) {
      for (let i = 0; i < keyLetter.length; i++) {
        if (newText.includes(keyLetter[i][1])) {
          newText = newText.replaceAll(keyLetter[i][1], keyLetter[i][0]);
        }
      }
      return newText;
    }
  }
  replaceText(decrypt(inputText));
});

btnCopy.addEventListener("click", () => {
  let text = finalMessage;
  text.select();
  document.execCommand("copy");
  alert("¡Texto copiado al portapapeles!");
  resetHome();
});
