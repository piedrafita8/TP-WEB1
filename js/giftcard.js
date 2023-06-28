//Cargar constantes
const constantes = {
  inputDestinatario: "nameDestinatario",
  inputdMonto: "monto",
  eleccionColor: "selectColor",
  eleccionFuente: "selectFuente",
  eleccionUbicacion: "selectUbicacion",
  eleccionFondo: "selectFondo",
  previewRecuadro: "divPreview",
  previewDestinatario: "previewDest",
  previewTexto: "previewText",
  previewMonto: "previewMont",
  coloresFondo: {
    1: "giftcardFondo1",
    2: "giftcardFondo2",
    3: "giftcardFondo3",
    4: "giftcardFondo4",
    5: "giftcardFondo5",
  },
  coloresTexto: {
    1: "giftcardColorText1",
    2: "giftcardColorText2",
    3: "giftcardColorText3",
    4: "giftcardColorText4",
    5: "giftcardColorText5",
  },
  ubicaciones: {
    1: "giftcardPos1",
    2: "giftcardPos2",
    3: "giftcardPos3",
  },
  tamTexto: {
    0: "giftcardText",
    1: "giftcardText1",
    2: "giftcardText2",
    3: "giftcardText3",
    4: "giftcardText4",
    5: "giftcardText5",
  },
};

var destinatario = document.getElementById(constantes.previewDestinatario);
var monto = document.getElementById(constantes.previewMonto);
var texto = document.getElementById(constantes.previewTexto);
var recuadro = document.getElementById(constantes.previewRecuadro);

function actualizarPreview(campo) {
  if (
    campo.id == constantes.inputDestinatario ||
    campo.id == constantes.inputdMonto
  ) {
    actualizarTexto(campo);
  } else {
    actualizarClases(campo);
  }
}

function actualizarTexto(campo) {
  switch (campo.id) {
    case constantes.inputDestinatario:
      if (campo.value == "") {
        destinatario.innerHTML = "[Nombre]";
      } else {
        destinatario.innerHTML = campo.value;
      }
      break;
    case constantes.inputdMonto:
      if (campo.value == "") {
        monto.innerHTML = "$00000";
      } else if (campo.value.length > 5) {
        monto.innerHTML = "+$99999";
      } else {
        monto.innerHTML = "$" + campo.value;
      }
      break;
  }
}

function actualizarClases(campo) {
  let select = campo.id.substring(0, campo.id.length - 1);
  let index_select = Number(campo.value);
  let aux_class = "";
  switch (select) {
    case constantes.eleccionColor:
      aux_class = texto.classList[1];
      texto.classList.remove(aux_class);
      destinatario.classList.remove(aux_class);
      texto.classList.add(constantes.coloresTexto[index_select]);
      destinatario.classList.add(constantes.coloresTexto[index_select]);
      break;
    case constantes.eleccionFuente:
      index_select = Number(campo.id.substring(campo.id.length - 1));
      aux_class = destinatario.classList[2];
      if (aux_class.includes(constantes.tamTexto[0]) == false) {
        aux_class = destinatario.classList[1];
      }
      destinatario.classList.remove(aux_class);
      destinatario.classList.add(constantes.tamTexto[index_select]);
      break;
    case constantes.eleccionUbicacion:
      aux_class = monto.classList[1];
      monto.classList.remove(aux_class);
      monto.classList.add(constantes.ubicaciones[index_select]);
      break;
    case constantes.eleccionFondo:
      aux_class = recuadro.classList[1];
      recuadro.classList.remove(aux_class);
      recuadro.classList.add(constantes.coloresFondo[index_select]);
      break;
  }
}
