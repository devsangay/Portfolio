import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

export default function Toast({message, type = "success", onClose}) {
    useEffect(() => {
        if (message) toast[type](message)
    }, [message, type]);

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    )
}