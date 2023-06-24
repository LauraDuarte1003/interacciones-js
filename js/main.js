function circulo() {
  const figura = document.getElementById("figura");
  figura.classList.toggle("circulo");
}

function rectangulo() {
  const figura = document.getElementById("figura");
  figura.classList.toggle("rectangulo");
}
function triangulo() {
  const figura = document.getElementById("figura");
  figura.classList.toggle("triangulo");
}

function rombo() {
  const figura = document.getElementById("figura");
  figura.classList.toggle("rombo");
}


function degradado() {
  const figura = document.getElementById("figura");
  figura.classList.toggle ("degradado");
}
function ondas() {
  const figura = document.getElementById("figura");
  figura.classList.toggle ("ondas");
}


function panel_lateral() {
  const panel = document.getElementById("panel_lateral");
  panel.classList.toggle("activo");
}


function fondo_body() {
  const body = document.body;
  const currentBackground = body.style.backgroundImage;
  
  if (currentBackground === 'url("img/fondo1.jpg")') {
    body.style.backgroundImage = 'url("img/img_2.jpg")';
  } else {
    body.style.backgroundImage = 'url("img/fondo1.jpg")';
  }
}


function panel_superior() {
  const panel = document.getElementById("panel_superior");
  panel.classList.toggle("activo");
}
function gif() {
  const figura = document.getElementById("figura");
  figura.innerHTML = `<img src="img/gif.gif" alt="GIF animado" />`;
}

