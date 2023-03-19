import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import ProfileFunction from "./components/ProfileFunction"
const AppLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/about",
                element: <About/>,
                children: [
                    {
                        path: "profile",  // /about/profile
                        element: <ProfileFunction/>
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)