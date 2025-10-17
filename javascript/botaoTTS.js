fazerFala = function(id){
                let utterance = new SpeechSynthesisUtterance
                utterance.lang = "pt-BR"
                utterance.text = document.getElementById(id).innerHTML
                console.log(document.getElementById(id).innerHTML)
                speechSynthesis.speak(utterance)
            }