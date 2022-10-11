function verificar() {
  var m1 = document.getElementById("motorista").value;
  var p1 = document.getElementById("placa").value;
  var v1 = document.getElementById("velocidade");
  var vel = Number(v1.value);
  if (vel > 110) {
    window.alert(
      `Ola ${m1}, velocidade registrada no veiculo ${p1} foi ${vel} km/h - MULTADO!`
    );
  } else {
    window.alert(
      `Parabéns ${m1} , velocidade resgistrada no veiculo ${p1} foi ${vel} km/h  - Dentro do Limite!`
    );
  }
}
