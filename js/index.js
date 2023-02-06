document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("user");

  if (user) {
    // TODO: OBTENER USUARIO
  } else {
    window.location = "/login.html";
  }
});
