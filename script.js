// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Mobile menu toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Active navigation link highlighting
const sections = document.querySelectorAll("section[id]")
const navLinks = document.querySelectorAll(".nav-link")

function highlightNavLink() {
  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
}

window.addEventListener("scroll", highlightNavLink)

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observe all fade-in elements
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el)
})

// Contact form handling
const contactForm = document.getElementById("contact-form")
contactForm.addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(this)
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Simple validation
  if (!name || !email || !message) {
    alert("Please fill in all fields.")
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.")
    return
  }

  // Simulate form submission
  const submitBtn = this.querySelector(".submit-btn")
  const originalText = submitBtn.textContent
  submitBtn.textContent = "Sending..."
  submitBtn.disabled = true

  // Simulate API call
  setTimeout(() => {
    alert("Thank you for your message! I'll get back to you soon.")
    this.reset()
    submitBtn.textContent = originalText
    submitBtn.disabled = false
  }, 2000)
})

// Add loading animation to project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px) scale(1.02)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)"
  })
})

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect when page loads
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const originalText = heroTitle.textContent
    typeWriter(heroTitle, originalText, 80)
  }
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero")
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

// Add smooth reveal animation for stats
function animateStats() {
  const stats = document.querySelectorAll(".stat-number")
  stats.forEach((stat) => {
    const target = Number.parseInt(stat.textContent)
    let current = 0
    const increment = target / 50

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      stat.textContent = Math.floor(current) + (stat.textContent.includes("+") ? "+" : "")
    }, 30)
  })
}

// Trigger stats animation when hero section is visible
const heroObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateStats()
        heroObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.5 },
)

const heroSection = document.querySelector(".hero")
if (heroSection) {
  heroObserver.observe(heroSection)
}

// Dark mode toggle functionality
const themeToggle = document.getElementById("theme-toggle")
const sunIcon = document.querySelector(".sun-icon")
const moonIcon = document.querySelector(".moon-icon")

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light"
document.documentElement.setAttribute("data-theme", currentTheme)

// Update icon based on current theme
function updateThemeIcon(theme) {
  if (theme === "dark") {
    sunIcon.style.display = "none"
    moonIcon.style.display = "block"
  } else {
    sunIcon.style.display = "block"
    moonIcon.style.display = "none"
  }
}

// Initialize theme icon
updateThemeIcon(currentTheme)

// Theme toggle event listener
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  updateThemeIcon(newTheme)
})
