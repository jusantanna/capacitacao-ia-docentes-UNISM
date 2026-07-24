(function () {
  "use strict";

  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  var total = slides.length;
  var current = 0;

  // Subtle per-slide background glow variant (cycles through 6 positions/intensities,
  // including a violet tone) so slides don't read as exact backdrop copies.
  slides.forEach(function (slide, i) {
    slide.classList.add("glow-" + ((i % 6) + 1));
  });

  // Render Lucide icons (all <i data-lucide="..."> tags become inline SVGs that
  // inherit color via currentColor, so theme colors keep working after swap).
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  var counterEl = document.getElementById("slideCounter");
  var progressEl = document.getElementById("progressBar");
  var prevBtn = document.getElementById("prevBtn");
  var nextBtn = document.getElementById("nextBtn");
  var topicRailEl = document.getElementById("topicRailLabel");

  function topicLabel(slide) {
    var id = slide.getAttribute("data-slide") || "";
    var topic = slide.getAttribute("data-topic") || "";
    if (id === "capa" || id === "facilitadores") return "";
    return topic ? "Tópico " + topic : "";
  }

  function render() {
    slides.forEach(function (slide, i) {
      slide.classList.toggle("active", i === current);
      slide.classList.toggle("leaving", false);
    });
    counterEl.textContent = (current + 1) + " / " + total;
    progressEl.style.width = (((current + 1) / total) * 100) + "%";
    topicRailEl.textContent = topicLabel(slides[current]);
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;
    history.replaceState(null, "", "#" + slides[current].getAttribute("data-slide"));
  }

  function goTo(index) {
    if (index < 0 || index >= total || index === current) return;
    current = index;
    render();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") { next(); e.preventDefault(); }
    else if (e.key === "ArrowLeft" || e.key === "PageUp") { prev(); e.preventDefault(); }
    else if (e.key === "Home") { goTo(0); }
    else if (e.key === "End") { goTo(total - 1); }
  });

  // Click / tap to advance — ignore clicks on interactive controls or text selection.
  document.querySelector(".deck").addEventListener("click", function (e) {
    if (e.target.closest(".nav-controls")) return;
    var selection = window.getSelection();
    if (selection && selection.toString().length > 0) return;
    var rect = document.documentElement.getBoundingClientRect();
    var isLeftSide = e.clientX < rect.width * 0.25;
    if (isLeftSide) prev(); else next();
  });

  // Basic swipe support for touch devices.
  var touchStartX = null;
  document.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  document.addEventListener("touchend", function (e) {
    if (touchStartX === null) return;
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
    touchStartX = null;
  }, { passive: true });

  // Deep-link on load via #data-slide value.
  var hash = window.location.hash.replace("#", "");
  if (hash) {
    var idx = slides.findIndex(function (s) { return s.getAttribute("data-slide") === hash; });
    if (idx >= 0) current = idx;
  }

  render();

  // Draw a lightweight neural-network backdrop once.
  (function drawNetwork() {
    var svg = document.getElementById("networkSvg");
    if (!svg) return;
    var ns = "http://www.w3.org/2000/svg";
    var W = 1600, H = 900;
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    var pointCount = 26;
    var points = [];
    for (var i = 0; i < pointCount; i++) {
      points.push({ x: Math.random() * W, y: Math.random() * H, r: 1.4 + Math.random() * 2.2 });
    }
    points.forEach(function (p, i) {
      points.forEach(function (q, j) {
        if (j <= i) return;
        var d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 220) {
          var line = document.createElementNS(ns, "line");
          line.setAttribute("x1", p.x); line.setAttribute("y1", p.y);
          line.setAttribute("x2", q.x); line.setAttribute("y2", q.y);
          line.setAttribute("class", "edge");
          svg.appendChild(line);
        }
      });
    });
    points.forEach(function (p) {
      var c = document.createElementNS(ns, "circle");
      c.setAttribute("cx", p.x); c.setAttribute("cy", p.y); c.setAttribute("r", p.r);
      c.setAttribute("class", "node");
      svg.appendChild(c);
    });
  })();
})();
