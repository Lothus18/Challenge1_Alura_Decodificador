function codificar() {
  var msg1 = document.getElementById("mensagem").value;

  if (msg1 != "") {
    var codigo = msg1.split(/e/g).join("enter").split(/i/g).join("imes").split(/a/g).join("ai").split(/o/g).join("ober").split(/u/g).join("ufat");
    document.getElementById("final").value = codigo;
    document.getElementById("mensagem").value = "";

  } else {
    alert("Digite uma mensagem para codificar/decodificar.");
  }
}


function decodificar() {
  var msg2 = document.getElementById("mensagem").value;

  if (msg2 != "") {
    var codigo = msg2
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    document.getElementById("final").value = codigo;
    document.getElementById("mensagem").value = "";

  } else {
    alert("Digite uma mensagem para codificar/decodificar.");
  }
}


async function copiar() {
  let txt = document.getElementById("final").value;
  await navigator.clipboard.writeText(txt);
  document.getElementById("final").value = "";
  document.getElementById("mensagem").value = text;
}

function limpar() {
  document.getElementById("final").value = "";
  document.getElementById("mensagem").value = "";
}