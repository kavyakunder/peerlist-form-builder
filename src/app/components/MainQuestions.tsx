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
    type: string;
    value: string;
};


interface MainQuestionsProps {
    questionsList: Question[];
    handleUpdateInputValue: (id: string, value: string) => void;
    openEditQuestionModal: (type: string, id: string) => void;
    errors?: boolean;
    toggleAddQuestionModal: () => void;
}


const MainQuestions = ({ questionsList, handleUpdateInputValue,
    openEditQuestionModal, errors, toggleAddQuestionModal
}: MainQuestionsProps) => {

    return (
        <main className="flex flex-col items-center p-4 flex-grow">
            {questionsList.map((eachQuestion, index) => (
                <div
                    id={eachQuestion.id}
                    key={index} className="border-2 border-gray-medium w-full rounded-2xl p-3 mt-4 hover:bg-[#fafbfc] cursor-pointer">

                    {eachQuestion.type === "short-answer" && (
                        <>
                            <div className="flex justify-between items-center hover:bg-[#fafbfc]">
                                <input
                                    type="text"
                                    placeholder="Short answer question"
                                    className={`text-sm font-semibold leading-5 w-full hover:bg-[#fafbfc] ${errors && eachQuestion.value.length === 0 ? 'placeholder-red-500' : 'placeholder-gray-400'}`}
                                    value={eachQuestion.value}
                                    onChange={(e) => handleUpdateInputValue(eachQuestion.id, e.target.value)}
                                />
                                <div className="flex gap-1">
                                    <div className='flex'
                                        onClick={() => openEditQuestionModal("short-answer", eachQuestion.id)}
                                    >
                                        <HiMiniBars2 />
                                        <MdKeyboardArrowDown />
                                    </div>
                                    <RxDragHandleDots2 />
                                </div>
                            </div>
                            <input
                                type="text"
                                disabled
                                className="w-full border-2 rounded-md border-gray-medium mt-2 h-8"
                            />
                        </>
                    )}
                    {eachQuestion.type === "long-answer" && (
                        <>
                            <div className="flex justify-between items-center">
                                <input
                                    type="text"
                                    placeholder="Long answer question"
                                    className={`text-sm font-semibold leading-5 w-full hover:bg-[#fafbfc] ${errors && eachQuestion.value.length === 0 ? 'placeholder-red-500' : 'placeholder-gray-400'}`}

                                    // className="font-semibold w-full text-base hover:bg-[#fafbfc]"
                                    onChange={(e) => handleUpdateInputValue(eachQuestion.id, e.target.value)}
                                    value={eachQuestion.value}
                                />
                                <div className="flex gap-1">
                                    <div
                                        onClick={() => openEditQuestionModal("long-answer", eachQuestion.id)}
                                        className='flex'>
                                        <HiMiniBars3BottomLeft />
                                        <MdKeyboardArrowDown />
                                    </div>
                                    <RxDragHandleDots2 />
                                </div>
                            </div>
                            <textarea
                                disabled
                                className="w-full border-2 rounded-md border-gray-medium mt-2 h-20"
                            />
                        </>
                    )}
                    {eachQuestion.type === "single-select" && (
                        <>
                            <div className="flex justify-between items-center">
                                <input
                                    type="text"
                                    placeholder="Single Select Question"
                                    className={`text-sm font-semibold leading-5 w-full hover:bg-[#fafbfc] ${errors && eachQuestion.value.length === 0 ? 'placeholder-red-500' : 'placeholder-gray-400'}`}

                                    // className="font-semibold w-full text-base hover:bg-[#fafbfc]"
                                    onChange={(e) => handleUpdateInputValue(eachQuestion.id, e.target.value)}
                                    value={eachQuestion.value}
                                />
                                <div className="flex gap-1">
                                    <div
                                        onClick={() => openEditQuestionModal("single-select", eachQuestion.id)}

                                        className='flex'>
                                        <MdOutlineRadioButtonChecked />
                                        <MdKeyboardArrowDown />
                                    </div>
                                    <RxDragHandleDots2 />
                                </div>
                            </div>
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
                        </>
                    )}
                    {eachQuestion.type === "url" && (
                        <>
                            <div className="flex justify-between items-center">
                                <input
                                    type="text"
                                    placeholder="URL Question"
                                    className={`text-sm font-semibold leading-5 w-full hover:bg-[#fafbfc] ${errors && eachQuestion.value.length === 0 ? 'placeholder-red-500' : 'placeholder-gray-400'}`}

                                    // className="font-semibold w-full text-base hover:bg-[#fafbfc]"
                                    onChange={(e) => handleUpdateInputValue(eachQuestion.id, e.target.value)}
                                    value={eachQuestion.value}
                                />
                                <div className="flex gap-1">
                                    <div
                                        onClick={() => openEditQuestionModal("url", eachQuestion.id)}
                                        className='flex'>
                                        <PiLinkSimple />
                                        <MdKeyboardArrowDown />
                                    </div>
                                    <RxDragHandleDots2 />
                                </div>
                            </div>
                            <input
                                type="text"
                                disabled
                                className="w-full border-2 rounded-md border-gray-medium mt-2 h-8 cursor-pointer"
                            />
                        </>
                    )}
                    {eachQuestion.type === "date" && (
                        <>
                            <div className="flex justify-between items-center">
                                <input
                                    type="text"
                                    placeholder="Date Question"
                                    className={`text-sm font-semibold leading-5 w-full hover:bg-[#fafbfc] ${errors && eachQuestion.value.length === 0 ? 'placeholder-red-500' : 'placeholder-gray-400'}`}

                                    // className="font-semibold w-full text-base hover:bg-[#fafbfc]"
                                    onChange={(e) => handleUpdateInputValue(eachQuestion.id, e.target.value)}
                                    value={eachQuestion.value}
                                />
                                <div className="flex gap-1">
                                    <div
                                        onClick={() => openEditQuestionModal("date", eachQuestion.id)}
                                        className='flex'>
                                        <LuCalendarDays />
                                        <MdKeyboardArrowDown />
                                    </div>
                                    <RxDragHandleDots2 />
                                </div>
                            </div>
                            <input
                                type="date"
                                disabled
                                className="w-full border-2 rounded-md border-gray-medium mt-2 h-8"
                            />
                        </>
                    )}
                </div>
            ))}

            <button
                onClick={toggleAddQuestionModal}
                className="mt-6 text-[#000000] border-2 py-1 px-4 border-gray-medium rounded-xl font-semibold flex items-center"
            >
                <FiPlus />
                <span>Add Question</span>
            </button>
        </main>

    )
}


export default MainQuestions;