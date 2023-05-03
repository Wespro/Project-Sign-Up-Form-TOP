// confirming password function
//variables
const Cpassowrd = document.querySelector("input[id='c-passowrd']");
const passowrd = document.querySelector("input[id='passowrd']");
const CPmess = document.querySelector(".CpasswordError");

function confirmPassowrd() {
  if (Cpassowrd.value !== passowrd.value || !passowrd.value) {
    if (!passowrd.value) {
      CPmess.textContent = "* Please fill password first";
      Cpassowrd.classList.add("error");
    } else {
      CPmess.textContent = "* password don't match";
      Cpassowrd.classList.add("error");
    }
  } else {
    Cpassowrd.classList.add("done");
    passowrd.classList.add("done");
  }
}
Cpassowrd.addEventListener("click", function () {
  CPmess.textContent = "";
  passowrd.classList.remove("error");
  Cpassowrd.classList.remove("error");
  Cpassowrd.classList.remove("done");
  passowrd.classList.remove("done");
});
passowrd.addEventListener("click", function () {
  CPmess.textContent = "";
  passowrd.classList.remove("error");
  Cpassowrd.classList.remove("error");
  Cpassowrd.classList.remove("done");
  passowrd.classList.remove("done");
});
