(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["feather"] = factory();
	else
		root["feather"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/icons.json":
/*!*************************!*\
  !*** ./dist/icons.json ***!
  \*************************/
/*! exports provided: 24-support, 3d-cube-scan, 3d-rotate, 3d-square, 3dcube, 3square, activity, add-circle, add-square, add, additem, airdrop, airplane-square, airplane, airpod, airpods, alarm, align-bottom, align-horizontally, align-left, align-right, align-vertically, aquarius, archive-1, archive-2, archive-add, archive-book, archive-minus, archive-slash, archive-tick, archive, arrange-circle-2, arrange-circle, arrange-square-2, arrange-square, arrow-2, arrow-3, arrow-bottom, arrow-circle-down, arrow-circle-left, arrow-circle-right, arrow-circle-up, arrow-down-1, arrow-down-2, arrow-down, arrow-left-1, arrow-left-2, arrow-left-3, arrow-left, arrow-right-1, arrow-right-2, arrow-right-3, arrow-right, arrow-square-down, arrow-square-left, arrow-square-right, arrow-square-up, arrow-square, arrow-swap-horizontal, arrow-swap, arrow-up-1, arrow-up-2, arrow-up-3, arrow-up, arrow, attach-circle, attach-square, audio-square, autobrightness, award, back-square, backward-10-seconds, backward-15-seconds, backward-5-seconds, backward-item, backward, bag-2, bag-cross-1, bag-cross, bag-happy, bag-tick-2, bag-tick, bag-timer, bag, bank, barcode, battery-3full, battery-charging, battery-disable, battery-empty-1, battery-empty, battery-full, bezier, bill, bitcoin-card, bitcoin-convert, bitcoin-refresh, blend-2, blend, bluetooth-2, bluetooth-circle, bluetooth-rectangle, bluetooth, blur, book-1, book-saved, book-square, book, bookmark-2, bookmark, box-1, box-2, box-add, box-remove, box-search, box-tick, box-time, box, briefcase, brifecase-cross, brifecase-tick, brifecase-timer, broom, brush-1, brush-2, brush-3, brush-4, brush, bubble, bucket-circle, bucket-square, bucket, building-3, building-4, building, buildings-2, buildings, buliding, bus, buy-crypto, cake, calculator, calendar-1, calendar-2, calendar-add, calendar-circle, calendar-edit, calendar-remove, calendar-search, calendar-tick, calendar, call-add, call-calling, call-incoming, call-minus, call-outgoing, call-received, call-remove, call-slash, call, camera-slash, camera, candle-2, candle, car, card-add, card-coin, card-edit, card-pos, card-receive, card-remove-1, card-remove, card-send, card-slash, card-tick-1, card-tick, card, cards, category-2, category, cd, chart-1, chart-2, chart-21, chart-3, chart-fail, chart-square, chart-success, chart, check, chrome, clipboard-close, clipboard-export, clipboard-import, clipboard-text, clipboard-tick, clipboard, clock-1, clock, close-circle, close-square, cloud-add, cloud-change, cloud-connection, cloud-cross, cloud-drizzle, cloud-fog, cloud-lightning, cloud-minus, cloud-notif, cloud-plus, cloud-remove, cloud-snow, cloud-sunny, cloud, code-1, code-circle, code, coffee, coin-1, coin, color-swatch, colorfilter, colors-square, command-square, command, component, computing, convert-3d-cube, convert-card, convert, convertshape-2, convertshape, copy-success, copy, copyright, courthouse, cpu-charge, cpu-setting, cpu, creative-commons, crop, crown-1, crown, cup, danger, data-2, data, designtools, device-message, devices-1, devices, diagram, diamonds, direct-down, direct-inbox, direct-left, direct-normal, direct-notification, direct-right, direct-send, direct-up, direct, directbox-default, directbox-notif, directbox-receive, directbox-send, discount-circle, discount-shape, discover-1, discover, dislike, document-1, document-cloud, document-code-2, document-code, document-copy, document-download, document-favorite, document-filter, document-forward, document-like, document-normal, document-previous, document-sketch, document-text-1, document-text, document-upload, document, dollar-square, driver-2, driver-refresh, driver, driving, drop, edit-2, edit, electricity, element-2, element-3, element-4, element-equal, element-plus, emoji-happy, emoji-normal, emoji-sad, empty-wallet-add, empty-wallet-change, empty-wallet-remove, empty-wallet-tick, empty-wallet-time, empty-wallet, eraser-1, eraser, export-1, export-2, export-3, export, external-drive, eye-slash, eye, fatrows, favorite-chart, filter-add, filter-edit, filter-remove, filter-search, filter-square, filter-tick, filter, finger-cricle, finger-scan, firstline, flag-2, flag, flash-1, flash-circle-1, flash-circle, flash-slash, flash, folder-2, folder-add, folder-cloud, folder-connection, folder-cross, folder-favorite, folder-minus, folder-open, folder, forbidden-2, forbidden, format-circle, format-square, forward-10-seconds, forward-15-seconds, forward-5-seconds, forward-item, forward-square, forward, frame-1, frame-2, frame-3, frame-4, frame-5, frame-6, frame-7, frame, gallery-add, gallery-edit, gallery-export, gallery-favorite, gallery-import, gallery-remove, gallery-slash, gallery-tick, gallery, game, gameboy, gas-station, gemini-2, gemini, ghost, gift, glass-1, glass, global-edit, global-refresh, global-search, global, gps-slash, gps, grammerly, graph, grid-1, grid-2, grid-3, grid-4, grid-5, grid-6, grid-7, grid-8, grid-9, grid-edit, grid-eraser, grid-lock, happyemoji, hashtag-1, hashtag-down, hashtag-up, hashtag, headphone, headphones, health, heart-add, heart-circle, heart-edit, heart-remove, heart-search, heart-slash, heart-tick, heart, hierarchy-2, hierarchy-3, hierarchy-square-2, hierarchy-square-3, hierarchy-square, hierarchy, home-1, home-2, home-hashtag, home-trend-down, home-trend-up, home-wifi, home, hospital, house-2, house, icon-1, icon, image, import-1, import-2, import, info-circle, information, instagram, judge, key-square, key, keyboard-open, keyboard, lamp-1, lamp-charge, lamp-on, lamp-slash, lamp, language-circle, language-square, layer, level, lifebuoy, like-1, like-dislike, like-shapes, like-tag, like, link-1, link-2, link-21, link-circle, link-square, link, location-add, location-cross, location-minus, location-slash, location-tick, location, lock-1, lock-circle, lock-slash, lock, login-1, login, logout-1, logout, lovely, magic-star, magicpen, main-component, man, map-1, map, mask-1, mask-2, mask, math, maximize-1, maximize-2, maximize-21, maximize-3, maximize-4, maximize-circle, maximize, medal-star, medal, menu-1, menu-board, menu, message-2, message-add-1, message-add, message-circle, message-edit, message-favorite, message-minus, message-notif, message-programming, message-question, message-remove, message-search, message-square, message-text-1, message-text, message-tick, message-time, message, messages-1, messages-2, messages-3, messages, microphone-2, microphone-slash-1, microphone-slash, microphone, microscope, milk, mini-music-sqaure, minus-cirlce, minus-square, minus, mirror, mirroring-screen, mobile-programming, mobile, money-2, money-3, money-4, money-add, money-change, money-forbidden, money-recive, money-remove, money-send, money-tick, money-time, money, moneys, monitor-mobbile, monitor-recorder, monitor, moon, more-2, more-circle, more-square, more, mouse-1, mouse-circle, mouse-square, mouse, music-circle, music-dashboard, music-filter, music-library-2, music-play, music-playlist, music-square-add, music-square-remove, music-square-search, music-square, music, musicnote, next, note-1, note-2, note-21, note-add, note-favorite, note-remove, note-square, note-text, note, notification-1, notification-bing, notification-circle, notification-favorite, notification-status, notification, omega-circle, omega-square, paintbucket, paperclip-2, paperclip, password-check, path-2, path-square, path, pause-circle, pause, pen-add, pen-close, pen-remove, pen-tool-2, pen-tool, people, percentage-circle, percentage-square, personalcard, pet, pharagraphspacing, picture-frame, play-add, play-circle, play-cricle, play-remove, play, presention-chart, previous, printer-slash, printer, profile-2user, profile-add, profile-circle, profile-delete, profile-remove, profile-tick, programming-arrow, programming-arrows, quote-down-circle, quote-down-square, quote-down, quote-up-circle, quote-up-square, quote-up, radar-1, radar-2, radar, radio, ram-2, ram, ranking-1, ranking, receipt-1, receipt-2-1, receipt-2, receipt-add, receipt-discount, receipt-disscount, receipt-edit, receipt-item, receipt-minus, receipt-search, receipt-square, receipt-text, receipt, receive-square-2, receive-square, received, record-circle, record, recovery-convert, redo, refresh-2, refresh-circle, refresh-left-square, refresh-right-square, refresh-square-2, refresh, repeat-circle, repeat, repeate-music, repeate-one, reserve, rotate-left-1, rotate-left, rotate-right-1, rotate-right, route-square, routing-2, routing, row-horizontal, row-vertical, ruler&pen, ruler, safe-home, sagittarius, save-2, save-add, save-minus, save-remove, scan-barcode, scan, scanner, scanning, scissor-1, scissor, screenmirroring, scroll, search-favorite-1, search-favorite, search-normal-1, search-normal, search-status-1, search-status, search-zoom-in-1, search-zoom-in, search-zoom-out-1, search-zoom-out, security-card, security-safe, security-time, security-user, security, send-1, send-2, send-sqaure-2, send-square, send, setting-2, setting-3, setting-4, setting-5, setting, settings, shapes-1, shapes, share, shield-cross, shield-search, shield-slash, shield-tick, ship, shop-add, shop-remove, shop, shopping-bag, shopping-cart, shuffle, sidebar-bottom, sidebar-left, sidebar-right, sidebar-top, signpost, simcard-1, simcard-2, simcard, size, slash, slider-horizontal-1, slider-horizontal, slider-vertical-1, slider-vertical, slider, smallcaps, smart-car, smart-home, smileys, sms-edit, sms-notification, sms-search, sms-star, sms-tracking, sms, sort, sound, speaker, speedometer, star-1, star-slash, star, status-up, status, sticker, stickynote, stop-circle, stop, story, strongbox-2, strongbox, subtitle, sun-1, sun-fog, sun, tag-2, tag-cross, tag-right, tag-user, tag, task-square, task, teacher, text-block, text-bold, text-italic, text-underline, text, textalign-center, textalign-justifycenter, textalign-justifyleft, textalign-justifyright, textalign-left, textalign-right, tick-circle, tick-square, ticket-2, ticket-discount, ticket-expired, ticket-star, ticket, timer-1, timer-pause, timer-start, timer, toggle-off-circle, toggle-off, toggle-on-circle, toggle-on, trade, transaction-minus, translate, trash, tree, trend-down, trend-up, triangle, truck-fast, truck-tick, truck, trush-square, undo, unlimited, unlock, user-add, user-cirlce-add, user-edit, user-minus, user-octagon, user-remove, user-search, user-square, user-tag, user-tick, user, verify, video-add, video-circle, video-horizontal, video-octagon, video-play, video-remove, video-slash, video-square, video-tick, video-time, video-vertical, video, voice-cricle, voice-square, volume-cross, volume-high, volume-low-1, volume-low, volume-mute, volume-slash, volume-up, wallet-1, wallet-2, wallet-3, wallet-add-1, wallet-add, wallet-check, wallet-minus, wallet-money, wallet-remove, wallet-search, wallet, warning-2, watch-status, watch, weight-1, weight, wifi-square, wifi, wind-2, wind, woman, default */
/***/ (function(module) {

module.exports = {"24-support":"<path d=\"M3 4.97C3 3.33 4.34 2 6 2h12c1.66 0 3 1.33 3 2.97v10.91c0 1.64-1.34 2.97-3 2.97h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V9.07\"></path><path d=\"M7 9.16c0-.93.76-1.69 1.69-1.69.93 0 1.69.76 1.69 1.69 0 1.88-2.67 2.08-3.26 3.87-.12.37.19.74.58.74h2.68\"></path><path d=\"M16.04 13.76V8.05a.58.58 0 0 0-.42-.56.593.593 0 0 0-.66.25c-.72 1.16-1.5 2.48-2.18 3.64-.11.19-.11.44 0 .63s.32.31.55.31H17\"></path>","3d-cube-scan":"<path d=\"M17 2c3 0 5 2 5 5v2\"></path><path d=\"M2 9V7c0-3 2-5 5-5h5.77\"></path><path d=\"M22 15v2c0 3-2 5-5 5h-5.53\"></path><path d=\"M2 15v2c0 3 2 5 5 5\"></path><path d=\"M6.7 9.26l5.3 3.07 5.26-3.05\"></path><path d=\"M12 17.77v-5.45\"></path><path d=\"M10.76 6.29l-3.2 1.78c-.72.4-1.32 1.41-1.32 2.24v3.39c0 .83.59 1.84 1.32 2.24l3.2 1.78c.68.38 1.8.38 2.49 0l3.2-1.78c.72-.4 1.32-1.41 1.32-2.24v-3.39c0-.83-.59-1.84-1.32-2.24l-3.2-1.78c-.69-.39-1.81-.39-2.49 0z\"></path>","3d-rotate":"<path d=\"M6.701 9.26l5.3 3.07 5.26-3.05\"></path><path d=\"M12.002 17.77v-5.45\"></path><path d=\"M6.23 10.3c0-.83.59-1.84 1.32-2.24l3.2-1.78c.68-.38 1.8-.38 2.49 0l3.2 1.78c.72.4 1.32 1.41 1.32 2.24v3.39c0 .83-.59 1.84-1.32 2.24l-3.2 1.78c-.68.38-1.8.38-2.49 0l-3.2-1.78c-.36-.2-.69-.55-.93-.96\"></path><path d=\"M22 15c0 3.87-3.13 7-7 7l1.05-1.75\"></path><path d=\"M2 9c0-3.87 3.13-7 7-7L7.95 3.75\"></path>","3d-square":"<path d=\"M2 14v1c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M6.701 9.26l5.3 3.07 5.26-3.05\"></path><path d=\"M12.002 17.77v-5.45\"></path><path d=\"M10.76 6.29l-3.2 1.78c-.72.4-1.32 1.41-1.32 2.24v3.39c0 .83.59 1.84 1.32 2.24l3.2 1.78c.68.38 1.8.38 2.49 0l3.2-1.78c.72-.4 1.32-1.41 1.32-2.24v-3.4c0-.83-.59-1.84-1.32-2.24l-3.2-1.78c-.69-.38-1.81-.38-2.49.01z\"></path>","3dcube":"<path d=\"M19.43 7.76c.76-.41.76-1.58 0-1.99l-6.51-3.51c-.58-.31-1.26-.31-1.84 0L4.57 5.77c-.76.41-.76 1.58 0 1.99l6.51 3.51c.58.31 1.26.31 1.84 0l2.34-1.26\"></path><path d=\"M2 11.12c0-.83.87-1.36 1.61-.99l6.05 3.03c.75.38 1.23 1.15 1.23 1.99v5.72c0 .83-.87 1.36-1.61.99l-6.05-3.03A2.238 2.238 0 0 1 2 16.84v-1.88\"></path><path d=\"M20.39 10.13l-6.05 3.03c-.75.38-1.23 1.15-1.23 1.99v5.72c0 .83.87 1.36 1.61.99l6.05-3.03c.75-.38 1.23-1.15 1.23-1.99v-5.72c0-.83-.87-1.36-1.61-.99z\"></path>","3square":"<path d=\"M12 17v2.38c0 1.87-.75 2.62-2.63 2.62H4.62C2.75 22 2 21.25 2 19.38v-4.75C2 12.75 2.75 12 4.62 12H7v2.37C7 16.25 7.75 17 9.62 17H12z\"></path><path d=\"M17 12v2.37c0 1.88-.75 2.63-2.63 2.63H9.62C7.75 17 7 16.25 7 14.37V9.62C7 7.75 7.75 7 9.62 7H12v2.37c0 1.88.75 2.63 2.62 2.63H17z\"></path><path d=\"M22 9.37c0 1.88-.75 2.63-2.63 2.63h-4.75C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2h4.75C21.25 2 22 2.75 22 4.62\"></path>","activity":"<path d=\"M2 12.96V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M7.33 14.49l2.38-3.09c.34-.44.97-.52 1.41-.18l1.83 1.44c.44.34 1.07.26 1.41-.17l2.31-2.98\"></path>","add-circle":"<path d=\"M12 16V8\"></path><path d=\"M14.99 12H16\"></path><path d=\"M8 12h3.81\"></path><path d=\"M12 16V8\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","add-square":"<path d=\"M14.99 12H16\"></path><path d=\"M8 12h3.81\"></path><path d=\"M12 16V8\"></path><path d=\"M2 13.04V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","add":"<path d=\"M12 18V6\"></path><path d=\"M16 12h2\"></path><path d=\"M6 12h5.66\"></path><path d=\"M12 18V6\"></path>","additem":"<path d=\"M2 5.43C2 3.14 3.14 2 5.43 2H10c2.29 0 3.43 1.14 3.43 3.43\"></path><path d=\"M8 16H5.43C3.14 16 2 14.86 2 12.57V9.98\"></path><path d=\"M18.57 22H14c-2.29 0-3.43-1.14-3.43-3.43v-7.14C10.57 9.14 11.71 8 14 8h4.57C20.86 8 22 9.14 22 11.43v7.14c0 2.29-1.14 3.43-3.43 3.43z\"></path><path d=\"M14.87 15h3.26\"></path><path d=\"M16.5 16.63v-3.26\"></path>","airdrop":"<path d=\"M12.55 12.92a2.206 2.206 0 0 1-2.68-2.68 2.205 2.205 0 0 1 4.32.26\"></path><path d=\"M7.64 3.15a8.78 8.78 0 0 0-4.43 7.64c0 2.54 1.08 4.83 2.81 6.43\"></path><path d=\"M18.01 17.19a8.731 8.731 0 0 0 2.78-6.4A8.79 8.79 0 0 0 12 2\"></path><path d=\"M8 14.55c-.92-.98-1.49-2.3-1.49-3.76C6.51 7.76 8.97 5.3 12 5.3c3.03 0 5.49 2.46 5.49 5.49 0 1.46-.57 2.77-1.49 3.76\"></path><path d=\"M10.3 16.66l-1.44 1.79c-1.14 1.43-.13 3.54 1.7 3.54h2.87c1.83 0 2.85-2.12 1.7-3.54l-1.44-1.79c-.86-1.09-2.52-1.09-3.39 0z\"></path>","airplane-square":"<path d=\"M9.86 19l1.68-1.42c.25-.21.67-.21.93 0L14.14 19c.39.2.87 0 1.01-.42l.32-.96c.08-.23 0-.57-.17-.74l-1.64-1.65a.827.827 0 0 1-.21-.51v-1.85c0-.42.31-.62.7-.46l3.35 1.44c.55.24 1.01-.06 1.01-.66v-.93c0-.48-.36-1.04-.81-1.23l-3.94-1.7a.534.534 0 0 1-.3-.46V6.8c0-.68-.5-1.48-1.1-1.79a.763.763 0 0 0-.69 0c-.61.3-1.1 1.11-1.1 1.79v2.07c0 .18-.14.39-.3.46l-3.94 1.7c-.44.19-.81.75-.81 1.23v.93c0 .6.45.9 1.01.66l3.35-1.44c.38-.17.7.04.7.46v1.85c0 .17-.1.4-.21.51L8.7 16.87c-.17.17-.25.51-.17.74l.32.96c.14.43.61.63 1.01.43z\"></path><path d=\"M2 12.95V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","airplane":"<path d=\"M16.27 9.1l-1.97-.85a.554.554 0 0 1-.3-.46v-3c0-.94-.69-2.05-1.53-2.48-.3-.15-.65-.15-.95 0-.84.43-1.53 1.55-1.53 2.49v3c0 .18-.14.39-.3.46l-5.58 2.41c-.62.25-1.12 1.02-1.12 1.69v1.29c0 .84.63 1.25 1.4.92l4.91-2.12c.38-.17.7.04.7.46v2.85c0 .23-.13.55-.29.71l-2.27 2.28c-.24.24-.35.7-.24 1.03l.44 1.33c.18.58.84.86 1.38.58l2.33-1.96c.35-.3.93-.3 1.28 0l2.33 1.96c.54.27 1.2 0 1.4-.58l.44-1.33c.11-.32 0-.79-.24-1.03l-2.27-2.28c-.17-.16-.3-.48-.3-.71v-2.85c0-.42.31-.62.7-.46l4.91 2.12c.77.33 1.4-.08 1.4-.92v-1.29c0-.67-.5-1.44-1.12-1.7\"></path>","airpod":"<path d=\"M2.62 10.97V8.25c0-.77.03-1.46.11-2.07C3.1 2.89 4.65 2 8.88 2h6.25c4.22 0 5.78.89 6.14 4.18.09.61.11 1.3.11 2.07v7.5c0 .77-.03 1.46-.11 2.08-.37 3.28-1.92 4.17-6.15 4.17H8.88c-4.22 0-5.78-.89-6.14-4.17-.09-.62-.12-1.31-.12-2.08v-.74\"></path><path d=\"M21.23 8.92h-4.1\"></path><path d=\"M6.87 8.92h-4.1\"></path><path d=\"M17.13 8.92c0 1.13-.92 2.05-2.05 2.05H8.92c-.56 0-1.08-.23-1.45-.61-.37-.36-.6-.87-.6-1.44 0-1.13.92-2.05 2.05-2.05h6.15c.56 0 1.08.23 1.45.61.38.37.61.88.61 1.44z\"></path>","airpods":"<path d=\"M6.72 9.56h-.94A3.79 3.79 0 0 1 2 5.78C2 3.7 3.7 2 5.78 2h1.89a2.84 2.84 0 0 1 2.83 2.83V17.1c0 1.04-.85 1.89-1.89 1.89s-1.89-.85-1.89-1.89V9.56z\"></path><path d=\"M5.78 6.72a.939.939 0 1 1 0-1.88\"></path><path d=\"M17.28 13.52V9.56h.94c2.08 0 3.78-1.7 3.78-3.78S20.3 2 18.22 2h-1.89a2.84 2.84 0 0 0-2.83 2.83V17.1c0 1.04.85 1.89 1.89 1.89s1.89-.85 1.89-1.89\"></path><path d=\"M18.22 6.72a.939.939 0 1 0 0-1.88\"></path><path d=\"M8.5 22v-3\"></path><path d=\"M15.5 22v-3\"></path>","alarm":"<path d=\"M2 22h20\"></path><path d=\"M21 16.03V15A9 9 0 0 0 8 6.94 8.994 8.994 0 0 0 3 15v7h18v-2.03\"></path><path d=\"M12 2v1\"></path><path d=\"M4 4l1 1\"></path><path d=\"M20 4l-1 1\"></path>","align-bottom":"<path d=\"M19.26 5.1v11.8c0 1.5-.64 2.1-2.23 2.1h-1.04c-1.59 0-2.23-.6-2.23-2.1V5.1\"></path><path d=\"M10.76 5.1v6.8c0 1.5-.64 2.1-2.23 2.1\"></path><path d=\"M5.26 5.1v6.8\"></path><path d=\"M2 5h20\"></path>","align-horizontally":"<path d=\"M4.75 17.4V6.6c0-1.5.64-2.1 2.23-2.1h1.04c1.59 0 2.23.6 2.23 2.1v10.8c0 1.5-.64 2.1-2.23 2.1H6.98c-1.59 0-2.23-.6-2.23-2.1z\"></path><path d=\"M18.75 15.4V8.6c0-1.5-.64-2.1-2.23-2.1h-1.04c-1.59 0-2.23.6-2.23 2.1v6.8c0 1.5.64 2.1 2.23 2.1\"></path><path d=\"M2 12h2.4\"></path><path d=\"M11 12h2\"></path><path d=\"M22 12h-2.69\"></path>","align-left":"<path d=\"M5.1 19.25h11.8c1.5 0 2.1-.64 2.1-2.23v-1.04c0-1.59-.6-2.23-2.1-2.23H5.1\"></path><path d=\"M5.1 10.75h6.8c1.5 0 2.1-.64 2.1-2.23\"></path><path d=\"M5.1 5.25h6.8\"></path><path d=\"M5 1.99v20\"></path>","align-right":"<path d=\"M18.9 19.25H7.1c-1.5 0-2.1-.64-2.1-2.23v-1.04c0-1.59.6-2.23 2.1-2.23h11.8\"></path><path d=\"M10 8.52c0 1.59.6 2.23 2.1 2.23h6.8\"></path><path d=\"M18.9 5.25h-6.8\"></path><path d=\"M19 1.99v20\"></path>","align-vertically":"<path d=\"M17.4 19.25H6.6c-1.5 0-2.1-.64-2.1-2.23v-1.04c0-1.59.6-2.23 2.1-2.23h10.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23z\"></path><path d=\"M15.4 5.25H8.6c-1.5 0-2.1.64-2.1 2.23v1.04c0 1.59.6 2.23 2.1 2.23h6.8c1.5 0 2.1-.64 2.1-2.23\"></path><path d=\"M12 22v-2.4\"></path><path d=\"M12 13v-2\"></path><path d=\"M12 2v2.69\"></path>","aquarius":"<path d=\"M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7\"></path><path d=\"M12 16v6\"></path><path d=\"M15 19H9\"></path>","archive-1":"<path d=\"M9.25 9.05a8 8 0 0 0 5.5 0\"></path><path d=\"M3.32 10v9.95c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86c0-2.12-1.74-3.86-3.86-3.86H7.18C5.05 2 3.32 3.74 3.32 5.86\"></path>","archive-2":"<path d=\"M4.5 13.01v-2.79\"></path><path d=\"M19.5 10.22V19c0 2-.5 3-3 3h-9c-2.5 0-3-1-3-3v-2.03\"></path><path d=\"M5 2h14c2 0 3 1 3 3v2c0 2-1 3-3 3H5c-2 0-3-1-3-3V5c0-2 1-3 3-3z\"></path><path d=\"M10.18 14h3.64\"></path>","archive-add":"<path d=\"M14.5 10.65h-5\"></path><path d=\"M12 8.21v5\"></path><path d=\"M3.32 10.04v9.91c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86c0-2.12-1.74-3.86-3.86-3.86H7.18C5.05 2 3.32 3.74 3.32 5.86\"></path>","archive-book":"<path d=\"M3 7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5v-6.05\"></path><path d=\"M15.5 5.99v3.87c0 .44-.52.66-.84.37l-2.32-2.14a.496.496 0 0 0-.68 0l-2.32 2.14c-.32.29-.84.07-.84-.37V2h7\"></path><path d=\"M13.25 14h4.25\"></path><path d=\"M9 18h8.5\"></path>","archive-minus":"<path d=\"M14.5 10.65h-5\"></path><path d=\"M3.32 10.01v9.93c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86c0-2.12-1.74-3.86-3.86-3.86H7.18C5.05 2 3.32 3.74 3.32 5.86\"></path>","archive-slash":"<path d=\"M22 2L2 22\"></path><path d=\"M20.68 8.71v11c0 2.01-1.44 2.86-3.2 1.88L11 17.54\"></path><path d=\"M3.32 5.86C3.32 3.74 5.05 2 7.18 2h9.65c1.21 0 2.29.56 3 1.44\"></path><path d=\"M3.32 19.95v-9.94\"></path>","archive-tick":"<path d=\"M3.32 10.02v9.93c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86c0-2.12-1.74-3.86-3.86-3.86H7.18C5.05 2 3.32 3.74 3.32 5.86\"></path><path d=\"M9.59 11l1.5 1.5 4-4\"></path>","archive":"<path d=\"M2 13v2c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M18 7.75v6.75c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V7.75c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2z\"></path><path d=\"M19 15.75h-1\"></path><path d=\"M6 15.75H5\"></path><path d=\"M18 14v-3c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3\"></path><path d=\"M18 14.5v1.25h-3.5a2.5 2.5 0 0 1-5 0H6V14.5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2z\"></path>","arrange-circle-2":"<path d=\"M17.15 13.82l-3.04 3.04\"></path><path d=\"M6.85 13.82h10.3\"></path><path d=\"M6.85 10.18l3.04-3.04\"></path><path d=\"M14.11 10.18H6.85\"></path><path d=\"M17.149 10.18h-.52\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","arrange-circle":"<path d=\"M10.18 17.15l-3.04-3.04\"></path><path d=\"M10.18 6.85v10.3\"></path><path d=\"M13.82 6.85l3.04 3.04\"></path><path d=\"M13.82 14.11V6.85\"></path><path d=\"M13.82 17.15v-.52\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","arrange-square-2":"<path d=\"M10.18 17.15l-3.04-3.04\"></path><path d=\"M10.18 6.85v10.3\"></path><path d=\"M13.82 6.85l3.04 3.04\"></path><path d=\"M13.82 17.15V6.85\"></path><path d=\"M2 14v1c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","arrange-square":"<path d=\"M17.15 13.82l-3.04 3.04\"></path><path d=\"M6.85 13.82h10.3\"></path><path d=\"M6.85 10.18l3.04-3.04\"></path><path d=\"M17.15 10.18H6.85\"></path><path d=\"M2 14v1c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","arrow-2":"<path d=\"M17.28 10.45L21 6.73l-3.72-3.72\"></path><path d=\"M10.01 6.73H21\"></path><path d=\"M3 6.73h2.99\"></path><path d=\"M6.72 13.55L3 17.27l3.72 3.72\"></path><path d=\"M3 17.27h11.09\"></path><path d=\"M21 17.27h-2.97\"></path>","arrow-3":"<path d=\"M13.55 17.28L17.27 21l3.72-3.72\"></path><path d=\"M17.27 10.01V21\"></path><path d=\"M17.27 3v2.99\"></path><path d=\"M10.45 6.72L6.73 3 3.01 6.72\"></path><path d=\"M6.73 3v11.09\"></path><path d=\"M6.73 21v-2.97\"></path>","arrow-bottom":"<path d=\"M6.31 11.22C4.66 8.35 6.01 6 9.33 6h5.34c3.31 0 4.67 2.35 3.01 5.22l-1.34 2.31L15 15.84c-1.66 2.87-4.37 2.87-6.03 0\"></path>","arrow-circle-down":"<path d=\"M4.87 4.99A9.936 9.936 0 0 0 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-.69 0-1.36.07-2.02.2\"></path><path d=\"M8.47 10.74L12 14.26l3.53-3.52\"></path>","arrow-circle-left":"<path d=\"M4.87 4.99A9.936 9.936 0 0 0 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-.69 0-1.36.07-2.02.2\"></path><path d=\"M13.26 15.53L9.74 12l.96-.97 2.2-2.2.36-.36\"></path>","arrow-circle-right":"<path d=\"M4.87 4.99A9.936 9.936 0 0 0 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-.69 0-1.36.07-2.02.2\"></path><path d=\"M10.74 15.53L14.26 12l-3.52-3.53\"></path>","arrow-circle-up":"<path d=\"M4.87 4.99A9.936 9.936 0 0 0 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-.69 0-1.36.07-2.02.2\"></path><path d=\"M8.47 13.26L12 9.74l3.53 3.52\"></path>","arrow-down-1":"<path d=\"M18.07 14.43L12 20.5l-6.07-6.07\"></path><path d=\"M12 12v8.33\"></path><path d=\"M12 3.5v4.53\"></path>","arrow-down-2":"<path d=\"M16.01 12.85l-2.62 2.62c-.77.77-2.03.77-2.8 0L4.08 8.95\"></path><path d=\"M19.92 8.95l-1.04 1.04\"></path>","arrow-down":"<path d=\"M12 8.5v6\"></path><path d=\"M9 12.5l3 3 3-3\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","arrow-left-1":"<path d=\"M9.57 5.93L3.5 12l6.07 6.07\"></path><path d=\"M12.82 12H3.5\"></path><path d=\"M20.33 12h-3.48\"></path>","arrow-left-2":"<path d=\"M11.19 7.94l-2.62 2.62c-.77.77-.77 2.03 0 2.8l6.52 6.52\"></path><path d=\"M15.09 4.04l-1.04 1.04\"></path>","arrow-left-3":"<path d=\"M12.78 6.31C15.65 4.66 18 6.01 18 9.33v5.34c0 3.31-2.35 4.67-5.22 3.01l-2.31-1.34L8.16 15c-2.87-1.66-2.87-4.37 0-6.03\"></path>","arrow-left":"<path d=\"M15.5 12h-6\"></path><path d=\"M11.5 9l-3 3 3 3\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","arrow-right-1":"<path d=\"M15.85 8.99c2.87 1.66 2.87 4.37 0 6.03l-2.31 1.34-2.31 1.34C8.35 19.34 6 17.99 6 14.67V9.33c0-3.31 2.35-4.67 5.22-3.01\"></path>","arrow-right-2":"<path d=\"M8.5 12h6\"></path><path d=\"M12.5 15l3-3-3-3\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","arrow-right-3":"<path d=\"M12.9 7.94l2.62 2.62c.77.77.77 2.03 0 2.8L9 19.87\"></path><path d=\"M9 4.04l1.04 1.04\"></path>","arrow-right":"<path d=\"M14.43 5.93L20.5 12l-6.07 6.07\"></path><path d=\"M11.01 12h9.32\"></path><path d=\"M3.5 12h3.47\"></path>","arrow-square-down":"<path d=\"M2 12.99V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M8.47 10.64L12 14.16l3.53-3.52\"></path>","arrow-square-left":"<path d=\"M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M13.26 15.53L9.74 12l3.52-3.53\"></path>","arrow-square-right":"<path d=\"M2 13.01V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M10.74 15.53L14.26 12l-3.52-3.53\"></path>","arrow-square-up":"<path d=\"M2 13.04V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M8.47 13.46L12 9.94l3.53 3.52\"></path>","arrow-square":"<path d=\"M12.14 15.07v-1.96c0-2.52 2.04-4.57 4.57-4.57h1.96\"></path><path d=\"M5.62 8.55h1.96c2.52 0 4.57 2.04 4.57 4.57v4.13\"></path><path d=\"M7.14 6.75l-1.8 1.8 1.8 1.8\"></path><path d=\"M16.86 6.75l1.8 1.8-1.8 1.8\"></path><path d=\"M2 9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7H9c-5 0-7-2-7-7v-1.98\"></path>","arrow-swap-horizontal":"<path d=\"M3.5 9.01l5.01-5.02\"></path><path d=\"M13.01 9.01H3.5\"></path><path d=\"M20.5 9.01H17\"></path><path d=\"M20.5 14.99l-5.01 5.02\"></path><path d=\"M10.99 14.99h9.51\"></path><path d=\"M3.5 14.99H7\"></path>","arrow-swap":"<path d=\"M14.99 3.5l5.02 5.01\"></path><path d=\"M14.99 13.01V3.5\"></path><path d=\"M14.99 20.5V17\"></path><path d=\"M9.01 20.5l-5.02-5.01\"></path><path d=\"M9.01 10.99v9.51\"></path><path d=\"M9.01 3.5V7\"></path>","arrow-up-1":"<path d=\"M12 15.5v-6\"></path><path d=\"M9 11.5l3-3 3 3\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","arrow-up-2":"<path d=\"M17.69 12.78c1.66 2.87.3 5.22-3.01 5.22H9.33c-3.31 0-4.67-2.35-3.01-5.22l1.34-2.31L9 8.16c1.66-2.87 4.37-2.87 6.03 0\"></path>","arrow-up-3":"<path d=\"M16.01 11.15L13.4 8.53c-.77-.77-2.03-.77-2.8 0l-6.52 6.52\"></path><path d=\"M19.92 15.05l-1.04-1.04\"></path>","arrow-up":"<path d=\"M18.07 9.57L12 3.5 5.93 9.57\"></path><path d=\"M12 12V3.67\"></path><path d=\"M12 20.5v-4.53\"></path>","arrow":"<path d=\"M12 22v-2\"></path><path d=\"M12 18v-2\"></path><path d=\"M12 14v-3c0-3.87 3.13-7 7-7h3\"></path><path d=\"M9.45 5.6A6.973 6.973 0 0 1 12 11v3\"></path><path d=\"M2 4h3\"></path><path d=\"M4 2L2 4l2 2\"></path><path d=\"M20 2l2 2-2 2\"></path>","attach-circle":"<path d=\"M12.2 11.8l-1.41 1.41c-.78.78-.78 2.05 0 2.83.78.78 2.05.78 2.83 0l2.22-2.22a4.008 4.008 0 0 0 0-5.66 4.008 4.008 0 0 0-5.66 0l-2.42 2.42a3.428 3.428 0 0 0 0 4.85\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","attach-square":"<path d=\"M2 13.02V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M12.2 11.8l-1.41 1.41c-.78.78-.78 2.05 0 2.83.78.78 2.05.78 2.83 0l2.22-2.22a4.008 4.008 0 0 0 0-5.66 4.008 4.008 0 0 0-5.66 0l-2.42 2.42a3.428 3.428 0 0 0 0 4.85\"></path>","audio-square":"<path d=\"M2 12.99V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M9.62 17.3a2.12 2.12 0 1 0 0-4.24 2.12 2.12 0 0 0 0 4.24z\"></path><path d=\"M11.74 15.18V7.77\"></path><path d=\"M13.13 6.77l2.34.78c.57.19 1.03.83 1.03 1.43v.62c0 .81-.63 1.26-1.39 1l-2.34-.78c-.57-.19-1.03-.83-1.03-1.43v-.62c0-.8.62-1.26 1.39-1z\"></path>","autobrightness":"<path d=\"M4.24 6.2c0-1.06.87-1.93 1.93-1.93H7.9c.4 0 .96-.21 1.26-.46l1.58-1.35c.7-.59 1.83-.59 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58c.59.7.59 1.83 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35c-.7.59-1.83.59-2.51 0l-1.58-1.35c-.3-.25-.87-.46-1.26-.46H6.17c-1.06 0-1.93-.87-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l.56-.66\"></path><path d=\"M8.5 15.94L12 8.06l3.5 7.88\"></path><path d=\"M13.75 13.31h-3.5\"></path>","award":"<path d=\"M18.02 18.96c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98L13.29 5.3c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l1.52-.88\"></path><path d=\"M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56\"></path><path d=\"M12.28 16.42a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.35-.55.92-.55 1.27 0l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52\"></path>","back-square":"<path d=\"M9 15.38h4.92c1.7 0 3.08-1.38 3.08-3.08 0-1.7-1.38-3.08-3.08-3.08H7.15\"></path><path d=\"M8.57 10.77L7 9.19l1.57-1.57\"></path><path d=\"M2 14v1c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","backward-10-seconds":"<path d=\"M10.02 4.47L12 2\"></path><path d=\"M3.99 16.96a8.89 8.89 0 0 0 16.9-3.85A8.89 8.89 0 0 0 12 4.22c-.68 0-1.34.09-1.98.24\"></path><path d=\"M4.91 7.8c-1.11 1.48-1.8 3.31-1.8 5.31\"></path><path d=\"M9.54 15.92v-5.34l-1.5 1.67\"></path><path d=\"M14 10.58c1.1 0 2 .9 2 2v1.35c0 1.1-.9 2-2 2s-2-.9-2-2v-1.35a2 2 0 0 1 2-2z\"></path>","backward-15-seconds":"<path d=\"M10.02 4.47L12 2\"></path><path d=\"M3.99 16.96a8.89 8.89 0 0 0 16.9-3.85A8.89 8.89 0 0 0 12 4.22c-.68 0-1.34.09-1.98.24\"></path><path d=\"M4.91 7.8c-1.11 1.48-1.8 3.31-1.8 5.31\"></path><path d=\"M15.96 10.83H12.9l-.76 2.29h2.29a1.53 1.53 0 1 1 0 3.06h-2.29\"></path><path d=\"M9.54 16.17v-5.34l-1.5 1.67\"></path>","backward-5-seconds":"<path d=\"M13.91 10.83h-3.06l-.76 2.29h2.29a1.53 1.53 0 1 1 0 3.06h-2.29\"></path><path d=\"M10.02 4.47L12 2\"></path><path d=\"M3.99 16.96a8.89 8.89 0 0 0 16.9-3.85A8.89 8.89 0 0 0 12 4.22c-.68 0-1.34.09-1.98.24\"></path><path d=\"M4.91 7.8c-1.11 1.48-1.8 3.31-1.8 5.31\"></path>","backward-item":"<path d=\"M22 5.15v2.7c0 2.25-.9 3.15-3.15 3.15h-2.7C13.9 11 13 10.1 13 7.85v-2.7C13 2.9 13.9 2 16.15 2h2.7C21.1 2 22 2.9 22 5.15z\"></path><path d=\"M11 16.15v2.7C11 21.1 10.1 22 7.85 22h-2.7C2.9 22 2 21.1 2 18.85v-2.7C2 13.9 2.9 13 5.15 13h2.7c2.25 0 3.15.9 3.15 3.15z\"></path><path d=\"M8.96 6.75c.41-.09.89-.13 1.42-.13H13v1.23c0 2.25.9 3.15 3.15 3.15h1.23v2.62c0 2.69-1.07 3.76-3.76 3.76H11v-1.23C11 13.9 10.1 13 7.85 13H6.62v-2.62\"></path>","backward":"<path d=\"M22 8.34v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.82-3.17-1.83c-.2-.12-.36-.25-.49-.41v-2.56c.13-.16.29-.29.49-.41l3.17-1.83 3.17-1.82c1.3-.77 2.93.17 2.93 1.67z\"></path><path d=\"M9.32 6.65c1.3-.75 2.93.19 2.93 1.69v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.82-3.17-1.83c-1.3-.75-1.3-2.62 0-3.38l2.41-1.39\"></path>","bag-2":"<path d=\"M7.5 7.67V6.7c0-2.25 1.81-4.46 4.06-4.67a4.5 4.5 0 0 1 4.94 4.48v1.38\"></path><path d=\"M3.81 16.56l.23 1.87C4.26 20.39 4.98 22 9 22h6c4.02 0 4.74-1.61 4.95-3.57l.75-6C20.97 9.99 20.27 8 16 8H8c-4.27 0-4.97 1.99-4.7 4.43\"></path><path d=\"M15.495 12h.009\"></path><path d=\"M8.495 12h.008\"></path>","bag-cross-1":"<path d=\"M12 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8z\"></path><path d=\"M13.07 16.11L10.95 14\"></path><path d=\"M13.05 14.02l-2.12 2.12\"></path><path d=\"M3.81 16.56l.23 1.87C4.26 20.39 4.98 22 9 22h6c4.02 0 4.74-1.61 4.95-3.57l.75-6C20.97 9.99 20.27 8 16 8H8c-4.27 0-4.97 1.99-4.7 4.43\"></path><path d=\"M7.5 7.67V6.7c0-2.25 1.81-4.46 4.06-4.67a4.5 4.5 0 0 1 4.94 4.48v1.38\"></path>","bag-cross":"<path d=\"M13.39 17.36l-2.75-2.75\"></path><path d=\"M13.36 14.64l-2.75 2.75\"></path><path d=\"M8.81 2L5.19 5.63\"></path><path d=\"M15.19 2l3.62 3.63\"></path><path d=\"M2 7.85c0-1.85.99-2 2.22-2h15.56c1.23 0 2.22.15 2.22 2 0 2.15-.99 2-2.22 2H4.22C2.99 9.85 2 10 2 7.85z\"></path><path d=\"M4.91 18.64C5.23 20.58 6 22 8.86 22h6.03c3.11 0 3.57-1.36 3.93-3.24L20.5 10\"></path><path d=\"M3.5 10l.69 4.25\"></path>","bag-happy":"<path d=\"M15.34 15.28c.1-.33.16-.67.16-1.03\"></path><path d=\"M8.5 14.25c0 1.92 1.58 3.5 3.5 3.5.36 0 .71-.06 1.04-.16\"></path><path d=\"M8.81 2L5.19 5.63\"></path><path d=\"M15.19 2l3.62 3.63\"></path><path d=\"M2 7.85c0-1.85.99-2 2.22-2h15.56c1.23 0 2.22.15 2.22 2 0 2.15-.99 2-2.22 2H4.22C2.99 9.85 2 10 2 7.85z\"></path><path d=\"M4.91 18.64C5.23 20.58 6 22 8.86 22h6.03c3.11 0 3.57-1.36 3.93-3.24L20.5 10\"></path><path d=\"M3.5 10l.69 4.25\"></path>","bag-tick-2":"<path d=\"M12 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8z\"></path><path d=\"M10.44 15l.65.65c.19.19.5.2.69.01l1.78-1.64\"></path><path d=\"M3.81 16.56l.23 1.87C4.26 20.39 4.98 22 9 22h6c4.02 0 4.74-1.61 4.95-3.57l.75-6C20.97 9.99 20.27 8 16 8H8c-4.27 0-4.97 1.99-4.7 4.43\"></path><path d=\"M7.5 7.67V6.7c0-2.25 1.81-4.46 4.06-4.67a4.5 4.5 0 0 1 4.94 4.48v1.38\"></path>","bag-tick":"<path d=\"M9.62 16l1.5 1.5 3.25-3\"></path><path d=\"M8.81 2L5.19 5.63\"></path><path d=\"M15.19 2l3.62 3.63\"></path><path d=\"M2 7.85c0-1.85.99-2 2.22-2h15.56c1.23 0 2.22.15 2.22 2 0 2.15-.99 2-2.22 2H4.22C2.99 9.85 2 10 2 7.85z\"></path><path d=\"M4.91 18.64C5.23 20.58 6 22 8.86 22h6.03c3.11 0 3.57-1.36 3.93-3.24L20.5 10\"></path><path d=\"M3.5 10l.69 4.25\"></path>","bag-timer":"<path d=\"M12 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8z\"></path><path d=\"M12.25 13.75v.93c0 .35-.18.68-.49.86L11 16\"></path><path d=\"M3.81 16.56l.23 1.87C4.26 20.39 4.98 22 9 22h6c4.02 0 4.74-1.61 4.95-3.57l.75-6C20.97 9.99 20.27 8 16 8H8c-4.27 0-4.97 1.99-4.7 4.43\"></path><path d=\"M7.5 7.67V6.7c0-2.25 1.81-4.46 4.06-4.67a4.5 4.5 0 0 1 4.94 4.48v1.38\"></path>","bag":"<path d=\"M8.81 2L5.19 5.63\"></path><path d=\"M15.19 2l3.62 3.63\"></path><path d=\"M2 7.85c0-1.85.99-2 2.22-2h15.56c1.23 0 2.22.15 2.22 2 0 2.15-.99 2-2.22 2H4.22C2.99 9.85 2 10 2 7.85z\"></path><path d=\"M9.76 14v3.55\"></path><path d=\"M14.36 14v3.55\"></path><path d=\"M4.91 18.64C5.23 20.58 6 22 8.86 22h6.03c3.11 0 3.57-1.36 3.93-3.24L20.5 10\"></path><path d=\"M3.5 10l.72 4.38\"></path>","bank":"<path d=\"M2.63 5.75c-.35.14-.63.56-.63.93V10c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V6.68c0-.37-.28-.79-.63-.93l-9-3.6c-.2-.08-.54-.08-.74 0L6.79 4.09\"></path><path d=\"M22 22H2v-3c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v3z\"></path><path d=\"M4 18v-7\"></path><path d=\"M8 18v-7\"></path><path d=\"M12 18v-7\"></path><path d=\"M16 18v-7\"></path><path d=\"M20 18v-7\"></path><path d=\"M1 22h22\"></path><path d=\"M12 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z\"></path>","barcode":"<path d=\"M2 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-2.91\"></path><path d=\"M6 8v8\"></path><path d=\"M9 8v4\"></path><path d=\"M9 15v1\"></path><path d=\"M15 8v1\"></path><path d=\"M12 8v8\"></path><path d=\"M15 12v4\"></path><path d=\"M18 8v8\"></path>","battery-3full":"<path d=\"M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5\"></path><path d=\"M6.38 10c.33 1.31.33 2.69 0 4\"></path><path d=\"M9.88 10c.33 1.31.33 2.69 0 4\"></path><path d=\"M11.01 5H13c4 0 5 1 5 5v4c0 4-1 5-5 5H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5\"></path>","battery-charging":"<path d=\"M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5\"></path><path d=\"M11.27 12c.77 0 1.25.83.87 1.5L10 16\"></path><path d=\"M10 8l-1.89 2.5c-.39.67.09 1.5.86 1.5\"></path><path d=\"M2 10c0-4 1-5 5-5\"></path><path d=\"M7 19c-4 0-5-1-5-5\"></path><path d=\"M13 5c4 0 5 1 5 5v4c0 4-1 5-5 5\"></path>","battery-disable":"<path d=\"M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5\"></path><path d=\"M4 21.5l4.09-6.47L16 2.5\"></path><path d=\"M2 14c0 3.4.72 4.63 3.39 4.92\"></path><path d=\"M7 5c-4 0-5 1-5 5\"></path><path d=\"M13 19c4 0 5-1 5-5v-4c0-3.39-.72-4.63-3.37-4.92\"></path>","battery-empty-1":"<path d=\"M10.99 5H13c4 0 5 1 5 5v4c0 4-1 5-5 5H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5\"></path><path d=\"M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5\"></path><path d=\"M6.38 10c.24.98.31 1.99.19 2.99-.04.34-.1.68-.19 1.01\"></path>","battery-empty":"<path d=\"M10.97 5H13c4 0 5 1 5 5v4c0 2-.25 3.25-1 4s-2 1-4 1H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5\"></path><path d=\"M20.5 9.5c.86 0 1.23.16 1.38.49.12.25.12.58.12 1.01v2c0 1 0 1.5-1.5 1.5\"></path>","battery-full":"<path d=\"M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5\"></path><path d=\"M6.38 10c.33 1.31.33 2.69 0 4\"></path><path d=\"M9.88 10c.33 1.31.33 2.69 0 4\"></path><path d=\"M13.38 10c.33 1.31.33 2.69 0 4\"></path><path d=\"M10.97 5H13c4 0 5 1 5 5v4c0 4-1 5-5 5H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5\"></path>","bezier":"<path d=\"M3 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path><path d=\"M21 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path><path d=\"M19 7h-4\"></path><path d=\"M9 7H5\"></path><path d=\"M7.5 16.5v2c0 .61-.37 1.14-.89 1.36A1.4 1.4 0 0 1 6 20H4c-.83 0-1.5-.67-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5z\"></path><path d=\"M21.5 16.5v2c0 .83-.67 1.5-1.5 1.5h-2a1.4 1.4 0 0 1-.61-.14c-.52-.22-.89-.75-.89-1.36v-2c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5z\"></path><path d=\"M15 5.5v3c0 .82-.68 1.5-1.5 1.5h-3C9.68 10 9 9.32 9 8.5v-3c0-.82.68-1.5 1.5-1.5h3c.82 0 1.5.68 1.5 1.5z\"></path><path d=\"M15 7.73c1.31.66 2.39 1.74 3.1 3.08\"></path><path d=\"M5.03 15c-.02-.17-.03-.33-.03-.5 0-2.99 1.63-5.57 4-6.77\"></path>","bill":"<path d=\"M3.67 10.95v3.52c0 .98.46 1.91 1.25 2.5l5.21 3.9c1.11.83 2.64.83 3.75 0l5.21-3.9c.79-.59 1.25-1.52 1.25-2.5V2.5H3.68v3.54\"></path><path d=\"M2 2.5h20\"></path><path d=\"M8 8h8\"></path><path d=\"M8 13h4\"></path><path d=\"M15 13h1\"></path>","bitcoin-card":"<path d=\"M2 8.5h11\"></path><path d=\"M6 16.5h2\"></path><path d=\"M10.5 16.5h4\"></path><path d=\"M2 8.35v-.46c0-3.51.89-4.39 4.44-4.39h6.84\"></path><path d=\"M22 11.33v4.78c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11v-3.06\"></path><path d=\"M17 3.25h3.13c.69 0 1.25.63 1.25 1.25 0 .69-.56 1.25-1.25 1.25H17v-2.5z\"></path><path d=\"M17 5.75h3.57c.79 0 1.43.56 1.43 1.25s-.64 1.25-1.43 1.25H17v-2.5z\"></path><path d=\"M18.76 8.25V9.5\"></path><path d=\"M18.76 2v1.25\"></path><path d=\"M18.19 3.25H16\"></path><path d=\"M18.19 8.25H16\"></path>","bitcoin-convert":"<path d=\"M23 15.97c0 3.87-3.13 7-7 7l1.05-1.75\"></path><path d=\"M1 7.97c0-3.87 3.13-7 7-7L6.95 2.72\"></path><path d=\"M6.62 13.07h2.81c.62 0 1.13.56 1.13 1.13 0 .62-.5 1.13-1.13 1.13H6.62v-2.26z\"></path><path d=\"M6.62 15.33h3.22c.71 0 1.29.5 1.29 1.13 0 .62-.58 1.13-1.29 1.13H6.62v-2.26z\"></path><path d=\"M8.42 17.58v1.12\"></path><path d=\"M8.42 11.95v1.12\"></path><path d=\"M2.5 15.33c0-3.41 2.76-6.17 6.17-6.17.16 0 .31.01.48.02 3.03.23 5.45 2.65 5.68 5.68.01.16.02.31.02.48 0 3.41-2.76 6.17-6.17 6.17-2.13 0-4.01-1.08-5.12-2.72\"></path><path d=\"M21.5 8.67c0 3.41-2.76 6.17-6.17 6.17h-.49a6.174 6.174 0 0 0-5.68-5.68v-.49c0-3.41 2.76-6.17 6.17-6.17 1.8 0 3.42.77 4.55 2\"></path>","bitcoin-refresh":"<path d=\"M4.47 11.42L2.73 9.68 1 11.42\"></path><path d=\"M19.53 12.58l1.74 1.74 1.74-1.74\"></path><path d=\"M12 2.74c-2.92 0-5.53 1.36-7.23 3.47\"></path><path d=\"M21.26 14.32V12c0-3.68-2.15-6.86-5.26-8.36\"></path><path d=\"M12 21.26c2.92 0 5.53-1.36 7.23-3.47\"></path><path d=\"M2.74 9.68V12c0 3.65 2.11 6.81 5.19 8.32\"></path><path d=\"M9 8.5h4.38c.97 0 1.75.88 1.75 1.75 0 .97-.78 1.75-1.75 1.75H9V8.5z\"></path><path d=\"M9 12h5c1.1 0 2 .78 2 1.75s-.9 1.75-2 1.75H9V12z\"></path><path d=\"M11.8 15.5v1.75\"></path><path d=\"M11.8 6.75V8.5\"></path>","blend-2":"<path d=\"M8.97 2c3.55 0 6.48 2.64 6.93 6.07.05.3.07.61.07.93 0 3.87-3.13 7-7 7-.32 0-.63-.02-.93-.07A6.986 6.986 0 0 1 1.97 9c0-1.93.78-3.68 2.05-4.95\"></path><path d=\"M21.97 15c0 3.87-3.13 7-7 7-3.55 0-6.48-2.64-6.93-6.07.3.05.61.07.93.07 3.87 0 7-3.13 7-7 0-.32-.02-.63-.07-.93 3.43.45 6.07 3.38 6.07 6.93z\"></path><path d=\"M14.12 14.12l1.31 1.29\"></path><path d=\"M16.97 12l-1-1\"></path><path d=\"M11.97 17l-1-1\"></path>","blend":"<path d=\"M21.97 12c0 3.31-2.69 6-6 6a5.93 5.93 0 0 1-4-1.54c1.23-1.09 2-2.69 2-4.46s-.77-3.37-2-4.46a5.93 5.93 0 0 1 4-1.54c3.31 0 6 2.69 6 6z\"></path><path d=\"M3.44 15.92A5.972 5.972 0 0 1 1.97 12c0-3.31 2.69-6 6-6 1.54 0 2.94.58 4 1.54 1.23 1.09 2 2.69 2 4.46s-.77 3.37-2 4.46a5.93 5.93 0 0 1-4 1.54\"></path>","bluetooth-2":"<path d=\"M14.23 3.39l-1.13-.95c-1-.83-1.82-.45-1.82.85v17.42c0 1.3.82 1.68 1.82.85l3.85-3.21c.54-.45.55-1.2.04-1.67L4.64 5.36\"></path><path d=\"M4.64 18.64L16.99 7.32c.51-.47.5-1.22-.04-1.67\"></path><path d=\"M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z\"></path><path d=\"M19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z\"></path>","bluetooth-circle":"<path d=\"M8.59 15.56l6.62-6.07a.57.57 0 0 0-.02-.89l-2.06-1.72c-.54-.45-.97-.24-.97.46v9.33c0 .7.44.9.97.46l2.06-1.72c.29-.24.3-.64.02-.89L8.59 8.45\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","bluetooth-rectangle":"<path d=\"M8.59 15.56l6.62-6.07a.57.57 0 0 0-.02-.89l-2.06-1.72c-.54-.45-.97-.24-.97.46v9.33c0 .7.44.9.97.46l2.06-1.72c.29-.24.3-.64.02-.89L8.59 8.45\"></path><path d=\"M4 7c0-3 2-5 5-5h6c3 0 5 2 5 5v10c0 3-2 5-5 5H9c-3 0-5-2-5-5v-5.97\"></path>","bluetooth":"<path d=\"M14.95 3.39l-1.13-.95c-1-.83-1.82-.45-1.82.85v17.42c0 1.3.82 1.68 1.82.85l3.85-3.21c.54-.45.55-1.2.04-1.67L5.36 5.36\"></path><path d=\"M5.36 18.64L17.71 7.32c.51-.47.5-1.22-.04-1.67\"></path>","blur":"<path d=\"M3.9 13.9c0 4.46 3.63 8.1 8.1 8.1s8.1-3.63 8.1-8.09c.03-5.43-5.6-10.24-7.49-11.7\"></path><path d=\"M12.61 2.21a.991.991 0 0 0-1.22 0c-1.3.99-4.32 3.5-6.1 6.75\"></path><path d=\"M12 2v20\"></path><path d=\"M12 18.96l7.7-3.74\"></path><path d=\"M12 13.96l7.37-3.58\"></path><path d=\"M12 8.96l5.03-2.45\"></path>","book-1":"<path d=\"M20.5 11v6c0 .14 0 .28-.01.42\"></path><path d=\"M3.5 18V7c0-4 1-5 5-5h7c4 0 5 1 5 5\"></path><path d=\"M6.35 15H20.5v3.5c0 1.93-1.57 3.5-3.5 3.5H7c-1.93 0-3.5-1.57-3.5-3.5v-.65C3.5 16.28 4.78 15 6.35 15z\"></path><path d=\"M8 7h8\"></path><path d=\"M8 10.5h5\"></path>","book-saved":"<path d=\"M2 4.66c0-1.19.97-2.09 2.16-1.99 2.1.17 5.28 1.23 7.06 2.34l.25.15c.29.18.77.18 1.06 0l.17-.11c.63-.39 1.43-.78 2.3-1.13V8l2-1.33L19 8V2.78c.27-.05.53-.08.77-.1h.06c1.19-.1 2.17.79 2.17 1.99v12.07c0 .96-.78 1.86-1.74 1.98l-.33.04c-2.18.29-5.54 1.4-7.46 2.46-.26.15-.69.15-.96 0l-.04-.02c-1.92-1.05-5.27-2.15-7.44-2.44l-.29-.04C2.78 18.6 2 17.7 2 16.74V8.85\"></path><path d=\"M12 5.49v15\"></path><path d=\"M19 2.78V8l-2-1.33L15 8V3.92c1.31-.52 2.77-.94 4-1.14z\"></path>","book-square":"<path d=\"M2 13.02V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M18.38 15.27V7.58c0-.77-.62-1.33-1.38-1.27h-.04c-1.34.11-3.37.8-4.51 1.51l-.11.07c-.18.11-.49.11-.68 0l-.16-.1C10.37 7.08 8.34 6.41 7 6.3c-.76-.06-1.38.51-1.38 1.27v7.7c0 .61.5 1.19 1.11 1.26l.18.03c1.38.18 3.52.89 4.74 1.56l.03.01c.17.1.45.1.61 0 1.22-.68 3.37-1.38 4.76-1.57l.21-.03c.62-.07 1.12-.64 1.12-1.26z\"></path><path d=\"M12 8.1v9.56\"></path>","book":"<path d=\"M22 10.99V4.67c0-1.2-.98-2.09-2.17-1.99h-.06c-2.1.18-5.29 1.25-7.07 2.37l-.17.11c-.29.18-.77.18-1.06 0l-.25-.15C9.44 3.9 6.26 2.84 4.16 2.67 2.97 2.57 2 3.47 2 4.66v12.08c0 .96.78 1.86 1.74 1.98l.29.04c2.17.29 5.52 1.39 7.44 2.44l.04.02c.27.15.7.15.96 0 1.92-1.06 5.28-2.17 7.46-2.46l.33-.04c.96-.12 1.74-1.02 1.74-1.98v-1.72\"></path><path d=\"M12 5.49v15\"></path><path d=\"M7.75 8.49H5.5\"></path><path d=\"M8.5 11.49h-3\"></path>","bookmark-2":"<path d=\"M14 2c2 0 3 1.01 3 3.03v7.05c0 1.99-1.41 2.76-3.14 1.72l-1.32-.8c-.3-.18-.78-.18-1.08 0l-1.32.8C8.41 14.84 7 14.07 7 12.08V5.03C7 3.01 8 2 10 2h4z\"></path><path d=\"M2 14.93C2 19.98 4 22 9 22h6c5 0 7-2.02 7-7.07V11.9c0-4.31-1.46-6.42-5-6.94\"></path><path d=\"M6.82 4.99C3.98 5.46 2.53 7 2.12 9.94\"></path>","bookmark":"<path d=\"M22 9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-2.03\"></path><path d=\"M7 4.99V2.44\"></path><path d=\"M17 2.44v9.98c0 1.97-1.41 2.74-3.14 1.7l-1.32-.79c-.3-.18-.78-.18-1.08 0l-1.32.79C8.41 15.15 7 14.39 7 12.42V9\"></path>","box-1":"<path d=\"M3.17 7.44L12 12.55l8.77-5.08\"></path><path d=\"M12 21.61v-9.07\"></path><path d=\"M2.39 13.25v1.58c0 1.38.99 3.06 2.2 3.73l5.34 2.97c1.14.63 3.01.63 4.15 0l5.34-2.97c1.21-.67 2.2-2.35 2.2-3.73V9.17c0-1.38-.99-3.06-2.2-3.73l-5.34-2.97c-1.14-.63-3.01-.63-4.15 0L4.59 5.44c-1.21.67-2.2 2.35-2.2 3.73\"></path>","box-2":"<path d=\"M18.67 18.67l2.22-1.11v-2.78m-6.67-5L12 10.89l2.22-1.11zM12 10.89L9.78 9.78 12 10.89zm0 0v2.78-2.78zm8.89-4.45l-2.22 1.11 2.22-1.11zm0 0l-2.22-1.11 2.22 1.11zm0 0v2.78-2.78zm-6.67-3.33L12 2 9.78 3.11h4.44zM3.11 6.44l2.22-1.11-2.22 1.11zm0 0l2.22 1.11-2.22-1.11zm0 0v2.78-2.78zM12 22l-2.22-1.11L12 22zm0 0l2.22-1.11L12 22zm0 0v-2.78V22zm-6.67-3.33l-2.22-1.11v-2.78l2.22 3.89z\"></path>","box-add":"<path d=\"M23 18c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1-1.22 0-2.31-.55-3.03-1.41-.02-.03-.05-.05-.07-.08-.12-.14-.23-.29-.32-.45A3.92 3.92 0 0 1 15 18c0-1.26.58-2.39 1.5-3.12.69-.55 1.56-.88 2.5-.88 1 0 1.9.36 2.6.97.12.09.23.2.33.31C22.59 16 23 16.95 23 18z\"></path><path d=\"M20.49 17.98h-2.98\"></path><path d=\"M19 16.52v2.99\"></path><path d=\"M3.17 7.44L12 12.55l8.77-5.08\"></path><path d=\"M12 21.61v-9.07\"></path><path d=\"M2.39 14.83V9.17c0-1.38.99-3.06 2.2-3.73l5.34-2.96c1.14-.64 3-.64 4.14 0l5.34 2.96c1.21.67 2.2 2.35 2.2 3.73v5.66c0 .05 0 .09-.01.14-.7-.61-1.6-.97-2.6-.97-.94 0-1.81.33-2.5.88A3.97 3.97 0 0 0 15 18c0 .75.21 1.46.58 2.06.09.16.2.31.32.45l-1.83 1.01c-1.14.64-3 .64-4.14 0l-5.34-2.96\"></path>","box-remove":"<path d=\"M3.17 7.44L12 12.55l8.77-5.08\"></path><path d=\"M12 21.61v-9.07\"></path><path d=\"M2.39 14.83V9.17c0-1.38.99-3.06 2.2-3.73l5.34-2.96c1.14-.64 3-.64 4.14 0l5.34 2.96c1.21.67 2.2 2.35 2.2 3.73v5.66c0 .05 0 .09-.01.14-.7-.61-1.6-.97-2.6-.97-.94 0-1.81.33-2.5.88A3.97 3.97 0 0 0 15 18c0 .75.21 1.46.58 2.06.09.16.2.31.32.45l-1.83 1.01c-1.14.64-3 .64-4.14 0l-5.34-2.96\"></path><path d=\"M23 18c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 15 18c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 23 18z\"></path><path d=\"M20.07 19.04l-2.12-2.11\"></path><path d=\"M20.05 16.96l-2.12 2.11\"></path>","box-search":"<path d=\"M3.17 7.44L12 12.55l8.77-5.08\"></path><path d=\"M12 21.61v-9.07\"></path><path d=\"M14.07 21.52c-.57.32-1.32.48-2.07.48-.75 0-1.5-.16-2.07-.48l-5.34-2.96c-1.21-.67-2.2-2.35-2.2-3.73\"></path><path d=\"M21.61 12.83V9.17c0-1.38-.99-3.06-2.2-3.73l-5.34-2.96c-1.14-.64-3-.64-4.14 0L4.59 5.44c-1.21.67-2.2 2.35-2.2 3.73\"></path><path d=\"M19.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z\"></path><path d=\"M23 22l-1-1\"></path>","box-tick":"<path d=\"M3.17 7.44L12 12.55l8.77-5.08\"></path><path d=\"M12 21.61v-9.07\"></path><path d=\"M2.39 14.83V9.17c0-1.38.99-3.06 2.2-3.73l5.34-2.96c1.14-.64 3-.64 4.14 0l5.34 2.96c1.21.67 2.2 2.35 2.2 3.73v5.66c0 .05 0 .09-.01.14-.7-.61-1.6-.97-2.6-.97-.94 0-1.81.33-2.5.88A3.97 3.97 0 0 0 15 18c0 .75.21 1.46.58 2.06.09.16.2.31.32.45l-1.83 1.01c-1.14.64-3 .64-4.14 0l-5.34-2.96\"></path><path d=\"M23 17.91c.02.75-.18 1.46-.54 2.07-.2.36-.47.69-.77.96-.69.64-1.6 1.03-2.61 1.06-1.46.03-2.75-.72-3.46-1.87-.38-.59-.61-1.3-.62-2.05-.03-1.26.53-2.4 1.43-3.15.68-.56 1.54-.91 2.48-.93A4 4 0 0 1 23 17.91z\"></path><path d=\"M17.44 18.03l1.01.96 2.09-2.02\"></path>","box-time":"<path d=\"M3.17 7.44L12 12.55l8.77-5.08\"></path><path d=\"M12 21.61v-9.07\"></path><path d=\"M2.39 14.83V9.17c0-1.38.99-3.06 2.2-3.73l5.34-2.96c1.14-.64 3-.64 4.14 0l5.34 2.96c1.21.67 2.2 2.35 2.2 3.73v5.66c0 .05 0 .09-.01.14-.7-.61-1.6-.97-2.6-.97-.94 0-1.81.33-2.5.88A3.97 3.97 0 0 0 15 18c0 .75.21 1.46.58 2.06.09.16.2.31.32.45l-1.83 1.01c-1.14.64-3 .64-4.14 0l-5.34-2.96\"></path><path d=\"M23 18c0 1.2-.53 2.27-1.36 3A4 4 0 0 1 19 22c-2.21 0-4-1.79-4-4 0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 23 18z\"></path><path d=\"M19.25 16.75v1.5L18 19\"></path>","box":"<path d=\"M3.17 7.44L12 12.55l8.77-5.08\"></path><path d=\"M12 21.61v-9.07\"></path><path d=\"M2.39 9.17c0-1.38.99-3.06 2.2-3.73l5.34-2.97c1.14-.63 3.01-.63 4.15 0l5.34 2.97c1.21.67 2.2 2.35 2.2 3.73v5.65c0 1.38-.99 3.06-2.2 3.73l-5.34 2.97c-1.14.63-3.01.63-4.15 0l-5.34-2.97c-1.21-.67-2.2-2.35-2.2-3.73V14\"></path><path d=\"M17 13.24V9.58l-6.07-3.51-1.05-.6L7.51 4.1\"></path>","briefcase":"<path d=\"M21.37 14l.34-3.57C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22h8c4.02 0 4.74-1.61 4.95-3.57\"></path><path d=\"M8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6\"></path><path d=\"M14 13v1.02c0 1.09-.01 1.98-2 1.98-1.98 0-2-.88-2-1.97V13c0-1 0-1 1-1h2c1 0 1 0 1 1z\"></path><path d=\"M21.65 11A16.484 16.484 0 0 1 14 14.02\"></path><path d=\"M2.62 11.27c2.25 1.54 4.79 2.47 7.38 2.76\"></path>","brifecase-cross":"<path d=\"M12 18.2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z\"></path><path d=\"M13.07 15.31l-2.12-2.11\"></path><path d=\"M13.05 13.22l-2.12 2.12\"></path><path d=\"M21.37 14l.34-3.57C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22h8c4.02 0 4.74-1.61 4.95-3.57\"></path><path d=\"M8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6\"></path><path d=\"M21.65 11a16.335 16.335 0 0 1-5.64 2.64\"></path><path d=\"M2.62 11.27c1.67 1.14 3.49 1.95 5.38 2.41\"></path>","brifecase-tick":"<path d=\"M12 18.2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z\"></path><path d=\"M10.44 14.3l.65.65c.19.19.5.19.69.01l1.78-1.64\"></path><path d=\"M21.37 14l.34-3.57C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22h8c4.02 0 4.74-1.61 4.95-3.57\"></path><path d=\"M8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6\"></path><path d=\"M21.65 11a16.335 16.335 0 0 1-5.64 2.64\"></path><path d=\"M2.62 11.27c1.67 1.14 3.49 1.95 5.38 2.41\"></path>","brifecase-timer":"<path d=\"M12 18.2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z\"></path><path d=\"M12.25 12.95v.93c0 .35-.18.68-.49.86l-.76.46\"></path><path d=\"M20.95 18.43C20.74 20.39 20.02 22 16 22H8c-4.02 0-4.74-1.61-4.95-3.57l-.75-8C2.03 7.99 2.73 6 7 6h10c4.27 0 4.97 1.99 4.7 4.43L21.37 14\"></path><path d=\"M8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6\"></path><path d=\"M21.65 11a16.335 16.335 0 0 1-5.64 2.64\"></path><path d=\"M2.62 11.27c1.67 1.14 3.49 1.95 5.38 2.41\"></path>","broom":"<path d=\"M9.87 5.67L6.45 7.75 4.89 5.19a2.01 2.01 0 0 1 .67-2.75 2.01 2.01 0 0 1 2.75.67l1.56 2.56z\"></path><path d=\"M9.2 20.44c.66 1.35 2.26 1.82 3.54 1.03l6.43-3.91c1.29-.78 1.6-2.41.71-3.62l-2.77-3.74c-1.2-1.61-3.46-2.16-5.29-1.04l-3.16 1.92a3.978 3.978 0 0 0-1.51 5.18\"></path><path d=\"M10.757 5.098l-5.124 3.12 2.08 3.417 5.125-3.12-2.08-3.417z\"></path><path d=\"M14.31 16.81l1.65 2.71\"></path><path d=\"M11.75 18.37l1.65 2.71\"></path><path d=\"M16.87 15.25l1.65 2.71\"></path>","brush-1":"<path d=\"M1.97 12.94V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-2\"></path><path d=\"M10.97 2h-2c-5 0-7 2-7 7\"></path><path d=\"M18.51 3c.66-.37 1.3-.68 1.9-.92.47-.18.93-.04 1.22.25.3.3.45.76.26 1.23-1.23 3.07-4.32 7.25-6.9 9.32l-1.58 1.26c-.2.15-.4.27-.63.36 0-.15-.01-.3-.03-.46-.09-.67-.39-1.3-.93-1.83-.55-.55-1.21-.86-1.89-.95-.16-.01-.32-.02-.48-.01.09-.25.22-.48.39-.67L11.09 9c1.07-1.34 2.72-2.82 4.49-4.11\"></path><path d=\"M12.78 14.49c0 .88-.34 1.72-.97 2.36-.49.49-1.15.83-1.94.93l-1.97.21a1.7 1.7 0 0 1-1.87-1.88l.21-1.97c.19-1.75 1.65-2.87 3.21-2.9.16-.01.32 0 .48.01.68.09 1.34.4 1.89.95.54.54.84 1.16.93 1.83.02.16.03.32.03.46z\"></path><path d=\"M15.82 11.98c0-2.09-1.69-3.79-3.79-3.79\"></path>","brush-2":"<path d=\"M9.5 19.5V18h-5c-.55 0-1.05-.22-1.41-.59-.37-.36-.59-.86-.59-1.41 0-1.03.8-1.89 1.81-1.99.06-.01.12-.01.19-.01h15c.07 0 .13 0 .19.01.48.04.9.25 1.22.58.41.4.63.97.58 1.59-.09 1.05-1.04 1.82-2.1 1.82H14.5v1.5a2.5 2.5 0 0 1-5 0z\"></path><path d=\"M19.8 12l-.11 2.01c-.06-.01-.12-.01-.19-.01h-15c-.07 0-.13 0-.19.01L3.83 5.3A2.996 2.996 0 0 1 6.81 2h10.38c1.77 0 3.16 1.53 2.98 3.3l-.15 2.71\"></path><path d=\"M7.99 2v5\"></path><path d=\"M12 2v2\"></path>","brush-3":"<path d=\"M18.02 3.01c.67-.36 1.33-.67 1.94-.91.59-.22 1.16-.06 1.52.31.38.38.56.95.32 1.54-1.54 3.84-5.4 9.06-8.63 11.65l-1.97 1.58c-.25.18-.5.34-.78.45 0-.18-.01-.38-.04-.57-.11-.84-.49-1.62-1.16-2.29-.68-.68-1.51-1.08-2.36-1.19-.2-.01-.4-.03-.6-.01.11-.31.28-.6.49-.84l1.56-1.97c1.35-1.69 3.44-3.56 5.66-5.18\"></path><path d=\"M10.43 17.62c0 1.1-.42 2.15-1.21 2.95-.61.61-1.44 1.03-2.43 1.16L4.33 22c-1.34.15-2.49-.99-2.33-2.35l.27-2.46c.24-2.19 2.07-3.59 4.01-3.63.2-.01.41 0 .6.01.85.11 1.68.5 2.36 1.19.67.67 1.05 1.45 1.16 2.29.01.19.03.38.03.57z\"></path><path d=\"M14.24 14.47c0-2.61-2.12-4.73-4.73-4.73\"></path>","brush-4":"<path d=\"M20 8c0-2 0-3-3-3h-1\"></path><path d=\"M10 16c0-1.66 0-3 3-3h4c2.03 0 2.68-.46 2.9-1.37\"></path><path d=\"M12 2H8a9.475 9.475 0 0 0 0 6h4c.65-1.95.65-4.05 0-6z\"></path><path d=\"M8 2H7C5 2 4 3 4 5s1 3 3 3h1C7 6 7 4 8 2z\"></path><path d=\"M13 2h-1c1 2 1 4 0 6h1c2 0 3-1 3-3s-1-3-3-3z\"></path><path d=\"M9.5 22h1c1.5 0 1.5-1 1.5-1.5v-3c0-.5 0-1.5-1.5-1.5h-1C8 16 8 17 8 17.5v3C8 21 8 22 9.5 22z\"></path>","brush":"<path d=\"M12.98 8.32H4V4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v4.32h-3.07\"></path><path d=\"M4 11.88c0 1.08.58 2.08 1.53 2.61l2.96 1.67c.63.35 1.02 1.02 1.02 1.74V20c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-2.1c0-.72.39-1.39 1.02-1.74l2.96-1.67c.94-.53 1.53-1.53 1.53-2.61V8.32\"></path>","bubble":"<path d=\"M15.59 12.26c2.83 0 5.13-2.3 5.13-5.13S18.42 2 15.59 2s-5.13 2.3-5.13 5.13c0 1.3.48 2.48 1.28 3.38\"></path><path d=\"M3.28 16.36c0 1.7 1.38 3.08 3.08 3.08 1.7 0 3.08-1.38 3.08-3.08 0-1.7-1.38-3.08-3.08-3.08\"></path><path d=\"M16.62 22a2.56 2.56 0 1 0 0-5.12 2.56 2.56 0 0 0 0 5.12z\"></path>","bucket-circle":"<path d=\"M9.41 15.95l-2.39-2.39c-.8-.8-.8-1.6 0-2.39l3.99-3.99 4.39 4.39c.22.22.22.58 0 .8l-3.59 3.59c-.8.79-1.6.79-2.4-.01z\"></path><path d=\"M10.209 6.38l.8.8\"></path><path d=\"M6.459 12.33l9.03-.39\"></path><path d=\"M16.47 14.17s-1.1 1.2-1.1 1.93c0 .61.5 1.1 1.1 1.1.61 0 1.1-.5 1.1-1.1.01-.74-1.1-1.93-1.1-1.93z\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","bucket-square":"<path d=\"M8.94 16.93L6.11 14.1c-.94-.94-.94-1.89 0-2.83l4.72-4.72 5.19 5.19c.26.26.26.68 0 .94l-4.25 4.25c-.94.94-1.89.94-2.83 0z\"></path><path d=\"M9.879 5.6l.95.94\"></path><path d=\"M5.44 12.64l10.69-.47\"></path><path d=\"M17.3 14.81s-1.31 1.42-1.31 2.29c0 .72.59 1.31 1.31 1.31.72 0 1.31-.59 1.31-1.31-.01-.87-1.31-2.29-1.31-2.29z\"></path><path d=\"M2 12.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","bucket":"<path d=\"M9.69 3.29l7.35 7.35c.37.37.37.97 0 1.34L11.02 18c-1.34 1.34-2.67 1.34-4.01 0L3 13.99c-1.34-1.34-1.34-2.67 0-4.01l4.31-4.31\"></path><path d=\"M8.35 1.95l1.34 1.34\"></path><path d=\"M2.07 11.92l15.12-.66\"></path><path d=\"M3 22h7\"></path><path d=\"M13 22h3\"></path><path d=\"M18.85 15S17 17.01 17 18.24c0 1.02.83 1.85 1.85 1.85s1.85-.83 1.85-1.85c0-1.23-1.85-3.24-1.85-3.24z\"></path>","building-3":"<path d=\"M2 22h20\"></path><path d=\"M3 9V7.07c0-.67.34-1.29.89-1.66l4-2.67c.67-.45 1.55-.45 2.22 0l4 2.67c.56.37.89.99.89 1.66l.01 14.92-12 .02L3 12.92\"></path><path d=\"M19.98 22.01V18\"></path><path d=\"M20 12c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2s2-.9 2-2v-2c0-1.1-.9-2-2-2z\"></path><path d=\"M3 14h12\"></path><path d=\"M9 22v-3.75\"></path><path d=\"M9 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z\"></path>","building-4":"<path d=\"M1 22h22\"></path><path d=\"M19.78 22.01v-4.46\"></path><path d=\"M19.8 10.89c-1.22 0-2.2.98-2.2 2.2v2.27c0 1.22.98 2.2 2.2 2.2 1.22 0 2.2-.98 2.2-2.2v-2.27c0-1.22-.98-2.2-2.2-2.2z\"></path><path d=\"M2.1 6.02C2.1 4.01 3.1 3 5.09 3h6.23c1.99 0 2.98 1.01 2.98 3.02V22\"></path><path d=\"M2.1 22V10.01\"></path><path d=\"M5.8 8.25h4.95\"></path><path d=\"M5.8 12h4.95\"></path><path d=\"M8.25 22v-3.75\"></path>","building":"<path d=\"M1.97 5.95v-.86c0-2.62 1.95-3.81 4.34-2.64l4.44 2.18c.96.47 1.75 1.72 1.75 2.78V22H4.08c-1.16 0-2.11-.93-2.11-2.07v-9.91\"></path><path d=\"M21.97 15.06v3.78c0 2.16-1 3.16-3.16 3.16H12.5V10.42l.47.1 4.5 1.01 2.03.45c1.32.29 2.4.97 2.46 2.89.01.06.01.12.01.19z\"></path><path d=\"M5.5 9h3.47\"></path><path d=\"M5.5 13h3.47\"></path><path d=\"M17.47 11.53v3.22c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25v-4.23l4.5 1.01z\"></path><path d=\"M21.96 14.87A2.249 2.249 0 0 1 19.72 17c-1.24 0-2.25-1.01-2.25-2.25v-3.22l2.03.45c1.32.29 2.4.97 2.46 2.89z\"></path>","buildings-2":"<path d=\"M2 4.15C2 2.72 2.72 2 4.15 2h4.3c1.43 0 2.15.72 2.15 2.15V6\"></path><path d=\"M6.7 18H4.15C2.72 18 2 17.28 2 15.85V8.04\"></path><path d=\"M17.37 8.42v11.16c0 1.61-.8 2.42-2.41 2.42H9.12c-1.61 0-2.42-.81-2.42-2.42V8.42C6.7 6.81 7.51 6 9.12 6h5.84c1.61 0 2.41.81 2.41 2.42z\"></path><path d=\"M13.4 6V4.15c0-1.43.72-2.15 2.15-2.15h4.3C21.28 2 22 2.72 22 4.15v11.7c0 1.43-.72 2.15-2.15 2.15h-2.48\"></path><path d=\"M10 11h4\"></path><path d=\"M10 14h4\"></path><path d=\"M12 22v-3\"></path>","buildings":"<path d=\"M2 11c0-2 1-3 3-3h5v11c0 2 1 3 3 3H5c-2 0-3-1-3-3v-4\"></path><path d=\"M10.11 4c-.08.3-.11.63-.11 1v3H5V6c0-1.1.9-2 2-2h3.11z\"></path><path d=\"M14 8v5\"></path><path d=\"M18 8v5\"></path><path d=\"M17 17h-2c-.55 0-1 .45-1 1v4h4v-4c0-.55-.45-1-1-1z\"></path><path d=\"M6 13v4\"></path><path d=\"M10 19V5c0-2 1-3 3-3h6c2 0 3 1 3 3v14c0 2-1 3-3 3h-6c-2 0-3-1-3-3z\"></path>","buliding":"<path d=\"M2 22h20\"></path><path d=\"M21 6c0-2.21-1-4-4-4H7C4 2 3 3.79 3 6v16h18V10.02\"></path><path d=\"M7 16.5h3\"></path><path d=\"M14 16.5h3\"></path><path d=\"M7 12h3\"></path><path d=\"M14 12h3\"></path><path d=\"M7 7.5h3\"></path><path d=\"M14 7.5h3\"></path>","bus":"<path d=\"M4 14.96V5.1C4 3.4 5.39 2 7.1 2h9.8C18.6 2 20 3.39 20 5.1v13.8c0 1.7-1.39 3.1-3.1 3.1H7.1C5.4 22 4 20.61 4 18.9\"></path><path d=\"M18.5 13c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-13C4.67 8 4 8.67 4 9.5v2c0 .83.67 1.5 1.5 1.5h8.53\"></path><path d=\"M9.5 5h5\"></path><path d=\"M8.495 17.7h.008\"></path><path d=\"M15.495 17.7h.009\"></path>","buy-crypto":"<path d=\"M22 8.5a6.5 6.5 0 0 1-7.02 6.48 6.509 6.509 0 0 0-5.96-5.96A6.5 6.5 0 1 1 22 8.5z\"></path><path d=\"M4.68 20.76A6.5 6.5 0 1 1 8.5 22\"></path><path d=\"M7.62 14.62L8.5 13l.88 1.62 1.62.88-1.62.88L8.5 18l-.88-1.62L6 15.5l1.62-.88z\"></path>","cake":"<path d=\"M2 22h20\"></path><path d=\"M17.56 10c1.84 0 3.33 1.34 3.33 3v9\"></path><path d=\"M3.11 22v-9c0-1.66 1.49-3 3.33-3h6.86\"></path><path d=\"M5.56 10V7.17C5.56 5.97 6.64 5 7.98 5h8.05c1.33 0 2.41.97 2.41 2.17V10\"></path><path d=\"M20.47 14h-.45c-.74 0-1.35.6-1.35 1.35v.31a1.35 1.35 0 0 1-2.7 0v-.31a1.35 1.35 0 0 0-2.7 0v.31a1.35 1.35 0 0 1-2.7 0v-.31C10.6 14.6 10 14 9.26 14c-.74 0-1.35.6-1.35 1.35\"></path><path d=\"M3.53 13.98l.37.01c.74.01 1.33.61 1.33 1.35v.33c0 .74.6 1.35 1.35 1.35\"></path><path d=\"M8 5V3\"></path><path d=\"M16 5V3\"></path><path d=\"M12 5V2\"></path>","calculator":"<path d=\"M3 12.97V15c0 5 2 7 7 7h4c5 0 7-2 7-7V9c0-5-2-7-7-7h-4C5 2 3 4 3 9\"></path><path d=\"M16.5 7.58v1c0 .82-.67 1.5-1.5 1.5H9c-.82 0-1.5-.67-1.5-1.5v-1c0-.82.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5z\"></path><path d=\"M8.136 14h.012\"></path><path d=\"M11.995 14h.012\"></path><path d=\"M15.855 14h.011\"></path><path d=\"M8.136 17.5h.012\"></path><path d=\"M11.995 17.5h.012\"></path><path d=\"M15.855 17.5h.011\"></path>","calendar-1":"<path d=\"M8 2v3\"></path><path d=\"M16 2v3\"></path><path d=\"M3 9.65c0-4.7 1.67-5.96 5-6.15h8c3.33.18 5 1.45 5 6.15v6.18c0 4.12-1 6.18-6 6.18H9c-5 0-6-2.06-6-6.18V14\"></path><path d=\"M20.75 17.6H3.25\"></path><path d=\"M12 8.25c-1.23 0-2.27.67-2.27 1.97 0 .62.29 1.09.73 1.39-.61.36-.96.94-.96 1.62 0 1.24.95 2.01 2.5 2.01 1.54 0 2.5-.77 2.5-2.01 0-.68-.35-1.27-.97-1.62.45-.31.73-.77.73-1.39 0-1.3-1.03-1.97-2.26-1.97zm0 2.84c-.52 0-.9-.31-.9-.8 0-.5.38-.79.9-.79s.9.29.9.79c0 .49-.38.8-.9.8zM12 14c-.66 0-1.14-.33-1.14-.93 0-.6.48-.92 1.14-.92.66 0 1.14.33 1.14.92 0 .6-.48.93-1.14.93z\"></path>","calendar-2":"<path d=\"M8 2v3\"></path><path d=\"M16 2v3\"></path><path d=\"M3.5 9.09h17\"></path><path d=\"M3 13.01V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5\"></path><path d=\"M11.995 13.7h.009\"></path><path d=\"M8.295 13.7h.01\"></path><path d=\"M8.295 16.7h.01\"></path>","calendar-add":"<path d=\"M3 13.01V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v7.86c-.73-.83-1.8-1.36-3-1.36-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.21.36.48.68.79.94H8c-3.5 0-5-2-5-5\"></path><path d=\"M8 2v3\"></path><path d=\"M16 2v3\"></path><path d=\"M3.5 9.09h17\"></path><path d=\"M18 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8z\"></path><path d=\"M19.49 19.05h-2.98\"></path><path d=\"M18 17.59v2.99\"></path><path d=\"M11.995 13.7h.009\"></path><path d=\"M8.295 13.7h.01\"></path><path d=\"M8.295 16.7h.01\"></path>","calendar-circle":"<path d=\"M9.89 5.83v2\"></path><path d=\"M14.11 5.83v2\"></path><path d=\"M7.53 10.14h8.94\"></path><path d=\"M13.5 17.67h-3c-2.5 0-4-1.8-4-4v-3c0-2.2 1.5-4 4-4h3c2.5 0 4 1.8 4 4v3c0 2.2-1.5 4-4 4z\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","calendar-edit":"<path d=\"M8 2v3\"></path><path d=\"M16 2v3\"></path><path d=\"M3.5 9.09h17\"></path><path d=\"M19.211 15.77l-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01z\"></path><path d=\"M18.7 16.28c.3 1.08 1.14 1.92 2.22 2.22\"></path><path d=\"M3 13.08V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V12\"></path><path d=\"M12 22H8c-3.5 0-5-2-5-5\"></path><path d=\"M11.995 13.7h.009\"></path><path d=\"M8.295 13.7h.01\"></path><path d=\"M8.295 16.7h.01\"></path>","calendar-remove":"<path d=\"M8 2v3\"></path><path d=\"M16 2v3\"></path><path d=\"M3.5 9.09h17\"></path><path d=\"M18 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8z\"></path><path d=\"M19.07 20.11L16.95 18\"></path><path d=\"M19.05 18.02l-2.12 2.12\"></path><path d=\"M3 13.01V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v7.86c-.73-.83-1.8-1.36-3-1.36-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.21.36.48.68.79.94H8c-3.5 0-5-2-5-5\"></path><path d=\"M11.995 13.7h.009\"></path><path d=\"M8.295 13.7h.01\"></path><path d=\"M8.295 16.7h.01\"></path>","calendar-search":"<path d=\"M8 2v3\"></path><path d=\"M16 2v3\"></path><path d=\"M18.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z\"></path><path d=\"M22 22l-1-1\"></path><path d=\"M3.5 9.09h17\"></path><path d=\"M3 13.01V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V13\"></path><path d=\"M13.37 22H8c-3.5 0-5-2-5-5\"></path><path d=\"M11.995 13.7h.009\"></path><path d=\"M8.295 13.7h.01\"></path><path d=\"M8.295 16.7h.01\"></path>","calendar-tick":"<path d=\"M8 2v3\"></path><path d=\"M16 2v3\"></path><path d=\"M3.5 9.09h17\"></path><path d=\"M22 19c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 18 23c-1.01 0-1.93-.37-2.63-1-.31-.26-.58-.58-.79-.94A3.92 3.92 0 0 1 14 19c0-2.21 1.79-4 4-4 1.2 0 2.27.53 3 1.36A4 4 0 0 1 22 19z\"></path><path d=\"M16.44 19l.99.99 2.13-1.97\"></path><path d=\"M3 13.1V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v7.86c-.73-.83-1.8-1.36-3-1.36-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.21.36.48.68.79.94H8c-3.5 0-5-2-5-5\"></path><path d=\"M11.995 13.7h.009\"></path><path d=\"M8.295 13.7h.01\"></path><path d=\"M8.295 16.7h.01\"></path>","calendar":"<path d=\"M8 2v3\"></path><path d=\"M16 2v3\"></path><path d=\"M3.5 9.09h17\"></path><path d=\"M3 13.01V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5\"></path><path d=\"M15.694 13.7h.009\"></path><path d=\"M15.694 16.7h.009\"></path><path d=\"M11.995 13.7h.009\"></path><path d=\"M11.995 16.7h.009\"></path><path d=\"M8.295 13.7h.01\"></path><path d=\"M8.295 16.7h.01\"></path>","call-add":"<path d=\"M18.17 6h2.33\"></path><path d=\"M15.5 6h.37\"></path><path d=\"M18 8.5v-5\"></path><path d=\"M9.39 6.01c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78 0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56\"></path>","call-calling":"<path d=\"M9.39 6.01c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78 0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56\"></path><path d=\"M18.5 9c0-.6-.47-1.52-1.17-2.27-.64-.69-1.49-1.23-2.33-1.23\"></path><path d=\"M17.01 2.29C16.37 2.1 15.7 2 15 2\"></path><path d=\"M22 9c0-2.37-1.18-4.47-2.98-5.73\"></path>","call-incoming":"<path d=\"M16.2 7.8H21m-4.8-2.85V3v1.95zm0 2.85v-.79.79z\"></path><path d=\"M9.39 6.01c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78 0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56\"></path>","call-minus":"<path d=\"M9.39 6.01c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78 0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56\"></path><path d=\"M15.5 6h5\"></path>","call-outgoing":"<path d=\"M20 3.8h-4.8M20 6.65V8.6 6.65zm0-2.85v.79-.79z\"></path><path d=\"M9.39 6.01c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78 0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56\"></path>","call-received":"<path d=\"M18.08 5.92l1.69-1.69\"></path><path d=\"M16.23 7.77l.47-.47\"></path><path d=\"M19.77 7.77l-3.54-3.54\"></path><path d=\"M9.39 6.01c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78 0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56\"></path>","call-remove":"<path d=\"M18.08 5.92l1.69-1.69\"></path><path d=\"M16.23 7.77l.47-.47\"></path><path d=\"M19.77 7.77l-3.54-3.54\"></path><path d=\"M9.39 6.01c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78 0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56\"></path>","call-slash":"<path d=\"M10.32 18.97c.14.11.28.21.43.32 1.14.83 2.29 1.49 3.44 1.98s2.24.73 3.26.73c.7 0 1.35-.13 1.95-.38.61-.25 1.15-.64 1.64-1.18.29-.32.51-.66.68-1.02.17-.36.25-.73.25-1.09 0-.28-.06-.53-.16-.78-.11-.25-.29-.46-.55-.64l-3.31-2.35c-.25-.17-.48-.3-.7-.39-.22-.09-.42-.13-.61-.13-.25 0-.48.07-.71.21-.23.12-.47.31-.72.56l-.76.75a.55.55 0 0 1-.41.17.69.69 0 0 1-.25-.04c-.07-.03-.13-.06-.18-.08-.19-.1-.41-.24-.65-.42\"></path><path d=\"M7.07 2.74a1.63 1.63 0 0 0-.67-.56A1.88 1.88 0 0 0 5.59 2c-.74 0-1.44.31-2.08.94-.53.5-.91 1.06-1.15 1.67-.24.6-.36 1.25-.36 1.93 0 1.04.24 2.13.72 3.27.48 1.13 1.14 2.27 1.96 3.41.83 1.14 1.76 2.23 2.79 3.27\"></path><path d=\"M10.73 13.22c-.52-.53-1-1.06-1.45-1.58-.44-.52-.75-.95-.93-1.28-.02-.06-.05-.12-.08-.2a.908.908 0 0 1-.03-.23c0-.16.05-.29.16-.4l.76-.79c.24-.24.43-.48.56-.71.14-.23.21-.47.21-.71 0-.19-.05-.4-.14-.61-.09-.22-.22-.45-.4-.7\"></path><path d=\"M22 2L2 22\"></path>","call":"<path d=\"M9.39 6.01c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78 0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56\"></path>","camera-slash":"<path d=\"M6 10h3\"></path><path d=\"M6.76 22h10.48c2.76 0 3.86-1.69 3.99-3.75l.52-8.26c.06-.93-.23-1.8-.74-2.48\"></path><path d=\"M2.77 18.25c.05.82.26 1.59.67 2.21\"></path><path d=\"M18 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45C15.37 2.75 14.17 2 13.15 2h-2.29c-1.03 0-2.23.75-2.69 1.66l-.72 1.45C7.17 5.65 6.61 6 6 6 3.83 6 2.11 7.83 2.25 9.99l.25 4.03\"></path><path d=\"M10 17.31c.55.43 1.25.69 2 .69 1.79 0 3.25-1.46 3.25-3.25 0-.64-.18-1.23-.5-1.73\"></path><path d=\"M22 2L2 22\"></path>","camera":"<path d=\"M2.77 18.25C2.89 20.31 4 22 6.76 22h10.48c2.76 0 3.86-1.69 3.99-3.75l.52-8.26A3.753 3.753 0 0 0 18 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45C15.37 2.75 14.17 2 13.15 2h-2.29c-1.03 0-2.23.75-2.69 1.66l-.72 1.45C7.17 5.65 6.61 6 6 6 3.83 6 2.11 7.83 2.25 9.99l.26 4.07\"></path><path d=\"M10.5 8h3\"></path><path d=\"M12 18c1.79 0 3.25-1.46 3.25-3.25S13.79 11.5 12 11.5s-3.25 1.46-3.25 3.25S10.21 18 12 18z\"></path>","candle-2":"<path d=\"M22 17.5h-7\"></path><path d=\"M5 17.5H2\"></path><path d=\"M22 6.5h-3\"></path><path d=\"M9 6.5H2\"></path><path d=\"M7 14.5h6c1.1 0 2 .5 2 2v2c0 1.5-.9 2-2 2H7c-1.1 0-2-.5-2-2v-2c0-1.5.9-2 2-2z\"></path><path d=\"M17 3.5c1.1 0 2 .5 2 2v2c0 1.5-.9 2-2 2h-6c-1.1 0-2-.5-2-2v-2c0-1.5.9-2 2-2h2.03\"></path>","candle":"<path d=\"M6.5 22v-7\"></path><path d=\"M6.5 5V2\"></path><path d=\"M17.5 22v-3\"></path><path d=\"M17.5 9V2\"></path><path d=\"M9.5 11.02V13c0 1.1-.5 2-2 2h-2c-1.5 0-2-.9-2-2V7c0-1.1.5-2 2-2h2c1.5 0 2 .9 2 2\"></path><path d=\"M20.5 11v6c0 1.1-.5 2-2 2h-2c-1.5 0-2-.9-2-2v-6c0-1.1.5-2 2-2h2c1.5 0 2 .9 2 2z\"></path>","car":"<path d=\"M15.51 2.83H8.49C6 2.83 5.45 4.07 5.13 5.59L4 11h16l-1.13-5.41c-.32-1.52-.87-2.76-3.36-2.76z\"></path><path d=\"M2.57 13.73C2.71 12.23 3 11 5.62 11h12.76c2.62 0 2.91 1.23 3.05 2.73l.56 6.09c.11 1.17-.83 2.18-2.03 2.18h-1.88c-1.08 0-1.23-.46-1.42-1.03l-.2-.6c-.28-.82-.46-1.37-1.9-1.37H9.44c-1.44 0-1.65.62-1.9 1.37l-.2.6C7.15 21.54 7 22 5.92 22H4.04c-1.2 0-2.14-1.01-2.03-2.18l.19-2.06\"></path><path d=\"M4 8H3\"></path><path d=\"M21 8h-1\"></path><path d=\"M12 3v2\"></path><path d=\"M10.5 5h3\"></path><path d=\"M6 15h3\"></path><path d=\"M15 15h3\"></path>","card-add":"<path d=\"M2 8.5h11.5\"></path><path d=\"M6 16.5h2\"></path><path d=\"M10.5 16.5h4\"></path><path d=\"M2 11.01V7.89c0-3.51.89-4.39 4.44-4.39h7.06\"></path><path d=\"M22 12.03v4.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11v-1.07\"></path><path d=\"M16.5 6.25H22\"></path><path d=\"M19.25 9V3.5\"></path>","card-coin":"<path d=\"M2 17.06h10\"></path><path d=\"M5.69 22H4.23c-1.78 0-2.22-.44-2.22-2.2v-4.1c0-1.76.44-2.2 2.22-2.2h5.56c1.78 0 2.22.44 2.22 2.2v4.11c0 1.76-.44 2.2-2.22 2.2\"></path><path d=\"M22 15c0 3.87-3.13 7-7 7l1.05-1.75\"></path><path d=\"M2 9c0-3.87 3.13-7 7-7L7.95 3.75\"></path><path d=\"M18.5 11c2.49 0 4.5-2.01 4.5-4.5S20.99 2 18.5 2 14 4.01 14 6.5c0 .59.11 1.15.32 1.66\"></path>","card-edit":"<path d=\"M2 8.5h9.5\"></path><path d=\"M6 16.5h2\"></path><path d=\"M10.5 16.5h4\"></path><path d=\"M2 11.03V7.89c0-3.51.89-4.39 4.44-4.39h8.06\"></path><path d=\"M22 12.03v4.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11V15\"></path><path d=\"M19.08 4.13l-3.71 3.71c-.14.14-.28.42-.31.62l-.2 1.42c-.07.51.29.87.8.8l1.42-.2c.2-.03.48-.17.62-.31l3.71-3.71c.64-.64.94-1.38 0-2.32-.95-.95-1.69-.65-2.33-.01z\"></path><path d=\"M18.55 4.66c.32 1.13 1.2 2.01 2.32 2.32\"></path>","card-pos":"<path d=\"M3.93 15.88L15.88 3.93\"></path><path d=\"M11.1 18.28l1.2-1.2\"></path><path d=\"M13.79 15.59l2.39-2.39\"></path><path d=\"M20.43 8.48c2.1 2.1 2.09 3.16-.03 5.28l-6.64 6.64c-2.12 2.12-3.18 2.13-5.28.03l-4.91-4.91c-2.1-2.1-2.09-3.16.03-5.28l6.64-6.64c2.12-2.12 3.18-2.13 5.28-.03l1.9 1.9\"></path><path d=\"M2 22h20\"></path>","card-receive":"<path d=\"M2 8.5h12.5\"></path><path d=\"M6 16.5h2\"></path><path d=\"M10.5 16.5h4\"></path><path d=\"M2 11.06V7.89c0-3.51.89-4.39 4.44-4.39h8.06\"></path><path d=\"M22 14.03v2.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11v-1.08\"></path><path d=\"M20 3.5v6l2-2\"></path><path d=\"M20 9.5l-2-2\"></path>","card-remove-1":"<path d=\"M2 8.5h11.5\"></path><path d=\"M6 16.5h2\"></path><path d=\"M10.5 16.5h4\"></path><path d=\"M2 11.03V7.89c0-3.51.89-4.39 4.44-4.39h7.06\"></path><path d=\"M22 12.03v4.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11v-1.09\"></path><path d=\"M17.31 8.19l3.88-3.88\"></path><path d=\"M21.19 8.19l-3.88-3.88\"></path>","card-remove":"<path d=\"M6 10.03h15.9\"></path><path d=\"M11.46 20.53H6.35c-3.55 0-4.45-.88-4.45-4.39V7.92c0-3.18.74-4.2 3.53-4.36.28-.01.59-.02.92-.02h11.11c3.55 0 4.45.88 4.45 4.39v4.41\"></path><path d=\"M17.9 22.03a4 4 0 1 0 0-8 4 4 0 0 0 0 8z\"></path><path d=\"M18.97 19.15l-2.11-2.12\"></path><path d=\"M18.95 17.06l-2.12 2.11\"></path><path d=\"M5.9 16.03h4\"></path>","card-send":"<path d=\"M2 8.5h12.5\"></path><path d=\"M6 16.5h2\"></path><path d=\"M10.5 16.5h4\"></path><path d=\"M2 11.01V7.89c0-3.51.89-4.39 4.44-4.39h8.06\"></path><path d=\"M22 14.03v2.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11v-1.12\"></path><path d=\"M20 9.5v-6l2 2\"></path><path d=\"M20 3.5l-2 2\"></path>","card-slash":"<path d=\"M2 8.5h13.24\"></path><path d=\"M6 16.5h1.29\"></path><path d=\"M11 16.5h3.5\"></path><path d=\"M7.98 20.5h9.58c3.56 0 4.44-.88 4.44-4.39V6.89\"></path><path d=\"M2 14.97v1.14c0 2.34.39 3.51 1.71 4.03\"></path><path d=\"M19.99 3.75c-.62-.18-1.42-.25-2.43-.25H6.44C2.89 3.5 2 4.38 2 7.89v3.05\"></path><path d=\"M22 2L2 22\"></path>","card-tick-1":"<path d=\"M2 8.5h11.5\"></path><path d=\"M6 16.5h2\"></path><path d=\"M10.5 16.5h4\"></path><path d=\"M2 11.01V7.89c0-3.51.89-4.39 4.44-4.39h7.06\"></path><path d=\"M22 11.03v5.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11v-1.1\"></path><path d=\"M16.5 6L18 7.5l4-4\"></path>","card-tick":"<path d=\"M6 10h16\"></path><path d=\"M11.55 20.5H6.44c-3.55 0-4.45-.88-4.45-4.39V7.89c0-3.18.74-4.2 3.53-4.36.28-.01.59-.02.92-.02h11.11c3.55 0 4.45.88 4.45 4.39v4.41\"></path><path d=\"M6 16h4\"></path><path d=\"M22 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 18 22a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 14 18c0-2.21 1.79-4 4-4s4 1.79 4 4z\"></path><path d=\"M16.44 18l.99.99 2.13-1.97\"></path>","card":"<path d=\"M2 8.5h20\"></path><path d=\"M6 16.5h2\"></path><path d=\"M10.5 16.5h4\"></path><path d=\"M22 14.99v1.12c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11V7.89c0-3.51.89-4.39 4.44-4.39h11.11c3.56 0 4.45.88 4.45 4.39v3.09\"></path>","cards":"<path d=\"M2 12.61h17\"></path><path d=\"M10.74 21H5.78C2.76 21 2 20.25 2 17.27v-6.99c0-2.7.63-3.57 3-3.71.24-.01.5-.02.78-.02h9.44c3.02 0 3.78.75 3.78 3.73v7.15c-.03 2.85-.81 3.57-3.78 3.57\"></path><path d=\"M22 6.73v6.99c0 2.7-.63 3.57-3 3.71v-7.15c0-2.98-.76-3.73-3.78-3.73H5.78c-.28 0-.54.01-.78.02C5.03 3.72 5.81 3 8.78 3h9.44C21.24 3 22 3.75 22 6.73z\"></path><path d=\"M5.25 17.81h1.72\"></path><path d=\"M9.11 17.81h3.44\"></path>","category-2":"<path d=\"M19 2h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3h2c2 0 3-1 3-3V5\"></path><path d=\"M5 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2\"></path><path d=\"M6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z\"></path><path d=\"M18 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8z\"></path>","category":"<path d=\"M5 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3H5C3 2 2 3 2 5v2c0 2 1 3 3 3z\"></path><path d=\"M19 2h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3h2c2 0 3-1 3-3V5\"></path><path d=\"M17 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3z\"></path><path d=\"M5 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2\"></path>","cd":"<path d=\"M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","chart-1":"<path d=\"M9 22h12\"></path><path d=\"M2 22h4\"></path><path d=\"M3 13v5c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V9.38c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1\"></path><path d=\"M12.8 5.19h-1.6c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V6.19c0-.55-.45-1-1-1z\"></path><path d=\"M21 3c0-.55-.45-1-1-1h-1.6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1H20c.55 0 1-.45 1-1V7.13\"></path>","chart-2":"<path d=\"M2 22h20\"></path><path d=\"M9.75 4v18h4.5V4c0-1.1-.45-2-1.8-2h-.9c-1.35 0-1.8.9-1.8 2z\"></path><path d=\"M7 10c0-1.1-.4-2-1.6-2h-.8C3.4 8 3 8.9 3 10v12h4v-8.01\"></path><path d=\"M17 15v7h4v-7c0-1.1-.4-2-1.6-2h-.8c-1.2 0-1.6.9-1.6 2z\"></path>","chart-21":"<path d=\"M2 13.01V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M17.5 11.57v4.93a2 2 0 1 1-4 0v-9c0-1.1.9-2 2-2s2 .9 2 2\"></path><path d=\"M8.5 18.5c1.1 0 2-.9 2-2V13c0-1.1-.9-2-2-2s-2 .9-2 2v3.5a2 2 0 0 0 2 2z\"></path>","chart-3":"<path d=\"M7 10.74v3.2\"></path><path d=\"M12 15.68v-2.92\"></path><path d=\"M12 9v1.01\"></path><path d=\"M17 10.74v3.2\"></path><path d=\"M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","chart-fail":"<path d=\"M17.23 20.77l3.54-3.54\"></path><path d=\"M20.77 20.77l-3.54-3.54\"></path><path d=\"M7 10.5v3\"></path><path d=\"M12 10.5v3\"></path><path d=\"M17 10.5v3\"></path><path d=\"M2 13v2c0 5 2 7 7 7h4\"></path><path d=\"M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","chart-square":"<path d=\"M2 12.83V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M10.11 11.15H7.46c-.63 0-1.14.51-1.14 1.14v5.12h3.79v-6.26z\"></path><path d=\"M12.76 6.6h-1.52c-.63 0-1.14.51-1.14 1.14v9.66h3.79V7.74c0-.63-.5-1.14-1.13-1.14z\"></path><path d=\"M16.55 12.85H13.9v4.55h3.79v-3.41c-.01-.63-.52-1.14-1.14-1.14z\"></path>","chart-success":"<path d=\"M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4\"></path><path d=\"M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4\"></path><path d=\"M7 10.74v3.2\"></path><path d=\"M17 10.74v3.2\"></path><path d=\"M2 13v2c0 5 2 7 7 7h4\"></path><path d=\"M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M16 19.43L17.58 21 21 17\"></path><path d=\"M12 10.5v3\"></path>","chart":"<path d=\"M4.02 5.97A9.966 9.966 0 0 0 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2\"></path><path d=\"M5 12c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7\"></path><path d=\"M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4\"></path>","check":"<path d=\"M11.02 19.5H7.5c-.62 0-1.17-.02-1.66-.09-2.63-.29-3.34-1.53-3.34-4.91v-5c0-3.38.71-4.62 3.34-4.91.49-.07 1.04-.09 1.66-.09h3.46\"></path><path d=\"M21.5 13.55v.95c0 3.38-.71 4.62-3.34 4.91-.49.07-1.04.09-1.66.09h-1.48\"></path><path d=\"M15.02 4.5h1.48c.62 0 1.17.02 1.66.09 2.63.29 3.34 1.53 3.34 4.91\"></path><path d=\"M15 2v20\"></path><path d=\"M8 8.5v7\"></path>","chrome":"<path d=\"M3.13 16.62A9.99 9.99 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12\"></path><path d=\"M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z\"></path><path d=\"M21.17 8c-3.02-.66-6.15-.66-9.17 0\"></path><path d=\"M3.95 6.06l.02.06C4.98 9.01 6.53 11.69 8.54 14\"></path><path d=\"M10.88 21.94c2.06-2.27 3.61-4.95 4.55-7.86l.03-.08\"></path>","clipboard-close":"<path d=\"M14 16.16l-3.96-3.96\"></path><path d=\"M13.96 12.24L10 16.2\"></path><path d=\"M10.96 2H10C9 2 8 2 8 4s1 2 2 2h4c2 0 2-1 2-2 0-2-1-2-2-2\"></path><path d=\"M3 10c0-4.56 1.67-5.8 5-5.98\"></path><path d=\"M16 4.02c3.33.18 5 1.41 5 5.98v6c0 4-1 6-6 6H9c-5 0-6-2-6-6v-2.09\"></path>","clipboard-export":"<path d=\"M3 10c0-4.56 1.67-5.8 5-5.98\"></path><path d=\"M14 22H9c-5 0-6-2-6-6v-2\"></path><path d=\"M16 4.02c3.33.18 5 1.41 5 5.98v5\"></path><path d=\"M11 2h-.96c-1 0-2 0-2 2s1 2 2 2h4c2 0 2-1 2-2 0-2-1-2-2-2\"></path><path d=\"M15 19v-3h3\"></path><path d=\"M21 22l-5.96-5.96\"></path>","clipboard-import":"<path d=\"M3 10c0-4.56 1.67-5.8 5-5.98\"></path><path d=\"M14 22H9c-5 0-6-2-6-6v-1.99\"></path><path d=\"M16 4.02c3.33.18 5 1.41 5 5.98v5\"></path><path d=\"M10.96 2H10C9 2 8 2 8 4s1 2 2 2h4c2 0 2-1 2-2 0-2-1-2-2-2\"></path><path d=\"M21 19v3h-3\"></path><path d=\"M15 16l5.96 5.96\"></path>","clipboard-text":"<path d=\"M8 12.2h7\"></path><path d=\"M8 16.2h4.38\"></path><path d=\"M10.96 2H10C9 2 8 2 8 4s1 2 2 2h4c2 0 2-1 2-2 0-2-1-2-2-2\"></path><path d=\"M3 10c0-4.56 1.67-5.8 5-5.98\"></path><path d=\"M16 4.02c3.33.18 5 1.41 5 5.98v6c0 4-1 6-6 6H9c-5 0-6-2-6-6v-2.09\"></path>","clipboard-tick":"<path d=\"M9.31 14.7l1.5 1.5 4-4\"></path><path d=\"M10.96 2H10C9 2 8 2 8 4s1 2 2 2h4c2 0 2-1 2-2 0-2-1-2-2-2\"></path><path d=\"M3 10c0-4.56 1.67-5.8 5-5.98\"></path><path d=\"M16 4.02c3.33.18 5 1.41 5 5.98v6c0 4-1 6-6 6H9c-5 0-6-2-6-6v-2.09\"></path>","clipboard":"<path d=\"M13.89 2.88c3.14.49 4.61 1.77 4.74 4.27.04.61-.01 1.3-.13 2.07l-.73 4.69c-.62 3.91-2.43 5.23-6.34 4.62l-4.69-.74c-1.35-.21-2.39-.57-3.15-1.11-1.45-1.01-1.87-2.67-1.47-5.23l.74-4.69c.62-3.91 2.43-5.23 6.34-4.62\"></path><path d=\"M20.5 13.47L19 17.98c-1.25 3.76-3.25 4.76-7.01 3.51l-4.51-1.5c-2.27-.75-3.53-1.79-3.89-3.31.76.54 1.8.9 3.15 1.11l4.69.74c3.91.61 5.72-.71 6.34-4.62l.73-4.69c.12-.77.17-1.46.13-2.07 2.39 1.27 2.91 3.19 1.87 6.32z\"></path><path d=\"M8.24 8.98a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48z\"></path>","clock-1":"<path d=\"M12 9.66v2.79l1.4 1.4\"></path><path d=\"M6.96 7.89A6.505 6.505 0 0 1 12 5.5a6.5 6.5 0 0 1 6.5 6.5c0 2.08-.98 3.94-2.5 5.13h-.01c-1.1.86-2.48 1.37-3.99 1.37-1.49 0-2.86-.5-3.96-1.35h-.01A6.486 6.486 0 0 1 5.5 12\"></path><path d=\"M8.03 17.15h.01c1.1.85 2.47 1.35 3.96 1.35 1.51 0 2.89-.51 3.99-1.37H16l-.51 2.47C15 21.5 13.9 22 12.55 22h-1.09c-1.35 0-2.46-.5-2.94-2.41l-.49-2.44z\"></path><path d=\"M8.03 6.85h.01C9.14 6 10.51 5.5 12 5.5c1.51 0 2.89.51 3.99 1.37H16l-.51-2.47C15 2.5 13.9 2 12.55 2h-1.09C10.11 2 9 2.5 8.52 4.41l-.49 2.44z\"></path>","clock":"<path d=\"M15.71 15.18l-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","close-circle":"<path d=\"M13.99 10.01l.84-.84\"></path><path d=\"M9.17 14.83l2.75-2.75\"></path><path d=\"M14.83 14.83L9.17 9.17\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","close-square":"<path d=\"M13.99 10.01l.84-.84\"></path><path d=\"M9.17 14.83l2.75-2.75\"></path><path d=\"M14.83 14.83L9.17 9.17\"></path><path d=\"M2 12.96V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","cloud-add":"<path d=\"M5.54 11.12c-4.68.33-4.68 7.14 0 7.47h1.92\"></path><path d=\"M17.47 8c4.33.55 6.08 6.32 2.8 9.19-1 .91-2.29 1.41-3.64 1.4h-.09\"></path><path d=\"M5.589 11.12c-2.53-7.03 5.33-10.74 9.54-7.42\"></path><path d=\"M17 16.53c0 .74-.16 1.44-.46 2.06-.08.18-.17.35-.27.51A4.961 4.961 0 0 1 12 21.53c-1.82 0-3.41-.98-4.27-2.43-.1-.16-.19-.33-.27-.51-.3-.62-.46-1.32-.46-2.06 0-2.76 2.24-5 5-5s5 2.24 5 5z\"></path><path d=\"M10.44 16.53l.99.99 2.13-1.97\"></path>","cloud-change":"<path d=\"M15.288 9.98c-.93-5.64-9.08-3.5-7.15 1.87\"></path><path d=\"M8.11 11.85c-2.82.2-2.81 4.3 0 4.5h6.67c.81.01 1.59-.3 2.19-.84.77-.67 1.08-1.6 1.02-2.5\"></path><path d=\"M2 15c0 3.87 3.13 7 7 7l-1.05-1.75\"></path><path d=\"M22 9c0-3.87-3.13-7-7-7l1.05 1.75\"></path>","cloud-connection":"<path d=\"M6.41 9.51c-2.79-7.76 9-10.85 10.35-2.71 3.42.43 5 4.59 3.12 7.22\"></path><path d=\"M6.37 9.51c-4.08.29-4.07 6.2 0 6.49h9.66\"></path><path d=\"M12 16v3\"></path><path d=\"M10 21c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2\"></path><path d=\"M18 21h-4\"></path><path d=\"M10 21H6\"></path>","cloud-cross":"<path d=\"M12.39 18.59l-2.83 2.82\"></path><path d=\"M12.39 21.41l-2.83-2.82\"></path><path d=\"M12 3.98c-3.99-.34-8.34 3.11-6.38 8.58\"></path><path d=\"M16.61 20c1.34.01 2.63-.49 3.62-1.39 3.27-2.86 1.52-8.6-2.79-9.14-.24-1.45-.77-2.59-1.48-3.45\"></path><path d=\"M7.28 12.97c-.53-.27-1.12-.41-1.71-.4-4.66.33-4.65 7.11 0 7.44\"></path><path d=\"M15.82 9.89c.52-.26 1.08-.4 1.66-.41\"></path>","cloud-drizzle":"<path d=\"M9.97 20l-2 2\"></path><path d=\"M13.97 20l-2 2\"></path><path d=\"M13.97 16l-2 2\"></path><path d=\"M9.97 16l-2 2\"></path><path d=\"M12 3.98c-3.99-.34-8.34 3.11-6.38 8.58\"></path><path d=\"M16.61 20c1.34.01 2.63-.49 3.62-1.39 3.27-2.86 1.52-8.6-2.79-9.14-.24-1.45-.77-2.59-1.48-3.45\"></path><path d=\"M7.28 12.97c-.53-.27-1.12-.41-1.71-.4-4.66.33-4.65 7.11 0 7.44\"></path><path d=\"M15.82 9.89c.52-.26 1.08-.4 1.66-.41\"></path>","cloud-fog":"<path d=\"M4.29 11.62C1.09 2.69 14.62-.87 16.17 8.5c1.93.24 3.34 1.52 4.03 3.12\"></path><path d=\"M14.541 8.93c.52-.26 1.09-.4 1.67-.41\"></path><path d=\"M18 15.03h2\"></path><path d=\"M4 15.03h11\"></path><path d=\"M6 18.03h12\"></path><path d=\"M9 21.03h6\"></path>","cloud-lightning":"<path d=\"M9.23 19.16h1v2.33c0 .34.43.51.65.25l2.45-2.79c.3-.34.17-.62-.28-.62h-1V16c0-.34-.43-.51-.65-.25l-2.45 2.79c-.3.34-.17.62.28.62z\"></path><path d=\"M12 3.98c-3.99-.34-8.34 3.11-6.38 8.58\"></path><path d=\"M16.61 20c1.34.01 2.63-.49 3.62-1.39 3.27-2.86 1.52-8.6-2.79-9.14-.24-1.45-.77-2.59-1.48-3.45\"></path><path d=\"M7.28 12.97c-.53-.27-1.12-.41-1.71-.4-4.66.33-4.65 7.11 0 7.44\"></path><path d=\"M15.82 9.89c.52-.26 1.08-.4 1.66-.41\"></path>","cloud-minus":"<path d=\"M12.97 20h-4\"></path><path d=\"M12 3.98c-3.99-.34-8.34 3.11-6.38 8.58\"></path><path d=\"M16.61 20c1.34.01 2.63-.49 3.62-1.39 3.27-2.86 1.52-8.6-2.79-9.14-.24-1.45-.77-2.59-1.48-3.45\"></path><path d=\"M7.28 12.97c-.53-.27-1.12-.41-1.71-.4-4.66.33-4.65 7.11 0 7.44\"></path><path d=\"M15.82 9.89c.52-.26 1.08-.4 1.66-.41\"></path>","cloud-notif":"<path d=\"M6.92 5.73c1.68-1.59 4.25-2.19 6.46-1.48\"></path><path d=\"M21.9 13.96c.27 1.67-.2 3.46-1.63 4.72-.99.91-2.29 1.41-3.64 1.4H5.54c-4.67-.34-4.68-7.14 0-7.48h.05c-.39-1.08-.53-2.08-.48-2.98\"></path><path d=\"M7.26 13.01c-.52-.26-1.09-.4-1.67-.41\"></path><path d=\"M21.97 8.5c0 1.1-.51 2.09-1.32 2.73-.59.48-1.36.77-2.18.77-1.93 0-3.5-1.57-3.5-3.5 0-.96.39-1.83 1.03-2.46v-.01A3.46 3.46 0 0 1 18.47 5c1.93 0 3.5 1.57 3.5 3.5z\"></path>","cloud-plus":"<path d=\"M12.97 20h-4\"></path><path d=\"M10.97 22v-4\"></path><path d=\"M12 3.98c-3.99-.34-8.34 3.11-6.38 8.58\"></path><path d=\"M16.61 20c1.34.01 2.63-.49 3.62-1.39 3.27-2.86 1.52-8.6-2.79-9.14-.24-1.45-.77-2.59-1.48-3.45\"></path><path d=\"M7.28 12.97c-.53-.27-1.12-.41-1.71-.4-4.66.33-4.65 7.11 0 7.44\"></path><path d=\"M15.82 9.89c.52-.26 1.08-.4 1.66-.41\"></path>","cloud-remove":"<path d=\"M5.54 11.12c-4.68.33-4.68 7.14 0 7.47h1.92\"></path><path d=\"M17.47 8c4.33.55 6.08 6.32 2.8 9.19-1 .91-2.29 1.41-3.64 1.4h-.09\"></path><path d=\"M5.589 11.12c-2.53-7.03 5.33-10.74 9.54-7.42\"></path><path d=\"M12.97 17.61l-2.11-2.11\"></path><path d=\"M12.95 15.52l-2.12 2.12\"></path><path d=\"M17 16.53c0 .74-.16 1.44-.46 2.06-.08.18-.17.35-.27.51A4.961 4.961 0 0 1 12 21.53c-1.82 0-3.41-.98-4.27-2.43-.1-.16-.19-.33-.27-.51-.3-.62-.46-1.32-.46-2.06 0-2.76 2.24-5 5-5s5 2.24 5 5z\"></path>","cloud-snow":"<path d=\"M12 3.98c-3.99-.34-8.34 3.11-6.38 8.58\"></path><path d=\"M16.61 20c1.34.01 2.63-.49 3.62-1.39 3.27-2.86 1.52-8.6-2.79-9.14-.24-1.45-.77-2.59-1.48-3.45\"></path><path d=\"M7.28 12.97c-.53-.27-1.12-.41-1.71-.4-4.66.33-4.65 7.11 0 7.44\"></path><path d=\"M15.82 9.89c.52-.26 1.08-.4 1.66-.41\"></path><path d=\"M12.995 18.5h.01\"></path><path d=\"M8.995 18.5h.01\"></path><path d=\"M10.995 21.5h.01\"></path>","cloud-sunny":"<path d=\"M7.26 5.43c2.48-2.01 6.5-2.11 8.74.6v.01c.7.86 1.23 2 1.47 3.45 1.33.17 2.41.82 3.18 1.74 1.75 2.07 1.9 5.45-.38 7.45-.99.91-2.29 1.41-3.64 1.4H5.54c-4.67-.34-4.68-7.14 0-7.48h.05c-.48-1.34-.58-2.56-.41-3.64\"></path><path d=\"M7.26 13.01c-.52-.26-1.09-.4-1.67-.41\"></path><path d=\"M15.85 9.92c.52-.26 1.09-.4 1.67-.41\"></path><path d=\"M21.97 8.5c0 1.1-.51 2.09-1.32 2.73a4.897 4.897 0 0 0-3.18-1.74C17.23 8.04 16.7 6.9 16 6.04v-.01A3.46 3.46 0 0 1 18.47 5c1.93 0 3.5 1.57 3.5 3.5z\"></path>","cloud":"<path d=\"M15.85 9.92c.52-.26 1.09-.4 1.67-.41\"></path><path d=\"M11.99 3.9c-4.01-.33-8.37 3.13-6.4 8.62\"></path><path d=\"M7.26 12.93a3.79 3.79 0 0 0-1.72-.41c-4.68.33-4.68 7.14 0 7.47h11.09c1.35.01 2.65-.49 3.64-1.4 3.29-2.87 1.53-8.64-2.8-9.19-.24-1.46-.78-2.61-1.49-3.47\"></path><path d=\"M15.84 9.84c.52-.26 1.09-.4 1.67-.41\"></path>","code-1":"<path d=\"M6.89 9c.98.49 1.82 1.23 2.43 2.15.35.52.35 1.19 0 1.71-.61.91-1.45 1.65-2.43 2.14\"></path><path d=\"M2 13.04V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M13 15h4\"></path>","code-circle":"<path d=\"M8 10l-2 2 2 2\"></path><path d=\"M16 10l2 2-2 2\"></path><path d=\"M13 9.67l-2 4.66\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","code":"<path d=\"M9 13c-.66.33-1.21.82-1.62 1.43-.23.35-.23.79 0 1.14.41.61.96 1.1 1.62 1.43\"></path><path d=\"M15.21 13c.66.33 1.21.82 1.62 1.43.23.35.23.79 0 1.14-.41.61-.96 1.1-1.62 1.43\"></path><path d=\"M2 13v2c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M2.23 8.01L21.45 8\"></path>","coffee":"<path d=\"M2 13.55v-3.08a4.21 4.21 0 0 1 4.21-4.21h7.37a4.21 4.21 0 0 1 4.21 4.21v7.32A4.21 4.21 0 0 1 13.58 22H6.21C3.89 22 2 20.11 2 17.79\"></path><path d=\"M5.5 4V2.25\"></path><path d=\"M9.5 4V2.25\"></path><path d=\"M13.5 4V2.25\"></path><path d=\"M22 13.16c0 2.32-1.89 4.21-4.21 4.21V8.95A4.21 4.21 0 0 1 22 13.16z\"></path><path d=\"M2 12h15.51\"></path>","coin-1":"<path d=\"M8 11.4c0 .77.6 1.4 1.33 1.4h1.5c.64 0 1.16-.55 1.16-1.22 0-.73-.32-.99-.79-1.16l-2.4-.84c-.48-.17-.8-.43-.8-1.16 0-.67.52-1.22 1.16-1.22h1.5c.74.01 1.34.63 1.34 1.4\"></path><path d=\"M10 12.85v.74\"></path><path d=\"M10 6.41v.78\"></path><path d=\"M6.07 3.02A7.974 7.974 0 0 1 9.99 2c4.41 0 7.99 3.58 7.99 7.99s-3.58 7.99-7.99 7.99S2 14.4 2 9.99c0-1.23.28-2.4.78-3.44\"></path><path d=\"M12.98 19.88c.9 1.27 2.37 2.1 4.05 2.1 2.73 0 4.95-2.22 4.95-4.95 0-1.66-.82-3.13-2.07-4.03\"></path>","coin":"<path d=\"M12 22c3.59 0 6.5-2.53 6.5-5.65v-3.7c0 3.12-2.91 5.35-6.5 5.35s-6.5-2.23-6.5-5.35v3.7c0 1.71.87 3.24 2.25 4.27\"></path><path d=\"M18.5 7.65c0 .91-.25 1.75-.69 2.47C16.74 11.88 14.54 13 12 13c-2.54 0-4.74-1.12-5.81-2.88-.44-.72-.69-1.56-.69-2.47 0-1.56.73-2.97 1.9-3.99C8.58 2.63 10.2 2 12 2c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4z\"></path><path d=\"M18.5 7.65v5c0 3.12-2.91 5.35-6.5 5.35s-6.5-2.23-6.5-5.35v-5C5.5 4.53 8.41 2 12 2c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4z\"></path>","color-swatch":"<path d=\"M2 4.5C2 3 3 2 4.5 2h3C9 2 10 3 10 4.5V18c0 1.08-.44 2.07-1.14 2.79l-.04.04c-.09.09-.19.18-.28.25-.3.26-.64.46-.99.6-.11.05-.22.09-.33.13-.39.13-.81.19-1.22.19-.27 0-.54-.03-.8-.08-.13-.03-.26-.06-.39-.1-.16-.05-.31-.1-.46-.17 0-.01 0-.01-.01 0-.28-.14-.55-.3-.8-.49l-.01-.01c-.13-.1-.25-.2-.36-.32-.11-.12-.22-.24-.33-.37-.19-.25-.35-.52-.49-.8.01-.01.01-.01 0-.01 0 0 0-.01-.01-.02-.06-.14-.11-.29-.16-.44a5.58 5.58 0 0 1-.1-.39c-.05-.26-.08-.53-.08-.8V8.57\"></path><path d=\"M22 16.5v3c0 1.5-1 2.5-2.5 2.5H6c.41 0 .83-.06 1.22-.19.11-.04.22-.08.33-.13.35-.14.69-.34.99-.6.09-.07.19-.16.28-.25l.04-.04 6.8-6.79h3.84c1.5 0 2.5 1 2.5 2.5z\"></path><path d=\"M4.81 21.82c-.6-.18-1.17-.51-1.64-.99-.48-.47-.81-1.04-.99-1.64a4.02 4.02 0 0 0 2.63 2.63z\"></path><path d=\"M18.37 11.29L15.66 14l-6.8 6.79C9.56 20.07 10 19.08 10 18V8.34l2.71-2.71c1.06-1.06 2.48-1.06 3.54 0l2.12 2.12c1.06 1.06 1.06 2.48 0 3.54z\"></path><path d=\"M6 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2z\"></path>","colorfilter":"<path d=\"M14 16c0 1.77-.77 3.37-2 4.46A5.93 5.93 0 0 1 8 22c-3.31 0-6-2.69-6-6 0-2.76 1.88-5.1 4.42-5.79a6.019 6.019 0 0 0 4 3.58c.5.14 1.03.21 1.58.21s1.08-.07 1.58-.21c.27.68.42 1.43.42 2.21z\"></path><path d=\"M7.52 4.01a6 6 0 0 1 10.06 6.2 6.019 6.019 0 0 1-4 3.58c-.5.14-1.03.21-1.58.21s-1.08-.07-1.58-.21A5.993 5.993 0 0 1 6 8\"></path><path d=\"M22 16c0 3.31-2.69 6-6 6a5.93 5.93 0 0 1-4-1.54c1.23-1.09 2-2.69 2-4.46 0-.78-.15-1.53-.42-2.21 1.83-.5 3.31-1.84 4-3.58C20.12 10.9 22 13.24 22 16z\"></path>","colors-square":"<path d=\"M13.2 14.4c0 1.06-.46 2.02-1.2 2.68-.64.58-1.48.92-2.4.92a3.598 3.598 0 0 1-.95-7.07A3.61 3.61 0 0 0 12 13.21c.33 0 .65-.04.95-.13.16.4.25.85.25 1.32z\"></path><path d=\"M15.6 9.6c0 .47-.09.92-.25 1.33A3.61 3.61 0 0 1 12 13.21c-.33 0-.65-.04-.95-.13A3.587 3.587 0 0 1 8.4 9.6C8.4 7.61 10.01 6 12 6s3.6 1.61 3.6 3.6z\"></path><path d=\"M18 14.4a3.598 3.598 0 0 1-6 2.68 3.55 3.55 0 0 0 1.2-2.68c0-.47-.09-.92-.25-1.33 1.1-.3 1.99-1.1 2.4-2.15A3.62 3.62 0 0 1 18 14.4z\"></path><path d=\"M2 13.2V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","command-square":"<path d=\"M2 13.02V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M14.4 9.6H9.6v4.8h4.8V9.6z\"></path><path d=\"M7.8 18c.99 0 1.8-.81 1.8-1.8v-1.8H7.8c-.99 0-1.8.81-1.8 1.8S6.81 18 7.8 18z\"></path><path d=\"M7.8 9.6h1.8V7.8c0-.99-.81-1.8-1.8-1.8S6 6.81 6 7.8s.81 1.8 1.8 1.8z\"></path><path d=\"M14.4 9.6h1.8c.99 0 1.8-.81 1.8-1.8S17.19 6 16.2 6s-1.8.81-1.8 1.8v1.8z\"></path><path d=\"M16.2 18c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8h-1.8v1.8c0 .99.81 1.8 1.8 1.8z\"></path>","command":"<path d=\"M16 8H8v8h8V8z\"></path><path d=\"M2.17 19.99A3.009 3.009 0 0 0 5 22c1.65 0 3-1.35 3-3v-3H5\"></path><path d=\"M5 8h3V5c0-1.65-1.35-3-3-3S2 3.35 2 5s1.35 3 3 3z\"></path><path d=\"M16 8h3c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3v3z\"></path><path d=\"M19 22c1.65 0 3-1.35 3-3s-1.35-3-3-3h-3v3c0 1.65 1.35 3 3 3z\"></path>","component":"<path d=\"M6.74 18.24l-3.68-3.68c-1.4-1.4-1.4-3.7 0-5.11l6.39-6.39c1.4-1.4 3.7-1.4 5.11 0l6.39 6.39c1.4 1.4 1.4 3.7 0 5.11l-6.39 6.39c-1.4 1.4-3.7 1.4-5.11 0\"></path>","computing":"<path d=\"M1.97 13v2c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7\"></path><path d=\"M19.72 3.25L3.27 19.7\"></path><path d=\"M16.06 18v-5\"></path><path d=\"M18.5 15.5h-5\"></path><path d=\"M10.5 7.5h-5\"></path>","convert-3d-cube":"<path d=\"M22 15c0 3.87-3.13 7-7 7l1.05-1.75\"></path><path d=\"M2 9c0-3.87 3.13-7 7-7L7.95 3.75\"></path><path d=\"M13.7 4.45l3.98 2.3 3.94-2.29\"></path><path d=\"M17.68 10.82V6.74\"></path><path d=\"M16.74 2.21l-2.4 1.33c-.54.3-.99 1.06-.99 1.68v2.54c0 .62.44 1.38.99 1.68l2.4 1.33c.51.29 1.35.29 1.87 0l2.4-1.33c.54-.3.99-1.06.99-1.68V5.22c0-.62-.44-1.38-.99-1.68l-2.4-1.33c-.51-.28-1.35-.28-1.87 0z\"></path><path d=\"M2.35 15.45l3.97 2.3 3.95-2.29\"></path><path d=\"M6.32 21.82v-4.08\"></path><path d=\"M10.65 16.23c0-.62-.44-1.38-.99-1.68l-2.4-1.33c-.51-.29-1.35-.29-1.87 0l-2.4 1.33c-.54.3-.99 1.06-.99 1.68v2.54c0 .62.44 1.38.99 1.68l2.4 1.33c.51.29 1.35.29 1.87 0l2.4-1.33\"></path>","convert-card":"<path d=\"M12 5.56h10\"></path><path d=\"M15.65 10.5h-1.43c-1.78 0-2.22-.44-2.22-2.2V4.2c0-1.76.44-2.2 2.22-2.2h5.56C21.56 2 22 2.44 22 4.2v4.11c0 1.76-.44 2.2-2.22 2.2\"></path><path d=\"M2 17.06h10\"></path><path d=\"M5.5 22H4.22C2.44 22 2 21.56 2 19.8v-4.1c0-1.76.44-2.2 2.22-2.2h5.56c1.78 0 2.22.44 2.22 2.2v4.11c0 1.76-.44 2.2-2.22 2.2\"></path><path d=\"M22 15c0 3.87-3.13 7-7 7l1.05-1.75\"></path><path d=\"M2 9c0-3.87 3.13-7 7-7L7.95 3.75\"></path>","convert":"<path d=\"M6.12 4l8.19 8.2.01-4.55\"></path><path d=\"M17.88 20l-8.19-8.2-.01 4.55\"></path><path d=\"M20 6c1.25 1.67 2 3.75 2 6 0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2c1.43 0 2.8.3 4.03.85\"></path>","convertshape-2":"<path d=\"M2 18.85v-2.7C2 13.9 2.9 13 5.15 13h2.7c2.25 0 3.15.9 3.15 3.15v2.7C11 21.1 10.1 22 7.85 22h-2.7\"></path><path d=\"M22 15c0 3.87-3.13 7-7 7l1.05-1.75\"></path><path d=\"M2 9c0-3.87 3.13-7 7-7L7.95 3.75\"></path><path d=\"M17.5 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z\"></path>","convertshape":"<path d=\"M18.85 2h-2.7C13.9 2 13 2.9 13 5.15v3.7c0 2.25.9 3.15 3.15 3.15h2.7C21.1 12 22 11.1 22 8.85V5.96\"></path><path d=\"M5.15 22h2.7c2.25 0 3.15-.9 3.15-3.15v-3.7C11 12.9 10.1 12 7.85 12h-2.7C2.9 12 2 12.9 2 15.15v3.01\"></path><path d=\"M22 15c0 3.87-3.13 7-7 7l1.05-1.75\"></path><path d=\"M2 9c0-3.87 3.13-7 7-7L7.95 3.75\"></path>","copy-success":"<path d=\"M22 6.9C22 3.4 20.6 2 17.1 2h-4.2C9.4 2 8 3.4 8 6.9V8h3.1c3.5 0 4.9 1.4 4.9 4.9V16h1.1c3.5 0 4.9-1.4 4.9-4.9\"></path><path d=\"M2 17.1C2 20.6 3.4 22 6.9 22h4.2c3.5 0 4.9-1.4 4.9-4.9v-4.2C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9\"></path><path d=\"M6.08 15l1.95 1.95 3.89-3.9\"></path>","copy":"<path d=\"M2 12.9C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9v4.2c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1\"></path><path d=\"M22 11.1c0 3.5-1.4 4.9-4.9 4.9H16v-3.1C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9\"></path>","copyright":"<path d=\"M14.88 15a4 4 0 0 1-2.64 1c-2.21 0-4-1.79-4-4s1.79-4 4-4a4 4 0 0 1 2.64 1\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","courthouse":"<path d=\"M2 22h20\"></path><path d=\"M12 2c1.6.64 3.4.64 5 0v3c-1.6.64-3.4.64-5 0V2z\"></path><path d=\"M12 5v3\"></path><path d=\"M4 15.91V22h16V11c0-2-1-3-3-3H7c-2 0-3 1-3 3v1\"></path><path d=\"M4 12h15.42\"></path><path d=\"M7.99 12v10\"></path><path d=\"M11.99 12v10\"></path><path d=\"M15.99 12v10\"></path>","cpu-charge":"<path d=\"M9.6 20h4.8c4 0 5.6-1.6 5.6-5.6V9.6c0-4-1.6-5.6-5.6-5.6H9.6C5.6 4 4 5.6 4 9.6v4.8c0 4 1.6 5.6 5.6 5.6z\"></path><path d=\"M7 10.5v3C7 16 8 17 10.5 17h3c2.5 0 3.5-1 3.5-3.5v-3C17 8 16 7 13.5 7h-3\"></path><path d=\"M8.01 4V2\"></path><path d=\"M12 4V2\"></path><path d=\"M16 4V2\"></path><path d=\"M20 8h2\"></path><path d=\"M20 12h2\"></path><path d=\"M20 16h2\"></path><path d=\"M16 20v2\"></path><path d=\"M12.01 20v2\"></path><path d=\"M8.01 20v2\"></path><path d=\"M2 8h2\"></path><path d=\"M2 12h2\"></path><path d=\"M2 16h2\"></path><path d=\"M12 9.7l-.94 1.64c-.21.36-.04.66.38.66h1.12c.42 0 .59.3.38.66L12 14.3\"></path>","cpu-setting":"<path d=\"M20 9.6c0-4-1.6-5.6-5.6-5.6H9.6C5.6 4 4 5.6 4 9.6v4.8c0 4 1.6 5.6 5.6 5.6\"></path><path d=\"M16.35 8c-.55-.7-1.47-1-2.85-1h-3C8 7 7 8 7 10.5v3c0 1.38.3 2.3.99 2.85\"></path><path d=\"M8.01 4V2\"></path><path d=\"M12 4V2\"></path><path d=\"M16 4V2\"></path><path d=\"M20 8h2\"></path><path d=\"M8.01 20v2\"></path><path d=\"M2 8h2\"></path><path d=\"M2 12h2\"></path><path d=\"M2 16h2\"></path><path d=\"M16.71 18.59a1.59 1.59 0 1 0 0-3.18 1.59 1.59 0 0 0 0 3.18z\"></path><path d=\"M11.41 17.46v-.93c0-.55.45-1 1-1 .96 0 1.35-.68.87-1.51a1 1 0 0 1 .37-1.37l.91-.53c.42-.25.96-.1 1.21.32l.06.1c.48.83 1.26.83 1.74 0l.06-.1c.25-.42.79-.56 1.21-.32l.91.53c.48.28.65.89.37 1.37-.48.83-.09 1.51.87 1.51.55 0 1 .45 1 1v.93c0 .55-.45 1-1 1-.96 0-1.35.68-.87 1.51a1 1 0 0 1-.37 1.37l-.91.53c-.42.25-.96.1-1.21-.32l-.06-.1c-.48-.83-1.26-.83-1.74 0l-.06.1c-.25.42-.79.56-1.21.32l-.91-.53c-.48-.28-.65-.89-.37-1.37.48-.83.09-1.51-.87-1.51a.99.99 0 0 1-1-1z\"></path>","cpu":"<path d=\"M9.6 20h4.8c4 0 5.6-1.6 5.6-5.6V9.6c0-4-1.6-5.6-5.6-5.6H9.6C5.6 4 4 5.6 4 9.6v4.8c0 4 1.6 5.6 5.6 5.6z\"></path><path d=\"M7 10.5v3C7 16 8 17 10.5 17h3c2.5 0 3.5-1 3.5-3.5v-3C17 8 16 7 13.5 7h-3\"></path><path d=\"M8.01 4V2\"></path><path d=\"M12 4V2\"></path><path d=\"M16 4V2\"></path><path d=\"M20 8h2\"></path><path d=\"M20 12h2\"></path><path d=\"M20 16h2\"></path><path d=\"M16 20v2\"></path><path d=\"M12.01 20v2\"></path><path d=\"M8.01 20v2\"></path><path d=\"M2 8h2\"></path><path d=\"M2 12h2\"></path><path d=\"M2 16h2\"></path>","creative-commons":"<path d=\"M10.88 14.15c-.51.44-1.17.72-1.89.72A2.87 2.87 0 0 1 6.12 12c0-1.59 1.28-2.87 2.87-2.87.73 0 1.39.27 1.89.72\"></path><path d=\"M17.88 14.15c-.51.44-1.17.72-1.89.72A2.87 2.87 0 0 1 13.12 12c0-1.59 1.28-2.87 2.87-2.87.73 0 1.39.27 1.89.72\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","crop":"<path d=\"M9.98 5H5v9.1C5 18 6 19 9.9 19H19V9.9C19 6 18 5 14.1 5\"></path><path d=\"M5 5V2\"></path><path d=\"M5 5H2\"></path><path d=\"M19 19v3\"></path><path d=\"M19 19h3\"></path>","crown-1":"<path d=\"M2 10.99V5.71c0-1.33.77-1.65 1.71-.71L6.3 7.59c.39.39 1.03.39 1.41 0L11.29 4a.996.996 0 0 1 1.41 0l3.59 3.59c.39.39 1.03.39 1.41 0L20.29 5c.94-.94 1.71-.62 1.71.71v9.59c0 3-2 5-5 5H7c-2.76 0-5-2.24-5-5\"></path>","crown":"<path d=\"M20.1 5.69c1.56-1.12 2.31-.55 1.67 1.26l-4.04 11.31c-.14.4-.61.73-1.03.73H7.3c-.42 0-.89-.33-1.03-.73L2.13 6.67c-.59-1.66.1-2.17 1.52-1.15l3.9 2.79c.65.45 1.39.22 1.67-.51l1.76-4.69c.56-1.5 1.49-1.5 2.05 0l1.76 4.69c.28.73 1.02.96 1.66.51l.63-.45\"></path><path d=\"M6.5 22h11\"></path><path d=\"M9.5 14h5\"></path>","cup":"<path d=\"M12.15 16.5v2.1\"></path><path d=\"M7.15 22h10v-1c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v1z\"></path><path d=\"M6.15 22h12\"></path><path d=\"M8.51 15.07A6.99 6.99 0 0 1 5 9V6c0-2.21 1.79-4 4-4h6c2.21 0 4 1.79 4 4v3c0 3.82-3.05 6.92-6.85 7H12\"></path><path d=\"M5.47 11.65c-.75-.24-1.41-.68-1.93-1.2-.9-1-1.5-2.2-1.5-3.6s1.1-2.5 2.5-2.5h.65c-.2.46-.3.97-.3 1.5v3c0 1 .21 1.94.58 2.8z\"></path><path d=\"M18.53 11.65c.75-.24 1.41-.68 1.93-1.2.9-1 1.5-2.2 1.5-3.6s-1.1-2.5-2.5-2.5h-.65c.2.46.3.97.3 1.5v3c0 1-.21 1.94-.58 2.8z\"></path>","danger":"<path d=\"M12 9v5\"></path><path d=\"M20.24 14l1.06 1.9c1.68 3.03.22 5.51-3.24 5.51H5.94c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62L8.76 5c1.78-3.21 4.7-3.21 6.48 0l2.94 5.29\"></path><path d=\"M11.994 17h.01\"></path>","data-2":"<path d=\"M7 8H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2z\"></path><path d=\"M20.8 7h-3.6c-.66 0-1.2-.54-1.2-1.2V4.2c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2z\"></path><path d=\"M20.8 14.5h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2z\"></path><path d=\"M9 5h7\"></path><path d=\"M12.5 16.36V18c0 1.1.9 2 2 2H16\"></path><path d=\"M12.5 16.36V18c0 1.1.9 2 2 2H16\"></path><path d=\"M12.5 5v7.32\"></path><path d=\"M16 12.5h-3.5\"></path><path d=\"M20.8 22h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2z\"></path>","data":"<path d=\"M20 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path><path d=\"M20 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path><path d=\"M20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path><path d=\"M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path><path d=\"M6 12h12\"></path><path d=\"M11 12v5c0 2 1 3 3 3h4\"></path><path d=\"M18 4h-4c-2 0-3 1-3 3v.98\"></path>","designtools":"<path d=\"M18 3.02c.68-.36 1.34-.67 1.96-.92.59-.22 1.16-.06 1.52.31.38.38.56.95.32 1.54-1.54 3.84-5.4 9.06-8.63 11.65l-1.97 1.58c-.25.18-.5.34-.78.45 0-.18-.01-.38-.04-.57-.11-.84-.49-1.62-1.16-2.29-.68-.68-1.51-1.08-2.36-1.19-.2-.01-.4-.03-.6-.01.11-.31.28-.6.49-.84l1.56-1.97c1.45-1.81 3.73-3.82 6.12-5.51\"></path><path d=\"M10.43 17.62c0 1.1-.42 2.15-1.21 2.95-.61.61-1.44 1.03-2.43 1.16L4.33 22c-1.34.15-2.49-.99-2.33-2.35l.27-2.46c.24-2.19 2.07-3.59 4.01-3.63.2-.01.41 0 .6.01.85.11 1.68.5 2.36 1.19.67.67 1.05 1.45 1.16 2.29.01.19.03.38.03.57z\"></path><path d=\"M14.24 14.47c0-2.61-2.12-4.73-4.73-4.73\"></path><path d=\"M20.12 12.73l.74.73c1.49 1.49 1.49 2.96 0 4.45l-2.96 2.96c-1.47 1.47-2.96 1.47-4.43 0\"></path><path d=\"M3.11 10.51c-1.47-1.49-1.47-2.96 0-4.45L6.07 3.1c1.47-1.47 2.96-1.47 4.43 0l.74.74\"></path><path d=\"M11.25 3.85l-3.7 3.7\"></path><path d=\"M20.12 12.73l-2.96 2.95\"></path>","device-message":"<path d=\"M2 8.5C2 5.35 3.8 4 6.5 4h2.7c-.13.38-.2.8-.2 1.25v3.9c0 .97.32 1.79.89 2.36.57.57 1.39.89 2.36.89v1.39c0 .51.58.82 1.01.54l2.89-1.93h2.6c.45 0 .87-.07 1.25-.2v1.7c0 3.15-1.8 4.5-4.5 4.5h-9c-2.7 0-4.5-1.35-4.5-4.5v-1.5\"></path><path d=\"M22 9.15c0 1.49-.76 2.61-2 3.05-.38.13-.8.2-1.25.2h-2.6l-2.89 1.93c-.43.28-1.01-.03-1.01-.54V12.4c-.97 0-1.79-.32-2.36-.89-.57-.57-.89-1.39-.89-2.36v-3.9c0-.45.07-.87.2-1.25.44-1.24 1.56-2 3.05-2h6.5C20.7 2 22 3.3 22 5.25\"></path><path d=\"M7.4 22h7.2\"></path><path d=\"M11 18.4V22\"></path><path d=\"M18.495 7.25h.01\"></path><path d=\"M15.695 7.25h.009\"></path><path d=\"M12.896 7.25h.009\"></path>","devices-1":"<path d=\"M17.01 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14z\"></path><path d=\"M2 6c0-3.2.8-4 4-4h10c3.2 0 4 .8 4 4v1.79c-.25-.03-.54-.05-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v5.11H6c-3.2 0-4-.8-4-4v-1.65\"></path><path d=\"M9 15.7V20\"></path><path d=\"M2 11.9h10\"></path><path d=\"M5.95 20H12\"></path><path d=\"M17.01 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14z\"></path><path d=\"M20 7.79c-.25-.03-.54-.05-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v8.56c0 2.14.71 2.85 2.85 2.85h4.28c2.14 0 2.85-.71 2.85-2.85v-8.56c0-1.83-.52-2.61-2-2.8zm-2.99 2.8a1.071 1.071 0 0 1 0 2.14c-.59 0-1.07-.48-1.07-1.07 0-.59.48-1.07 1.07-1.07zm0 8.56c-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62 0 1.18-.96 2.14-2.14 2.14z\"></path><path d=\"M19.15 17.01c0 1.18-.96 2.14-2.14 2.14-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62z\"></path><path d=\"M17.01 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14z\"></path>","devices":"<path d=\"M15.72 9.69a5.251 5.251 0 0 0-7.44 0 5.25 5.25 0 0 0 0 7.44 5.251 5.251 0 0 0 7.44 0 5.23 5.23 0 0 0 1.54-3.72\"></path><path d=\"M12 13.41L10.41 15\"></path><path d=\"M19.07 6.34c.15.15.15.4 0 .56-.15.15-.4.15-.56 0-.16-.15-.15-.4 0-.56.15-.16.41-.16.56 0z\"></path><path d=\"M19.07 6.34c.15.15.15.4 0 .56-.15.15-.4.15-.56 0-.16-.15-.15-.4 0-.56.15-.16.41-.16.56 0z\"></path><path d=\"M5.49 19.92c.15.15.15.4 0 .56-.15.16-.4.15-.56 0a.405.405 0 0 1 0-.56c.15-.16.41-.16.56 0z\"></path><path d=\"M5.49 19.92c.15.15.15.4 0 .56-.15.16-.4.15-.56 0a.405.405 0 0 1 0-.56c.15-.16.41-.16.56 0z\"></path><path d=\"M21.88 13.13c.15.15.15.4 0 .56-.15.15-.4.15-.56 0-.16-.15-.15-.4 0-.56.15-.16.41-.16.56 0z\"></path><path d=\"M21.88 13.13c.15.15.15.4 0 .56-.15.15-.4.15-.56 0-.16-.15-.15-.4 0-.56.15-.16.41-.16.56 0z\"></path><path d=\"M2.67 13.13c.15.15.15.4 0 .56-.15.16-.4.15-.56 0a.405.405 0 0 1 0-.56c.16-.16.41-.16.56 0z\"></path><path d=\"M2.67 13.13c.15.15.15.4 0 .56-.15.16-.4.15-.56 0a.405.405 0 0 1 0-.56c.16-.16.41-.16.56 0z\"></path><path d=\"M19.07 19.92c.15.15.15.4 0 .56-.15.15-.4.15-.56 0-.16-.15-.15-.4 0-.56.16-.16.41-.16.56 0z\"></path><path d=\"M19.07 19.92c.15.15.15.4 0 .56-.15.15-.4.15-.56 0-.16-.15-.15-.4 0-.56.16-.16.41-.16.56 0z\"></path><path d=\"M5.49 6.34c.15.15.15.4 0 .56-.15.16-.4.15-.56 0a.405.405 0 0 1 0-.56c.15-.16.41-.16.56 0z\"></path><path d=\"M5.49 6.34c.15.15.15.4 0 .56-.15.16-.4.15-.56 0a.405.405 0 0 1 0-.56c.15-.16.41-.16.56 0z\"></path><path d=\"M12.28 3.52c.15.15.15.4 0 .56-.15.16-.4.15-.56 0-.16-.15-.15-.4 0-.56.15-.16.41-.15.56 0z\"></path><path d=\"M12.28 3.52c.15.15.15.4 0 .56-.15.16-.4.15-.56 0-.16-.15-.15-.4 0-.56.15-.16.41-.15.56 0z\"></path>","diagram":"<path d=\"M17.97 22H22\"></path><path d=\"M2 2v17c0 1.66 1.34 3 3 3h8.98\"></path><path d=\"M19.99 8.18L21 7\"></path><path d=\"M5 17l4.59-5.36c.76-.88 2.11-.94 2.93-.11l.95.95c.82.82 2.17.77 2.93-.11l1.15-1.35\"></path>","diamonds":"<path d=\"M21.21 13.23c.77-.85 1.02-2.39.55-3.43L19.2 4.04c-.46-1.04-1.21-1.89-2.91-1.89H7.7C6 2.15 5.25 3 4.79 4.04L2.23 9.8c-.46 1.04-.21 2.59.56 3.43l6.86 7.54c1.3 1.42 3.42 1.42 4.71 0l4.03-4.44\"></path><path d=\"M3.5 8h17\"></path>","direct-down":"<path d=\"M3.07 7.7C1.62 4.95 4.55 1.96 7.33 3.35l3.24 1.62c.9.45 1.96.45 2.86 0l3.24-1.62c2.78-1.39 5.7 1.6 4.26 4.35l-6.1 11.59c-1.2 2.28-4.46 2.28-5.66 0L5.5 12.32\"></path>","direct-inbox":"<path d=\"M12 2v7l2-2\"></path><path d=\"M12 9l-2-2\"></path><path d=\"M1.98 13h4.41c.38 0 .72.21.89.55l1.17 2.34A2 2 0 0 0 10.24 17h3.53a2 2 0 0 0 1.79-1.11l1.17-2.34a1 1 0 0 1 .89-.55h4.36\"></path><path d=\"M2.69 19c.96 2.1 2.96 3 6.31 3h6c5 0 7-2 7-7v-4c0-4.27-1.46-6.35-5-6.87\"></path><path d=\"M7 4.13c-3.54.52-5 2.6-5 6.87v4\"></path>","direct-left":"<path d=\"M16.3 3.07c2.75-1.45 5.74 1.48 4.35 4.26l-1.62 3.24c-.45.9-.45 1.96 0 2.86l1.62 3.24c1.39 2.78-1.6 5.7-4.35 4.26l-11.59-6.1c-2.28-1.2-2.28-4.46 0-5.66l6.97-3.67\"></path>","direct-normal":"<path d=\"M2.69 19.01C3.65 21.1 5.65 22 9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6\"></path><path d=\"M2 13h3.76a2 2 0 0 1 1.79 1.11l.89 1.79C9 17 10 17 10.24 17h3.53a2 2 0 0 0 1.79-1.11l.89-1.79a2 2 0 0 1 1.79-1.11h3.74\"></path>","direct-notification":"<path d=\"M1.98 13h3.79a2 2 0 0 1 1.79 1.11l.89 1.79C9 17 10 17 10.24 17h3.53a2 2 0 0 0 1.79-1.11l.89-1.79a2 2 0 0 1 1.79-1.11h3.74\"></path><path d=\"M19 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3c0-.34-.06-.68-.16-.98\"></path><path d=\"M2.69 19c.96 2.1 2.96 3 6.31 3h6c5 0 7-2 7-7v-5\"></path><path d=\"M14 2H9C4 2 2 4 2 9v6\"></path>","direct-right":"<path d=\"M7.7 3.07C4.95 1.62 1.96 4.55 3.35 7.33l1.62 3.24c.45.9.45 1.96 0 2.86l-1.62 3.24c-1.39 2.78 1.6 5.7 4.35 4.26l11.59-6.1c2.28-1.2 2.28-4.46 0-5.66L12.32 5.5\"></path>","direct-send":"<path d=\"M12 9V2l-2 2\"></path><path d=\"M12 2l2 2\"></path><path d=\"M1.98 13h4.41c.38 0 .72.21.89.55l1.17 2.34A2 2 0 0 0 10.24 17h3.53a2 2 0 0 0 1.79-1.11l1.17-2.34a1 1 0 0 1 .89-.55h4.36\"></path><path d=\"M2.69 19c.96 2.1 2.96 3 6.31 3h6c5 0 7-2 7-7v-3c0-4.27-1.46-6.35-5-6.87\"></path><path d=\"M7 5.13c-3.54.52-5 2.6-5 6.87v3\"></path>","direct-up":"<path d=\"M3.07 16.3c-1.45 2.75 1.48 5.74 4.26 4.35l3.24-1.62c.9-.45 1.96-.45 2.86 0l3.24 1.62c2.78 1.39 5.7-1.6 4.26-4.35l-6.1-11.59c-1.2-2.28-4.46-2.28-5.66 0L5.5 11.68\"></path>","direct":"<path d=\"M2.69 19.01C3.65 21.1 5.65 22 9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6\"></path><path d=\"M2 13h3.76a2 2 0 0 1 1.79 1.11l.89 1.79C9 17 10 17 10.24 17h3.53a2 2 0 0 0 1.79-1.11l.89-1.79a2 2 0 0 1 1.79-1.11h3.74\"></path><path d=\"M13.66 10h.84\"></path><path d=\"M9.5 10h1.58\"></path><path d=\"M10.34 7h3.33\"></path>","directbox-default":"<path d=\"M5 9.96V12\"></path><path d=\"M19 12V6c0-2.21 0-4-4-4H9C5 2 5 3.79 5 6\"></path><path d=\"M7 12c-4 0-4 1.79-4 4v1c0 2.76 0 5 5 5h8c4 0 5-2.24 5-5v-1c0-2.21 0-4-4-4-1 0-1.28.21-1.8.6l-1.02 1.08a2.999 2.999 0 0 1-4.37 0L8.8 12.6C8.28 12.21 8 12 7 12z\"></path>","directbox-notif":"<path d=\"M7 12c-4 0-4 1.79-4 4v1c0 2.76 0 5 5 5h8c4 0 5-2.24 5-5v-1c0-2.21 0-4-4-4-1 0-1.28.21-1.8.6l-1.02 1.08a2.999 2.999 0 0 1-4.37 0L8.8 12.6C8.28 12.21 8 12 7 12z\"></path><path d=\"M5 9.96V12\"></path><path d=\"M19 12V6c0-2.21 0-4-4-4H9C5 2 5 3.79 5 6\"></path><path d=\"M10.33 9.2h3.33\"></path><path d=\"M13.66 6.2h.84\"></path><path d=\"M9.5 6.2h1.58\"></path>","directbox-receive":"<path d=\"M12 2v6l2-2\"></path><path d=\"M12 8l-2-2\"></path><path d=\"M12 22h4c4 0 5-2.24 5-5v-1c0-2.21 0-4-4-4-1 0-1.28.21-1.8.6l-1.02 1.08a2.999 2.999 0 0 1-4.37 0L8.8 12.6C8.28 12.21 8 12 7 12c-4 0-4 1.79-4 4v1c0 2.76 0 5 5 5\"></path><path d=\"M5 12V8c0-2.01 0-3.67 3-3.96\"></path><path d=\"M19 12V8c0-2.01 0-3.67-3-3.96\"></path>","directbox-send":"<path d=\"M12 8V2l-2 2\"></path><path d=\"M12 2l2 2\"></path><path d=\"M12 22h4c4 0 5-2.24 5-5v-1c0-2.21 0-4-4-4-1 0-1.28.21-1.8.6l-1.02 1.08a2.999 2.999 0 0 1-4.37 0L8.8 12.6C8.28 12.21 8 12 7 12c-4 0-4 1.79-4 4v1c0 2.76 0 5 5 5\"></path><path d=\"M5 12v-2c0-2.01 0-3.67 3-3.96\"></path><path d=\"M19 12v-2c0-2.01 0-3.67-3-3.96\"></path>","discount-circle":"<path d=\"M9 15l6-6\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path><path d=\"M14.495 14.5h.009\"></path><path d=\"M9.495 9.5h.008\"></path>","discount-shape":"<path d=\"M14.66 20.01l-1.52 1.52c-.62.62-1.64.62-2.26 0l-1.52-1.52c-.26-.26-.77-.47-1.13-.47H6.08c-.88 0-1.6-.72-1.6-1.6v-2.15c0-.36-.21-.87-.47-1.13l-1.52-1.52c-.62-.62-.62-1.64 0-2.26l1.52-1.52c.26-.26.47-.77.47-1.13V6.08c0-.88.72-1.6 1.6-1.6\"></path><path d=\"M9.34 3.99l1.52-1.52c.62-.62 1.64-.62 2.26 0l1.52 1.52c.26.26.77.47 1.13.47h2.15c.88 0 1.6.72 1.6 1.6v2.15c0 .36.21.87.47 1.13l1.52 1.52c.62.62.62 1.64 0 2.26l-1.52 1.52c-.26.26-.47.77-.47 1.13v2.15c0 .88-.72 1.6-1.6 1.6\"></path><path d=\"M9 15l6-6\"></path><path d=\"M14.495 14.5h.009\"></path><path d=\"M9.495 9.5h.008\"></path>","discover-1":"<path d=\"M7.87 4.59c-1.45.36-2.92 1.83-3.28 3.28L2.1 17.8c-.75 3 1.09 4.85 4.1 4.1l9.93-2.48c1.44-.36 2.92-1.84 3.28-3.28L21.9 6.2c.75-3-1.09-4.85-4.1-4.1l-4.79 1.2\"></path><path d=\"M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z\"></path>","discover":"<path d=\"M14.71 14.03c.8-.96 1.29-2.19 1.29-3.53C16 9.13 14.87 8 13.5 8 10.47 8 8 10.48 8 13.5c0 1.37 1.12 2.5 2.5 2.5\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","dislike":"<path d=\"M2.52 12.05c-.5 1.4.4 2.6 1.9 2.6h4c.6 0 1.1.5 1 1.2l-.5 3.2c-.2.9.4 1.9 1.3 2.2.8.3 1.8-.1 2.2-.7l4.1-6.1\"></path><path d=\"M16.52 5.65l-3.1-2.4c-.4-.4-1.3-.6-1.9-.6h-3.8c-1.2 0-2.5.9-2.8 2.1L3.78 8.22\"></path><path d=\"M21.62 5.65v9.8c0 1.4-.6 1.9-2 1.9h-1c-1.4 0-2-.5-2-1.9v-9.8c0-1.4.6-1.9 2-1.9h1c1.4 0 2 .5 2 1.9z\"></path>","document-1":"<path d=\"M2 9c0-5 2-7 7-7h5\"></path><path d=\"M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7v-2.02\"></path><path d=\"M18 10c-3 0-4-1-4-4V2l8 8\"></path>","document-cloud":"<path d=\"M2 13v2c0 5 2 7 7 7\"></path><path d=\"M14 2H9C4 2 2 4 2 9\"></path><path d=\"M22 10v3\"></path><path d=\"M22 10h-4c-3 0-4-1-4-4V2l8 8z\"></path><path d=\"M13.76 18.26c-2.35.17-2.35 3.57 0 3.74h5.56c.67 0 1.33-.25 1.82-.7 1.65-1.44.77-4.32-1.4-4.59-.78-4.69-7.56-2.91-5.96 1.56\"></path>","document-code-2":"<path d=\"M21 13.03V7c0-3-1.5-5-5-5H8C4.5 2 3 4 3 7v7\"></path><path d=\"M11 22h5c3.5 0 5-2 5-5\"></path><path d=\"M14.5 4.5v2c0 1.1.9 2 2 2h2\"></path><path d=\"M4 17l-2 2 2 2\"></path><path d=\"M7 17l2 2-2 2\"></path>","document-code":"<path d=\"M3 7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5v-5.98\"></path><path d=\"M14.5 4.5v2c0 1.1.9 2 2 2h2\"></path><path d=\"M10 13l-2 2 2 2\"></path><path d=\"M14 13l2 2-2 2\"></path>","document-copy":"<path d=\"M2 12.6C2 8.6 3.6 7 7.6 7h3\"></path><path d=\"M17 13.4v3c0 4-1.6 5.6-5.6 5.6H7.6c-4 0-5.6-1.6-5.6-5.6\"></path><path d=\"M13.8 13.4c-2.4 0-3.2-.8-3.2-3.2V7l6.4 6.4\"></path><path d=\"M11.6 2h4\"></path><path d=\"M7 5c0-1.66 1.34-3 3-3h2.62\"></path><path d=\"M22 8v6.19c0 1.55-1.26 2.81-2.81 2.81\"></path><path d=\"M22 8h-3c-2.25 0-3-.75-3-3V2l6 6z\"></path>","document-download":"<path d=\"M9 14.35V17l2-2\"></path><path d=\"M9 11v1\"></path><path d=\"M9 17l-2-2\"></path><path d=\"M2 9c0-5 2-7 7-7h5\"></path><path d=\"M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7v-2.02\"></path><path d=\"M18 10c-3 0-4-1-4-4V2l8 8\"></path>","document-favorite":"<path d=\"M9.42 18.2c-.5 0-2.27-.83-2.8-2.48-.33-1.03.06-2.3 1.13-2.65.57-.18 1.27-.03 1.66.52.37-.57 1.1-.7 1.66-.52 1.08.35 1.46 1.62 1.14 2.65\"></path><path d=\"M2 9c0-5 2-7 7-7h5\"></path><path d=\"M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7v-2.02\"></path><path d=\"M18 10c-3 0-4-1-4-4V2l8 8\"></path>","document-filter":"<path d=\"M3.35 2h8.9c.74 0 1.35.61 1.35 1.35v1.48c0 .54-.34 1.21-.67 1.55l-2.9 2.56c-.4.34-.67 1.01-.67 1.55v2.9c0 .4-.27.94-.61 1.15l-.94.61c-.88.54-2.09-.07-2.09-1.15v-3.57c0-.47-.27-1.08-.54-1.42l-2.56-2.7c-.34-.34-.61-.94-.61-1.35V3.41C2 2.61 2.61 2 3.35 2z\"></path><path d=\"M22 9c0-3.12-.78-5.08-2.59-6.1-.51-.29-1.53-.51-2.46-.66\"></path><path d=\"M2 12v3c0 5 2 7 7 7h6c5 0 7-2 7-7v-2\"></path><path d=\"M13 13h5\"></path><path d=\"M11 17h7\"></path>","document-forward":"<path d=\"M10.35 15H13l-2 2\"></path><path d=\"M7 15h1\"></path><path d=\"M13 15l-2-2\"></path><path d=\"M2 9c0-5 2-7 7-7h5\"></path><path d=\"M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7v-2.02\"></path><path d=\"M18 10c-3 0-4-1-4-4V2l8 8\"></path>","document-like":"<path d=\"M3 7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5v-5.98\"></path><path d=\"M14.5 4.5v2c0 1.1.9 2 2 2h2\"></path><path d=\"M7.48 15.49c-.33-1.03.06-2.3 1.13-2.65.57-.18 1.27-.03 1.66.52.37-.57 1.1-.7 1.66-.52 1.08.35 1.46 1.62 1.14 2.65-.51 1.63-2.3 2.48-2.8 2.48-.49-.01-2.26-.84-2.79-2.48z\"></path>","document-normal":"<path d=\"M10.96 2H10C9 2 8 2 8 4s1 2 2 2h4c2 0 2-1 2-2 0-2-1-2-2-2\"></path><path d=\"M3 10c0-4.56 1.67-5.8 5-5.98\"></path><path d=\"M16 4.02c3.33.18 5 1.41 5 5.98v6c0 4-1 6-6 6H9c-5 0-6-2-6-6v-2.09\"></path>","document-previous":"<path d=\"M9.65 15H7l2 2\"></path><path d=\"M13 15h-1\"></path><path d=\"M7 15l2-2\"></path><path d=\"M2 9c0-5 2-7 7-7h5\"></path><path d=\"M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7v-2.02\"></path><path d=\"M18 10c-3 0-4-1-4-4V2l8 8\"></path>","document-sketch":"<path d=\"M10.29 17.7c-.35.35-.93.35-1.28 0l-2.46-2.46a.935.935 0 0 1-.11-1.14l1.13-1.7c.15-.22.49-.4.75-.4h2.65c.27 0 .61.18.75.4l1.13 1.7c.23.34.18.85-.11 1.14\"></path><path d=\"M2 9c0-5 2-7 7-7h5\"></path><path d=\"M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7v-2.02\"></path><path d=\"M18 10c-3 0-4-1-4-4V2l8 8\"></path>","document-text-1":"<path d=\"M3 7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5v-5.98\"></path><path d=\"M14.5 4.5v2c0 1.1.9 2 2 2h2\"></path><path d=\"M8 13h4\"></path><path d=\"M8 17h8\"></path>","document-text":"<path d=\"M12 13h1\"></path><path d=\"M7 13h2.45\"></path><path d=\"M7 17h4\"></path><path d=\"M2 9c0-5 2-7 7-7h5\"></path><path d=\"M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7v-2.02\"></path><path d=\"M18 10c-3 0-4-1-4-4V2l8 8\"></path>","document-upload":"<path d=\"M9 13.65V11l2 2\"></path><path d=\"M9 17v-1\"></path><path d=\"M9 11l-2 2\"></path><path d=\"M2 9c0-5 2-7 7-7h5\"></path><path d=\"M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7v-2.02\"></path><path d=\"M18 10c-3 0-4-1-4-4V2l8 8\"></path>","document":"<path d=\"M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M15.75 9h-7.5\"></path><path d=\"M15.75 15h-7.5\"></path>","dollar-square":"<path d=\"M8.67 14.33c0 1.29.99 2.33 2.22 2.33h2.51c1.07 0 1.94-.91 1.94-2.03 0-1.22-.53-1.65-1.32-1.93l-4.03-1.4c-.79-.28-1.32-.71-1.32-1.93 0-1.12.87-2.03 1.94-2.03h2.51c1.23 0 2.22 1.04 2.22 2.33\"></path><path d=\"M12 6v12\"></path><path d=\"M2 9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7H9c-5 0-7-2-7-7v-1.97\"></path>","driver-2":"<path d=\"M6 6.25v2\"></path><path d=\"M10 6.25v2\"></path><path d=\"M2 9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7H9c-5 0-7-2-7-7v-3h16\"></path><path d=\"M6 16v2\"></path><path d=\"M10 16v2\"></path><path d=\"M14 7.25h4\"></path><path d=\"M14 17h4\"></path>","driver-refresh":"<path d=\"M6 6.25v2\"></path><path d=\"M22 12V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h3\"></path><path d=\"M10 6.25v2\"></path><path d=\"M6 16v2\"></path><path d=\"M10 16v2\"></path><path d=\"M14 7.25h4\"></path><path d=\"M2 12h16\"></path><path d=\"M21.56 20.33a3.24 3.24 0 0 1-2.81 1.62c-1.79 0-2.89-1.8-2.89-1.8m.07-3.06c.56-.98 1.61-1.63 2.82-1.63 2.17 0 3.25 1.8 3.25 1.8m0-2.01v2h-2m-2.14 2.89h-2V22\"></path>","driver":"<path d=\"M17.32 10H4.69c-1.48 0-2.68-1.21-2.68-2.68V4.69c0-1.48 1.21-2.68 2.68-2.68h14.63C20.8 2.01 22 3.22 22 4.69v2.63\"></path><path d=\"M19.32 22H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68z\"></path><path d=\"M6 5v2\"></path><path d=\"M10 5v2\"></path><path d=\"M6 17v2\"></path><path d=\"M10 17v2\"></path><path d=\"M14 6h4\"></path><path d=\"M14 18h4\"></path>","driving":"<path d=\"M11.281 2h-1.83c-1.8 0-2.2.9-2.43 2.01l-.82 3.92h11.6l-.82-3.92c-.23-1.1-.63-2.01-2.43-2.01\"></path><path d=\"M19.16 13.43l.08.89c.08.85-.6 1.58-1.47 1.58h-1.36c-.78 0-.89-.33-1.03-.75l-.15-.43c-.2-.59-.33-.99-1.38-.99h-3.71c-1.04 0-1.2.45-1.38.99l-.15.43c-.14.41-.25.75-1.03.75H6.22c-.87 0-1.55-.73-1.47-1.58l.41-4.42c.1-1.09.31-1.98 2.21-1.98h9.25c1.9 0 2.11.89 2.21 1.98\"></path><path d=\"M6.2 5.75h-.73\"></path><path d=\"M18.53 5.75h-.73\"></path><path d=\"M7.65 10.83h2.17\"></path><path d=\"M14.18 10.83h2.17\"></path><path d=\"M12 17v1\"></path><path d=\"M12 21v1\"></path><path d=\"M3 18l-1 4\"></path><path d=\"M21 18l1 4\"></path>","drop":"<path d=\"M3.9 13.9c0 4.46 3.63 8.1 8.1 8.1s8.1-3.63 8.1-8.09c.03-5.43-5.6-10.24-7.49-11.7\"></path><path d=\"M12.61 2.21a.99.99 0 0 0-1.219 0c-1.38 1.05-4.72 3.83-6.43 7.39\"></path>","edit-2":"<path d=\"M17.37 10.17l1.34-1.42c1.42-1.5 2.06-3.21-.15-5.3-2.21-2.08-3.88-1.35-5.3.15l-8.21 8.69c-.31.33-.61.98-.67 1.43l-.37 3.24c-.13 1.17.71 1.97 1.87 1.77l3.22-.55c.45-.08 1.08-.41 1.39-.75l3.95-4.18\"></path><path d=\"M11.89 5.05a6.126 6.126 0 0 0 5.45 5.15\"></path><path d=\"M3 22h11\"></path><path d=\"M18 22h3\"></path>","edit":"<path d=\"M22 13v2c0 5-2 7-7 7H9c-5 0-7-2-7-7v-1.52\"></path><path d=\"M11 2H9C4 2 2 4 2 9\"></path><path d=\"M19.93 9.01l1.05-1.05c1.36-1.36 2-2.94 0-4.94-2-2-3.58-1.36-4.94 0L8.16 10.9c-.3.3-.6.89-.66 1.32l-.43 3.01c-.16 1.09.61 1.85 1.7 1.7l3.01-.43c.42-.06 1.01-.36 1.32-.66l3.18-3.18.73-.73\"></path><path d=\"M14.91 4.15a7.144 7.144 0 0 0 4.94 4.94\"></path>","electricity":"<path d=\"M17.5 7.96V6.91c0-1.05-.86-1.91-1.91-1.91H8.42c-1.05 0-1.91.86-1.91 1.91V12c0 2.2 1.5 4 4 4h3c2.5 0 4-1.8 4-4\"></path><path d=\"M9.5 2v3\"></path><path d=\"M14.5 2v3\"></path><path d=\"M12 22v-6\"></path>","element-2":"<path d=\"M8.27 22c1.59 0 2.23-.6 2.23-2.1V4.1c0-1.5-.64-2.1-2.23-2.1H4.23C2.64 2 2 2.6 2 4.1v15.8c0 1.5.64 2.1 2.23 2.1\"></path><path d=\"M15.73 2c-1.59 0-2.23.6-2.23 2.1v6.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1V4.1c0-1.5-.64-2.1-2.23-2.1\"></path><path d=\"M22 19.9v-1.8c0-1.5-.64-2.1-2.23-2.1h-4.04c-1.59 0-2.23.6-2.23 2.1v1.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1z\"></path>","element-3":"<path d=\"M15.73 2c-1.59 0-2.23.57-2.23 1.98v4.53c0 1.42.64 1.98 2.23 1.98h4.04c1.59 0 2.23-.57 2.23-1.98V3.98C22 2.57 21.36 2 19.77 2\"></path><path d=\"M22 19.77v-4.04c0-1.59-.64-2.23-2.23-2.23h-4.04c-1.59 0-2.23.64-2.23 2.23v4.04c0 1.59.64 2.23 2.23 2.23h4.04c1.59 0 2.23-.64 2.23-2.23z\"></path><path d=\"M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98v4.53c0 1.42.64 1.98 2.23 1.98h4.04c1.59.01 2.23-.56 2.23-1.97z\"></path><path d=\"M8.27 22c1.59 0 2.23-.64 2.23-2.23v-4.04c0-1.59-.64-2.23-2.23-2.23H4.23c-1.59 0-2.23.64-2.23 2.23v4.04C2 21.36 2.64 22 4.23 22\"></path>","element-4":"<path d=\"M15.73 2c-1.59 0-2.23.6-2.23 2.1v6.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1V4.1c0-1.5-.64-2.1-2.23-2.1\"></path><path d=\"M22 19.9v-1.8c0-1.5-.64-2.1-2.23-2.1h-4.04c-1.59 0-2.23.6-2.23 2.1v1.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1z\"></path><path d=\"M4.23 22C2.64 22 2 21.4 2 19.9v-6.8c0-1.5.64-2.1 2.23-2.1h4.04c1.59 0 2.23.6 2.23 2.1v6.8c0 1.5-.64 2.1-2.23 2.1\"></path><path d=\"M10.5 4.1v1.8c0 1.5-.64 2.1-2.23 2.1H4.23C2.64 8 2 7.4 2 5.9V4.1C2 2.6 2.64 2 4.23 2h4.04c1.59 0 2.23.6 2.23 2.1z\"></path>","element-equal":"<path d=\"M15.73 2c-1.59 0-2.23.64-2.23 2.23v4.04c0 1.59.64 2.23 2.23 2.23h4.04c1.59 0 2.23-.64 2.23-2.23V4.23C22 2.64 21.36 2 19.77 2\"></path><path d=\"M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98v4.53c0 1.42.64 1.98 2.23 1.98h4.04c1.59.01 2.23-.56 2.23-1.97z\"></path><path d=\"M8.27 22c1.59 0 2.23-.64 2.23-2.23v-4.04c0-1.59-.64-2.23-2.23-2.23H4.23c-1.59 0-2.23.64-2.23 2.23v4.04C2 21.36 2.64 22 4.23 22\"></path><path d=\"M15 15.5h6\"></path><path d=\"M15 19.5h6\"></path>","element-plus":"<path d=\"M15.73 2c-1.59 0-2.23.64-2.23 2.23v4.04c0 1.59.64 2.23 2.23 2.23h4.04c1.59 0 2.23-.64 2.23-2.23V4.23C22 2.64 21.36 2 19.77 2\"></path><path d=\"M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98v4.53c0 1.42.64 1.98 2.23 1.98h4.04c1.59.01 2.23-.56 2.23-1.97z\"></path><path d=\"M8.27 22c1.59 0 2.23-.64 2.23-2.23v-4.04c0-1.59-.64-2.23-2.23-2.23H4.23c-1.59 0-2.23.64-2.23 2.23v4.04C2 21.36 2.64 22 4.23 22\"></path><path d=\"M14.5 17.5h6\"></path><path d=\"M17.5 20.5v-6\"></path>","emoji-happy":"<path d=\"M2 12.96V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M15.5 9.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z\"></path><path d=\"M8.5 9.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z\"></path><path d=\"M8.4 13.3h7.2c.5 0 .9.4.9.9 0 2.49-2.01 4.5-4.5 4.5s-4.5-2.01-4.5-4.5c0-.5.4-.9.9-.9z\"></path>","emoji-normal":"<path d=\"M2 13v2c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M7 8.25c1 1 2.63 1 3.64 0\"></path><path d=\"M13.36 8.25c1 1 2.63 1 3.64 0\"></path><path d=\"M8.4 13h7.2c.5 0 .9.4.9.9 0 2.49-2.01 4.5-4.5 4.5s-4.5-2.01-4.5-4.5c0-.5.4-.9.9-.9z\"></path>","emoji-sad":"<path d=\"M2 13v2c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M7 8.75c1-1 2.63-1 3.64 0\"></path><path d=\"M13.36 8.75c1-1 2.63-1 3.64 0\"></path><path d=\"M8.4 17.7h7.2c.5 0 .9-.4.9-.9 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5c0 .5.4.9.9.9z\"></path>","empty-wallet-add":"<path d=\"M22.56 13.97v2.06c0 .55-.44 1-1 1.02H19.6c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.08c.56.02 1 .47 1 1.02z\"></path><path d=\"M7 12h7\"></path><path d=\"M9 19c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 1 19c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 9 19z\"></path><path d=\"M6.49 18.98H3.51\"></path><path d=\"M5 17.52v2.99\"></path><path d=\"M14 22H7.63c.31-.26.58-.58.79-.94.37-.6.58-1.31.58-2.06a3.999 3.999 0 0 0-6.5-3.12v-4.37c0-2.07 1.69-3.76 3.76-3.76h11.48c2.07 0 3.76 1.69 3.76 3.76v1.44h-2.02c-.56 0-1.07.22-1.44.6-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19c0 2.07-1.69 3.76-3.76 3.76\"></path><path d=\"M12.28 2.17a1.9 1.9 0 0 1 2.57 1.78v3.8\"></path><path d=\"M2.5 12.41V7.84c0-1.19.73-2.25 1.84-2.67l3.97-1.5\"></path>","empty-wallet-change":"<path d=\"M2.5 13.24v-1.73c0-2.07 1.69-3.76 3.76-3.76h11.48c2.07 0 3.76 1.69 3.76 3.76v1.44h-2.02c-.56 0-1.07.22-1.44.6-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19c0 2.07-1.69 3.76-3.76 3.76h-5.48\"></path><path d=\"M22.56 13.97v2.06c0 .55-.44 1-1 1.02H19.6c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.08c.56.02 1 .47 1 1.02z\"></path><path d=\"M7 12h7\"></path><path d=\"M3 16.5h5.34c.64 0 1.16.52 1.16 1.16v1.28\"></path><path d=\"M4.22 15.28L3 16.5l1.22 1.22\"></path><path d=\"M9.5 21.78H4.16c-.64 0-1.16-.52-1.16-1.16v-1.28\"></path><path d=\"M8.28 23l1.22-1.22-1.22-1.22\"></path><path d=\"M12.28 2.17a1.9 1.9 0 0 1 2.57 1.78v3.8\"></path><path d=\"M2.5 12.41V7.84c0-1.19.73-2.25 1.84-2.67l3.97-1.5\"></path>","empty-wallet-remove":"<path d=\"M14 22H7.63c.31-.26.58-.58.79-.94.37-.6.58-1.31.58-2.06a3.999 3.999 0 0 0-6.5-3.12v-4.37c0-2.07 1.69-3.76 3.76-3.76h11.48c2.07 0 3.76 1.69 3.76 3.76v1.44h-2.02c-.56 0-1.07.22-1.44.6-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19c0 2.07-1.69 3.76-3.76 3.76\"></path><path d=\"M22.56 13.97v2.06c0 .55-.44 1-1 1.02H19.6c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.08c.56.02 1 .47 1 1.02z\"></path><path d=\"M7 12h7\"></path><path d=\"M9 19c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 1 19c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 9 19z\"></path><path d=\"M6.07 20.04l-2.12-2.11\"></path><path d=\"M6.05 17.96l-2.12 2.11\"></path><path d=\"M12.28 2.17a1.9 1.9 0 0 1 2.57 1.78v3.8\"></path><path d=\"M2.5 12.41V7.84c0-1.19.73-2.25 1.84-2.67l3.97-1.5\"></path>","empty-wallet-tick":"<path d=\"M22.56 13.97v2.06c0 .55-.44 1-1 1.02H19.6c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.08c.56.02 1 .47 1 1.02z\"></path><path d=\"M7 12h7\"></path><path d=\"M9 19c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 1 19c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 9 19z\"></path><path d=\"M3.44 19l.99.99 2.13-1.97\"></path><path d=\"M14 22H7.63c.31-.26.58-.58.79-.94.37-.6.58-1.31.58-2.06a3.999 3.999 0 0 0-6.5-3.12v-4.37c0-2.07 1.69-3.76 3.76-3.76h11.48c2.07 0 3.76 1.69 3.76 3.76v1.44h-2.02c-.56 0-1.07.22-1.44.6-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19c0 2.07-1.69 3.76-3.76 3.76\"></path><path d=\"M12.28 2.17a1.9 1.9 0 0 1 2.57 1.78v3.8\"></path><path d=\"M2.5 12.41V7.84c0-1.19.73-2.25 1.84-2.67l3.97-1.5\"></path>","empty-wallet-time":"<path d=\"M22.56 13.97v2.06c0 .55-.44 1-1 1.02H19.6c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.08c.56.02 1 .47 1 1.02z\"></path><path d=\"M7 12h7\"></path><path d=\"M9 19c0 1.2-.53 2.27-1.36 3A4 4 0 0 1 5 23c-2.21 0-4-1.79-4-4 0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 9 19z\"></path><path d=\"M5.25 17.75v1.5L4 20\"></path><path d=\"M14 22H7.63c.31-.26.58-.58.79-.94.37-.6.58-1.31.58-2.06a3.999 3.999 0 0 0-6.5-3.12v-4.37c0-2.07 1.69-3.76 3.76-3.76h11.48c2.07 0 3.76 1.69 3.76 3.76v1.44h-2.02c-.56 0-1.07.22-1.44.6-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19c0 2.07-1.69 3.76-3.76 3.76\"></path><path d=\"M12.28 2.17a1.9 1.9 0 0 1 2.57 1.78v3.8\"></path><path d=\"M2.5 12.41V7.84c0-1.19.73-2.25 1.84-2.67l3.97-1.5\"></path>","empty-wallet":"<path d=\"M2.5 14.07v-2.56c0-2.07 1.69-3.76 3.76-3.76h11.48c2.07 0 3.76 1.69 3.76 3.76v1.44h-2.02c-.56 0-1.07.22-1.44.6-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19c0 2.07-1.69 3.76-3.76 3.76H6.26c-2.07 0-3.76-1.69-3.76-3.76\"></path><path d=\"M12.28 2.17a1.9 1.9 0 0 1 2.57 1.78v3.8\"></path><path d=\"M2.5 12.41V7.84c0-1.19.73-2.25 1.84-2.67l3.97-1.5\"></path><path d=\"M22.56 13.97v2.06c0 .55-.44 1-1 1.02H19.6c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.08c.56.02 1 .47 1 1.02z\"></path><path d=\"M7 12h7\"></path>","eraser-1":"<path d=\"M9 22h12\"></path><path d=\"M21.09 10.66a3 3 0 0 0 0-4.24l-3.51-3.51a3 3 0 0 0-4.24 0L2.91 13.34a3 3 0 0 0 0 4.24l3.51 3.51a3 3 0 0 0 4.24 0l7.08-7.08\"></path><path d=\"M7.12 9.13l7.75 7.75\"></path><path d=\"M3.52 17.66L9.17 12\"></path><path d=\"M6.34 20.49L12 14.83\"></path>","eraser":"<path d=\"M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M6.99 15.08l1.94 1.94c.64.64 1.7.64 2.34 0l5.75-5.75c.64-.64.64-1.7 0-2.34l-1.94-1.94c-.64-.64-1.7-.64-2.34 0l-5.75 5.75c-.65.64-.65 1.69 0 2.34z\"></path><path d=\"M9.309 10.42l4.27 4.27\"></path>","export-1":"<path d=\"M13 11l8.2-8.2\"></path><path d=\"M22 6.8V2h-4.8\"></path><path d=\"M2 12.99V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-2\"></path><path d=\"M11 2H9C4 2 2 4 2 9\"></path>","export-2":"<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10\"></path><path d=\"M16.56 7.44L21.2 2.8\"></path><path d=\"M13 11l1-1\"></path><path d=\"M22 6.83V2h-4.83\"></path>","export-3":"<path d=\"M17.52 18.01C16.16 19.25 14.29 20 12 20c-5 0-8-3.58-8-8\"></path><path d=\"M20 12c0 1.05-.17 2.05-.49 2.97\"></path><path d=\"M9.44 6.47L12 3.91l2.56 2.56\"></path><path d=\"M12 9.15V3.98\"></path><path d=\"M12 14.15v-1.96\"></path>","export":"<path d=\"M12 15V3.62\"></path><path d=\"M15.35 5.85L12 2.5 8.65 5.85\"></path><path d=\"M8.74 21.5c-4.47 0-6.26-1.79-6.26-6.26v-.13c0-4.02 1.45-5.87 4.99-6.2\"></path><path d=\"M16.44 8.9c3.6.31 5.07 2.16 5.07 6.21v.13c0 4.47-1.79 6.26-6.26 6.26h-2.24\"></path>","external-drive":"<path d=\"M4 7c0-3 2-5 5-5h7c3 0 5 2 5 5v10c0 3-2 5-5 5H9c-3 0-5-2-5-5v-5.29\"></path><path d=\"M4 15h17\"></path><path d=\"M7 12h1\"></path><path d=\"M7 9.5h1\"></path><path d=\"M7 7h1\"></path><path d=\"M16.494 18.25h.01\"></path>","eye-slash":"<path d=\"M14.53 9.47l-5.06 5.06a3.576 3.576 0 1 1 5.06-5.06z\"></path><path d=\"M5.6 17.76c-1-.86-1.91-1.92-2.71-3.17-.9-1.41-.9-3.78 0-5.19 1.18-1.85 2.62-3.3 4.23-4.27\"></path><path d=\"M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73\"></path><path d=\"M8.42 19.53c1.14.48 2.35.74 3.58.74 3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-.33-.52-.69-1.01-1.06-1.47\"></path><path d=\"M15.51 12.7a3.565 3.565 0 0 1-2.82 2.82\"></path><path d=\"M9.47 14.53L2 22\"></path><path d=\"M22 2l-7.47 7.47\"></path>","eye":"<path d=\"M9.03 14c-.39-.57-.61-1.26-.61-2 0-1.98 1.6-3.58 3.58-3.58s3.58 1.6 3.58 3.58-1.6 3.58-3.58 3.58\"></path><path d=\"M17.56 5.58c-1.69-1.2-3.59-1.85-5.56-1.85-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19 2.29 3.6 5.58 5.68 9.11 5.68 3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19\"></path>","fatrows":"<path d=\"M22 15.73c0-1.59-.6-2.23-2.1-2.23H4.1c-1.5 0-2.1.64-2.1 2.23v4.04C2 21.36 2.6 22 4.1 22h15.8c1.5 0 2.1-.64 2.1-2.23\"></path><path d=\"M2 8.27c0 1.59.6 2.23 2.1 2.23h8.8c1.5 0 2.1-.64 2.1-2.23V4.23C15 2.64 14.4 2 12.9 2H4.1C2.6 2 2 2.64 2 4.23\"></path>","favorite-chart":"<path d=\"M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4\"></path><path d=\"M7.33 14.49l2.38-3.09c.34-.44.97-.52 1.41-.18l1.83 1.44c.44.34 1.07.26 1.41-.17l2.31-2.98\"></path><path d=\"M20.55 16.98c-.3-.05-.66-.32-.8-.6l-.28-.57c-.54-1.09-1.42-1.09-1.95 0l-.28.57c-.14.28-.49.54-.8.6l-.38.06c-1.14.19-1.41 1.03-.59 1.86l.35.35c.23.24.36.7.29 1.02l-.05.21c-.31 1.38.42 1.91 1.62 1.19l.26-.15c.31-.18.81-.18 1.12 0l.26.15c1.21.73 1.94.19 1.62-1.19l-.05-.21\"></path>","filter-add":"<path d=\"M21.63 14.75c0 .89-.25 1.73-.69 2.45a4.709 4.709 0 0 1-4.06 2.3 4.73 4.73 0 0 1-4.06-2.3 4.66 4.66 0 0 1-.69-2.45c0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75z\"></path><path d=\"M18.66 14.73h-3.55\"></path><path d=\"M16.879 13v3.55\"></path><path d=\"M5.33 2h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.42 4.42 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53v.34c0 .61-.4 1.42-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.22 8.47c-.5-.51-.91-1.42-.91-2.02\"></path>","filter-edit":"<path d=\"M5.33 2h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.32\"></path><path d=\"M13.41 20.79L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.4-1.62-.81-2.12L4.22 8.47c-.51-.51-.91-1.41-.91-2.02\"></path><path d=\"M17.08 11.89l-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01z\"></path><path d=\"M16.58 12.39c.3 1.08 1.14 1.92 2.22 2.22\"></path>","filter-remove":"<path d=\"M21.63 14.75c0 .89-.25 1.73-.69 2.45a4.709 4.709 0 0 1-4.06 2.3 4.73 4.73 0 0 1-4.06-2.3 4.66 4.66 0 0 1-.69-2.45c0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75z\"></path><path d=\"M18.149 15.99l-2.51-2.51\"></path><path d=\"M18.13 13.51l-2.51 2.51\"></path><path d=\"M5.33 2h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.42 4.42 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53v.34c0 .61-.4 1.42-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.22 8.47c-.5-.51-.91-1.42-.91-2.02\"></path>","filter-search":"<path d=\"M5.33 2h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.32\"></path><path d=\"M14.32 19.07c0 .61-.4 1.41-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.4-1.62-.81-2.12L4.22 8.47c-.51-.51-.91-1.41-.91-2.02\"></path><path d=\"M16.07 16.52a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z\"></path><path d=\"M19.87 17.12l-1-1\"></path>","filter-square":"<path d=\"M8.16 6.65h7.67c.64 0 1.16.52 1.16 1.16v1.28c0 .47-.29 1.05-.58 1.34l-2.5 2.21c-.35.29-.58.87-.58 1.34v2.5c0 .35-.23.81-.52.99l-.81.51c-.76.47-1.8-.06-1.8-.99v-3.08c0-.41-.23-.93-.47-1.22l-2.21-2.33C7.23 10.08 7 9.55 7 9.2V7.87c0-.7.52-1.22 1.16-1.22z\"></path><path d=\"M2 12.92V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","filter-tick":"<path d=\"M21.63 14.75c0 .89-.24 1.73-.68 2.45a4.735 4.735 0 0 1-4.07 2.3c-.94 0-1.82-.28-2.56-.77-.62-.38-1.13-.91-1.5-1.53-.44-.72-.69-1.56-.69-2.45 0-2.62 2.13-4.75 4.75-4.75.36 0 .71.04 1.04.12a4.74 4.74 0 0 1 3.71 4.63z\"></path><path d=\"M15.03 14.75l1.17 1.17 2.53-2.34\"></path><path d=\"M5.33 2h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.42 4.42 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53v.34c0 .61-.4 1.42-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.22 8.47c-.5-.51-.91-1.42-.91-2.02\"></path>","filter":"<path d=\"M18.6 2.1c1.1 0 2 .9 2 2v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3V19c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-3.8-4c-.5-.5-.9-1.4-.9-2V4.2c0-1.2.9-2.1 2-2.1h9\"></path><path d=\"M10.93 2.1L6 10\"></path>","finger-cricle":"<path d=\"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z\"></path><path d=\"M12 9.12c.91 0 1.65.74 1.65 1.65v2.47c0 .91-.74 1.65-1.65 1.65-.91 0-1.65-.74-1.65-1.65\"></path><path d=\"M16.98 13.47c-.2 2.58-2.36 4.6-4.98 4.6-2.76 0-5-2.24-5-5v-2.14c0-2.76 2.24-5 5-5 2.59 0 4.72 1.97 4.97 4.49\"></path>","finger-scan":"<path d=\"M12 9.12c.91 0 1.65.74 1.65 1.65v2.47c0 .91-.74 1.65-1.65 1.65-.91 0-1.65-.74-1.65-1.65\"></path><path d=\"M16.98 13.47c-.2 2.58-2.36 4.6-4.98 4.6-2.76 0-5-2.24-5-5v-2.14c0-2.76 2.24-5 5-5 2.59 0 4.72 1.97 4.97 4.49\"></path><path d=\"M15 2h2c3 0 5 2 5 5v2\"></path><path d=\"M2 9V7c0-3 2-5 5-5h2\"></path><path d=\"M15 22h2c3 0 5-2 5-5v-2\"></path><path d=\"M2 15v2c0 3 2 5 5 5h2\"></path>","firstline":"<path d=\"M14 4.5h7\"></path><path d=\"M14 9.5h7\"></path><path d=\"M3 14.5h18\"></path><path d=\"M9.5 8.43V5.57C9.5 4.45 9.05 4 7.92 4H5.07C3.95 4 3.5 4.45 3.5 5.57v2.85c0 1.13.45 1.58 1.57 1.58h2.85c1.13 0 1.58-.45 1.58-1.57z\"></path><path d=\"M10.05 19.5H21\"></path><path d=\"M3 19.5h2.98\"></path>","flag-2":"<path d=\"M6.45 2v20\"></path><path d=\"M15.05 7.5c3.3 1.4 3.3 3.8.2 5.4L6.95 17\"></path><path d=\"M6.95 4l4.59 1.98\"></path>","flag":"<path d=\"M5.15 2v20\"></path><path d=\"M16.35 4c2.7 0 3.3 1.5 1.4 3.4l-1.2 1.2c-.8.8-.8 2.1 0 2.8l1.2 1.2c1.9 1.9 1.2 3.4-1.4 3.4H5.15\"></path><path d=\"M5.15 4H12\"></path>","flash-1":"<path d=\"M14.82 7.02v-3.5c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.93 1.05-.54 1.92.87 1.92h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09\"></path>","flash-circle-1":"<path d=\"M8.68 12.72h1.74v4.05c0 .6.74.88 1.14.43l4.26-4.84a.65.65 0 0 0-.49-1.08h-1.74V7.23c0-.6-.74-.88-1.14-.43l-4.26 4.84a.65.65 0 0 0 .49 1.08z\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","flash-circle":"<path d=\"M8.68 11.91l1.65.41-.95 3.84c-.22.9.22 1.2.98.67l5.18-3.59c.63-.44.54-.95-.21-1.14l-1.65-.41.95-3.84c.22-.9-.22-1.2-.98-.67l-5.18 3.59c-.63.44-.54.95.21 1.14z\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","flash-slash":"<path d=\"M9.18 18.04v2.44c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-.93\"></path><path d=\"M9.98 5.96l-4.76 5.41c-.93 1.05-.54 1.92.87 1.92h3.09v1.18\"></path><path d=\"M14.82 8.84V3.52c0-1.68-.91-2.02-2.02-.76\"></path><path d=\"M22 2L2 22\"></path>","flash":"<path d=\"M22 12.63c.66-.75.13-1.92-.87-1.92h-3.09v-7.2c0-1.06-1.32-1.56-2.02-.76l-7.57 8.6c-.66.75-.13 1.92.87 1.92h3.09v7.2c0 1.06 1.32 1.56 2.02.76l4.63-5.26\"></path><path d=\"M8.5 4h-7\"></path><path d=\"M7.5 20h-6\"></path><path d=\"M4.5 12h-3\"></path>","folder-2":"<path d=\"M8 2h9c2 0 3 1 3 3v1.38\"></path><path d=\"M2 13.02V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5\"></path><path d=\"M22 14.99V17c0 4-1 5-5 5H7c-4 0-5-1-5-5\"></path>","folder-add":"<path d=\"M12.06 16.5v-5\"></path><path d=\"M14.5 14h-5\"></path><path d=\"M2 13.02V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5\"></path><path d=\"M22 14.99V17c0 4-1 5-5 5H7c-4 0-5-1-5-5\"></path>","folder-cloud":"<path d=\"M2 7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5v2\"></path><path d=\"M9 22H7c-4 0-5-1-5-5v-4.97\"></path><path d=\"M13.76 18.32c-2.35.17-2.35 3.57 0 3.74h5.56c.67 0 1.33-.25 1.82-.7 1.65-1.44.77-4.32-1.4-4.59-.78-4.69-7.56-2.91-5.96 1.56\"></path>","folder-connection":"<path d=\"M12 16v3\"></path><path d=\"M10 21c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2\"></path><path d=\"M18 21h-4\"></path><path d=\"M10 21H6\"></path><path d=\"M5 5.5C5 2.7 5.7 2 8.5 2h1.05c1.05 0 1.28.31 1.68.84l1.05 1.4c.27.35.42.56 1.12.56h2.1c2.8 0 3.5.7 3.5 3.5v4.2c0 2.8-.7 3.5-3.5 3.5h-7C5.7 16 5 15.3 5 12.5V9.34\"></path>","folder-cross":"<path d=\"M13.81 15.73l-3.54-3.54\"></path><path d=\"M13.77 12.23l-3.54 3.54\"></path><path d=\"M2 13.02V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5\"></path><path d=\"M22 14.99V17c0 4-1 5-5 5H7c-4 0-5-1-5-5\"></path>","folder-favorite":"<path d=\"M9.2 14.78l2.58 2.26c.12.11.31.11.43 0l2.58-2.26c.67-.59.76-1.59.2-2.29s-1.58-.83-2.29-.29l-.7.54-.71-.53c-.72-.54-1.73-.41-2.29.29-.56.69-.47 1.7.2 2.28z\"></path><path d=\"M2 13.02V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5\"></path><path d=\"M22 14.99V17c0 4-1 5-5 5H7c-4 0-5-1-5-5\"></path>","folder-minus":"<path d=\"M14.43 14.55h-5\"></path><path d=\"M2 13.02V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5\"></path><path d=\"M22 14.99V17c0 4-1 5-5 5H7c-4 0-5-1-5-5\"></path>","folder-open":"<path d=\"M21.37 18.02l-.1 1.28c-.15 1.53-.27 2.7-2.98 2.7H5.71C3 22 2.88 20.83 2.73 19.3l-.4-5c-.08-.83.18-1.6.65-2.19l.02-.02C3.55 11.42 4.38 11 5.31 11h13.38c.93 0 1.75.42 2.29 1.07.01.01.02.02.02.03.49.59.76 1.36.67 2.2\"></path><path d=\"M3.5 11.43V6.28c0-3.4.85-4.25 4.25-4.25h1.27c1.27 0 1.56.38 2.04 1.02l1.27 1.7c.32.42.51.68 1.36.68h2.55c3.4 0 4.25.85 4.25 4.25v1.79\"></path><path d=\"M9.43 17h5.14\"></path>","folder":"<path d=\"M2 13.02V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5\"></path><path d=\"M22 14.99V17c0 4-1 5-5 5H7c-4 0-5-1-5-5\"></path>","forbidden-2":"<path d=\"M2 13.02v1.88c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12l-4.1-4.1C16.54 2.4 15.58 2 14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1\"></path><path d=\"M8.5 15.5l7-7\"></path><path d=\"M15.5 15.5l-7-7\"></path>","forbidden":"<path d=\"M4.94 19.08L19.08 4.94\"></path><path d=\"M2 13.02v1.88c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12l-4.1-4.1C16.54 2.4 15.58 2 14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1\"></path>","format-circle":"<path d=\"M21.5 5.35c0 .91-.43 1.72-1.09 2.24-.48.38-1.09.61-1.76.61-1.58 0-2.85-1.27-2.85-2.85 0-.67.23-1.27.61-1.76h.01c.51-.66 1.32-1.09 2.23-1.09\"></path><path d=\"M8.2 5.35c0 1.58-1.27 2.85-2.85 2.85A2.85 2.85 0 1 1 8.2 5.35z\"></path><path d=\"M21.5 18.65c0 1.58-1.27 2.85-2.85 2.85-.91 0-1.72-.43-2.23-1.09h-.01c-.38-.48-.61-1.09-.61-1.76 0-1.58 1.27-2.85 2.85-2.85.67 0 1.27.23 1.76.61v.01c.66.51 1.09 1.32 1.09 2.23z\"></path><path d=\"M8.2 18.65c0 .67-.23 1.27-.61 1.76a2.82 2.82 0 0 1-2.24 1.09c-1.58 0-2.85-1.27-2.85-2.85 0-.91.43-1.72 1.09-2.23v-.01c.48-.38 1.09-.61 1.76-.61 1.58 0 2.85 1.27 2.85 2.85z\"></path><path d=\"M21.5 12c0 1.6-.39 3.09-1.09 4.41-.48-.38-1.09-.61-1.76-.61-1.58 0-2.85 1.27-2.85 2.85 0 .67.23 1.27.61 1.76A9.35 9.35 0 0 1 12 21.5c-1.59 0-3.09-.39-4.41-1.09.38-.48.61-1.09.61-1.76 0-1.58-1.27-2.85-2.85-2.85-.67 0-1.27.23-1.76.61A9.35 9.35 0 0 1 2.5 12c0-1.59.39-3.09 1.09-4.41.49.38 1.09.61 1.76.61 1.58 0 2.85-1.27 2.85-2.85 0-.67-.23-1.27-.61-1.76C8.91 2.89 10.41 2.5 12 2.5c1.6 0 3.09.39 4.41 1.09-.38.48-.61 1.09-.61 1.76 0 1.58 1.27 2.85 2.85 2.85.67 0 1.27-.23 1.76-.61.7 1.32 1.09 2.82 1.09 4.41z\"></path>","format-square":"<path d=\"M20 6.95v10.1A2.5 2.5 0 0 0 17.05 20H6.95A2.5 2.5 0 0 0 4 17.05V6.95A2.5 2.5 0 0 0 6.95 4h10.1A2.5 2.5 0 0 0 20 6.95z\"></path><path d=\"M7 4.5a2.5 2.5 0 0 1-5 0A2.5 2.5 0 0 1 6.95 4c.03.16.05.33.05.5z\"></path><path d=\"M22 4.5A2.5 2.5 0 1 1 19.5 2\"></path><path d=\"M7 19.5a2.5 2.5 0 1 1 0 0z\"></path><path d=\"M22 19.5a2.5 2.5 0 0 1-4.95.5 2.5 2.5 0 1 1 4.95-.5z\"></path>","forward-10-seconds":"<path d=\"M13.98 4.47L12 2\"></path><path d=\"M20.01 16.96a8.89 8.89 0 0 1-16.9-3.85A8.89 8.89 0 0 1 12 4.22c.68 0 1.34.09 1.98.24\"></path><path d=\"M19.09 7.8c1.11 1.48 1.8 3.31 1.8 5.31\"></path><path d=\"M9.54 15.92v-5.34l-1.5 1.67\"></path><path d=\"M14 10.58c1.1 0 2 .9 2 2v1.35c0 1.1-.9 2-2 2s-2-.9-2-2v-1.35a2 2 0 0 1 2-2z\"></path>","forward-15-seconds":"<path d=\"M13.98 4.47L12 2\"></path><path d=\"M20.01 16.96a8.89 8.89 0 0 1-16.9-3.85A8.89 8.89 0 0 1 12 4.22c.68 0 1.34.09 1.98.24\"></path><path d=\"M19.09 7.8c1.11 1.48 1.8 3.31 1.8 5.31\"></path><path d=\"M15.959 10.83h-3.06l-.76 2.29h2.29a1.53 1.53 0 1 1 0 3.06h-2.29\"></path><path d=\"M9.54 16.17v-5.34l-1.5 1.67\"></path>","forward-5-seconds":"<path d=\"M13.98 4.47L12 2\"></path><path d=\"M20.01 16.96a8.89 8.89 0 0 1-16.9-3.85A8.89 8.89 0 0 1 12 4.22c.68 0 1.34.09 1.98.24\"></path><path d=\"M19.09 7.8c1.11 1.48 1.8 3.31 1.8 5.31\"></path><path d=\"M13.91 10.83h-3.06l-.76 2.29h2.29a1.53 1.53 0 1 1 0 3.06h-2.29\"></path>","forward-item":"<path d=\"M6.73 14.97c-.08-.4-.12-.85-.12-1.36v-3.23c0-2.69 1.08-3.77 3.77-3.77h3.23c2.69 0 3.77 1.08 3.77 3.77v3.23c0 2.69-1.08 3.77-3.77 3.77h-3.23\"></path><path d=\"M22 5.77V9c0 2.69-1.08 3.77-3.77 3.77h-.85v-2.38c0-2.69-1.08-3.77-3.77-3.77h-2.38v-.85C11.23 3.08 12.31 2 15 2h3.23C20.92 2 22 3.08 22 5.77z\"></path><path d=\"M12.77 17.38v.85C12.77 20.92 11.69 22 9 22H5.77C3.08 22 2 20.92 2 18.23V15c0-2.69 1.08-3.77 3.77-3.77h.85\"></path>","forward-square":"<path d=\"M15 15.38h-4.92C8.38 15.38 7 14 7 12.3c0-1.7 1.38-3.08 3.08-3.08h6.77\"></path><path d=\"M15.43 10.77L17 9.19l-1.57-1.57\"></path><path d=\"M2 14v1c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","forward":"<path d=\"M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c.2-.12.36-.25.49-.41v-2.56c-.13-.16-.29-.29-.49-.41L8.1 8.49 4.93 6.67C3.63 5.9 2 6.84 2 8.34z\"></path><path d=\"M14.68 6.65c-1.3-.75-2.93.19-2.93 1.69v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c1.3-.75 1.3-2.62 0-3.38l-2.18-1.26\"></path>","frame-1":"<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10\"></path><path d=\"M18.44 5.56L13.8 10.2\"></path><path d=\"M22 2l-1 1\"></path><path d=\"M13 6.17V11h4.83\"></path>","frame-2":"<path d=\"M15.68 3.96c.48.71.76 1.56.76 2.48-.01 2.4-1.9 4.35-4.28 4.43-.1-.01-.22-.01-.33 0-2.21-.07-4-1.76-4.24-3.92C7.3 4.38 9.41 2 11.99 2\"></path><path d=\"M6.99 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.73-1.83-7.24-1.83-10.01 0z\"></path>","frame-3":"<path d=\"M8.27 22c1.59 0 2.23-.6 2.23-2.1V4.1c0-1.5-.64-2.1-2.23-2.1H4.23C2.64 2 2 2.6 2 4.1v15.8c0 1.5.64 2.1 2.23 2.1\"></path><path d=\"M15.73 2c-1.59 0-2.23.6-2.23 2.1v8.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1V4.1c0-1.5-.64-2.1-2.23-2.1\"></path>","frame-4":"<path d=\"M8.27 22c1.59 0 2.23-.6 2.23-2.1V4.1c0-1.5-.64-2.1-2.23-2.1H4.23C2.64 2 2 2.6 2 4.1v15.8c0 1.5.64 2.1 2.23 2.1\"></path><path d=\"M15.73 2c-1.59 0-2.23.57-2.23 1.98v4.53c0 1.42.64 1.98 2.23 1.98h4.04c1.59 0 2.23-.57 2.23-1.98V3.98C22 2.57 21.36 2 19.77 2\"></path><path d=\"M22 19.77v-4.04c0-1.59-.64-2.23-2.23-2.23h-4.04c-1.59 0-2.23.64-2.23 2.23v4.04c0 1.59.64 2.23 2.23 2.23h4.04c1.59 0 2.23-.64 2.23-2.23z\"></path>","frame-5":"<path d=\"M19.26 18.9V7.1c0-1.5-.64-2.1-2.23-2.1h-1.04c-1.59 0-2.23.6-2.23 2.1v11.8\"></path><path d=\"M10.76 12.1v6.8\"></path><path d=\"M5.26 18.9v-6.8c0-1.5.64-2.1 2.23-2.1\"></path><path d=\"M2 19h20\"></path>","frame-6":"<path d=\"M12 8.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2\"></path><path d=\"M12 12.5v3\"></path><path d=\"M20.59 7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.83-.31-2.19-.31-3.02 0L5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44v-3.52\"></path>","frame-7":"<path d=\"M20.59 7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.83-.31-2.19-.31-3.02 0L5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44v-3.52\"></path>","frame":"<path d=\"M8.67 14.33c0 1.29.99 2.33 2.22 2.33h2.51c1.07 0 1.94-.91 1.94-2.03 0-1.22-.53-1.65-1.32-1.93l-4.03-1.4c-.79-.28-1.32-.71-1.32-1.93 0-1.12.87-2.03 1.94-2.03h2.51c1.23 0 2.22 1.04 2.22 2.33\"></path><path d=\"M12 6v12\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","gallery-add":"<path d=\"M9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2\"></path><path d=\"M2 12.99V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-5\"></path><path d=\"M13 2H9C4 2 2 4 2 9\"></path><path d=\"M15.75 5h5.5\"></path><path d=\"M18.5 7.75v-5.5\"></path><path d=\"M2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9\"></path>","gallery-edit":"<path d=\"M9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2\"></path><path d=\"M2 12.89V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-5\"></path><path d=\"M13 2H9C4 2 2 4 2 9\"></path><path d=\"M19.14 2.59l-3.63 3.63c-.14.14-.28.41-.3.61l-.2 1.39c-.07.5.28.85.78.78l1.39-.2c.19-.03.47-.16.61-.3l3.63-3.63c.63-.63.92-1.35 0-2.27-.93-.94-1.65-.64-2.28-.01z\"></path><path d=\"M18.62 3.11c.31 1.1 1.17 1.96 2.27 2.27\"></path><path d=\"M2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9\"></path>","gallery-export":"<path d=\"M9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2\"></path><path d=\"M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-5\"></path><path d=\"M13 2H9C4 2 2 4 2 9\"></path><path d=\"M18 8V2l2 2\"></path><path d=\"M18 2l-2 2\"></path><path d=\"M2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9\"></path>","gallery-favorite":"<path d=\"M9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2\"></path><path d=\"M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-4\"></path><path d=\"M12 2H9C4 2 2 4 2 9\"></path><path d=\"M16.12 5.11c-.33-1.04.06-2.33 1.14-2.68.57-.18 1.28-.03 1.68.52.38-.57 1.11-.71 1.68-.52 1.09.35 1.48 1.64 1.15 2.68-.52 1.64-2.32 2.5-2.82 2.5-.51 0-2.3-.84-2.83-2.5z\"></path><path d=\"M2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9\"></path>","gallery-import":"<path d=\"M9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2\"></path><path d=\"M2 13.04V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-5\"></path><path d=\"M13 2H9C4 2 2 4 2 9\"></path><path d=\"M18 2v6l2-2\"></path><path d=\"M18 8l-2-2\"></path><path d=\"M2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9\"></path>","gallery-remove":"<path d=\"M9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2\"></path><path d=\"M2 12.89V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-5\"></path><path d=\"M13 2H9C4 2 2 4 2 9\"></path><path d=\"M2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9\"></path><path d=\"M16.56 5.94l3.88-3.88\"></path><path d=\"M20.44 5.94l-3.88-3.88\"></path>","gallery-slash":"<path d=\"M2 9c0-5 2-7 7-7h6c2.19 0 3.8.38 4.92 1.23\"></path><path d=\"M3.37 20.1C2.43 18.97 2 17.31 2 15v-2.03\"></path><path d=\"M21.97 7.99c.02.32.03.66.03 1.01v6c0 5-2 7-7 7H9c-.74 0-1.42-.04-2.04-.14\"></path><path d=\"M8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2\"></path><path d=\"M22 2L2 22\"></path><path d=\"M11.43 16.45c.3.3.79.3 1.09 0l5.03-5.04c.78-.78 2.04-.78 2.82 0L22 13.05\"></path>","gallery-tick":"<path d=\"M9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2\"></path><path d=\"M2 12.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-5\"></path><path d=\"M13 2H9C4 2 2 4 2 9\"></path><path d=\"M16 4.99l1.46 1.46 3.9-3.9\"></path><path d=\"M2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9\"></path>","gallery":"<path d=\"M2 12.99V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M11 8c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2\"></path><path d=\"M2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9\"></path>","game":"<path d=\"M9.57 12.46l-3.05 3.05\"></path><path d=\"M6.55 12.49l3.05 3.05\"></path><path d=\"M13.53 14h.01\"></path><path d=\"M17.47 14h.01\"></path><path d=\"M15.5 15.98v-.02\"></path><path d=\"M15.5 12.04v-.02\"></path><path d=\"M2 15c0 5 2 7 7 7h6c5 0 7-2 7-7v-2c0-5-2-7-7-7H9C5.25 6 3.19 7.12 2.39 9.8\"></path><path d=\"M13.01 2L13 3.01A1 1 0 0 1 12 4h-.03c-.55 0-.99.45-.99 1s.45 1 1 1h1\"></path>","gameboy":"<path d=\"M3 7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5v-6\"></path><path d=\"M16.25 11h-8.5C6.79 11 6 10.21 6 9.25v-2.5C6 5.79 6.79 5 7.75 5h8.5c.96 0 1.75.79 1.75 1.75v2.5c0 .96-.79 1.75-1.75 1.75z\"></path><path d=\"M10.3 15.28L8 17.58\"></path><path d=\"M8.03 15.31l2.3 2.3\"></path><path d=\"M16.49 15.33h.02\"></path><path d=\"M14.49 17.5v-.02\"></path>","gas-station":"<path d=\"M3.5 5c0-2 1.34-3 3-3h8c1.66 0 3 1 3 3v17h-14V9\"></path><path d=\"M2 22h17\"></path><path d=\"M8.39 10h4.23c1.04 0 1.89-.5 1.89-1.89V6.88c0-1.39-.85-1.89-1.89-1.89H8.39c-1.04 0-1.89.5-1.89 1.89v1.23C6.5 9.5 7.35 10 8.39 10z\"></path><path d=\"M6.5 13h3\"></path><path d=\"M17.5 16.01L22 16v-6l-2-1\"></path>","gemini-2":"<path d=\"M12 22V9\"></path><path d=\"M12 6V3\"></path><path d=\"M15.3 5.3L12 2 8.7 5.3\"></path><path d=\"M5 7L3 5 1 7\"></path><path d=\"M23 7l-2-2-2 2\"></path><path d=\"M3 6.04V11c0 4 2 6 6 6h6c4 0 6-2 6-6V6.04\"></path><path d=\"M9 20h6\"></path>","gemini":"<path d=\"M2 2a19.45 19.45 0 0 0 20 0\"></path><path d=\"M2 22a19.45 19.45 0 0 1 20 0\"></path><path d=\"M6.87 7.51c1.13 4.3.62 8.91-1.53 12.89\"></path><path d=\"M18.67 20.41a17.683 17.683 0 0 1-.1-16.59l.13-.24\"></path>","ghost":"<path d=\"M2 16.07v4.01c0 1.26.75 1.6 1.67.76l1-.91c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l1 .91c.92.84 1.67.5 1.67-.76v-7.89c0-5.6-4.5-10.18-10-10.18s-10 4.58-10 10.18\"></path><path d=\"M8 14a6.66 6.66 0 0 0 8 0\"></path><path d=\"M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path>","gift":"<path d=\"M3.97 18c0 3 1 4 4 4h8c3 0 4-1 4-4v-8h-16v3.84\"></path><path d=\"M21.5 7v1c0 1.1-.53 2-2 2h-15c-1.53 0-2-.9-2-2V7c0-1.1.47-2 2-2h15c1.47 0 2 .9 2 2z\"></path><path d=\"M11.64 5H6.12a.936.936 0 0 1 .03-1.3l1.42-1.42a.96.96 0 0 1 1.35 0L11.64 5z\"></path><path d=\"M17.87 5h-5.52l2.72-2.72a.96.96 0 0 1 1.35 0l1.42 1.42c.36.36.37.93.03 1.3z\"></path><path d=\"M8.94 10v5.14c0 .8.88 1.27 1.55.84l.94-.62a1 1 0 0 1 1.1 0l.89.6a.997.997 0 0 0 1.55-.83V10H8.94z\"></path>","glass-1":"<path d=\"M10 17.5h4\"></path><path d=\"M2 17.5v-10c0-4 1-5 5-5\"></path><path d=\"M22 17.5v-10c0-4-1-5-5-5\"></path><path d=\"M10 15.91v3.29c0 2-.8 2.8-2.8 2.8H4.8c-2 0-2.8-.8-2.8-2.8v-3.29c0-2 .8-2.8 2.8-2.8h2.4\"></path><path d=\"M22 15.91v3.29c0 2-.8 2.8-2.8 2.8h-2.4c-2 0-2.8-.8-2.8-2.8v-3.29c0-2 .8-2.8 2.8-2.8h2.4c2 0 2.8.8 2.8 2.8z\"></path>","glass":"<path d=\"M8.36 7.62l.39-.88h-.3a2.374 2.374 0 0 1-2.38-2.37C6.07 3.07 7.13 2 8.44 2h7.11c.66 0 1.25.27 1.68.7.56.56.84 1.38.63 2.25-.27 1.08-1.31 1.79-2.42 1.79h-.16l4.22 9.66c1.35 3.08.47 5.6-3.67 5.6H8.16c-4.18 0-5.02-2.53-3.66-5.61l2.07-4.7\"></path><path d=\"M5.94 13.12S9 13 12 14c3 1 5.83-.89 5.83-.89\"></path>","global-edit":"<path d=\"M21 9c-2.92-.97-5.96-1.46-9-1.46\"></path><path d=\"M3 9c1.59-.53 3.21-.91 4.85-1.16\"></path><path d=\"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10\"></path><path d=\"M8 3h1a28.424 28.424 0 0 0 0 18H8\"></path><path d=\"M15 3c.97 2.92 1.46 5.96 1.46 9\"></path><path d=\"M3 16v-1c2.92.97 5.96 1.46 9 1.46\"></path><path d=\"M19.21 15.74l-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01z\"></path><path d=\"M18.7 16.25c.3 1.08 1.14 1.92 2.22 2.22\"></path>","global-refresh":"<path d=\"M21 9c-2.92-.97-5.96-1.46-9-1.46\"></path><path d=\"M3 9c1.59-.53 3.21-.91 4.85-1.16\"></path><path d=\"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10\"></path><path d=\"M8 3h1a28.424 28.424 0 0 0 0 18H8\"></path><path d=\"M15 3c.97 2.92 1.46 5.96 1.46 9\"></path><path d=\"M3 16v-1c2.92.97 5.96 1.46 9 1.46\"></path><path d=\"M19.5 14.7c-.37-.11-.79-.18-1.25-.18a3.74 3.74 0 0 0 0 7.48c2.06 0 3.74-1.68 3.74-3.74a3.7 3.7 0 0 0-.63-2.08\"></path><path d=\"M20.041 14.8l-1.25-1.43\"></path><path d=\"M20.04 14.8l-1.46 1.06\"></path>","global-search":"<path d=\"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10\"></path><path d=\"M8 3h1a28.424 28.424 0 0 0 0 18H8\"></path><path d=\"M15 3c.97 2.92 1.46 5.96 1.46 9\"></path><path d=\"M3 16v-1c2.92.97 5.96 1.46 9 1.46\"></path><path d=\"M21 9c-2.92-.97-5.96-1.46-9-1.46\"></path><path d=\"M3 9c1.59-.53 3.21-.91 4.85-1.16\"></path><path d=\"M18.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z\"></path><path d=\"M22 22l-1-1\"></path>","global":"<path d=\"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z\"></path><path d=\"M7.54 12c0 3.04.49 6.08 1.46 9H8\"></path><path d=\"M8 3h1c-.49 1.46-.85 2.95-1.1 4.46\"></path><path d=\"M16.13 16.36c-.25 1.56-.62 3.12-1.13 4.64\"></path><path d=\"M15 3c.97 2.92 1.46 5.96 1.46 9\"></path><path d=\"M3 16v-1a28.424 28.424 0 0 0 18 0v1\"></path><path d=\"M3 9a28.424 28.424 0 0 1 18 0\"></path>","gps-slash":"<path d=\"M9 18.88c.92.4 1.93.62 3 .62 4.14 0 7.5-3.36 7.5-7.5 0-1.07-.22-2.08-.62-3\"></path><path d=\"M4.77 10.01c-.18.63-.27 1.3-.27 1.99 0 2.01.79 3.84 2.08 5.19\"></path><path d=\"M17.21 6.6A7.494 7.494 0 0 0 12 4.5c-1.92 0-3.67.72-5 1.91\"></path><path d=\"M12 4V2\"></path><path d=\"M4 12H2\"></path><path d=\"M12 20v2\"></path><path d=\"M20 12h2\"></path><path d=\"M14.12 9.88l-4.24 4.24a2.996 2.996 0 1 1 4.24-4.24z\"></path><path d=\"M22 2L2 22\"></path>","gps":"<path d=\"M8.5 5.365A7.5 7.5 0 1 1 5.365 8.5\"></path><path d=\"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"></path><path d=\"M12 4V2\"></path><path d=\"M4 12H2\"></path><path d=\"M12 20v2\"></path><path d=\"M20 12h2\"></path>","grammerly":"<path d=\"M15.84 16.07c-2.12 2-5.56 2-7.67 0\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","graph":"<path d=\"M16.28 2.96C13 2 12 3.08 12 5.68v2.88C12 11 13 12 15 12h3.32c2.6 0 3.68-1 2.72-4.28A7.05 7.05 0 0 0 20 5.63\"></path><path d=\"M2.12 14.43A9.105 9.105 0 0 1 9.26 4.01\"></path><path d=\"M20 14.7a9.091 9.091 0 0 1-10.42 7.17c-2.23-.35-4.21-1.56-5.58-3.26\"></path>","grid-1":"<path d=\"M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M2.03 8.5H22\"></path><path d=\"M2.03 15.5H22\"></path><path d=\"M8.51 21.99V2.01\"></path><path d=\"M15.51 21.99V6\"></path>","grid-2":"<path d=\"M3.96 3.32C2.6 4.43 2 6.27 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9\"></path><path d=\"M12 2v20\"></path><path d=\"M2 12h20\"></path>","grid-3":"<path d=\"M12 2v20\"></path><path d=\"M2 9.5h10\"></path><path d=\"M12 14.5h10\"></path><path d=\"M3.96 3.32C2.6 4.43 2 6.27 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9\"></path>","grid-4":"<path d=\"M9 2v20\"></path><path d=\"M3.96 3.32C2.6 4.43 2 6.27 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9\"></path>","grid-5":"<path d=\"M9 2v20\"></path><path d=\"M9 12h13\"></path><path d=\"M3.96 3.32C2.6 4.43 2 6.27 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9\"></path>","grid-6":"<path d=\"M9 2v20\"></path><path d=\"M9 8.5h13\"></path><path d=\"M9 15.5h13\"></path><path d=\"M3.96 3.32C2.6 4.43 2 6.27 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9\"></path>","grid-7":"<path d=\"M22 10H2\"></path><path d=\"M12 10v12\"></path><path d=\"M3.96 3.32C2.6 4.43 2 6.27 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9\"></path>","grid-8":"<path d=\"M2.52 5.41C2.16 6.38 2 7.57 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9c-1.18 0-2.18.11-3.04.34\"></path><path d=\"M2 12h20\"></path><path d=\"M8.25 12v6\"></path><path d=\"M15.75 22V12\"></path><path d=\"M8.25 12V2\"></path><path d=\"M15.75 12V2.54\"></path>","grid-9":"<path d=\"M12 2v20\"></path><path d=\"M2.52 5.41C2.16 6.38 2 7.57 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9c-1.18 0-2.18.11-3.04.34\"></path>","grid-edit":"<path d=\"M22 11V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h1\"></path><path d=\"M5.03 8.5H22\"></path><path d=\"M2.03 15.5H12\"></path><path d=\"M8.51 21.99V2.01\"></path><path d=\"M15.51 11.99V2.01\"></path><path d=\"M18.73 14.67l-4.15 4.15c-.16.16-.31.47-.35.69L14 21.1c-.08.57.32.98.89.89l1.59-.23c.22-.03.53-.19.69-.35l4.15-4.15c.71-.71 1.05-1.55 0-2.6-1.04-1.04-1.87-.71-2.59.01z\"></path><path d=\"M18.14 15.26a3.761 3.761 0 0 0 2.6 2.6\"></path>","grid-eraser":"<path d=\"M22 11V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h1\"></path><path d=\"M5.03 8.5H22\"></path><path d=\"M2.03 15.5H12\"></path><path d=\"M8.51 21.99V2.01\"></path><path d=\"M15.51 11.99V2.01\"></path><path d=\"M18.8 19.7l-1.9 1.9c-.52.52-1.38.52-1.91 0l-1.58-1.59c-.52-.52-.52-1.38 0-1.91l1.9-1.89 3.49 3.49z\"></path><path d=\"M21.61 16.9l-2.81 2.81-3.5-3.5 2.81-2.82c.52-.52 1.39-.52 1.91 0l1.58 1.59c.53.53.53 1.4.01 1.92z\"></path>","grid-lock":"<path d=\"M22 11V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h1\"></path><path d=\"M5.03 8.5H22\"></path><path d=\"M2.03 15.5H12\"></path><path d=\"M8.51 21.99V2.01\"></path><path d=\"M15.51 11.99V2.01\"></path><path d=\"M15.6 17.2v-.8c0-1.33.4-2.4 2.4-2.4s2.4 1.07 2.4 2.4v.8\"></path><path d=\"M20 22h-4c-1.6 0-2-.4-2-2v-.8c0-1.6.4-2 2-2h4c1.6 0 2 .4 2 2v.8c0 1.6-.4 2-2 2z\"></path>","happyemoji":"<path d=\"M7.21 16A5.831 5.831 0 0 0 12 18.5c1.98 0 3.73-.99 4.79-2.5\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","hashtag-1":"<path d=\"M14 7h-4c-1.65 0-3 1.35-3 3v4c0 1.65 1.35 3 3 3h4c1.65 0 3-1.35 3-3v-4\"></path><path d=\"M12 7v10\"></path><path d=\"M7 12h10\"></path><path d=\"M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","hashtag-down":"<path d=\"M2 12.95V15c0 5 2 7 7 7h5\"></path><path d=\"M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M19 16v6l2-2\"></path><path d=\"M19 22l-2-2\"></path><path d=\"M9.95 6.26L8.9 15.73\"></path><path d=\"M13.11 6.26l-1.05 9.47\"></path><path d=\"M6.53 9.42H16\"></path><path d=\"M6 12.58h9.47\"></path>","hashtag-up":"<path d=\"M2 13.04V15c0 5 2 7 7 7h6\"></path><path d=\"M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M19 22v-6l-2 2\"></path><path d=\"M19 16l2 2\"></path><path d=\"M9.95 6.26L8.9 15.73\"></path><path d=\"M13.11 6.26l-1.05 9.47\"></path><path d=\"M6.53 9.42H16\"></path><path d=\"M6 12.58h9.47\"></path>","hashtag":"<path d=\"M10 3L8 21\"></path><path d=\"M16 3l-2 18\"></path><path d=\"M20.05 9h1.45\"></path><path d=\"M3.5 9h13.49\"></path><path d=\"M3.95 15H2.5\"></path><path d=\"M20.5 15H7.01\"></path>","headphone":"<path d=\"M2 12.22C1.89 6.6 6.33 2.05 11.95 2.05 17.57 2.05 22 6.6 22 12.11v6.16c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.62-3.57-3.57v-2.81c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v3.03\"></path><path d=\"M5.46 18.49v-2.92c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v2.81c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.63-3.57-3.57V16\"></path>","headphones":"<path d=\"M8.5 12V7.22\"></path><path d=\"M8.5 22v-3\"></path><path d=\"M15.5 10V7.22\"></path><path d=\"M15.5 22v-9\"></path><path d=\"M10.1 5.3c0 .49-.2.95-.53 1.27-.32.33-.77.53-1.27.53H6.05c.28-.37.45-.85.45-1.35v-.9c0-.5-.17-.98-.45-1.35H8.3c.99 0 1.8.81 1.8 1.8z\"></path><path d=\"M6.5 4.85v.9c0 .5-.17.98-.45 1.35-.76 1.01-2.32 1.35-3.77.06C2.12 7.02 2 6.72 2 6.5V4.16c0-.19.1-.47.23-.61 1.26-1.32 2.78-1.13 3.61-.3.07.07.14.15.21.24.28.38.45.86.45 1.36z\"></path><path d=\"M13.9 5.3c0 .49.2.95.53 1.27.32.33.77.53 1.27.53h2.25c-.28-.37-.45-.85-.45-1.35v-.9c0-.5.17-.98.45-1.35H15.7c-.99 0-1.8.81-1.8 1.8z\"></path><path d=\"M17.5 4.85v.9c0 .5.17.98.45 1.35.76 1.01 2.32 1.35 3.77.06.16-.14.28-.44.28-.66V4.16c0-.19-.1-.47-.23-.61-1.26-1.32-2.78-1.13-3.61-.3-.07.07-.14.15-.21.24-.28.38-.45.86-.45 1.36z\"></path><path d=\"M10 13.5v4c0 .83-.67 1.5-1.5 1.5S7 18.33 7 17.5v-4c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z\"></path>","health":"<path d=\"M8.97 2c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-2\"></path><path d=\"M1.97 12.7l6-.02c.75 0 1.59.57 1.87 1.27l1.14 2.88c.26.65.67.65.93 0l2.29-5.81c.22-.56.63-.58.91-.05l1.04 1.97c.31.59 1.11 1.07 1.77 1.07h4.06\"></path>","heart-add":"<path d=\"M7.56 3.1c1.81 0 3.43.88 4.44 2.23a5.549 5.549 0 0 1 4.44-2.23C19.51 3.1 22 5.6 22 8.69c0 1.97-.51 3.71-1.31 5.22a4.794 4.794 0 0 0-3.49-1.51c-2.65 0-4.8 2.15-4.8 4.8 0 1.23.47 2.35 1.23 3.2-.37.17-.71.31-1.01.41-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69c0-1.55.62-2.95 1.63-3.96\"></path><path d=\"M17.2 22a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6z\"></path><path d=\"M18.99 17.26h-3.58\"></path><path d=\"M17.2 15.51v3.59\"></path>","heart-circle":"<path d=\"M12.33 17.45c-.18.06-.49.06-.67 0-1.56-.53-5.06-2.76-5.06-6.54 0-1.67 1.34-3.02 3-3.02.98 0 1.85.47 2.4 1.21.54-.73 1.42-1.21 2.4-1.21 1.66 0 3 1.35 3 3.02 0 3.78-3.5 6.01-5.07 6.54z\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","heart-edit":"<path d=\"M12 20.9c-.22 0-.45-.03-.62-.09C8.48 19.82 2 15.69 2 8.69c0-1.4.51-2.68 1.36-3.66\"></path><path d=\"M21.49 12c.32-1.02.51-2.12.51-3.31 0-3.09-2.49-5.59-5.56-5.59-1.82 0-3.43.88-4.44 2.24A5.53 5.53 0 0 0 7.56 3.1\"></path><path d=\"M19.21 15.74l-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01z\"></path><path d=\"M18.7 16.25c.3 1.08 1.14 1.92 2.22 2.22\"></path>","heart-remove":"<path d=\"M22 17.2c0 2.65-2.15 4.8-4.8 4.8-1.42 0-2.69-.62-3.57-1.6a4.79 4.79 0 0 1-1.23-3.2c0-2.65 2.15-4.8 4.8-4.8 1.37 0 2.61.58 3.49 1.51-.01 0-.01 0 0 .01.81.86 1.31 2.01 1.31 3.28z\"></path><path d=\"M18.48 18.54L15.95 16\"></path><path d=\"M18.45 16.03l-2.53 2.54\"></path><path d=\"M7.56 3.1c1.81 0 3.43.88 4.44 2.23a5.549 5.549 0 0 1 4.44-2.23C19.51 3.1 22 5.6 22 8.69c0 1.97-.51 3.71-1.31 5.22a4.794 4.794 0 0 0-3.49-1.51c-2.65 0-4.8 2.15-4.8 4.8 0 1.23.47 2.35 1.23 3.2-.37.17-.71.31-1.01.41-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69c0-1.55.62-2.95 1.63-3.96\"></path>","heart-search":"<path d=\"M12 20.9c-.22 0-.45-.03-.62-.09C8.48 19.82 2 15.69 2 8.68c0-1.4.51-2.68 1.36-3.66\"></path><path d=\"M21.49 12c.32-1.02.51-2.12.51-3.31 0-3.09-2.49-5.59-5.56-5.59-1.82 0-3.43.88-4.44 2.24A5.53 5.53 0 0 0 7.56 3.1\"></path><path d=\"M17.74 21a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z\"></path><path d=\"M21.54 21.6l-1-1\"></path>","heart-slash":"<path d=\"M7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24c1.15 0 2.22.35 3.11.96\"></path><path d=\"M6.11 17.5C3.9 15.43 2 12.48 2 8.68c0-1.54.62-2.94 1.63-3.95\"></path><path d=\"M21.74 7c.17.53.26 1.1.26 1.69 0 7-6.48 11.13-9.38 12.13-.34.12-.9.12-1.24 0-.65-.22-1.47-.6-2.36-1.13\"></path><path d=\"M22 2L2 22\"></path>","heart-tick":"<path d=\"M7.56 3.1c1.81 0 3.43.88 4.44 2.23a5.549 5.549 0 0 1 4.44-2.23C19.51 3.1 22 5.6 22 8.69c0 1.97-.51 3.71-1.31 5.22a4.794 4.794 0 0 0-3.49-1.51c-2.65 0-4.8 2.15-4.8 4.8 0 1.23.47 2.35 1.23 3.2-.37.17-.71.31-1.01.41-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69c0-1.55.62-2.95 1.63-3.96\"></path><path d=\"M22 17.2c0 .9-.25 1.75-.7 2.47A4.768 4.768 0 0 1 17.2 22c-1.75 0-3.28-.94-4.1-2.33-.44-.72-.7-1.57-.7-2.47a4.801 4.801 0 0 1 9.6 0z\"></path><path d=\"M15.33 17.2l1.18 1.18 2.56-2.36\"></path>","heart":"<path d=\"M20.59 4.97c.88.99 1.41 2.29 1.41 3.72 0 7-6.48 11.13-9.38 12.13-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24\"></path>","hierarchy-2":"<path d=\"M5 15V8\"></path><path d=\"M5.25 22a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5z\"></path><path d=\"M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"></path><path d=\"M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"></path><path d=\"M5.13 15a4.058 4.058 0 0 1 3.94-3.04l3.43.01c.85 0 1.67-.17 2.4-.49\"></path>","hierarchy-3":"<path d=\"M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"></path><path d=\"M19 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"></path><path d=\"M5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"></path><path d=\"M11.17 12H9c-2.2 0-4-1-4-4v8\"></path>","hierarchy-square-2":"<path d=\"M2 13.02V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M7.8 10.2v4.2\"></path><path d=\"M7.95 9.9a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9z\"></path><path d=\"M7.8 18a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z\"></path><path d=\"M16.2 18a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z\"></path><path d=\"M7.88 10.2a2.425 2.425 0 0 0 2.36 1.82l2.06-.01c1.57-.01 2.91 1 3.4 2.41\"></path>","hierarchy-square-3":"<path d=\"M2 13.02V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M7.8 13.8V9.6\"></path><path d=\"M7.95 18a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9z\"></path><path d=\"M7.8 9.6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z\"></path><path d=\"M16.2 9.6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z\"></path><path d=\"M7.88 13.8a2.425 2.425 0 0 1 2.36-1.82l2.06.01c1.57.01 2.91-1 3.4-2.41\"></path>","hierarchy-square":"<path d=\"M2 13.02V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M16.45 14.4V8.5c0-.55-.45-1-1-1h-2.9\"></path><path d=\"M14.05 6l-1.8 1.5 1.8 1.5\"></path><path d=\"M7.55 10.2v4.2\"></path><path d=\"M7.7 9.9a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9z\"></path><path d=\"M7.55 18a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z\"></path><path d=\"M16.45 18a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z\"></path>","hierarchy":"<path d=\"M5 9v7\"></path><path d=\"M5.25 8.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5z\"></path><path d=\"M5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"></path><path d=\"M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"></path><path d=\"M5.13 9a4.058 4.058 0 0 0 3.94 3.04l3.43-.01c.84 0 1.63.17 2.36.47\"></path>","home-1":"<path d=\"M12 18v-3\"></path><path d=\"M20.64 19.24c-.24 1.41-1.61 2.57-3.04 2.57H6.4c-1.44 0-2.8-1.15-3.04-2.57l-1.33-7.96c-.17-.98.33-2.29 1.11-2.91l6.93-5.55c1.06-.85 2.79-.85 3.86.01l6.93 5.54c.77.62 1.27 1.93 1.11 2.91L21.35 15\"></path>","home-2":"<path d=\"M22 10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12l-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21v-3.1\"></path><path d=\"M12 17.99v-3\"></path>","home-hashtag":"<path d=\"M13.5 9h-3c-1.65 0-3 1.35-3 3v3c0 1.65 1.35 3 3 3h3c1.65 0 3-1.35 3-3v-3\"></path><path d=\"M12 9v9\"></path><path d=\"M7.5 13.5h9\"></path><path d=\"M22 10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12l-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21v-3.1\"></path>","home-trend-down":"<path d=\"M22 10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12l-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21v-3.1\"></path><path d=\"M11.17 14l-.47.7-3.2-3.2\"></path><path d=\"M16.5 16.5l-1.51-1.51L14 14\"></path><path d=\"M14.5 16.5h2v-2\"></path>","home-trend-up":"<path d=\"M22 10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12l-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21v-3.1\"></path><path d=\"M11.17 14l-.47-.7-3.2 3.2\"></path><path d=\"M16.5 11.5l-1.51 1.51L14 14\"></path><path d=\"M14.5 11.5h2v2\"></path>","home-wifi":"<path d=\"M2.03 11.28c-.17-.98.33-2.29 1.11-2.91l6.93-5.55c1.06-.85 2.79-.85 3.86.01l6.93 5.54c.77.62 1.27 1.93 1.11 2.91l-1.33 7.96c-.24 1.41-1.61 2.57-3.04 2.57H6.4c-1.44 0-2.8-1.15-3.04-2.57l-.64-3.86\"></path><path d=\"M9.88 14.38c1.27-1.21 2.97-1.21 4.24 0\"></path><path d=\"M8.75 11.45c-.35.23-.68.5-1 .81\"></path><path d=\"M16.24 12.26a6.64 6.64 0 0 0-1.76-1.24 5.76 5.76 0 0 0-2.48-.57\"></path><path d=\"M11.995 16.5h.01\"></path>","home":"<path d=\"M3.36 19.24c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01L3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l.68 4.09\"></path><path d=\"M12 10.5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 2.5-2.5\"></path>","hospital":"<path d=\"M21 6c0-2.21-1-4-4-4H7C4 2 3 3.79 3 6v16h18V10.02\"></path><path d=\"M2 22h20\"></path><path d=\"M14.06 15H9.93c-.51 0-.94.42-.94.94V22h6v-6.06a.924.924 0 0 0-.93-.94z\"></path><path d=\"M12 6v5\"></path><path d=\"M9.5 8.5h5\"></path>","house-2":"<path d=\"M2 22h20\"></path><path d=\"M3 9.97c0-.61.29-1.19.77-1.57l7-5.45c.72-.56 1.73-.56 2.46 0l7 5.44c.49.38.77.96.77 1.58V22\"></path><path d=\"M2.95 22l.03-7.97\"></path><path d=\"M15.5 11h-7c-.83 0-1.5.67-1.5 1.5V22h10v-9.5c0-.83-.67-1.5-1.5-1.5z\"></path><path d=\"M10 16.25v1.5\"></path><path d=\"M10.5 7.5h3\"></path>","house":"<path d=\"M2 22h20\"></path><path d=\"M3 9.97c0-.61.29-1.19.77-1.57l7-5.45c.72-.56 1.73-.56 2.46 0l7 5.44c.49.38.77.96.77 1.58V22\"></path><path d=\"M2.95 22l.03-7.97\"></path><path d=\"M13 17h-2c-.83 0-1.5.67-1.5 1.5V22h5v-3.5c0-.83-.67-1.5-1.5-1.5z\"></path><path d=\"M9.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1z\"></path><path d=\"M16.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1z\"></path><path d=\"M19 7l-.03-3h-4.4\"></path>","icon-1":"<path d=\"M20.29 9H19c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v3c0 1.66-1.34 3-3 3h-1c0-1.1-.9-2-2-2s-2 .9-2 2h-4c0-1.1-.9-2-2-2s-2 .9-2 2H5c-1.06 0-1.99-.55-2.52-1.37\"></path><path d=\"M2 14h11c1.1 0 2-.9 2-2V5h1.84c.36 0 .71.1 1.01.27\"></path><path d=\"M15 2v10c0 1.1-.9 2-2 2H2V7.62c.73.87 1.85 1.41 3.09 1.38 1.01-.02 1.92-.41 2.6-1.06.31-.26.57-.59.77-.95.36-.61.56-1.33.54-2.08-.03-1.17-.55-2.2-1.36-2.91H15z\"></path><path d=\"M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path><path d=\"M16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path><path d=\"M22 12v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29L22 12z\"></path><path d=\"M9 5c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 1 5c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 9 5z\"></path><path d=\"M6.069 6.04l-2.11-2.11\"></path><path d=\"M6.04 3.96L3.93 6.07\"></path>","icon":"<path d=\"M15 2v10c0 1.1-.9 2-2 2H2V7.62c.73.87 1.85 1.41 3.09 1.38 1.01-.02 1.92-.41 2.6-1.06.31-.26.57-.59.77-.95.36-.61.56-1.33.54-2.08-.03-1.17-.55-2.2-1.36-2.91H15z\"></path><path d=\"M20.29 9H19c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v3c0 1.66-1.34 3-3 3h-1c0-1.1-.9-2-2-2s-2 .9-2 2h-4c0-1.1-.9-2-2-2s-2 .9-2 2H5c-1.06 0-1.99-.55-2.52-1.37\"></path><path d=\"M2 14h11c1.1 0 2-.9 2-2V5h1.84c.36 0 .71.1 1.01.27\"></path><path d=\"M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path><path d=\"M16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path><path d=\"M22 12v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29L22 12z\"></path><path d=\"M9 5c0 1.2-.53 2.27-1.36 3A4 4 0 0 1 5 9C2.79 9 1 7.21 1 5c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 9 5z\"></path><path d=\"M5.25 3.75v1.5L4 6\"></path>","image":"<path d=\"M12.33 12.84c-.96 1.73-2.75 1.88-3.99.33l-.22-.28c-1.29-1.62-3.11-1.42-4.04.43l-1.72 3.45c-1.2 2.4.55 5.23 3.23 5.23h12.76c2.59 0 4.34-2.65 3.32-5.04l-3.13-7.31c-1.06-2.48-3.01-2.58-4.32-.22\"></path><path d=\"M9.97 5c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3c.36 0 .7.06 1.01.18\"></path>","import-1":"<path d=\"M22 2l-8.2 8.2\"></path><path d=\"M13 6.17V11h4.83\"></path><path d=\"M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-2\"></path><path d=\"M11 2H9C4 2 2 4 2 9\"></path>","import-2":"<path d=\"M9.44 11.68L12 14.24l2.56-2.56\"></path><path d=\"M12 9v5.17\"></path><path d=\"M12 4v1.96\"></path><path d=\"M17.52 18.01C16.16 19.25 14.29 20 12 20c-5 0-8-3.58-8-8\"></path><path d=\"M20 12c0 1.05-.17 2.05-.49 2.97\"></path>","import":"<path d=\"M8.74 21.5c-4.47 0-6.26-1.79-6.26-6.26v-.13c0-4.02 1.45-5.87 4.99-6.2\"></path><path d=\"M16.44 8.9c3.6.31 5.07 2.16 5.07 6.21v.13c0 4.47-1.79 6.26-6.26 6.26h-2.24\"></path><path d=\"M12 2v12.88\"></path><path d=\"M15.35 12.65L12 16l-3.35-3.35\"></path>","info-circle":"<path d=\"M12 8v5\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path><path d=\"M11.994 16h.01\"></path>","information":"<path d=\"M12 8.13v4.83\"></path><path d=\"M4.24 6.2c0-1.06.87-1.93 1.93-1.93H7.9c.4 0 .96-.21 1.26-.46l1.58-1.35c.7-.59 1.83-.59 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58c.59.7.59 1.83 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35c-.7.59-1.83.59-2.51 0l-1.58-1.35c-.3-.25-.87-.46-1.26-.46H6.17c-1.06 0-1.93-.87-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l.56-.66\"></path><path d=\"M11.994 16h.01\"></path>","instagram":"<path d=\"M2 13.03V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z\"></path><path d=\"M17.636 7h.012\"></path>","judge":"<path d=\"M20.01 18.51l-4.95-4.95\"></path><path d=\"M18.6 7.2c.78.78.78 2.05 0 2.83l-3.54 3.54\"></path><path d=\"M15.06 13.56l-3.54 3.54c-.78.78-2.05.78-2.83 0l-4.24-4.24c-.78-.78-.78-2.05 0-2.83l7.07-7.07c.78-.78 2.05-.78 2.83 0l1.46 1.46\"></path><path d=\"M2 21h6\"></path><path d=\"M6.56 7.92l7.07 7.07\"></path>","key-square":"<path d=\"M2 12.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M16.28 13.61a4.147 4.147 0 0 1-4.18 1.03l-2.59 2.58c-.18.19-.55.31-.82.27l-1.2-.16c-.4-.05-.76-.43-.82-.82l-.16-1.2c-.04-.26.09-.63.27-.82l2.58-2.58c-.44-1.43-.1-3.05 1.03-4.18 1.62-1.62 4.26-1.62 5.89 0 1.62 1.61 1.62 4.25 0 5.88z\"></path><path d=\"M10.45 16.28l-.85-.86\"></path><path d=\"M13.395 10.7h.009\"></path>","key":"<path d=\"M12.99 2.15c2.38-.46 4.95.23 6.8 2.07 2.95 2.95 2.95 7.76 0 10.7a7.575 7.575 0 0 1-7.6 1.87l-4.71 4.7c-.34.35-1.01.56-1.49.49l-2.18-.3c-.72-.1-1.39-.78-1.5-1.5L2.01 18c-.07-.48.16-1.15.49-1.49l1.12-1.12 3.57-3.57c-.8-2.6-.18-5.55 1.88-7.6\"></path><path d=\"M6.89 17.49l2.3 2.3\"></path><path d=\"M14.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z\"></path>","keyboard-open":"<path d=\"M2 7.26c0-3.56.75-4.86 3.52-5.17C6.04 2.02 6.61 2 7.27 2h9.47c.65 0 1.23.02 1.75.09 2.77.31 3.52 1.61 3.52 5.17v6.32c0 3.56-.75 4.86-3.52 5.17-.52.07-1.09.09-1.75.09H7.27c-.65 0-1.23-.02-1.75-.09C2.75 18.44 2 17.14 2 13.58V11.1\"></path><path d=\"M13.58 8.32h3.68\"></path><path d=\"M6.74 14.11h10.53\"></path><path d=\"M7 22h10\"></path><path d=\"M7.194 8.3h.009\"></path><path d=\"M10.495 8.3h.009\"></path>","keyboard":"<path d=\"M2.5 9c0-3.38.71-4.62 3.34-4.91C6.33 4.02 6.88 4 7.5 4h9c.62 0 1.17.02 1.66.09 2.63.29 3.34 1.53 3.34 4.91v6c0 3.38-.71 4.62-3.34 4.91-.49.07-1.04.09-1.66.09h-9c-.62 0-1.17-.02-1.66-.09C3.21 19.62 2.5 18.38 2.5 15v-2.08\"></path><path d=\"M13.5 10H17\"></path><path d=\"M7 15.5h10\"></path><path d=\"M10.094 10h.01\"></path><path d=\"M7.094 10h.01\"></path>","lamp-1":"<path d=\"M4.53 9.04a8.713 8.713 0 0 1 7.41-4.11h.12c4.82 0 8.72 3.9 8.72 8.72v4.94H3.22v-4.94\"></path><path d=\"M12 2v2.93\"></path><path d=\"M15.65 18.59A3.661 3.661 0 0 1 12 22c-1.93 0-3.52-1.5-3.65-3.41h7.3z\"></path>","lamp-charge":"<path d=\"M19.07 6.27c2.09 4.2-.11 8.66-3.34 10.61v1.16c0 .29.11.96-.96.96H9.26c-1.1 0-.96-.43-.96-.96v-1.16C6 15.49 4.11 12.78 4.11 9.9c0-4.95 4.55-8.83 9.69-7.71.75.17 1.48.44 2.14.81\"></path><path d=\"M12 7.89l-1.07 1.86c-.24.41-.04.75.43.75h1.27c.48 0 .67.34.43.75L12 13.11\"></path><path d=\"M8.5 22c2.29-.65 4.71-.65 7 0\"></path>","lamp-on":"<path d=\"M19.07 6.27c2.09 4.2-.11 8.66-3.34 10.61v1.16c0 .29.11.96-.96.96H9.26c-1.1 0-.96-.43-.96-.96v-1.16C6 15.49 4.11 12.78 4.11 9.9c0-4.95 4.55-8.83 9.69-7.71.75.17 1.48.44 2.14.81\"></path><path d=\"M8.5 22c2.29-.65 4.71-.65 7 0\"></path>","lamp-slash":"<path d=\"M20.03 2.48L4.18 18.33\"></path><path d=\"M13.6 2.17c1.46.32 2.76 1.1 3.76 2.18\"></path><path d=\"M5.25 13c-.42-.97-.67-2.02-.67-3.1 0-3.38 1.99-6.26 4.8-7.39\"></path><path d=\"M19.06 7.3c1.22 3.88-.75 7.78-3.54 9.57v1.16c0 .29.1.96-.9.96h-5.2c-1.03 0-.9-.43-.9-.96v-1.16c-.48-.3-.93-.67-1.36-1.1\"></path><path d=\"M8.5 22c2.29-.65 4.71-.65 7 0\"></path>","lamp":"<path d=\"M10.94 2H7.99c-.96 0-1.97.77-2.22 1.7l-2.2 8.07c-.44 1.6.56 2.91 2.23 2.91h12.42c1.66 0 2.66-1.31 2.23-2.91l-2.2-8.07c-.27-.93-1.28-1.7-2.24-1.7\"></path><path d=\"M12 15v7\"></path><path d=\"M8 22h8\"></path>","language-circle":"<path d=\"M16.99 8.96H7.01\"></path><path d=\"M12 7.28v1.68\"></path><path d=\"M14.5 8.94c0 4.3-3.36 7.78-7.5 7.78\"></path><path d=\"M17 16.72c-1.8 0-3.4-.96-4.55-2.47\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","language-square":"<path d=\"M16.99 8.96H7.01\"></path><path d=\"M12 7.28v1.68\"></path><path d=\"M14.5 8.94c0 4.3-3.36 7.78-7.5 7.78\"></path><path d=\"M17 16.72c-1.8 0-3.4-.96-4.55-2.47\"></path><path d=\"M2 12.83V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","layer":"<path d=\"M18.92 5.54c1.7.75 1.7 1.99 0 2.74l-5.9 2.62c-.67.3-1.77.3-2.44 0l-5.9-2.62c-1.7-.75-1.7-1.99 0-2.74l5.9-2.62c.67-.3 1.77-.3 2.44 0l1.92.85\"></path><path d=\"M3 11c0 .84.63 1.81 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.77-.34 1.4-1.31 1.4-2.15\"></path><path d=\"M3 16c0 .93.55 1.77 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.85-.38 1.4-1.22 1.4-2.15\"></path>","level":"<path d=\"M2.2 14.02A9.992 9.992 0 0 0 12 22c4.82 0 8.84-3.41 9.79-7.95\"></path><path d=\"M7.49 3.07C4.81 4.43 2.82 6.96 2.21 9.98\"></path><path d=\"M21.81 10.06C20.91 5.46 16.86 2 12 2\"></path><path d=\"M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z\"></path>","lifebuoy":"<path d=\"M7.04 3.3A9.99 9.99 0 0 0 1.97 12c0 5.52 4.48 10 10 10s10-4.48 10-10-4.48-10-10-10\"></path><path d=\"M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z\"></path><path d=\"M4.9 4.93l3.54 3.53\"></path><path d=\"M4.9 19.07l3.54-3.53\"></path><path d=\"M19.05 19.07l-3.54-3.53\"></path><path d=\"M19.05 4.93l-3.54 3.53\"></path>","like-1":"<path d=\"M21.48 11.95c.5-1.4-.4-2.6-1.9-2.6h-4c-.6 0-1.1-.5-1-1.2l.5-3.2c.2-.9-.4-1.9-1.3-2.2-.8-.3-1.8.1-2.2.7l-4.1 6.1\"></path><path d=\"M7.48 18.35l3.1 2.4c.4.4 1.3.6 1.9.6h3.8c1.2 0 2.5-.9 2.8-2.1l1.24-3.77\"></path><path d=\"M2.38 18.35v-9.8c0-1.4.6-1.9 2-1.9h1c1.4 0 2 .5 2 1.9v9.8c0 1.4-.6 1.9-2 1.9h-1c-1.4 0-2-.5-2-1.9z\"></path>","like-dislike":"<path d=\"M4.92 20.28l1.77 1.37c.23.23.74.34 1.09.34h2.17c.69 0 1.43-.51 1.6-1.2l1.37-4.17c.29-.8-.23-1.49-1.09-1.49H9.54a.58.58 0 0 1-.57-.69l.29-1.83c.11-.51-.23-1.09-.74-1.26-.46-.17-1.03.06-1.26.4l-2.34 3.49\"></path><path d=\"M2 20.28c0 .8.34 1.09 1.14 1.09h.57c.8 0 1.14-.29 1.14-1.09v-5.6c0-.8-.34-1.09-1.14-1.09h-.57c-.8 0-1.14.29-1.14 1.09v1.5\"></path><path d=\"M19.08 3.72l-1.77-1.37c-.23-.23-.74-.34-1.09-.34h-2.17c-.69 0-1.43.51-1.6 1.2l-1.37 4.17c-.29.8.23 1.49 1.09 1.49h2.29c.34 0 .63.29.57.69l-.29 1.83c-.11.51.23 1.09.74 1.26.46.17 1.03-.06 1.26-.4l2.34-3.49\"></path><path d=\"M22 3.72c0-.8-.34-1.09-1.14-1.09h-.57c-.8 0-1.14.29-1.14 1.09v5.6c0 .8.34 1.09 1.14 1.09h.57c.8 0 1.14-.29 1.14-1.09V8\"></path>","like-shapes":"<path d=\"M9.89 14.82l1.45 1.12c.19.19.61.28.89.28H14c.56 0 1.17-.42 1.31-.98l1.12-3.42c.23-.65-.19-1.22-.89-1.22h-1.87c-.28 0-.51-.23-.47-.56l.23-1.5c.09-.42-.19-.89-.61-1.03-.37-.14-.84.05-1.03.33l-1.92 2.85\"></path><path d=\"M7.5 14.82v-4.58c0-.66.28-.89.94-.89h.47c.65 0 .94.23.94.89v4.58c0 .65-.28.89-.94.89h-.47c-.66 0-.94-.23-.94-.89z\"></path><path d=\"M14.66 20.01l-1.52 1.52c-.62.62-1.64.62-2.26 0l-1.52-1.52c-.26-.26-.77-.47-1.13-.47H6.08c-.88 0-1.6-.72-1.6-1.6v-2.15c0-.36-.21-.87-.47-1.13l-1.52-1.52c-.62-.62-.62-1.64 0-2.26l1.52-1.52c.26-.26.47-.77.47-1.13V6.08c0-.88.72-1.6 1.6-1.6\"></path><path d=\"M9.34 3.99l1.52-1.52c.62-.62 1.64-.62 2.26 0l1.52 1.52c.26.26.77.47 1.13.47h2.15c.88 0 1.6.72 1.6 1.6v2.15c0 .36.21.87.47 1.13l1.52 1.52c.62.62.62 1.64 0 2.26l-1.52 1.52c-.26.26-.47.77-.47 1.13v2.15c0 .88-.72 1.6-1.6 1.6\"></path>","like-tag":"<path d=\"M9.65 13.8l1.61 1.25c.21.21.68.31.99.31h1.98c.62 0 1.3-.47 1.46-1.09l1.25-3.79c.26-.73-.21-1.35-.99-1.35h-2.08c-.31 0-.57-.26-.52-.62l.26-1.66c.1-.47-.21-.99-.68-1.14-.42-.16-.94.05-1.14.36L9.66 9.24\"></path><path d=\"M7 13.8V8.71c0-.73.31-.99 1.04-.99h.52c.73 0 1.04.26 1.04.99v5.09c0 .73-.31.99-1.04.99h-.52c-.73 0-1.04-.26-1.04-.99z\"></path><path d=\"M3 4.97C3 3.33 4.34 2 6 2h12c1.66 0 3 1.33 3 2.97v10.91c0 1.64-1.34 2.97-3 2.97h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V9.07\"></path>","like":"<path d=\"M3 4.97C3 3.33 4.34 2 6 2h12c1.66 0 3 1.33 3 2.97v10.91c0 1.64-1.34 2.97-3 2.97h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V9.04\"></path><path d=\"M12.28 14.96c-.15.05-.4.05-.56 0-1.3-.45-4.22-2.3-4.22-5.45C7.5 8.12 8.62 7 10 7c.82 0 1.54.39 2 1 .46-.61 1.18-1 2-1 1.38 0 2.5 1.12 2.5 2.51 0 1.16-.39 2.14-.95 2.94\"></path>","link-1":"<path d=\"M13.5 12c0 3.18-2.57 5.75-5.75 5.75S2 15.18 2 12s2.57-5.75 5.75-5.75\"></path><path d=\"M22 12c0 3.31-2.69 6-6 6\"></path><path d=\"M10 12c0-3.31 2.69-6 6-6 1.53 0 2.93.57 3.98 1.51\"></path>","link-2":"<path d=\"M14.99 17.5h1.51c3.02 0 5.5-2.47 5.5-5.5 0-3.02-2.47-5.5-5.5-5.5h-1.51\"></path><path d=\"M2.37 10.01C2.13 10.63 2 11.3 2 12c0 3.02 2.47 5.5 5.5 5.5H9\"></path><path d=\"M9 6.5H7.5c-.83 0-1.61.18-2.32.51\"></path><path d=\"M8 12h8\"></path>","link-21":"<path d=\"M13.06 10.94a5.74 5.74 0 0 1 0 8.13c-2.25 2.24-5.89 2.25-8.13 0-2.24-2.25-2.25-5.89 0-8.13\"></path><path d=\"M14.97 3.17c1.49.03 2.97.62 4.1 1.76 2.34 2.34 2.34 6.14 0 8.49\"></path><path d=\"M10.59 13.41c-2.34-2.34-2.34-6.14 0-8.49\"></path>","link-circle":"<path d=\"M7.94 14.51c-.62-.23-1.17-.68-1.52-1.32-.8-1.46-.31-3.36 1.11-4.24L9.87 7.5c1.41-.88 3.23-.4 4.03 1.05.8 1.46.31 3.36-1.11 4.24l-.31.22\"></path><path d=\"M16.11 9.45c.62.23 1.17.68 1.52 1.32.8 1.46.31 3.36-1.11 4.24l-2.34 1.45c-1.41.88-3.23.4-4.03-1.05-.8-1.46-.31-3.36 1.11-4.24l.31-.22\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","link-square":"<path d=\"M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M8.18 16.02c-.76-.07-1.51-.42-2.09-1.03-1.32-1.39-1.32-3.67 0-5.06l2.19-2.3a3.307 3.307 0 0 1 4.82 0c1.32 1.39 1.32 3.67 0 5.06l-1.09 1.15\"></path><path d=\"M15.82 7.98c.76.07 1.51.42 2.09 1.03 1.32 1.39 1.32 3.67 0 5.06l-2.19 2.3a3.307 3.307 0 0 1-4.82 0c-1.32-1.39-1.32-3.67 0-5.06l1.09-1.15\"></path>","link":"<path d=\"M3.27 12A5.46 5.46 0 0 1 2 8.5C2 5.48 4.47 3 7.5 3h5C15.52 3 18 5.48 18 8.5S15.53 14 12.5 14H10\"></path><path d=\"M11.98 21h-.48C8.48 21 6 18.52 6 15.5S8.47 10 11.5 10H14\"></path><path d=\"M20.73 12A5.46 5.46 0 0 1 22 15.5c0 3.02-2.47 5.5-5.5 5.5\"></path>","location-add":"<path d=\"M9.25 11h5.5\"></path><path d=\"M12 13.75v-5.5\"></path><path d=\"M5.98 4.3c4.37-4.11 12.84-2.7 14.4 4.21 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0C5.63 17.88 2.46 13.58 3.62 8.5\"></path>","location-cross":"<path d=\"M14 12.96L10.04 9\"></path><path d=\"M13.96 9.04L10 13\"></path><path d=\"M5.98 4.3c4.37-4.11 12.84-2.7 14.4 4.21 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0C5.63 17.88 2.46 13.58 3.62 8.5\"></path>","location-minus":"<path d=\"M9.25 11h5.5\"></path><path d=\"M5.98 4.3c4.37-4.11 12.84-2.7 14.4 4.21 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0C5.63 17.88 2.46 13.58 3.62 8.5\"></path>","location-slash":"<path d=\"M10.42 13a3.113 3.113 0 0 1-1.54-2.69 3.118 3.118 0 0 1 5.81-1.57\"></path><path d=\"M6.51 3.84c3.54-2.79 9.2-2.41 12.17 1.14\"></path><path d=\"M5.99 17.81c-1.84-2.51-3.18-5.72-2.36-9.32\"></path><path d=\"M20.38 8.5c1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0\"></path><path d=\"M22 2L2 22\"></path>","location-tick":"<path d=\"M9.25 11.5l1.5 1.5 4-4\"></path><path d=\"M5.98 4.3c4.37-4.11 12.84-2.7 14.4 4.21 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0C5.63 17.88 2.46 13.58 3.62 8.5\"></path>","location":"<path d=\"M15.12 10.31c0 1.72-1.39 3.12-3.12 3.12-1.73 0-3.12-1.39-3.12-3.12 0-1.73 1.4-3.12 3.12-3.12.34 0 .67.05.97.15\"></path><path d=\"M5.98 4.3c4.37-4.11 12.84-2.7 14.4 4.21 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0C5.63 17.88 2.46 13.58 3.62 8.5\"></path>","lock-1":"<path d=\"M6 10V8c0-3.31 1-6 6-6s6 2.69 6 6v2\"></path><path d=\"M9.5 16a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-2.5-2.5\"></path><path d=\"M22 17v-2c0-4-1-5-5-5H7c-4 0-5 1-5 5v2c0 4 1 5 5 5h10c1.76 0 2.94-.19 3.71-.75\"></path>","lock-circle":"<path d=\"M9 11v-1c0-1.66.5-3 3-3s3 1.34 3 3v1\"></path><path d=\"M12 14.6a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2z\"></path><path d=\"M14.5 17h-5c-2 0-2.5-.5-2.5-2.5v-1c0-2 .5-2.5 2.5-2.5h5c2 0 2.5.5 2.5 2.5v1c0 2-.5 2.5-2.5 2.5z\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","lock-slash":"<path d=\"M10.02 17.52c.46.59 1.18.98 1.98.98a2.505 2.505 0 1 0 1.99-4.02\"></path><path d=\"M20.69 21.26c-.76.55-1.94.74-3.69.74H7c-.36 0-.69-.01-1-.03\"></path><path d=\"M2.82 20.8C2.21 20.04 2 18.83 2 17v-2c0-4 1-5 5-5h10c.36 0 .69.01 1 .03 3.17.18 4 1.33 4 4.97v2\"></path><path d=\"M6 10V8c0-3.31 1-6 6-6 4.15 0 5.54 1.38 5.9 3.56\"></path><path d=\"M22 2L2 22\"></path>","lock":"<path d=\"M6 10V8c0-3.31 1-6 6-6s6 2.69 6 6v2\"></path><path d=\"M22 17v-2c0-4-1-5-5-5H7c-4 0-5 1-5 5v2c0 4 1 5 5 5h10c1.76 0 2.94-.19 3.71-.75\"></path><path d=\"M15.996 16h.01\"></path><path d=\"M11.995 16h.009\"></path><path d=\"M7.995 16h.008\"></path>","login-1":"<path d=\"M11.68 14.56L14.24 12l-2.56-2.56\"></path><path d=\"M9 12h5.17\"></path><path d=\"M4 12h1.96\"></path><path d=\"M18.01 6.48C19.25 7.84 20 9.71 20 12c0 5-3.58 8-8 8\"></path><path d=\"M12 4c1.05 0 2.05.17 2.97.49\"></path>","login":"<path d=\"M2 12h12.88\"></path><path d=\"M12.65 8.65L16 12l-3.35 3.35\"></path><path d=\"M21.5 13v2.26c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99\"></path><path d=\"M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26\"></path>","logout-1":"<path d=\"M6.56 14.56L4 12l2.56-2.56\"></path><path d=\"M9.24 12H4.07\"></path><path d=\"M14.24 12h-1.96\"></path><path d=\"M18.01 6.48C19.25 7.84 20 9.71 20 12c0 5-3.58 8-8 8\"></path><path d=\"M12 4c1.05 0 2.05.17 2.97.49\"></path>","logout":"<path d=\"M21.5 13v2.26c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99\"></path><path d=\"M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26\"></path><path d=\"M15 12H3.62\"></path><path d=\"M5.85 8.65L2.5 12l3.35 3.35\"></path>","lovely":"<path d=\"M6.96 3.1c1.63 0 3.07.78 3.97 1.99A4.957 4.957 0 0 1 14.9 3.1c2.74 0 4.96 2.23 4.96 4.99 0 .42-.03.83-.08 1.22a3.714 3.714 0 0 0-4.46 1.18A3.73 3.73 0 0 0 12.34 9c-2.05 0-3.71 1.67-3.71 3.74 0 2.68 1.42 4.73 3 6.12-.05.03-.1.04-.15.06-.3.11-.8.11-1.1 0C7.79 18.03 2 14.35 2 8.09c0-1.17.4-2.25 1.07-3.1\"></path><path d=\"M22 12.74c0 4.68-4.33 7.44-6.27 8.1-.23.08-.6.08-.83 0-.83-.28-2.1-.95-3.27-1.98-1.58-1.39-3-3.44-3-6.12 0-2.07 1.66-3.74 3.71-3.74 1.22 0 2.3.59 2.98 1.49a3.714 3.714 0 0 1 4.46-1.18\"></path>","magic-star":"<path d=\"M4.27 6.42c-.59-1.9.47-2.95 2.36-2.33l2.95.97c.5.16 1.25.05 1.67-.26l3.08-2.22c1.67-1.2 3-.5 2.96 1.55l-.07 3.79c-.01.52.32 1.21.74 1.52l2.48 1.88c1.59 1.2 1.33 2.67-.57 3.27l-3.23 1.01c-.54.17-1.11.76-1.25 1.31l-.77 2.94c-.61 2.32-2.13 2.55-3.39.51l-1.76-2.85c-.32-.52-1.08-.91-1.68-.88l-3.34.17c-2.39.12-3.07-1.26-1.51-3.08l1.98-2.3c.19-.22.32-.52.39-.84\"></path><path d=\"M21.91 22l-3.03-3.03\"></path>","magicpen":"<path d=\"M16.98 10.02L19.5 7.5c.83-.83.83-2.17 0-3-.83-.83-2.17-.83-3 0l-13 13c-.83.83-.83 2.17 0 3 .83.83 2.17.83 3 0l8-8\"></path><path d=\"M18.01 8.99l-3-3\"></path><path d=\"M9.56 3.5L10 5l-1.5-.44L7 5l.44-1.5L7 2l1.5.44\"></path><path d=\"M4.5 8.44L6 8l-.44 1.5L6 11l-1.5-.44L3 11l.44-1.5L3 8l1.5.44z\"></path><path d=\"M18.44 14.5L18 13l1.5.44L21 13l-.44 1.5L21 16l-1.5-.44\"></path>","main-component":"<path d=\"M6.74 18.24l-3.68-3.68c-1.4-1.4-1.4-3.7 0-5.11l6.39-6.39c1.4-1.4 3.7-1.4 5.11 0l6.39 6.39c1.4 1.4 1.4 3.7 0 5.11l-6.39 6.39c-1.4 1.4-3.7 1.4-5.11 0\"></path><path d=\"M6.25 6.25l11.5 11.5\"></path><path d=\"M15.5 8.5l-9.25 9.25\"></path>","man":"<path d=\"M4.27 18.68a7.75 7.75 0 1 0-1.77-4.93\"></path><path d=\"M21.5 2.5L16 8\"></path><path d=\"M15 2.5h6.5V9\"></path>","map-1":"<path d=\"M4.27 5.49l-.97.56c-.55.32-1.01 1.1-1.01 1.74v9.73c0 1.9 1.35 2.68 2.99 1.74l2.35-1.34c.51-.29 1.36-.32 1.89-.05l5.25 2.63c.53.26 1.38.24 1.89-.05l4.33-2.48c.55-.32 1.01-1.1 1.01-1.74V6.49c0-1.9-1.35-2.68-2.99-1.74l-2.35 1.34c-.51.29-1.36.32-1.89.05L9.52 3.52c-.53-.26-1.38-.24-1.89.05\"></path><path d=\"M8.56 4v13\"></path><path d=\"M15.73 6.62V20\"></path>","map":"<path d=\"M22 9v6c0 2.5-.5 4.25-1.62 5.38L14 14l7.73-7.73c.18.79.27 1.69.27 2.73z\"></path><path d=\"M2 9c0-5 2-7 7-7h6c3.96 0 6.04 1.26 6.73 4.27L6.27 21.73C3.26 21.04 2 18.96 2 15v-2.06\"></path><path d=\"M20.38 20.38C19.25 21.5 17.5 22 15 22H9c-1.04 0-1.94-.09-2.73-.27L14 14l6.38 6.38z\"></path><path d=\"M6.24 7.98c.68-2.93 5.08-2.93 5.76 0 .39 1.72-.69 3.18-1.64 4.08a1.8 1.8 0 0 1-2.48 0c-.95-.9-2.04-2.36-1.64-4.08z\"></path><path d=\"M9.094 8.7h.01\"></path>","mask-1":"<path d=\"M11.97 11.86v4.53c-.02 1.65-1.25 2.05-2.4 1.59A6.439 6.439 0 0 1 5.53 12c0-2.71 1.67-5.03 4.04-5.99 1.15-.46 2.38-.05 2.4 1.59\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","mask-2":"<path d=\"M17 12c0 2.76-2.24 5-5 5V7c1.32 0 2.52.51 3.42 1.35\"></path><path d=\"M12 7v10c-2.76 0-5-2.24-5-5s2.24-5 5-5z\"></path><path d=\"M12 22v-5\"></path><path d=\"M12 7V2\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","mask":"<path d=\"M2 12c0 2.76 1.12 5.26 2.93 7.07L19.07 4.93A9.969 9.969 0 0 0 12 2C8.07 2 4.67 4.27 3.03 7.57\"></path><path d=\"M22 12c0 5.52-4.48 10-10 10-2.76 0-5.26-1.12-7.07-2.93L19.07 4.93A9.969 9.969 0 0 1 22 12z\"></path><path d=\"M7.76 16.24l5.65 5.66\"></path><path d=\"M11.29 12.71l6.58 6.57\"></path><path d=\"M14.83 9.17l6.29 6.3\"></path>","math":"<path d=\"M2.3 5.64h7.28\"></path><path d=\"M14.42 15.33h7.28\"></path><path d=\"M14.42 21.39h7.28\"></path><path d=\"M20.96 5.64h.74\"></path><path d=\"M14.42 5.64h3.27\"></path><path d=\"M18.09 9.27V2\"></path><path d=\"M9.58 14.73l-1.43 1.42\"></path><path d=\"M2.3 22l3.51-3.51\"></path><path d=\"M9.58 22L2.3 14.73\"></path>","maximize-1":"<path d=\"M2 9V6.5C2 4.01 4.01 2 6.5 2H9\"></path><path d=\"M15 2h2.5C19.99 2 22 4.01 22 6.5V9\"></path><path d=\"M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16\"></path><path d=\"M9 22H6.5C4.01 22 2 19.99 2 17.5V15\"></path><path d=\"M18 12v-2m-1.05 2H18h-1.05zM6 12h8-8zm0 0v-2 2zm0 0v2-2zm12 0v2-2z\"></path><path d=\"M12 6h2m-2 12V6v12zm0 0h2-2zm0 0h-2 2zm0-12h-2 2z\"></path>","maximize-2":"<path d=\"M2 9V6.5C2 4.01 4.01 2 6.5 2H9\"></path><path d=\"M15 2h2.5C19.99 2 22 4.01 22 6.5V9\"></path><path d=\"M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16\"></path><path d=\"M9 22H6.5C4.01 22 2 19.99 2 17.5V15\"></path>","maximize-21":"<path d=\"M2 9.98V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7h-1\"></path><path d=\"M13 11l5.01-5.02H14\"></path><path d=\"M18.01 5.98v4.01\"></path><path d=\"M2 18.85v-2.7C2 13.9 2.9 13 5.15 13h2.7c2.25 0 3.15.9 3.15 3.15v2.7C11 21.1 10.1 22 7.85 22h-2.7\"></path>","maximize-3":"<path d=\"M2 13.03V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M12 12l-6 6\"></path><path d=\"M18 6l-2.99 2.99\"></path><path d=\"M18 10V6h-4\"></path><path d=\"M6 14v4h4\"></path>","maximize-4":"<path d=\"M21 5V3h-6\"></path><path d=\"M21 9V7.97\"></path><path d=\"M3 19v2h6\"></path><path d=\"M3 15v1.03\"></path><path d=\"M21 3l-7.5 7.5\"></path><path d=\"M10.5 13.5L3 21\"></path>","maximize-circle":"<path d=\"M17 3h4v4\"></path><path d=\"M15 9l6-6\"></path><path d=\"M7 21H3v-4\"></path><path d=\"M9 15l-6 6\"></path><path d=\"M7.64 3A9.995 9.995 0 0 0 2 12c0 .69.07 1.36.2 2\"></path><path d=\"M14.02 2.2C13.37 2.07 12.69 2 12 2\"></path><path d=\"M9.98 21.8c.65.13 1.33.2 2.02.2 5.52 0 10-4.48 10-10 0-.68-.07-1.35-.2-2\"></path>","maximize":"<path d=\"M2 13v2c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M18 6L6 18\"></path><path d=\"M18 10V6h-4\"></path><path d=\"M6 14v4h4\"></path><path d=\"M6 6l12 12\"></path><path d=\"M6 10V6h4\"></path><path d=\"M18 14v4h-4\"></path>","medal-star":"<path d=\"M16.25 3.44A6.986 6.986 0 0 1 19 9c0 1.45-.43 2.78-1.17 3.89a6.985 6.985 0 0 1-4.78 3.02c-.34.06-.69.09-1.05.09-.36 0-.71-.03-1.05-.09a6.985 6.985 0 0 1-4.78-3.02A6.968 6.968 0 0 1 5 9c0-3.87 3.13-7 7-7\"></path><path d=\"M21.25 18.47l-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47a1 1 0 0 1-1.74.41L12 16l-4.77 5.49a1 1 0 0 1-1.74-.41l-.35-1.47a.996.996 0 0 0-.74-.74l-1.65-.39a1.003 1.003 0 0 1-.48-1.68l3.9-3.9a6.985 6.985 0 0 0 4.78 3.02c.34.06.69.09 1.05.09.36 0 .71-.03 1.05-.09 1.99-.29 3.7-1.42 4.78-3.02l3.9 3.9c.55.54.28 1.49-.48 1.67z\"></path><path d=\"M12.58 5.98l.59 1.18c.08.16.29.32.48.35l1.07.18c.68.11.84.61.35 1.1l-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.701.701 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.83-.83c-.49-.49-.33-.98.35-1.1l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.29-.64.81-.64 1.13 0z\"></path>","medal":"<path d=\"M16.5 3.66c1.38 1.19 2.25 2.92 2.25 4.84 0 3.59-3.02 6.5-6.75 6.5s-6.75-2.91-6.75-6.5S8.27 2 12 2\"></path><path d=\"M7.52 13.52l-.01 7.38c0 .9.63 1.34 1.41.97l2.68-1.27c.22-.11.59-.11.81 0l2.69 1.27c.77.36 1.41-.07 1.41-.97v-7.56\"></path>","menu-1":"<path d=\"M3 7h18\"></path><path d=\"M9.49 12H21\"></path><path d=\"M3 12h2.99\"></path><path d=\"M3 17h18\"></path>","menu-board":"<path d=\"M1.1 19.07C.66 20.53 1.73 22 3.24 22h13.14c1.04 0 1.93-.7 2.18-1.71l3.37-13.53c.12-.5.08-.99-.11-1.42-.33-.8-1.12-1.38-2.07-1.38H7.45c-.98 0-1.86.64-2.14 1.59l-2.63 8.46\"></path><path d=\"M16 22h4.78c1.29 0 2.3-1.09 2.21-2.38L22 6\"></path><path d=\"M9.68 6.38l1.04-4.32\"></path><path d=\"M16.38 6.39l.94-4.34\"></path><path d=\"M7.7 12h8\"></path><path d=\"M14.7 16H14\"></path><path d=\"M6.7 16H11\"></path>","menu":"<path d=\"M17.54 8.31a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92z\"></path><path d=\"M8.92 5.85c0-1.36-1.1-2.46-2.46-2.46C5.1 3.39 4 4.49 4 5.85c0 1.36 1.1 2.46 2.46 2.46\"></path><path d=\"M17.54 20.62c1.36 0 2.46-1.1 2.46-2.46 0-1.36-1.1-2.46-2.46-2.46-1.36 0-2.46 1.1-2.46 2.46\"></path><path d=\"M6.46 20.61a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92z\"></path>","message-2":"<path d=\"M8.5 10.5h7\"></path><path d=\"M2 11.56v1.87c0 3 2 5 5 5h4l4.45 2.96a.997.997 0 0 0 1.55-.83v-2.13c3 0 5-2 5-5v-6c0-3-2-5-5-5H7c-3 0-5 2-5 5\"></path>","message-add-1":"<path d=\"M22 8c0-4-2-6-6-6H8C4 2 2 4 2 8v13c0 .55.45 1 1 1h13c4 0 6-2 6-6v-4\"></path><path d=\"M14.5 12h1\"></path><path d=\"M8.5 12H12\"></path><path d=\"M12 15.5v-7\"></path>","message-add":"<path d=\"M9 17.5c0 .32-.04.63-.12.93-.09.4-.25.79-.46 1.13A3.97 3.97 0 0 1 5 21.5a3.92 3.92 0 0 1-2.66-1.03c-.3-.26-.56-.57-.76-.91A3.92 3.92 0 0 1 1 17.5a3.995 3.995 0 0 1 4-4c1.18 0 2.25.51 2.97 1.33.64.71 1.03 1.65 1.03 2.67z\"></path><path d=\"M6.49 17.48H3.51\"></path><path d=\"M5 16.02v2.99\"></path><path d=\"M8.5 10.5h7\"></path><path d=\"M22 11.54v1.89c0 1.5-.5 2.75-1.38 3.63-.87.87-2.12 1.37-3.62 1.37v2.13c0 .8-.89 1.28-1.55.84L11 18.43H8.88c.08-.3.12-.61.12-.93 0-1.02-.39-1.96-1.03-2.67A3.944 3.944 0 0 0 5 13.5c-1.12 0-2.14.46-2.87 1.21-.09-.4-.13-.83-.13-1.28v-6c0-3 2-5 5-5h10c3 0 5 2 5 5\"></path>","message-circle":"<path d=\"M17.25 10.18v2.63c0 .17-.01.33-.03.49-.15 1.77-1.2 2.65-3.12 2.65h-.26a.54.54 0 0 0-.42.21l-.79 1.05c-.35.47-.91.47-1.26 0l-.79-1.05a.631.631 0 0 0-.42-.21H9.9c-2.1 0-3.15-.52-3.15-3.15v-2.63c0-1.92.89-2.97 2.65-3.12.16-.02.32-.03.49-.03h4.2c2.11.02 3.16 1.07 3.16 3.16z\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","message-edit":"<path d=\"M22 8c0-4-2-6-6-6H8C4 2 2 4 2 8v13c0 .55.45 1 1 1h13c4 0 6-2 6-6v-4\"></path><path d=\"M15.51 11.74l.65-.65c.04-.04.08-.08.12-.13.81-.86 1.13-1.87-.12-3.12-1.32-1.32-2.36-.89-3.25 0l-5.19 5.19c-.2.2-.39.59-.43.87l-.28 1.98c-.1.72.4 1.22 1.12 1.12l1.98-.28c.28-.04.67-.23.87-.43l1.94-1.94\"></path><path d=\"M12.17 8.58a4.688 4.688 0 0 0 3.25 3.25\"></path>","message-favorite":"<path d=\"M2 8c0-4 2-6 6-6h4\"></path><path d=\"M22 8v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-1\"></path><path d=\"M18 7c-.5 0-2.27-.8-2.8-2.38-.33-.99.06-2.21 1.14-2.55.56-.17 1.26-.03 1.66.5.38-.55 1.1-.67 1.66-.5 1.08.33 1.47 1.56 1.14 2.55\"></path><path d=\"M15.996 11h.01\"></path><path d=\"M11.995 11h.009\"></path><path d=\"M7.995 11h.008\"></path>","message-minus":"<path d=\"M22 8c0-4-2-6-6-6H8C4 2 2 4 2 8v13c0 .55.45 1 1 1h13c4 0 6-2 6-6v-4\"></path><path d=\"M14.5 12h1\"></path><path d=\"M8.5 12H12\"></path>","message-notif":"<path d=\"M2 8c0-4 2-6 6-6h6\"></path><path d=\"M22 10v3c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-1\"></path><path d=\"M22 4.5a2.5 2.5 0 0 0-5 0A2.5 2.5 0 0 0 19.5 7\"></path><path d=\"M15.996 11h.01\"></path><path d=\"M11.995 11h.009\"></path><path d=\"M7.995 11h.008\"></path>","message-programming":"<path d=\"M22 12v.97c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.17-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-5c0-4 2-6 6-6h8c4 0 6 2 6 6\"></path><path d=\"M8 8.7l-2 2 2 2\"></path><path d=\"M16 8.7l2 2-2 2\"></path><path d=\"M13 8.37l-2 4.66\"></path>","message-question":"<path d=\"M2 11.56v1.87c0 3 2 5 5 5h4l4.45 2.96a.997.997 0 0 0 1.55-.83v-2.13c3 0 5-2 5-5v-6c0-3-2-5-5-5H7c-3 0-5 2-5 5\"></path><path d=\"M12 11.36v-.21c0-.68.42-1.04.84-1.33.41-.28.82-.64.82-1.3 0-.92-.74-1.66-1.66-1.66-.92 0-1.66.74-1.66 1.66\"></path><path d=\"M11.995 13.75h.01\"></path>","message-remove":"<path d=\"M9 17.5c0 .32-.04.63-.12.93-.09.4-.25.79-.46 1.13A3.97 3.97 0 0 1 5 21.5a3.92 3.92 0 0 1-2.66-1.03c-.3-.26-.56-.57-.76-.91A3.92 3.92 0 0 1 1 17.5a3.995 3.995 0 0 1 4-4c1.18 0 2.25.51 2.97 1.33.64.71 1.03 1.65 1.03 2.67z\"></path><path d=\"M6.07 18.54l-2.12-2.11\"></path><path d=\"M6.05 16.46l-2.12 2.11\"></path><path d=\"M8.5 10.5h7\"></path><path d=\"M22 11.54v1.89c0 1.5-.5 2.75-1.38 3.63-.87.87-2.12 1.37-3.62 1.37v2.13c0 .8-.89 1.28-1.55.84L11 18.43H8.88c.08-.3.12-.61.12-.93 0-1.02-.39-1.96-1.03-2.67A3.944 3.944 0 0 0 5 13.5c-1.12 0-2.14.46-2.87 1.21-.09-.4-.13-.83-.13-1.28v-6c0-3 2-5 5-5h10c3 0 5 2 5 5\"></path>","message-search":"<path d=\"M13.2 21.37c-.66.88-1.74.88-2.4 0l-1.5-2c-.17-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-5c0-4 2-6 6-6h8c4 0 6 2 6 6v5\"></path><path d=\"M21.4 18.2c0 1.77-1.43 3.2-3.2 3.2-1.77 0-3.2-1.43-3.2-3.2 0-1.77 1.43-3.2 3.2-3.2\"></path><path d=\"M22 22l-1-1\"></path><path d=\"M15.996 11h.01\"></path><path d=\"M11.995 11h.009\"></path><path d=\"M7.995 11h.008\"></path>","message-square":"<path d=\"M2 13.02V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M18.28 9.76v3.14c0 .2-.01.4-.03.59-.18 2.12-1.43 3.18-3.73 3.18h-.31c-.2 0-.39.09-.5.25l-.94 1.26c-.42.56-1.09.56-1.51 0l-.94-1.26a.733.733 0 0 0-.5-.25h-.31c-2.51 0-3.76-.62-3.76-3.76V9.77c0-2.3 1.06-3.55 3.18-3.73.19-.02.39-.03.59-.03h5.03c2.47-.01 3.73 1.25 3.73 3.75z\"></path>","message-text-1":"<path d=\"M2 8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-1\"></path><path d=\"M15.99 8H17\"></path><path d=\"M7 8h5.51\"></path><path d=\"M7 13h6\"></path>","message-text":"<path d=\"M22 8c0-4-2-6-6-6H8C4 2 2 4 2 8v13c0 .55.45 1 1 1h13c4 0 6-2 6-6v-4\"></path><path d=\"M15 9.5h2\"></path><path d=\"M7 9.5h5\"></path><path d=\"M7 14.5h7\"></path>","message-tick":"<path d=\"M9 17.5c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 1 17.5c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 9 17.5z\"></path><path d=\"M3.44 17.5l.99.99 2.13-1.97\"></path><path d=\"M8.5 10.5h7\"></path><path d=\"M22 11.54v1.89c0 1.5-.5 2.75-1.38 3.63-.87.87-2.12 1.37-3.62 1.37v2.13c0 .8-.89 1.28-1.55.84L11 18.43H8.88c.08-.3.12-.61.12-.93 0-1.02-.39-1.96-1.03-2.67A3.944 3.944 0 0 0 5 13.5c-1.12 0-2.14.46-2.87 1.21-.09-.4-.13-.83-.13-1.28v-6c0-3 2-5 5-5h10c3 0 5 2 5 5\"></path>","message-time":"<path d=\"M22 11.54v1.89c0 1.5-.5 2.75-1.38 3.63-.87.87-2.12 1.37-3.62 1.37v2.13c0 .8-.89 1.28-1.55.84L11 18.43H8.88c.08-.3.12-.61.12-.93 0-1.02-.39-1.96-1.03-2.67A3.944 3.944 0 0 0 5 13.5c-1.12 0-2.14.46-2.87 1.21-.09-.4-.13-.83-.13-1.28v-6c0-3 2-5 5-5h10c3 0 5 2 5 5\"></path><path d=\"M9 17.5c0 1.2-.53 2.27-1.36 3a4 4 0 0 1-2.64 1c-2.21 0-4-1.79-4-4 0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 9 17.5z\"></path><path d=\"M5.25 16.25v1.5L4 18.5\"></path><path d=\"M8.5 10.5h7\"></path>","message":"<path d=\"M2 8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-1\"></path><path d=\"M15.996 11h.01\"></path><path d=\"M11.995 11h.009\"></path><path d=\"M7.995 11h.008\"></path>","messages-1":"<path d=\"M2 10.79c0-2.93 1.35-4.52 4.04-4.75.24-.03.49-.04.75-.04h6.4c3.19 0 4.79 1.6 4.79 4.79v4c0 .26-.01.51-.04.75-.23 2.7-1.82 4.04-4.75 4.04h-.4c-.25 0-.49.12-.64.32l-1.2 1.6c-.53.71-1.39.71-1.92 0l-1.2-1.6a.924.924 0 0 0-.64-.32h-.4C3.6 19.58 2 18.79 2 14.79\"></path><path d=\"M21.98 6.79c0-3.19-1.6-4.79-4.79-4.79h-6.4C7.86 2 6.27 3.35 6.04 6.04c.24-.03.49-.04.75-.04h6.4c3.19 0 4.79 1.6 4.79 4.79v4c0 .26-.01.51-.04.75 2.69-.23 4.04-1.81 4.04-4.75\"></path><path d=\"M13.495 13.25h.01\"></path><path d=\"M9.995 13.25h.01\"></path><path d=\"M6.495 13.25h.01\"></path>","messages-2":"<path d=\"M13.17 2c-4.88 0-8.83 3.69-8.83 8.24 0 .26.01.51.04.76.89-.58 1.96-.91 3.12-.91 3.04 0 5.5 2.3 5.5 5.14 0 1.19-.44 2.29-1.18 3.16.44.06.89.09 1.35.09l4.19 2.49c.71.43 1.6-.15 1.5-.98l-.39-3.16c2.14-1.5 3.53-3.89 3.53-6.59 0-3.07-1.8-5.75-4.48-7.17\"></path><path d=\"M4.38 11c.89-.58 1.96-.91 3.12-.91 3.04 0 5.5 2.3 5.5 5.14 0 1.19-.44 2.29-1.18 3.16-.99 1.2-2.56 1.97-4.32 1.97l-2.61 1.55c-.44.27-1-.1-.94-.61l.25-1.97C2.86 18.4 2 16.91 2 15.23c0-.3.03-.59.08-.87\"></path>","messages-3":"<path d=\"M22 9.92v1.43c0 1.27-.42 2.34-1.17 3.08-.74.75-1.81 1.17-3.08 1.17v1.81c0 .68-.76 1.09-1.32.71l-.97-.64c.09-.31.13-.65.13-1.01V12.4c0-2.04-1.36-3.4-3.4-3.4H5.4c-.14 0-.27.01-.4.02V6.25C5 3.7 6.7 2 9.25 2h8.5C20.3 2 22 3.7 22 6.25\"></path><path d=\"M2 12.4c0-1.9 1.18-3.21 3-3.38.13-.01.26-.02.4-.02h6.79c2.04 0 3.4 1.36 3.4 3.4v4.07c0 .36-.04.7-.13 1.01-.37 1.47-1.59 2.39-3.27 2.39H9.47l-3.02 2.01a.671.671 0 0 1-1.05-.56v-1.45c-1.02 0-1.87-.34-2.46-.93-.6-.6-.94-1.45-.94-2.47\"></path>","messages":"<path d=\"M9.5 2c3.02 0 5.63 1.67 6.8 4.07.45.89.7 1.88.7 2.93 0 3.87-3.36 7-7.5 7l-.93 1.12-.55.66c-.47.56-1.37.44-1.68-.23L5 14.6C3.18 13.32 2 11.29 2 9c0-2.27 1.15-4.28 2.95-5.56\"></path><path d=\"M22 12.86c0 2.29-1.18 4.32-3 5.6l-1.34 2.95c-.31.67-1.21.8-1.68.23l-1.48-1.78c-2.42 0-4.58-1.07-5.93-2.74L9.5 16c4.14 0 7.5-3.13 7.5-7 0-1.05-.25-2.04-.7-2.93 1.63.37 3.04 1.24 4.06 2.43\"></path><path d=\"M7 9h5\"></path>","microphone-2":"<path d=\"M8 10.02v1.48c0 2.21 1.79 4 4 4s4-1.79 4-4V6c0-2.21-1.79-4-4-4S8 3.79 8 6\"></path><path d=\"M4.35 9.65v1.7C4.35 15.57 7.78 19 12 19c4.22 0 7.65-3.43 7.65-7.65v-1.7\"></path><path d=\"M10.61 6.43c.9-.33 1.88-.33 2.78 0\"></path><path d=\"M11.2 8.55c.53-.14 1.08-.14 1.61 0\"></path><path d=\"M12 19v3\"></path>","microphone-slash-1":"<path d=\"M16 6.3V6c0-2.21-1.79-4-4-4S8 3.79 8 6v5\"></path><path d=\"M9.04 14.19c.73.81 1.79 1.31 2.96 1.31 2.21 0 4-1.79 4-4V11\"></path><path d=\"M18.72 15.02c.6-1.09.93-2.34.93-3.67v-1.7\"></path><path d=\"M6.78 16.95A7.648 7.648 0 0 0 12 19c1.18 0 2.31-.27 3.31-.75\"></path><path d=\"M4.35 9.65v1.7c0 1.06.21 2.06.6 2.98\"></path><path d=\"M20.07 2.84L3.93 18.99\"></path><path d=\"M11 3v3\"></path><path d=\"M12 19v3\"></path>","microphone-slash":"<path d=\"M6 12v1c0 1.46.52 2.8 1.39 3.84\"></path><path d=\"M17.82 6.53A6.008 6.008 0 0 0 12 2C8.69 2 6 4.69 6 8\"></path><path d=\"M18 9.98V13a6.005 6.005 0 0 1-8.08 5.63\"></path><path d=\"M5.86 19.58A9 9 0 0 0 21 13v-2\"></path><path d=\"M21.5 2.99l-19 19\"></path><path d=\"M11.55 5.5V2.26\"></path><path d=\"M8.5 3.5v4\"></path>","microphone":"<path d=\"M6 12v1c0 3.31 2.69 6 6 6s6-2.69 6-6V8c0-3.31-2.69-6-6-6S6 4.69 6 8\"></path><path d=\"M3 11v2a9 9 0 0 0 18 0v-2\"></path><path d=\"M9.11 7.48a8 8 0 0 1 5.5 0\"></path><path d=\"M10.03 10.48c1.2-.33 2.47-.33 3.67 0\"></path>","microscope":"<path d=\"M14.04 4.52L11.83 6l3.2 4.78 5.66-3.79c.57-.38.72-1.16.34-1.72l-1.82-2.71c-.38-.57-1.16-.72-1.72-.34\"></path><path d=\"M12.174 6.48l-4.778 3.2 2.56 3.821 4.778-3.2-2.56-3.822z\"></path><path d=\"M5.83 15.9l3.95-2.64-2.24-3.34-3.95 2.64c-.46.31-.58.93-.27 1.39l1.13 1.68c.3.45.92.57 1.38.27z\"></path><path d=\"M12.05 12.2L7.56 22\"></path><path d=\"M12 12.2l4.44 9.8\"></path>","milk":"<path d=\"M6 13.98l3.89.02c.73 0 1.45.17 2.11.5.66.33 1.38.5 2.12.5H18v4c0 1.65-1.35 3-3 3H9c-1.65 0-3-1.35-3-3v-1.01\"></path><path d=\"M18 10.83V15h-3.88c-.74 0-1.46-.17-2.12-.5a4.71 4.71 0 0 0-2.11-.5L6 13.98v-3.15c0-.46.26-1.09.59-1.42l2.12-2.12c.18-.18.29-.44.29-.7V5h6v1.59c0 .26.11.52.29.7l2.12 2.12c.33.33.59.96.59 1.42z\"></path><path d=\"M18 16v-1\"></path><path d=\"M14.5 5h-5C8.67 5 8 4.32 8 3.5S8.67 2 9.5 2h5c.83 0 1.5.68 1.5 1.5S15.33 5 14.5 5z\"></path>","mini-music-sqaure":"<path d=\"M2 12.98V15c0 5 2 7 7 7h2\"></path><path d=\"M22 10V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M15.27 22a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z\"></path><path d=\"M22 19.6v-5.64c0-1.2-.75-1.37-1.52-1.16l-2.89.79c-.52.14-.89.56-.89 1.16v5.82\"></path><path d=\"M20.56 21.04a1.44 1.44 0 1 0-.001-2.88 1.44 1.44 0 0 0 0 2.88z\"></path><path d=\"M16.71 16.43L22 14.99\"></path>","minus-cirlce":"<path d=\"M14.99 12H16\"></path><path d=\"M8 12h4\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","minus-square":"<path d=\"M14.99 12H16\"></path><path d=\"M8 12h4\"></path><path d=\"M2 12.95V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","minus":"<path d=\"M16 12h2\"></path><path d=\"M6 12h5.66\"></path>","mirror":"<path d=\"M12 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8c0-2.71 1.35-5.11 3.41-6.55\"></path><path d=\"M16 22h2\"></path><path d=\"M6 22h7\"></path>","mirroring-screen":"<path d=\"M22 12.45V16c0 3-2 5-5 5h-1\"></path><path d=\"M2 9V8c0-3 2-5 5-5h10c3 0 5 2 5 5\"></path><path d=\"M3.691 11.71c4.62.59 8.01 3.99 8.61 8.61\"></path><path d=\"M2.621 15.07c3.39.43 5.88 2.93 6.32 6.32\"></path><path d=\"M1.98 18.86c1.69.22 2.94 1.46 3.16 3.16\"></path>","mobile-programming":"<path d=\"M8.93 2l.03 1.53c.02.81.69 1.47 1.5 1.47h3.02c.83 0 1.5-.68 1.5-1.5V2\"></path><path d=\"M17 17l-2 2 2 2\"></path><path d=\"M20 17l2 2-2 2\"></path><path d=\"M3 12.98V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v7\"></path><path d=\"M13 22H8c-3.5 0-5-2-5-5\"></path>","mobile":"<path d=\"M20 11.03V17c0 4-1 5-5 5H9c-4 0-5-1-5-5V7c0-4 1-5 5-5h6c4 0 5 1 5 5\"></path><path d=\"M14 5.5h-4\"></path><path d=\"M12 19.1a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1z\"></path>","money-2":"<path d=\"M2 12.53v2.97c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-7c0-3.5-2-5-5-5H7c-3 0-5 1.5-5 5V9h1c3 0 4-1 4-4V4\"></path><path d=\"M15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3\"></path><path d=\"M22 9h-1c-3 0-4-1-4-4V4\"></path><path d=\"M2 15h1c3 0 4 1 4 4v1\"></path><path d=\"M22 15h-1c-3 0-4 1-4 4v1\"></path>","money-3":"<path d=\"M2 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-2.97\"></path><path d=\"M15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3\"></path><path d=\"M19 7h-3\"></path><path d=\"M8 17H5\"></path>","money-4":"<path d=\"M2 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-2.97\"></path><path d=\"M15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3\"></path><path d=\"M8.5 6H7a2.5 2.5 0 0 0-2.5 2.5V10\"></path><path d=\"M15.5 6H17a2.5 2.5 0 0 1 2.5 2.5V10\"></path><path d=\"M8.5 18H7a2.5 2.5 0 0 1-2.5-2.5V14\"></path><path d=\"M15.5 18H17a2.5 2.5 0 0 0 2.5-2.5V14\"></path>","money-add":"<path d=\"M22 13.14V15c0 3.5-2 5-5 5H8.5\"></path><path d=\"M2 15.3V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5\"></path><path d=\"M14.5 12a2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 0 2.5 2.5\"></path><path d=\"M18.5 9.5v5\"></path><path d=\"M9 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 5 22a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 1 18c0-2.21 1.79-4 4-4s4 1.79 4 4z\"></path><path d=\"M6.49 17.98H3.51\"></path><path d=\"M5 16.52v2.99\"></path>","money-change":"<path d=\"M14.5 12a2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 0 2.5 2.5\"></path><path d=\"M22 13.14V15c0 3.5-2 5-5 5h-5\"></path><path d=\"M2 11V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5\"></path><path d=\"M18.5 9.5v5\"></path><path d=\"M2 15.5h5.34c.64 0 1.16.52 1.16 1.16v1.28\"></path><path d=\"M3.22 14.28L2 15.5l1.22 1.22\"></path><path d=\"M8.5 20.78H3.16c-.64 0-1.16-.52-1.16-1.16v-1.28\"></path><path d=\"M7.28 22l1.22-1.22-1.22-1.22\"></path>","money-forbidden":"<path d=\"M22 13.14V15c0 3.5-2 5-5 5H8.5\"></path><path d=\"M2 15.3V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5\"></path><path d=\"M14.5 12a2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 0 2.5 2.5\"></path><path d=\"M18.5 9.5v5\"></path><path d=\"M9 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 5 22a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 1 18c0-2.21 1.79-4 4-4s4 1.79 4 4z\"></path><path d=\"M7.75 15.25l-5.5 5.5\"></path>","money-recive":"<path d=\"M9.5 13.75c0 .97.75 1.75 1.67 1.75h1.88c.8 0 1.45-.68 1.45-1.53 0-.91-.4-1.24-.99-1.45l-3.01-1.05c-.59-.21-.99-.53-.99-1.45 0-.84.65-1.53 1.45-1.53h1.88c.92 0 1.67.78 1.67 1.75\"></path><path d=\"M12 7.5v9\"></path><path d=\"M17 3v4h4\"></path><path d=\"M22 2l-5 5\"></path><path d=\"M12 2C6.48 2 2 6.48 2 12c0 3.94 2.28 7.35 5.6 8.98\"></path><path d=\"M22 12c0 5.52-4.48 10-10 10\"></path>","money-remove":"<path d=\"M22 13.14V15c0 3.5-2 5-5 5H8.5\"></path><path d=\"M2 15.3V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5\"></path><path d=\"M14.5 12a2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 0 2.5 2.5\"></path><path d=\"M18.5 9.5v5\"></path><path d=\"M9 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 5 22a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 1 18c0-2.21 1.79-4 4-4s4 1.79 4 4z\"></path><path d=\"M6.069 19.04l-2.11-2.11\"></path><path d=\"M6.04 16.96l-2.11 2.11\"></path>","money-send":"<path d=\"M9.5 13.75c0 .97.75 1.75 1.67 1.75h1.88c.8 0 1.45-.68 1.45-1.53 0-.91-.4-1.24-.99-1.45l-3.01-1.05c-.59-.21-.99-.53-.99-1.45 0-.84.65-1.53 1.45-1.53h1.88c.92 0 1.67.78 1.67 1.75\"></path><path d=\"M12 7.5v9\"></path><path d=\"M12 2C6.48 2 2 6.48 2 12c0 3.94 2.28 7.35 5.6 8.98\"></path><path d=\"M22 12c0 5.52-4.48 10-10 10\"></path><path d=\"M22 6V2h-4\"></path><path d=\"M17 7l5-5\"></path>","money-tick":"<path d=\"M14.5 12a2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 0 2.5 2.5\"></path><path d=\"M18.5 9.5v5\"></path><path d=\"M9 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 5 22a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 1 18c0-2.21 1.79-4 4-4s4 1.79 4 4z\"></path><path d=\"M3.44 18l.99.99 2.13-1.97\"></path><path d=\"M22 13.14V15c0 3.5-2 5-5 5H8.5\"></path><path d=\"M2 15.3V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5\"></path>","money-time":"<path d=\"M14.5 12a2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 0 2.5 2.5\"></path><path d=\"M18.5 9.5v5\"></path><path d=\"M5 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8z\"></path><path d=\"M5.25 16.75v.93c0 .35-.18.68-.49.86L4 19\"></path><path d=\"M2 15.2V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v6c0 3.5-2 5-5 5H8.5\"></path>","money":"<path d=\"M2 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-2.97\"></path><path d=\"M15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3c.27 0 .53-.03.77-.1\"></path><path d=\"M5.5 9.5v5\"></path><path d=\"M18.5 9.5v5\"></path>","moneys":"<path d=\"M1.7 7.92c0-3.08 1.76-4.4 4.4-4.4h8.79c2.24 0 3.85.95 4.28 3.12.08.39.12.81.12 1.28v5.15c0 3.08-1.76 4.4-4.4 4.4H6.1c-.45 0-.88-.04-1.28-.13-.25-.04-.49-.11-.71-.19-1.5-.56-2.41-1.86-2.41-4.08V12\"></path><path d=\"M22.3 15.01v1.06c0 3.08-1.76 4.4-4.4 4.4H9.11c-.74 0-1.41-.1-1.99-.32-1.19-.44-2-1.35-2.29-2.81.4.09.83.13 1.28.13h8.79c2.64 0 4.4-1.32 4.4-4.4V7.92c0-.47-.04-.89-.12-1.28 1.91.39 3.12 1.73 3.12 4.28\"></path><path d=\"M13.14 10.5c0-1.46-1.18-2.64-2.64-2.64-1.46 0-2.64 1.18-2.64 2.64 0 1.46 1.18 2.64 2.64 2.64\"></path><path d=\"M4.78 8.3v4.4\"></path><path d=\"M16.219 8.3v4.4\"></path>","monitor-mobbile":"<path d=\"M2 6.74c0-3.37.84-4.21 4.21-4.21h10.53c3.37 0 4.21.84 4.21 4.21\"></path><path d=\"M10 16.95H6.21c-3.37 0-4.21-.84-4.21-4.21v-1.89\"></path><path d=\"M10 21.47v-4.52\"></path><path d=\"M2 12.95h8\"></path><path d=\"M6.74 21.47H10\"></path><path d=\"M22 12.8c0-2.37-.59-2.96-2.96-2.96h-3.55c-2.37 0-2.96.59-2.96 2.96v5.71c0 2.37.59 2.96 2.96 2.96h3.55c2.37 0 2.96-.59 2.96-2.96v-1.57\"></path><path d=\"M17.244 18.25h.01\"></path>","monitor-recorder":"<path d=\"M2 6.44C2 2.89 2.89 2 6.44 2H8\"></path><path d=\"M22 11.89v.89c0 3.56-.89 4.44-4.44 4.44H6.44c-3.55 0-4.44-.89-4.44-4.44v-1.99\"></path><path d=\"M12 17.22V22\"></path><path d=\"M2 13h20\"></path><path d=\"M7.5 22h9\"></path><path d=\"M17.86 9.37H13.1c-1.38 0-1.84-.92-1.84-1.84V4.01c0-1.1.9-2 2-2h4.6c1.02 0 1.84.82 1.84 1.84v3.68c0 1.02-.82 1.84-1.84 1.84z\"></path><path d=\"M20.91 7.92l-1.21-.85V4.31l1.21-.85c.6-.41 1.09-.16 1.09.57v3.33c0 .73-.49.98-1.09.56z\"></path>","monitor":"<path d=\"M22 10.63v2.15c0 3.56-.89 4.44-4.44 4.44H6.44c-3.55 0-4.44-.89-4.44-4.44V6.44C2 2.89 2.89 2 6.44 2h11.11C21.11 2 22 2.89 22 6.44\"></path><path d=\"M12 17.22V22\"></path><path d=\"M2 13h20\"></path><path d=\"M7.5 22h9\"></path>","moon":"<path d=\"M4.18 5.38a10.146 10.146 0 0 0-2.15 7.04c.36 5.15 4.73 9.34 9.96 9.57 3.69.16 6.99-1.56 8.97-4.27.82-1.11.38-1.85-.99-1.6-.67.12-1.36.17-2.08.14C13 16.06 9 11.97 8.98 7.14c-.01-1.3.26-2.53.75-3.65.54-1.24-.11-1.83-1.36-1.3\"></path>","more-2":"<path d=\"M9.84 7.16c0 1.19.97 2.16 2.16 2.16 1.19 0 2.16-.97 2.16-2.16C14.16 5.97 13.19 5 12 5\"></path><path d=\"M6.79 19c1.19 0 2.16-.97 2.16-2.16 0-1.19-.97-2.16-2.16-2.16-1.19 0-2.16.97-2.16 2.16 0 1.19.96 2.16 2.16 2.16z\"></path><path d=\"M17.21 19c1.19 0 2.16-.97 2.16-2.16 0-1.19-.97-2.16-2.16-2.16-1.19 0-2.16.97-2.16 2.16 0 1.19.97 2.16 2.16 2.16z\"></path>","more-circle":"<path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path><path d=\"M15.996 12h.01\"></path><path d=\"M11.995 12h.009\"></path><path d=\"M7.995 12h.008\"></path>","more-square":"<path d=\"M2 12.96V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M15.996 12h.01\"></path><path d=\"M11.995 12h.009\"></path><path d=\"M7.995 12h.008\"></path>","more":"<path d=\"M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"></path><path d=\"M19 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"></path><path d=\"M10 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2\"></path>","mouse-1":"<path d=\"M16.15 12.83l-1.73.58c-.48.16-.85.53-1.01 1.01l-.58 1.73c-.49 1.49-2.59 1.46-3.05-.03L7.83 9.84c-.38-1.25.77-2.4 2-2.02l6.29 1.95c1.49.47 1.51 2.57.03 3.06z\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","mouse-circle":"<path d=\"M20.96 17.84l-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L13.08 15c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9z\"></path><path d=\"M3.98 6.03A9.974 9.974 0 0 0 2 12c0 5.52 4.48 10 10 10\"></path><path d=\"M22 12c0-5.52-4.48-10-10-10-1.52 0-2.95.34-4.24.94\"></path>","mouse-square":"<path d=\"M2 13.02V15c0 5 2 7 7 7h3\"></path><path d=\"M22 12V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M20.96 17.84l-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L13.08 15c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9z\"></path>","mouse":"<path d=\"M4.5 13.63v.87c0 4.12 3.37 7.5 7.5 7.5 4.12 0 7.5-3.37 7.5-7.5v-5C19.5 5.37 16.13 2 12 2S4.5 5.37 4.5 9.5\"></path><path d=\"M12 11c-.83 0-1.5-.67-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5v2c0 .83-.68 1.5-1.5 1.5z\"></path><path d=\"M12 6V2\"></path>","music-circle":"<path d=\"M2.58 8.67a9.993 9.993 0 0 1 3.14-4.44\"></path><path d=\"M2 12c0 1.17.21 2.29.58 3.33\"></path><path d=\"M9.09 21.57c.92.28 1.9.43 2.91.43 5.52 0 10-4.48 10-10 0-.6-.06-1.19-.16-1.76\"></path><path d=\"M5.72 19.75c-.47-.38-.92-.8-1.32-1.26\"></path><path d=\"M20.24 6.34A9.982 9.982 0 0 0 12 2c-1.01 0-1.99.15-2.91.43\"></path><path d=\"M8.59 17.11a1.59 1.59 0 1 0 0-3.18 1.59 1.59 0 0 0 0 3.18z\"></path><path d=\"M16 14.46V8.25c0-1.32-.83-1.51-1.67-1.28l-3.18.87c-.58.16-.98.61-.98 1.28v6.4\"></path><path d=\"M14.41 16.05a1.59 1.59 0 1 0 0-3.18 1.59 1.59 0 0 0 0 3.18z\"></path><path d=\"M10.18 10.76L16 9.17\"></path>","music-dashboard":"<path d=\"M2 9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7H9c-5 0-7-2-7-7v-1.41\"></path><path d=\"M7 2.5v19\"></path><path d=\"M11.47 16.8a1.49 1.49 0 1 0 0-2.98 1.49 1.49 0 0 0 0 2.98z\"></path><path d=\"M18.43 14.31V8.48c0-1.24-.78-1.41-1.57-1.2l-2.98.81c-.54.15-.92.58-.92 1.2v6.01\"></path><path d=\"M16.931 15.8a1.49 1.49 0 1 0 0-2.98 1.49 1.49 0 0 0 0 2.98z\"></path><path d=\"M12.96 11.04l5.47-1.49\"></path>","music-filter":"<path d=\"M2 3h3\"></path><path d=\"M8 3h14\"></path><path d=\"M2 9h9\"></path><path d=\"M2 15h6\"></path><path d=\"M2 21h4\"></path><path d=\"M11.84 22a2.18 2.18 0 1 0 0-4.36 2.18 2.18 0 0 0 0 4.36z\"></path><path d=\"M22 18.37V9.86c0-1.81-1.14-2.06-2.29-1.75L15.36 9.3c-.79.22-1.34.84-1.34 1.75v8.77\"></path><path d=\"M19.82 20.55a2.18 2.18 0 1 0 0-4.36 2.18 2.18 0 0 0 0 4.36z\"></path><path d=\"M20.371 11.87l1.63-.45\"></path><path d=\"M14.02 13.6l2.35-.64\"></path>","music-library-2":"<path d=\"M2 13c0-2.65 1.15-4.15 3-4.72C5.6 8.09 6.27 8 7 8h10c.73 0 1.4.09 2 .28 1.85.57 3 2.07 3 4.72v4c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5\"></path><path d=\"M19 7v1.28c-.6-.19-1.27-.28-2-.28H7c-.73 0-1.4.09-2 .28V7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2z\"></path><path d=\"M16 3.51V5H8V3.51C8 2.68 8.68 2 9.51 2h4.98c.83 0 1.51.68 1.51 1.51z\"></path><path d=\"M9.07 19.45a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64z\"></path><path d=\"M15.25 17.25v-5.17c0-1.1-.69-1.26-1.39-1.06l-2.65.72c-.48.13-.81.51-.81 1.06v5.33\"></path><path d=\"M13.93 18.57a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64z\"></path><path d=\"M10.4 14.35l4.85-1.32\"></path>","music-play":"<path d=\"M2.02 12.22C1.91 6.6 6.35 2.05 11.97 2.05c5.62 0 10.05 4.55 10.05 10.06v6.16c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.62-3.57-3.57v-2.81c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v3.03\"></path><path d=\"M5.48 18.49v-2.92c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v2.81c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.63-3.57-3.57v-2.37\"></path><path d=\"M11.54 8.19l-.46-.92c-.11-.21-.41-.22-.52-.01l-.84 1.55c-.1.19-.3.31-.52.31h-.73\"></path><path d=\"M15.53 9.12h-.81a.61.61 0 0 0-.53.32l-.75 1.5c-.11.22-.42.22-.53 0\"></path>","music-playlist":"<path d=\"M2 12c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v5c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-.83\"></path><path d=\"M16 4.5h2\"></path><path d=\"M6 4.5h7.17\"></path><path d=\"M9 2h6\"></path><path d=\"M8.89 19.11a1.37 1.37 0 1 0 0-2.74 1.37 1.37 0 0 0 0 2.74z\"></path><path d=\"M15.28 16.83v-5.35c0-1.14-.71-1.3-1.44-1.1l-2.74.75c-.5.14-.84.53-.84 1.1v5.51\"></path><path d=\"M13.91 18.2a1.37 1.37 0 1 0-.001-2.74 1.37 1.37 0 0 0 0 2.74z\"></path><path d=\"M10.26 13.83l5.02-1.37\"></path>","music-square-add":"<path d=\"M2 8.65C2 3.9 3.9 2 8.65 2h5.7C19.1 2 21 3.9 21 8.65v5.7c0 .34-.01.67-.03.98A3.944 3.944 0 0 0 18 14c-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.2.34.46.65.76.91-.31.02-.64.03-.99.03h-5.7C3.9 21 2 19.1 2 14.35v-1.38\"></path><path d=\"M6.72 14.42a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9z\"></path><path d=\"M13.48 12V6.34c0-1.21-.76-1.37-1.52-1.16l-2.89.79c-.52.14-.89.56-.89 1.16v5.84\"></path><path d=\"M12.03 13.45a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9z\"></path><path d=\"M8.17 8.83l5.31-1.45\"></path><path d=\"M22 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 18 22a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 14 18c0-2.21 1.79-4 4-4s4 1.79 4 4z\"></path><path d=\"M19.49 17.98h-2.98\"></path><path d=\"M18 16.52v2.99\"></path>","music-square-remove":"<path d=\"M2 8.65C2 3.9 3.9 2 8.65 2h5.7C19.1 2 21 3.9 21 8.65v5.7c0 .34-.01.67-.03.98A3.944 3.944 0 0 0 18 14c-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.2.34.46.65.76.91-.31.02-.64.03-.99.03h-5.7C3.9 21 2 19.1 2 14.35v-1.38\"></path><path d=\"M6.72 14.42a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9z\"></path><path d=\"M13.47 12V6.34c0-1.21-.76-1.37-1.52-1.16l-2.89.79c-.52.14-.89.56-.89 1.16v5.84\"></path><path d=\"M12.03 13.45a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9z\"></path><path d=\"M8.17 8.83l5.3-1.45\"></path><path d=\"M22 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 18 22a3.92 3.92 0 0 1-2.66-1.03c-.3-.26-.56-.57-.76-.91A3.92 3.92 0 0 1 14 18c0-2.21 1.79-4 4-4 1.18 0 2.25.51 2.97 1.33.64.71 1.03 1.65 1.03 2.67z\"></path><path d=\"M19.07 19.04l-2.12-2.11\"></path><path d=\"M19.05 16.96l-2.12 2.11\"></path>","music-square-search":"<path d=\"M2 8.65C2 3.9 3.9 2 8.65 2h5.7C19.1 2 21 3.9 21 8.65v3.7\"></path><path d=\"M12.35 21h-3.7C3.9 21 2 19.1 2 14.35v-1.38\"></path><path d=\"M6.72 14.42a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9z\"></path><path d=\"M13.48 12V6.34c0-1.21-.76-1.37-1.52-1.16l-2.89.79c-.52.14-.89.56-.89 1.16v5.84\"></path><path d=\"M12.03 13.45a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9z\"></path><path d=\"M8.17 8.83l5.31-1.45\"></path><path d=\"M17.94 21.28a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z\"></path><path d=\"M21.74 21.88l-1-1\"></path>","music-square":"<path d=\"M2 12.99V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M8.42 17.11a1.57 1.57 0 1 0 0-3.14 1.57 1.57 0 0 0 0 3.14z\"></path><path d=\"M15.75 14.49V8.35c0-1.31-.82-1.49-1.65-1.26l-3.14.86c-.57.16-.96.61-.96 1.26v6.34\"></path><path d=\"M14.18 16.06a1.57 1.57 0 1 0 0-3.14 1.57 1.57 0 0 0 0 3.14z\"></path><path d=\"M9.99 11.04l5.76-1.57\"></path>","music":"<path d=\"M6.28 22a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24z\"></path><path d=\"M20.84 7.96V4.6c0-2.6-1.63-2.96-3.28-2.51l-6.24 1.7C10.18 4.1 9.4 5 9.4 6.3v12.57\"></path><path d=\"M20.84 16.8V12\"></path><path d=\"M17.72 19.92a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24z\"></path><path d=\"M9.4 9.52L20.84 6.4\"></path>","musicnote":"<path d=\"M4.11 16.98c-.09.32-.14.67-.14 1.02 0 2.21 1.79 4 4 4s4-1.79 4-4a3.999 3.999 0 0 0-5.02-3.87\"></path><path d=\"M11.97 18V4\"></path><path d=\"M14.61 2.11l4.42 1.47c1.07.36 1.95 1.57 1.95 2.7v1.17c0 1.53-1.18 2.38-2.63 1.9l-4.42-1.47c-1.07-.36-1.95-1.57-1.95-2.7V4c-.01-1.52 1.18-2.38 2.63-1.89z\"></path>","next":"<path d=\"M11.73 7.39L7.58 5c-1.7-.98-3.83.24-3.83 2.21v9.57c0 1.96 2.13 3.19 3.83 2.21l4.15-2.39 4.15-2.4c1.7-.98 1.7-3.43 0-4.41\"></path><path d=\"M20.24 18.18V17\"></path><path d=\"M20.24 14V5.82\"></path>","note-1":"<path d=\"M8 2v3\"></path><path d=\"M16 2v3\"></path><path d=\"M7 13h8\"></path><path d=\"M7 17h5\"></path><path d=\"M3 9.65c0-4.7 1.67-5.96 5-6.15h8c3.33.18 5 1.45 5 6.15v6.18c0 4.12-1 6.18-6 6.18H9c-5 0-6-2.06-6-6.18v-2.02\"></path>","note-2":"<path d=\"M15.06 19.39c-.62.42-1.4.77-2.35 1.08l-1.58.52c-3.97 1.28-6.06.21-7.35-3.76L2.5 13.28c-1.28-3.97-.22-6.07 3.75-7.35l1.58-.52c.41-.13.8-.24 1.17-.31-.3.61-.54 1.35-.74 2.2l-.98 4.19c-.98 4.18.31 6.24 4.48 7.23l1.68.4c.58.14 1.12.23 1.62.27z\"></path><path d=\"M12.64 8.53l4.85 1.23\"></path><path d=\"M11.66 12.4l2.9.74\"></path><path d=\"M20.96 5.1c1.08 1.2 1.27 2.92.7 5.34l-.98 4.18c-.84 3.61-2.5 5.07-5.62 4.77-.5-.04-1.04-.13-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19c.2-.85.44-1.59.74-2.2 1.17-2.42 3.16-3.07 6.5-2.28l1.67.39\"></path>","note-21":"<path d=\"M20 15.04V18c0 3-1.79 4-4 4H8c-2.21 0-4-1-4-4V8.25c0-3.25 1.79-4 4-4 0 .62.25 1.18.66 1.59.41.41.97.66 1.59.66h3.5C14.99 6.5 16 5.49 16 4.25c2.21 0 4 .75 4 4v1.82\"></path><path d=\"M16 4.25c0 1.24-1.01 2.25-2.25 2.25h-3.5c-.62 0-1.18-.25-1.59-.66C8.25 5.43 8 4.87 8 4.25 8 3.01 9.01 2 10.25 2h3.5c.62 0 1.18.25 1.59.66.41.41.66.97.66 1.59z\"></path><path d=\"M8 13h4\"></path><path d=\"M8 17h8\"></path>","note-add":"<path d=\"M9.56 18v-5\"></path><path d=\"M12 15.5H7\"></path><path d=\"M8 2v3\"></path><path d=\"M16 2v3\"></path><path d=\"M2.94 9.83c-.1-4.7 1.55-6 4.87-6.25l8-.16c3.34.12 5.03 1.35 5.13 6.05l.13 6.17c.08 4.12-.87 6.19-5.87 6.3l-6 .12c-5 .1-6.04-1.94-6.12-6.05l-.04-2.12\"></path>","note-favorite":"<path d=\"M8 2v3\"></path><path d=\"M16 2v3\"></path><path d=\"M3 8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v5.13a5.19 5.19 0 0 0-3.25-1.13c-1.23 0-2.38.43-3.28 1.16a5.188 5.188 0 0 0-1.97 4.09c0 .98.28 1.92.76 2.7.37.61.85 1.14 1.42 1.55H8c-3.5 0-5-2-5-5v-4.43\"></path><path d=\"M7 11h6\"></path><path d=\"M7 16h2.62\"></path><path d=\"M23 17.75c0 .98-.28 1.92-.76 2.7-.28.48-.63.9-1.04 1.24-.92.82-2.12 1.31-3.45 1.31-1.15 0-2.21-.37-3.07-1-.57-.41-1.05-.94-1.42-1.55-.48-.78-.76-1.72-.76-2.7 0-1.65.76-3.14 1.97-4.09.9-.73 2.05-1.16 3.28-1.16s2.36.42 3.25 1.13c1.22.96 2 2.45 2 4.12z\"></path><path d=\"M17.75 20.25a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1 2.5 2.5z\"></path>","note-remove":"<path d=\"M7 14h5\"></path><path d=\"M7 5.96L3.25 2.21\"></path><path d=\"M6.96 2.25L3.21 6\"></path><path d=\"M7 10h8\"></path><path d=\"M21 12v4\"></path><path d=\"M10 2h6c3.33.18 5 1.41 5 5.99\"></path><path d=\"M3 9.01v6.97C3 19.99 4 22 9 22h6\"></path><path d=\"M21 16l-6 6v-3c0-2 1-3 3-3h3z\"></path>","note-square":"<path d=\"M2 13.01V15c0 5 2 7 7 7h2\"></path><path d=\"M22 10V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M15.51 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path><path d=\"M17.51 20v-6.99\"></path><path d=\"M18.82 12.07l2.21.74c.53.18.97.78.97 1.35v.59c0 .76-.59 1.19-1.31.95l-2.21-.74c-.53-.18-.97-.78-.97-1.35v-.59c0-.77.59-1.19 1.31-.95z\"></path>","note-text":"<path d=\"M8 2v3\"></path><path d=\"M16 2v3\"></path><path d=\"M3 8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5v-4.25\"></path><path d=\"M8 11h8\"></path><path d=\"M8 16h4\"></path>","note":"<path d=\"M20.96 5.1c1.08 1.2 1.27 2.92.7 5.34l-.98 4.18c-.84 3.61-2.5 5.07-5.62 4.77-.5-.04-1.04-.13-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19c.2-.85.44-1.59.74-2.2 1.17-2.42 3.16-3.07 6.5-2.28l1.67.39\"></path><path d=\"M15.06 19.39c-.62.42-1.4.77-2.35 1.08l-1.58.52c-3.97 1.28-6.06.21-7.35-3.76L2.5 13.28c-1.28-3.97-.22-6.07 3.75-7.35l1.58-.52c.41-.13.8-.24 1.17-.31-.3.61-.54 1.35-.74 2.2l-.98 4.19c-.98 4.18.31 6.24 4.48 7.23l1.68.4c.58.14 1.12.23 1.62.27z\"></path>","notification-1":"<path d=\"M18.02 11.8V8.91c0-3.3-2.7-6-6-6-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06L4.3 15.77c-.71 1.18-.22 2.49 1.08 2.93 4.31 1.44 8.96 1.44 13.27 0 1.21-.4 1.74-1.83 1.08-2.93\"></path><path d=\"M13.87 3.2a6.754 6.754 0 0 0-3.7 0c.29-.74 1.01-1.26 1.85-1.26.84 0 1.56.52 1.85 1.26z\"></path><path d=\"M15.02 19.06c0 1.65-1.35 3-3 3-.82 0-1.58-.34-2.12-.88a3.01 3.01 0 0 1-.88-2.12\"></path>","notification-bing":"<path d=\"M12 6.44v3.33\"></path><path d=\"M20.59 15.17c.73 1.22.15 2.8-1.2 3.25a23.34 23.34 0 0 1-14.73 0c-1.44-.48-1.99-1.94-1.2-3.25l1.27-2.12c.35-.58.63-1.61.63-2.28v-2.1A6.66 6.66 0 0 1 12.02 2c3.66 0 6.66 3 6.66 6.66v2.1c0 .18.02.38.05.59\"></path><path d=\"M15.33 18.82c0 1.83-1.5 3.33-3.33 3.33-.91 0-1.75-.38-2.35-.98-.6-.6-.98-1.44-.98-2.35\"></path>","notification-circle":"<path d=\"M3.02 16.4A9.976 9.976 0 0 0 12 22c5.52 0 10-4.48 10-10 0-.68-.07-1.35-.2-1.99\"></path><path d=\"M14.02 2.2C13.36 2.07 12.69 2 12 2 6.48 2 2 6.48 2 12\"></path><path d=\"M19 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3c0-.36-.06-.7-.18-1.01\"></path>","notification-favorite":"<path d=\"M19 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3c0-.36-.06-.7-.18-1.01\"></path><path d=\"M6.81 14.93c-.35-1.1.06-2.47 1.22-2.84.61-.2 1.36-.03 1.79.56.4-.61 1.18-.75 1.78-.56 1.16.37 1.57 1.74 1.22 2.84-.55 1.75-2.47 2.66-3 2.66-.54-.01-2.44-.9-3.01-2.66z\"></path><path d=\"M2 14.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-5\"></path><path d=\"M14 2H9C4 2 2 4 2 9v2\"></path>","notification-status":"<path d=\"M7 13h5\"></path><path d=\"M7 17h9\"></path><path d=\"M19 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3c0-.36-.06-.7-.18-1.01\"></path><path d=\"M2 14.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-5\"></path><path d=\"M14 2H9C4 2 2 4 2 9v2\"></path>","notification":"<path d=\"M19 2c-1.66 0-3 1.34-3 3s1.34 3 3 3a2.996 2.996 0 0 0 2.83-3.99\"></path><path d=\"M2 14.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-5\"></path><path d=\"M14 2H9C4 2 2 4 2 9v2\"></path>","omega-circle":"<path d=\"M17 16.5h-3.1l1.62-1.79c.8-.89 1.24-2.02 1.24-3.18 0-1.2-.5-2.35-1.39-3.2C14.48 7.48 13.27 7 12 7c-1.26 0-2.47.48-3.37 1.33-.89.85-1.39 2-1.39 3.2 0 1.17.44 2.3 1.24 3.18l1.62 1.79H7\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","omega-square":"<path d=\"M2 12.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M17 16.75h-3.1l1.62-1.79c.8-.89 1.24-2.02 1.24-3.18 0-1.2-.5-2.35-1.39-3.2-.89-.85-2.1-1.33-3.37-1.33-1.26 0-2.47.48-3.37 1.33-.89.85-1.39 2-1.39 3.2 0 1.17.44 2.3 1.24 3.18l1.62 1.79H7\"></path>","paintbucket":"<path d=\"M15 4.33c-2.59-2.59-3.72-1.94-5.66 0L3.77 9.9c-2.39 2.39-2.59 3.06 0 5.66l3.46 3.46c2.43 2.43 3.26 2.39 5.66 0l5.57-5.57c1.94-1.94 2.43-3.23 0-5.66\"></path><path d=\"M19.2 16.79l-.66 1.09c-.93 1.55-.21 2.82 1.6 2.82s2.53-1.27 1.6-2.82l-.66-1.09c-.52-.86-1.37-.86-1.88 0z\"></path><path d=\"M2 12.24a33.319 33.319 0 0 1 17-.13l.5.13\"></path>","paperclip-2":"<path d=\"M5.76 8.81l-1.21 1.21c-2.34 2.34-2.34 6.14 0 8.49\"></path><path d=\"M12.33 12.15l-2.47 2.47a3.495 3.495 0 0 0 0 4.95 3.495 3.495 0 0 0 4.95 0l3.89-3.89a7.007 7.007 0 0 0 0-9.9 7.007 7.007 0 0 0-9.9 0\"></path>","paperclip":"<path d=\"M4.97 14v2c0 3.31 2.69 6 6 6\"></path><path d=\"M11.97 12v3.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5V10c0-3.87-3.13-7-7-7s-7 3.13-7 7\"></path>","password-check":"<path d=\"M11.02 19.5H7.5c-.62 0-1.17-.02-1.66-.09-2.63-.29-3.34-1.53-3.34-4.91v-5c0-3.38.71-4.62 3.34-4.91.49-.07 1.04-.09 1.66-.09h3.46\"></path><path d=\"M21.5 13.34v1.16c0 3.38-.71 4.62-3.34 4.91-.49.07-1.04.09-1.66.09h-1.48\"></path><path d=\"M15.02 4.5h1.48c.62 0 1.17.02 1.66.09 2.63.29 3.34 1.53 3.34 4.91\"></path><path d=\"M15 2v20\"></path><path d=\"M11.495 12h.009\"></path><path d=\"M7.094 12h.01\"></path>","path-2":"<path d=\"M9.87 22h4.29c1.62 0 2.69-1.16 2.37-2.57l-.69-3.08H8.2l-.69 3.08C7.2 20.76 8.34 22 9.87 22z\"></path><path d=\"M18.77 13.74c1.64-1.46 1.71-2.48.41-4.13l-5.19-6.58c-1.09-1.38-2.87-1.38-3.97 0L4.84 9.61c-1.3 1.65-1.3 2.72.41 4.13l2.94 2.61\"></path><path d=\"M12.01 2.67v4.3\"></path>","path-square":"<path d=\"M16.75 9.12L14.9 7.27c-.7-.7-1.66-.66-2.13.08l-1.03 1.63 3.29 3.29 1.63-1.03c.71-.44.75-1.47.09-2.12z\"></path><path d=\"M11.74 8.98l-2.39-.14c-1.34-.08-1.8.33-1.95 1.6l-.6 5.07c-.13 1.07.64 1.83 1.71 1.71l5.07-.6c1.27-.15 1.73-.61 1.6-1.95l-.14-2.39\"></path><path d=\"M7.49 16.52l1.85-1.85\"></path><path d=\"M2 13.03V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","path":"<path d=\"M19.79 7.27l-3.03-3.03c-1.15-1.15-2.72-1.09-3.49.14l-1.69 2.67 5.4 5.4 2.67-1.69c1.15-.73 1.22-2.41.14-3.49z\"></path><path d=\"M7.65 6.81c-2.19-.13-2.96.54-3.2 2.63l-.98 8.32c-.21 1.75 1.06 3.01 2.8 2.8l8.32-.98c2.09-.25 2.85-1.01 2.63-3.2l-.23-3.93\"></path><path d=\"M4.61 19.42l3.03-3.04\"></path>","pause-circle":"<path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path><path d=\"M10.75 14.43V9.37c0-.48-.2-.67-.71-.67H8.75c-.51 0-.71.19-.71.67v5.06c0 .48.2.67.71.67h1.29c.51 0 .71-.19.71-.67z\"></path><path d=\"M16.03 14.43V9.37c0-.48-.2-.67-.71-.67h-1.29c-.51 0-.71.19-.71.67v5.06c0 .48.2.67.71.67\"></path>","pause":"<path d=\"M5.01 3C3.57 3 3 3.54 3 4.89v14.22C3 20.46 3.57 21 5.01 21h3.63c1.43 0 2.01-.54 2.01-1.89V4.89c0-1.35-.57-1.89-2.01-1.89\"></path><path d=\"M18.99 21c1.43 0 2.01-.54 2.01-1.89V4.89C21 3.54 20.43 3 18.99 3h-3.63c-1.43 0-2.01.54-2.01 1.89v14.22c0 1.35.57 1.89 2.01 1.89\"></path>","pen-add":"<path d=\"M18.02 4.86c-1.2-1.2-2.85-1.14-3.66.15l-1.77 2.8 5.67 5.67 2.8-1.77c1.21-.76 1.28-2.53.14-3.66\"></path><path d=\"M11.29 21.48l-4.27.5c-1.84.21-3.16-1.11-2.94-2.94l.98-8.28\"></path><path d=\"M18.25 13.47l.24 4.12c.23 2.3-.57 3.1-2.75 3.36\"></path><path d=\"M12.58 7.81l-1.75-.11\"></path><path d=\"M5.281 20.78l3.18-3.19\"></path><path d=\"M11 6.5c0 .41-.06.82-.17 1.2a4.455 4.455 0 0 1-1.37 2.18C8.67 10.58 7.64 11 6.5 11c-.51 0-.99-.08-1.44-.24a4.466 4.466 0 0 1-2.41-1.94A4.5 4.5 0 0 1 2 6.5c0-1.42.65-2.69 1.69-3.51A4.494 4.494 0 0 1 11 6.5z\"></path><path d=\"M6.521 8.18V4.82\"></path><path d=\"M8.16 6.5H4.8\"></path>","pen-close":"<path d=\"M18.02 4.86c-1.2-1.2-2.85-1.14-3.66.15l-1.77 2.8 5.67 5.67 2.8-1.77c1.21-.76 1.28-2.53.14-3.66\"></path><path d=\"M11.29 21.48l-4.27.5c-1.84.21-3.16-1.11-2.94-2.94l.98-8.28\"></path><path d=\"M18.25 13.47l.24 4.12c.23 2.3-.57 3.1-2.75 3.36\"></path><path d=\"M12.58 7.81l-1.75-.11\"></path><path d=\"M5.281 20.78l3.18-3.19\"></path><path d=\"M11 6.5c0 .41-.06.82-.17 1.2a4.455 4.455 0 0 1-1.37 2.18C8.67 10.58 7.64 11 6.5 11c-.51 0-.99-.08-1.44-.24a4.466 4.466 0 0 1-2.41-1.94A4.5 4.5 0 0 1 2 6.5c0-1.42.65-2.69 1.69-3.51A4.494 4.494 0 0 1 11 6.5z\"></path><path d=\"M7.7 7.68L5.32 5.3\"></path><path d=\"M7.68 5.32L5.3 7.7\"></path>","pen-remove":"<path d=\"M18.02 4.86c-1.2-1.2-2.85-1.14-3.66.15l-1.77 2.8 5.67 5.67 2.8-1.77c1.21-.76 1.28-2.53.14-3.66\"></path><path d=\"M11.29 21.48l-4.27.5c-1.84.21-3.16-1.11-2.94-2.94l.98-8.28\"></path><path d=\"M18.25 13.47l.24 4.12c.23 2.3-.57 3.1-2.75 3.36\"></path><path d=\"M12.58 7.81l-1.75-.11\"></path><path d=\"M5.281 20.78l3.18-3.19\"></path><path d=\"M11 6.5c0 .41-.06.82-.17 1.2a4.455 4.455 0 0 1-1.37 2.18C8.67 10.58 7.64 11 6.5 11c-.51 0-.99-.08-1.44-.24a4.466 4.466 0 0 1-2.41-1.94A4.5 4.5 0 0 1 2 6.5c0-1.42.65-2.69 1.69-3.51A4.494 4.494 0 0 1 11 6.5z\"></path><path d=\"M8.16 6.5H4.8\"></path>","pen-tool-2":"<path d=\"M10.751 22.5h2.52c.96 0 1.58-.68 1.4-1.51l-.41-1.81h-4.5l-.41 1.81c-.18.78.5 1.51 1.4 1.51z\"></path><path d=\"M14.22 12.67l-1.05-1.33c-.64-.81-1.69-.81-2.33 0l-3.05 3.87c-.77.97-.77 1.6.24 2.43l1.73 1.54\"></path><path d=\"M14.262 19.17l1.73-1.54c.97-.86 1.01-1.46.24-2.43\"></path><path d=\"M12.012 11.12v2.53\"></path><path d=\"M12.52 5h-1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1z\"></path><path d=\"M3.27 14.17h1c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1z\"></path><path d=\"M20.73 14.17h-1c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1z\"></path><path d=\"M3.75 11.17c0-1.97.74-3.76 1.96-5.12\"></path><path d=\"M10.52 3.56a8.2 8.2 0 0 0-1.85.45\"></path><path d=\"M20.25 11.17c0-3.92-2.94-7.14-6.73-7.61\"></path>","pen-tool":"<path d=\"M11.15 5.19l-.78-.78c-.47-.47-.47-1.23 0-1.7l.78-.78c.47-.47 1.23-.47 1.7 0l.78.78c.47.47.47 1.23 0 1.7l-.78.78c-.47.47-1.23.47-1.7 0z\"></path><path d=\"M19.45 9.81h1.1c.66 0 1.2.54 1.2 1.2v1.1c0 .66-.54 1.2-1.2 1.2h-1.1c-.66 0-1.2-.54-1.2-1.2v-1.1c0-.66.54-1.2 1.2-1.2z\"></path><path d=\"M4.55 9.81h-1.1c-.66 0-1.2.54-1.2 1.2v1.1c0 .66.54 1.2 1.2 1.2h1.1c.66 0 1.2-.54 1.2-1.2v-1.1c0-.66-.54-1.2-1.2-1.2z\"></path><path d=\"M18.54 10.1l-5.3-5.3\"></path><path d=\"M5.46 10.1l2.65-2.65\"></path><path d=\"M10.751 22.5h2.52c.96 0 1.58-.68 1.4-1.51l-.41-1.81h-4.5l-.41 1.81c-.18.78.5 1.51 1.4 1.51z\"></path><path d=\"M14.22 12.67l-1.05-1.33c-.64-.81-1.69-.81-2.33 0l-3.05 3.87c-.77.97-.77 1.6.24 2.43l1.73 1.54\"></path><path d=\"M14.262 19.17l1.73-1.54c.97-.86 1.01-1.46.24-2.43\"></path><path d=\"M12.012 11.12v2.53\"></path>","people":"<path d=\"M18 7.16a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58A2.589 2.589 0 0 1 18 7.16z\"></path><path d=\"M16.97 14.44c1.37.23 2.88-.01 3.94-.72 1.41-.94 1.41-2.48 0-3.42-1.07-.71-2.6-.95-3.97-.71\"></path><path d=\"M5.969 7.16c.06-.01.13-.01.19 0a2.573 2.573 0 0 0 2.48-2.58c0-1.43-1.15-2.58-2.58-2.58a2.58 2.58 0 0 0-2.58 2.58c.01 1.4 1.11 2.53 2.49 2.58z\"></path><path d=\"M7 14.44c-1.37.23-2.88-.01-3.94-.72-1.41-.94-1.41-2.48 0-3.42 1.07-.71 2.6-.95 3.97-.71\"></path><path d=\"M12 14.63a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58c-.01 1.4-1.11 2.54-2.49 2.58z\"></path><path d=\"M14.91 17.78c-1.59-1.06-4.22-1.06-5.82 0-1.41.94-1.41 2.48 0 3.42 1.6 1.07 4.22 1.07 5.82 0\"></path>","percentage-circle":"<path d=\"M8.32 15.27l6.54-6.54\"></path><path d=\"M8.73 10.37a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46z\"></path><path d=\"M15.269 16.09a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46z\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","percentage-square":"<path d=\"M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M8.32 15.27l6.54-6.54\"></path><path d=\"M8.73 10.37a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46z\"></path><path d=\"M15.269 16.09a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46z\"></path>","personalcard":"<path d=\"M2 8c0-4 1-5 5-5h10c4 0 5 1 5 5v8c0 4-1 5-5 5H7c-4 0-5-1-5-5v-3.6\"></path><path d=\"M14 8h5\"></path><path d=\"M15 12h4\"></path><path d=\"M17 16h2\"></path><path d=\"M8.5 11.29a1.81 1.81 0 1 0 0-3.62 1.81 1.81 0 0 0 0 3.62z\"></path><path d=\"M12 16.33a3.02 3.02 0 0 0-2.74-2.72 7.72 7.72 0 0 0-1.52 0A3.03 3.03 0 0 0 5 16.33\"></path>","pet":"<path d=\"M4.41 16.75C4.17 19.64 6.35 22 9.25 22h4.79c3.26 0 5.5-2.63 4.96-5.85-.57-3.38-3.83-6.15-7.26-6.15-2.28 0-4.4 1.14-5.77 2.87\"></path><path d=\"M10.47 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z\"></path><path d=\"M17.3 8.7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path><path d=\"M21 12.7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z\"></path><path d=\"M3.97 10.7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path>","pharagraphspacing":"<path d=\"M3 2h18\"></path><path d=\"M12 6v12\"></path><path d=\"M14.83 7.72L12 4.89 9.17 7.72\"></path><path d=\"M14.83 15.89L12 18.72l-2.83-2.83\"></path><path d=\"M10.05 22H21\"></path><path d=\"M3 22h2.98\"></path>","picture-frame":"<path d=\"M22 11V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7\"></path><path d=\"M9 2l4.95 20\"></path><path d=\"M11.53 12.22L2 15\"></path>","play-add":"<path d=\"M23 19c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 15 19c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 23 19z\"></path><path d=\"M20.49 18.98h-2.98\"></path><path d=\"M19 17.52v2.99\"></path><path d=\"M7.97 2.85C9.2 2.3 10.57 2 12 2c5.52 0 10 4.48 10 10 0 1.31-.25 2.57-.72 3.72\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10 1.32 0 2.58-.26 3.73-.73\"></path>","play-circle":"<path d=\"M14.91 14.12c1.8-1.04 1.8-2.74 0-3.78l-1.45-.84-1.45-.84c-1.8-1.04-3.27-.19-3.27 1.89v3.34c0 1.66.94 2.54 2.24 2.29\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","play-cricle":"<path d=\"M19.07 19.07c3.91-3.91 3.91-10.24 0-14.14\"></path><path d=\"M4.93 4.93c-3.91 3.91-3.91 10.24 0 14.14\"></path><path d=\"M8.7 21.41c1.07.37 2.18.55 3.3.55 1.12-.01 2.23-.18 3.3-.55\"></path><path d=\"M8.7 2.59c1.07-.37 2.18-.55 3.3-.55 1.12 0 2.23.18 3.3.55\"></path><path d=\"M8.74 10.33c0-2.08 1.47-2.93 3.27-1.89l1.45.84 1.45.84c1.8 1.04 1.8 2.74 0 3.78l-1.45.84-1.45.84c-1.8 1.04-3.27.19-3.27-1.89\"></path>","play-remove":"<path d=\"M9.38 12v-1.39c0-1.72 1.22-2.43 2.71-1.57l1.2.69 1.2.69c1.49.86 1.49 2.27 0 3.13l-1.2.69-1.2.69c-1.49.86-2.71.16-2.71-1.57V12z\"></path><path d=\"M20.07 20.04l-2.12-2.11\"></path><path d=\"M20.05 17.96l-2.12 2.11\"></path><path d=\"M23 19c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.93 3.93 0 0 1-3.27-1.73c-.06-.07-.11-.14-.15-.21A3.92 3.92 0 0 1 15 19c0-1.26.58-2.39 1.5-3.12.69-.55 1.56-.88 2.5-.88.84 0 1.63.27 2.28.72A3.98 3.98 0 0 1 23 19z\"></path><path d=\"M7.97 2.85C9.2 2.3 10.57 2 12 2c5.52 0 10 4.48 10 10 0 1.31-.25 2.57-.72 3.72\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10 1.32 0 2.58-.26 3.73-.73\"></path>","play":"<path d=\"M17.13 7.98c3.83 2.21 3.83 5.83 0 8.04l-3.09 1.78-3.09 1.78C7.13 21.79 4 19.98 4 15.56V8.44c0-4.42 3.13-6.23 6.96-4.02l2.25 1.3\"></path>","presention-chart":"<path d=\"M21 10V2H3v12.1c0 .71.14 1.3.42 1.76.46.76 1.3 1.15 2.49 1.15H18.1c1.9 0 2.9-1 2.9-2.9\"></path><path d=\"M2 2h20\"></path><path d=\"M8 22l4-2v-3\"></path><path d=\"M16 22l-4-2\"></path><path d=\"M7.5 11l3.15-2.63c.25-.21.58-.15.75.13l1.2 2c.17.28.5.33.75.13L16.5 8\"></path>","previous":"<path d=\"M12.27 7.39L16.42 5c1.7-.98 3.83.24 3.83 2.21v9.57c0 1.96-2.13 3.19-3.83 2.21l-4.15-2.39-4.15-2.4c-1.7-.98-1.7-3.43 0-4.41\"></path><path d=\"M3.76 18.18V17\"></path><path d=\"M3.76 14V5.82\"></path>","printer-slash":"<path d=\"M7.25 7h9.5V5c0-2-.75-3-3-3h-3.5c-2.25 0-3 1-3 3v2z\"></path><path d=\"M12.97 15H16v4c0 2-1 3-3 3h-2c-1.69 0-2.67-.71-2.93-2.14\"></path><path d=\"M6 18c-2 0-3-1-3-3v-5c0-2 1-3 3-3h10.59\"></path><path d=\"M21 14v1c0 2-1 3-3 3h-2v-3h-3\"></path><path d=\"M19.97 7.52C20.66 8 21 8.83 21 10\"></path><path d=\"M17 15h-1.21\"></path><path d=\"M7 11h2\"></path><path d=\"M22 2L2 22\"></path>","printer":"<path d=\"M7.25 7h9.5V5c0-2-.75-3-3-3h-3.5c-2.25 0-3 1-3 3v2z\"></path><path d=\"M16 15v4c0 2-1 3-3 3h-2c-2 0-3-1-3-3v-4h8z\"></path><path d=\"M21 10v5c0 2-1 3-3 3h-2v-3H8v3H6c-2 0-3-1-3-3v-5c0-2 1-3 3-3h12c2 0 3 1 3 3z\"></path><path d=\"M17 15H7\"></path><path d=\"M7 11h3\"></path>","profile-2user":"<path d=\"M12.68 3.96c.48.71.76 1.56.76 2.48-.01 2.4-1.9 4.35-4.28 4.43-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C4.56 3.99 6.54 2 9 2\"></path><path d=\"M16.41 4c1.94 0 3.5 1.57 3.5 3.5 0 1.89-1.5 3.43-3.37 3.5a1.13 1.13 0 0 0-.26 0\"></path><path d=\"M4.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0z\"></path><path d=\"M18.34 20c.72-.15 1.4-.44 1.96-.87 1.56-1.17 1.56-3.1 0-4.27-.55-.42-1.22-.7-1.93-.86\"></path>","profile-add":"<path d=\"M18.5 19.5h-4\"></path><path d=\"M16.5 21.5v-4\"></path><path d=\"M11.99 21.81c-1.82 0-3.63-.46-5.01-1.38-2.42-1.62-2.42-4.26 0-5.87 2.75-1.84 7.26-1.84 10.01 0\"></path><path d=\"M15.68 3.96c.48.71.76 1.56.76 2.48-.01 2.4-1.9 4.35-4.28 4.43-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C7.56 3.99 9.54 2 12 2\"></path>","profile-circle":"<path d=\"M14.94 8.04c.22.44.35.94.35 1.47-.01 1.77-1.4 3.22-3.16 3.27a.963.963 0 0 0-.24 0 3.27 3.27 0 0 1-3.16-3.27c0-1.81 1.46-3.28 3.28-3.28\"></path><path d=\"M18.74 19.38A9.934 9.934 0 0 1 12 22c-2.6 0-4.96-.99-6.74-2.62.1-.94.7-1.86 1.77-2.58 2.74-1.82 7.22-1.82 9.94 0 1.07.72 1.67 1.64 1.77 2.58z\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","profile-delete":"<path d=\"M18.41 18.09l-2.82 2.82\"></path><path d=\"M18.41 20.91l-2.82-2.82\"></path><path d=\"M12 21.81c-1.82 0-3.63-.46-5.01-1.38-2.42-1.62-2.42-4.26 0-5.87 2.75-1.84 7.26-1.84 10.01 0\"></path><path d=\"M15.68 3.96c.48.71.76 1.56.76 2.48-.01 2.4-1.9 4.35-4.28 4.43-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C7.56 3.99 9.54 2 12 2\"></path>","profile-remove":"<path d=\"M19.5 19h-4\"></path><path d=\"M11.99 21.81c-1.82 0-3.63-.46-5.01-1.38-2.42-1.62-2.42-4.26 0-5.87 2.75-1.84 7.26-1.84 10.01 0\"></path><path d=\"M15.68 3.96c.48.71.76 1.56.76 2.48-.01 2.4-1.9 4.35-4.28 4.43-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C7.56 3.99 9.54 2 12 2\"></path>","profile-tick":"<path d=\"M14.44 19.05l1.52 1.52L19 17.53\"></path><path d=\"M11.99 21.81c-1.82 0-3.63-.46-5.01-1.38-2.42-1.62-2.42-4.26 0-5.87 2.75-1.84 7.26-1.84 10.01 0\"></path><path d=\"M15.68 3.96c.48.71.76 1.56.76 2.48-.01 2.4-1.9 4.35-4.28 4.43-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C7.56 3.99 9.54 2 12 2\"></path>","programming-arrow":"<path d=\"M19 16V6.5c0-1.1-.9-2-2-2h-4.5\"></path><path d=\"M15 2l-3 2.5L15 7\"></path><path d=\"M5 9v7\"></path><path d=\"M5.25 2C3.46 2 2 3.46 2 5.25S3.46 8.5 5.25 8.5 8.5 7.04 8.5 5.25\"></path><path d=\"M5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"></path><path d=\"M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"></path>","programming-arrows":"<path d=\"M19 16V6.5c0-1.1-.9-2-2-2h-5.5\"></path><path d=\"M14 2l-3 2.5L14 7\"></path><path d=\"M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"></path><path d=\"M5 12v5.5c0 1.1.9 2 2 2h5.5\"></path><path d=\"M10 22l3-2.5-3-2.5\"></path><path d=\"M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"></path>","quote-down-circle":"<path d=\"M7 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19H8.19A1.2 1.2 0 0 1 7 14.84v-2.68z\"></path><path d=\"M7 12.16c0-2.79.52-3.26 2.09-4.19\"></path><path d=\"M13.14 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19h-1.49a1.2 1.2 0 0 1-1.19-1.19v-2.68z\"></path><path d=\"M13.14 12.16c0-2.79.52-3.26 2.09-4.19\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","quote-down-square":"<path d=\"M2 12.83V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M7 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19H8.19A1.2 1.2 0 0 1 7 14.84v-2.68\"></path><path d=\"M7 12.16c0-2.79.52-3.26 2.09-4.19\"></path><path d=\"M13.14 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19h-1.49a1.2 1.2 0 0 1-1.19-1.19v-2.68\"></path><path d=\"M13.14 12.16c0-2.79.52-3.26 2.09-4.19\"></path>","quote-down":"<path d=\"M12.63 3.86c0-1.42 1.05-2.58 2.58-2.58h3.21c1.42 0 2.58 1.16 2.58 2.58v5.8\"></path><path d=\"M21 9.65h-5.8c-.96 0-1.72-.45-2.16-1.14\"></path><path d=\"M21 9.65c0 6.05-1.13 7.05-4.53 9.07\"></path><path d=\"M9.37 9.65h-5.8C2.04 9.65.99 8.49.99 7.07V3.85c0-1.42 1.05-2.58 2.58-2.58H6.8c1.42 0 2.58 1.16 2.58 2.58v5.8\"></path><path d=\"M9.371 9.65c0 6.05-1.13 7.05-4.53 9.07\"></path>","quote-up-circle":"<path d=\"M17 11.84h-2.68c-.71 0-1.19-.54-1.19-1.19V9.16c0-.65.48-1.19 1.19-1.19h1.49c.65 0 1.19.54 1.19 1.19v2.68z\"></path><path d=\"M17 11.84c0 2.79-.52 3.26-2.09 4.19\"></path><path d=\"M10.86 11.84H8.18c-.71 0-1.19-.54-1.19-1.19V9.16c0-.65.48-1.19 1.19-1.19h1.49c.65 0 1.19.54 1.19 1.19v2.68z\"></path><path d=\"M10.86 11.84c0 2.79-.52 3.26-2.09 4.19\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","quote-up-square":"<path d=\"M2 12.83V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M17 11.84h-2.68c-.71 0-1.19-.54-1.19-1.19V9.16c0-.65.48-1.19 1.19-1.19h1.49c.65 0 1.19.54 1.19 1.19v2.68z\"></path><path d=\"M17 11.84c0 2.79-.52 3.26-2.09 4.19\"></path><path d=\"M10.86 11.84H8.18c-.71 0-1.19-.54-1.19-1.19V9.16c0-.65.48-1.19 1.19-1.19h1.49c.65 0 1.19.54 1.19 1.19v2.68z\"></path><path d=\"M10.86 11.84c0 2.79-.52 3.26-2.09 4.19\"></path>","quote-up":"<path d=\"M10.37 18.14c0 1.42-1.05 2.58-2.58 2.58H4.57c-1.42 0-2.58-1.16-2.58-2.58v-5.8\"></path><path d=\"M2 12.35h5.8c.96 0 1.72.45 2.16 1.14\"></path><path d=\"M2 12.35C2 6.3 3.13 5.3 6.53 3.28\"></path><path d=\"M13.63 12.35h5.8c1.53 0 2.58 1.16 2.58 2.58v3.22c0 1.42-1.05 2.58-2.58 2.58h-3.22c-1.42 0-2.58-1.16-2.58-2.58v-5.8\"></path><path d=\"M13.63 12.35c0-6.05 1.13-7.05 4.53-9.07\"></path>","radar-1":"<path d=\"M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2\"></path><path d=\"M20 18c1.26-1.67 2-3.75 2-6s-.74-4.33-2-6\"></path><path d=\"M4 18a9.926 9.926 0 0 1-1.98-6.62\"></path><path d=\"M4 6c-.38.51-.72 1.06-1 1.64\"></path><path d=\"M16.8 15.6c.75-1 1.2-2.25 1.2-3.6s-.45-2.6-1.2-3.6\"></path><path d=\"M7.2 8.4C6.45 9.4 6 10.65 6 12s.45 2.6 1.2 3.6\"></path>","radar-2":"<path d=\"M12 12L3.33 7.02C2.49 8.49 2 10.19 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-2.05-.62-3.96-1.68-5.54\"></path><path d=\"M6 4a9.991 9.991 0 0 1 11.13-.58\"></path><path d=\"M6.83 8.96A5.92 5.92 0 0 0 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6-2.69-6-6-6c-.91 0-1.78.2-2.55.57\"></path>","radar":"<path d=\"M20.32 6.46A9.945 9.945 0 0 1 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-1.81.48-3.51 1.33-4.98L12 12\"></path><path d=\"M6 4c1.67-1.25 3.75-2 6-2 1.93 0 3.73.54 5.25 1.49\"></path>","radio":"<path d=\"M2 14.05V17c0 3 2 5 5 5h10c3 0 5-2 5-5v-7c0-3-2-5-5-5H7c-3 0-5 2-5 5\"></path><path d=\"M7 2v3\"></path><path d=\"M8.5 16a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 2.5 2.5\"></path><path d=\"M14.5 11h4\"></path><path d=\"M14.5 15h.5\"></path><path d=\"M18 15h.5\"></path>","ram-2":"<path d=\"M7.99 21.97L7.98 19c0-1.11.89-2 2-2h4.01c1.1 0 1.99.89 2 1.99l.03 2.99\"></path><path d=\"M8.94 4.95l.05-2.89\"></path><path d=\"M11.94 4.95l.05-2.89\"></path><path d=\"M14.94 4.92l.05-2.88\"></path><path d=\"M3.5 11v6c0 3 1.47 5 5 5h7c3.47 0 5-2 5-5v-1.17c0-.53-.21-1.04-.59-1.41l-.83-.83c-.38-.38-.59-.88-.59-1.41V10c0-.55.45-1 1-1s1-.45 1-1V7c0-3-1.53-5-5-5h-7c-3.53 0-5 2-5 5\"></path>","ram":"<path d=\"M3.5 11v6c0 3 1.47 5 5 5h7c3.47 0 5-2 5-5v-1.17c0-.53-.21-1.04-.59-1.41l-.83-.83c-.38-.38-.59-.88-.59-1.41V10c0-.55.45-1 1-1s1-.45 1-1V7c0-3-1.53-5-5-5h-7c-3.53 0-5 2-5 5\"></path><path d=\"M7.99 21.97L7.98 19c0-1.11.89-2 2-2h4.01c1.1 0 1.99.89 2 1.99l.03 2.99\"></path><path d=\"M13.97 7.78h-6\"></path>","ranking-1":"<path d=\"M8.67 14H4c-1.1 0-2 .9-2 2v6h6.67v-8z\"></path><path d=\"M15.33 12c0-1.1-.9-2-2-2h-2.67c-1.1 0-2 .9-2 2v10h6.67v-6\"></path><path d=\"M20 17h-4.67v5H22v-3c0-1.1-.9-2-2-2z\"></path><path d=\"M12.52 2.07l.53 1.06c.07.15.26.29.42.31l.96.16c.61.1.76.55.32.98l-.75.75c-.13.13-.2.37-.16.54l.21.92c.17.73-.22 1.01-.86.63l-.9-.53c-.16-.1-.43-.1-.59 0l-.9.53c-.64.38-1.03.1-.86-.63l.21-.92a.63.63 0 0 0-.16-.54l-.74-.74c-.44-.44-.3-.88.32-.98l.96-.16c.16-.03.35-.17.42-.31l.53-1.06c.29-.58.75-.58 1.04-.01z\"></path>","ranking":"<path d=\"M16.06 21.91c-.31-.04-.67-.17-1.07-.41l-2.24-1.33c-.41-.24-1.07-.24-1.48 0L9.03 21.5c-1.61.95-2.58.24-2.16-1.58l.53-2.31c.1-.43-.08-1.04-.39-1.36l-1.86-1.86c-1.1-1.1-.74-2.21.79-2.46l2.39-.4c.4-.07.88-.42 1.06-.78l1.32-2.64c.72-1.43 1.89-1.43 2.6 0l1.32 2.64c.18.36.66.72 1.06.78l2.39.4c1.53.26 1.89 1.36.79 2.46l-1.86 1.86c-.31.31-.49.92-.39 1.36\"></path><path d=\"M6 9V2\"></path><path d=\"M18 9V2\"></path><path d=\"M12 4V2\"></path>","receipt-1":"<path d=\"M20.5 7.04c0-4.03-.94-5.04-4.72-5.04H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3c0 2.66 1.46 3.29 3.23 1.39l.01-.01c.82-.87 2.07-.8 2.78.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35c.72-.96 1.97-1.03 2.79-.15 1.78 1.9 3.23 1.27 3.23-1.39V11\"></path><path d=\"M8 7h8\"></path><path d=\"M9 11h6\"></path>","receipt-2-1":"<path d=\"M20.5 7.04c0-4.03-.94-5.04-4.72-5.04H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3c0 2.66 1.46 3.29 3.23 1.39l.01-.01c.82-.87 2.07-.8 2.78.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35c.72-.96 1.97-1.03 2.79-.15 1.78 1.9 3.23 1.27 3.23-1.39V11\"></path><path d=\"M10.73 11h5.5\"></path><path d=\"M10.73 7h5.5\"></path><path d=\"M8.094 11h.01\"></path><path d=\"M8.094 7h.01\"></path>","receipt-2":"<path d=\"M3 7.04c0-1.52.14-2.6.5-3.37 0-.01 0-.02.02-.03.57-.73 1.58-.55 2.71.66l.01.01c.82.87 2.07.8 2.78-.15l1.02-1.35c.4-.54.93-.81 1.46-.81.53 0 1.06.27 1.46.81l1.01 1.34c.72.96 1.98 1.03 2.8.15.69-.74 1.33-1.09 1.86-1.09.34 0 .63.15.85.43.02.01.02.02.02.03.36.77.5 1.85.5 3.37v9.92c0 1.52-.14 2.6-.5 3.37 0 .01-.01.03-.02.04-.22.28-.51.42-.85.42-.53 0-1.17-.35-1.86-1.09-.82-.88-2.08-.81-2.8.15l-1.01 1.34c-.4.54-.93.81-1.46.81-.53 0-1.06-.27-1.46-.81l-1.02-1.35c-.71-.95-1.96-1.02-2.78-.15l-.01.01c-1.13 1.21-2.13 1.39-2.71.67a.076.076 0 0 1-.02-.04c-.36-.77-.5-1.85-.5-3.37v-5.99\"></path><path d=\"M15 10.25h1\"></path><path d=\"M8 10.25h4\"></path><path d=\"M8 13.75h6\"></path>","receipt-add":"<path d=\"M22 6v2.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2c1.09.01 2.09.45 2.81 1.17C21.55 3.9 22 4.9 22 6z\"></path><path d=\"M11.16 10h.59\"></path><path d=\"M6.25 10h2.4\"></path><path d=\"M9 12.75v-5.5\"></path><path d=\"M2 11v10c0 .83.94 1.3 1.6.8l1.71-1.28c.4-.3.96-.26 1.32.1l1.66 1.67c.39.39 1.03.39 1.42 0l1.68-1.68c.35-.35.91-.39 1.3-.09l1.71 1.28c.66.49 1.6.02 1.6-.8V4c0-1.1.9-2 2-2H6C3 2 2 3.79 2 6v1\"></path>","receipt-discount":"<path d=\"M22 6v2.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2c1.09.01 2.09.45 2.81 1.17C21.55 3.9 22 4.9 22 6z\"></path><path d=\"M10.97 9.03l.76-.76\"></path><path d=\"M6.27 13.73l2.22-2.22L9 11\"></path><path d=\"M2 11v10c0 .83.94 1.3 1.6.8l1.71-1.28c.4-.3.96-.26 1.32.1l1.66 1.67c.39.39 1.03.39 1.42 0l1.68-1.68c.35-.35.91-.39 1.3-.09l1.71 1.28c.66.49 1.6.02 1.6-.8V4c0-1.1.9-2 2-2H6C3 2 2 3.79 2 6v1\"></path><path d=\"M11.924 13.5h.01\"></path><path d=\"M6.194 8.5h.009\"></path>","receipt-disscount":"<path d=\"M20.5 7.04c0-4.03-.94-5.04-4.72-5.04H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3c0 2.66 1.46 3.29 3.23 1.39l.01-.01c.82-.87 2.07-.8 2.78.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35c.72-.96 1.97-1.03 2.79-.15 1.78 1.9 3.23 1.27 3.23-1.39v-7.27\"></path><path d=\"M8.63 13.8l6.73-6.73\"></path><path d=\"M9 13l6-6\"></path><path d=\"M14.995 13h.009\"></path><path d=\"M8.995 7.5h.008\"></path>","receipt-edit":"<path d=\"M3.5 11v7.3c0 2.66 1.46 3.29 3.23 1.39l.01-.01c.82-.87 2.07-.8 2.78.15l1.01 1.35\"></path><path d=\"M20.5 11.3V7.04c0-4.03-.94-5.04-4.72-5.04H8.22C4.44 2 3.5 3.01 3.5 7.04\"></path><path d=\"M8 7h4.5\"></path><path d=\"M15 7h2\"></path><path d=\"M9 11h6\"></path><path d=\"M18.21 14.77l-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01z\"></path><path d=\"M17.7 15.28c.3 1.08 1.14 1.92 2.22 2.22\"></path>","receipt-item":"<path d=\"M22 6v2.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2c1.09.01 2.09.45 2.81 1.17C21.55 3.9 22 4.9 22 6z\"></path><path d=\"M9 13.01h3\"></path><path d=\"M9 9.01h3\"></path><path d=\"M2 11v10c0 .83.94 1.3 1.6.8l1.71-1.28c.4-.3.96-.26 1.32.1l1.66 1.67c.39.39 1.03.39 1.42 0l1.68-1.68c.35-.35.91-.39 1.3-.09l1.71 1.28c.66.49 1.6.02 1.6-.8V4c0-1.1.9-2 2-2H6C3 2 2 3.79 2 6v1\"></path><path d=\"M5.996 13h.01\"></path><path d=\"M5.995 9h.008\"></path>","receipt-minus":"<path d=\"M22 6v2.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2c1.09.01 2.09.45 2.81 1.17C21.55 3.9 22 4.9 22 6z\"></path><path d=\"M11.16 10h.59\"></path><path d=\"M6.25 10h2.4\"></path><path d=\"M2 11v10c0 .83.94 1.3 1.6.8l1.71-1.28c.4-.3.96-.26 1.32.1l1.66 1.67c.39.39 1.03.39 1.42 0l1.68-1.68c.35-.35.91-.39 1.3-.09l1.71 1.28c.66.49 1.6.02 1.6-.8V4c0-1.1.9-2 2-2H6C3 2 2 3.79 2 6v1\"></path>","receipt-search":"<path d=\"M3.5 11v7.3c0 2.66 1.46 3.29 3.23 1.39l.01-.01c.82-.87 2.07-.8 2.78.15l1.01 1.35\"></path><path d=\"M20.5 11.3V7.04c0-4.03-.94-5.04-4.72-5.04H8.22C4.44 2 3.5 3.01 3.5 7.04\"></path><path d=\"M18.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z\"></path><path d=\"M22 22l-1-1\"></path><path d=\"M8 7h8\"></path><path d=\"M9 11h6\"></path>","receipt-square":"<path d=\"M2 12.94V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M17 13.04v2.66c0 1.57-.86 1.94-1.9.82-.48-.51-1.22-.47-1.64.09l-.6.8c-.47.63-1.25.63-1.72 0l-.59-.79c-.42-.56-1.16-.6-1.64-.09-1.05 1.12-1.9.75-1.9-.82V9.08c0-2.37.56-2.96 2.78-2.96h4.44c2.22 0 2.78.59 2.78 2.96\"></path>","receipt-text":"<path d=\"M2 11v10c0 .83.94 1.3 1.6.8l1.71-1.28c.4-.3.96-.26 1.32.1l1.66 1.67c.39.39 1.03.39 1.42 0l1.68-1.68c.35-.35.91-.39 1.3-.09l1.71 1.28c.66.49 1.6.02 1.6-.8V4c0-1.1.9-2 2-2H6C3 2 2 3.79 2 6v1\"></path><path d=\"M22 6v2.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2c1.09.01 2.09.45 2.81 1.17C21.55 3.9 22 4.9 22 6z\"></path><path d=\"M10.98 9H12\"></path><path d=\"M6 9h1.96\"></path><path d=\"M6.75 13h4.5\"></path>","receipt":"<path d=\"M22 6v2.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2c1.09.01 2.09.45 2.81 1.17C21.55 3.9 22 4.9 22 6z\"></path><path d=\"M2 11v10c0 .83.94 1.3 1.6.8l1.71-1.28c.4-.3.96-.26 1.32.1l1.66 1.67c.39.39 1.03.39 1.42 0l1.68-1.68c.35-.35.91-.39 1.3-.09l1.71 1.28c.66.49 1.6.02 1.6-.8V4c0-1.1.9-2 2-2H6C3 2 2 3.79 2 6v1\"></path>","receive-square-2":"<path d=\"M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M10.59 13.34h4.24V9.1\"></path><path d=\"M14.83 13.34L9.17 7.68\"></path><path d=\"M6 16.51c3.89 1.3 8.11 1.3 12 0\"></path>","receive-square":"<path d=\"M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M9 11.51l3 3 3-3\"></path><path d=\"M12 14.51v-8\"></path><path d=\"M6 16.51c3.89 1.3 8.11 1.3 12 0\"></path>","received":"<path d=\"M16.59 5.91L19 3.5\"></path><path d=\"M5 17.5l8.38-8.38\"></path><path d=\"M5 7.23V17.5h10.27\"></path><path d=\"M3.5 22h17\"></path>","record-circle":"<path d=\"M16.23 12c0-2.34-1.89-4.23-4.23-4.23-2.34 0-4.23 1.89-4.23 4.23 0 2.34 1.89 4.23 4.23 4.23.57 0 1.11-.11 1.6-.31\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","record":"<path d=\"M5.25 6.04A8.997 8.997 0 0 0 3 12a9 9 0 1 0 6.94-8.76\"></path>","recovery-convert":"<path d=\"M5.53 15.98c.17 1.79 1.11 2.52 3.16 2.52h2.73c2.28 0 3.19-.91 3.19-3.19v-2.73c0-2.27-.91-3.18-3.19-3.18H8.69c-2.07 0-3.01.75-3.16 2.6\"></path><path d=\"M18.5 8.68v2.73c0 2.28-.91 3.19-3.19 3.19h-.71v-2.02c0-2.27-.91-3.18-3.19-3.18H9.4v-.72c0-2.28.91-3.18 3.19-3.18h2.73c2.27 0 3.18.91 3.18 3.18z\"></path><path d=\"M22 15c0 3.87-3.13 7-7 7l1.05-1.75\"></path><path d=\"M2 9c0-3.87 3.13-7 7-7L7.95 3.75\"></path>","redo":"<path d=\"M13.02 8.31h6.85\"></path><path d=\"M16.87 18.31h-8c-2.76 0-5-2.24-5-5s2.24-5 5-5\"></path><path d=\"M17.57 10.81l2.56-2.56-2.56-2.56\"></path>","refresh-2":"<path d=\"M18.01 19.99A9.964 9.964 0 0 1 12 22c-5.52 0-8.89-5.56-8.89-5.56m0 0h4.52m-4.52 0v5M22 12c0 1.82-.49 3.53-1.34 5M6.03 3.97A9.921 9.921 0 0 1 12 2c6.67 0 10 5.56 10 5.56m0 0v-5m0 5h-4.44M2 12c0-1.82.48-3.53 1.33-5\"></path>","refresh-circle":"<path d=\"M8.01 14.51c.18.3.4.58.65.83a4.732 4.732 0 0 0 6.68 0 4.71 4.71 0 0 0 1.32-2.67\"></path><path d=\"M7.34 11.33c.14-.98.57-1.92 1.32-2.67a4.732 4.732 0 0 1 6.68 0c.26.26.47.54.65.83\"></path><path d=\"M7.82 17.18v-2.67h2.67\"></path><path d=\"M16.18 6.82v2.67h-2.67\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","refresh-left-square":"<path d=\"M10.33 7.51c.5-.15 1.05-.25 1.67-.25 2.76 0 5 2.24 5 5s-2.24 5-5 5a5.002 5.002 0 0 1-4.16-7.78\"></path><path d=\"M9.62 7.65l1.66-1.91\"></path><path d=\"M9.62 7.65l1.94 1.42\"></path><path d=\"M2 14v1c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","refresh-right-square":"<path d=\"M13.67 7.51c-.5-.15-1.05-.25-1.67-.25-2.76 0-5 2.24-5 5s2.24 5 5 5a5.002 5.002 0 0 0 4.16-7.78\"></path><path d=\"M14.38 7.65l-1.66-1.91\"></path><path d=\"M14.38 7.65l-1.94 1.42\"></path><path d=\"M2 14v1c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","refresh-square-2":"<path d=\"M17.5 12c0 3.04-2.46 5.5-5.5 5.5s-4.89-3.06-4.89-3.06m0 0h2.48m-2.48 0v2.75M6.5 12c0-3.04 2.44-5.5 5.5-5.5 3.67 0 5.5 3.06 5.5 3.06m0 0V6.81m0 2.75h-2.44\"></path><path d=\"M2 14v1c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","refresh":"<path d=\"M14.55 21.67C18.84 20.54 22 16.64 22 12c0-5.52-4.44-10-10-10C5.33 2 2 7.56 2 7.56m0 0V3m0 4.56H6.44\"></path><path d=\"M2 12c0 5.52 4.48 10 10 10\"></path>","repeat-circle":"<path d=\"M7.5 8.34h7.4c.89 0 1.6.72 1.6 1.6v1.77\"></path><path d=\"M9.19 6.66L7.5 8.34l1.69 1.69\"></path><path d=\"M16.5 15.66H9.1c-.89 0-1.6-.72-1.6-1.6v-1.77\"></path><path d=\"M14.81 17.34l1.69-1.68-1.69-1.69\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","repeat":"<path d=\"M17.42 5.16c1.66 0 3 1.34 3 3v3.32\"></path><path d=\"M3.58 5.16h9.41\"></path><path d=\"M6.74 2L3.58 5.16l3.16 3.16\"></path><path d=\"M20.42 18.84H6.58c-1.66 0-3-1.34-3-3v-3.32\"></path><path d=\"M17.26 22l3.16-3.16-3.16-3.16\"></path>","repeate-music":"<path d=\"M10 21l-2.44-2.34 7.95.02c3.57 0 6.5-2.93 6.5-6.52 0-1.79-.73-3.42-1.91-4.6\"></path><path d=\"M9 12h6\"></path><path d=\"M8.56 4.98c-3.57 0-6.5 2.93-6.5 6.52 0 1.79.73 3.42 1.91 4.6\"></path><path d=\"M14.06 2.66L16.5 5l-3.51-.01\"></path>","repeate-one":"<path d=\"M8.5 5.32C4.93 5.32 2 8.25 2 11.84c0 1.79.73 3.42 1.91 4.6\"></path><path d=\"M14 3l2.44 2.34-3.51-.01\"></path><path d=\"M10 21l-2.44-2.34 7.95.02c3.57 0 6.5-2.93 6.5-6.52 0-1.79-.73-3.42-1.91-4.6\"></path><path d=\"M12.25 14.67V9.33L10.75 11\"></path>","reserve":"<path d=\"M18.97 22h-14c-3 0-3-1.35-3-3v-1c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v1c0 1.65 0 3-3 3z\"></path><path d=\"M4.62 8.56A8.015 8.015 0 0 1 11.27 5h1.45c.58 0 1.15.06 1.69.18 3.61.78 6.31 3.98 6.31 7.82v4H3.27v-4\"></path><path d=\"M14.5 4.5c0 .24-.03.46-.09.68-.54-.12-1.11-.18-1.69-.18h-1.45c-.58 0-1.14.06-1.68.18-.06-.22-.09-.44-.09-.68a2.5 2.5 0 0 1 5 0z\"></path><path d=\"M15 11H9\"></path>","rotate-left-1":"<path d=\"M2 16.75C2 20.5 3.5 22 7.25 22h4.5C15.5 22 17 20.5 17 16.75v-4.5C17 8.5 15.5 7 11.75 7h-4.5C3.5 7 2 8.5 2 12.25\"></path><path d=\"M22 9c0-3.87-3.13-7-7-7l1.05 1.75\"></path>","rotate-left":"<path d=\"M20.67 13.33c0 4.79-3.88 8.67-8.67 8.67s-8.67-3.88-8.67-8.67c0-1.78.54-3.44 1.46-4.82m4.32-3.43c.87-.26 1.83-.43 2.89-.43 3.21 0 6.02 1.75 7.51 4.34\"></path><path d=\"M7.87 5.32L10.76 2\"></path><path d=\"M7.87 5.32l3.37 2.46\"></path>","rotate-right-1":"<path d=\"M22 16.75C22 20.5 20.5 22 16.75 22h-4.5C8.5 22 7 20.5 7 16.75v-4.5C7 8.5 8.5 7 12.25 7h4.5C20.5 7 22 8.5 22 12.25\"></path><path d=\"M2 9c0-3.87 3.13-7 7-7L7.95 3.75\"></path>","rotate-right":"<path d=\"M3.33 13.33C3.33 18.12 7.21 22 12 22s8.67-3.88 8.67-8.67c0-1.78-.54-3.44-1.46-4.82m-4.32-3.43c-.87-.26-1.83-.43-2.89-.43-3.21 0-6.02 1.75-7.51 4.34\"></path><path d=\"M15.13 5.32L12.24 2\"></path><path d=\"M15.13 5.32l-3.37 2.46\"></path>","route-square":"<path d=\"M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M17.35 9.05l-2.34 7.54c-.56 1.79-3.07 1.82-3.66.04l-.699-2.07c-.19-.57-.64-1.03-1.21-1.21l-2.08-.7c-1.77-.59-1.74-3.12.05-3.66l7.54-2.35c1.48-.45 2.87.94 2.4 2.41z\"></path>","routing-2":"<path d=\"M5.47 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z\"></path><path d=\"M19.97 22h-3c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v2\"></path><path d=\"M12.002 5h2.68c1.85 0 2.71 2.29 1.32 3.51l-7.99 6.99c-1.39 1.21-.53 3.5 1.31 3.5h2.68\"></path><path d=\"M5.488 5.5h.011\"></path><path d=\"M18.488 18.5h.011\"></path>","routing":"<path d=\"M6.94 9.42c-.82.78-2.11.77-2.93 0C2.89 8.35 1.6 6.63 2.07 4.6c.8-3.46 6.01-3.46 6.8 0 .12.49.13.95.07 1.4\"></path><path d=\"M15.07 16.6c.8-3.46 6.04-3.46 6.84 0 .47 2.03-.82 3.75-1.95 4.82-.82.78-2.12.77-2.94 0-1.13-1.07-2.42-2.79-1.95-4.82z\"></path><path d=\"M12 5h2.68c1.85 0 2.71 2.29 1.32 3.51L8.01 15.5C6.62 16.71 7.48 19 9.32 19H12\"></path><path d=\"M12 5h2.68c1.85 0 2.71 2.29 1.32 3.51L8.01 15.5C6.62 16.71 7.48 19 9.32 19H12\"></path><path d=\"M5.486 5.5h.011\"></path><path d=\"M18.486 17.5h.011\"></path>","row-horizontal":"<path d=\"M8.27 22c1.59 0 2.23-.6 2.23-2.1V4.1c0-1.5-.64-2.1-2.23-2.1H4.23C2.64 2 2 2.6 2 4.1v15.8c0 1.5.64 2.1 2.23 2.1\"></path><path d=\"M15.73 2c-1.59 0-2.23.6-2.23 2.1v15.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1V4.1c0-1.5-.64-2.1-2.23-2.1\"></path>","row-vertical":"<path d=\"M2 19.77C2 21.36 2.6 22 4.1 22h15.8c1.5 0 2.1-.64 2.1-2.23v-4.04c0-1.59-.6-2.23-2.1-2.23H4.1c-1.5 0-2.1.64-2.1 2.23\"></path><path d=\"M22 4.23C22 2.64 21.4 2 19.9 2H4.1C2.6 2 2 2.64 2 4.23v4.04c0 1.59.6 2.23 2.1 2.23h15.8c1.5 0 2.1-.64 2.1-2.23\"></path>","ruler&pen":"<path d=\"M14.47 2c-2 0-3 1-3 3v14c0 2 1 3 3 3h4c2 0 3-1 3-3V5c0-2-1-3-3-3\"></path><path d=\"M11.47 6h5\"></path><path d=\"M11.47 18h4\"></path><path d=\"M11.47 13.95l5 .05\"></path><path d=\"M11.47 10h3\"></path><path d=\"M2.53 9.02V4.95C2.53 3.33 3.86 2 5.49 2c1.62 0 2.95 1.33 2.95 2.95v12.96c0 .45-.19 1.13-.42 1.52l-.82 1.36c-.94 1.57-2.49 1.57-3.43 0l-.82-1.36c-.23-.39-.42-1.07-.42-1.52v-3.96\"></path><path d=\"M8.44 7H2.53\"></path>","ruler":"<path d=\"M22 10c0-2-1-3-3-3H5c-2 0-3 1-3 3v4c0 2 1 3 3 3h14c2 0 3-1 3-3\"></path><path d=\"M18 7v5\"></path><path d=\"M6 7v4\"></path><path d=\"M10.05 7L10 12\"></path><path d=\"M14 7v3\"></path>","safe-home":"<path d=\"M23 17.56v-2.19c0-.42-.31-.88-.69-1.04l-1.79-.73-1-.41c-.63-.25-1.33-.25-1.96 0l-2.78 1.14c-.38.16-.69.62-.69 1.04v2.19c0 1.25.46 2.46 1.25 3.44.73.93 1.77 1.65 2.95 1.97.16.04.34.04.51 0 .99-.27 1.87-.82 2.56-1.53\"></path><path d=\"M2.03 11.01c-.16-.93.31-2.18 1.05-2.77l6.58-5.26c1.01-.81 2.65-.81 3.66.01l6.58 5.25c.73.59 1.21 1.84 1.05 2.77l-.43 2.59-1-.41c-.63-.25-1.33-.25-1.96 0l-2.78 1.14c-.38.16-.69.62-.69 1.04v2.19c0 1.25.46 2.46 1.25 3.44H6.18c-1.37 0-2.66-1.09-2.89-2.44l-.55-3.32\"></path>","sagittarius":"<path d=\"M12 3h9v9\"></path><path d=\"M8.03 15.97L3 21\"></path><path d=\"M21 3L10.91 13.09\"></path><path d=\"M6.6 6.6l10.8 10.8\"></path>","save-2":"<path d=\"M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36L16 15.77V8.99c0-1.71-1.4-3.11-3.11-3.11H8v-.77C8 3.4 9.4 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11z\"></path><path d=\"M2 20.35c0 1.45 1.04 2.06 2.31 1.36l3.93-2.19c.42-.23 1.1-.23 1.52 0l3.93 2.19c1.27.7 2.31.09 2.31-1.36V8.99c0-1.71-1.4-3.11-3.11-3.11H5.11A3.12 3.12 0 0 0 2 8.99v6.52\"></path>","save-add":"<path d=\"M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36L16 15.77V8.99c0-1.71-1.4-3.11-3.11-3.11H8v-.77C8 3.4 9.4 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11z\"></path><path d=\"M7 12h4\"></path><path d=\"M9 14v-4\"></path><path d=\"M2 20.35c0 1.45 1.04 2.06 2.31 1.36l3.93-2.19c.42-.23 1.1-.23 1.52 0l3.93 2.19c1.27.7 2.31.09 2.31-1.36V8.99c0-1.71-1.4-3.11-3.11-3.11H5.11A3.12 3.12 0 0 0 2 8.99v6.52\"></path>","save-minus":"<path d=\"M2 20.35c0 1.45 1.04 2.06 2.31 1.36l3.93-2.19c.42-.23 1.1-.23 1.52 0l3.93 2.19c1.27.7 2.31.09 2.31-1.36V8.99c0-1.71-1.4-3.11-3.11-3.11H5.11A3.12 3.12 0 0 0 2 8.99v6.52\"></path><path d=\"M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36L16 15.77V8.99c0-1.71-1.4-3.11-3.11-3.11H8v-.77C8 3.4 9.4 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11z\"></path><path d=\"M7 12h4\"></path>","save-remove":"<path d=\"M2 20.35c0 1.45 1.04 2.06 2.31 1.36l3.93-2.19c.42-.23 1.1-.23 1.52 0l3.93 2.19c1.27.7 2.31.09 2.31-1.36V8.99c0-1.71-1.4-3.11-3.11-3.11H5.11A3.12 3.12 0 0 0 2 8.99v7.58\"></path><path d=\"M7.59 13.41l2.82-2.82\"></path><path d=\"M10.41 13.41l-2.82-2.82\"></path><path d=\"M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36L16 15.77V8.99c0-1.71-1.4-3.11-3.11-3.11H8v-.77C8 3.4 9.4 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11z\"></path>","scan-barcode":"<path d=\"M2 9V6.5C2 4.01 4.01 2 6.5 2H9\"></path><path d=\"M15 2h2.5C19.99 2 22 4.01 22 6.5V9\"></path><path d=\"M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16\"></path><path d=\"M9 22H6.5C4.01 22 2 19.99 2 17.5V15\"></path><path d=\"M10.5 7v2c0 1-.5 1.5-1.5 1.5H7c-1 0-1.5-.5-1.5-1.5V7C5.5 6 6 5.5 7 5.5h2c1 0 1.5.5 1.5 1.5z\"></path><path d=\"M13.5 9V7c0-1 .5-1.5 1.5-1.5h2c1 0 1.5.5 1.5 1.5v2c0 1-.5 1.5-1.5 1.5\"></path><path d=\"M7 13.5h2c1 0 1.5.5 1.5 1.5v2c0 1-.5 1.5-1.5 1.5H7c-1 0-1.5-.5-1.5-1.5\"></path><path d=\"M18.5 15v2c0 1-.5 1.5-1.5 1.5h-2c-1 0-1.5-.5-1.5-1.5v-2c0-1 .5-1.5 1.5-1.5h2c1 0 1.5.5 1.5 1.5z\"></path>","scan":"<path d=\"M2 9V6.5C2 4.01 4.01 2 6.5 2H9\"></path><path d=\"M15 2h2.5C19.99 2 22 4.01 22 6.5V9\"></path><path d=\"M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16\"></path><path d=\"M9 22H6.5C4.01 22 2 19.99 2 17.5V15\"></path><path d=\"M17 9.5v5c0 2-1 3-3 3h-4c-2 0-3-1-3-3v-5c0-2 1-3 3-3h4\"></path><path d=\"M19 12H5\"></path>","scanner":"<path d=\"M11.03 2H17c3 0 5 2 5 5v2\"></path><path d=\"M2 9V7c0-3 2-5 5-5\"></path><path d=\"M2 15v2c0 3 2 5 5 5h10c3 0 5-2 5-5v-2\"></path><path d=\"M2 12h6\"></path><path d=\"M11 12h11\"></path>","scanning":"<path d=\"M2 9V6.5C2 4.01 4.01 2 6.5 2H9\"></path><path d=\"M15 2h2.5C19.99 2 22 4.01 22 6.5V9\"></path><path d=\"M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16\"></path><path d=\"M9 22H6.5C4.01 22 2 19.99 2 17.5V15\"></path><path d=\"M11 8.5a2.5 2.5 0 0 1-5 0A2.5 2.5 0 0 1 8.5 6\"></path><path d=\"M7.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z\"></path><path d=\"M16.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z\"></path><path d=\"M13 15.5c0-.69.28-1.32.73-1.77A2.5 2.5 0 1 1 15.5 18\"></path>","scissor-1":"<path d=\"M5.5 3C7.43 3 9 4.57 9 6.5S7.43 10 5.5 10 2 8.43 2 6.5\"></path><path d=\"M5.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z\"></path><path d=\"M22 6L8.65 15.98\"></path><path d=\"M22 17.97L8.65 7.98\"></path>","scissor":"<path d=\"M2 12.94V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M8.42 10.9a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84z\"></path><path d=\"M8.42 16.94a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84z\"></path><path d=\"M17.5 8.7l-7.34 5.49\"></path><path d=\"M17.5 15.28l-7.34-5.49\"></path>","screenmirroring":"<path d=\"M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M12.6 18.5h3.8c1.5 0 2.1-.6 2.1-2.1v-1.8c0-1.5-.6-2.1-2.1-2.1h-3.8c-1.5 0-2.1.6-2.1 2.1v1.8c0 1.5.6 2.1 2.1 2.1z\"></path>","scroll":"<path d=\"M2 12.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M9.6 8.97l-2.49 2.49c-.29.29-.29.78 0 1.07l2.49 2.49\"></path><path d=\"M14.4 8.97l2.49 2.49c.29.29.29.78 0 1.07l-2.49 2.49\"></path>","search-favorite-1":"<path d=\"M2 11a9 9 0 0 1 9-9\"></path><path d=\"M20 11a9 9 0 0 1-17.08 3.97\"></path><path d=\"M13.5 6.13c-.35-1.1.06-2.47 1.22-2.84.61-.2 1.36-.03 1.79.56.4-.61 1.18-.75 1.78-.56 1.16.37 1.57 1.74 1.22 2.84-.55 1.75-2.47 2.66-3 2.66-.54 0-2.44-.89-3.01-2.66z\"></path><path d=\"M19.071 20.97c.53 1.6 1.74 1.76 2.67.36.86-1.28.3-2.33-1.24-2.33-1.15 0-1.79.89-1.43 1.97z\"></path>","search-favorite":"<path d=\"M2 11.5C2 6.25 6.25 2 11.5 2\"></path><path d=\"M21 11.5c0 5.25-4.25 9.5-9.5 9.5a9.5 9.5 0 0 1-8.53-5.31\"></path><path d=\"M22 22l-2-2\"></path><path d=\"M14.5 6.13c-.35-1.1.06-2.47 1.22-2.84.61-.2 1.36-.03 1.79.56.4-.61 1.18-.75 1.78-.56 1.16.37 1.57 1.74 1.22 2.84-.55 1.75-2.47 2.66-3 2.66-.54 0-2.44-.89-3.01-2.66z\"></path>","search-normal-1":"<path d=\"M11.5 2c5.25 0 9.5 4.25 9.5 9.5S16.75 21 11.5 21 2 16.75 2 11.5c0-3.7 2.11-6.9 5.2-8.47\"></path><path d=\"M22 22l-2-2\"></path>","search-normal":"<path d=\"M11 2a9 9 0 1 1-4.07.97\"></path><path d=\"M19.071 20.97c.53 1.6 1.74 1.76 2.67.36.86-1.28.3-2.33-1.24-2.33-1.15 0-1.79.89-1.43 1.97z\"></path>","search-status-1":"<path d=\"M2 11a9 9 0 0 1 9-9\"></path><path d=\"M20 11a9 9 0 0 1-17.08 3.97\"></path><path d=\"M14 5h6\"></path><path d=\"M14 8h3\"></path><path d=\"M19.071 20.97c.53 1.6 1.74 1.76 2.67.36.86-1.28.3-2.33-1.24-2.33-1.15 0-1.79.89-1.43 1.97z\"></path>","search-status":"<path d=\"M2 11.5C2 6.25 6.25 2 11.5 2\"></path><path d=\"M21 11.5c0 5.25-4.25 9.5-9.5 9.5a9.5 9.5 0 0 1-8.53-5.31\"></path><path d=\"M14 5h6\"></path><path d=\"M14 8h3\"></path><path d=\"M22 22l-2-2\"></path>","search-zoom-in-1":"<path d=\"M9.2 11.7h5\"></path><path d=\"M11.7 14.2v-5\"></path><path d=\"M11.5 2c5.25 0 9.5 4.25 9.5 9.5S16.75 21 11.5 21 2 16.75 2 11.5c0-3.7 2.11-6.9 5.2-8.47\"></path><path d=\"M22 22l-2-2\"></path>","search-zoom-in":"<path d=\"M8.5 11h5\"></path><path d=\"M11 13.5v-5\"></path><path d=\"M11 2a9 9 0 1 1-4.07.97\"></path><path d=\"M19.071 20.97c.53 1.6 1.74 1.76 2.67.36.86-1.28.3-2.33-1.24-2.33-1.15 0-1.79.89-1.43 1.97z\"></path>","search-zoom-out-1":"<path d=\"M9 11.7h5\"></path><path d=\"M11.5 2c5.25 0 9.5 4.25 9.5 9.5S16.75 21 11.5 21 2 16.75 2 11.5c0-3.7 2.11-6.9 5.2-8.47\"></path><path d=\"M22 22l-2-2\"></path>","search-zoom-out":"<path d=\"M8.5 11h5\"></path><path d=\"M11 2a9 9 0 1 1-4.07.97\"></path><path d=\"M19.071 20.97c.53 1.6 1.74 1.76 2.67.36.86-1.28.3-2.33-1.24-2.33-1.15 0-1.79.89-1.43 1.97z\"></path>","security-card":"<path d=\"M2 7.14c0-1.22.93-2.57 2.07-3l4.98-1.87c.82-.31 2.18-.31 3 0l4.97 1.87c.95.36 1.76 1.36 2.01 2.38h-7.3c-.22 0-.42.01-.61.01-1.85.11-2.33.78-2.33 2.89v5.43c0 2.31.59 2.9 2.94 2.9h5.92c-.09.08-.18.15-.27.23l-4.27 3.2c-1.41 1.05-3.71 1.05-5.13 0l-4.28-3.2c-.94-.7-1.71-2.25-1.71-3.42v-3.32\"></path><path d=\"M8.8 11.22H22\"></path><path d=\"M22 9.42v5.55c-.02 2.22-.63 2.77-2.94 2.77h-7.32c-2.35 0-2.94-.59-2.94-2.9V9.41c0-2.1.48-2.77 2.33-2.89.19 0 .39-.01.61-.01h7.32c2.35.01 2.94.59 2.94 2.91z\"></path><path d=\"M11.32 15.26h1.33\"></path><path d=\"M14.75 15.26h3.27\"></path>","security-safe":"<path d=\"M3.09 6.73c0-.82.62-1.75 1.39-2.06l5.57-2.28c1.25-.51 2.66-.51 3.91 0l5.57 2.28c.76.31 1.39 1.24 1.39 2.06v4.39c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.02 0-4.85-1.34-8.4-5.92-8.4-10.81\"></path><path d=\"M12 12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path><path d=\"M12 12.5v3\"></path>","security-time":"<path d=\"M3.41 11.37v3.18c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.83-.31-2.19-.31-3.02 0L5.52 4.1c-1.15.43-2.09 1.79-2.09 3.02\"></path><path d=\"M16 11.5c0-2.21-1.79-4-4-4s-4 1.79-4 4a3.999 3.999 0 0 0 5.95 3.49\"></path><path d=\"M12.25 10.25v.93c0 .35-.18.68-.49.86l-.76.46\"></path>","security-user":"<path d=\"M18.87 18c.95-.71 1.73-2.26 1.73-3.44V7.13c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.83-.31-2.19-.31-3.02 0L5.51 4.11c-1.15.43-2.09 1.79-2.09 3.02v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l.74-.56\"></path><path d=\"M12 10.92h-.13c-.94-.03-1.69-.81-1.69-1.76 0-.97.79-1.76 1.76-1.76s1.76.79 1.76 1.76c-.01.96-.76 1.73-1.7 1.76z\"></path><path d=\"M10.01 13.72c-.96.64-.96 1.69 0 2.33 1.09.73 2.88.73 3.97 0 .96-.64.96-1.69 0-2.33-1.08-.73-2.87-.73-3.97 0z\"></path>","security":"<path d=\"M3.09 6.61c0-.82.62-1.75 1.39-2.06l5.57-2.28c1.25-.51 2.66-.51 3.91 0l5.57 2.28c.76.31 1.39 1.24 1.39 2.06V11c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.02 0C6.65 20.47 3.1 15.89 3.1 11\"></path>","send-1":"<path d=\"M18.07 8.51c3.84 1.92 3.84 5.06 0 6.98l-8.56 4.28c-5.76 2.88-8.11.52-5.23-5.23l.87-1.73c.22-.44.22-1.17 0-1.61l-.87-1.74C1.4 3.71 3.76 1.35 9.51 4.23l4.51 2.26\"></path><path d=\"M5.44 12h5.4\"></path>","send-2":"<path d=\"M15.89 3.49c3.81-1.27 5.88.81 4.62 4.62l-2.83 8.49c-1.9 5.71-5.02 5.71-6.92 0l-.84-2.52-2.52-.84c-5.71-1.9-5.71-5.01 0-6.92L12 4.79\"></path><path d=\"M10.11 13.65l3.58-3.59\"></path>","send-sqaure-2":"<path d=\"M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M10.59 7.68h4.24v4.25\"></path><path d=\"M14.83 7.68l-5.66 5.66\"></path><path d=\"M6 16.51c3.89 1.3 8.11 1.3 12 0\"></path>","send-square":"<path d=\"M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M9 9.51l3-3 3 3\"></path><path d=\"M12 6.51v8\"></path><path d=\"M6 16.51c3.89 1.3 8.11 1.3 12 0\"></path>","send":"<path d=\"M7.41 5.91L5 3.5\"></path><path d=\"M19 17.5l-8.38-8.38\"></path><path d=\"M19 7.23V17.5H8.73\"></path><path d=\"M3.5 22h17\"></path>","setting-2":"<path d=\"M15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3a2.996 2.996 0 0 0 4.17 2.76\"></path><path d=\"M6.88 20.58l1.09.63c.79.47 1.81.19 2.28-.6l.11-.19c.9-1.57 2.38-1.57 3.29 0l.11.19c.47.79 1.49 1.07 2.28.6l1.73-.99c.91-.52 1.22-1.69.7-2.59-.91-1.57-.17-2.85 1.64-2.85 1.04 0 1.9-.85 1.9-1.9v-1.76c0-1.04-.85-1.9-1.9-1.9-1.01 0-1.69-.4-1.93-1.03-.19-.49-.11-1.13.29-1.82.52-.91.21-2.07-.7-2.59l-.81-.46\"></path><path d=\"M13.64 3.58c-.9 1.57-2.38 1.57-3.29 0l-.11-.19a1.655 1.655 0 0 0-2.27-.6l-1.73.99c-.91.52-1.22 1.69-.7 2.6.91 1.56.17 2.84-1.64 2.84-1.04 0-1.9.85-1.9 1.9v1.76c0 1.04.85 1.9 1.9 1.9 1.81 0 2.55 1.28 1.64 2.85\"></path>","setting-3":"<path d=\"M2 13.01V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M15.57 18.5v-3.9\"></path><path d=\"M15.57 7.45V5.5\"></path><path d=\"M12.98 10.05c0-1.44 1.16-2.6 2.6-2.6 1.44 0 2.6 1.16 2.6 2.6 0 1.44-1.16 2.6-2.6 2.6\"></path><path d=\"M8.43 18.5v-1.95\"></path><path d=\"M8.43 9.4V5.5\"></path><path d=\"M8.43 16.55a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2z\"></path>","setting-4":"<path d=\"M22 6.5h-6\"></path><path d=\"M6 6.5H2\"></path><path d=\"M13.5 6.5c0 1.93-1.57 3.5-3.5 3.5S6.5 8.43 6.5 6.5a3.504 3.504 0 0 1 4.48-3.36\"></path><path d=\"M22 17.5h-4\"></path><path d=\"M8 17.5H2\"></path><path d=\"M14 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z\"></path>","setting-5":"<path d=\"M19 18v-7\"></path><path d=\"M19 22v-1\"></path><path d=\"M5 18v-7\"></path><path d=\"M5 22v-1\"></path><path d=\"M19 7V2\"></path><path d=\"M12 22v-5\"></path><path d=\"M12 13V2\"></path><path d=\"M5 7V2\"></path><path d=\"M3 11h4\"></path><path d=\"M17 11h4\"></path><path d=\"M10 13h4\"></path>","setting":"<path d=\"M3 13.08v1.8C3 17 3 17 5 18.35l5.5 3.18c.83.48 2.18.48 3 0l5.5-3.18c2-1.35 2-1.35 2-3.46V9.11C21 7 21 7 19 5.65l-5.5-3.18c-.82-.48-2.17-.48-3 0L5 5.65C3 7 3 7 3 9.11\"></path><path d=\"M15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3a2.996 2.996 0 0 0 4.17 2.76\"></path>","settings":"<path d=\"M12 7.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5c0-.69-.16-1.35-.43-1.93\"></path><path d=\"M2 12h5\"></path><path d=\"M17 12h5\"></path>","shapes-1":"<path d=\"M1.97 12.25C1.97 8.5 3.47 7 7.22 7h4.5c3.75 0 5.25 1.5 5.25 5.25v4.5c0 3.75-1.5 5.25-5.25 5.25h-4.5c-3.75 0-5.25-1.5-5.25-5.25v-.74\"></path><path d=\"M21.97 7.5c0 2.87-2.19 5.22-5 5.47v-.72c0-3.75-1.5-5.25-5.25-5.25H11c.25-2.81 2.6-5 5.47-5 2.79 0 5.09 2.07 5.44 4.77.04.23.06.48.06.73z\"></path>","shapes":"<path d=\"M6.81 3.24c.91-1.65 3.29-1.65 4.2 0l2.19 3.97 1.05 1.91 1.28 2.33c.88 1.6-.28 3.55-2.1 3.55H4.4c-1.82 0-2.98-1.95-2.1-3.55l2.33-4.24\"></path><path d=\"M22 15.5a6.5 6.5 0 1 1-13 0c0-.17.01-.33.02-.5h4.41c1.82 0 2.98-1.95 2.1-3.55l-1.28-2.33A6.5 6.5 0 0 1 22 15.5z\"></path>","share":"<path d=\"M16.96 6.17c2 1.39 3.38 3.6 3.66 6.15\"></path><path d=\"M3.49 12.37a8.601 8.601 0 0 1 3.6-6.15\"></path><path d=\"M8.19 20.94c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85\"></path><path d=\"M9.28 4.92a2.78 2.78 0 1 0 2.78-2.78\"></path><path d=\"M4.83 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56z\"></path><path d=\"M21.94 17.14a2.78 2.78 0 1 0-2.78 2.78\"></path>","shield-cross":"<path d=\"M14.15 13.44L9.9 9.19\"></path><path d=\"M14.1 9.24l-4.25 4.25\"></path><path d=\"M20.59 7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.83-.31-2.19-.31-3.02 0L5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44v-3.52\"></path>","shield-search":"<path d=\"M3.41 11.02v3.54c0 1.18.78 2.73 1.73 3.44l4.3 3.21c.7.53 1.63.79 2.56.79\"></path><path d=\"M20.59 10.55V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.83-.31-2.19-.31-3.02 0L5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01\"></path><path d=\"M20 16c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-.73.19-1.41.53-1.99.69-1.2 1.98-2 3.46-2 .61 0 1.18.14 1.7.38\"></path><path d=\"M20.995 21h.01\"></path>","shield-slash":"<path d=\"M7.84 20.02l1.59 1.19c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12\"></path><path d=\"M3.41 11.04v3.52c0 1.18.78 2.73 1.73 3.44l.2.15\"></path><path d=\"M18.98 4.34c-.15-.09-.31-.17-.47-.24l-4.99-1.87c-.83-.31-2.19-.31-3.02 0l-5 1.88c-1.15.43-2.09 1.79-2.09 3.01\"></path><path d=\"M22 2L2 22\"></path>","shield-tick":"<path d=\"M9.05 11.87l1.61 1.61 4.3-4.3\"></path><path d=\"M20.59 7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.83-.31-2.19-.31-3.02 0L5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44v-3.52\"></path>","ship":"<path d=\"M5.11 20.46c-1.17-.97-1.97-2.34-2.33-3.94l-.41-1.86c-.2-.91.34-1.94 1.21-2.29L5 11.8l5.51-2.21c.96-.38 2.02-.38 2.98 0L19 11.8l1.42.57c.87.35 1.41 1.38 1.21 2.29l-.41 1.86C20.51 19.72 18 22 14.38 22H9.62\"></path><path d=\"M12 22V10\"></path><path d=\"M19 8v3.8l-5.51-2.21c-.96-.38-2.02-.38-2.98 0L5 11.8V8c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3z\"></path><path d=\"M14.5 5h-5V3c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v2z\"></path>","shop-add":"<path d=\"M3.04 15.52v-4.3\"></path><path d=\"M9 19c0 .75-.21 1.46-.58 2.06-.19.32-.42.61-.69.84-.03.04-.06.07-.1.1-.7.63-1.62 1-2.63 1-1.22 0-2.31-.55-3.03-1.41-.02-.03-.05-.05-.07-.08-.12-.14-.23-.29-.32-.45C1.21 20.46 1 19.75 1 19c0-1.26.58-2.39 1.5-3.12.17-.14.35-.26.54-.36C3.62 15.19 4.29 15 5 15c1 0 1.9.36 2.6.97.12.09.23.2.33.31C8.59 17 9 17.95 9 19z\"></path><path d=\"M6.49 18.98H3.51\"></path><path d=\"M5 17.52v2.99\"></path><path d=\"M20.21 19.67c-.92 1.62-2.67 2.33-5.49 2.33H9.33c-.58 0-1.11-.03-1.6-.1\"></path><path d=\"M21.01 11.22v4.49\"></path><path d=\"M12.03 12c1.83 0 3.18-1.49 3-3.32L14.36 2H9.69l-.67 6.68C8.84 10.51 10.2 12 12.03 12z\"></path><path d=\"M18.33 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C20.99 3 19.99 2 17.37 2h-3.05l.7 7.01c.18 1.65 1.66 2.99 3.31 2.99z\"></path><path d=\"M2.64 5.6l-.28 2.75C2.16 10.36 3.64 12 5.66 12c1.65 0 3.14-1.34 3.3-2.99l.22-2.21.48-4.8H6.61c-.91 0-1.63.12-2.19.39\"></path>","shop-remove":"<path d=\"M20.21 19.67c-.92 1.62-2.67 2.33-5.49 2.33H9.33c-.58 0-1.11-.03-1.6-.1\"></path><path d=\"M21.01 11.22v4.49\"></path><path d=\"M3.04 15.52v-4.3\"></path><path d=\"M12.03 12c1.83 0 3.18-1.49 3-3.32L14.36 2H9.69l-.67 6.68C8.84 10.51 10.2 12 12.03 12z\"></path><path d=\"M18.33 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C20.99 3 19.99 2 17.37 2h-3.05l.7 7.01c.18 1.65 1.66 2.99 3.31 2.99z\"></path><path d=\"M2.64 5.6l-.28 2.75C2.16 10.36 3.64 12 5.66 12c1.65 0 3.14-1.34 3.3-2.99l.22-2.21.48-4.8H6.61c-.91 0-1.63.12-2.19.39\"></path><path d=\"M9 19c0 .75-.21 1.46-.58 2.06-.19.32-.42.61-.69.84-.03.04-.06.07-.1.1-.7.63-1.62 1-2.63 1-1.22 0-2.31-.55-3.03-1.41-.02-.03-.05-.05-.07-.08-.12-.14-.23-.29-.32-.45C1.21 20.46 1 19.75 1 19c0-1.26.58-2.39 1.5-3.12.17-.14.35-.26.54-.36C3.62 15.19 4.29 15 5 15c1 0 1.9.36 2.6.97.12.09.23.2.33.31C8.59 17 9 17.95 9 19z\"></path><path d=\"M6.49 18.98H3.51\"></path>","shop":"<path d=\"M3.01 15.71C3.01 20.2 4.81 22 9.3 22h5.39c4.49 0 6.29-1.8 6.29-6.29v-4.49\"></path><path d=\"M12 12c1.83 0 3.18-1.49 3-3.32L14.34 2H9.67L9 8.68C8.82 10.51 10.17 12 12 12z\"></path><path d=\"M18.31 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C20.97 3 19.97 2 17.35 2H14.3l.7 7.01c.17 1.65 1.66 2.99 3.31 2.99z\"></path><path d=\"M5.64 12c1.65 0 3.14-1.34 3.3-2.99l.22-2.21.48-4.8H6.59C3.97 2 2.97 3 2.61 5.6l-.27 2.75C2.14 10.36 3.62 12 5.64 12z\"></path><path d=\"M12 17c-1.67 0-2.5.83-2.5 2.5V22h5v-2.5c0-1.67-.83-2.5-2.5-2.5z\"></path>","shopping-bag":"<path d=\"M20.41 17.03H3.62l-.09.5C3.24 19.99 4 22 7.5 22h8.99c3.51 0 4.27-2.01 3.97-4.47l-.9-7.5c-.23-1.94-.57-3.53-3.97-3.53h-7.2c-3.4 0-3.74 1.59-3.97 3.53L4.1 12.7l-.09.73\"></path><path d=\"M8 8V4.5C8 3 9 2 10.5 2h3C15 2 16 3 16 4.5V8\"></path>","shopping-cart":"<path d=\"M4.75 13.97A2.796 2.796 0 0 0 7.54 17h10.65c1.44 0 2.7-1.18 2.81-2.61l.54-7.5c.12-1.66-1.14-3.01-2.81-3.01H5.82\"></path><path d=\"M2 2h1.74c1.08 0 1.93.93 1.84 2l-.5 6.05\"></path><path d=\"M16.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z\"></path><path d=\"M8.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z\"></path><path d=\"M9 8h12\"></path>","shuffle":"<path d=\"M16.45 6l4.55.02\"></path><path d=\"M3 17.98l2.55.01c.91 0 1.76-.45 2.26-1.2l1.18-1.77.76-1.14L13.67 8\"></path><path d=\"M19 19.98l2-2\"></path><path d=\"M8.89 8.62l-1.08-1.5A2.675 2.675 0 0 0 5.61 6L3 6.01\"></path><path d=\"M12.97 15.38l1.22 1.57c.51.66 1.31 1.05 2.15 1.05l4.67-.02\"></path><path d=\"M21 6.02l-2-2\"></path>","sidebar-bottom":"<path d=\"M22 15.5H2\"></path><path d=\"M14.56 8.5L12 11.06 9.44 8.5\"></path><path d=\"M22 15.5H2\"></path><path d=\"M1.97 11.02V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7h-6c-5 0-7-2-7-7\"></path>","sidebar-left":"<path d=\"M7.97 2v20\"></path><path d=\"M14.97 9.44L12.41 12l2.56 2.56\"></path><path d=\"M2 13v2c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","sidebar-right":"<path d=\"M1.97 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7\"></path><path d=\"M14.97 2v20\"></path><path d=\"M7.97 9.44L10.53 12l-2.56 2.56\"></path>","sidebar-top":"<path d=\"M22 8.5H2\"></path><path d=\"M14.56 15.5L12 12.94 9.44 15.5\"></path><path d=\"M1.97 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7\"></path>","signpost":"<path d=\"M13.03 2H8.96c-.4 0-.78.14-1.09.38L5.68 4.13c-.88.7-.88 2.03 0 2.73l2.19 1.75c.31.25.7.38 1.09.38h8.26c.97 0 1.75-.78 1.75-1.75v-3.5c0-.97-.78-1.75-1.75-1.75\"></path><path d=\"M6.8 12h8.26c.4 0 .78.14 1.09.38l2.19 1.75c.88.7.88 2.03 0 2.73l-2.19 1.75c-.31.25-.7.38-1.09.38H6.8c-.97 0-1.75-.78-1.75-1.75v-3.5c0-.96.78-1.74 1.75-1.74z\"></path><path d=\"M12 12V9\"></path><path d=\"M12 22v-3\"></path><path d=\"M9 22h6\"></path>","simcard-1":"<path d=\"M3 17c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93c0-1.33-.53-2.6-1.46-3.54l-3.07-3.07A5.036 5.036 0 0 0 12.93 2H8C5 2 3 4 3 7v5.98\"></path><path d=\"M10 18.5h4c1.65 0 3-1.35 3-3v-3c0-1.65-1.35-3-3-3h-4c-1.65 0-3 1.35-3 3v3c0 1.65 1.35 3 3 3z\"></path><path d=\"M12 9.5v9\"></path><path d=\"M7.5 14h9\"></path>","simcard-2":"<path d=\"M2 14.03v-3.72c0-2.34 1.56-3.89 3.89-3.89h3.83c1.03 0 2.02.41 2.75 1.14l2.39 2.38A3.89 3.89 0 0 1 16 12.69v5.39c0 2.34-1.56 3.89-3.89 3.89H5.89C3.56 21.97 2 20.42 2 18.08\"></path><path d=\"M22 8.25v5.39c0 2.33-1.56 3.89-3.89 3.89H16v-4.84c0-1.03-.41-2.02-1.14-2.75l-2.39-2.38a3.89 3.89 0 0 0-2.75-1.14H8v-.56c0-2.33 1.56-3.89 3.89-3.89h3.83c1.03 0 2.02.41 2.75 1.14l2.39 2.39A3.89 3.89 0 0 1 22 8.25z\"></path>","simcard":"<path d=\"M3 11v6c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93c0-1.33-.53-2.6-1.46-3.54l-3.07-3.07A4.994 4.994 0 0 0 12.93 2H8C5 2 3 4 3 7\"></path><path d=\"M9.5 14l-2 2 2 2\"></path><path d=\"M14.5 14l2 2-2 2\"></path>","size":"<path d=\"M21.97 5.85v3.3c0 2.75-1.1 3.85-3.85 3.85h-1.15v-.75c0-3.75-1.5-5.25-5.25-5.25h-.75V5.85c0-2.75 1.1-3.85 3.85-3.85h3.3c2.75 0 3.85 1.1 3.85 3.85z\"></path><path d=\"M1.97 12.25C1.97 8.5 3.47 7 7.22 7h4.5c3.75 0 5.25 1.5 5.25 5.25v4.5c0 3.75-1.5 5.25-5.25 5.25h-4.5c-3.75 0-5.25-1.5-5.25-5.25v-.74\"></path>","slash":"<path d=\"M18.9 5l-14 14\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","slider-horizontal-1":"<path d=\"M2 19.5v-15\"></path><path d=\"M22 19V4\"></path><path d=\"M5 12.45V7.5c0-.62.02-1.17.09-1.66C5.38 3.21 6.62 2.5 10 2.5h4c3.38 0 4.62.71 4.91 3.34.07.49.09 1.04.09 1.66v9c0 .62-.02 1.17-.09 1.66-.29 2.63-1.53 3.34-4.91 3.34h-4c-3.38 0-4.62-.71-4.91-3.34-.07-.49-.09-1.04-.09-1.66\"></path>","slider-horizontal":"<path d=\"M18 7v10c0 .62-.02 1.17-.09 1.66C17.62 21.29 16.38 22 13 22h-2c-3.38 0-4.62-.71-4.91-3.34C6.02 18.17 6 17.62 6 17V7c0-.62.02-1.17.09-1.66C6.38 2.71 7.62 2 11 2h2c3.38 0 4.62.71 4.91 3.34.07.49.09 1.04.09 1.66z\"></path><path d=\"M2 8.67C2 6 2.67 5.33 5.33 5.33h.34c.15 0 .28 0 .42.01C6.02 5.83 6 6.38 6 7v10c0 .62.02 1.17.09 1.66-.14.01-.27.01-.42.01h-.34C2.67 18.67 2 18 2 15.33v-2.2\"></path><path d=\"M22 8.67v6.66c0 2.67-.67 3.34-3.33 3.34h-.34c-.15 0-.28 0-.42-.01.07-.49.09-1.04.09-1.66V7c0-.62-.02-1.17-.09-1.66.14-.01.27-.01.42-.01h.34C21.33 5.33 22 6 22 8.67z\"></path>","slider-vertical-1":"<path d=\"M17 18H7c-.62 0-1.17-.02-1.66-.09C2.71 17.62 2 16.38 2 13v-2c0-3.38.71-4.62 3.34-4.91C5.83 6.02 6.38 6 7 6h10c.62 0 1.17.02 1.66.09C21.29 6.38 22 7.62 22 11v2c0 3.38-.71 4.62-3.34 4.91-.49.07-1.04.09-1.66.09z\"></path><path d=\"M15.33 2c2.67 0 3.34.67 3.34 3.33v.34c0 .15 0 .28-.01.42C18.17 6.02 17.62 6 17 6H7c-.62 0-1.17.02-1.66.09-.01-.14-.01-.27-.01-.42v-.34C5.33 2.67 6 2 8.67 2h2.2\"></path><path d=\"M15.33 22H8.67c-2.67 0-3.34-.67-3.34-3.33v-.34c0-.15 0-.28.01-.42.49.07 1.04.09 1.66.09h10c.62 0 1.17-.02 1.66-.09.01.14.01.27.01.42v.34c0 2.66-.67 3.33-3.34 3.33z\"></path>","slider-vertical":"<path d=\"M11.55 5h4.95c.62 0 1.17.02 1.66.09 2.63.29 3.34 1.53 3.34 4.91v4c0 3.38-.71 4.62-3.34 4.91-.49.07-1.04.09-1.66.09h-9c-.62 0-1.17-.02-1.66-.09C3.21 18.62 2.5 17.38 2.5 14v-4c0-3.38.71-4.62 3.34-4.91C6.33 5.02 6.88 5 7.5 5\"></path><path d=\"M4.5 2h15\"></path><path d=\"M5 22h15\"></path>","slider":"<path d=\"M15 2c2.5 0 4 1.8 4 4v12c0 2.2-1.5 4-4 4H9c-2.5 0-4-1.8-4-4V6c0-2.2 1.5-4 4-4h1.98\"></path><path d=\"M5 16.01h14\"></path><path d=\"M2 4v16\"></path><path d=\"M22 4v16\"></path>","smallcaps":"<path d=\"M10.4 2.57h6.36c1.02 0 1.85.83 1.85 1.85v1.51\"></path><path d=\"M1.99 5.93V4.42c0-1.02.83-1.85 1.85-1.85h2.75\"></path><path d=\"M10.3 18.1V2.57\"></path><path d=\"M6.9 18.1h5.58\"></path><path d=\"M13.68 10.34h7.01c.73 0 1.32.59 1.32 1.32v.8\"></path><path d=\"M16.08 21.43V10.87\"></path><path d=\"M13.94 21.43h4.28\"></path>","smart-car":"<path d=\"M8.39 7.62H6.87c-1.86 0-2.28.93-2.51 2.08l-.85 4.05h12l-.85-4.05c-.24-1.14-.65-2.08-2.51-2.08\"></path><path d=\"M16.89 19.19l.11 1.17c.08.88-.62 1.64-1.52 1.64h-1.41c-.81 0-.92-.35-1.07-.77l-.15-.45c-.21-.61-.35-1.03-1.43-1.03H7.58c-1.08 0-1.24.47-1.43 1.03l-.15.45c-.14.43-.25.77-1.07.77H3.52c-.9 0-1.61-.76-1.52-1.64l.42-4.57c.11-1.13.32-2.05 2.29-2.05h9.57c1.97 0 2.18.92 2.29 2.05\"></path><path d=\"M3.5 11.5h-.75\"></path><path d=\"M16.25 11.5h-.75\"></path><path d=\"M5 16.75h2.25\"></path><path d=\"M11.75 16.75H14\"></path><path d=\"M18.71 8.74c.28-.65.18-1.53-.34-2.3-.51-.77-1.29-1.2-2-1.19\"></path><path d=\"M18.38 2.54c-.57-.28-1.16-.47-1.74-.54\"></path><path d=\"M21.82 9.73c.42-1.51.12-3.36-.95-4.96\"></path>","smart-home":"<path d=\"M21.97 11.28c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01L3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l.28 1.68\"></path><path d=\"M11.4 21.81h6.2c1.43 0 2.8-1.16 3.04-2.57l.63-3.74\"></path><path d=\"M2 19c1.76.04 2.96 1.24 3 3\"></path><path d=\"M2 16c.52.01 1.02.07 1.5.18\"></path><path d=\"M8 22c-.01-.76-.14-1.47-.37-2.12-.27-.76-.67-1.43-1.19-1.99\"></path><path d=\"M1.996 22h.009\"></path>","smileys":"<path d=\"M2 6.2C2 3.2 3.2 2 6.2 2h3.6c3 0 4.2 1.2 4.2 4.2V10c-2.79.05-3.95 1.21-4 4H6.2C3.2 14 2 12.8 2 9.8\"></path><path d=\"M6.96 5.87c-.53-.36-1.23-.36-1.76.02\"></path><path d=\"M10.96 5.87c-.53-.36-1.23-.36-1.76.02\"></path><path d=\"M8.16 11.42H5.84c-.3 0-.54-.24-.54-.54 0-1.49 1.21-2.7 2.7-2.7.64 0 1.23.22 1.69.59\"></path><path d=\"M22 17.8c0 3-1.2 4.2-4.2 4.2h-3.6c-3 0-4.2-1.2-4.2-4.2V14c.05-2.79 1.21-3.95 4-4h3.8c3 0 4.2 1.2 4.2 4.2\"></path><path d=\"M14.96 13.62c-.53.36-1.23.36-1.76-.02\"></path><path d=\"M18.96 13.62c-.53.36-1.23.36-1.76-.02\"></path><path d=\"M13.84 16.18h4.32c.3 0 .54.24.54.54 0 1.49-1.21 2.7-2.7 2.7-1.49 0-2.7-1.21-2.7-2.7 0-.3.24-.54.54-.54z\"></path>","sms-edit":"<path d=\"M2 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v3\"></path><path d=\"M12 20.5H7c-3 0-5-1.5-5-5v-3.03\"></path><path d=\"M17 9l-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9\"></path><path d=\"M19.21 14.77l-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01z\"></path><path d=\"M18.7 15.28c.3 1.08 1.14 1.92 2.22 2.22\"></path>","sms-notification":"<path d=\"M2 8.5c0-3.5 2-5 5-5h7\"></path><path d=\"M22 10.5v5c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-2.52\"></path><path d=\"M7 9l3.13 2.5c1.03.82 2.72.82 3.75 0l1.18-.94\"></path><path d=\"M19.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z\"></path>","sms-search":"<path d=\"M2 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v3\"></path><path d=\"M12 20.5H7c-3 0-5-1.5-5-5v-3.06\"></path><path d=\"M17 9l-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9\"></path><path d=\"M18.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z\"></path><path d=\"M22 22l-1-1\"></path>","sms-star":"<path d=\"M2 8.5c0-3.5 2-5 5-5h5\"></path><path d=\"M22 11.5v4c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-2.52\"></path><path d=\"M7 9l3.13 2.5c1.03.82 2.72.82 3.75 0\"></path><path d=\"M19.48 2.82l.28.57c.14.28.49.54.8.6l.38.06c1.14.19 1.41 1.03.59 1.86l-.35.35c-.23.24-.36.7-.29 1.02l.05.21c.31 1.38-.42 1.91-1.62 1.19l-.26-.15c-.31-.18-.81-.18-1.12 0l-.26.15c-1.21.73-1.94.19-1.62-1.19l.05-.21c.07-.32-.06-.78-.29-1.02l-.35-.35c-.82-.83-.55-1.67.59-1.86l.38-.06c.3-.05.66-.32.8-.6l.28-.57c.54-1.09 1.42-1.09 1.96 0z\"></path>","sms-tracking":"<path d=\"M22 12.98v2.52c0 3.5-2 5-5 5H7\"></path><path d=\"M2 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5\"></path><path d=\"M17 9l-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9\"></path><path d=\"M2 16.5h6\"></path><path d=\"M2 12.5h3\"></path>","sms":"<path d=\"M22 12.98v2.52c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5\"></path><path d=\"M17 9l-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9\"></path>","sort":"<path d=\"M10 7h11\"></path><path d=\"M3 7h3\"></path><path d=\"M6 12h12\"></path><path d=\"M10 17h4\"></path>","sound":"<path d=\"M3 8.25v7.5\"></path><path d=\"M7.5 5.75v12.5\"></path><path d=\"M12 9.96v10.79\"></path><path d=\"M12 3.25v2.72\"></path><path d=\"M16.5 5.75v12.5\"></path><path d=\"M21 8.25v7.5\"></path>","speaker":"<path d=\"M5 13.99V6c0-3 1-4 4-4h6c3 0 4 1 4 4v12c0 3-1 4-4 4H9c-3 0-4-1-4-4\"></path><path d=\"M12 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"></path><path d=\"M13.5 7.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5S11.17 9 12 9\"></path>","speedometer":"<path d=\"M4.84 19.48A9.966 9.966 0 0 1 2 12.49C2 8.8 4 5.58 6.97 3.84c.31-.18.63-.35.97-.49\"></path><path d=\"M19.14 19.5a9.964 9.964 0 0 0 2.86-7c0-5.52-4.48-10-10-10\"></path><path d=\"M8.62 18.12c0 1.86 1.51 3.38 3.38 3.38 1.87 0 3.38-1.51 3.38-3.38 0-1.87-1.51-3.38-3.38-3.38a3.38 3.38 0 0 0-3.38 3.38z\"></path><path d=\"M15.25 12H16c.82 0 1.5-.67 1.5-1.5 0-.82-.68-1.5-1.5-1.5s-1.5.67-1.5 1.5v.75c0 .41.34.75.75.75z\"></path>","star-1":"<path d=\"M20.1 8.61c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.95-1.91 2.51-1.91 3.47 0l1.76 3.52c.1.21.28.42.49.59\"></path>","star-slash":"<path d=\"M16.05 7.67c-.24-.18-.44-.41-.55-.64l-1.76-3.52c-.95-1.91-2.51-1.91-3.47 0L8.5 7.03c-.12.25-.34.48-.59.67\"></path><path d=\"M5.28 18.65l.57-2.47c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28\"></path><path d=\"M20.1 8.61c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77\"></path><path d=\"M22 2L2 22\"></path>","star":"<path d=\"M21.32 11.91c1.17-1.17.79-2.35-.84-2.63l-2.55-.42c-.43-.07-.94-.45-1.13-.84L15.39 5.2c-.76-1.53-2.01-1.53-2.77 0l-1.41 2.82c-.19.39-.7.76-1.13.84l-2.55.42c-1.63.27-2.01 1.45-.84 2.63l1.99 1.99c.33.33.52.98.41 1.45l-.57 2.46c-.45 1.94.59 2.7 2.3 1.68l2.39-1.42c.43-.26 1.15-.26 1.58 0l2.39 1.42c1.71 1.01 2.75.26 2.3-1.68l-.57-2.46\"></path><path d=\"M8 5H2\"></path><path d=\"M5 19H2\"></path><path d=\"M3 12H2\"></path>","status-up":"<path d=\"M6.88 18.15v-2.07\"></path><path d=\"M12 18.15v-4.14\"></path><path d=\"M17.12 18.15v-6.22\"></path><path d=\"M17.12 5.85l-.46.54a18.882 18.882 0 0 1-9.78 6.04\"></path><path d=\"M14.19 5.85h2.93v2.92\"></path><path d=\"M2 12.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","status":"<path d=\"M2.45 14.97c1.07 3.44 3.95 6.09 7.53 6.82\"></path><path d=\"M2.05 10.98A9.996 9.996 0 0 1 12 2c5.18 0 9.44 3.94 9.95 8.98\"></path><path d=\"M14.01 21.8c3.57-.73 6.44-3.35 7.53-6.78\"></path>","sticker":"<path d=\"M21.82 10.24c.15.9.19 1.77.11 2.62-.02.19-.05.37-.1.55A5.96 5.96 0 0 0 17.97 12c-3.31 0-6 2.69-6 6 0 1.47.53 2.82 1.41 3.86-.18.05-.36.08-.55.1-.85.08-1.72.04-2.62-.11-4.11-.7-7.42-4.03-8.1-8.15A10.01 10.01 0 0 1 13.67 2.14c2.29.38 4.34 1.57 5.83 3.27\"></path><path d=\"M21.83 13.41c-.14.49-.4.93-.77 1.3l-6.38 6.38c-.37.37-.81.63-1.3.77A5.96 5.96 0 0 1 11.97 18c0-3.31 2.69-6 6-6 1.47 0 2.82.53 3.86 1.41z\"></path>","stickynote":"<path d=\"M8 2v3\"></path><path d=\"M16 2v3\"></path><path d=\"M7 11h8\"></path><path d=\"M7 15h5\"></path><path d=\"M3 9.65c0-4.7 1.67-5.96 5-6.15h8c3.33.18 5 1.45 5 6.15V16\"></path><path d=\"M15 22H9c-5 0-6-2.06-6-6.18v-2.09\"></path><path d=\"M21 16l-6 6v-3c0-2 1-3 3-3h3z\"></path>","stop-circle":"<path d=\"M16.23 13.27v-2.54c0-2.12-.85-2.96-2.96-2.96h-2.54c-2.12 0-2.96.85-2.96 2.96v2.54c0 2.12.85 2.96 2.96 2.96h1.78\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","stop":"<path d=\"M3 9.3C3 4.8 4.8 3 9.3 3h5.4C19.2 3 21 4.8 21 9.3v5.4c0 4.5-1.8 6.3-6.3 6.3H9.3C4.8 21 3 19.2 3 14.7v-.71\"></path>","story":"<path d=\"M16.42 7.95a6.253 6.253 0 0 1 0 8.84 6.253 6.253 0 0 1-8.84 0 6.253 6.253 0 0 1 0-8.84 6.254 6.254 0 0 1 5.02-1.8\"></path><path d=\"M8.251 21.64c-2-.8-3.75-2.25-4.91-4.26a9.89 9.89 0 0 1-1.25-6.25\"></path><path d=\"M5.85 4.48A9.936 9.936 0 0 1 12 2.36c2.27 0 4.36.77 6.04 2.05\"></path><path d=\"M15.75 21.64c2-.8 3.75-2.25 4.91-4.26a9.89 9.89 0 0 0 1.25-6.25\"></path>","strongbox-2":"<path d=\"M2 12.83V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M8 19h8c2 0 3-1 3-3V8c0-2-1-3-3-3H8C6 5 5 6 5 8v8c0 2 1 3 3 3z\"></path><path d=\"M5 9.5h2.48a2.5 2.5 0 0 1 0 5H5\"></path><path d=\"M19 9.99h-3\"></path><path d=\"M19 14h-3\"></path><path d=\"M7.2 12h.1\"></path>","strongbox":"<path d=\"M2 15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v1.91h7.65\"></path><path d=\"M14.35 10.91c-.1.71-.52 1.31-1.1 1.67v1.98a1.25 1.25 0 0 1-2.5 0v-1.98c-.58-.36-1-.96-1.1-1.67-.02-.11-.03-.23-.03-.35 0-1.52 1.44-2.7 3.02-2.28.8.21 1.45.86 1.66 1.66.09.33.1.66.05.97z\"></path><path d=\"M18 10.91h-3.65\"></path>","subtitle":"<path d=\"M2 12.99V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M17.5 17.08h-1.85\"></path><path d=\"M12.97 17.08H6.5\"></path><path d=\"M17.5 13.32h-5.53\"></path><path d=\"M9.27 13.32H6.5\"></path>","sun-1":"<path d=\"M7 7.85a6.5 6.5 0 1 0 5-2.35\"></path><path d=\"M19.14 19.14l-.13-.13m0-14.02l.13-.13-.13.13zM4.86 19.14l.13-.13-.13.13zM12 2.08V2v.08zM12 22v-.08.08zM2.08 12H2h.08zM22 12h-.08.08zM4.99 4.99l-.13-.13.13.13z\"></path>","sun-fog":"<path d=\"M18 15h2\"></path><path d=\"M4 15h11\"></path><path d=\"M12 5.5A6.5 6.5 0 0 0 5.5 12\"></path><path d=\"M18.5 12c0-2.31-1.21-4.35-3.03-5.5\"></path><path d=\"M4.99 4.99l-.13-.13m14.15.13l.13-.13-.13.13zM12 2.08V2v.08zM2.08 12H2h.08zM22 12h-.08.08z\"></path><path d=\"M6 18h12\"></path><path d=\"M9 21h6\"></path>","sun":"<path d=\"M12 8V6.5\"></path><path d=\"M12 4V3\"></path><path d=\"M12 21v-5.5\"></path><path d=\"M10 3h4\"></path><path d=\"M10 21h4\"></path><path d=\"M8.97 10.25L4.21 7.5\"></path><path d=\"M19.79 16.5l-4.76-2.75\"></path><path d=\"M3.21 9.23l2-3.46\"></path><path d=\"M18.79 18.23l2-3.46\"></path><path d=\"M8.97 13.75A3.47 3.47 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 0 7\"></path><path d=\"M19.79 7.5l-2.74 1.58-2.02 1.17\"></path><path d=\"M8.97 13.75L4.21 16.5\"></path><path d=\"M20.79 9.23l-2-3.46\"></path><path d=\"M5.21 18.23l-2-3.46\"></path>","tag-2":"<path d=\"M15.3 4.17a4.75 4.75 0 0 0-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.34.44 2.65 1.39 3.6l4.53 4.53a4.78 4.78 0 0 0 6.75 0l4.39-4.39a4.78 4.78 0 0 0 0-6.75L18.7 7.55\"></path><path d=\"M8.51 11.8c.3.13.64.2.99.2a2.5 2.5 0 0 0 0-5A2.5 2.5 0 0 0 7 9.5\"></path><path d=\"M13 17l4-4\"></path>","tag-cross":"<path d=\"M12.92 3.75h-2.64c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.053 4.053 0 0 0 0 5.46l3.53 3.88a5.014 5.014 0 0 0 3.7 1.64H17c2.76 0 5-2.24 5-5v-6.5c0-2.76-2.24-5-5-5\"></path><path d=\"M16 14.47l-4.94-4.94\"></path><path d=\"M15.21 10.32l.79-.79\"></path><path d=\"M11.06 14.47l2.28-2.29\"></path>","tag-right":"<path d=\"M4.22 3.1c-1.75 0-2.81 1.92-1.89 3.41l2.77 4.43c.37.59.37 1.55 0 2.14l-2.77 4.43c-.93 1.48.14 3.41 1.89 3.41h10.45c.61 0 1.41-.4 1.78-.89l5.18-6.9c.46-.61.5-1.64.1-2.28l-4.18-6.68c-.36-.58-1.21-1.05-1.89-1.05h-7\"></path>","tag-user":"<path d=\"M21 8.95v6.93c0 1.64-1.34 2.97-3 2.97h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.97C3 3.33 4.34 2 6 2h12c1.66 0 3 1.33 3 2.97\"></path><path d=\"M12.07 8.95h-.15A1.945 1.945 0 0 1 10.04 7c0-1.08.87-1.95 1.95-1.95s1.95.88 1.95 1.95c.01 1.06-.82 1.92-1.87 1.95z\"></path><path d=\"M9.25 15.19c1.51 1.01 3.99 1.01 5.5 0 1.33-.89 1.33-2.34 0-3.23-1.51-1.01-3.99-1.01-5.5 0\"></path>","tag":"<path d=\"M19.83 15.45a4.78 4.78 0 0 0 0-6.75L15.3 4.17a4.75 4.75 0 0 0-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.34.44 2.65 1.39 3.6l4.53 4.53a4.78 4.78 0 0 0 6.75 0l1.52-1.52\"></path><path d=\"M7 9.5a2.5 2.5 0 0 0 5 0A2.5 2.5 0 0 0 9.5 7\"></path>","task-square":"<path d=\"M12.37 8.88h5.25\"></path><path d=\"M6.38 8.88l.75.75 2.25-2.25\"></path><path d=\"M12.37 15.88h5.25\"></path><path d=\"M6.38 15.88l.75.75 2.25-2.25\"></path><path d=\"M2 12.95V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","task":"<path d=\"M11 19.5h10\"></path><path d=\"M20 12.5h1\"></path><path d=\"M11 12.5h5.49\"></path><path d=\"M11 5.5h10\"></path><path d=\"M3 5.5l1 1 3-3\"></path><path d=\"M3 12.5l1 1 3-3\"></path><path d=\"M3 19.5l1 1 3-3\"></path>","teacher":"<path d=\"M6 5.17L4.03 6.46c-1.93 1.26-1.93 4.08 0 5.34l6.02 3.93c1.08.71 2.86.71 3.94 0l5.99-3.93c1.92-1.26 1.92-4.07 0-5.33l-5.99-3.93c-1.08-.71-2.86-.71-3.94 0\"></path><path d=\"M5.63 13.08l-.01 4.69c0 1.27.98 2.63 2.18 3.03l3.19 1.06c.55.18 1.46.18 2.02 0l3.19-1.06c1.2-.4 2.18-1.76 2.18-3.03v-4.64\"></path><path d=\"M21.4 15V9\"></path>","text-block":"<path d=\"M2 12.94V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M7 8.89c3.15-1.57 6.85-1.57 10 0\"></path><path d=\"M12 16.3V7.93\"></path>","text-bold":"<path d=\"M4.88 4.5c0-1.1.9-2 2-2H12c2.62 0 4.75 2.13 4.75 4.75S14.62 12 12 12H4.88V4.5z\"></path><path d=\"M4.88 13.98V12h9.5c2.62 0 4.75 2.13 4.75 4.75S17 21.5 14.38 21.5h-7.5c-1.1 0-2-.9-2-2v-1.54\"></path>","text-italic":"<path d=\"M9.62 3h9.25\"></path><path d=\"M5.12 21h9.25\"></path><path d=\"M10.5 17.99L9.75 21\"></path><path d=\"M14.25 3L11.5 14.01\"></path>","text-underline":"<path d=\"M5 21h14\"></path><path d=\"M12 17c3.87 0 7-3.13 7-7V3\"></path><path d=\"M5 3v7c0 2.17.98 4.1 2.53 5.38\"></path>","text":"<path d=\"M2.67 7.17V5.35c0-1.15.93-2.07 2.07-2.07h14.52c1.15 0 2.07.93 2.07 2.07v1.82\"></path><path d=\"M12 13V4.11\"></path><path d=\"M12 20.72v-3.75\"></path><path d=\"M8.06 20.72h7.88\"></path>","textalign-center":"<path d=\"M7.26 9.5h9.48\"></path><path d=\"M3 14.5h18\"></path><path d=\"M7.26 19.5h9.48\"></path><path d=\"M10.05 4.5H21\"></path><path d=\"M3 4.5h2.98\"></path>","textalign-justifycenter":"<path d=\"M3 4.5h18\"></path><path d=\"M3 14.5h18\"></path><path d=\"M3 19.5h18\"></path><path d=\"M13.95 9.5H3\"></path><path d=\"M21 9.5h-2.98\"></path>","textalign-justifyleft":"<path d=\"M12 4.5H3\"></path><path d=\"M12 9.5H3\"></path><path d=\"M21 14.5H3\"></path><path d=\"M10.05 19.5H21\"></path><path d=\"M3 19.5h2.98\"></path>","textalign-justifyright":"<path d=\"M12 4.5h9\"></path><path d=\"M12 9.5h9\"></path><path d=\"M3 14.5h18\"></path><path d=\"M13.95 19.5H3\"></path><path d=\"M21 19.5h-2.98\"></path>","textalign-left":"<path d=\"M10.05 4.5H21\"></path><path d=\"M3 4.5h2.98\"></path><path d=\"M3 9.5h9.47\"></path><path d=\"M3 14.5h18\"></path><path d=\"M3 19.5h9.47\"></path>","textalign-right":"<path d=\"M11.53 9.5H21\"></path><path d=\"M3 14.5h18\"></path><path d=\"M11.53 19.5H21\"></path><path d=\"M13.95 4.5H3\"></path><path d=\"M21 4.5h-2.98\"></path>","tick-circle":"<path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path><path d=\"M15 10.38l1.12-1.13\"></path><path d=\"M7.88 12l2.74 2.75 2.55-2.54\"></path>","tick-square":"<path d=\"M2 12.96V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M15 10.38l1.12-1.13\"></path><path d=\"M7.88 12l2.74 2.75 2.55-2.54\"></path>","ticket-2":"<path d=\"M19.03 14.97c0 1.29 1.06 2.34 2.35 2.34 0 3.75-.94 4.69-4.69 4.69H7.31c-3.75 0-4.69-.94-4.69-4.69v-.46a2.36 2.36 0 0 0 2.35-2.35 2.36 2.36 0 0 0-2.35-2.35v-.46C2.63 7.94 3.56 7 7.31 7h9.37c3.75 0 4.69.94 4.69 4.69v.94\"></path><path d=\"M16.33 7H7.24l2.93-2.93c2.39-2.39 3.59-2.39 5.98 0l.6.6c-.63.63-.78 1.56-.42 2.33z\"></path><path d=\"M10 7v15\"></path>","ticket-discount":"<path d=\"M22 10V9c0-4-1-5-5-5H7C3 4 2 5 2 9v.5a2.5 2.5 0 0 1 0 5v.5c0 4 1 5 5 5h10c4 0 5-1 5-5a2.5 2.5 0 0 1-2.5-2.5\"></path><path d=\"M8.63 15.68l6.73-6.73\"></path><path d=\"M14.995 14.75h.009\"></path><path d=\"M8.995 9.25h.008\"></path>","ticket-expired":"<path d=\"M22 10.75v-.92c0-3.7-.92-4.62-4.62-4.62H11V12\"></path><path d=\"M10.91 20h6.47c3.7 0 4.62-.92 4.62-4.62-1.28 0-2.31-1.04-2.31-2.31\"></path><path d=\"M11 17v3H8.23c-1.48 0-2.35-1.01-3.31-3.33l-.18-.45a2.35 2.35 0 0 0 1.29-3.09 2.37 2.37 0 0 0-3.1-1.29l-.17-.43c-1.44-3.52-.94-4.75 2.58-6.2l2.64-1.08L11 11.45V14\"></path><path d=\"M8.17 20H8\"></path>","ticket-star":"<path d=\"M3.24 15.27c-.38.14-.8.22-1.23.22C2.1 19.08 3.17 20 7 20h10c4 0 5-1 5-5V9c0-4-1-5-5-5H7c-3.83 0-4.9.92-4.99 4.5 1.93 0 3.49 1.57 3.49 3.5\"></path><path d=\"M9 4v3.5\"></path><path d=\"M9 16.5V20\"></path><path d=\"M14.86 14.21a.445.445 0 0 0-.39 0l-1.23.65c-.31.16-.66-.1-.6-.44l.24-1.37a.422.422 0 0 0-.12-.37l-.99-.97A.416.416 0 0 1 12 11l1.38-.2c.14-.02.25-.1.31-.23l.61-1.25a.41.41 0 0 1 .74 0l.62 1.25c.06.12.18.21.31.23l1.38.2c.34.05.48.47.23.71l-1 .97c-.1.09-.14.23-.12.37\"></path>","ticket":"<path d=\"M22 10V9c0-4-1-5-5-5H7C3 4 2 5 2 9v.5a2.5 2.5 0 0 1 0 5v.5c0 4 1 5 5 5h10c4 0 5-1 5-5a2.5 2.5 0 0 1-2.5-2.5\"></path><path d=\"M10 4v16\"></path>","timer-1":"<path d=\"M12 8v5\"></path><path d=\"M9 2h6\"></path><path d=\"M5 8a8.696 8.696 0 0 0-1.75 5.25C3.25 18.08 7.17 22 12 22s8.75-3.92 8.75-8.75S16.83 4.5 12 4.5c-1.26 0-2.45.26-3.53.74\"></path>","timer-pause":"<path d=\"M8.01 5.46c1.2-.61 2.55-.96 3.99-.96 4.83 0 8.75 3.92 8.75 8.75\"></path><path d=\"M12 22c-4.83 0-8.75-3.92-8.75-8.75 0-1.98.66-3.8 1.76-5.26\"></path><path d=\"M12 8v5\"></path><path d=\"M9 2h6\"></path><path d=\"M19 17v4\"></path><path d=\"M16 17v4\"></path>","timer-start":"<path d=\"M12 8v5\"></path><path d=\"M8.01 5.46c1.2-.61 2.55-.96 3.99-.96 4.83 0 8.75 3.92 8.75 8.75\"></path><path d=\"M12 22c-4.83 0-8.75-3.92-8.75-8.75 0-1.98.66-3.8 1.76-5.26\"></path><path d=\"M9 2h6\"></path><path d=\"M14.9 18.5v-1.16c0-1.43 1.02-2.02 2.26-1.3l1 .58 1 .58c1.24.72 1.24 1.89 0 2.61l-1 .58-1 .58c-1.24.72-2.26.13-2.26-1.3V18.5z\"></path>","timer":"<path d=\"M9.61 9.83l7.65 6.95C19.29 18.62 19 22 15.24 22H8.76C5 22 4.71 18.62 6.74 16.78l10.52-9.56C19.29 5.38 19 2 15.24 2H8.76C5 2 4.71 5.38 6.74 7.22\"></path>","toggle-off-circle":"<path d=\"M10 20c-4.42 0-8-3.58-8-8s3.58-8 8-8h4c4.42 0 8 3.58 8 8 0 4.08-3.05 7.44-6.99 7.94\"></path><path d=\"M10 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4c0-.48.09-.95.24-1.38\"></path>","toggle-off":"<path d=\"M5.5 10.8v2.4c0 2 .8 2.8 2.8 2.8h2.4c2 0 2.8-.8 2.8-2.8v-2.4c0-2-.8-2.8-2.8-2.8H8.3\"></path><path d=\"M12 20H7c-4 0-5-1-5-5V9c0-4 1-5 5-5h10c4 0 5 1 5 5v6c0 4-1 5-5 5\"></path>","toggle-on-circle":"<path d=\"M14 20c4.42 0 8-3.58 8-8s-3.58-8-8-8h-4c-4.42 0-8 3.58-8 8 0 4.08 3.05 7.44 6.99 7.94\"></path><path d=\"M14 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.48-.09-.95-.24-1.38\"></path>","toggle-on":"<path d=\"M18.5 10.8v2.4c0 2-.8 2.8-2.8 2.8h-2.4c-2 0-2.8-.8-2.8-2.8v-2.4c0-2 .8-2.8 2.8-2.8h2.4\"></path><path d=\"M12 20h5c4 0 5-1 5-5V9c0-4-1-5-5-5H7C3 4 2 5 2 9v6c0 4 1 5 5 5\"></path>","trade":"<path d=\"M22 8.5a6.5 6.5 0 0 1-7.02 6.48 6.509 6.509 0 0 0-5.96-5.96A6.5 6.5 0 1 1 22 8.5z\"></path><path d=\"M4.68 20.76A6.5 6.5 0 1 1 8.5 22\"></path><path d=\"M5.59 2H3c-.55 0-1 .45-1 1v2.59c0 .89 1.08 1.34 1.71.71L6.3 3.71C6.92 3.08 6.48 2 5.59 2z\"></path><path d=\"M18.41 22H21c.55 0 1-.45 1-1v-2.59c0-.89-1.08-1.34-1.71-.71l-2.59 2.59c-.62.63-.18 1.71.71 1.71z\"></path>","transaction-minus":"<path d=\"M14.16 10h.59\"></path><path d=\"M9.25 10h2.4\"></path><path d=\"M3.5 11v7.3c0 2.66 1.46 3.29 3.23 1.39l.01-.01c.82-.87 2.07-.8 2.78.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35c.72-.96 1.97-1.03 2.79-.15 1.78 1.9 3.23 1.27 3.23-1.39V7.04c0-4.03-.94-5.04-4.72-5.04H8.21C4.43 2 3.49 3.01 3.49 7.04\"></path>","translate":"<path d=\"M19.06 18.67l-2.14-4.27-2.14 4.27\"></path><path d=\"M15.17 17.91h3.52\"></path><path d=\"M19.92 21.02c-.84.61-1.87.98-2.99.98a5.08 5.08 0 1 1 5.08-5.08\"></path><path d=\"M11.95 8.93C12 11 11 12 8.93 11.95H5.01C3 12 2 11 2 8.93V5.01c0-2.02 1-3.02 3.02-3.02h3.92c2.07 0 3.07 1 3.02 3.02\"></path><path d=\"M9.01 5.85H4.95\"></path><path d=\"M6.969 5.17v.68\"></path><path d=\"M7.99 5.84c0 1.75-1.37 3.17-3.05 3.17\"></path><path d=\"M9.01 9.01c-.73 0-1.39-.39-1.85-1.01\"></path><path d=\"M2 15c0 3.87 3.13 7 7 7l-1.05-1.75\"></path><path d=\"M22 9c0-3.87-3.13-7-7-7l1.05 1.75\"></path>","trash":"<path d=\"M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98\"></path><path d=\"M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3\"></path><path d=\"M15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14\"></path><path d=\"M18.85 9.14l-.65 10.07\"></path><path d=\"M10.33 16.5h3.33\"></path><path d=\"M12.82 12.5h1.68\"></path><path d=\"M9.5 12.5h.83\"></path>","tree":"<path d=\"M16.17 10.06H7.83c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.79 0l4.17 5.84c.7.96.29 1.75-.89 1.75z\"></path><path d=\"M18.78 15.67c.93 1.28.39 2.33-1.19 2.33H6.42c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.57L16.17 12\"></path><path d=\"M12 22v-4\"></path>","trend-down":"<path d=\"M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M11.17 12l-.47.7-3.2-3.2\"></path><path d=\"M16.5 14.5l-1.51-1.51L14 12\"></path><path d=\"M14.5 14.5h2v-2\"></path>","trend-up":"<path d=\"M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M11.17 12l-.47-.7-3.2 3.2\"></path><path d=\"M16.5 9.5l-1.51 1.51L14 12\"></path><path d=\"M14.5 9.5h2v2\"></path>","triangle":"<path d=\"M8.76 5c1.78-3.21 4.7-3.21 6.48 0l2.94 5.29 3.12 5.62c1.68 3.03.22 5.51-3.24 5.51H5.94c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62.59-1.05\"></path><path d=\"M21.44 20L12 13.39 2.56 20\"></path><path d=\"M12 3v10.39\"></path>","truck-fast":"<path d=\"M12 14h1c1.1 0 2-.9 2-2V2H6c-1.5 0-2.81.83-3.49 2.05\"></path><path d=\"M2 17c0 1.66 1.34 3 3 3h1c0-1.1.9-2 2-2s2 .9 2 2h4c0-1.1.9-2 2-2s2 .9 2 2h1c1.66 0 3-1.34 3-3v-3h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29l-1.71-2.99A2.016 2.016 0 0 0 16.84 5H15v7c0 1.1-.9 2-2 2h-1\"></path><path d=\"M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path><path d=\"M16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path><path d=\"M22 12v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29L22 12z\"></path><path d=\"M2 8h6\"></path><path d=\"M2 11h4\"></path><path d=\"M2 14h2\"></path>","truck-tick":"<path d=\"M15 2v10c0 1.1-.9 2-2 2H2V7.62c.73.87 1.85 1.41 3.09 1.38 1.01-.02 1.92-.41 2.6-1.06.31-.26.57-.59.77-.95.36-.61.56-1.33.54-2.08-.03-1.17-.55-2.2-1.36-2.91H15z\"></path><path d=\"M20.29 9H19c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v3c0 1.66-1.34 3-3 3h-1c0-1.1-.9-2-2-2s-2 .9-2 2h-4c0-1.1-.9-2-2-2s-2 .9-2 2H5c-1.06 0-1.99-.55-2.52-1.37\"></path><path d=\"M2 14h11c1.1 0 2-.9 2-2V5h1.84c.36 0 .71.1 1.01.27\"></path><path d=\"M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path><path d=\"M16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path><path d=\"M22 12v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29L22 12z\"></path><path d=\"M9 4.91c.02.75-.18 1.47-.54 2.08-.2.36-.46.69-.77.95-.68.65-1.59 1.04-2.6 1.06-1.24.03-2.36-.51-3.09-1.38-.14-.15-.26-.32-.37-.49-.39-.59-.61-1.29-.63-2.04a3.99 3.99 0 0 1 1.43-3.16c.68-.56 1.54-.91 2.48-.93 1.05-.02 2.01.36 2.73 1 .81.71 1.33 1.74 1.36 2.91z\"></path><path d=\"M3.44 5.03l1.01.96 2.09-2.02\"></path>","truck":"<path d=\"M2 6c0-2.21 1.79-4 4-4h9v10c0 1.1-.9 2-2 2H2v-3.01\"></path><path d=\"M19 20h-1c0-1.1-.9-2-2-2s-2 .9-2 2h-4c0-1.1-.9-2-2-2s-2 .9-2 2H5c-1.66 0-3-1.34-3-3v-3h11c1.1 0 2-.9 2-2V5h1.84c.72 0 1.38.39 1.74 1.01L20.29 9H19c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v3\"></path><path d=\"M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path><path d=\"M16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"></path><path d=\"M22 12v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29L22 12z\"></path>","trush-square":"<path d=\"M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M17.9 9.05a65.54 65.54 0 0 0-6.57-.33c-1.3 0-2.6.07-3.89.2l-1.34.13\"></path><path d=\"M9.709 8.39l.14-.86c.1-.62.18-1.09 1.29-1.09h1.72c1.11 0 1.19.49 1.29 1.09l.14.85\"></path><path d=\"M16.49 9.13l-.43 6.6c-.07 1.03-.13 1.83-1.96 1.83H9.89c-1.83 0-1.89-.8-1.96-1.83l-.43-6.6\"></path>","undo":"<path d=\"M10.98 8.31H4.13\"></path><path d=\"M7.13 18.31h8c2.76 0 5-2.24 5-5s-2.24-5-5-5\"></path><path d=\"M6.43 10.81L3.87 8.25l2.56-2.56\"></path>","unlimited":"<path d=\"M20 15.77c-.73.49-1.6.78-2.54.78-1.5 0-2.81-.74-3.64-1.87\"></path><path d=\"M10.18 9.32a4.474 4.474 0 0 0-3.64-1.87c-2.51 0-4.55 2.04-4.55 4.55s2.04 4.55 4.55 4.55c1.69 0 3.26-.89 4.13-2.34L12 12l1.32-2.21a4.821 4.821 0 0 1 4.13-2.34C19.96 7.45 22 9.49 22 12\"></path>","unlock":"<path d=\"M9.5 16a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-2.5-2.5\"></path><path d=\"M22 17v-2c0-4-1-5-5-5H7c-4 0-5 1-5 5v2c0 4 1 5 5 5h10c1.76 0 2.94-.19 3.71-.75\"></path><path d=\"M6 10V8c0-3.31 1-6 6-6 4.5 0 6 2 6 5\"></path>","user-add":"<path d=\"M15.02 3.01A4.944 4.944 0 0 0 12 2C9.24 2 7 4.24 7 7s2.24 5 5 5 5-2.24 5-5\"></path><path d=\"M3.41 22c0-3.87 3.85-7 8.59-7 .96 0 1.89.13 2.76.37\"></path><path d=\"M22 18c0 .32-.04.63-.12.93-.09.4-.25.79-.46 1.13A3.97 3.97 0 0 1 18 22a3.92 3.92 0 0 1-2.66-1.03c-.3-.26-.56-.57-.76-.91A3.92 3.92 0 0 1 14 18a3.995 3.995 0 0 1 4-4c1.18 0 2.25.51 2.97 1.33.64.71 1.03 1.65 1.03 2.67z\"></path><path d=\"M19.49 17.98h-2.98\"></path><path d=\"M18 16.52v2.99\"></path>","user-cirlce-add":"<path d=\"M11.46 13.73a2.81 2.81 0 1 0 0-5.62 2.81 2.81 0 0 0 0 5.62z\"></path><path d=\"M16.65 20.2c0-2.33-2.32-4.23-5.19-4.23-2.87 0-5.19 1.89-5.19 4.23\"></path><path d=\"M11.5 3c1.31 0 2.56.26 3.7.74-.13.4-.2.82-.2 1.26 0 .75.21 1.46.58 2.06.2.34.46.65.76.91C17.04 8.61 17.97 9 19 9c.44 0 .86-.07 1.25-.21.48 1.14.75 2.4.75 3.71 0 5.25-4.25 9.5-9.5 9.5S2 17.75 2 12.5c0-3.84 2.28-7.15 5.56-8.65\"></path><path d=\"M23 5c0 .32-.04.63-.12.93-.09.4-.25.79-.46 1.13-.48.81-1.25 1.44-2.17 1.73-.39.14-.81.21-1.25.21a3.92 3.92 0 0 1-2.66-1.03c-.3-.26-.56-.57-.76-.91A3.92 3.92 0 0 1 15 5c0-.44.07-.86.2-1.26A3.995 3.995 0 0 1 19 1c1.18 0 2.25.51 2.97 1.33C22.61 3.04 23 3.98 23 5z\"></path><path d=\"M20.49 4.98h-2.98\"></path><path d=\"M19 3.52v2.99\"></path>","user-edit":"<path d=\"M15.02 3.01A4.944 4.944 0 0 0 12 2C9.24 2 7 4.24 7 7s2.24 5 5 5 5-2.24 5-5\"></path><path d=\"M19.21 15.74l-3.541 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01z\"></path><path d=\"M18.7 16.25c.3 1.08 1.14 1.92 2.22 2.22\"></path><path d=\"M3.41 22c0-3.87 3.85-7 8.59-7 1.04 0 2.04.15 2.97.43\"></path>","user-minus":"<path d=\"M15.02 3.01A4.944 4.944 0 0 0 12 2C9.24 2 7 4.24 7 7s2.24 5 5 5 5-2.24 5-5\"></path><path d=\"M3.41 22c0-3.87 3.85-7 8.59-7 .96 0 1.89.13 2.76.37\"></path><path d=\"M22 18c0 .32-.04.63-.12.93-.09.4-.25.79-.46 1.13A3.97 3.97 0 0 1 18 22a3.92 3.92 0 0 1-2.66-1.03c-.3-.26-.56-.57-.76-.91A3.92 3.92 0 0 1 14 18a3.995 3.995 0 0 1 4-4c1.18 0 2.25.51 2.97 1.33.64.71 1.03 1.65 1.03 2.67z\"></path><path d=\"M19.49 17.98h-2.98\"></path>","user-octagon":"<path d=\"M10.43 2.42c.97-.56 2.17-.56 3.15 0l5.94 3.43c.97.56 1.57 1.6 1.57 2.73v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.15 3.15 0 0 1-1.57-2.73V8.58c0-1.12.6-2.16 1.57-2.73l1.9-1.1\"></path><path d=\"M12 11a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 11z\"></path><path d=\"M16 16.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26\"></path>","user-remove":"<path d=\"M15.02 3.01A4.944 4.944 0 0 0 12 2C9.24 2 7 4.24 7 7s2.24 5 5 5 5-2.24 5-5\"></path><path d=\"M3.41 22c0-3.87 3.85-7 8.59-7 .96 0 1.89.13 2.76.37\"></path><path d=\"M22 18c0 .32-.04.63-.12.93-.09.4-.25.79-.46 1.13A3.97 3.97 0 0 1 18 22a3.92 3.92 0 0 1-2.66-1.03c-.3-.26-.56-.57-.76-.91A3.92 3.92 0 0 1 14 18a3.995 3.995 0 0 1 4-4c1.18 0 2.25.51 2.97 1.33.64.71 1.03 1.65 1.03 2.67z\"></path><path d=\"M19.03 16.94l-2.11 2.11\"></path><path d=\"M16.94 16.96l2.12 2.11\"></path>","user-search":"<path d=\"M15.02 3.01A4.944 4.944 0 0 0 12 2C9.24 2 7 4.24 7 7s2.24 5 5 5 5-2.24 5-5\"></path><path d=\"M3.41 22c0-3.87 3.85-7 8.59-7\"></path><path d=\"M18.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z\"></path><path d=\"M22 22l-1-1\"></path>","user-square":"<path d=\"M18.14 21.62c-.88.26-1.92.38-3.14.38H9c-1.22 0-2.26-.12-3.14-.38.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65z\"></path><path d=\"M2 12.94V15c0 3.78 1.14 5.85 3.86 6.62.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65C20.86 20.85 22 18.78 22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v3.94zm10 1.23c-1.98 0-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58-1.6 3.59-3.58 3.59z\"></path><path d=\"M15.58 10.58c0 1.98-1.6 3.59-3.58 3.59s-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58z\"></path>","user-tag":"<path d=\"M3 4.97C3 3.33 4.34 2 6 2h12c1.66 0 3 1.33 3 2.97v10.91c0 1.64-1.34 2.97-3 2.97h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V9.03\"></path><path d=\"M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10z\"></path><path d=\"M16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26\"></path>","user-tick":"<path d=\"M15.02 3.01A4.944 4.944 0 0 0 12 2C9.24 2 7 4.24 7 7s2.24 5 5 5 5-2.24 5-5\"></path><path d=\"M3.41 22c0-3.87 3.85-7 8.59-7 .96 0 1.89.13 2.76.37\"></path><path d=\"M22 18c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 14 18c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 22 18z\"></path><path d=\"M16.44 18l.99.99 2.13-1.97\"></path>","user":"<path d=\"M15.02 3.01A4.944 4.944 0 0 0 12 2C9.24 2 7 4.24 7 7s2.24 5 5 5 5-2.24 5-5\"></path><path d=\"M20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7\"></path>","verify":"<path d=\"M8.38 12l2.41 2.42 4.83-4.84\"></path><path d=\"M4.24 6.2c0-1.06.87-1.93 1.93-1.93H7.9c.4 0 .96-.21 1.26-.46l1.58-1.35c.7-.59 1.83-.59 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58c.59.7.59 1.83 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35c-.7.59-1.83.59-2.51 0l-1.58-1.35c-.3-.25-.87-.46-1.26-.46H6.17c-1.06 0-1.93-.87-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l.56-.66\"></path>","video-add":"<path d=\"M2 9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 .23 0 .45-.02.67-.04-.06-.09-.12-.14-.17-.01-.01-.02-.03-.03-.04-.81-.9-2-1.46-3.31-1.46-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 0 0-.62 5.46c.22.37.5.71.82.99.02.01.03.02.04.03.05.05.1.09.16.14-.21.02-.44.02-.67.02H9c-5 0-7-2-7-7v-1.97\"></path><path d=\"M2.52 7.11h18.96\"></path><path d=\"M8.52 2.11v4.86\"></path><path d=\"M15.48 2.11v4.41\"></path><path d=\"M23 18.5c0 .36-.04.71-.13 1.05-.11.45-.29.88-.52 1.27A4.487 4.487 0 0 1 18.5 23a4.35 4.35 0 0 1-2.82-1.02h-.01c-.06-.05-.11-.09-.16-.14a.138.138 0 0 0-.04-.03c-.32-.28-.6-.62-.82-.99a4.5 4.5 0 0 1 .62-5.46c.82-.84 1.97-1.36 3.23-1.36 1.31 0 2.5.56 3.31 1.46.01.01.02.03.03.04.05.05.1.11.14.17.64.77 1.02 1.76 1.02 2.83z\"></path><path d=\"M20.18 18.48h-3.36\"></path><path d=\"M18.5 16.84v3.36\"></path>","video-circle":"<path d=\"M12.1 15.21c-1.65.95-3 .17-3-1.73v-2.96c0-1.91 1.35-2.68 3-1.73l1.28.74 1.28.74c1.65.95 1.65 2.51 0 3.46\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","video-horizontal":"<path d=\"M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M2.52 17.11h18.96\"></path><path d=\"M2.52 7.11h18.96\"></path><path d=\"M6.97 17.11v4.35\"></path><path d=\"M12 17.11v4.86\"></path><path d=\"M16.97 17.11v4.41\"></path><path d=\"M6.97 2.11v4.35\"></path><path d=\"M12 2.11v4.86\"></path><path d=\"M12 7.03v11\"></path><path d=\"M16.97 2.11v4.41\"></path>","video-octagon":"<path d=\"M2.92 8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43c.97-.56 2.17-.56 3.15 0l5.94 3.43c.97.56 1.57 1.6 1.57 2.73v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.15 3.15 0 0 1-1.57-2.73v-2.76\"></path><path d=\"M9.75 12v-1.2c0-1.54 1.09-2.17 2.42-1.4l1.04.6 1.04.6c1.33.77 1.33 2.03 0 2.8l-1.04.6-1.04.6c-1.33.77-2.42.14-2.42-1.4V12z\"></path>","video-play":"<path d=\"M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7z\"></path><path d=\"M2.52 7.11h18.96\"></path><path d=\"M8.52 2.11v4.86\"></path><path d=\"M15.48 2.11v4.41\"></path><path d=\"M9.75 14.45v-1.2c0-1.54 1.09-2.17 2.42-1.4l1.04.6 1.04.6c1.33.77 1.33 2.03 0 2.8l-1.04.6-1.04.6c-1.33.77-2.42.14-2.42-1.4v-1.2z\"></path>","video-remove":"<path d=\"M2 9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 .23 0 .45-.02.67-.04-.06-.09-.12-.14-.17-.01-.01-.02-.03-.03-.04-.81-.9-2-1.46-3.31-1.46-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 0 0-.62 5.46c.22.37.5.71.82.99.02.01.03.02.04.03.05.05.1.09.16.14-.21.02-.44.02-.67.02H9c-5 0-7-2-7-7v-1.97\"></path><path d=\"M2.52 7.11h18.96\"></path><path d=\"M8.52 2.11v4.86\"></path><path d=\"M15.48 2.11v4.41\"></path><path d=\"M23 18.5c0 .36-.04.71-.13 1.05-.11.45-.29.88-.52 1.27A4.487 4.487 0 0 1 18.5 23a4.35 4.35 0 0 1-2.82-1.02h-.01c-.06-.05-.11-.09-.16-.14-.34-.29-.63-.64-.86-1.02a4.5 4.5 0 0 1 .62-5.46c.82-.84 1.97-1.36 3.23-1.36 1.33 0 2.53.57 3.34 1.5.05.05.1.11.14.17.64.77 1.02 1.76 1.02 2.83z\"></path><path d=\"M19.7 19.68l-2.38-2.38\"></path><path d=\"M19.68 17.32L17.3 19.7\"></path>","video-slash":"<path d=\"M2 12.15v4.06c0 1.26.38 2.53 1.37 3.34L4 20\"></path><path d=\"M16.63 7.58s.03-.95 0-1.26c-.17-2.04-1.5-2.74-4.11-2.74H6.21C3.05 3.58 2 4.63 2 7.79\"></path><path d=\"M16.74 10.95v5.26c0 3.16-1.05 4.21-4.21 4.21H7.26\"></path><path d=\"M22 6.74v9.07c0 1.67-1.12 2.25-2.48 1.29l-2.78-1.95\"></path><path d=\"M22.02 2.19l-20 20\"></path>","video-square":"<path d=\"M2 12.95V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path><path d=\"M12.1 15.21c-1.65.95-3 .17-3-1.73v-2.96c0-1.91 1.35-2.68 3-1.73l1.28.74 1.28.74c1.65.95 1.65 2.51 0 3.46\"></path>","video-tick":"<path d=\"M2 9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 .23 0 .45-.02.67-.04-.06-.09-.12-.14-.17-.01-.01-.02-.03-.03-.04-.81-.9-2-1.46-3.31-1.46-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 0 0-.62 5.46c.22.37.5.71.82.99.02.01.03.02.04.03.05.05.1.09.16.14-.21.02-.44.02-.67.02H9c-5 0-7-2-7-7v-1.97\"></path><path d=\"M2.52 7.11h18.96\"></path><path d=\"M8.52 2.11v4.86\"></path><path d=\"M15.48 2.11v4.41\"></path><path d=\"M23 18.5a4.5 4.5 0 0 1-1.54 3.38c-.79.7-1.82 1.12-2.96 1.12-1.07 0-2.06-.38-2.83-1.02h-.01A4.5 4.5 0 0 1 14 18.5c0-1.42.65-2.69 1.69-3.51A4.47 4.47 0 0 1 18.5 14c1.41 0 2.66.64 3.48 1.65.64.77 1.02 1.77 1.02 2.85z\"></path><path d=\"M16.75 18.5l1.11 1.11 2.4-2.22\"></path>","video-time":"<path d=\"M2 9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 .23 0 .45-.02.67-.04-.06-.09-.12-.14-.17-.01-.01-.02-.03-.03-.04-.81-.9-2-1.46-3.31-1.46-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 0 0-.62 5.46c.22.37.5.71.82.99.02.01.03.02.04.03.05.05.1.09.16.14-.21.02-.44.02-.67.02H9c-5 0-7-2-7-7v-1.97\"></path><path d=\"M2.52 7.11h18.96\"></path><path d=\"M8.52 2.11v4.86\"></path><path d=\"M15.48 2.11v4.41\"></path><path d=\"M23 18.5c0 1.35-.6 2.55-1.53 3.38-.8.69-1.83 1.12-2.97 1.12-1.08 0-2.08-.38-2.85-1.02A4.46 4.46 0 0 1 14 18.5c0-1.42.65-2.69 1.69-3.51A4.47 4.47 0 0 1 18.5 14c1.41 0 2.66.64 3.48 1.65.64.77 1.02 1.77 1.02 2.85z\"></path><path d=\"M18.78 17.09v1.69l-1.4.84\"></path>","video-vertical":"<path d=\"M9 2C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-2.02\"></path><path d=\"M6.89 2.52v18.96\"></path><path d=\"M16.89 2.52v18.96\"></path><path d=\"M6.89 6.97H2.54\"></path><path d=\"M6.89 12H2.03\"></path><path d=\"M6.89 16.97H2.48\"></path><path d=\"M21.89 6.97h-4.35\"></path><path d=\"M21.89 12h-4.86\"></path><path d=\"M16.97 12h-11\"></path><path d=\"M21.89 16.97h-4.41\"></path>","video":"<path d=\"M2 7.79c0-3.16 1.05-4.21 4.21-4.21h6.32c3.16 0 4.21 1.05 4.21 4.21v8.42c0 3.16-1.05 4.21-4.21 4.21H6.21c-3.16 0-4.21-2.1-4.21-4.21v-4.09\"></path><path d=\"M19.52 17.1l-2.78-1.95V8.84l2.78-1.95c1.36-.95 2.48-.37 2.48 1.3v7.62c0 1.67-1.12 2.25-2.48 1.29z\"></path><path d=\"M13 9.5c0-.83-.67-1.5-1.5-1.5S10 8.67 10 9.5s.67 1.5 1.5 1.5\"></path>","voice-cricle":"<path d=\"M6 9.86v4.29\"></path><path d=\"M9 8.43v7.14\"></path><path d=\"M12 14.99V17\"></path><path d=\"M12 7v4.95\"></path><path d=\"M15 8.43v7.14\"></path><path d=\"M18 9.86v4.29\"></path><path d=\"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85\"></path>","voice-square":"<path d=\"M6 9.86v4.29\"></path><path d=\"M9 8.43v7.14\"></path><path d=\"M12 14.99V17\"></path><path d=\"M12 7v4.95\"></path><path d=\"M15 8.43v7.14\"></path><path d=\"M18 9.86v4.29\"></path><path d=\"M2 12.99V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","volume-cross":"<path d=\"M2 14c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.41c0-2.98-2.07-4.12-4.59-2.54L7.49 6.7c-.32.19-.69.3-1.06.3H5c-2 0-3 1-3 3\"></path><path d=\"M22 13.96L18.04 10\"></path><path d=\"M19.89 12.11L18 14\"></path><path d=\"M21.96 10.04l-.54.54\"></path>","volume-high":"<path d=\"M15 7.41c0-2.98-2.07-4.12-4.59-2.54L7.49 6.7c-.32.19-.69.3-1.06.3H5c-2 0-3 1-3 3v4c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54v-5.12\"></path><path d=\"M18 8a6.66 6.66 0 0 1 0 8\"></path><path d=\"M19.83 18.5C21.28 16.57 22 14.29 22 12\"></path><path d=\"M19.83 5.5c.59.78 1.05 1.62 1.4 2.5\"></path>","volume-low-1":"<path d=\"M16.33 7.41c0-2.98-2.07-4.12-4.59-2.54L8.82 6.7c-.32.19-.69.3-1.06.3H6.33c-2 0-3 1-3 3v4c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54v-4.94\"></path><path d=\"M19.33 8a6.66 6.66 0 0 1 0 8\"></path>","volume-low":"<path d=\"M22 12h-.14\"></path><path d=\"M18 12h1.8\"></path><path d=\"M2 14.04c0 2.04 1.02 3.06 3.06 3.06h1.46c.38 0 .76.11 1.08.31l2.98 1.86c2.58 1.61 4.68.44 4.68-2.6V7.32c0-3.04-2.11-4.21-4.68-2.6L7.6 6.59c-.33.2-.7.31-1.08.31H5.06C3.02 6.9 2 7.92 2 9.96\"></path>","volume-mute":"<path d=\"M18.5 7.41c0-2.98-2.07-4.12-4.59-2.54L10.99 6.7c-.32.19-.69.3-1.06.3H8.5c-2 0-3 1-3 3v4c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54v-4.9\"></path>","volume-slash":"<path d=\"M2 14c0 2 1 3 3 3h2\"></path><path d=\"M15 8.37v-.96c0-2.98-2.07-4.12-4.59-2.54L7.49 6.7c-.32.19-.69.3-1.06.3H5c-2 0-3 1-3 3\"></path><path d=\"M10.41 19.13c2.52 1.58 4.59.43 4.59-2.54v-3.64\"></path><path d=\"M18.81 9.42c.9 2.15.63 4.66-.81 6.58\"></path><path d=\"M20.78 17c-.27.52-.58 1.02-.94 1.5\"></path><path d=\"M21.15 7.8c.83 1.97 1.05 4.13.66 6.2\"></path><path d=\"M22 2L2 22\"></path>","volume-up":"<path d=\"M2 14.04c0 2.04 1.02 3.06 3.06 3.06h1.46c.38 0 .76.11 1.08.31l2.98 1.86c2.58 1.61 4.68.44 4.68-2.6V7.32c0-3.04-2.11-4.21-4.68-2.6L7.6 6.59c-.33.2-.7.31-1.08.31H5.06C3.02 6.9 2 7.92 2 9.96\"></path><path d=\"M22 12h-.14\"></path><path d=\"M18 12h1.8\"></path><path d=\"M20 14v-4\"></path>","wallet-1":"<path d=\"M12.9 2.52l-.03.07-2.9 6.73H7.12c-.68 0-1.33.14-1.92.39l1.75-4.18.04-.1.07-.16c.02-.06.04-.12.07-.17 1.31-3.03 2.79-3.72 5.77-2.58z\"></path><path d=\"M18.29 9.52c-.45-.14-.93-.2-1.41-.2H9.97l2.9-6.73.03-.07c.15.05.29.12.44.18l2.21.93c1.23.51 2.09 1.04 2.61 1.68.1.12.18.23.25.36.09.14.16.28.2.43.04.09.07.18.09.26.27.84.11 1.87-.41 3.16z\"></path><path d=\"M12 22H8.1c-.24 0-.48-.02-.71-.05-3.18-.21-4.88-1.91-5.09-5.09-.03-.23-.05-.47-.05-.71V14.2c0-2.01 1.22-3.74 2.96-4.49.6-.25 1.24-.39 1.92-.39h9.76c.49 0 .97.07 1.41.2 2 .6 3.46 2.47 3.46 4.67v1.95c0 .2-.01.4-.02.6-.19 3.5-2.14 5.26-5.84 5.26\"></path><path d=\"M6.95 5.53L5.2 9.71a4.894 4.894 0 0 0-2.96 4.49v-2.93c0-2.84 2.02-5.21 4.71-5.74z\"></path><path d=\"M21.76 11.27v2.93c0-2.2-1.46-4.07-3.46-4.67.52-1.3.67-2.32.42-3.17-.02-.09-.05-.18-.09-.26 1.86.96 3.13 2.93 3.13 5.17z\"></path>","wallet-2":"<path d=\"M13 9H7\"></path><path d=\"M22 10.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6H21c.56.02 1 .47 1 1.02z\"></path><path d=\"M2 8.5c0-2.72 1.64-4.62 4.19-4.94.26-.04.53-.06.81-.06h9c.26 0 .51.01.75.05C19.33 3.85 21 5.76 21 8.5v1.45h-2.08c-.56 0-1.07.22-1.44.6-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87H21v1.45c0 3-2 5-5 5H7c-3 0-5-2-5-5v-3.24\"></path>","wallet-3":"<path d=\"M13 11.15H7\"></path><path d=\"M11.31 2.85c2.04 0 3.69 1.27 3.69 3.31\"></path><path d=\"M2 10.15V6.53c0-2.04 1.65-3.69 3.69-3.69h1.93\"></path><path d=\"M2 10.15c0-2.21 1.79-4 4-4h10c2.2 0 4 1.8 4 4v1.45h-1.08c-.56 0-1.07.22-1.44.6-.5.48-.74 1.22-.54 1.98.25.93 1.17 1.52 2.13 1.52H20v1.45c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4v-2.63\"></path><path d=\"M22 12.62v2.06c0 .56-.46 1.02-1.03 1.02h-1.93c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.05c.57 0 1.03.46 1.03 1.02z\"></path>","wallet-add-1":"<path d=\"M14.5 15.44h-5\"></path><path d=\"M12 13v5\"></path><path d=\"M12 22H8.1c-.24 0-.48-.02-.71-.05-3.18-.21-4.88-1.91-5.09-5.09-.03-.23-.05-.47-.05-.71V14.2c0-2.01 1.22-3.74 2.96-4.49.6-.25 1.24-.39 1.92-.39h9.76c.49 0 .97.07 1.41.2 2 .6 3.46 2.47 3.46 4.67v1.95c0 .2-.01.4-.02.6-.19 3.5-2.14 5.26-5.84 5.26\"></path><path d=\"M12.9 2.52l-.03.07-2.9 6.73H7.12c-.68 0-1.33.14-1.92.39l1.75-4.18.04-.1.07-.16c.02-.06.04-.12.07-.17 1.31-3.03 2.79-3.72 5.77-2.58z\"></path><path d=\"M18.29 9.52c-.45-.14-.93-.2-1.41-.2H9.97l2.9-6.73.03-.07c.15.05.29.12.44.18l2.21.93c1.23.51 2.09 1.04 2.61 1.68.1.12.18.23.25.36.09.14.16.28.2.43.04.09.07.18.09.26.27.84.11 1.87-.41 3.16z\"></path><path d=\"M6.95 5.53L5.2 9.71a4.894 4.894 0 0 0-2.96 4.49v-2.93c0-2.84 2.02-5.21 4.71-5.74z\"></path><path d=\"M21.76 11.27v2.93c0-2.2-1.46-4.07-3.46-4.67.52-1.3.67-2.32.42-3.17-.02-.09-.05-.18-.09-.26 1.86.96 3.13 2.93 3.13 5.17z\"></path>","wallet-add":"<path d=\"M6.19 7.06C6.45 7.02 6.72 7 7 7h10c.26 0 .51.01.75.05C20.33 7.35 22 9.26 22 12v5c0 3-2 5-5 5H7.63c.31-.26.58-.58.79-.94.37-.6.58-1.31.58-2.06 0-2.21-1.79-4-4-4-1.2 0-2.27.53-3 1.36V12c0-.87.17-1.66.48-2.33\"></path><path d=\"M17.75 7.05C17.51 7.01 17.26 7 17 7H7c-.28 0-.55.02-.81.06.14-.28.34-.54.58-.78l3.25-3.26a3.525 3.525 0 0 1 4.96 0l1.75 1.77c.64.63.98 1.43 1.02 2.26z\"></path><path d=\"M9 19c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 5 23a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 1 19c0-2.21 1.79-4 4-4s4 1.79 4 4z\"></path><path d=\"M6.49 18.98H3.51\"></path><path d=\"M5 17.52v2.99\"></path><path d=\"M22 12.5h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3\"></path>","wallet-check":"<path d=\"M6.19 7.06C6.45 7.02 6.72 7 7 7h10c.26 0 .51.01.75.05C20.33 7.35 22 9.26 22 12v5c0 3-2 5-5 5H7.63c.31-.26.58-.58.79-.94.37-.6.58-1.31.58-2.06 0-2.21-1.79-4-4-4-1.2 0-2.27.53-3 1.36V12c0-.87.17-1.66.48-2.33\"></path><path d=\"M9 19c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 5 23a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 1 19c0-2.21 1.79-4 4-4s4 1.79 4 4z\"></path><path d=\"M3.44 19l.99.99 2.13-1.97\"></path><path d=\"M17.75 7.05C17.51 7.01 17.26 7 17 7H7c-.28 0-.55.02-.81.06.14-.28.34-.54.58-.78l3.25-3.26a3.525 3.525 0 0 1 4.96 0l1.75 1.77c.64.63.98 1.43 1.02 2.26z\"></path><path d=\"M22 12.5h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3\"></path>","wallet-minus":"<path d=\"M14.5 16h-5\"></path><path d=\"M12.9 2.52l-.03.07-2.9 6.73H7.12c-.68 0-1.33.14-1.92.39l1.75-4.18.04-.1.07-.16c.02-.06.04-.12.07-.17 1.31-3.03 2.79-3.72 5.77-2.58z\"></path><path d=\"M18.29 9.52c-.45-.14-.93-.2-1.41-.2H9.97l2.9-6.73.03-.07c.15.05.29.12.44.18l2.21.93c1.23.51 2.09 1.04 2.61 1.68.1.12.18.23.25.36.09.14.16.28.2.43.04.09.07.18.09.26.27.84.11 1.87-.41 3.16z\"></path><path d=\"M12 22H8.1c-.24 0-.48-.02-.71-.05-3.18-.21-4.88-1.91-5.09-5.09-.03-.23-.05-.47-.05-.71V14.2c0-2.01 1.22-3.74 2.96-4.49.6-.25 1.24-.39 1.92-.39h9.76c.49 0 .97.07 1.41.2 2 .6 3.46 2.47 3.46 4.67v1.95c0 .2-.01.4-.02.6-.19 3.5-2.14 5.26-5.84 5.26\"></path><path d=\"M6.95 5.53L5.2 9.71a4.894 4.894 0 0 0-2.96 4.49v-2.93c0-2.84 2.02-5.21 4.71-5.74z\"></path><path d=\"M21.76 11.27v2.93c0-2.2-1.46-4.07-3.46-4.67.52-1.3.67-2.32.42-3.17-.02-.09-.05-.18-.09-.26 1.86.96 3.13 2.93 3.13 5.17z\"></path>","wallet-money":"<path d=\"M10.75 16.86v2.03c0 1.72-1.6 3.11-3.57 3.11-1.97 0-3.58-1.39-3.58-3.11v-2.03c0 1.72 1.6 2.94 3.58 2.94 1.97 0 3.57-1.23 3.57-2.94z\"></path><path d=\"M10.75 14.11c0 .5-.14.96-.38 1.36-.59.97-1.8 1.58-3.2 1.58-1.4 0-2.61-.62-3.2-1.58-.24-.4-.38-.86-.38-1.36 0-.86.4-1.63 1.04-2.19.65-.57 1.54-.91 2.53-.91.99 0 1.88.35 2.53.91.66.55 1.06 1.33 1.06 2.19z\"></path><path d=\"M10.75 14.11v2.75c0 1.72-1.6 2.94-3.57 2.94-1.97 0-3.58-1.23-3.58-2.94v-2.75C3.6 12.39 5.2 11 7.18 11c.99 0 1.88.35 2.53.91.64.56 1.04 1.34 1.04 2.2z\"></path><path d=\"M22 10.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6H21c.56.02 1 .47 1 1.02z\"></path><path d=\"M16 3.5c.26 0 .51.01.75.05C19.33 3.85 21 5.76 21 8.5v1.45h-2.08c-.56 0-1.07.22-1.44.6-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87H21v1.45c0 3-2 5-5 5h-2.5\"></path><path d=\"M2 10.5v-2c0-2.72 1.64-4.62 4.19-4.94.26-.04.53-.06.81-.06h5\"></path>","wallet-remove":"<path d=\"M6.19 7.06C6.45 7.02 6.72 7 7 7h10c.26 0 .51.01.75.05C20.33 7.35 22 9.26 22 12v5c0 3-2 5-5 5H7.63c.31-.26.58-.58.79-.94.37-.6.58-1.31.58-2.06 0-2.21-1.79-4-4-4-1.2 0-2.27.53-3 1.36V12c0-.87.17-1.66.48-2.33\"></path><path d=\"M17.75 7.05C17.51 7.01 17.26 7 17 7H7c-.28 0-.55.02-.81.06.14-.28.34-.54.58-.78l3.25-3.26a3.525 3.525 0 0 1 4.96 0l1.75 1.77c.64.63.98 1.43 1.02 2.26z\"></path><path d=\"M22 12.5h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3\"></path><path d=\"M9 19c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 1 19a4 4 0 0 1 1-2.64C2.73 15.53 3.8 15 5 15c2.21 0 4 1.79 4 4z\"></path><path d=\"M6.069 20.04l-2.11-2.11\"></path><path d=\"M6.04 17.96l-2.11 2.11\"></path>","wallet-search":"<path d=\"M12 22h5c3 0 5-2 5-5v-5c0-2.7-1.7-4.7-4.2-5H7c-.3 0-.5 0-.8.1C3.6 7.4 2 9.3 2 12v1\"></path><path d=\"M16.8 4.8c.6.6.9 1.4 1 2.2H7c-.3 0-.5 0-.8.1.1-.3.3-.5.6-.8L10 3c.82-.82 1.91-1.16 2.96-1.02\"></path><path d=\"M22 12.5h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3\"></path><path d=\"M5.8 21.4c1.77 0 3.2-1.43 3.2-3.2C9 16.43 7.57 15 5.8 15c-1.77 0-3.2 1.43-3.2 3.2 0 1.77 1.43 3.2 3.2 3.2z\"></path><path d=\"M2 22l1-1\"></path>","wallet":"<path d=\"M2 12c0-2.72 1.64-4.62 4.19-4.94.26-.04.53-.06.81-.06h10c.26 0 .51.01.75.05C20.33 7.35 22 9.26 22 12v5c0 3-2 5-5 5H7c-3 0-5-2-5-5v-.99\"></path><path d=\"M17.75 7.05C17.51 7.01 17.26 7 17 7H7c-.28 0-.55.02-.81.06.14-.28.34-.54.58-.78l3.25-3.26a3.525 3.525 0 0 1 4.96 0l1.75 1.77c.64.63.98 1.43 1.02 2.26z\"></path><path d=\"M22 12.5h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3\"></path>","warning-2":"<path d=\"M12 7.75V13\"></path><path d=\"M2.92 8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43c.97-.56 2.17-.56 3.15 0l5.94 3.43c.97.56 1.57 1.6 1.57 2.73v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.15 3.15 0 0 1-1.57-2.73v-2.76\"></path><path d=\"M12 16.2v.1\"></path>","watch-status":"<path d=\"M5 12.22v3.28C5 17.83 6.17 19 8.5 19h7c2.33 0 3.5-1.17 3.5-3.5v-7C19 6.17 17.83 5 15.5 5h-7C6.17 5 5 6.17 5 8.5\"></path><path d=\"M12 2H8\"></path><path d=\"M16 2h-1\"></path><path d=\"M16 22H8\"></path><path d=\"M12 14v-4\"></path><path d=\"M15 14v-2\"></path><path d=\"M9 14v-1\"></path>","watch":"<path d=\"M5 12.5v3C5 17.83 6.17 19 8.5 19h7c2.33 0 3.5-1.17 3.5-3.5v-7C19 6.17 17.83 5 15.5 5h-7C6.17 5 5 6.17 5 8.5\"></path><path d=\"M16 2H8\"></path><path d=\"M16 22H8\"></path><path d=\"M11.5 9.5v3h3\"></path>","weight-1":"<path d=\"M17.18 18c2.4 0 3-1.35 3-3V9c0-1.65-.6-3-3-3s-3 1.35-3 3v6c0 1.65.6 3 3 3z\"></path><path d=\"M3.82 11.3V9c0-1.65.6-3 3-3s3 1.35 3 3v6c0 1.65-.6 3-3 3s-3-1.35-3-3\"></path><path d=\"M9.82 12h4.36\"></path><path d=\"M22.5 14.5v-5\"></path><path d=\"M1.5 14.5v-5\"></path>","weight":"<path d=\"M3 12.98V15c0 5 2 7 7 7h4c5 0 7-2 7-7V9c0-5-2-7-7-7h-4C5 2 3 4 3 9\"></path><path d=\"M17.25 8.29a7.905 7.905 0 0 0-10.5 0l2.18 3.5a4.613 4.613 0 0 1 6.14 0\"></path>","wifi-square":"<path d=\"M6 9.96c3.63-2.81 8.37-2.81 12 0\"></path><path d=\"M7.6 13.05c2.67-2.06 6.14-2.06 8.81 0\"></path><path d=\"M9.8 16.14c1.33-1.03 3.07-1.03 4.4 0\"></path><path d=\"M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9\"></path>","wifi":"<path d=\"M16.31 10.21c.97.4 1.9.94 2.78 1.62\"></path><path d=\"M4.91 11.84c2.44-1.89 5.3-2.7 8.1-2.44\"></path><path d=\"M8.36 5.28c4.63-1.1 9.55-.08 13.64 3.08\"></path><path d=\"M2 8.36c.94-.72 1.92-1.34 2.93-1.84\"></path><path d=\"M6.79 15.49c3.15-2.44 7.26-2.44 10.41 0\"></path><path d=\"M9.4 19.15c1.58-1.22 3.63-1.22 5.21 0\"></path>","wind-2":"<path d=\"M9.5 11.6c1.54.92 3.46.92 5 0s3.46-.92 5 0l2.5 1.5\"></path><path d=\"M2 13.1l2.5-1.5c.46-.28.96-.47 1.47-.58\"></path><path d=\"M2 3.9l2.5 1.5c1.54.92 3.46.92 5 0s3.46-.92 5 0 3.46.92 5 0L22 3.9\"></path><path d=\"M2 20.1l2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5\"></path>","wind":"<path d=\"M2 15h16.5c1.93 0 3.5 1.57 3.5 3.5S20.43 22 18.5 22 15 20.43 15 18.5V18\"></path><path d=\"M9.05 12h9.45c1.92 0 3.5-1.57 3.5-3.5C22 6.58 20.42 5 18.5 5A3.51 3.51 0 0 0 15 8.5V9\"></path><path d=\"M2 12h2.98\"></path><path d=\"M2 9h7.31a2.69 2.69 0 1 0-2.69-2.69v.38\"></path>","woman":"<path d=\"M5 9c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7c-1.93 0-3.68.78-4.95 2.05\"></path><path d=\"M12 16v6\"></path><path d=\"M15 19H9\"></path>"};

/***/ }),

/***/ "./node_modules/classnames/dedupe.js":
/*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var classNames = (function () {
		// don't inherit from Object so we can skip hasOwnProperty check later
		// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
		function StorageObject() {}
		StorageObject.prototype = Object.create(null);

		function _parseArray (resultSet, array) {
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				_parse(resultSet, array[i]);
			}
		}

		var hasOwn = {}.hasOwnProperty;

		function _parseNumber (resultSet, num) {
			resultSet[num] = true;
		}

		function _parseObject (resultSet, object) {
			for (var k in object) {
				if (hasOwn.call(object, k)) {
					// set value to false instead of deleting it to avoid changing object structure
					// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
					resultSet[k] = !!object[k];
				}
			}
		}

		var SPACE = /\s+/;
		function _parseString (resultSet, str) {
			var array = str.split(SPACE);
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				resultSet[array[i]] = true;
			}
		}

		function _parse (resultSet, arg) {
			if (!arg) return;
			var argType = typeof arg;

			// 'foo bar'
			if (argType === 'string') {
				_parseString(resultSet, arg);

			// ['foo', 'bar', ...]
			} else if (Array.isArray(arg)) {
				_parseArray(resultSet, arg);

			// { 'foo': true, ... }
			} else if (argType === 'object') {
				_parseObject(resultSet, arg);

			// '130'
			} else if (argType === 'number') {
				_parseNumber(resultSet, arg);
			}
		}

		function _classNames () {
			// don't leak arguments
			// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
			var len = arguments.length;
			var args = Array(len);
			for (var i = 0; i < len; i++) {
				args[i] = arguments[i];
			}

			var classSet = new StorageObject();
			_parseArray(classSet, args);

			var list = [];

			for (var k in classSet) {
				if (classSet[k]) {
					list.push(k)
				}
			}

			return list.join(' ');
		}

		return _classNames;
	})();

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/core-js/es/array/from.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/es/array/from.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! ../../modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");

module.exports = path.Array.from;


/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var index = 0;
  var iteratorMethod = getIteratorMethod(O);
  var length, result, step, iterator;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    result = new C();
    for (;!(step = iterator.next()).done; index++) {
      createProperty(result, index, mapping
        ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
        : step.value
      );
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
// false -> Array#indexOf
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
// true  -> Array#includes
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          hide(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    hide(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var exist = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return exist ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      hide(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var O = 'object';
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == O && globalThis) ||
  check(typeof window == O && window) ||
  check(typeof self == O && self) ||
  check(typeof global == O && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var document = global.document;

module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var key;
  while (length > i) definePropertyModule.f(O, key = keys[i++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayIncludes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var arrayIndexOf = arrayIncludes(false);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var validateSetPrototypeOfArguments = __webpack_require__(/*! ../internals/validate-set-prototype-of-arguments */ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var correctSetter = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    correctSetter = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    validateSetPrototypeOfArguments(O, proto);
    if (correctSetter) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var Reflect = global.Reflect;

// all object keys, includes non-enumerable and symbols
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else hide(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.1.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/string-at.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/string-at.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// CONVERT_TO_STRING: true  -> String#at
// CONVERT_TO_STRING: false -> String#codePointAt
module.exports = function (that, pos, CONVERT_TO_STRING) {
  var S = String(requireObjectCoercible(that));
  var position = toInteger(pos);
  var size = S.length;
  var first, second;
  if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
  first = S.charCodeAt(position);
  return first < 0xD800 || first > 0xDBFF || position + 1 === size
    || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
      ? CONVERT_TO_STRING ? S.charAt(position) : first
      : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// 7.1.1 ToPrimitive(input [, PreferredType])
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

module.exports = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) {
    throw TypeError("Can't set " + String(proto) + ' as a prototype');
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var codePointAt = __webpack_require__(/*! ../internals/string-at */ "./node_modules/core-js/internals/string-at.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = codePointAt(string, index, true);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/default-attrs.json":
/*!********************************!*\
  !*** ./src/default-attrs.json ***!
  \********************************/
/*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */
/***/ (function(module) {

module.exports = {"xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

var _dedupe2 = _interopRequireDefault(_dedupe);

var _defaultAttrs = __webpack_require__(/*! ./default-attrs.json */ "./src/default-attrs.json");

var _defaultAttrs2 = _interopRequireDefault(_defaultAttrs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Icon = function () {
  function Icon(name, contents) {
    var tags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, Icon);

    this.name = name;
    this.contents = contents;
    this.tags = tags;
    this.attrs = _extends({}, _defaultAttrs2.default, { class: 'feather feather-' + name });
  }

  /**
   * Create an SVG string.
   * @param {Object} attrs
   * @returns {string}
   */


  _createClass(Icon, [{
    key: 'toSvg',
    value: function toSvg() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var combinedAttrs = _extends({}, this.attrs, attrs, { class: (0, _dedupe2.default)(this.attrs.class, attrs.class) });

      return '<svg ' + attrsToString(combinedAttrs) + '>' + this.contents + '</svg>';
    }

    /**
     * Return string representation of an `Icon`.
     *
     * Added for backward compatibility. If old code expects `feather.icons.<name>`
     * to be a string, `toString()` will get implicitly called.
     *
     * @returns {string}
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.contents;
    }
  }]);

  return Icon;
}();

/**
 * Convert attributes object to string of HTML attributes.
 * @param {Object} attrs
 * @returns {string}
 */


function attrsToString(attrs) {
  return Object.keys(attrs).map(function (key) {
    return key + '="' + attrs[key] + '"';
  }).join(' ');
}

exports.default = Icon;

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(/*! ./icon */ "./src/icon.js");

var _icon2 = _interopRequireDefault(_icon);

var _icons = __webpack_require__(/*! ../dist/icons.json */ "./dist/icons.json");

var _icons2 = _interopRequireDefault(_icons);

var _tags = __webpack_require__(/*! ./tags.json */ "./src/tags.json");

var _tags2 = _interopRequireDefault(_tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.keys(_icons2.default).map(function (key) {
  return new _icon2.default(key, _icons2.default[key], _tags2.default[key]);
}).reduce(function (object, icon) {
  object[icon.name] = icon;
  return object;
}, {});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

var _toSvg = __webpack_require__(/*! ./to-svg */ "./src/to-svg.js");

var _toSvg2 = _interopRequireDefault(_toSvg);

var _replace = __webpack_require__(/*! ./replace */ "./src/replace.js");

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = { icons: _icons2.default, toSvg: _toSvg2.default, replace: _replace2.default };

/***/ }),

/***/ "./src/replace.js":
/*!************************!*\
  !*** ./src/replace.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-env browser */


var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

var _dedupe2 = _interopRequireDefault(_dedupe);

var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Replace all HTML elements that have a `data-feather` attribute with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {Object} attrs
 */
function replace() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (typeof document === 'undefined') {
    throw new Error('`feather.replace()` only works in a browser environment.');
  }

  var elementsToReplace = document.querySelectorAll('[data-feather]');

  Array.from(elementsToReplace).forEach(function (element) {
    return replaceElement(element, attrs);
  });
}

/**
 * Replace a single HTML element with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {HTMLElement} element
 * @param {Object} attrs
 */
function replaceElement(element) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var elementAttrs = getAttrs(element);
  var name = elementAttrs['data-feather'];
  delete elementAttrs['data-feather'];

  var svgString = _icons2.default[name].toSvg(_extends({}, attrs, elementAttrs, { class: (0, _dedupe2.default)(attrs.class, elementAttrs.class) }));
  var svgDocument = new DOMParser().parseFromString(svgString, 'image/svg+xml');
  var svgElement = svgDocument.querySelector('svg');

  element.parentNode.replaceChild(svgElement, element);
}

/**
 * Get the attributes of an HTML element.
 * @param {HTMLElement} element
 * @returns {Object}
 */
function getAttrs(element) {
  return Array.from(element.attributes).reduce(function (attrs, attr) {
    attrs[attr.name] = attr.value;
    return attrs;
  }, {});
}

exports.default = replace;

/***/ }),

/***/ "./src/tags.json":
/*!***********************!*\
  !*** ./src/tags.json ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module) {

module.exports = {};

/***/ }),

/***/ "./src/to-svg.js":
/*!***********************!*\
  !*** ./src/to-svg.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create an SVG string.
 * @deprecated
 * @param {string} name
 * @param {Object} attrs
 * @returns {string}
 */
function toSvg(name) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  console.warn('feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead.');

  if (!name) {
    throw new Error('The required `key` (icon name) parameter is missing.');
  }

  if (!_icons2.default[name]) {
    throw new Error('No icon matching \'' + name + '\'. See the complete list of icons at https://feathericons.com');
  }

  return _icons2.default[name].toSvg(attrs);
}

exports.default = toSvg;

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi core-js/es/array/from ./src/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/es/array/from */"./node_modules/core-js/es/array/from.js");
module.exports = __webpack_require__(/*! /Users/firatkaya/Downloads/feather-4.29.0/src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=feather.js.map