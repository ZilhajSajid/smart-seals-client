import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Layouts/RootLayout.jsx";
import Home from "./components/Home/Home.jsx";
import AllProducts from "./components/AllProducts/AllProducts.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import Register from "./Register/Register.jsx";
import MyProducts from "./components/MyProducts/MyProducts.jsx";
import MyBids from "./components/MyBids/MyBids.jsx";
import ProductDetails from "./components/AllProducts/ProductDetails/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allProducts",
        Component: AllProducts,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "myProducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "myBids",
        element: <MyBids></MyBids>,
      },
      {
        path: "productDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
        Component: ProductDetails,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
