import Classes from "./Components/Classes/Classes"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Team from "./Components/Team/Team"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import { Route, Routes, useLocation } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import { useEffect } from "react"
import Timetable from "./Components/Timetable/Timetable"


function App() {

  let { pathname } = useLocation();
  // console.log(pathname);

  useEffect(()=>{
    window.scrollTo({top: 0, behavior: "auto"});
  }, [ pathname ])

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/classes" element={<Classes/>}/>
        <Route path="/timetable" element={<Timetable/>}/>
        <Route path="*" element={<Home />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App