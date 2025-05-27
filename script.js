// Enhanced Portfolio JavaScript for Web-First Design

// Initialize Lucide icons
const lucide = window.lucide || {}
lucide.createIcons()

// Theme management
const themeToggle = document.getElementById("theme-toggle")
const body = document.getElementById("body")

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light"
if (currentTheme === "dark") {
  body.classList.add("dark")
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark")
  const theme = body.classList.contains("dark") ? "dark" : "light"
  localStorage.setItem("theme", theme)
})

// Enhanced mouse movement effect for web
let mouseX = 0
let mouseY = 0

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX
  mouseY = e.clientY

  const mouseGradient = document.getElementById("mouse-gradient")
  if (mouseGradient) {
    mouseGradient.style.background = `radial-gradient(1200px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.12), transparent 60%)`
  }
})

// Enhanced scroll progress bar
function updateScrollProgress() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrollProgress = Math.min((scrollTop / scrollHeight) * 100, 100)

  const progressBar = document.getElementById("scroll-progress")

  if (progressBar) {
    progressBar.style.width = scrollProgress + "%"

    // Enhanced glow based on scroll progress
    const glowIntensity = Math.min(scrollProgress / 8, 1.5)
    progressBar.style.filter = `drop-shadow(0 0 ${glowIntensity * 15}px rgba(59, 130, 246, ${glowIntensity * 0.9}))`
  }
}

// Enhanced section progress indicator
function updateSectionProgress() {
  const sections = document.querySelectorAll("section[id], header")
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const windowHeight = window.innerHeight

  let currentSection = null
  let maxVisibility = 0

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect()
    const sectionTop = rect.top + scrollTop
    const sectionHeight = rect.height

    // Calculate how much of the section is visible
    const visibleTop = Math.max(0, Math.min(windowHeight, rect.bottom))
    const visibleBottom = Math.max(0, Math.min(windowHeight, windowHeight - rect.top))
    const visibleHeight = Math.max(0, visibleTop - (windowHeight - visibleBottom))
    const visibility = visibleHeight / Math.min(sectionHeight, windowHeight)

    if (visibility > maxVisibility) {
      maxVisibility = visibility
      currentSection = section.id
    }
  })

  // Update navigation active states
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link")
  navLinks.forEach((link) => {
    const href = link.getAttribute("href")
    if (
      href === `#${currentSection}` ||
      (currentSection === undefined && href === "#home") ||
      (currentSection === "stats" && href === "#stats") ||
      (currentSection === "skills" && href === "#skills") ||
      (currentSection === "experience" && href === "#experience") ||
      (currentSection === "projects" && href === "#projects") ||
      (currentSection === "contact" && href === "#contact")
    ) {
      link.classList.add("active")
    } else {
      link.classList.remove("active")
    }
  })
}

// Enhanced particle creation for web
function createParticles() {
  const particlesContainer = document.getElementById("particles")
  const particleCount = 30 // Increased for web

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div")
    particle.className = "absolute animate-float opacity-20 dark:opacity-15"
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"
    particle.style.animationDelay = Math.random() * 8 + "s"
    particle.style.animationDuration = 6 + Math.random() * 6 + "s"

    const innerDiv = document.createElement("div")
    innerDiv.className = "w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm"
    particle.appendChild(innerDiv)

    particlesContainer.appendChild(particle)
  }
}

// Add this new stats data structure before the renderSkills function:

const statsData = [
  { label: "Years Experience", value: "4+", icon: "calendar", color: "text-blue-400" },
  { label: "Projects Completed", value: "15+", icon: "briefcase", color: "text-emerald-400" },
  { label: "Technologies", value: "10+", icon: "code", color: "text-purple-400" },
  { label: "Coffee Cups", value: "1000+", icon: "coffee", color: "text-orange-400" },
]

// Enhanced skills data
const skillsData = [
  {
    title: "Backend Technologies",
    icon: "server",
    color: "blue",
    skills: ["ASP.NET", "ASP.NET Core", "LINQ", "Entity Framework", "Entity Framework Core"],
  },
  {
    title: "Frontend Technologies",
    icon: "code",
    color: "green",
    skills: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
  },
  {
    title: "Database",
    icon: "database",
    color: "purple",
    skills: ["MS SQL", "MySQL", "Store Procedures", "Views", "Triggers", "Functions"],
  },
  {
    title: "Development Practices",
    icon: "target",
    color: "orange",
    skills: ["SOLID Design Principles", "Software Design Patterns", "MVC", "Repository Pattern", "Singleton Pattern"],
  },
  {
    title: "Version Control & Tools",
    icon: "github",
    color: "red",
    skills: ["SVN","Git", "Trello"],
  },
  {
    title: "Methodologies",
    icon: "users",
    color: "cyan",
    skills: ["Agile/Scrum", "Waterfall"],
  },
  {
    title: "Server & Deployment",
    icon: "server",
    color: "indigo",
    skills: ["Microsoft Windows Server", "IIS", "AWS S3 Storage"],
  },
  {
    title: "Other Skills",
    icon: "sparkles",
    color: "pink",
    skills: ["Restful Web API", "RDLC Report", "Crystal Report", "iTEXT Sharp", "Windows Services/Scheduler"],
  },
]

// Projects data
const projectsData = [
  {
    name: "Learning Management System (LMS)",
    period: "2023 - Current",
    description:
      "Developed a training platform for the sales force, enabling employees to complete assigned courses within a defined timeline, take exams, and automatically generate certificates. The platform also includes additional functionalities.",
    technologies: [
      "ASP.NET Core 8.0",
      "AWS S3 Storage",
      "MSSQL",
      "Entity Framework Core 8.0",
      "LINQ",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
    ],
    status: "Active",
    type: "Enterprise",
    gradient: "from-emerald-600 to-teal-600",
    icon: "🎓",
  },
  {
    name: "FinCoachBD",
    period: "2022 - 2023",
    description:
      "Apply Instantly for Loan, SME Loan & Credit Card from Anywhere to Your Desired Bangladeshi Bank Anytime.",
    technologies: [
      "ASP.NET Core 5.0",
      "MySQL",
      "Entity Framework Core 5.0",
      "LINQ",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
    ],
    status: "Completed",
    type: "FinTech",
    gradient: "from-yellow-600 to-orange-600",
    icon: "💰",
  },
  {
    name: "Acumen",
    period: "2021 - Current",
    description: "Enterprise Inventory Management System with advanced analytics and real-time tracking",
    technologies: ["ASP.NET", "SQL Server", "Entity Framework", "SignalR"],
    status: "Active",
    type: "Enterprise",
    gradient: "from-blue-600 to-purple-600",
    icon: "📊",
  },
  {
    name: "HRCap",
    period: "2021 - Current",
    description: "Complete HR Management Solution with payroll, attendance, and employee self-service",
    technologies: ["ASP.NET", "Web API", "SQL Server", "Angular"],
    status: "Active",
    type: "Web App",
    gradient: "from-green-600 to-blue-600",
    icon: "👥",
  },
  {
    name: "Sales Activity",
    period: "2023 - Current",
    description: "Mobile-first sales tracking application with real-time analytics and reporting",
    technologies: ["ASP.NET Core 8.0", "Web API", "EF Core", "React Native"],
    status: "Active",
    type: "Mobile App",
    gradient: "from-purple-600 to-pink-600",
    icon: "📱",
  },
  {
    name: "Expensya",
    period: "2022",
    description: "Smart expense management system with automated approval workflows",
    technologies: ["ASP.NET", "SQL Server", "Entity Framework", "Azure"],
    status: "Completed",
    type: "Web App",
    gradient: "from-orange-600 to-red-600",
    icon: "💼",
  },
]

function renderStats() {
  const statsContainer = document.getElementById("stats-grid")
  if (!statsContainer) return

  statsContainer.innerHTML = ""

  statsData.forEach((stat, index) => {
    const statCard = document.createElement("div")
    statCard.className = "group relative opacity-0 translate-y-10 transition-all duration-1000"
    statCard.style.animationDelay = `${index * 0.1}s`

    statCard.innerHTML = `
      <div class="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-75 transition duration-1000"></div>
      <div class="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-3xl p-10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-500 hover:scale-110 hover:rotate-2 cursor-pointer">
        <div class="text-center">
          <i data-lucide="${stat.icon}" class="h-16 w-16 mx-auto mb-6 ${stat.color} group-hover:scale-125 transition-transform duration-300"></i>
          <div class="text-lg text-gray-600 dark:text-gray-300 font-semibold mb-3">${stat.label}</div>
          <div class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">${stat.value}</div>
        </div>
      </div>
    `

    statsContainer.appendChild(statCard)

    // Animate in after a delay
    setTimeout(
      () => {
        statCard.style.opacity = "1"
        statCard.style.transform = "translateY(0)"
      },
      1000 + index * 100,
    )
  })
}

// Enhanced render skills function
function renderSkills() {
  const skillsGrid = document.getElementById("skills-grid")

  skillsData.forEach((skill, index) => {
    const skillCard = document.createElement("div")
    skillCard.className =
      "group bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-500 hover:scale-105 rounded-2xl"
    skillCard.style.animationDelay = `${index * 0.1}s`

    skillCard.innerHTML = `
            <div class="p-8">
                <div class="flex items-center mb-6">
                    <div class="text-${skill.color}-500 mr-4">
                        <i data-lucide="${skill.icon}" class="h-10 w-10"></i>
                    </div>
                    <h3 class="text-xl font-bold">${skill.title}</h3>
                </div>
                <div class="flex flex-wrap gap-3">
                    ${skill.skills
                      .map(
                        (tech) => `
                        <span class="text-sm bg-${skill.color}-100 dark:bg-${skill.color}-900/30 text-${skill.color}-700 dark:text-${skill.color}-300 hover:bg-${skill.color}-200 dark:hover:bg-${skill.color}-900/50 transition-colors px-3 py-2 rounded-lg font-medium">
                            ${tech}
                        </span>
                    `,
                      )
                      .join("")}
                </div>
            </div>
        `

    skillsGrid.appendChild(skillCard)
  })
}

// Enhanced render projects
function renderProjects() {
  const projectsGrid = document.getElementById("projects-grid")

  projectsData.forEach((project, index) => {
    const projectCard = document.createElement("div")
    projectCard.className =
      "group bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-500 hover:scale-105 overflow-hidden cursor-pointer rounded-2xl"
    projectCard.style.animationDelay = `${index * 0.1}s`

    projectCard.innerHTML = `
            <div class="h-3 bg-gradient-to-r ${project.gradient}"></div>
            <div class="p-8">
                <div class="flex justify-between items-start mb-6">
                    <div class="text-xl">${project.icon}</div>
                    <div class="flex gap-3">
                        <span class="px-4 py-2 text-sm rounded-full ${project.status === "Active" ? "bg-green-500 text-white animate-pulse" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"} font-semibold">
                            ${project.status}
                        </span>
                        <span class="px-4 py-2 text-sm rounded-full border border-white/20 text-gray-600 dark:text-gray-300 font-semibold">
                            ${project.type}
                        </span>
                    </div>
                </div>
                
                <h3 class="text-xl font-bold mb-4 group-hover:text-blue-500 transition-colors">${project.name}</h3>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">${project.description}</p>
                
                <div class="space-y-8">
                    <div>
                        <p class="text-lg font-bold text-gray-500 dark:text-gray-400 mb-4">Technologies</p>
                        <div class="flex flex-wrap gap-3">
                            ${project.technologies
                              .map(
                                (tech) => `
                                <span class="text-sm bg-white/20 dark:bg-gray-700/20 hover:bg-white/30 dark:hover:bg-gray-700/30 transition-colors px-3 py-2 rounded-lg font-medium">
                                    ${tech}
                                </span>
                            `,
                              )
                              .join("")}
                        </div>
                    </div>
                    
                    <div class="flex justify-between items-center">
                        <span class="text-lg text-gray-500 dark:text-gray-400 font-semibold">${project.period}</span>
                        <div class="flex gap-3">
                            <button class="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-500/20 px-4 py-2 rounded-lg text-lg font-medium">
                                <i data-lucide="eye" class="h-5 w-5 mr-2 inline"></i>View
                            </button>
                            <button class="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-purple-500/20 px-4 py-2 rounded-lg text-lg font-medium">
                                <i data-lucide="external-link" class="h-5 w-5 inline"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `

    projectsGrid.appendChild(projectCard)
  })
}

// Enhanced create contact sparkles
function createContactSparkles() {
  const sparklesContainer = document.getElementById("contact-sparkles")

  for (let i = 0; i < 15; i++) {
    const sparkle = document.createElement("div")
    sparkle.className = "absolute animate-float"
    sparkle.style.left = Math.random() * 100 + "%"
    sparkle.style.top = Math.random() * 100 + "%"
    sparkle.style.animationDelay = Math.random() * 5 + "s"

    sparkle.innerHTML = '<i data-lucide="sparkles" class="h-8 w-8"></i>'
    sparklesContainer.appendChild(sparkle)
  }
}

// Enhanced smooth scrolling
function setupSmoothScrolling() {
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link")

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Enhanced intersection observer
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements
  const elementsToObserve = document.querySelectorAll(".fade-in, #hero-content, #hero-visual")
  elementsToObserve.forEach((el) => observer.observe(el))
}

// Set current year in footer
function setCurrentYear() {
  const yearElement = document.getElementById("current-year")
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear()
  }
}

// Enhanced mobile menu functionality
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const mobileMenu = document.getElementById("mobile-menu")
const closeMobileMenu = document.getElementById("close-mobile-menu")
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

function openMobileMenu() {
  mobileMenu.classList.remove("opacity-0", "pointer-events-none")
  mobileMenu.querySelector(".w-80").classList.remove("translate-x-full")
}

function closeMobileMenuFunc() {
  mobileMenu.classList.add("opacity-0", "pointer-events-none")
  mobileMenu.querySelector(".w-80").classList.add("translate-x-full")
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", openMobileMenu)
}

if (closeMobileMenu) {
  closeMobileMenu.addEventListener("click", closeMobileMenuFunc)
}

// Close mobile menu when clicking on overlay
if (mobileMenu) {
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) {
      closeMobileMenuFunc()
    }
  })
}

// Close mobile menu when clicking on nav links
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenuFunc)
})

// Enhanced typing animation
//const typingTexts = [".NET Developer", "Software Engineer", "Full Stack Developer", "Problem Solver", "Code Architect"]
let currentTextIndex = 0
let currentCharIndex = 0
let isDeleting = false

function typeText() {
  const typingElement = document.getElementById("typing-text")
  if (!typingElement) return

  const currentText = typingTexts[currentTextIndex]

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, currentCharIndex - 1)
    currentCharIndex--
  } else {
    typingElement.textContent = currentText.substring(0, currentCharIndex + 1)
    currentCharIndex++
  }

  let typeSpeed = isDeleting ? 75 : 150

  if (!isDeleting && currentCharIndex === currentText.length) {
    typeSpeed = 3000 // Longer pause at end
    isDeleting = true
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false
    currentTextIndex = (currentTextIndex + 1) % typingTexts.length
    typeSpeed = 800 // Pause before starting new text
  }

  setTimeout(typeText, typeSpeed)
}

// Enhanced scroll progress initialization
function initializeScrollProgress() {
  let isScrolling = false

  function requestScrollUpdate() {
    if (!isScrolling) {
      requestAnimationFrame(() => {
        updateScrollProgress()
        updateSectionProgress()
        isScrolling = false
      })
      isScrolling = true
    }
  }

  window.addEventListener("scroll", requestScrollUpdate, { passive: true })
  window.addEventListener("resize", updateScrollProgress)

  // Initial call
  updateScrollProgress()
}

// Enhanced DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
  createParticles()
  renderStats()
  renderSkills()
  renderProjects()
  createContactSparkles()
  setupSmoothScrolling()
  setupScrollAnimations()
  setCurrentYear()
//  typeText()
  initializeScrollProgress()

  // Re-initialize Lucide icons after dynamic content is added
  setTimeout(() => {
    lucide.createIcons()
  }, 200)

  // Enhanced hero animations with staggered timing
  setTimeout(() => {
    const heroContent = document.getElementById("hero-content")

    if (heroContent) {
      heroContent.style.opacity = "1"
      heroContent.style.transform = "translateY(0)"
    }
  }, 800)
})
