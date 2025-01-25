import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
// import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
// import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import LoginPage from "./components/LoginAndRegister/LoginPage"
import RegisterPage from "./components/LoginAndRegister/RegisterPage"

function App() {
  const location = useLocation();

  const showHeaderFooter = !['/log-in', '/sign-in'].includes(location.pathname);

  return (
    <>

      {showHeaderFooter && <Header />}
      <Routes>
        <Route path='/log-in' element={<LoginPage />} />
        <Route path='/sign-in' element={<RegisterPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<CourseHome />} />

        <Route path='/pricing' element={<Pricing />} />

        <Route path='/contact' element={<Contact />} />
      </Routes>
      {showHeaderFooter && <Footer />}

    </>
  )
}

export default App
