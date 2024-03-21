// ==UserScript==
// @name         Remove Adblock Thing Extras
// @namespace    http://tampermonkey.net/
// @version      106
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
      "ytd-statement-banner-renderer",
    )) {
      elem.remove();
    }

    for (const elem of document.getElementsByClassName(
      "ytd-statement-banner-renderer",
    )) {
      elem.remove();
    }

    for (const elem of document.getElementsByTagName(
      "tp-yt-iron-overlay-backdrop",
    )) {
      elem.remove();
    }

    for (const elem of document.getElementsByClassName(
      "tp-yt-iron-overlay-backdrop",
    )) {
      elem.remove();
    }

    for (const elem of document.getElementsByTagName(
      "ytd-rich-item-renderer",
    )) {
      if (elem.getElementsByTagName("ytd-ad-slot-renderer").length > 0) {
        elem.remove();
      }
    }
  };

  const once = () => {
    if (window.location.pathname.startsWith("/shorts/")) {
      const splitted = window.location.pathname.split("/");
      if (splitted.length == 3) {
        window.location.replace(
          `https://www.youtube.com/watch?v=${splitted[2]}`,
        );
      }
    }
  };

  setInterval(removeAdblockThingExtras, 50);
  setTimeout(once, 5000);
})();
