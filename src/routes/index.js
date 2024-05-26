<<<<<<< HEAD
import Homepage from "../pages/Homepage/Homepage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import Orderpage from "../pages/Orderpage/Orderpage"
import Productspage from "../pages/Productspage/Productspage"

export const routes = [
    {
        path : '/',
        page : Homepage,
        isShowPage: true
    },
    {
        path : '/order',
        page : Orderpage,
        isShowPage: true
    },
    {
        path : '/products',
        page : Productspage,
        isShowPage: true
    },
    {
        path : '*',
        page : NotFoundPage
    },
=======
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    }
>>>>>>> 7529782 (init project)
]