import { useEffect } from "react";
import Navbar from "../components/navbar";



export default function ThankPage() {



    useEffect(() => {
        setTimeout(() => {
            const url = "https://expo.dev/artifacts/eas/aGyTWg3wH2tLiYbzr6LCZ3.apk";
            window.open(url, "_blank", "noreferrer");
        }, 1000)
    }, [])
    return (
        <>
            <Navbar />
        </>
    )
}