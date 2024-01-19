import Header from "./components/Header/Header"
import OurServices from "./components/OurServices/OurServices"
import Banner from './components/Banner/Banner'
import banner2 from './assets/banner2.png'
import banner3 from './assets/banner3.png'
import Slider from "./components/Slider/Slider"
import LatestArticle from "./components/LatestArticle/LatestArticle"

function App() {
  return (
    <>
      <Header />
      <OurServices />
      <Banner image={banner2} title="Leading healthcare providers" description="We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver" btnText="Learn more"/>
      <Banner reversed={true} image={banner3} title="Download our mobile apps" description="Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely" btnText="Download"/>
      <Slider />
      <LatestArticle />
    </>
  )
}

export default App
