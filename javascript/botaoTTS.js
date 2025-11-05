fazerFala = function(id){
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }
  let utterance = new SpeechSynthesisUtterance
  utterance.lang = "pt-BR"
  utterance.volume = 1;
  utterance.text = document.getElementById(id).innerHTML
  console.log(document.getElementById(id).innerHTML)
  speechSynthesis.speak(utterance)
}
    // -- Parte da galeria -- //
function falarModal() {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel()
  }

  const titulo = document.getElementById("modalTitulo").textContent
  const descricao = document.getElementById("modalDescricao").textContent

  const texto = `${titulo}. ${descricao}`
  const utterance = new SpeechSynthesisUtterance(texto)
  utterance.lang = "pt-BR"
  utterance.rate = 1
  utterance.volume = 1
  speechSynthesis.speak(utterance)
}