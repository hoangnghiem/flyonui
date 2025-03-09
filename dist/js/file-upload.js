!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(globalThis,(()=>(()=>{"use strict";var e={192:function(e,t,n){
/*
 * HSFileUpload
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
var o,i=this&&this.__extends||(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},o(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(806),s=l(n(287));"undefined"!=typeof Dropzone&&(Dropzone.autoDiscover=!1);var p=function(e){function t(t,n,o){var i,l=e.call(this,t,n,o)||this;l.extensions={},l.el="string"==typeof t?document.querySelector(t):t;var a=l.el.getAttribute("data-file-upload"),s=a?JSON.parse(a):{};return l.previewTemplate=(null===(i=l.el.querySelector("[data-file-upload-preview]"))||void 0===i?void 0:i.innerHTML)||'<div class="rounded-box shadow-lg bg-base-100 p-4">\n        <div class="mb-1 flex items-center justify-between">\n          <div class="flex items-center gap-x-3">\n            <span class="text-base-content/80 border-base-content/20 flex size-8 items-center justify-center rounded-lg border p-0.5" data-file-upload-file-icon="" >\n              <img class="rounded-md hidden" data-dz-thumbnail="" />\n            </span>\n            <div>\n              <p class="text-base-content text-sm font-medium">\n                <span class="inline-block truncate align-bottom" data-file-upload-file-name=""></span>.<span data-file-upload-file-ext=""></span>\n              </p>\n              <p class="text-base-content/50 text-xs" data-file-upload-file-size=""></p>\n            </div>\n          </div>\n          <div class="flex items-center gap-x-2">\n            <button type="button" class="btn btn-sm btn-circle btn-text" data-file-upload-remove="">\n              <span class="icon-[tabler--trash] size-4 shrink-0"></span>\n            </button>\n          </div>\n        </div>\n        <div class="flex items-center gap-x-3 whitespace-nowrap">\n          <div class="progress h-2" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" data-file-upload-progress-bar="" >\n            <div class="progress-bar progress-primary file-upload-complete:progress-success transition-all duration-500" style="width: 0" data-file-upload-progress-bar-pane="" ></div>\n          </div>\n          <span class="text-base-content mb-0.5 text-sm">\n            <span data-file-upload-progress-bar-value="">0</span>%\n          </span>\n        </div>\n      </div>',l.extensions=_.merge({default:{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>',class:"shrink-0 size-5"},xls:{icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0243 1.43996H7.08805C6.82501 1.43996 6.57277 1.54445 6.38677 1.73043C6.20077 1.91642 6.09631 2.16868 6.09631 2.43171V6.64796L15.0243 11.856L19.4883 13.7398L23.9523 11.856V6.64796L15.0243 1.43996Z" fill="#21A366"></path><path d="M6.09631 6.64796H15.0243V11.856H6.09631V6.64796Z" fill="#107C41"></path><path d="M22.9605 1.43996H15.0243V6.64796H23.9523V2.43171C23.9523 2.16868 23.8478 1.91642 23.6618 1.73043C23.4758 1.54445 23.2235 1.43996 22.9605 1.43996Z" fill="#33C481"></path><path d="M15.0243 11.856H6.09631V21.2802C6.09631 21.5433 6.20077 21.7955 6.38677 21.9815C6.57277 22.1675 6.82501 22.272 7.08805 22.272H22.9606C23.2236 22.272 23.4759 22.1675 23.6618 21.9815C23.8478 21.7955 23.9523 21.5433 23.9523 21.2802V17.064L15.0243 11.856Z" fill="#185C37"></path><path d="M15.0243 11.856H23.9523V17.064H15.0243V11.856Z" fill="#107C41"></path><path opacity="0.1" d="M12.5446 5.15996H6.09631V19.296H12.5446C12.8073 19.2952 13.0591 19.1904 13.245 19.0046C13.4308 18.8188 13.5355 18.567 13.5363 18.3042V6.1517C13.5355 5.88892 13.4308 5.63712 13.245 5.4513C13.0591 5.26548 12.8073 5.16074 12.5446 5.15996Z" fill="black"></path><path opacity="0.2" d="M11.8006 5.90396H6.09631V20.04H11.8006C12.0633 20.0392 12.3151 19.9344 12.501 19.7486C12.6868 19.5628 12.7915 19.311 12.7923 19.0482V6.8957C12.7915 6.6329 12.6868 6.38114 12.501 6.19532C12.3151 6.0095 12.0633 5.90475 11.8006 5.90396Z" fill="black"></path><path opacity="0.2" d="M11.8006 5.90396H6.09631V18.552H11.8006C12.0633 18.5512 12.3151 18.4464 12.501 18.2606C12.6868 18.0748 12.7915 17.823 12.7923 17.5602V6.8957C12.7915 6.6329 12.6868 6.38114 12.501 6.19532C12.3151 6.0095 12.0633 5.90475 11.8006 5.90396Z" fill="black"></path><path opacity="0.2" d="M11.0566 5.90396H6.09631V18.552H11.0566C11.3193 18.5512 11.5711 18.4464 11.757 18.2606C11.9428 18.0748 12.0475 17.823 12.0483 17.5602V6.8957C12.0475 6.6329 11.9428 6.38114 11.757 6.19532C11.5711 6.0095 11.3193 5.90475 11.0566 5.90396Z" fill="black"></path><path d="M1.13604 5.90396H11.0566C11.3195 5.90396 11.5718 6.00842 11.7578 6.19442C11.9438 6.38042 12.0483 6.63266 12.0483 6.8957V16.8162C12.0483 17.0793 11.9438 17.3315 11.7578 17.5175C11.5718 17.7035 11.3195 17.808 11.0566 17.808H1.13604C0.873012 17.808 0.620754 17.7035 0.434765 17.5175C0.248775 17.3315 0.144287 17.0793 0.144287 16.8162V6.8957C0.144287 6.63266 0.248775 6.38042 0.434765 6.19442C0.620754 6.00842 0.873012 5.90396 1.13604 5.90396Z" fill="#107C41"></path><path d="M2.77283 15.576L5.18041 11.8455L2.9752 8.13596H4.74964L5.95343 10.5071C6.06401 10.7318 6.14015 10.8994 6.18185 11.01H6.19745C6.27683 10.8305 6.35987 10.6559 6.44669 10.4863L7.73309 8.13596H9.36167L7.09991 11.8247L9.41897 15.576H7.68545L6.29489 12.972C6.22943 12.861 6.17387 12.7445 6.12899 12.6238H6.10817C6.06761 12.7419 6.01367 12.855 5.94748 12.9608L4.51676 15.576H2.77283Z" fill="white"></path></svg>',class:"shrink-0 size-5"},doc:{icon:'<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.6141 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 12.3359L31.9364 8.86395V3.24228C31.9364 2.89158 31.797 2.55523 31.549 2.30725C31.3011 2.05926 30.9647 1.91994 30.6141 1.91994Z" fill="#41A5EE"></path><path d="M31.9364 8.86395H8.12839V15.8079L20.0324 19.2799L31.9364 15.8079V8.86395Z" fill="#2B7CD3"></path><path d="M31.9364 15.8079H8.12839V22.7519L20.0324 26.2239L31.9364 22.7519V15.8079Z" fill="#185ABD"></path><path d="M31.9364 22.752H8.12839V28.3736C8.12839 28.7244 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.696 9.45071 29.696H30.6141C30.9647 29.696 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7244 31.9364 28.3736V22.752Z" fill="#103F91"></path><path opacity="0.1" d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z" class="fill-black" fill="currentColor"></path><path opacity="0.2" d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z" class="fill-black" fill="currentColor"></path><path opacity="0.2" d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z" class="fill-black" fill="currentColor"></path><path opacity="0.2" d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z" class="fill-black" fill="currentColor"></path><path d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16401 23.7439 0.827669 23.6047 0.579687 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579687 8.25922C0.827669 8.01122 1.16401 7.87194 1.51472 7.87194Z" fill="#185ABD"></path><path d="M12.0468 20.7679H10.2612L8.17801 13.9231L5.99558 20.7679H4.20998L2.22598 10.8479H4.01158L5.40038 17.7919L7.48358 11.0463H8.97161L10.9556 17.7919L12.3444 10.8479H14.0308L12.0468 20.7679Z" fill="white"></path></svg>',class:"shrink-0 size-5"},zip:{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v18"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><circle cx="10" cy="20" r="2"/><path d="M10 7V6"/><path d="M10 12v-1"/><path d="M10 18v-2"/></svg>',class:"shrink-0 size-5"}},s.extensions),l.singleton=s.singleton,l.concatOptions=r(r({clickable:l.el.querySelector("[data-file-upload-trigger]"),previewsContainer:l.el.querySelector("[data-file-upload-previews]"),addRemoveLinks:!1,previewTemplate:l.previewTemplate,autoHideTrigger:!1},s),n),l.onReloadButtonClickListener=[],l.onTempFileInputChangeListener=[],l.init(),l}return i(t,e),t.prototype.tempFileInputChange=function(e,t){var n,o=null===(n=e.target.files)||void 0===n?void 0:n[0];if(o){var i=o;i.status=Dropzone.ADDED,i.accepted=!0,i.previewElement=t.previewElement,i.previewTemplate=t.previewTemplate,i.previewsContainer=t.previewsContainer,this.dropzone.removeFile(t),this.dropzone.addFile(i)}},t.prototype.reloadButtonClick=function(e,t){var n=this;e.preventDefault(),e.stopPropagation();var o=document.createElement("input");o.type="file",this.onTempFileInputChangeListener.push({el:o,fn:function(e){return n.tempFileInputChange(e,t)}}),o.click(),o.addEventListener("change",this.onTempFileInputChangeListener.find((function(e){return e.el===o})).fn)},t.prototype.init=function(){this.createCollection(window.$hsFileUploadCollection,this),this.initDropzone()},t.prototype.initDropzone=function(){var e=this,t=this.el.querySelector("[data-file-upload-clear]"),n=Array.from(this.el.querySelectorAll("[data-file-upload-pseudo-trigger]"));this.dropzone=new Dropzone(this.el,this.concatOptions),this.dropzone.on("addedfile",(function(t){return e.onAddFile(t)})),this.dropzone.on("removedfile",(function(){return e.onRemoveFile()})),this.dropzone.on("uploadprogress",(function(t,n){return e.onUploadProgress(t,n)})),this.dropzone.on("complete",(function(t){return e.onComplete(t)})),t&&(t.onclick=function(){e.dropzone.files.length&&e.dropzone.removeAllFiles(!0)}),n.length&&n.forEach((function(t){t.onclick=function(){var t,n;(null===(t=e.concatOptions)||void 0===t?void 0:t.clickable)&&(null===(n=e.concatOptions)||void 0===n?void 0:n.clickable).click()}}))},t.prototype.destroy=function(){var e=this;this.onTempFileInputChangeListener.forEach((function(e){e.el.removeEventListener("change",e.fn)})),this.onTempFileInputChangeListener=null,this.onReloadButtonClickListener.forEach((function(e){e.el.removeEventListener("click",e.fn)})),this.onReloadButtonClickListener=null,this.dropzone.destroy(),window.$hsFileUploadCollection=window.$hsFileUploadCollection.filter((function(t){return t.element.el!==e.el}))},t.prototype.onAddFile=function(e){var t=this,n=e.previewElement,o=e.previewElement.querySelector("[data-file-upload-reload]");if(!n)return!1;this.singleton&&this.dropzone.files.length>1&&this.dropzone.removeFile(this.dropzone.files[0]),o&&(this.onReloadButtonClickListener.push({el:o,fn:function(n){return t.reloadButtonClick(n,e)}}),o.addEventListener("click",this.onReloadButtonClickListener.find((function(e){return e.el===o})).fn)),this.previewAccepted(e)},t.prototype.previewAccepted=function(e){var t=this,n=e.previewElement,o=this.splitFileName(e.name),i=n.querySelector("[data-file-upload-file-name]"),r=n.querySelector("[data-file-upload-file-ext]"),l=n.querySelector("[data-file-upload-file-size]"),a=n.querySelector("[data-file-upload-file-icon]"),s=this.el.querySelector("[data-file-upload-trigger]"),p=n.querySelector("[data-dz-thumbnail]"),d=n.querySelector("[data-file-upload-remove]");i&&(i.textContent=o.name),r&&(r.textContent=o.extension),l&&(l.textContent=this.formatFileSize(e.size)),p&&(e.type.includes("image/")?p.classList.remove("hidden"):this.setIcon(o.extension,a)),this.dropzone.files.length>0&&this.concatOptions.autoHideTrigger&&(s.style.display="none"),d&&(d.onclick=function(){return t.dropzone.removeFile(e)})},t.prototype.onRemoveFile=function(){var e=this.el.querySelector("[data-file-upload-trigger]");0===this.dropzone.files.length&&this.concatOptions.autoHideTrigger&&(e.style.display="")},t.prototype.onUploadProgress=function(e,t){var n=e.previewElement;if(!n)return!1;var o=n.querySelector("[data-file-upload-progress-bar]"),i=n.querySelector("[data-file-upload-progress-bar-pane]"),r=n.querySelector("[data-file-upload-progress-bar-value]"),l=Math.floor(t);o&&o.setAttribute("aria-valuenow","".concat(l)),i&&(i.style.width="".concat(l,"%")),r&&(r.innerText="".concat(l))},t.prototype.onComplete=function(e){var t=e.previewElement;if(!t)return!1;t.classList.add("complete")},t.prototype.setIcon=function(e,t){var n=this.createIcon(e);t.append(n)},t.prototype.createIcon=function(e){var t,n,o=(null===(t=this.extensions[e])||void 0===t?void 0:t.icon)?(0,a.htmlToElement)(this.extensions[e].icon):(0,a.htmlToElement)(this.extensions.default.icon);return(0,a.classToClassList)((null===(n=this.extensions[e])||void 0===n?void 0:n.class)?this.extensions[e].class:this.extensions.default.class,o),o},t.prototype.formatFileSize=function(e){return e<1024?e.toFixed(2)+" B":e<1048576?(e/1024).toFixed(2)+" KB":e<1073741824?(e/1048576).toFixed(2)+" MB":e<1099511627776?(e/1073741824).toFixed(2)+" GB":(e/1099511627776).toFixed(2)+" TB"},t.prototype.splitFileName=function(e){var t=e.lastIndexOf(".");return-1==t?{name:e,extension:""}:{name:e.substring(0,t),extension:e.substring(t+1)}},t.getInstance=function(e,t){var n=window.$hsFileUploadCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));return n?t?n:n.element.el:null},t.autoInit=function(){window.$hsFileUploadCollection||(window.$hsFileUploadCollection=[]),window.$hsFileUploadCollection&&(window.$hsFileUploadCollection=window.$hsFileUploadCollection.filter((function(e){var t=e.element;return document.contains(t.el)}))),document.querySelectorAll("[data-file-upload]:not(.--prevent-on-load-init)").forEach((function(e){window.$hsFileUploadCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))||new t(e)}))},t}(s.default);window.addEventListener("load",(function(){document.querySelectorAll("[data-file-upload]:not(.--prevent-on-load-init)").length&&("undefined"==typeof _&&console.error("HSFileUpload: Lodash is not available, please add it to the page."),"undefined"==typeof Dropzone&&console.error("HSFileUpload: Dropzone is not available, please add it to the page.")),"undefined"!=typeof _&&"undefined"!=typeof Dropzone&&p.autoInit()})),"undefined"!=typeof window&&(window.HSFileUpload=p),t.default=p},287:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t,n){this.el=e,this.options=t,this.events=n,this.el=e,this.options=t,this.events={}}return e.prototype.createCollection=function(e,t){var n;e.push({id:(null===(n=null==t?void 0:t.el)||void 0===n?void 0:n.id)||e.length+1,element:t})},e.prototype.fireEvent=function(e,t){if(void 0===t&&(t=null),this.events.hasOwnProperty(e))return this.events[e](t)},e.prototype.on=function(e,t){this.events[e]=t},e}();t.default=n},806:function(e,t){
/*
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
var n=this;Object.defineProperty(t,"__esModule",{value:!0}),t.menuSearchHistory=t.classToClassList=t.htmlToElement=t.afterTransition=t.dispatch=t.debounce=t.isJson=t.isDirectChild=t.isFormElement=t.isParentOrElementHidden=t.isEnoughSpace=t.isIpadOS=t.isIOS=t.getZIndex=t.getClassPropertyAlt=t.getClassProperty=t.stringToBoolean=void 0,t.getHighestZIndex=function(e){var t=Number.NEGATIVE_INFINITY;return e.forEach((function(e){var n=o(e);"auto"!==n&&(n=parseInt(n,10))>t&&(t=n)})),t};t.stringToBoolean=function(e){return"true"===e};t.getClassProperty=function(e,t,n){return void 0===n&&(n=""),(window.getComputedStyle(e).getPropertyValue(t)||n).replace(" ","")};t.getClassPropertyAlt=function(e,t,n){void 0===n&&(n="");var o="";return e.classList.forEach((function(e){e.includes(t)&&(o=e)})),o.match(/:(.*)]/)?o.match(/:(.*)]/)[1]:n};var o=function(e){return window.getComputedStyle(e).getPropertyValue("z-index")};t.getZIndex=o;t.isIOS=function(){return!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};t.isIpadOS=function(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};t.isDirectChild=function(e,t){for(var n=e.children,o=0;o<n.length;o++)if(n[o]===t)return!0;return!1};t.isEnoughSpace=function(e,t,n,o,i){void 0===n&&(n="auto"),void 0===o&&(o=10),void 0===i&&(i=null);var r=t.getBoundingClientRect(),l=i?i.getBoundingClientRect():null,a=window.innerHeight,s=l?r.top-l.top:r.top,p=(i?l.bottom:a)-r.bottom,d=e.clientHeight+o;return"bottom"===n?p>=d:"top"===n?s>=d:s>=d||p>=d};t.isFormElement=function(e){return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement};var i=function(e){return!!e&&("none"===window.getComputedStyle(e).display||i(e.parentElement))};t.isParentOrElementHidden=i;t.isJson=function(e){if("string"!=typeof e)return!1;var t=e.trim()[0],n=e.trim().slice(-1);if("{"===t&&"}"===n||"["===t&&"]"===n)try{return JSON.parse(e),!0}catch(e){return!1}return!1};t.debounce=function(e,t){var o;return void 0===t&&(t=200),function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];clearTimeout(o),o=setTimeout((function(){e.apply(n,i)}),t)}};t.dispatch=function(e,t,n){void 0===n&&(n=null);var o=new CustomEvent(e,{detail:{payload:n},bubbles:!0,cancelable:!0,composed:!1});t.dispatchEvent(o)};t.afterTransition=function(e,t){var n=function(){t(),e.removeEventListener("transitionend",n,!0)},o=window.getComputedStyle(e),i=o.getPropertyValue("transition-duration");"none"!==o.getPropertyValue("transition-property")&&parseFloat(i)>0?e.addEventListener("transitionend",n,!0):t()};t.htmlToElement=function(e){var t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild};t.classToClassList=function(e,t,n,o){void 0===n&&(n=" "),void 0===o&&(o="add"),e.split(n).forEach((function(e){return"add"===o?t.classList.add(e):t.classList.remove(e)}))};t.menuSearchHistory={historyIndex:-1,addHistory:function(e){this.historyIndex=e},existsInHistory:function(e){return e>this.historyIndex},clearHistory:function(){this.historyIndex=-1}}}},t={};var n=function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}(192);return n})()));