import { useEffect } from "react";
import Navbar from "../components/navbar";



export default function ThankPage() {



    useEffect(() => {
        setTimeout(() => {
            const url = "https://expo.dev/artifacts/eas/q8oFzKWd4UdnZhYdWm96z7.apk";
            window.open(url, "_blank", "noreferrer");
        }, 1000)
    }, [])
    return (
        <>
            <Navbar />
        </>
    )
}