!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequire7bc7;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequire7bc7=t);var r=t("iU1Pc"),i={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')};function u(e,n){var o=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}i.form.addEventListener("submit",(function(e){e.preventDefault(),function(e,n,o){for(var t=1;t<=o;t+=1)u(t,e+=1===t?0:n).then((function(e){var n=e.position,o=e.delay;r.Notify.success("Fulfilled promise ".concat(n," in ").concat(o,"ms"),{timeout:2e3})})).catch((function(e){var n=e.position,o=e.delay;r.Notify.failure("Rejected promise ".concat(n," in ").concat(o,"ms"),{timeout:2e3})})).finally((function(){return i.form.reset()}))}(Number(i.delay.value),Number(i.step.value),Number(i.amount.value))}))}();
//# sourceMappingURL=03-promises.514d8870.js.map
