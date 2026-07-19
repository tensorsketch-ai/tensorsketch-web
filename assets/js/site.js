// TensorSketch site — tiny, dependency-free interactions.
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  // Highlight the current section in the nav
  var path = location.pathname.replace(/\/index\.html$/, "/").replace(/\/$/, "") || "/";
  document.querySelectorAll(".nav-links a[data-path]").forEach(function (a) {
    var p = a.getAttribute("data-path");
    if (p !== "/" && path.indexOf(p) === 0) a.classList.add("active");
  });

  // Copy-to-clipboard for code blocks and install pills
  function bindCopy(btn, getText) {
    btn.addEventListener("click", function () {
      var text = getText();
      navigator.clipboard.writeText(text).then(function () {
        var prev = btn.textContent;
        btn.textContent = "copied";
        setTimeout(function () { btn.textContent = prev; }, 1400);
      });
    });
  }
  document.querySelectorAll(".copy-btn").forEach(function (btn) {
    var pre = btn.parentElement.querySelector("pre");
    if (pre) bindCopy(btn, function () { return pre.innerText; });
  });
  document.querySelectorAll(".install .copy-inline").forEach(function (btn) {
    var code = btn.parentElement.querySelector("code");
    if (code) bindCopy(btn, function () { return code.innerText; });
  });

  // Footer year
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
