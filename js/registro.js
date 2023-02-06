const input_nombre = document.querySelector("#Nombre");
const input_correo = document.querySelector("#email");
const input_password = document.querySelector("#password");
const content = document.querySelector(".content");

const button_submit = document.querySelector("#add");
const button_dalete = document.querySelector("#dalate");

document.addEventListener("DOMContentLoaded", () => {
  const nombres = JSON.parse(localStorage.getItem("nombres"));

  //null = false  !false = true
  if (!nombres) {
    const p = document.createElement("p");
    const text = document.createTextNode("No esta registrado");
    p.appendChild(text);
    content.appendChild(p);
  } else {
    if (nombres.length > 0) {
      for (let i = 0; i <= nombres.length; i++) {
        ShowNames(nombres, i);
      }
    } else {
      const p = document.createElement("p");
      const text = document.createTextNode("No esta registrado");

      p.appendChild(text);

      content.appendChild(p);
    }
  }
  button_submit.addEventListener("click", () => {
    const nombres = JSON.parse(localStorage.getItem("nombres")) || [];

    const nombreregistrado = input_nombre.value;
    nombres.push(nombreregistrado);
    localStorage.setItem("nombres", JSON.stringify(nombres));

    content.innerHTML = "";

    for (let i = 0; i < nombres.length; i++) {
      ShowNames(nombres, i);
    }
  });

  /* button_dalete.addEventListener("click", () => {
    const nombres = JSON.parse(localStorage.getItem("nombres"));
    const nombreregistrado = input_nombre.value;
    nombres.pop(nombreregistrado);
    localStorage.setItem("nombres", JSON.stringify(nombres));
  });*/
});

function ShowNames(nombres, i) {
  const div = document.createElement("div");
  const p = document.createElement("p");
  //ESTE METODO ES PARA QUE SALGA EL NOMBRE DEL REGISTRO
  const text = document.createTextNode(nombres[i]);
  p.appendChild(text);

  const button = document.createElement("button");
  const textbutton = document.createTextNode("ELIMINAR");

  button.appendChild(textbutton);
  button.onclick = () => {
    eleminar(1);
  };

  div.appendChild(p);
  div.appendChild(button);

  content.appendChild(div);
}
function eleminar(i) {
  var nombres = JSON.parse(localStorage.getItem("nombres")) || [];
  nombres.splice(i, 1);
  //nombres = nombres.filter((value, index) => index !== i);
  localStorage.setItem("nombres", JSON.stringify(nombres));
  content.innerHTML = "";
  for (let i = 0; i < nombres.length; i++) {
    ShowNames(nombres, i);
  }
}
