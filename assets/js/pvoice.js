(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    var backTop = document.querySelector('.pv-backtop');
    function updateBackTop() {
      if (backTop) backTop.classList.toggle('visible', window.scrollY > 520);
    }
    updateBackTop();
    window.addEventListener('scroll', updateBackTop, { passive: true });
    if (backTop) backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.querySelectorAll('.pv-faq-q').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.pv-faq-item');
        var ans = item && item.querySelector('.pv-faq-a');
        if (!item || !ans) return;
        var open = item.classList.contains('open');
        item.parentElement.querySelectorAll('.pv-faq-item.open').forEach(function (other) {
          if (other === item) return;
          other.classList.remove('open');
          var otherAns = other.querySelector('.pv-faq-a');
          var otherBtn = other.querySelector('.pv-faq-q');
          if (otherAns) otherAns.style.maxHeight = '0px';
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        });
        item.classList.toggle('open', !open);
        btn.setAttribute('aria-expanded', !open ? 'true' : 'false');
        ans.style.maxHeight = !open ? ans.scrollHeight + 'px' : '0px';
      });
    });

    document.querySelectorAll('.pv-amount').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.pv-amount').forEach(function (other) { other.classList.remove('active'); });
        btn.classList.add('active');
      });
    });

    document.querySelectorAll('form[data-static-form]').forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var note = form.querySelector('.pv-form-note');
        var mailto = form.getAttribute('data-mailto');
        var subject = form.getAttribute('data-subject') || 'Website inquiry';
        var rows = [];
        form.querySelectorAll('input, select, textarea').forEach(function (field) {
          if (!field.name || field.type === 'button' || field.type === 'submit') return;
          if ((field.type === 'checkbox' || field.type === 'radio') && !field.checked) return;
          var label = field.closest('.pv-field') ? field.closest('.pv-field').querySelector('label') : null;
          var key = label ? label.textContent.trim() : field.name;
          rows.push(key + ': ' + (field.value || 'Yes'));
        });
        if (mailto && rows.length) {
          var url = 'mailto:' + encodeURIComponent(mailto) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(rows.join('\n'));
          window.location.href = url;
        }
        if (note) {
          note.textContent = mailto ? 'Opening your email app with this message. For launch, connect this form to your CRM or form provider.' : 'Thanks — this preview form is ready to connect to your email, CRM, or WordPress form plugin.';
          note.style.color = '#6047ff';
        }
      });
    });


    document.querySelectorAll('.pv-story-slider').forEach(function (slider) {
      var slides = Array.prototype.slice.call(slider.querySelectorAll('.pv-story-slide'));
      var dots = Array.prototype.slice.call(document.querySelectorAll('[data-pv-slide-dot]'));
      var prev = document.querySelector('[data-pv-slide-prev]');
      var next = document.querySelector('[data-pv-slide-next]');
      if (!slides.length) return;
      var index = Math.max(0, slides.findIndex(function (slide) { return slide.classList.contains('is-active'); }));
      var timer;

      function show(nextIndex) {
        index = (nextIndex + slides.length) % slides.length;
        slides.forEach(function (slide, i) {
          slide.classList.toggle('is-active', i === index);
          slide.setAttribute('aria-hidden', i === index ? 'false' : 'true');
        });
        dots.forEach(function (dot, i) {
          dot.classList.toggle('is-active', i === index);
          dot.setAttribute('aria-current', i === index ? 'true' : 'false');
        });
      }
      function start() {
        stop();
        timer = window.setInterval(function () { show(index + 1); }, 6500);
      }
      function stop() {
        if (timer) window.clearInterval(timer);
      }

      dots.forEach(function (dot, i) {
        dot.addEventListener('click', function () { show(i); start(); });
      });
      if (prev) prev.addEventListener('click', function () { show(index - 1); start(); });
      if (next) next.addEventListener('click', function () { show(index + 1); start(); });
      slider.addEventListener('mouseenter', stop);
      slider.addEventListener('mouseleave', start);
      show(index);
      start();
    });

    var reveal = document.querySelectorAll('.pv-reveal');
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: .14, rootMargin: '0px 0px -70px 0px' });
      reveal.forEach(function (el) { observer.observe(el); });
    } else {
      reveal.forEach(function (el) { el.classList.add('in'); });
    }
  });
})();
