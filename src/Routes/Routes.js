let Home = ()=>import('../components/pages/home/Index.vue');
let LoginRegister = ()=>import('../components/pages/employee/login/Index.vue');
let JobSearch = ()=>import('../components/pages/jobSearch/index.vue');
let JobDescriptions = ()=>import('../components/pages/jobDescriptions/Index.vue');
let Job = ()=>import('../components/pages/employee/jobRequestSaved/Index.vue');
let Saved = ()=>import('../components/pages/employee/jobRequestSaved/Saved.vue');
let Requests = ()=>import('../components/pages/employee/jobRequestSaved/Requests.vue');
let Resume = ()=>import('../components/pages/employee/resume/Index.vue');

export const Routes = [
    {path:'/',component:Home,name:'Home'},
    {path:'/job-search',component:JobSearch,name:'JobSearch'},
    {path:'/job-descriptions/:id',component:JobDescriptions,name:'JobDescriptions'},
    {path:'/login-register',component:LoginRegister,name:'LoginRegister'},
    {path:'/job',component:Job,
    children:[
        {path:'',redirect:'/'},
        {path:'saved',component:Saved,name:'Saved'},
        {path:'requests',component:Requests,name:'Requests'},
    ]     
},
  {path:'/resume',component:Resume,name:'Resume'},
    {path:'*',redirect:'/'},
    {path:'/404',redirect:'/'},
]