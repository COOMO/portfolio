/* Tom Huang · portfolio · shared behaviour
   1. JP1 language jumper (EN / 中), persisted.
   2. Lightbox for any footprint marked data-zoom.
   3. Copper traces on the landing: BOM row → footprint, drawn once, lit on hover. */
(function () {
  'use strict';

  /* ── 1. language ─────────────────────────────────────────── */
  var KEY = 'portfolio-lang';
  var root = document.documentElement;

  function setLang(lang) {
    if (lang !== 'en' && lang !== 'zh') lang = 'en';
    root.lang = lang;
    try { localStorage.setItem(KEY, lang); } catch (_) {}
    var t = document.querySelector('title');
    if (t && t.getAttribute('data-' + lang)) t.textContent = t.getAttribute('data-' + lang);
    var m = document.querySelector('meta[name="description"]');
    if (m && m.getAttribute('data-' + lang)) m.setAttribute('content', m.getAttribute('data-' + lang));
    var jp = document.getElementById('jp1');
    if (jp) jp.setAttribute('aria-label', lang === 'en' ? 'Language: English. Switch to Chinese' : '語言：中文。切換為英文');
    // trace geometry depends on text width; redraw after the swap
    if (window.__redrawTraces) window.requestAnimationFrame(window.__redrawTraces);
  }

  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (_) {}
  var initial = saved;
  if (initial !== 'en' && initial !== 'zh') {
    initial = 'zh';                          // first visit: Chinese; the JP1 jumper and localStorage override
  }
  setLang(initial);

  var jp1 = document.getElementById('jp1');
  if (jp1) {
    jp1.addEventListener('click', function () {
      setLang(root.lang === 'en' ? 'zh' : 'en');
    });
  }

  /* ── 2. lightbox ─────────────────────────────────────────── */
  var lb = document.getElementById('lightbox');
  if (lb && typeof lb.showModal === 'function') {
    var lbSlot = lb.querySelector('.lb-img');
    var lbCap = lb.querySelector('.lb-cap');
    var lbClose = lb.querySelector('button');
    var lbImg = document.createElement('img');
    function openLb(fp) {
      var img = fp.querySelector('img');
      if (!img) return;
      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt || '';
      if (!lbImg.parentNode) lbSlot.appendChild(lbImg);
      if (lbCap) {
        var cap = fp.querySelector('figcaption');
        lbCap.textContent = cap ? cap.textContent.replace(/\s+/g, ' ').trim() : '';
      }
      document.body.style.overflow = 'hidden';
      lb.showModal();
    }
    function closeLb() { if (lb.open) lb.close(); }
    lb.addEventListener('close', function () { document.body.style.overflow = ''; if (lbImg.parentNode) lbImg.parentNode.removeChild(lbImg); });
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
    if (lbClose) lbClose.addEventListener('click', closeLb);
    document.querySelectorAll('.fp[data-zoom]').forEach(function (fp) {
      fp.setAttribute('role', 'button');
      fp.setAttribute('tabindex', '0');
      fp.addEventListener('click', function (e) {
        if (e.target.closest('a')) return;
        openLb(fp);
      });
      fp.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(fp); }
      });
    });
  }

  /* ── 3. traces ───────────────────────────────────────────── */
  var svg = document.getElementById('traces');
  var board = svg ? svg.closest('.board') : null;
  if (svg && board) {
    var NS = 'http://www.w3.org/2000/svg';
    var pairs = Array.prototype.map.call(document.querySelectorAll('[data-trace-to]'), function (row) {
      var to = document.getElementById(row.getAttribute('data-trace-to'));
      return to ? { from: row, to: to } : null;
    }).filter(Boolean);
    // The authored moment: traces draw once, after the fonts have settled the geometry.
    // Until that first animated draw has finished, every redraw replays it instead of cutting it off.
    var animated = false;    // true once the entrance has fully played
    var ready = false;       // true once fonts are in (or the fallback timer fired)

    function rel(el) {
      var b = board.getBoundingClientRect();
      var r = el.getBoundingClientRect();
      return { x: r.left - b.left, y: r.top - b.top, w: r.width, h: r.height };
    }

    function draw() {
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      if (window.innerWidth <= 980) return;
      var b = board.getBoundingClientRect();
      svg.setAttribute('viewBox', '0 0 ' + b.width + ' ' + b.height);
      pairs.forEach(function (p, i) {
        var a = rel(p.from), c = rel(p.to);
        var y0 = a.y + a.h / 2;                        // row mid
        var y1 = c.y + 18;                             // footprint's left edge near pin 1
        var d, vias;
        if (c.x - (a.x + a.w) >= 40) {
          // target sits to the right: run out of the row, bend 45°, enter from the left
          var x0 = a.x + a.w, x1 = c.x, run = x1 - x0, dy = y1 - y0;
          var diag = Math.min(Math.abs(dy), Math.max(16, run * 0.35));
          var xm = x0 + (run - diag) * 0.5;
          d = 'M' + x0 + ' ' + y0 + ' H' + xm +
              ' l' + diag + ' ' + (dy >= 0 ? diag : -diag) * (Math.abs(dy) ? 1 : 0) +
              (Math.abs(dy) > diag ? ' V' + y1 : '') + ' H' + x1;
          vias = [[x0, y0], [xm, y0]];
        } else {
          // target sits below in the same column: leave the row to the left,
          // run down the board margin as a bus, re-enter at the footprint's pin 1
          var xl = a.x - 10, xb = a.x - 24;
          d = 'M' + xl + ' ' + y0 + ' H' + xb + ' V' + y1 + ' H' + c.x;
          vias = [[xl, y0], [xb, y1]];
        }
        var path = document.createElementNS(NS, 'path');
        path.setAttribute('d', d);
        var len = path.getTotalLength ? path.getTotalLength() : 2000;
        path.style.setProperty('--len', String(Math.ceil(len)));
        if (!animated) {
          path.classList.add('draw', 'd' + (i + 1));
          path.addEventListener('animationend', function () { animated = true; }, { once: true });
        }
        svg.appendChild(path);
        vias.forEach(function (pt) {
          var v = document.createElementNS(NS, 'circle');
          v.setAttribute('cx', pt[0]); v.setAttribute('cy', pt[1]); v.setAttribute('r', '3.5');
          svg.appendChild(v);
          p.vias = (p.vias || []).concat([v]);
        });
        p.path = path;
      });
    }

    function hot(p, on) {
      // the six traces share one bus down the left margin, so a lit trace must be
      // drawn last or the later bronze traces and their vias cut it into pieces
      if (on && animated && p.path && p.path.parentNode === svg) {
        svg.appendChild(p.path);
        (p.vias || []).forEach(function (v) { svg.appendChild(v); });
      }
      if (p.path) p.path.classList.toggle('hot', on);
      (p.vias || []).forEach(function (v) { v.classList.toggle('hot', on); });
      p.from.classList.toggle('hot', on);
      p.to.classList.toggle('hot', on);
    }
    pairs.forEach(function (p) {
      ['mouseenter', 'focusin'].forEach(function (ev) {
        p.from.addEventListener(ev, function () { hot(p, true); });
        p.to.addEventListener(ev, function () { hot(p, true); });
      });
      ['mouseleave', 'focusout'].forEach(function (ev) {
        p.from.addEventListener(ev, function () { hot(p, false); });
        p.to.addEventListener(ev, function () { hot(p, false); });
      });
    });

    window.__redrawTraces = function () {
      if (!ready) return;                       // nothing is drawn before the fonts settle the geometry
      pairs.forEach(function (p) { p.vias = []; });
      draw();
    };
    var raf = null;
    window.addEventListener('resize', function () {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(window.__redrawTraces);
    });
    window.addEventListener('load', function () { window.__redrawTraces(); });
    function begin() {
      if (ready) return;
      ready = true;
      window.__redrawTraces();
      // if the browser never fires animationend (reduced motion, hidden tab), stop replaying after one run
      setTimeout(function () { animated = true; }, 1400);
    }
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(begin, begin);
      setTimeout(begin, 1500);                  // fallback when the font promise stalls
    } else {
      begin();
    }
  }
})();
