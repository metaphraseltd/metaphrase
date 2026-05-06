/**
 * Metaphrase Ltd — Premium Website JavaScript
 * Version: 2.1
 * Features: scroll effects, mobile nav, FAQ accordion, form handling,
 *           reveal animations, back-to-top button, inner-page header
 */

(function () {
  'use strict';

  /* ══════════════════════════════════════════
     1. HEADER SCROLL BEHAVIOUR
     - Transparent on hero pages (index.html)
     - Solid (white) on all inner pages
     - .scrolled class added after 60px scroll
  ══════════════════════════════════════════ */
  const header = document.getElementById('header');

  function updateHeader() {
    if (!header) return;
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // Inner pages (non-index) get a solid header immediately
  if (header && !document.querySelector('.hero')) {
    header.classList.add('header-solid');
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();


  /* ══════════════════════════════════════════
     2. MOBILE NAVIGATION
  ══════════════════════════════════════════ */
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileNav    = document.getElementById('mobileNav');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      mobileToggle.classList.toggle('open', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close nav when a link is clicked
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        mobileToggle.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!mobileNav.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileNav.classList.remove('open');
        mobileToggle.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }


  /* ══════════════════════════════════════════
     3. SCROLL REVEAL ANIMATIONS
  ══════════════════════════════════════════ */
  const revealEls = document.querySelectorAll('.reveal, [data-reveal]');

  if (revealEls.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(el => {
      el.classList.add('reveal');
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }


  /* ══════════════════════════════════════════
     4. FAQ ACCORDION
  ══════════════════════════════════════════ */
  const faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const isOpen = btn.classList.contains('open');
      const answer = btn.nextElementSibling;

      // Close all others
      faqButtons.forEach(b => {
        b.classList.remove('open');
        b.setAttribute('aria-expanded', 'false');
        if (b.nextElementSibling) b.nextElementSibling.classList.remove('open');
      });

      // Toggle clicked
      if (!isOpen) {
        btn.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        if (answer) answer.classList.add('open');
      }
    });
  });


  /* ══════════════════════════════════════════
     5. SMOOTH SCROLLING (anchor links)
  ══════════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const headerHeight = header ? header.offsetHeight : 80;
      const targetTop    = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });


  /* ══════════════════════════════════════════
     6. CONTACT FORM HANDLING
  ══════════════════════════════════════════ */
  const contactForm = document.getElementById('contactForm');
  const submitBtn   = document.getElementById('submitBtn');
  const formSuccess = document.getElementById('formSuccess');
  const formError   = document.getElementById('formError');

  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      if (formSuccess) formSuccess.style.display = 'none';
      if (formError)   formError.style.display   = 'none';

      // Basic validation
      const required = contactForm.querySelectorAll('[required]');
      let valid = true;

      required.forEach(field => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = '#ef4444';
          field.addEventListener('input', () => { field.style.borderColor = ''; }, { once: true });
        }
      });

      if (!valid) {
        const firstInvalid = contactForm.querySelector('[required]:invalid, [required][style*="ef4444"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="bi bi-hourglass-split" aria-hidden="true"></i> Sending…';
      }

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          contactForm.reset();
          if (formSuccess) {
            formSuccess.style.display = 'block';
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        } else {
          throw new Error('Server error');
        }
      } catch {
        if (formError) {
          formError.style.display = 'block';
          formError.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> There was a problem sending your message. Please <a href="https://wa.me/447852408467" target="_blank" style="color:var(--accent);font-weight:700;text-decoration:underline;">WhatsApp us directly</a> or call <a href="tel:+447852408467" style="color:var(--accent);font-weight:700;">+44 7852 408 467</a>.';
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="bi bi-send-fill" aria-hidden="true"></i> Send Quote Request';
        }
      }
    });
  }


  /* ══════════════════════════════════════════
     7. ACTIVE NAV LINK (scroll spy)
  ══════════════════════════════════════════ */
  const navLinks = document.querySelectorAll('.nav-menu a');
  const sections = document.querySelectorAll('section[id]');

  if (sections.length > 0) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === `#${id}` ||
              link.getAttribute('href') === `/index.html#${id}` ||
              link.getAttribute('href') === `/#${id}`
            );
          });
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px' });

    sections.forEach(s => sectionObserver.observe(s));
  }


  /* ══════════════════════════════════════════
     8. BACK TO TOP BUTTON
  ══════════════════════════════════════════ */
  const backToTop = document.getElementById('backToTop');

  if (backToTop) {
    const bttBtn = backToTop.querySelector('button');

    // Show/hide on scroll
    function updateBackToTop() {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    window.addEventListener('scroll', updateBackToTop, { passive: true });
    updateBackToTop();

    // Scroll to top on click
    if (bttBtn) {
      bttBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }


  /* ══════════════════════════════════════════
     9. HERO ENTRANCE ANIMATIONS
  ══════════════════════════════════════════ */
  const heroBadge = document.querySelector('.hero-badge');
  if (heroBadge) {
    heroBadge.style.opacity = '0';
    heroBadge.style.transform = 'translateY(12px)';
    setTimeout(() => {
      heroBadge.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      heroBadge.style.opacity = '1';
      heroBadge.style.transform = 'translateY(0)';
    }, 200);
  }

  // Staggered hero text reveal
  const heroElements = document.querySelectorAll('.hero h1, .hero-subtitle, .hero-actions, .hero-phone, .hero-trust-row, .hero-badges');
  heroElements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 300 + i * 120);
  });


  /* ══════════════════════════════════════════
     10. PROCESS STEPS HOVER STATE
  ══════════════════════════════════════════ */
  const processSteps = document.querySelectorAll('.process-step');
  processSteps.forEach(step => {
    step.addEventListener('mouseenter', () => step.classList.add('active'));
    step.addEventListener('mouseleave', () => step.classList.remove('active'));
  });


  /* ══════════════════════════════════════════
     11. KEYBOARD ACCESSIBILITY
  ══════════════════════════════════════════ */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('open')) {
      mobileNav.classList.remove('open');
      if (mobileToggle) {
        mobileToggle.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.focus();
      }
      document.body.style.overflow = '';
    }
  });

  // Dropdown keyboard support
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('a');
    const menu   = dropdown.querySelector('.dropdown-menu');

    if (toggle && menu) {
      toggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const isOpen = menu.classList.toggle('open');
          toggle.setAttribute('aria-expanded', isOpen);
        }
      });
    }
  });


  /* ══════════════════════════════════════════
     12. PERFORMANCE: Lazy Load Images
  ══════════════════════════════════════════ */
  if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img:not([loading])').forEach(img => {
      if (!img.closest('.hero') && !img.closest('.page-hero')) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }


  /* ══════════════════════════════════════════
     13. LANGUAGE ANIMATION (services page)
         Cycles through language pairs in an
         animated display element
  ══════════════════════════════════════════ */
  const langDisplay = document.getElementById('langAnimation');
  if (langDisplay) {
    const pairs = [
      { from: '🇬🇧 English', to: '🇵🇰 Urdu' },
      { from: '🇬🇧 English', to: '🇮🇳 Hindi' },
      { from: '🇬🇧 English', to: '🇵🇰 Punjabi' },
      { from: '🇬🇧 English', to: '🇮🇹 Italian' },
      { from: '🇬🇧 English', to: '🇧🇩 Bengali' },
      { from: '🇬🇧 English', to: '🇸🇦 Arabic' },
      { from: '🇬🇧 English', to: '🇵🇱 Polish' },
      { from: '🇬🇧 English', to: '🇸🇴 Somali' },
      { from: '🇬🇧 English', to: '🇦🇫 Pashto' },
      { from: '🇬🇧 English', to: '🇮🇳 Gujarati' },
      { from: '🇺🇷 Urdu',    to: '🇬🇧 English' },
      { from: '🇮🇹 Italian', to: '🇬🇧 English' },
    ];

    let current = 0;
    const fromEl = langDisplay.querySelector('.lang-from');
    const toEl   = langDisplay.querySelector('.lang-to');

    function cyclePair() {
      if (!fromEl || !toEl) return;

      langDisplay.classList.add('fading');
      setTimeout(() => {
        current = (current + 1) % pairs.length;
        fromEl.textContent = pairs[current].from;
        toEl.textContent   = pairs[current].to;
        langDisplay.classList.remove('fading');
      }, 400);
    }

    setInterval(cyclePair, 2800);
  }


  /* ══════════════════════════════════════════
     INIT LOG
  ══════════════════════════════════════════ */
  console.log('%cMetaphrase Ltd — Premium v2.1', 'color: #2563EB; font-weight: 700; font-size: 12px;');

})();
