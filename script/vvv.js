const form = document.querySelector(".text1-email");
const email1 = document.querySelector(".email1");
const form2 = document.querySelector(".sec3-email");
const email2 = document.querySelector(".email2");

const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

form.addEventListener("submit", handleSubmit);
form2.addEventListener("submit", handleSubmit2);

function handleSubmit(e) {
  let a = email1.value;
  if (a == "" || !a.match(re)) {
    form.classList.add("active");
    e.preventDefault();
  }

  removeError(email1);
}

function removeError(set) {
  set.onclick = () => {
    set.parentNode.classList.remove("active");
  };
}

function handleSubmit2(e) {
  let b = email2.value;

  if (b == "" || !b.match(re)) {
    form2.classList.add("active");
    e.preventDefault();
  }
  removeError(email2);
}

function removeError(set) {
  set.onclick = () => {
    set.parentNode.classList.remove("active");
  };
}
