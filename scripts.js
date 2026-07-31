document.addEventListener('DOMContentLoaded', () => {

  // ----------- LOADING OVERLAY -----------
  const loadingOverlay = document.getElementById('loadingOverlay');
  window.addEventListener('load', () => {
    loadingOverlay.style.opacity = '0';
    setTimeout(() => {
      loadingOverlay.style.display = 'none';
    }, 500);
  });

  // ----------- NAVBAR COLLAPSE -----------
  const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navbarToggler = document.querySelector('.navbar-toggler');

  navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    });
  });

  document.addEventListener('click', (event) => {
    if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    }
  });

  // ----------- HERO CAROUSEL -----------
  const slides = document.querySelectorAll('.hero-slide');
  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;

  showSlide(index);
  setInterval(nextSlide, 5000);

  // ----------- SMOOTH SCROLL FOR NAVIGATION LINKS -----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // ----------- CARDS ANIMATION -----------
  const cards = document.querySelectorAll('.fade-up');
  const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => cardObserver.observe(card));

  // ----------- EMERGENCY SECTION ANIMATION -----------
  const fadeElements = document.querySelectorAll('.fade-in');
  const fadeObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  fadeElements.forEach(el => fadeObserver.observe(el));

  // ----------- SLIDE ANIMATIONS -----------
  const slideElements = document.querySelectorAll('.slide-right, .slide-left');
  const slideObserver = new IntersectionObserver(
    (visibleItems) => {
      visibleItems.forEach((element) => {
        if (element.isIntersecting) {
          element.target.classList.add('show');
        }
      });
    },
    { threshold: 0.3 }
  );

  slideElements.forEach((item) => slideObserver.observe(item));

  // ----------- ABOUT SECTION ANIMATION -----------
  const revealElements = document.querySelectorAll('.line-anim, .text-anim');
  const sectionRevealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  revealElements.forEach(el => sectionRevealObserver.observe(el));

  // ----------- NUMBER COUNTER ANIMATION -----------
  const counters = document.querySelectorAll('.counter');

  const startCounting = (counter) => {
    const target = +counter.dataset.target;
    let current = 0;
    const increment = Math.ceil(target / 120);

    const update = () => {
      current += increment;
      if (current < target) {
        counter.innerText = current;
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };

    update();
  };

  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(counter => counterObserver.observe(counter));

  // ----------- ABOUT SECTION REVEAL -----------
  const aboutSection = document.querySelector('.about-section');
  const aboutObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutSection.classList.add('about-show');
        }
      });
    },
    { threshold: 0.3 }
  );

  aboutObserver.observe(aboutSection);

  const revealItems = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach(item => revealObserver.observe(item));

  // ----------- FEATURE ITEMS ANIMATION -----------
  const featureItems = document.querySelectorAll('.feature-item');
  const featureObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('show');
          }, index * 120);
        }
      });
    },
    { threshold: 0.25 }
  );

  featureItems.forEach(item => featureObserver.observe(item));

  // ----------- DEPARTMENT TABS -----------
  const departmentData = {
    cardiology: {
      title: "Cardiology",
      intro: "Advanced care for heart and blood vessel conditions.Focused on prevention, diagnosis, and long-term heart health.",
      desc: "We provide advanced diagnosis and treatment for heart and blood vessel diseases. Our cardiology team focuses on prevention, early detection, and long-term heart health.",
      img: "img/Cardiology.png"
    },
    neurology: {
      title: "Neurology",
      intro: "Expert treatment for brain, spine, and nerve disorders.Helping patients manage and recover from neurological conditions.",
      desc: "Specialized treatment for brain and nervous system disorders.Managing stroke, epilepsy, migraines, and nerve conditions with modern care.Advanced care for neurological disorders such as stroke, epilepsy, migraines, and nerve-related conditions using modern technology.Expert care for disorders of the brain, spine, and nervous system. We treat conditions such as stroke, epilepsy, and chronic neurological disorders.",
      img: "img/brain.jpg"
    },
    hepatology: {
      title: "Hepatology",
      intro: "Specialized care for liver and digestive system diseases.Ensuring accurate diagnosis and effective treatment plans.",
      desc: "Advanced treatment for liver-related diseases and disorders.Including hepatitis, fatty liver, cirrhosis, and complex hepatic conditions.Specialized care for liver-related diseases including hepatitis and fatty liver disease. Our experts ensure accurate diagnosis and effective long-term management.",
      img: "img/OMT For TARE.jpg"
    },
    pediatrics: {
      title: "Pediatrics",
      intro: "Comprehensive healthcare for infants and children.Supporting healthy growth, development, and wellness.",
      desc: "Dedicated medical care for infants, children, and adolescents, focusing on healthy growth, development, and preventive care.Complete medical care for infants, children, and adolescents. We focus on healthy growth, development, and preventive healthcare for every child.",
      img: "img/Hospital patient Photos - Download Free High-Quality Pictures _ Freepik.jpg"
    }
  };

  const menuItems = document.querySelectorAll('.dept-menu li');
  const title = document.getElementById('deptTitle');
  const intro = document.getElementById('deptIntro');
  const desc = document.getElementById('deptDesc');
  const img = document.getElementById('deptImg');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(li => li.classList.remove('active'));
      item.classList.add('active');

      const data = departmentData[item.dataset.dept];

      // Animate content change
      title.classList.remove('animate-content');
      intro.classList.remove('animate-content');
      desc.classList.remove('animate-content');
      img.classList.remove('animate-image');

      void title.offsetWidth; // Trigger reflow

      title.textContent = data.title;
      intro.textContent = data.intro;
      desc.textContent = data.desc;
      img.src = data.img;

      title.classList.add('animate-content');
      intro.classList.add('animate-content');
      desc.classList.add('animate-content');
      img.classList.add('animate-image');
    });
  });

  // ----------- TESTIMONIALS SLIDER -----------
  const track = document.querySelector('.testimonial-track');
  const dots = document.querySelectorAll('.dot');
  const testimonialCards = document.querySelectorAll('.testimonial-card');

  const cardsPerView = 3;
  const totalSlides = testimonialCards.length - cardsPerView + 1;
  let currentTestimonialIndex = 0;

  function showTestimonialSlide(i) {
    const moveX = (100 / cardsPerView) * i;
    track.style.transform = `translateX(-${moveX}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[i]) dots[i].classList.add('active');
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentTestimonialIndex = i;
      showTestimonialSlide(currentTestimonialIndex);
    });
  });

  // Auto slide
  setInterval(() => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % totalSlides;
    showTestimonialSlide(currentTestimonialIndex);
  }, 4000);

  // ----------- SCROLL ANIMATIONS -----------
  const scrollElements = document.querySelectorAll('.scroll-animate');
  const scrollRevealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  scrollElements.forEach(el => scrollRevealObserver.observe(el));

  // ----------- DOCTOR CARDS ANIMATION -----------
  const doctorCardList = document.querySelectorAll('.doctor-card');
  const cardRevealObserver = new IntersectionObserver(
    entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('show');
          }, index * 200);
          cardRevealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  doctorCardList.forEach(card => cardRevealObserver.observe(card));

  // ----------- GALLERY LIGHTBOX -----------
  const galleryImages = document.querySelectorAll('.gallery-grid img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.querySelector('.lightbox-close');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxCaption.textContent = img.dataset.caption || '';
      lightbox.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // ----------- FAQ ACCORDION -----------
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      const arrow = q.querySelector('.arrow');

      q.classList.toggle('active');

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.opacity = '0';
        answer.style.transform = 'translateY(-10px)';
        arrow.style.transform = 'rotate(0deg)';
      } else {
        // Close other answers
        questions.forEach(other => {
          if (other !== q) {
            other.nextElementSibling.style.maxHeight = null;
            other.nextElementSibling.style.opacity = '0';
            other.nextElementSibling.style.transform = 'translateY(-10px)';
            other.querySelector('.arrow').style.transform = 'rotate(0deg)';
            other.classList.remove('active');
          }
        });

        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.opacity = '1';
        answer.style.transform = 'translateY(0)';
        arrow.style.transform = 'rotate(90deg)';
      }
    });
  });

  // FAQ reveal on scroll
  const faqItems = document.querySelectorAll('.faq-item');
  const faqObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          faqObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  faqItems.forEach(item => faqObserver.observe(item));

  // ----------- APPOINTMENT FORM -----------
  const appointmentForm = document.getElementById('appointmentForm');

  appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const formData = {
      name: document.getElementById('appName').value,
      email: document.getElementById('appEmail').value,
      phone: document.getElementById('appPhone').value,
      date: document.getElementById('appDate').value,
      department: document.getElementById('appDepartment').value,
      doctor: document.getElementById('appDoctor').value,
      message: document.getElementById('appMessage').value
    };

    // Show success toast
    showToast('Appointment booked successfully! We will contact you soon.', 'success');

    // Reset form
    appointmentForm.reset();
  });

  // ----------- CONTACT FORM -----------
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const formData = {
      name: document.getElementById('contactName').value,
      email: document.getElementById('contactEmail').value,
      subject: document.getElementById('contactSubject').value,
      message: document.getElementById('contactMessage').value
    };

    // Show success toast
    showToast('Message sent successfully! We will get back to you soon.', 'success');

    // Reset form
    contactForm.reset();
  });

  // ----------- NEWSLETTER FORM -----------
  const newsletterForm = document.getElementById('newsletterForm');

  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('newsletterEmail').value;

    // Show success toast
    showToast('Thank you for subscribing to our newsletter!', 'success');

    // Reset form
    newsletterForm.reset();
  });

  // ----------- TOAST NOTIFICATION -----------
  function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    const toastIcon = toast.querySelector('.toast-icon');

    toastMessage.textContent = message;

    // Set icon based on type
    if (type === 'success') {
      toastIcon.innerHTML = '✓';
      toastIcon.style.background = '#2ecc71';
    } else if (type === 'error') {
      toastIcon.innerHTML = '✕';
      toastIcon.style.background = '#e74c3c';
    } else {
      toastIcon.innerHTML = 'ℹ';
      toastIcon.style.background = '#3498db';
    }

    // Show toast
    toast.classList.add('show');

    // Hide after 4 seconds
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  // ----------- BACK TO TOP BUTTON -----------
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTop.style.display = 'block';
      backToTop.style.opacity = '1';
    } else {
      backToTop.style.opacity = '0';
      setTimeout(() => {
        if (window.scrollY < 200) {
          backToTop.style.display = 'none';
        }
      }, 300);
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ----------- COOKIE CONSENT -----------
  const cookieBanner = document.getElementById('cookieBanner');
  const acceptCookies = document.getElementById('acceptCookies');
  const declineCookies = document.getElementById('declineCookies');

  // Check if user already made a choice
  if (!localStorage.getItem('cookieConsent')) {
    setTimeout(() => {
      cookieBanner.classList.add('show');
    }, 2000);
  }

  acceptCookies.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieBanner.classList.remove('show');
    showToast('Cookie preferences saved!', 'success');
  });

  declineCookies.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    cookieBanner.classList.remove('show');
    showToast('Cookie preferences saved!', 'info');
  });

  // ----------- ACTIVE NAVBAR LINK ON SCROLL -----------
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // ----------- FORM VALIDATION -----------
  const phoneInput = document.getElementById('appPhone');
  const emailInputs = document.querySelectorAll('input[type="email"]');

  phoneInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9+]/g, '');
  });

  emailInputs.forEach(input => {
    input.addEventListener('blur', () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (input.value && !emailRegex.test(input.value)) {
        input.style.borderColor = '#e74c3c';
        showToast('Please enter a valid email address', 'error');
      } else {
        input.style.borderColor = '#ccc';
      }
    });
  });

  // ----------- PRICING PLAN HIGHLIGHT -----------
  const planCards = document.querySelectorAll('.plan');

  planCards.forEach(plan => {
    plan.addEventListener('click', () => {
      planCards.forEach(p => p.classList.remove('active'));
      plan.classList.add('active');
    });
  });

  // ----------- GALLERY IMAGE HOVER EFFECT -----------
  galleryImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.05)';
      img.style.transition = 'transform 0.3s ease';
    });

    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });

  // ----------- DOCTOR CARD MODAL (Optional Enhancement) -----------
  const doctorCards = document.querySelectorAll('.doctor-card');

  doctorCards.forEach(card => {
    card.addEventListener('click', () => {
      const doctorName = card.querySelector('h3').textContent;
      const doctorSpecialty = card.querySelector('p').textContent;
      showToast(`Dr. ${doctorName} - ${doctorSpecialty}. Click to view profile.`, 'info');
    });
  });

  // ----------- DARK/LIGHT MODE TOGGLE -----------
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('i');

  // Check for saved theme preference
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      showToast('Dark mode enabled', 'info');
    } else {
      localStorage.setItem('theme', 'light');
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
      showToast('Light mode enabled', 'info');
    }
  });

  // ----------- PATIENT PORTAL MODAL -----------
  const patientPortalBtn = document.getElementById('patientPortalBtn');
  const patientPortalModal = document.getElementById('patientPortalModal');
  const modalClose = patientPortalModal.querySelector('.modal-close');
  const patientPortalForm = document.getElementById('patientPortalForm');

  patientPortalBtn.addEventListener('click', () => {
    patientPortalModal.classList.add('show');
    document.body.style.overflow = 'hidden';
  });

  modalClose.addEventListener('click', () => {
    patientPortalModal.classList.remove('show');
    document.body.style.overflow = 'auto';
  });

  patientPortalModal.addEventListener('click', (e) => {
    if (e.target === patientPortalModal) {
      patientPortalModal.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  });

  patientPortalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Login functionality would be implemented here!', 'info');
    patientPortalModal.classList.remove('show');
    document.body.style.overflow = 'auto';
  });

  // ----------- PERFORMANCE: Debounce scroll events -----------
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Apply debounce to scroll-heavy operations if needed
  const debouncedScrollHandler = debounce(() => {
    // Any additional scroll-based operations
  }, 100);

  window.addEventListener('scroll', debouncedScrollHandler);

  // ----------- INITIALIZE -----------
  console.log('Medico Healthcare Website Initialized Successfully!');

});