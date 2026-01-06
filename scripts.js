document.addEventListener('DOMContentLoaded', () => {

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
});


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
       // cards

const cards = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));


       // emergancy

document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.5 
    }
  );

  fadeElements.forEach(el => observer.observe(el));
});


//  hospitaloutside

const animatedSections = document.querySelectorAll(".slide-right");

  const scrollObserver = new IntersectionObserver(
    (observerEntries) => {
      observerEntries.forEach((item) => {
        if (item.isIntersecting) {
          item.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  animatedSections.forEach((section) =>
    scrollObserver.observe(section)
  );

   const slideElements = document.querySelectorAll(
    ".slide-right, .slide-left"
  );

  const slideObserver = new IntersectionObserver(
    (visibleItems) => {
      visibleItems.forEach((element) => {
        if (element.isIntersecting) {
          element.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  slideElements.forEach((item) =>
    slideObserver.observe(item)
  );

        // abouts

  const revealElements = document.querySelectorAll('.line-anim, .text-anim');

  const sectionRevealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  revealElements.forEach(el => sectionRevealObserver.observe(el));



      //  numbercount

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

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

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting(entry.target);
        obs.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.3   
  });

  counters.forEach(counter => observer.observe(counter));
});



          // emergencyBox

 const emergencyBox = document.querySelector('.emergency-content');

  const boxObserver = new IntersectionObserver(entries => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('show');
       }
     });
     }, { threshold: 0.3 });

  boxObserver.observe(emergencyBox);


              // lab 

              const slideRightItems = document.querySelectorAll(".slide-right");

const slideRightObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

slideRightItems.forEach((item) => {
  slideRightObserver.observe(item);
});


 const aboutSection = document.querySelector('.about-section');

  const aboutObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutSection.classList.add('about-show');
        }
      });
    },
    {
      threshold: 0.3
    }
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

   const cardObserver = new IntersectionObserver(
    entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('show');
          }, index * 200);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.about-item').forEach(item => {
    cardObserver.observe(item); });


       // service


document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".feature-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 120); // stagger delay
        }
      });
    },
    {
      threshold: 0.25
    }
  );

  items.forEach(item => observer.observe(item));
});



 


             // department


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

  const menuItems = document.querySelectorAll(".dept-menu li");
  const title = document.getElementById("deptTitle");
  const intro = document.getElementById("deptIntro");
  const desc = document.getElementById("deptDesc");
  const img = document.getElementById("deptImg");

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      menuItems.forEach(li => li.classList.remove("active"));
      item.classList.add("active");

      const data = departmentData[item.dataset.dept];
      title.textContent = data.title;
      intro.textContent = data.intro;
      desc.textContent = data.desc;
      img.src = data.img;
    });
  });

  menuItems.forEach(item => {
  item.addEventListener("click", () => {

    
    menuItems.forEach(li => li.classList.remove("active"));
    item.classList.add("active");

    const data = departmentData[item.dataset.dept];

   
    title.classList.remove("animate-content");
    intro.classList.remove("animate-content");
    desc.classList.remove("animate-content");
    img.classList.remove("animate-image");

    void title.offsetWidth;

    title.textContent = data.title;
    intro.textContent = data.intro;
    desc.textContent = data.desc;
    img.src = data.img;

    title.classList.add("animate-content");
    intro.classList.add("animate-content");
    desc.classList.add("animate-content");
    img.classList.add("animate-image");
  });
});


           // Testimonials


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


const track = document.querySelector(".testimonial-track");
const dots = document.querySelectorAll(".dot");
const testimonialCards = document.querySelectorAll(".testimonial-card");

const cardsPerView = 3;
const totalSlides = testimonialCards.length - cardsPerView + 1;

let currentIndex = 0;

function showSlide(i) {
  const moveX = (100 / cardsPerView) * i;
  track.style.transform = `translateX(-${moveX}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[i].classList.add("active");
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});

/* AUTO SLIDE */
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}, 4000);




  /* Title & subtitle animation */
 /* Text elements animation */
const revealTexts = document.querySelectorAll(".scroll-animate");

const textRevealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        textRevealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

revealTexts.forEach(item => textRevealObserver.observe(item));


/* Doctor cards animation (one by one) */
const doctorCardList = document.querySelectorAll(".doctor-card");

const cardRevealObserver = new IntersectionObserver(
  entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 200);
        cardRevealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

doctorCardList.forEach(card => cardRevealObserver.observe(card));



  // gallery

  const sliderItems = document.querySelectorAll(".slide"); 
  const indicatorDots = document.querySelectorAll(".dots span"); 

let activeIndex = 2; function updateActiveSlide() { 
  sliderItems.forEach((item, index) => { item.classList.toggle("active", index === activeIndex);

 });

 indicatorDots.forEach((dot, index) => { 
  dot.classList.toggle("active", index === activeIndex);

  });

 } indicatorDots.forEach((dot, index) => { 
  dot.addEventListener("click", () => { activeIndex = index; updateActiveSlide(); 

  });
 });
 
  updateActiveSlide();

  //  questions

   const questions = document.querySelectorAll(".faq-question");

  questions.forEach(q => {
    q.addEventListener("click", () => {
      const answer = q.nextElementSibling;
      const arrow = q.querySelector(".arrow");

      q.classList.toggle("active");

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.opacity = "0";
        answer.style.transform = "translateY(-10px)";
        arrow.style.transform = "rotate(0deg)";
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.opacity = "1";
        answer.style.transform = "translateY(0)";
        arrow.style.transform = "rotate(90deg)";
      }
    });
  });
  document.querySelector(".faq-question").click();
questions.forEach(q => {
  q.addEventListener("click", () => {
    questions.forEach(other => {
      if (other !== q) {
        other.nextElementSibling.style.maxHeight = null;
        other.querySelector(".arrow").style.transform = "rotate(0deg)";
        other.classList.remove("active");
      }
    });
  });
});

const faqItems = document.querySelectorAll(".faq-item");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    faqItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;

      if (itemTop < windowHeight - 100) {
        item.classList.add("show");
      }
    });
  };

  const faqCardsList = document.querySelectorAll(".faq-item");

  const revealOnView = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          revealOnView.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  faqCardsList.forEach(item => revealOnView.observe(item));

      // contct
  
const nxContactMotionNodes = document.querySelectorAll('.animate');

const nxContactScrollRevealEngine = () => {
  const nxRevealPoint = window.innerHeight * 0.85;

  nxContactMotionNodes.forEach(node => {
    const nxNodeTop = node.getBoundingClientRect().top;

    if (nxNodeTop < nxRevealPoint) {
      node.classList.add('show');
    }
  });
};

window.addEventListener('scroll', nxContactScrollRevealEngine);
nxContactScrollRevealEngine();

const nxHeaderAnimNodes = document.querySelectorAll('.nx-anim');

  const nxHeaderRevealEngine = () => {
    const nxHeaderTrigger = window.innerHeight * 0.85;

    nxHeaderAnimNodes.forEach(el => {
      const nxTop = el.getBoundingClientRect().top;
      if (nxTop < nxHeaderTrigger) {
        el.classList.add('nx-show');
      }
    });
  };

  window.addEventListener('scroll', nxHeaderRevealEngine);
  nxHeaderRevealEngine();

  // arrow

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});


backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});