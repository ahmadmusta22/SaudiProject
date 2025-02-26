// src/App.js
import './tailwind.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";

// Import all your pages and components
import HomePageOne from "./pages/HomePageOne";
import HomePageTwo from "./pages/HomePageTwo";
import HomePageThree from "./pages/HomePageThree";
import HomePageFour from "./pages/HomePageFour";
import HomePageFive from "./pages/HomePageFive";
import HomePageSix from "./pages/HomePageSix";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import TeamPage from "./pages/TeamPage";
import TeamDetailsPage from "./pages/TeamDetailsPage";
import ShopPage from "./pages/ShopPage";
import ShopDetailsPage from "./pages/ShopDetailsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import WishlistPage from "./pages/WishlistPage";
import ContactPage from "./pages/ContactPage";

// Importing individual components
import Categories from './components/Nemoo';
import Vendor from './components/Vendoe';
import Product from './components/Product';
import Nekoo from './components/Neekoo';
import Category from './pages/Category';
import Vendoor from './pages/Vendor';
import Prooduct from './pages/Prooduct';
import Reservationform from './pages/Finalform';
import AddCategoryForm from './components/AddCatwgory';
import DeleteCategory from './components/DeleteCategory';
import Addvendorr from './components/AddVendor';
import DeleteVendor from './components/DeleteVendor';
import AddProductForm from './components/Addproduct';
import DeleteProduct from './components/DeletProduct';
import AddMal from './components/AddMalfunctions';
import DeleteMalfunction from './components/DeleteMal';
import AddBlogForm from './components/Addblogs';
import Adminnn from './components/AdminDashbord';
import PaypalPage from './pages/Payment';
import ProductContextProvider from './Contex/TotalpriceContex';

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <ScrollToTop smooth color="blue" />
      <ProductContextProvider>
        <Routes>
          {/* Home Pages */}
          <Route path="/" element={<HomePageOne />} />
          <Route path="/home-2" element={<HomePageTwo />} />
          <Route path="/home-3" element={<HomePageThree />} />
          <Route path="/home-4" element={<HomePageFour />} />
          <Route path="/home-5" element={<HomePageFive />} />
          <Route path="/home-6" element={<HomePageSix />} />
          
          {/* Static Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/service-details" element={<ServiceDetailsPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project-details" element={<ProjectDetailsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-details" element={<BlogDetailsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team-details" element={<TeamDetailsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop-details" element={<ShopDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Categories, Vendor, Product Pages */}
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Vendor/:id" element={<Vendor />} />
          <Route path="/Vendor/:id/:malfunctionId" element={<Product />} />
          <Route path="/Nekoo/:categoryid" element={<Nekoo />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Vendoor/:id" element={<Vendoor />} />
          <Route path="/Prooduct/:id" element={<Prooduct />} />
          
          {/* Admin Pages */}
          <Route path="/AddCategoryForm" element={<AddCategoryForm />} />
          <Route path="/DeleteCategory" element={<DeleteCategory />} />
          <Route path="/Addvendorr" element={<Addvendorr />} />
          <Route path="/DeleteVendor" element={<DeleteVendor />} />
          <Route path="/AddProductForm" element={<AddProductForm />} />
          <Route path="/DeleteProduct" element={<DeleteProduct />} />
          <Route path="/AddMal" element={<AddMal />} />
          <Route path="/DeleteMalfunction" element={<DeleteMalfunction />} />
          <Route path="/AddBlogForm" element={<AddBlogForm />} />
          <Route path="/Adminnn" element={<Adminnn />} />
          
          {/* Special Pages */}
          <Route path="/WishList/:id" element={<Reservationform />} />
          <Route path="/PaypalPage/:price" element={<PaypalPage />} />
        </Routes>
      </ProductContextProvider>
    </BrowserRouter>
  );
}

export default App;
