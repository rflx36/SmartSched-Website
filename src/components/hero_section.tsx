import { useNavigate } from "react-router-dom"




export default function HeroSection() {
    const navigate = useNavigate();

    const OnActionDownload = () => {
        navigate("/download");
    }

    return (
        <div className="flex flex-col w-max h-full ">
            <div className="w-max h-max  animate-[slidedown_0.5s_cubic-bezier(0.35,0.86,0.35,0.83)_0.4s_backwards]">

                <div className="w-max h-[183px] flex translate-y-36">
                    <div className="w-[534px] mr-[7px] relative h-[112px] bg-custom-gradient rounded-[56px] grid place-content-center rounded-bl-[15px]">
                        <div className="bg-grey-50 h-20 w-[502px] rounded-full grid place-content-center">
                            <h1 className="font-manrope-bold text-grey-750 text-[50px]">Stay on Track!</h1>
                        </div>
                    </div>
                    <div className="size-[112px] mx-[7px] rounded-full grid place-content-center bg-opacity-60 bg-[#6962AD]">
                        <div className="size-20 rounded-full grid place-content-center bg-grey-50">
                            <img src="svgs/hero-notification.svg" />
                        </div>
                    </div>
                    <img className=" ml-[8px] self-end" src="svgs/hero-path-1.svg" />

                </div>

            </div>

            <div className="w-full h-max animate-[slidedown_0.5s_cubic-bezier(0.35,0.86,0.35,0.83)_0.3s_backwards]">

                <div className="w-full h-max translate-y-24 flex flex-col">
                    {/* -translate-y-14 */}

                    <div className="w-max flex h-[240px]">
                        <div className="h-20 w-max flex ml-[25px] mr-5 items-center">
                            <img className="animate-bounce" src="svgs/hero-sparkle.svg" />
                        </div>
                        <img className="self-end mr-[35px]" src="svgs/hero-path-2.svg" />
                        <h1 className="font-manrope-bold text-[50px] text-grey-750 w-[415px] h-20 text-center">
                            Your Realtime
                        </h1>
                    </div>
                    <div className="w-max h-20  -translate-y-32
                     flex self-center">
                        <h1 className="ml-40 font-manrope-bold text-[50px] text-grey-750">

                            <span className="text-[#C185A2]"> Schedules </span>
                            on the Go.
                        </h1>
                        <img className=" ml-[11px]" src="svgs/hero-widget.svg" />
                    </div>
                </div>

            </div>
            <div className="w-max h-max ml-[135px] animate-slide-down animate-[slidedown_0.5s_cubic-bezier(0.35,0.86,0.35,0.83)_0.2s_backwards]">
                <img className="" src="svgs/hero-pointer.svg" />

            </div>
            <div className="w-full flex flex-col items-center h-max mt-5 animate-[slidedown_0.5s_cubic-bezier(0.35,0.86,0.35,0.83)_0.1s_backwards]">
                <div className="w-[570px] h-max">
                    <p className="font-manrope-semibold text-grey-500 text-wrap text-center">
                        Stay organized with real-time access to your class and room schedules. Perfect for planning ahead!
                    </p>
                </div>
                <div className="w-60 h-14 rounded-full bg-grey-300 grid place-content-center mt-10">
                    <button onClick={OnActionDownload} className="group bg-grey-750 border hover:bg-grey-900/95 ease-in duration-75 border-grey-900 rounded-full w-[230px] h-[46px] grid place-content-center">
                        <p className="group-hover:tracking-widest ease-in group-hover:duration-300 duration-75 custom-radial-gradient-text-2 font-manrope-bold text-[20px]">Download</p>
                    </button>
                </div>
            </div>

        </div>
    )
}