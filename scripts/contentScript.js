
var first_char = /\S/;
let finalTranscript = '';

function capitalize(s) {
  return s.replace(first_char, function (m) { return m.toUpperCase(); });
}

function fillInput() {
  document.addEventListener('focus', (event) => {
    // console.log(event.target)
    // console.log(event.target.tagName)
    let el = event.target
    var recognition = new webkitSpeechRecognition();
    console.log('out', event.target)
    const typeInput = event.target.tagName.toLowerCase() === 'input' || event.target.tagName.toLowerCase() === 'textarea'
    if (typeInput) {
      console.log('go input')
      recognition.interimResults = true;
      recognition.maxAlternatives = 10;
      recognition.continuous = true;

      recognition.onresult = (event) => {
        let interimTranscript = '';
        for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
          let transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }
        el.value = finalTranscript

        // document.querySelector('body').innerHTML = finalTranscript + '<i style="color:#ddd;">' + interimTranscript + '</>';
      }
      console.log('goo', finalTranscript)
      recognition.start();
    }

    el.addEventListener('input', (ev) => {
      finalTranscript = ev.target.value
    });

    // end
  }, true)

}


fillInput() 