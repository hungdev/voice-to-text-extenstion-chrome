'use strict';

let btnOptions = document.getElementById('change-options');
let el = document.getElementById('language');

function constructOptions() {
  btnOptions.addEventListener('click', () => {
    chrome.tabs.create({ url: "options.html" });
  });
}

function getLanguage() {
  chrome.storage.sync.get('language', function (result) {
    chrome.extension.getBackgroundPage().console.log(result.language);
    el.value = result.language
  })
}

function setLanguage() {
  el.addEventListener('change', () => {
    chrome.extension.getBackgroundPage().console.log(el.value);
    chrome.storage.sync.set({
      language: el.value
    }, function () {
    })
  });

}
constructOptions();
getLanguage()
setLanguage()
