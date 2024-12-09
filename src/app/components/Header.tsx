import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

interface HeaderProps {
    formName: string,
    disabled: boolean,
    handlePreviewClick: () => void,
    setFormName: (name: string) => void
}


const Header = ({ formName, disabled, handlePreviewClick, setFormName }: HeaderProps) => {
    return (
        <header className="flex flex-col border-b-2 border-gray-medium h-14 w-full justify-between items-center px-4 md:flex-row sm:flex-col font-semibold ">
            <input
                type="text" placeholder='Untitled Form'
                value={formName}
                onChange={(e) => setFormName(e.target.value)}

            />
            <button
                onClick={handlePreviewClick}
                disabled={disabled}
                className={`border-2 text-sm py-1 px-4 border-gray-medium rounded-xl flex items-center gap-1 ${disabled ? "text-[#899097] cursor-not-allowed" : "text-black"
                    }`}>
                <span>Preview</span>
                <FiArrowUpRight />
            </button>
        </header>
    )
}

export default Header