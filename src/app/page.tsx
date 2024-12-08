"use client";

import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Image from "next/image";
import { LuCalendarDays } from "react-icons/lu";
import { PiLinkSimple } from "react-icons/pi";
import { HiMiniBars2 } from "react-icons/hi2";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { RxDragHandleDots2 } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { LuNotebookPen } from "react-icons/lu";
import { MdCheck } from "react-icons/md";
import Link from 'next/link'
import { error } from 'console';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [questionsList, setQuestionList] = useState<{ id: string, type: string, value: string }[]>([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);
  const [disabled, setDisabled] = useState(true);
  const [formName, setFormName] = useState("");

  const toggleAddQuestionModal = () => {
    setModalOpen(!modalOpen);
    setSelectedQuestionId(null)
  }

  const openEditQuestionModal = (type: string, id: string) => {
    setModalOpen(!modalOpen);
    setSelectedQuestionId(id)
  }

  const handleUpdateQuestionType = (type: string) => {
    if (selectedQuestionId) {
      setQuestionList((prev) =>
        prev.map((eachQuestion) => eachQuestion.id === selectedQuestionId ?
          { ...eachQuestion, type }
          : eachQuestion)
      )

    } else {
      const newQuestion = { id: uuidv4(), type, value: "" }
      setQuestionList((prev) => [...prev, newQuestion]);

    }
    setModalOpen(false)
    setSelectedQuestionId(null)

  }

  const handleUpdateInputValue = (id: string, newValue: string) => {
    setQuestionList((prev) => prev.map((eachQuestion) => eachQuestion.id === id ? { ...eachQuestion, value: newValue } : eachQuestion))
  }

  useEffect(() => {
    if (questionsList.length > 0) {
      setDisabled(false)
    }
  }, [questionsList])

  return (
    <>
      <div className="m-auto flex flex-col justify-between h-screen w-5/12 border-2 border-[#E1E4E8]">
        <div className="flex border-b-2 border-[#E1E4E8] h-16 w-full justify-between items-center px-4">
          <input
            type="text" placeholder='Untitled Form'
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
          <Link href="/preview">
            <button
              disabled={disabled}
              className={`border-2 py-1 px-4 border-[#E1E4E8] rounded-xl flex items-center gap-1 ${disabled ? "text-[#899097] cursor-not-allowed" : "text-black"
                }`}>
              <span>Preview</span>
              <FiArrowUpRight />
            </button>
          </Link>
        </div>

        <main className="flex flex-col items-center p-4 flex-grow">
          {questionsList.map((eachQuestion, index) => (
            <div
              id={eachQuestion.id}
              key={index} className="border-2 border-[#E1E4E8] w-full rounded-2xl p-3 mt-4">

              {eachQuestion.type === "short-answer" && (
                <>
                  <div className="flex justify-between items-center">
                    <input
                      type="text"
                      placeholder="Short answer question"
                      className="font-semibold w-full text-base hover:bg-[#fafbfc]"
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
                    className="w-full border-2 rounded-md border-[#E1E4E8] mt-2 h-8"
                  />
                </>
              )}
              {eachQuestion.type === "long-answer" && (
                <>
                  <div className="flex justify-between items-center">
                    <input
                      type="text"
                      placeholder="Long answer question"
                      className="font-semibold w-full text-base hover:bg-[#fafbfc]"
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
                    className="w-full border-2 rounded-md border-[#E1E4E8] mt-2 h-20"
                  />
                </>
              )}
              {eachQuestion.type === "single-select" && (
                <>
                  <div className="flex justify-between items-center">
                    <input
                      type="text"
                      placeholder="Single Select Question"
                      className="font-semibold w-full text-base hover:bg-[#fafbfc]"
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
                        className="h-5 w-5 border-2 rounded-md border-[#E1E4E8]"
                      />
                      Option 1
                    </label>
                    <label className="flex items-center gap-2 mt-1">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        disabled
                        className="h-5 w-5 border-2 rounded-md border-[#E1E4E8]"
                      />
                      Option 2
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
                      className="font-semibold w-full text-base hover:bg-[#fafbfc]"
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
                    className="w-full border-2 rounded-md border-[#E1E4E8] mt-2 h-8"
                  />
                </>
              )}
              {eachQuestion.type === "date" && (
                <>
                  <div className="flex justify-between items-center">
                    <input
                      type="text"
                      placeholder="Date Question"
                      className="font-semibold w-full text-base hover:bg-[#fafbfc]"
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
                    className="w-full border-2 rounded-md border-[#E1E4E8] mt-2 h-8"
                  />
                </>
              )}
            </div>
          ))}

          <button
            onClick={toggleAddQuestionModal}
            className="mt-6 text-[#000000] border-2 py-1 px-4 border-[#E1E4E8] rounded-xl font-semibold flex items-center"
          >
            <FiPlus />
            <span>Add Question</span>
          </button>
        </main>

        <footer className="flex border-t-2 border-[#E1E4E8] h-16 w-full justify-between gap-4 items-center px-4">
          <button

            disabled={disabled}
            className={`border-2 py-1 px-4 border-[#E1E4E8] rounded-xl flex items-center gap-1 ${disabled ? "text-[#899097] cursor-not-allowed" : "text-black"
              }`}>
            <LuNotebookPen />

            <span>Save as Draft</span>
          </button>
          <button
            className={`text-[#ffffff] border-2 py-1 px-4  rounded-xl  flex items-center justify-around gap-1 ${disabled ? "border-[#8cc7a7] bg-[#8cc7a7] cursor-not-allowed" : "bg-[#00AA45] border-[#1e874b]"}`}>
            <MdCheck />
            <span>Publish form</span>
          </button>
        </footer>
      </div >
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[300px] p-6 rounded-xl shadow-lg h-[224px] border-2 border-[#E1E4E8]">
            <h2 className="text-xs font-semibold mb-4">INPUT TYPES</h2>
            <div
              className='flex flex-col gap-2 text-sm'>
              <div
                onClick={() => handleUpdateQuestionType("short-answer")}

                className='flex items-center gap-2'>
                <HiMiniBars2 />
                <span>Short Answer</span>
              </div>
              <div
                onClick={() => handleUpdateQuestionType("long-answer")}
                className='flex items-center gap-2'>
                <HiMiniBars3BottomLeft />
                <span>Long Answer</span>
              </div>
              <div
                onClick={() => handleUpdateQuestionType("single-select")}
                className='flex items-center gap-2'>
                <MdOutlineRadioButtonChecked />
                <span>Single Selects</span>
              </div>
              <div
                onClick={() => handleUpdateQuestionType("url")}
                className='flex items-center gap-2'>
                <PiLinkSimple /><span>URL</span>
              </div>
              <div
                onClick={() => handleUpdateQuestionType("date")}
                className='flex items-center gap-2'>
                <LuCalendarDays />
                <span>Date</span>
              </div>
            </div>
          </div>
        </div>
      )
      }
    </>
  )
}


