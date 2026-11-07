// Scan to Flow landing: menu, scroll reveal, hero record loop, gallery buttons.
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile menu
  const btn = document.querySelector('[data-menu-button]');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    const setOpen = (open) => {
      btn.setAttribute('aria-expanded', String(open));
      menu.hidden = !open;
    };
    btn.addEventListener('click', () => setOpen(menu.hidden));
    menu.addEventListener('click', (e) => {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !menu.hidden) {
        setOpen(false);
        btn.focus();
      }
    });
  }

  // Scroll reveal
  const items = document.querySelectorAll('[data-reveal]');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    items.forEach((el) => io.observe(el));
  }

  // Gallery arrows
  const gallery = document.getElementById('gallery');
  document.querySelectorAll('[data-scroll]').forEach((b) => {
    b.addEventListener('click', () => {
      if (!gallery) return;
      const dir = Number(b.getAttribute('data-scroll'));
      gallery.scrollBy({ left: dir * gallery.clientWidth * 0.8, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });

  // Hero: a new record is scanned and delivered every few seconds.
  const term = document.getElementById('term');
  const phone = document.querySelector('[data-phone]');
  if (!term || reduceMotion) return;

  const field = (k) => term.querySelector(`[data-j="${k}"]`);
  // Fictional in-store codes (EAN prefix 20), as in the app's screenshots.
  const records = [
    { sku: '2047183006045', qty: 6, loc: 'Aisle 4 · Bay 12' },
    { sku: '2047183007318', qty: 24, loc: 'Aisle 4 · Bay 13' },
    { sku: '2047183008124', qty: 3, loc: 'Aisle 5 · Bay 02' },
    { sku: '2047183005123', qty: 12, loc: 'Aisle 4 · Bay 12' },
  ];
  const hex = () => Math.random().toString(16).slice(2, 10) + '-' + Math.random().toString(16).slice(2, 6);
  let i = 0;
  let count = 1;
  let timer;

  const tick = () => {
    const r = records[i % records.length];
    i += 1;
    count += 1;
    term.dataset.state = 'sending';
    field('id').textContent = hex();
    field('sku').textContent = r.sku;
    field('qty').textContent = String(r.qty);
    field('loc').textContent = r.loc;
    field('count').textContent = String(count);
    if (phone) {
      phone.classList.remove('flash');
      void phone.offsetWidth; // restart the animation
      phone.classList.add('flash');
    }
    timer = setTimeout(() => {
      term.dataset.state = 'sent';
      timer = setTimeout(tick, 2600);
    }, 900);
  };

  // Pause while the hero is off screen or the tab is hidden.
  let visible = true;
  const start = () => {
    if (!timer && visible && !document.hidden) timer = setTimeout(tick, 1800);
  };
  const stop = () => {
    clearTimeout(timer);
    timer = undefined;
    term.dataset.state = 'sent';
  };
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      visible ? start() : stop();
    }).observe(term);
  }
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  start();
})();
