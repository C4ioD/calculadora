function insert(num) {
  var numero = document.getElementById("display-number").innerHTML;
  document.getElementById("display-number").innerHTML = numero + num;
}

function clean() {
  document.getElementById("display-number").innerHTML = "";
}

function del() {
  var resultado = document.getElementById("display-number").innerHTML;
  document.getElementById("display-number").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}

function calcular() {
  var resultado = document.getElementById("display-number").innerHTML;
  if (resultado) {
    document.getElementById("display-number").innerHTML = eval(resultado);
  } else {
    document.getElementById("display-number").innerHTML = "Nada para calcular";
  }
}
