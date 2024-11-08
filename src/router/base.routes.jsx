import Home from "../pages/home/Home";
import Research from "../pages/research/Research";
import Data from "../pages/data/Data";
import SingleData from "../pages/data/SingleData";
import GPT from "../pages/gpt/GPT";
import TeamMembers from "../pages/company/TeamMembers";
import WhatWeDo from "../pages/company/WhatWeDo";
import Blog from "../pages/blog/Blog";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Dashboard from "../pages/admin_panel/Dashboard";
import SingleBlog from "../pages/blog/SingleBlog";
import SingleDraft from "../pages/admin_panel/SingleDraft";
import Resources from "../pages/resources/Resources";
import EduSelector from "../pages/data/EduSelector";


const baseRoutes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/research",
        element: <Research />,
    },
    {
        path: "/data",
        element: <Data />,
    },
    {
        path: "/data/:id",
        element: <SingleData />,
    },
    {
        path: "/gpt",
        element: <GPT />,
    },
    {
        path: "/what-we-do",
        element: <WhatWeDo />,
    },
    {
        path: "/team",
        element: <TeamMembers />,
    },
    {
        path: "/blog",
        element: <Blog />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/blog/:slug",
        element: <SingleBlog />,
    },
    {
        path: "/draft/:slug",
        element: <SingleDraft />,
    },
    {
        path: "/publications",
        element: <Resources />,
    },
    {
        path: "/edu-selector",
        element: <EduSelector />,
    }
] 

export default baseRoutes;