(() => {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(pointer: coarse)').matches;

  /* ---------------- Footer year ---------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Header scroll state + progress bar ---------------- */
  const header = document.getElementById('siteHeader');
  const progressBar = document.getElementById('progressBar');

  function onScroll() {
    const y = window.scrollY;
    if (header) header.classList.toggle('scrolled', y > 40);
    if (progressBar) {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? (y / docH) * 100 : 0;
      progressBar.style.width = pct + '%';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------- Mobile menu ---------------- */
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');

  function closeMenu() {
    mobileNav.classList.remove('is-open');
    if (mobileNavBackdrop) mobileNavBackdrop.classList.remove('is-visible');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  function openMenu() {
    mobileNav.classList.add('is-open');
    if (mobileNavBackdrop) mobileNavBackdrop.classList.add('is-visible');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('is-open');
      isOpen ? closeMenu() : openMenu();
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    if (mobileNavBackdrop) mobileNavBackdrop.addEventListener('click', closeMenu);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ---------------- Scroll-spy nav ---------------- */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = Array.from(navLinks)
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = '#' + entry.target.id;
            navLinks.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === id));
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach(s => spy.observe(s));
  }

  /* ---------------- Scroll reveal ---------------- */
  const revealEls = document.querySelectorAll('.reveal');
  ['.pillars li', '.products-grid .product-card', '.compliance-list li'].forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => el.style.setProperty('--stagger', i));
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  /* ---------------- Count-up numbers ---------------- */
  const countEls = document.querySelectorAll('.count-up');
  function animateCount(el) {
    const target = parseInt(el.dataset.target, 10) || 0;
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString('pt-BR');
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if (countEls.length) {
    if ('IntersectionObserver' in window && !reducedMotion) {
      const countObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              countObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      countEls.forEach(el => countObserver.observe(el));
    } else {
      countEls.forEach(el => { el.textContent = parseInt(el.dataset.target, 10).toLocaleString('pt-BR'); });
    }
  }

  /* ---------------- Magnetic buttons ---------------- */
  if (!isTouch && !reducedMotion) {
    document.querySelectorAll('.btn-magnetic').forEach(btn => {
      let raf = null;
      btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const mx = (e.clientX - rect.left - rect.width / 2) * 0.28;
        const my = (e.clientY - rect.top - rect.height / 2) * 0.35;
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          btn.style.setProperty('--mx', mx.toFixed(1) + 'px');
          btn.style.setProperty('--my', my.toFixed(1) + 'px');
        });
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.setProperty('--mx', '0px');
        btn.style.setProperty('--my', '0px');
      });
    });
  }

  /* ---------------- Spark canvas ---------------- */
  const canvas = document.getElementById('sparkCanvas');
  if (canvas && !reducedMotion) {
    const ctx = canvas.getContext('2d');
    let w, h, particles, dpr;

    const COLORS = ['#ff2436', '#ff8a3d', '#ffd166', '#e30613'];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function makeParticle() {
      const originX = w * (0.55 + Math.random() * 0.4);
      const originY = h * (0.35 + Math.random() * 0.4);
      return {
        x: originX,
        y: originY,
        vx: (Math.random() - 0.5) * 1.2,
        vy: -0.6 - Math.random() * 1.6,
        life: 0,
        maxLife: 50 + Math.random() * 70,
        size: 1 + Math.random() * 2,
        color: COLORS[(Math.random() * COLORS.length) | 0],
        gravity: 0.02 + Math.random() * 0.02
      };
    }

    function initParticles() {
      const count = w < 700 ? 26 : 46;
      particles = Array.from({ length: count }, makeParticle);
    }

    function step() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.life++;
        p.vy += p.gravity * 0.02;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;

        const lifeRatio = p.life / p.maxLife;
        const alpha = lifeRatio < 0.15
          ? lifeRatio / 0.15
          : Math.max(0, 1 - (lifeRatio - 0.15) / 0.85);

        ctx.globalAlpha = alpha * 0.85;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.life >= p.maxLife) Object.assign(p, makeParticle());
      });
      ctx.globalAlpha = 1;
      requestAnimationFrame(step);
    }

    resize();
    initParticles();
    requestAnimationFrame(step);

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { resize(); initParticles(); }, 200);
    });
  }

})();
