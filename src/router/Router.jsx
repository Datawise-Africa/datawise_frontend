import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Research from "../pages/research/Research";
import Data from "../pages/data/Data";
import Layout from "../pages/layout/Layout";
import GPT from "../pages/gpt/GPT";
import TeamMembers from "../pages/company/TeamMembers";
import WhatWeDo from "../pages/company/WhatWeDo";
import Blog from "../pages/blog/Blog";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />} >
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<Research />} />
              <Route path="/data" element={<Data />} />
              <Route path="/gpt" element={<GPT />} />
              <Route path="/what-we-do" element={<WhatWeDo />} />
              <Route path="/team" element={<TeamMembers />} />
              <Route path="/blog" element={<Blog />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router