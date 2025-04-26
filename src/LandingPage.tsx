import HeroTitle from "./components/HeroTitle"
import Navbar from "./components/Navbar"


const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-[#1b191a] bg-[radial-gradient(circle,purple_2px,transparent_1px)] bg-[length:200px_200px]">
        <Navbar />
        {/* HERO SECTION */}
        <HeroTitle />
      
    </div>
  )
}

export default LandingPage
