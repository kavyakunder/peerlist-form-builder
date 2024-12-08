import React from 'react'
import { LuNotebookPen } from "react-icons/lu";
import { MdCheck } from "react-icons/md";


interface FooterProps {
    disabled: boolean
}
const Footer = ({ disabled }: FooterProps) => {
    return (
        <footer className="flex flex-col border-t-2 border-gray-medium h-16 w-full justify-between gap-4 items-center px-4 md:flex-row sm:flex-col ">
            <button
                disabled={disabled}
                className={` border-2 py-1 px-4 text-sm border-gray-medium rounded-xl flex items-center gap-1 whitespace-nowrap ${disabled ? "text-[#899097] cursor-not-allowed" : "text-black"
                    }`}>
                <LuNotebookPen />

                <span>Save as Draft</span>
            </button>
            <button
                className={`text-[#ffffff] border-2 text-sm py-1 px-4  rounded-xl  flex items-center justify-around gap-1 whitespace-nowrap ${disabled ? "border-[#8cc7a7] bg-[#8cc7a7] cursor-not-allowed" : "bg-green-medium border-[#1e874b]"}`}>
                <MdCheck />
                <span>Publish form</span>
            </button>
        </footer>
    )
}

export default Footer