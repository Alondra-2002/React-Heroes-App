import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components";
import { MarvelPage } from "../pages/MarvelPage";
import { DcPages } from "../pages/DcPages";
import { SearchPage } from "../pages/SearchPage";
import { HeroPage } from "../pages/HeroPage";

export const HeroesRoutes = () => {
  return (
   <>
   <Navbar/>

    <div className="container">

   <Routes>
        <Route path="marvel" element={<MarvelPage/>} />
        <Route path="dc" element={<DcPages/>} />
        <Route path="search" element={<SearchPage/>} />
        <Route path="hero/:id" element={<HeroPage/>} />

     
        <Route path="/" element={<Navigate to="/marvel"/>} />
    </Routes>
    </div>
   </>
  )
}
