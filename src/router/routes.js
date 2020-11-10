import Home from '@/views/Home';
import Login from '@/views/Login';
import Register from '@/views/Register';
import Search from '@/views/Search';
import Detail from '@/views/Detail';
import AddCartSuccess from '@/views/AddCartSuccess';
import ShopCart from '@/views/ShopCart';
import Trade from '@/views/Trade';
import Pay from '@/views/Pay';
import PaySuccess from '@/views/PaySuccess';
import Center from '@/views/Center';
import MyOrder from '@/views/Center/MyOrder';
import GroupOrder from '@/views/Center/GroupOrder';


export default [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/login',
        component:Login,
        meta:{
            isHidden:true
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            isHidden:true
        }
    },
    {
        path:'/search/:keyword?',
        component:Search,
        name:'search'
    },
    {
        path:'/detail/:skuId',
        component:Detail
    },
    {
        path:'/addcartsuccess',
        component:AddCartSuccess
    },
    {
        path:'/shopcart',
        component:ShopCart
    },
    {
        path:'/trade',
        component:Trade
    },
    {
        path:'/pay',
        component:Pay
    },{
        path:'/paysuccess',
        component:PaySuccess
    },
    {
        path:'/center',
        component:Center,
        children:[
            {
                path:'myorder',
                component:MyOrder
            },
            {
                path:'grouporder',
                component:GroupOrder
            },
            {
                path:'',
                redirect: 'myorder'
            }
        ]
    },
    {
        path:'/',
        redirect: '/home'
    }
]