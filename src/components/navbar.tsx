import { Link } from "react-router-dom";





export default function Navbar() {
    return (
        <nav className="h-[75px] flex justify-between absolute top-0 w-full bg-grey-50">
            <Link to={"/"} className="w-[140px] ml-[5vw] h-full flex items-center cursor-pointer  ">
                <img src="svgs/logo.svg"/>
                <div className="w-full h-max text-base leading-4 -translate-y-2 m-1">
                    <p  className="font-manrope-bold text-grey-750">Smart</p>
                    <div className="font-manrope-semibold custom-radial-gradient-text w-max h-max ">
                        <p>Sched</p>
                    </div>

                </div>
            </Link>
            <div className="w-max gap-[2.5vw] h-full font-manrope-bold text-grey-750 text-[18px]  mr-[5vw] flex justify-between items-center">
                <Link to={"/about"} className="w-[100px] text-center duration-75 ease-in delay-300 hover:delay-0 hover:text-[#E9AA96] hover:translate-y-1 hover:scale-95 hover:rotate-3" > About </Link>
                <Link to={"/download"} className="w-[100px] text-center duration-75 ease-in delay-300 hover:delay-0  hover:text-[#C185A2] hover:translate-y-1 hover:scale-95 hover:rotate-3" > Download </Link>
                <Link to={"/showcase"} className="w-[100px] text-center duration-75 ease-in delay-300 hover:delay-0  hover:text-[#6962AD] hover:translate-y-1 hover:scale-95 hover:rotate-3" > Features </Link>
            </div>
        </nav>
    )
}