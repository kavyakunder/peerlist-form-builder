import React from 'react'
import { HiMiniBars2 } from "react-icons/hi2";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { PiLinkSimple } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";

interface QuestionTypeDropdownProps {
    handleUpdateQuestionType: (type: string) => void;
}

const questionTypes = [
    { id: 1, type: 'short-answer', label: 'Short Answer', icon: <HiMiniBars2 size={20} /> },
    { id: 2, type: 'long-answer', label: 'Long Answer', icon: <HiMiniBars3BottomLeft size={20} /> },
    { id: 3, type: 'single-select', label: 'Single Select', icon: <MdOutlineRadioButtonChecked size={20} /> },
    { id: 4, type: 'url', label: 'URL', icon: <PiLinkSimple size={20} /> },
    { id: 5, type: 'date', label: 'Date', icon: <LuCalendarDays size={20} /> },
];


const QuestionTypeDropdown = ({ handleUpdateQuestionType }: QuestionTypeDropdownProps) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-[300px] p-6 rounded-xl shadow-lg h-[224px] border-2 border-gray-medium">
                <h2 className="text-xs font-semibold mb-4 bg-[#fafbfc] text-[#6A737D]">INPUT TYPES</h2>
                <div
                    className='flex flex-col gap-2 text-sm'>
                    {questionTypes.map(({ type, label, icon, id }) =>
                        <div
                            key={id}
                            onClick={() => handleUpdateQuestionType(type)}
                            className='flex items-center gap-2 hover:cursor-pointer'>
                            {icon}
                            <span>{label}</span>
                        </div>
                    )}

                </div >
            </div>
        </div>
    )
}

export default QuestionTypeDropdown