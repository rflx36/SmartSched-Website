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
                        <span className="text-[#C185A2]">SmartSched</span> is bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        <br /><br />
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
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
                            text={"Bla Bla Bla Bla Bla?"}
                            details={"bla bla bla bla bla bla bla bla bla bla bla bla bla bla."}
                        />
                        <Accordion
                            value={2}
                            state={2 == activeAccordion}
                            on_click={(x) => ToggleAccordion(x)}
                            text={"Bla Bla Bla Bla Bla?"}
                            details={"bla bla bla bla bla bla bla bla bla bla bla bla bla bla."}
                        />
                        <Accordion
                            value={3}
                            state={3 == activeAccordion}
                            on_click={(x) => ToggleAccordion(x)}
                            text={"Bla Bla Bla Bla Bla?"}
                            details={"bla bla bla bla bla bla bla bla bla bla bla bla bla bla."}
                        />
                          <Accordion
                            value={4}
                            state={4 == activeAccordion}
                            on_click={(x) => ToggleAccordion(x)}
                            text={"Bla Bla Bla Bla Bla?"}
                            details={"bla bla bla bla bla bla bla bla bla bla bla bla bla bla."}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}