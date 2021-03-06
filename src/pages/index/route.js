const Index =()=>import('./index')
const Home =()=>import('../home/home')
const DangerousGoods =()=>import('../dangerousGoods/dangerousGoods')
const Baseform =()=>import('../../template/baseForm')
const Advform =()=>import('../../template/advForm')
const Basequery =()=>import('../../template/baseQuery')
const Tabquery =()=>import('../../template/tabQuery')
const BaseDetail =()=>import('../../template/baseDetail')
const Input =()=>import('../../template/input')
const Radio =()=>import('../../template/radio')
const Checkbox =()=>import('../../template/checkbox')
const Select =()=>import('../../template/select')
const Date =()=>import('../../template/date')
const Cascader =()=>import('../../template/cascader')
const Area =()=>import('../../template/area')
const Upload =()=>import('../../template/upload')
const Texteditor =()=>import('../../template/textEditor')
export default {
  path:'/index',
  name:'index',
  component:Index,
  children:[{
    path: 'home',
    name: 'home',
    component: Home
  },{
    path: 'dangerousGoods',
    name: 'dangerousGoods',
    component: DangerousGoods
  },{
    path: 'baseForm',
    name: 'baseForm',
    component: Baseform
  },{
    path: 'advForm',
    name: 'advForm',
    component: Advform
  },{
    path: 'baseQuery',
    name: 'baseQuery',
    component: Basequery
  },{
    path:'tabQuery',
    name:'tabQuery',
    component:Tabquery
  },{
    path:'baseDetail',
    name:'baseDetail',
    component:BaseDetail
  }]
}
