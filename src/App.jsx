import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import './App.css'
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/products/",
        element: <Products/>,
      },
      {
        path: "/product/:id",
        element:<SingleProduct/> ,
      },
      {
        path: "/category/:cate",
        element:<CategoryPage/> ,
      },
      {
        path: "/cart",
        element:<CartPage /> ,
      },

    ],
  },
]);

function App() {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}

  

export default App;
