  // Mobile nav toggle
  const toggleBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  const body = document.body;

  toggleBtn.addEventListener('click', () => {
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true' || false;
    toggleBtn.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('open');
    body.classList.toggle('menu-open');
    navMenu.setAttribute('aria-hidden', expanded);
    if (!expanded) {
      navMenu.focus();
    }
  });

  // Close menu on link click (mobile)
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', false);
        body.classList.remove('menu-open');
        navMenu.setAttribute('aria-hidden', true);
      }
    });
  });

  // Set minimum date in booking form to today
  const dateInput = document.getElementById('date');
  if(dateInput){
    const today = new Date().toISOString().slice(0,10);
    dateInput.min = today;
  }
  