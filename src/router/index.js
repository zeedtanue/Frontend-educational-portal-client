import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/app/Index'),
    children: [
      {
      path: '/',
      name: 'Login',
      component: () => import(/* webpackChunkName: "about" */ '../views/login/Login')
      },
      {
        path:'/admin/registration',
        name:'Registration',
        component:()=>import('../views/app/Admin/Registration')
      },
      {
        path:'/admin/home',
        name:'Admin-Home',
        component:()=>import('../views/app/Admin/Home/Home')
      },
      {
        path:'/admin/register-student',
        name:'Register-Student',
        component:()=>import(/*for register student*/'../views/app/Admin/Students/RegisterStudent')
      },
      //add a student to section
      {
        path:'/admin/add-to-section/:id',
        name:'Add-To-Section-Student',
        component:()=>import('../views/app/Admin/Students/AddToASection'),
        props:true
      },
      {
        path:'/admin/register-teacher',
        name:'Register-Teacher',
        component:()=>import('../views/app/Admin/Teacher/RegisterTeacher')
      },
      
      {
        path:'/admin/teachers',
        name:'All-Teacher',
        component:()=>import('../views/app/Admin/Teacher/AllTeachers')
      },
      {
        path:'/admin/teacherDetails/:id',
        name:'Teacher',
        component:()=>import('../views/app/Admin/Teacher/TeacherDetails'),
        props:true
      },
      {
        path:'/admin/teacher/:id',
        name:'Edit-Teacher',
        component:()=>import('../views/app/Admin/Teacher/EditTeacher'),
        props:true
      },
      {
        path:'/admin/students',
        name:'All-Student',
        component:()=>import('../views/app/Admin/Students/AllStudent')
      },
      {
        path:'/admin/studentDetails/:id',
        name:'Student',
        component:()=>import('../views/app/Admin/Students/StudentDetails'),
        props:true
      },
      {
        path:'/admin/register-parents',
        name:'Register-Parents',
        component:()=>import('../views/app/Admin/Parents/RegisterParents')
      },
      {
        path:'/admin/parents',
        name:'All-Parents',
        component:()=>import('../views/app/Admin/Parents/AllParents')
      },
      {
        path:'/admin/parentDetails/:id',
        name:'Parent',
        component:()=>import('../views/app/Admin/Parents/ParentsDetails'),
        props:true
      },
      {
        path:'/admin/books',
        name:'All-Books',
        component:()=>import('../views/app/Admin/Books/Books')
      },
      {
        path:'/student/books',
        name:'Student-Books',
        component:()=>import('../views/app/Student/Books')
      },
      {
        path:'/book/:id',
        name:'Student',
        component:()=>import('../views/app/Books/BookDetails'),
        props:true
      },
      {
        path:'/admin/uploadBook',
        name:'Student',
        component:()=>import('../views/app/Admin/Books/UploadBook')
      },
      {
        path:'/admin/notice',
        name:'All-Notice',
        component:()=>import('../views/app/Admin/AllNotice')
      },
      {
        path:'/admin/noticeDetails/:id',
        name:'Notice',
        component:()=>import('../views/app/Admin/NoticeDetails'),
        props:true
      },
      
      {
        path:'/admin/section',
        name:'All-Section',
        component:()=>import('../views/app/Admin/Section/AllSection')
      },
      {
        path:'/admin/sectionDetails/:id',
        name:'Section',
        component:()=>import('../views/app/Admin/Section/SectionDetails'),
        props:true
      },
      
      {
        path:'/admin/class-assign-teacher',
        name:'Class-Assign-Teacher',
        component:()=>import('../views/app/Admin/Class/AssignTeacherClass')
      },
      {
        path:'/admin/class-assign-section',
        name:'Class-Assign-Section',
        component:()=>import('../views/app/Admin/Class/AssignSectionClass')
      },
      {
        path:'/admin/class',
        name:'All-Class',
        component:()=>import('../views/app/Admin/Class/AllClasses')
      },
      {
        path:'/admin/sectionDetails/:id',
        name:'Section-Details',
        component:()=>import('../views/app/Admin/Class/ClassDetails'),
        props:true
      },
      {
        path:'admin/payment',
        name:'Payment',
        component:()=>import('../views/app/Admin/Payment/AddPayment')
      },
      {
        path:'student/home',
        name:'Student-Home',
        component:()=>import('../views/app/Student/Home')
      },
      {
        path:'student/profile',
        name:'Student-Profile',
        component:()=>import('../views/app/Student/Profile')
      },
      {
        path:'parent/profile',
        name:'Parent-Profile',
        component:()=>import('../views/app/Parent/Profile')
      },
      {
        path:'student/performance',
        name:'Student-Performance',
        component:()=>import('../views/app/Student/Performance')
      },
      {
        path:'student/payment',
        name:'Student-Payment',
        component:()=>import('../views/app/Student/Payment')
      },
      {
        path:'student/class',
        name:'Student-Class',
        component:()=>import('../views/app/Student/Class')
      },
      {
        path:'class/:id',
        name:'ClassName',
        component:()=>import('../views/app/Classroom/Home')
      },
      {
        path:'teacher/home',
        name:'Teacher-Home',
        component:()=>import('../views/app/Teacher/Home')
      },
      {
        path:'teacher/profile',
        name:'Teacher-Profile',
        component:()=>import('../views/app/Teacher/Profile')
      },
      {
        path:'teacher/class',
        name:'Teacher-Class',
        component:()=>import('../views/app/Teacher/Classes')
      },
      {
        path:'teacher/books',
        name:'Teacher-Class',
        component:()=>import('../views/app/Teacher/Books')
      },
      {
        path:'teacher/marking',
        name:'Teacher-Marking',
        component:()=>import('../views/app/Teacher/Marking')
      },
      {
        path:'students/class/:id',
        name:'Class-Student',
        component:()=>import('../views/app/Teacher/StudentInClass')
      },
      {
        path:'assignment/:id',
        name:'Assignment-Home',
        component:()=>import('../views/app/Assignments/Home')
      },
      {
        path:'student/performance/:id',
        name:'Student-Performance',
        component:()=>import('../views/app/Teacher/MarkingStudent')
      },
      
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
