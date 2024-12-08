"use client"

import React from 'react'
import { RxDragHandleDots2 } from "react-icons/rx";
import { HiMiniBars2 } from "react-icons/hi2";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { PiLinkSimple } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";


type Question = {
    id: string;
    type: keyof typeof questionTypeConfig;
    value: string;
};


interface MainQuestionsProps {
    questionsList: Question[];
    handleUpdateInputValue: (id: string, value: string) => void;
    openEditQuestionModal: (type: string, id: string) => void;
    errors?: boolean;
    toggleAddQuestionModal: () => void;
}



const questionTypeConfig = {
    "short-answer": {
        placeholder: "Short answer question",
        icon: <>
            <HiMiniBars2 />
            <MdKeyboardArrowDown /></>,
        inputType: "text",
        renderInput: () => (
            <input
                type="text"
                disabled
                className="w-full border-2 rounded-md border-gray-medium mt-2 h-8 cursor-pointer"
            />
        )
    },
    "long-answer": {
        icon: <><HiMiniBars3BottomLeft /><MdKeyboardArrowDown /></>,
        placeholder: "Long answer question",
        inputType: "text",
        renderInput: () => (
            <textarea
                disabled
                className="w-full border-2 rounded-md border-gray-medium mt-2 h-20 cursor-pointer"
            />
        )
    },
    "single-select": {
        icon: <><MdOutlineRadioButtonChecked /><MdKeyboardArrowDown /></>,
        placeholder: "Long answer question",
        inputType: "text",
        renderInput: (index: number) => (
            <div className="mt-2 text-sm">
                <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        name={`question-${index}`}
                        disabled
                        className="h-5 w-5 border-2 rounded-md border-gray-medium border-rad"
                    />
                    <input type="text" className='border-2 border-gray-medium flex-grow rounded-md' />
                </label>
                <label className="flex items-center gap-2 mt-1">
                    <input
                        type="radio"
                        name={`question-${index}`}
                        disabled
                        className="h-5 w-5 border-2 rounded-md border-gray-medium"
                    />
                    <input type="text" className='border-2 border-gray-medium flex-grow rounded-md' />

                </label>
            </div>
        )
    },
    "url": {
        icon: <><PiLinkSimple /><MdKeyboardArrowDown /></>,
        placeholder: "URL Question",
        inputType: "text",
        renderInput: () => (
            <input
                type="text"
                disabled
                className="w-full border-2 rounded-md border-gray-medium mt-2 h-8 cursor-pointer"
            />
        )
    },
    "date": {
        icon: <><LuCalendarDays /><MdKeyboardArrowDown /></>,
        placeholder: "Date Question",
        inputType: "text",
        renderInput: () => (
            <input
                type="date"
                disabled
                className="w-full border-2 rounded-md border-gray-medium mt-2 h-8 cursor-pointer text-sm"
            />
        )
    }
}

const MainQuestions = ({ questionsList, handleUpdateInputValue,
    openEditQuestionModal, errors, toggleAddQuestionModal
}: MainQuestionsProps) => {

    return (
        <main className="flex flex-col items-center p-4 flex-grow overflow-y-auto">
            {questionsList.map((eachQuestion, index) => {
                const config = questionTypeConfig[eachQuestion.type];
                if (!config) return null;
                return (
                    <div
                        id={eachQuestion.id}
                        key={index} className="border-2 border-gray-medium w-full rounded-2xl p-3 mt-4 hover:bg-[#fafbfc] cursor-pointer">
                        <>
                            <div className="flex justify-between items-center hover:bg-[#fafbfc]">
                                <input
                                    type={config.inputType}
                                    placeholder={config.placeholder}
                                    value={eachQuestion.value}
                                    className={`text-sm font-semibold leading-5 w-full hover:bg-[#fafbfc] ${errors && eachQuestion.value.length === 0 ? 'placeholder-red-500' : 'placeholder-gray-400'}`}
                                    onChange={(e) => handleUpdateInputValue(eachQuestion.id, e.target.value)}
                                />
                                <div className="flex gap-1">
                                    <div className='flex'
                                        onClick={() => openEditQuestionModal(eachQuestion.type, eachQuestion.id)}
                                    >
                                        {config.icon}
                                    </div>
                                    <RxDragHandleDots2 />
                                </div>

                            </div>
                            {config.renderInput && config.renderInput(index)}
                        </>
                    </div>
                )
            })}

            <button
                onClick={toggleAddQuestionModal}
                className="mt-6 text-[#000000] text-sm border-2 py-1 px-4 border-gray-medium rounded-xl font-semibold flex items-center"
            >
                <FiPlus />
                <span>Add Question</span>
            </button>
        </main>

    )
}


export default MainQuestions;