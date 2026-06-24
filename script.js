/**
 * ZRN Solar - Interactive Navigation & Scroll Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('mainHeader');
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // 1. Shrink header background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Toggle mobile navigation drawer
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });
  }

  // 3. Close mobile nav when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menuToggle && navMenu) {
        menuToggle.classList.remove('open');
        navMenu.classList.remove('open');
      }
    });
  });

  // 4. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other FAQ items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherAnswer) {
            otherAnswer.style.maxHeight = null;
          }
          const otherIcon = otherItem.querySelector('.faq-toggle i');
          if (otherIcon) {
            otherIcon.className = 'fa-solid fa-plus';
          }
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
          item.classList.add('active');
          const answer = item.querySelector('.faq-answer');
          if (answer) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
          }
          const icon = item.querySelector('.faq-toggle i');
          if (icon) {
            icon.className = 'fa-solid fa-minus';
          }
        }
      });
    }
  });
});
