// ==UserScript==
// @name         Автокликер Баллов VKPlay
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Автоматически нажимает на сундучок, удобный пасивный абуз (фарм) поинтов (баллов).
// @description:en AutoClaim Point VKPlay | Passives
// @author       OTBEPHNCb
// @match        https://vkplay.live/*
// @match        *://*.vkplay.live/*
// @match        *://vkplay.live/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vkplay.live
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
  'use strict';
  function pressButton() {
    var AutoPoint = document.querySelectorAll('button[class*="PointActions_buttonBonus_"]');
    if (AutoPoint.length >= 1) {
	AutoPoint[0].click();
	console.log("[АвтоКлик] Зафармленно!");
	}
    timeClick();
  }
  function timeClick() {
    setTimeout(function () {
      pressButton();
    }, Math.random() * 1870 + 7600);
  }
  timeClick();
})();
