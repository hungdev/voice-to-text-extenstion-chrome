
var first_char = /\S/;

function capitalize(s) {
  return s.replace(first_char, function (m) { return m.toUpperCase(); });
}


function fillInput() {
  chrome.storage.sync.get('language', function (lg) {
    document.addEventListener('focus', (event) => {
      let finalTranscript = '';

      console.log(event.target)
      // console.log(event.target.tagName)
      let el = event.target
      const typeInput = event.target.tagName.toLowerCase() === 'input' || event.target.tagName.toLowerCase() === 'textarea'
      if (typeInput) {

        var recognition = new webkitSpeechRecognition();
        recognition.interimResults = true;
        recognition.maxAlternatives = 10;
        recognition.continuous = true;
        recognition.lang = lg.language || 'vi-VN';

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

      // el.addEventListener('input', (ev) => {
      //   finalTranscript = ev.target.value
      // });

      // end
    }, true)
  });

}


fillInput() 