let Home = ()=>import('./components/pages/home/Index.vue');
let LoginRegister = ()=>import('./components/pages/employee/login/Index.vue');
let JobSearch = ()=>import('./components/pages/jobSearch/index.vue');
let JobDescriptions = ()=>import('./components/pages/jobDescriptions/Index.vue');

export const Routes = [
    {path:'/',component:Home,name:'Home'},
    {path:'/job-search',component:JobSearch,name:'JobSearch'},
    {path:'/job-descriptions/:id',component:JobDescriptions,name:'JobDescriptions'},
    {path:'/login-register',component:LoginRegister,name:'LoginRegister'},
    {path:'*',redirect:'/'},
    {path:'/404',redirect:'/'},
]