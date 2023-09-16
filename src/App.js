import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

// import Grocery from "./components/Grocery";
const Grocery = lazy(() => (import("./components/Grocery")))

// Provider and appStore..
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import Cart from './components/Cart'


const AppLayout = () => {

console.log("Is Provider in this component:", Boolean(Provider));

  return (
    <Provider store={appStore}>
        <Header />
        <Outlet />
        <Footer />
   </Provider>
  )
}

// createBrowserRouter takes list of paths which has path and element(component)
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
