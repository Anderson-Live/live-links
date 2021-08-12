
function redirect() {
  let secretPassword = document.querySelector("#secretPassword").value;
  if (secretPassword === "pdvversoes") {
    window.location.href = "https://www.notion.so/Live-PDV-NFC-e-24e7948e581a4e5bbf169cdb3e9dc9ed#bc0e132694ab41a8a7c3e12fd3f07cce";
    clearInput();
  } else {
    alert("Senha Inválida");
    clearInput();
  }
}

function clearInput() {
  secretPassword.value = "";
}