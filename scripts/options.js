'use strict';

function constructOptions() {

  let grantMicBtn = document.getElementById('grant-mic');
  grantMicBtn.addEventListener('click', async () => {
    // try {
    //   await new Promise((resolve, reject) => {
    //     const sr = new webkitSpeechRecognition()
    //     sr.onstart = () => {
    //       sr.stop()
    //       resolve()
    //     }
    //     sr.onerror = event => {
    //       reject(new Error(event.error))
    //     }
    //     sr.start()
    //   })
    // } catch (e) {
    // }
  });


}
constructOptions();
