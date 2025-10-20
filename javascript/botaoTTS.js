fazerFala = function(id){
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
                let utterance = new SpeechSynthesisUtterance
                utterance.lang = "pt-BR"
                utterance.volume
                utterance.text = document.getElementById(id).innerHTML
                console.log(document.getElementById(id).innerHTML)
                speechSynthesis.speak(utterance)
            }