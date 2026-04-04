import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('../views/LandingView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/docente',
    component: () => import('../views/teacher/TeacherLayout.vue'),
    meta: { requiresAuth: true, role: 'teacher' },
    children: [
      { path: '', redirect: '/docente/alumnos' },
      { path: 'alumnos', name: 'TeacherStudents', component: () => import('../views/teacher/StudentsView.vue') },
      { path: 'materiales', name: 'TeacherMaterials', component: () => import('../views/teacher/MaterialsView.vue') },
      { path: 'examenes', name: 'TeacherExams', component: () => import('../views/teacher/ExamsView.vue') }
    ]
  },
  {
    path: '/alumno',
    component: () => import('../views/student/StudentLayout.vue'),
    meta: { requiresAuth: true, role: 'student' },
    children: [
      { path: '', redirect: '/alumno/inicio' },
      { path: 'inicio', name: 'StudentHome', component: () => import('../views/student/HomeView.vue') },
      { path: 'materiales', name: 'StudentMaterials', component: () => import('../views/student/MaterialsView.vue') },
      { path: 'notas', name: 'StudentGrades', component: () => import('../views/student/GradesView.vue') },
      { path: 'asistencia', name: 'StudentAttendance', component: () => import('../views/student/AttendanceView.vue') },
      { path: 'cuenta', name: 'StudentAccount', component: () => import('../views/student/AccountView.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next('/login')
  } else if (to.meta.role && auth.user?.role !== to.meta.role) {
    next(auth.user?.role === 'teacher' ? '/docente/alumnos' : '/alumno/inicio')
  } else {
    next()
  }
})

export default router
