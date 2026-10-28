document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const scrollProgress = document.getElementById('scrollProgress');
  const backTop = document.getElementById('backTop');
  const themeToggle = document.getElementById('themeToggle');
  const yearNow = document.getElementById('yearNow');

  if (yearNow) yearNow.textContent = new Date().getFullYear();

  // Menu mobile: mở/đóng và tự đóng sau khi chọn mục.
  menuToggle?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // Thanh tiến độ cuộn trang và nút quay về đầu trang.
  const updateScrollUI = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    if (scrollProgress) scrollProgress.style.width = `${progress}%`;
    backTop?.classList.toggle('visible', window.scrollY > 500);
  };
  window.addEventListener('scroll', updateScrollUI, { passive: true });
  updateScrollUI();
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Hiệu ứng xuất hiện khi cuộn đến từng phần.
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('in-view'));
  }

  // Lọc thẻ dự án theo danh mục.
  const filterButtons = document.querySelectorAll('.filter-button');
  const projectCards = document.querySelectorAll('.project-card');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      projectCards.forEach(card => {
        const shouldShow = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !shouldShow);
      });
    });
  });

  // Chuyển đổi giao diện sáng/tối; lựa chọn được lưu trên trình duyệt.
  const savedTheme = localStorage.getItem('aiThuTheme');
  if (savedTheme === 'dark') document.body.classList.add('dark');
  const updateThemeButton = () => {
    if (!themeToggle) return;
    const isDark = document.body.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀' : '☾';
    themeToggle.setAttribute('aria-label', isDark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối');
    themeToggle.title = isDark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối';
  };
  updateThemeButton();
  themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('aiThuTheme', document.body.classList.contains('dark') ? 'dark' : 'light');
    updateThemeButton();
  });

  // Dòng tiêu đề luân phiên nhẹ nhàng.
  const typedText = document.getElementById('typedText');
  const phrases = ['Kinh doanh Quốc tế', 'Thương mại Quốc tế', 'Học hỏi & phát triển'];
  let phraseIndex = 0;
  if (typedText && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setInterval(() => {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typedText.style.opacity = '0';
      setTimeout(() => {
        typedText.textContent = phrases[phraseIndex];
        typedText.style.opacity = '1';
      }, 220);
    }, 3000);
    typedText.style.transition = 'opacity .22s ease';
  }

  // Làm nổi bật mục menu tương ứng với phần đang xem.
  const sections = document.querySelectorAll('main section[id]');
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks?.querySelectorAll('a').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
          });
        }
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(section => navObserver.observe(section));
  }
});
