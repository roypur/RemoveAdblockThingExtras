// ==UserScript==
// @name         Remove Adblock Thing Extras
// @namespace    http://tampermonkey.net/
// @version      112
// @description  Removes Adblock Thing Extras
// @author       roypur
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @updateURL    https://github.com/roypur/RemoveAdblockThingExtras/raw/main/extras.user.js
// @downloadURL  https://github.com/roypur/RemoveAdblockThingExtras/raw/main/extras.user.js
// @grant        none
// ==/UserScript==

(() => {
  const removeAdblockThingExtras = () => {
    for (const elem of document.getElementsByTagName(
      "ytd-statement-banner-renderer"
    )) {
      elem.remove();
    }

    for (const elem of document.getElementsByTagName("a")) {
      const splitted = elem.href.split("/");
      if (splitted.length >= 2 && splitted[splitted.length - 2] == "shorts") {
        const videoId = splitted[splitted.length - 1];

        const newElement = document.createElement("a");
        newElement.href = `https://youtube.com/watch?v=${videoId}`;
        newElement.className = elem.className;
        newElement.id = elem.id;

        while (oldParent.childNodes.length > 0) {
          newElement.appendChild(elem.childNodes[0]);
        }

        elem.replaceWith(newElement);
      }
    }

    for (const elem of document.getElementsByClassName(
      "ytd-statement-banner-renderer"
    )) {
      elem.remove();
    }

    for (const elem of document.getElementsByTagName(
      "tp-yt-iron-overlay-backdrop"
    )) {
      elem.remove();
    }

    for (const elem of document.getElementsByClassName(
      "tp-yt-iron-overlay-backdrop"
    )) {
      elem.remove();
    }

    for (const elem of document.getElementsByTagName(
      "ytd-rich-item-renderer"
    )) {
      if (elem.getElementsByTagName("ytd-ad-slot-renderer").length > 0) {
        elem.remove();
      }
    }
  };

  setInterval(removeAdblockThingExtras, 50);
})();
