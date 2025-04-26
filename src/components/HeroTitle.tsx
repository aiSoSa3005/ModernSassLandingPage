import Button from "./Button"


const HeroTitle = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full my-[120px]">
            <h1 className="text-white text-3xl text-center">Transform Your Data Into <br>
            </br>
            <span className="text-[#9a2dcd] text-3xl text-center">Actionable Solutions</span>
            </h1>
            <p className="text-[#646263] text-sm text-center mt-4">Unlock the full potential of your data without suite analytics books</p>
            <div className="flex justify-between">
                <Button text={"Download App"} backgroundColor="purple" />
                <Button text="Talk to sales" backgroundColor="purple"/>
            </div>
    </div>
  )
}

export default HeroTitle
