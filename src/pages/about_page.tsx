import { useState } from "react";
import Accordion from "../components/accordion";
import Navbar from "../components/navbar";





export default function AboutPage() {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);


    const ToggleAccordion = (x: { value: number, state: boolean }) => {

        setActiveAccordion(x.state ? null : x.value);
    }

    return (
        <>
            <Navbar />

            <div className="w-full mt-20 h-max flex justify-center ">
                <div className="w-[800px] flex flex-col justify-center ">
                    <div className="w-full h-max flex gap-1 justify-center animate-[slidedown_0.5s_cubic-bezier(0.35,0.86,0.35,0.83)_0.4s_backwards]">
                        <div className="w-[200px] h-max">
                            <h1 className="font-manrope-bold h-20 text-center self-center text-grey-750 text-[50px]">About</h1>
                        </div>
                        <img src="svgs/sparkle.svg" />
                    </div>
                    <p className="w-full h-max mt-12 font-manrope-semibold text-grey-750  animate-[slidedown_0.5s_cubic-bezier(0.35,0.86,0.35,0.83)_0.3s_backwards]">
                        <span className="text-[#C185A2]">Smart-Sched</span> is that innovative system, designed for revolutionizing schedules in educational institutions to the best possible room usage. Smart-Sched enables completely automated scheduling with real-time tracking to ensure smooth operations, efficiency, and better usage of facilities.
                        <br />
                        <br />
                        The core of Smart-Sched is the automation of the whole cycle of scheduling. Though manual timetabling was simpler yet prone to conflict, Smart-Sched could offer that same simplicity with minimal conflicts. Additionally, Smart-Sched features real-time room monitoring by ESP32 and ESP32-CAM devices, which determines if a lab room is occupied or not. It is a dual-purpose functionality because it provides an immediate view on room availability while speeding up the process of scheduling in school.

                    </p>
                    <div className="w-full h-max flex gap-1 justify-center mt-24  animate-[slidedown_0.5s_cubic-bezier(0.35,0.86,0.35,0.83)_0.2s_backwards]">
                        <div className="w-[200px] h-max">
                            <h1 className="font-manrope-bold h-20 text-center self-center text-grey-750 text-[50px]">FAQs</h1>
                        </div>
                        <img src="svgs/sparkle.svg" />
                    </div>
                    <div className="w-full h-max my-12 flex flex-col gap-4 animate-[slidedown_0.5s_cubic-bezier(0.35,0.86,0.35,0.83)_0.1s_backwards]">
                        <Accordion
                            value={1}
                            state={1 == activeAccordion}
                            on_click={(x) => ToggleAccordion(x)}
                            text={"How does the Automated Scheduling feature work?"}
                            details={"Smart-Sched scheduling engine automatically generates class schedules based on course requirements and the availability of instructors as well as rooms. The system minimizes manual efforts, thus saving time for the dean."}
                        />
                        <Accordion
                            value={2}
                            state={2 == activeAccordion}
                            on_click={(x) => ToggleAccordion(x)}
                            text={"Which platforms does Smart-Sched support?"}
                            details={"The system consists of:  Desktop application for the dean for automated scheduling and real-time monitoring of lab room. Mobile app for both students and instructors to monitor their schedules on-the-go. Web-based interface to showcase the system and provide the download link for the mobile app"}
                        />
                        <Accordion
                            value={3}
                            state={3 == activeAccordion}
                            on_click={(x) => ToggleAccordion(x)}
                            text={"What are the advantages of Smart-Sched?"}
                            details={"Improved efficiency: It automates the process of scheduling. Saves time: it decreases the dean's manual working hours of generating schedules dramatically. No conflict of schedules: avoids errors and room conflicts."}
                        />
                       
                    </div>
                </div>
            </div>
        </>
    )
}