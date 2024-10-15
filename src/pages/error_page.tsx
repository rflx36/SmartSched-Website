import Navbar from "../components/navbar";





export default function NotFoundPage() {
    return (
        <>
            <Navbar />
            <div className="grid place-content-center h-[100vh]">
                <div className="size-max text-center">
                    <h1 className="font-manrope-bold custom-radial-gradient-text-3 text-[80px]  ">ERROR 404</h1>
                    <p className="font-manrope-semibold text-grey-600 text-[30px] leading-4">Not Found</p>
                </div>
            </div>
        </>
    )
}