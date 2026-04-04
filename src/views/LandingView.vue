<template>
  <div class="landing">
    <header class="landing-header">
      <div class="header-content">
        <div class="logo">
          <img src="/principal.webp" alt="EduLingua" class="logo-img" />
        </div>
        <nav class="header-nav">
          <a href="#about">¿Qué es?</a>
          <a href="#features">Beneficios</a>
          <a href="#how-it-works">Cómo funciona</a>
          <a href="#testimonials">Testimonios</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div class="header-actions">
          <router-link to="/login?tab=login" class="btn btn-ghost">Iniciar Sesión</router-link>
          <router-link to="/login?tab=register" class="btn btn-primary">Crear Cuenta</router-link>
        </div>
      </div>
    </header>

    <section class="hero" ref="heroSection">
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-pattern"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title" ref="heroTitle">
          <span class="title-line">Domina un nuevo idioma</span>
          <span class="title-line accent">sin salir de casa</span>
        </h1>
        <p class="hero-subtitle" ref="heroSubtitle">
          La plataforma que conecta estudiantes con docentes nativos de inglés y español. 
          Clases personalizadas, materiales exclusivos y seguimiento detallado de tu progreso.
        </p>
        <div class="hero-cta" ref="heroCta">
          <router-link to="/login?tab=register&role=student" class="btn btn-primary btn-lg">
            <span>Soy Estudiante</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </router-link>
          <router-link to="/login?tab=register&role=teacher" class="btn btn-outline btn-lg">
            <span>Soy Docente</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </router-link>
        </div>
        <div class="hero-stats" ref="heroStats">
          <div class="stat">
            <span class="stat-number">500+</span>
            <span class="stat-label">Estudiantes</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-number">50+</span>
            <span class="stat-label">Docentes</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-number">10k+</span>
            <span class="stat-label">Clases dictadas</span>
          </div>
        </div>
      </div>
      <div class="scroll-indicator" ref="scrollIndicator">
        <span>Scroll</span>
        <div class="scroll-arrow"></div>
      </div>
    </section>

    <section id="about" class="about" ref="aboutSection">
      <div class="container">
        <div class="section-header" ref="aboutHeader">
          <span class="section-tag">¿Qué es EduLingua?</span>
          <h2 class="section-title">Tu aula virtual de idiomas</h2>
        </div>
        <div class="about-content">
          <div class="about-text" ref="aboutText">
            <p>
              EduLingua es una <strong>plataforma educativa</strong> diseñada para 
              conectar estudiantes que quieren aprender un nuevo idioma con 
              <strong>docentes nativos especializados</strong>.
            </p>
            <p>
              Ya sea que estés empezando desde cero o busques perfeccionar tu inglés 
              o español, aquí encontrarás un ecosistema completo para alcanzar tus 
              objetivos lingüísticos.
            </p>
            <p>
              <strong>Sin contratos complejos.</strong> <strong>Sin mensualidades excesivas.</strong> 
              Solo vos, tu docente y el camino hacia la fluidez.
            </p>
          </div>
          <div class="about-visual" ref="aboutVisual">
            <div class="about-card glass">
              <div class="about-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <h3>Clases Online en Vivo</h3>
              <p>Conecta con tu docente desde cualquier lugar mediante videollamada.</p>
            </div>
            <div class="about-card glass">
              <div class="about-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              </div>
              <h3>Materiales Exclusivos</h3>
              <p>Accede a guías, ejercicios y exámenes diseñados por profesionales.</p>
            </div>
            <div class="about-card glass">
              <div class="about-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3>Seguimiento Personalizado</h3>
              <p>Consulta tu progreso, notas y asistencia en cualquier momento.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="features" ref="featuresSection">
      <div class="container">
        <div class="section-header" ref="featuresHeader">
          <span class="section-tag">Beneficios</span>
          <h2 class="section-title">¿Por qué elegir EduLingua?</h2>
        </div>
        <div class="features-grid">
          <div class="feature-card" v-for="(feature, index) in features" :key="index" ref="featureCards">
            <div class="feature-icon">
              <component :is="feature.icon" />
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="how-it-works" class="how-it-works" ref="howItWorksSection">
      <div class="container">
        <div class="section-header" ref="hiwHeader">
          <span class="section-tag">Cómo funciona</span>
          <h2 class="section-title">En 3 simples pasos</h2>
        </div>
        <div class="steps" ref="stepsContainer">
          <div class="step" v-for="(step, index) in steps" :key="index">
            <div class="step-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
            <div class="step-arrow" v-if="index < steps.length - 1"></div>
          </div>
        </div>
      </div>
    </section>

    <section id="testimonials" class="testimonials" ref="testimonialsSection">
      <div class="container">
        <div class="section-header" ref="testimonialsHeader">
          <span class="section-tag">Testimonios</span>
          <h2 class="section-title">Lo que dicen nuestros usuarios</h2>
        </div>
        <div class="testimonials-slider" ref="testimonialsSlider">
          <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-quote">"</div>
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <div class="testimonial-author">
              <div class="author-avatar">{{ testimonial.name.charAt(0) }}</div>
              <div class="author-info">
                <span class="author-name">{{ testimonial.name }}</span>
                <span class="author-role">{{ testimonial.role }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" class="faq" ref="faqSection">
      <div class="container">
        <div class="section-header" ref="faqHeader">
          <span class="section-tag">Preguntas Frecuentes</span>
          <h2 class="section-title">Resolvemos tus dudas</h2>
        </div>
        <div class="faq-list" ref="faqList">
          <div 
            class="faq-item" 
            v-for="(faq, index) in faqs" 
            :key="index"
            :class="{ active: openFaq === index }"
            @click="toggleFaq(index)"
          >
            <div class="faq-question">
              <span>{{ faq.question }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
            </div>
            <div class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-final" ref="ctaFinalSection">
      <div class="container">
        <div class="cta-content">
          <h2>¿Listo para empezar tu viaje lingüístico?</h2>
          <p>Únete a miles de estudiantes que ya están aprendiendo con nosotros.</p>
          <div class="cta-buttons">
            <router-link to="/login?tab=register&role=student" class="btn btn-primary btn-lg">
              Registrarme como Estudiante
            </router-link>
            <router-link to="/login?tab=register&role=teacher" class="btn btn-outline btn-lg">
              Registrarme como Docente
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <footer class="landing-footer" ref="footerSection">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <img src="/principal.webp" alt="EduLingua" class="footer-logo" />
            <p>Conectando idiomas, creando oportunidades.</p>
          </div>
          <div class="footer-links">
            <div class="footer-col">
              <h4>Plataforma</h4>
              <a href="#about">¿Qué es?</a>
              <a href="#features">Beneficios</a>
              <a href="#how-it-works">Cómo funciona</a>
            </div>
            <div class="footer-col">
              <h4>Soporte</h4>
              <a href="#faq">FAQ</a>
              <a href="#">Contacto</a>
              <a href="#">Términos</a>
            </div>
            <div class="footer-col">
              <h4>Legal</h4>
              <a href="#">Privacidad</a>
              <a href="#">Condiciones</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 EduLingua. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const route = useRoute()
const openFaq = ref(null)

const features = [
  {
    title: 'Flexibilidad Horaria',
    description: 'Agenda clases cuando quieras. Tu tiempo, tus reglas.',
    icon: 'IconClock'
  },
  {
    title: 'Docentes Nativos',
    description: 'Aprende con profesionales que dominan el idioma.',
    icon: 'IconUsers'
  },
  {
    title: 'Materiales Digitales',
    description: 'Accede a recursos exclusivos 24/7 desde cualquier dispositivo.',
    icon: 'IconBook'
  },
  {
    title: 'Seguimiento Real',
    description: 'Mira tu progreso, notas y asistencia en tiempo real.',
    icon: 'IconChart'
  }
]

const steps = [
  {
    title: 'Crea tu cuenta',
    description: 'Regístrate en segundos eligiendo si sos estudiante o docente.'
  },
  {
    title: 'Elige tu plan',
    description: 'Selecciona la modalidad de clases que mejor se adapte a vos.'
  },
  {
    title: 'Empieza a aprender',
    description: 'Conecta con tu docente y comienza tu camino hacia la fluidez.'
  }
]

const testimonials = [
  {
    text: 'Nunca había aprendido inglés tan rápido. Mi docente es increíble y los materiales me ayudan mucho a practicar.',
    name: 'María González',
    role: 'Estudiante de Inglés'
  },
  {
    text: 'Como docente, tener todo centralizado (materiales, notas, asistencia) me ahorra horas de trabajo.',
    name: 'Carlos Rodríguez',
    role: 'Docente de Español'
  },
  {
    text: 'La plataforma es muy intuitiva. Mis hijos aprenden inglés desde casa con profes native.',
    name: 'Laura Fernández',
    role: 'Madre de estudiantes'
  }
]

const faqs = [
  {
    question: '¿Cuánto cuesta el servicio?',
    answer: 'Contamos con planes flexibles que se adaptan a diferentes presupuestos. Puedes ver los detalles al registrarte.'
  },
  {
    question: '¿Necesito algún software especial?',
    answer: 'Solo necesitas un navegador web y conexión a internet. Las clases funcionan directamente en tu navegador.'
  },
  {
    question: '¿Puedo cambiar de docente?',
    answer: 'Sí, si no te sentís cómodo con tu docente, puedes solicitar un cambio sin costo adicional.'
  },
  {
    question: '¿Las clases quedan grabadas?',
    answer: 'Sí, tienes acceso a un resumen de cada clase y a los materiales utilizados durante la sesión.'
  }
]

function toggleFaq(index) {
  openFaq.value = openFaq.value === index ? null : index
}

let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    tl.from('.hero-title .title-line', {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2
    })
    .from('.hero-subtitle', {
      y: 30,
      opacity: 0,
      duration: 0.8
    }, '-=0.5')
    .from('.hero-cta', {
      y: 30,
      opacity: 0,
      duration: 0.8
    }, '-=0.5')
    .from('.hero-stats', {
      y: 30,
      opacity: 0,
      duration: 0.8
    }, '-=0.5')
    .from('.scroll-indicator', {
      y: 20,
      opacity: 0,
      duration: 0.6
    }, '-=0.3')

    gsap.from('.section-header', {
      scrollTrigger: {
        trigger: '.section-header',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 40,
      opacity: 0,
      duration: 0.8
    })

    gsap.from('.about-text', {
      scrollTrigger: {
        trigger: '.about-text',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      x: -60,
      opacity: 0,
      duration: 1
    })

    gsap.from('.about-card', {
      scrollTrigger: {
        trigger: '.about-visual',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    })

    gsap.from('.feature-card', {
      scrollTrigger: {
        trigger: '.features-grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15
    })

    gsap.from('.step', {
      scrollTrigger: {
        trigger: '.steps',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      x: -60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.25
    })

    gsap.from('.testimonial-card', {
      scrollTrigger: {
        trigger: '.testimonials-slider',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    })

    gsap.from('.faq-item', {
      scrollTrigger: {
        trigger: '.faq-list',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1
    })

    gsap.from('.cta-content', {
      scrollTrigger: {
        trigger: '.cta-final',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 60,
      opacity: 0,
      duration: 1
    })
  })
})

onUnmounted(() => {
  ctx && ctx.revert()
})
</script>

<style scoped>
.landing {
  min-height: 100vh;
  background: var(--background);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Header */
.landing-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-img {
  height: 40px;
  width: auto;
}

.header-nav {
  display: flex;
  gap: 32px;
}

.header-nav a {
  font-size: 0.95rem;
  color: var(--text-secondary);
  font-weight: 500;
  transition: color 0.2s;
}

.header-nav a:hover {
  color: var(--primary);
}

.header-actions {
  display: flex;
  gap: 12px;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(30, 64, 175, 0.3);
}

.btn-outline {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}

.btn-outline:hover {
  background: var(--primary);
  color: white;
}

.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
}

.btn-ghost:hover {
  color: var(--primary);
}

.btn-lg {
  padding: 16px 32px;
  font-size: 1.1rem;
}

/* Hero */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 120px 24px 80px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  opacity: 0.95;
}

.hero-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 900px;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  color: white;
  margin-bottom: 24px;
  line-height: 1.1;
}

.title-line {
  display: block;
}

.title-line.accent {
  color: var(--accent);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 700px;
  margin: 0 auto 40px;
  line-height: 1.7;
}

.hero-cta {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 60px;
}

.hero-cta .btn {
  min-width: 200px;
  justify-content: center;
}

.hero-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.scroll-arrow {
  width: 24px;
  height: 24px;
  border-right: 2px solid rgba(255, 255, 255, 0.6);
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  transform: rotate(45deg);
  animation: scrollBounce 2s infinite;
}

@keyframes scrollBounce {
  0%, 100% { transform: rotate(45deg) translateY(0); }
  50% { transform: rotate(45deg) translateY(8px); }
}

/* Sections Common */
.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-tag {
  display: inline-block;
  padding: 8px 16px;
  background: rgba(30, 64, 175, 0.1);
  color: var(--primary);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
}

.section-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: var(--secondary);
}

/* About */
.about {
  padding: 100px 0;
  background: var(--surface);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.about-text p {
  margin-bottom: 20px;
}

.about-text strong {
  color: var(--primary);
  font-weight: 600;
}

.about-visual {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-card {
  padding: 24px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.about-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.about-card-icon {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 16px;
}

.about-card h3 {
  font-size: 1.1rem;
  color: var(--secondary);
  margin-bottom: 8px;
}

.about-card p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0;
}

/* Features */
.features {
  padding: 100px 0;
  background: var(--background);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.feature-card {
  padding: 32px;
  background: var(--surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary);
}

.feature-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.feature-icon svg {
  color: white;
}

.feature-card h3 {
  font-size: 1.2rem;
  color: var(--secondary);
  margin-bottom: 12px;
}

.feature-card p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
}

/* How It Works */
.how-it-works {
  padding: 100px 0;
  background: var(--surface);
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 700px;
  margin: 0 auto;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  position: relative;
}

.step-number {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
}

.step-content h3 {
  font-size: 1.3rem;
  color: var(--secondary);
  margin-bottom: 8px;
}

.step-content p {
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
}

/* Testimonials */
.testimonials {
  padding: 100px 0;
  background: linear-gradient(180deg, var(--secondary) 0%, #0f172a 100%);
}

.testimonials .section-title {
  color: white;
}

.testimonials .section-tag {
  background: rgba(245, 158, 11, 0.2);
  color: var(--accent);
}

.testimonials-slider {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  padding: 32px;
  transition: all 0.3s;
}

.testimonial-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-4px);
}

.testimonial-quote {
  font-size: 4rem;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 16px;
}

.testimonial-text {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 24px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 48px;
  height: 48px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 600;
}

.author-name {
  display: block;
  font-weight: 600;
  color: white;
}

.author-role {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
}

/* FAQ */
.faq {
  padding: 100px 0;
  background: var(--surface);
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: all 0.3s;
}

.faq-item:hover {
  border-color: var(--primary);
}

.faq-item.active {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  cursor: pointer;
  font-weight: 600;
  color: var(--secondary);
}

.faq-question svg {
  transition: transform 0.3s;
  flex-shrink: 0;
}

.faq-item.active .faq-question svg {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.faq-item.active .faq-answer {
  max-height: 200px;
}

.faq-answer p {
  padding: 0 24px 20px;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* CTA Final */
.cta-final {
  padding: 100px 0;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: white;
  margin-bottom: 16px;
}

.cta-content p {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 32px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-buttons .btn-outline {
  border-color: white;
  color: white;
}

.cta-buttons .btn-outline:hover {
  background: white;
  color: var(--primary);
}

/* Footer */
.landing-footer {
  background: #0f172a;
  padding: 60px 0 24px;
  color: rgba(255, 255, 255, 0.7);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  flex-wrap: wrap;
}

.footer-brand {
  max-width: 300px;
}

.footer-logo {
  height: 36px;
  margin-bottom: 16px;
}

.footer-brand p {
  font-size: 0.95rem;
  line-height: 1.6;
}

.footer-links {
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
}

.footer-col h4 {
  color: white;
  font-size: 1rem;
  margin-bottom: 16px;
}

.footer-col a {
  display: block;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 10px;
  transition: color 0.2s;
}

.footer-col a:hover {
  color: var(--accent);
}

.footer-bottom {
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.footer-bottom p {
  font-size: 0.85rem;
}

/* Responsive */
@media (max-width: 900px) {
  .header-nav {
    display: none;
  }
  
  .about-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .header-actions {
    display: none;
  }
  
  .hero-cta {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 20px;
  }
  
  .stat-divider {
    width: 40px;
    height: 1px;
  }
  
  .footer-content {
    flex-direction: column;
  }
  
  .footer-links {
    gap: 32px;
  }
}
</style>