// import "./App.css"
// import Header from "./components/common/header/Header"
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import About from "./components/about/About"
// import CourseHome from "./components/allcourses/CourseHome"
// // import Team from "./components/team/Team"
// import Pricing from "./components/pricing/Pricing"
// // import Blog from "./components/blog/Blog"
// import Contact from "./components/contact/Contact"
// import Footer from "./components/common/footer/Footer"
// import Home from "./components/home/Home"
import Login from "./components/Login/Login"
function App() {
  return (
    <>
      {/* <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/about' element={<About></About>} />
          <Route path='/courses' element={<CourseHome></CourseHome>} />
          
          <Route path='/pricing' element={<Pricing></Pricing>} />
          
          <Route path='/contact' element={<Contact></Contact>} />
          </Routes>
        <Footer />
      </Router> */}
      <Login/>
    </>
  )
}

export default App
