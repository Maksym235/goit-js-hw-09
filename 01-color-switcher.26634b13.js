!function(){var t={body:document.querySelector("body"),start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};t.start.addEventListener("click",(function(){t.start.setAttribute("disabled",""),e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.stop.addEventListener("click",(function(){t.start.removeAttribute("disabled"),clearInterval(e)}));var e=null}();
//# sourceMappingURL=01-color-switcher.26634b13.js.map