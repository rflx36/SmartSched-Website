import Navbar from "../components/navbar";




export default function FeaturesPage() {


    return (
        <>
            <Navbar />
            <div className="w-full flex justify-center">

                <div className=" flex justify-center flex-col">

                    <div className="w-[900px] flex gap-[68px] mt-32 animate-[slidedown_0.5s_cubic-bezier(0.35,0.86,0.35,0.83)_0.3s_backwards]">
                        <div className="w-[482px] h-[230px] flex flex-col justify-between">
                            <div className="flex">
                                <h1 className="font-manrope-bold text-grey-750 text-[28px]" >Link Latest Schedules Directly</h1>
                                <img src="svgs/features-link.svg" className="ml-4" />
                            </div>
                            <p className="w-full h-[150px] font-manrope-semibold text-grey-750">
                                
Stay informed with your latest schedules displayed in real time! Access and view all your class schedules seamlessly. Keep your plans on track and enjoy peace of mind with your reliable schedule access!
                            </p>
                        </div>
                        <div className="w-[350px] h-[230px] bg-grey-200 rounded-[20px] overflow-hidden grid place-content-center">
                            {/* <img  src="empty.png" className="bg-center size-full" /> */}
                        </div>
                    </div>

                    <div className="w-[900px] flex justify-between mt-16 animate-[slidedown_0.5s_cubic-bezier(0.35,0.86,0.35,0.83)_0.2s_backwards]">
                        <div className="w-[350px] h-[137px] bg-grey-200 rounded-[20px] overflow-hidden self-end grid place-content-center">
                            {/* <img  src="empty.png" className="bg-center size-full" /> */}
                        </div>
                        <div className="w-[482px] h-max flex flex-col justify-between ">
                            <div className="flex w-full h-max">
                                <h1 className="font-manrope-bold text-grey-750 text-[28px] text-right w-full h-20 flex items-center justify-end" >Live Room Availability Tracking</h1>
                                <img src="svgs/features-notification.svg" className="ml-4" />
                            </div>
                            <p className="w-full h-[137px] font-manrope-semibold text-grey-750">
                                Know exactly if lab rooms are in use, instantly! Get real-time updates on lab availability for seamless room management.
                            </p>
                        </div>

                    </div>

                    <div className="w-[900px] flex gap-[68px] mt-16 animate-[slidedown_0.5s_cubic-bezier(0.35,0.86,0.35,0.83)_0.1s_backwards]">
                        <div className="w-[482px] h-[230px] flex flex-col justify-between">
                            <div className="flex">
                                <h1 className="font-manrope-bold text-grey-750 text-[28px]" >Maximized Resource Utilization</h1>
                                <img src="svgs/features-widget.svg" className="ml-4" />
                            </div>
                            <p className="w-full h-[150px] font-manrope-semibold text-grey-750">
                            Say goodbye to unused spaces and overlapping assignations. Make the most of every room, ensuring efficiency and full occupancy at all times.
                            </p>
                        </div>
                        <div className="w-[350px] h-[230px] bg-grey-200 rounded-[20px] overflow-hidden grid place-content-center">
                            {/* <img src="empty.png" className="bg-center size-full" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

