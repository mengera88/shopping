import Home from './pages/home'
import ShopCart from './pages/shop-cart'

const routes = [
    {
        key: 'home',
        path: '/',
        component: <Home />
    },
    {
        key: 'shopCart',
        path: 'shop-cart',
        component: <ShopCart />
    }
]

export default routes