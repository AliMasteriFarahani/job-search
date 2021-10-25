let Home = () => import("../components/pages/home/Index.vue");
let Employee = () => import("../components/pages/employee/login/Index.vue");
let Login = () => import("../components/pages/employee/login/Login.vue");
let Register = () => import("../components/pages/employee/login/Register.vue");
let JobSearch = () => import("../components/pages/jobSearch/index.vue");
let JobDescriptions = () =>
  import("../components/pages/jobDescriptions/Index.vue");
let Job = () =>
  import("../components/pages/employee/jobRequestSaved/Index.vue");
let Saved = () => import("../components/pages/employee/jobRequestSaved/Saved.vue");
let Requests = () =>
  import("../components/pages/employee/jobRequestSaved/Requests.vue");
let Resume = () => import("../components/pages/employee/resume/Index.vue");
let CompanyPositions = () =>
  import("../components/pages/companyPositions/Index.vue");
let EmployeeSettings = () =>
  import("../components/pages/employee/settings/Index.vue");
// employer :
let EmployerLoginRegister = ()=>import('../components/pages/employer/login/Index.vue');
let EmployerLogin = ()=>import('../components/pages/employer/login/Login.vue');
let EmployerRegister = ()=>import('../components/pages/employer/login/Register.vue');
let CompanyInformations = ()=>import('../components/pages/employer/companyInformations/Index.vue');
let CompanyAdvertisments = ()=>import('../components/pages/employer/advertisments/Index.vue');
let JobDetails = ()=>import('../components/pages/employer/advertismentDetails/Index.vue');
let JobEdit = ()=>import('../components/pages/employer/advShowEditAdd/Index.vue');
let ResumeFolders = ()=>import('../components/pages/employer/resumeFolders/Index.vue');
let ResumeFolder = ()=>import('../components/pages/employer/resumeFolder/Index.vue');
let ResumeDetails = ()=>import('../components/pages/employer/resumeDetails/Index.vue');

export const Routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/job-search", component: JobSearch, name: "JobSearch" },
  {
    path: "/job-descriptions/:id/:slug",
    component: JobDescriptions,
    name: "JobDescriptions",
  },
  {
    path: "/job",
    component: Job,
    children: [
      { path: "", redirect: "/" },
      { path: "saved", component: Saved, name: "Saved" },
      { path: "requests", component: Requests, name: "Requests" },
    ],
  },

  {
    path: "/employee",
    component: Employee,
    children: [
      { path: "", redirect: "/" },
      { path: "login", component: Login, name: "Login" },
      { path: "register", component: Register, name: "Register" },
    ],
  },
  { path: "/resume", component: Resume, name: "Resume" },
  {
    path: "/company/:id/positions/:slug",
    component: CompanyPositions,
    name: "CompanyPositions",
  },
  {
    path: "/employee/settings",
    component: EmployeeSettings,
    name: "EmployeeSettings",
  },
  { path: "*", redirect: "/" },
  { path: "/404", redirect: "/" },

  // employer :
  {path:'/employer',component:EmployerLoginRegister,
   children:[
       {path:'',redirect:'/'},
       {path:'login',component:EmployerLogin},
       {path:'register',component:EmployerRegister},
   ]},
   
   {path:'/companyInformations',component:CompanyInformations},
   {path:'/advertismentsList',component:CompanyAdvertisments},
   {path:'/job/:id/details',component:JobDetails},
   {path:'/job/:id/edit',component:JobEdit},
   {path:'/resume/folders',component:ResumeFolders},
   {path:'/resume/folders/:folderId',component:ResumeFolder},
   {path:'/resume/details/:id',component:ResumeDetails},
];
