






export default function Accordion(props: { state: boolean, value: number, details: string, text: string, on_click: (x: { value: number, state: boolean }) => void }) {


    const Toggle = () => {
        props.on_click({ value: props.value, state: props.state });
    }

    return (
        <>
            <button className="w-full h-max  bg-grey-150 rounded-[24px] " onClick={Toggle}>
                <div className="w-[calc(100%-48px)]  h-[75px] flex justify-between items-center mx-6">
                    <p className="font-manrope-bold text-grey-750 text-[20px]">{props.text}</p>
                    <img src="svgs/icon-arrow.svg" className={"size-6 " + ((props.state) ? "rotate-180" : "")} />
                </div>
                {
                    (props.state) &&
                    (
                        <div className="w-calc(100%-48px) h-max m-6 py-1 rounded-lg bg-grey-300">
                        <p className="text-left font-manrope-semibold text-[14px] text-grey-750 m-6" >{props.details}</p>
                        </div>
                    )
                }
            </button>
        </>
    )
}