/* ============================================================
   main.js — Serpentina Taller
   ============================================================ */

/* TODO: Reemplazar con número real de WhatsApp Business */
const WA_NUMBER = '52XXXXXXXXXX';
const WA_MSG_DEFAULT = encodeURIComponent('Hola, me gustaría cotizar un proyecto con Serpentina Taller.');

/* ============================================================
   NAV — scroll effect
   ============================================================ */

function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ============================================================
   MOBILE NAV
   ============================================================ */

function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const overlay   = document.getElementById('mobile-nav-overlay');
  const closeBtn  = document.getElementById('mobile-nav-close');
  const navLinks  = mobileNav?.querySelectorAll('a');

  if (!hamburger || !mobileNav) return;

  const open = () => {
    mobileNav.classList.add('open');
    overlay.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    mobileNav.classList.remove('open');
    overlay.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  overlay.addEventListener('click', close);
  navLinks?.forEach(a => a.addEventListener('click', close));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  });
}

/* ============================================================
   SCROLL ANIMATIONS — IntersectionObserver
   ============================================================ */

function initScrollAnimations() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    document.querySelectorAll('[data-animate]').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
}

/* ============================================================
   GALERÍA
   ============================================================ */

let currentFilter = 'todos';

function renderGallery(filter) {
  currentFilter = filter;
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  const items = filter === 'todos'
    ? GALLERY
    : GALLERY.filter(item => item.categoria === filter);

  if (items.length === 0) {
    grid.innerHTML = '<p class="gallery-empty">No hay piezas en esta categoría todavía.</p>';
    return;
  }

  grid.innerHTML = items.map(item => `
    <article class="gallery-item" data-id="${item.id}" role="button" tabindex="0" aria-label="Ver ${item.nombre}">
      ${item.src
        ? `<img src="${item.src}" alt="${item.alt}" loading="lazy" width="800" height="600">`
        : `<div class="gallery-placeholder"><span class="gallery-placeholder-label">${item.categoria}</span></div>`
      }
      <div class="gallery-overlay" aria-hidden="true">
        <span class="gallery-nombre">${item.nombre}</span>
        <span class="gallery-material">${item.material}</span>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.gallery-item').forEach(el => {
    const open = () => {
      const item = GALLERY.find(i => i.id === el.dataset.id);
      if (item) openLightbox(item);
    };
    el.addEventListener('click', open);
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });
  });
}

function initGallery() {
  const filters = document.querySelectorAll('.gallery-filter');

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.filter);
    });
  });

  renderGallery('todos');
}

/* ============================================================
   LIGHTBOX
   ============================================================ */

function openLightbox(item) {
  const lightbox = document.getElementById('lightbox');
  const overlay  = document.getElementById('lightbox-overlay');
  const img      = document.getElementById('lightbox-img');
  const placeholder = document.getElementById('lightbox-placeholder');
  const nombre   = document.getElementById('lightbox-nombre');
  const material = document.getElementById('lightbox-material');
  const año      = document.getElementById('lightbox-año');
  const categoria = document.getElementById('lightbox-categoria');
  const waBtn    = document.getElementById('lightbox-wa');

  if (!lightbox) return;

  /* Imagen o placeholder */
  if (item.src) {
    img.src = item.src;
    img.alt = item.alt;
    img.style.display = 'block';
    placeholder.style.display = 'none';
  } else {
    img.style.display = 'none';
    placeholder.style.display = 'flex';
    placeholder.innerHTML = `<span class="gallery-placeholder-label">${item.categoria}</span>`;
    placeholder.className = 'gallery-placeholder';
  }

  /* Info */
  categoria.textContent = item.categoria;
  nombre.textContent    = item.nombre;
  material.textContent  = item.material;
  año.textContent       = item.ubicacion ? `${item.año} · ${item.ubicacion}` : item.año;

  /* WhatsApp con nombre de pieza */
  const msg = encodeURIComponent(`Hola, me interesa algo similar a "${item.nombre}". ¿Podemos hablar?`);
  waBtn.href = `https://wa.me/${WA_NUMBER}?text=${msg}`;

  /* Abrir */
  lightbox.classList.add('open');
  overlay.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  const overlay  = document.getElementById('lightbox-overlay');
  if (!lightbox) return;

  lightbox.classList.remove('open');
  overlay.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initLightbox() {
  const closeBtn = document.getElementById('lightbox-close');
  const overlay  = document.getElementById('lightbox-overlay');

  closeBtn?.addEventListener('click', closeLightbox);
  overlay?.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
}

/* ============================================================
   FORMULARIO DE CONTACTO
   Listo para conectar a Formspree.
   Reemplazar XXXXXXXX en el action del <form> en index.html.
   ============================================================ */

function initForm() {
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  const error   = document.getElementById('form-error');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = form.querySelector('[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Enviando…';
    btn.disabled = true;
    success.hidden = true;
    error.hidden = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        success.hidden = false;
        form.reset();
      } else {
        throw new Error('server');
      }
    } catch {
      error.hidden = false;
    } finally {
      btn.textContent = originalText;
      btn.disabled = false;
    }
  });
}

/* ============================================================
   WHATSAPP BUTTON FLOTANTE
   ============================================================ */

function initWhatsApp() {
  const btn = document.getElementById('whatsapp-btn');
  if (!btn) return;
  btn.href = `https://wa.me/${WA_NUMBER}?text=${WA_MSG_DEFAULT}`;
}

/* ============================================================
   SMOOTH SCROLL para links internos (#)
   ============================================================ */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initMobileNav();
  initScrollAnimations();
  initGallery();
  initLightbox();
  initForm();
  initWhatsApp();
  initSmoothScroll();
});
