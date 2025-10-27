// main.js - validasi form, banner selamat datang, dan tombol kembali ke atas

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const nameEl = document.getElementById('name');
  const emailEl = document.getElementById('email');
  const messageEl = document.getElementById('message');
  const resultEl = document.getElementById('form-result');

  // welcome banner (tampil sekali)
  const banner = document.getElementById('welcome-banner');
  const welcomeClose = document.getElementById('welcome-close');
  if (banner && !localStorage.getItem('spider_visited')) {
    banner.hidden = false;
    localStorage.setItem('spider_visited', '1');
  }
  if (welcomeClose) welcomeClose.addEventListener('click', () => banner.hidden = true);

  function validEmail(e){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) }

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    resultEl.textContent = '';

    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const msg = messageEl.value.trim();

    if (name.length < 2) {
      resultEl.textContent = 'Nama minimal 2 karakter.';
      return;
    }
    if (!validEmail(email)) {
      resultEl.textContent = 'Masukkan email valid.';
      return;
    }
    if (msg.length < 10) {
      resultEl.textContent = 'Pesan terlalu singkat. (min 10 karakter)';
      return;
    }

    // Simulasi kirim
    resultEl.textContent = 'Terkirim. Terima kasih!';
    form.reset();
  });

  // Back to top button
  const backToTop = document.getElementById('back-to-top');
  function checkScroll() {
    if (window.scrollY > 300) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
  }
  window.addEventListener('scroll', checkScroll);
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  checkScroll();
});