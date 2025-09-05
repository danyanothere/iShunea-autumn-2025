import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

export const Navbar = () => {
  return (
    <div>
       <header className="w-full fixed z-50 top-0"> 
        <nav className="max-w-[1440px] mx-auto flex justify-between 
         items-center sm:px-16 px-6 py-6">
            <Link href="/" className="flex justify-center 
            items-center group">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl 
            shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-black text-xl">🚗</span>
            </div>
            <span className="ml-3 text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-500 
            bg-clip-text text-transparent">AUTOHUB</span>
            </Link>

            <div className="flex items-center gap-4">
              <CustomButton
              title="Войти"
              btnType="button"
              containerStyles="bg-white text-gray-800 rounded-lg px-6 py-2 font-medium
              hover:scale-105 transition-transform duration-200"
              />
            </div>
            </nav>
        </header> 
    </div>
  )
}
