import './App.css'
import NavBar from './components/header/navBar'
import { Routes, Route, Outlet } from 'react-router-dom'
import Signup from './pages/auth/Signup'
import HeaderCart from './components/cart/Cart'
// import { useEffect } from 'react'
import HomePage from './pages/home/HomePage'
import ProductCategory from './pages/home/Swipers/CategoryProducts'
import SaleCategory from './components/cart/product/SaleCategory'
import ProductDetail from './components/cart/product/ProductDetail'
import ProductSale from './components/cart/product/MarketSaleProducts'
import SalesTab from './components/header/SalesTab'
import QandA from './pages/home/Pages/QandA'
import Popular from './pages/home/Pages/Popular'
import StorySection from './pages/home/Swipers/StorySection'
import AllItems from './pages/home/Pages/AllItems'
import PriceBased from './pages/home/Pages/PriceBasedItems'
import PayBack from './components/footer/PayBack'
import Checkout from './components/cart/Checkout'
// import Tabs from './components/header/Tabs'

function App() {
  // const location = useLocation()
  // const hideHeaderRoutes = ['/signup', '/cart', '/notifylogin']
  // useEffect(() => {
  //   fetch(
  //     'https://fakestoreapiserver.reactbd.org/api/products?categories=women'
  //   )
  // })

  // const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname)
  function Layout() {
    return (
      <>
        {/* <HomePage /> */}
        <NavBar />
        <Outlet />
      </>
    )
  }
  return (
    <>
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<HeaderCart />} />
          <Route path="/sale" element={<SalesTab />} />
          <Route path="/qanda" element={<QandA />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/popular/:categoryId" element={<Popular />} />
          <Route path="/product/productId" element={<StorySection />} />
          <Route
            path="/product/category/:categoryId"
            element={<ProductCategory />}
          />
          <Route
            path="/product/category/:productId"
            element={<ProductCategory />}
          />
          <Route path="/sale/:categoryId" element={<SaleCategory />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/sale/:categoryId" element={<ProductSale />} />
          <Route path="/allitems" element={<AllItems />} />
          <Route path="/basedonprice" element={<PriceBased />} />
          <Route path="/payback" element={<PayBack />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/product/category/:categoryId" element={<Tabs />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
