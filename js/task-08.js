const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;
  const dataForm = {
    email: email.value,
    password: password.value,
  };
  console.log (dataForm);
  form.reset();
}


