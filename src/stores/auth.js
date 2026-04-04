import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('edulingua_user')) || null)

  const isAuthenticated = computed(() => !!user.value)

  const teachers = [
    { id: 1, name: 'María García', email: 'maria@edulingua.com', role: 'teacher', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Carlos López', email: 'carlos@edulingua.com', role: 'teacher', avatar: 'https://i.pravatar.cc/150?img=2' }
  ]

  const students = [
    { id: 1, name: 'Ana Martínez', email: 'ana@email.com', role: 'student', avatar: 'https://i.pravatar.cc/150?img=3', teacherId: 1 },
    { id: 2, name: 'Luis Pérez', email: 'luis@email.com', role: 'student', avatar: 'https://i.pravatar.cc/150?img=4', teacherId: 1 },
    { id: 3, name: 'Sofia Rodríguez', email: 'sofia@email.com', role: 'student', avatar: 'https://i.pravatar.cc/150?img=5', teacherId: 1 },
    { id: 4, name: 'Diego Sánchez', email: 'diego@email.com', role: 'student', avatar: 'https://i.pravatar.cc/150?img=6', teacherId: 1 },
    { id: 5, name: 'Carmen Fernández', email: 'carmen@email.com', role: 'student', avatar: 'https://i.pravatar.cc/150?img=7', teacherId: 1 },
    { id: 6, name: 'Pablo González', email: 'pablo@email.com', role: 'student', avatar: 'https://i.pravatar.cc/150?img=8', teacherId: 2 },
    { id: 7, name: 'Elena Torres', email: 'elena@email.com', role: 'student', avatar: 'https://i.pravatar.cc/150?img=9', teacherId: 2 },
    { id: 8, name: 'Miguel Ruiz', email: 'miguel@email.com', role: 'student', avatar: 'https://i.pravatar.cc/150?img=10', teacherId: 2 }
  ]

  function login(selectedUser) {
    user.value = selectedUser
    localStorage.setItem('edulingua_user', JSON.stringify(selectedUser))
  }

  function logout() {
    user.value = null
    localStorage.removeItem('edulingua_user')
  }

  function getTeacherStudents(teacherId) {
    return students.filter(s => s.teacherId === teacherId)
  }

  return {
    user,
    isAuthenticated,
    teachers,
    students,
    login,
    logout,
    getTeacherStudents
  }
})
