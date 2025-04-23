import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };  
  return (  
    <nav className="w-screen mt-4  py-3 px-4 flex flex-col justify-between items-center bg-gray-950">
      <div className="flex justify-between w-screen px-3">
          <h1 className="text-white text-3xl">Evoke</h1>
          <div onClick={toggleMenu} className="space-y-2 cursor-pointer flex flex-col justify-center items-center sm:hidden">
            <div className="w-8 h-1 bg-white"></div>
            <div className="w-8 h-1 bg-white"></div>
            <div className="w-8 h-1 bg-white"></div>
          </div>
          <div className="flex justify-center items-center hidden sm:flex cursor-pointer">
            <ul className="flex space-x-4 text-white font-semibold text-lg ">
                <li>Home</li>
                <li>About</li>
                <li>Solution</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li>Sign in</li>
            </ul>
          </div>
         <div className="flex justify-center border-1 hidden rounded-sm px-1 border-white gap-0 items-center sm:flex"> 
            <FaRegUser color="white" />
            <a className="p-1 m-0 text-white visited:text-white no-underline">Sign in</a>
         </div>
      </div>
      <div
  className={`transition-all duration-300 ease-in-out overflow-hidden sm:hidden flex flex-col mt-3 ${
    isOpen ? 'opacity-100 max-h-96 scale-100' : 'opacity-0 max-h-0 scale-95'
  }`}
>
  <ul className="flex flex-col space-y-2 text-white font-semibold text-lg cursor-pointer">
    <li>Home</li>
    <li>About</li>
    <li>Solution</li>
    <li>Pricing</li>
    <li>Contact</li>
    <li>Sign in</li>
  </ul>
</div>

    </nav>
  );
};

export default Navbar;
