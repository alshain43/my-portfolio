import { Outlet } from "react-router"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useRef } from "react"


const HomeLayout = () => {
  const scrollRef = useRef()
  const handleScroll = () => {
    scrollRef.current.scrollIntoView()
    // console.log(scrollRef);
  }
  return (
    <div className='container-lg-fluid' ref={scrollRef}>
      <Navbar />
      <Outlet/>
      <Footer handleScroll={handleScroll}/>
    </div>
  )
}

export default HomeLayout