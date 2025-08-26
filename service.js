 // Animation simple au scroll
    const cards = document.querySelectorAll('.service-card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });

    cards.forEach(card => observer.observe(card));