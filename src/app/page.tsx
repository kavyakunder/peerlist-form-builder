"use client";

import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useFormContext } from './context/FormContext';
import QuestionTypeDropdown from './components/QuestionTypeDropdown';
import { useRouter } from 'next/navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import MainQuestions from './components/MainQuestions';

type Question = {
  id: string;
  type: string;
  value: string;
};

export default function Home() {

  const { formName, setFormName, questionsList, setQuestionsList } = useFormContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState(false);
  const router = useRouter();

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
      setQuestionsList((prev: Question[]) =>
        prev.map((eachQuestion: Question) => eachQuestion.id === selectedQuestionId ?
          { ...eachQuestion, type }
          : eachQuestion)
      )

    } else {
      const newQuestion: Question = { id: uuidv4(), type, value: "" }
      setQuestionsList((prev: Question[]) => [...prev, newQuestion]);

    }
    setModalOpen(false)
    setSelectedQuestionId(null)

  }

  const handleUpdateInputValue = (id: string, newValue: string) => {
    setQuestionsList((prev: Question[]) => prev.map((eachQuestion: Question) => eachQuestion.id === id ? { ...eachQuestion, value: newValue } : eachQuestion))
  }

  useEffect(() => {
    if (questionsList.length > 0) {
      setDisabled(false)
    }
  }, [questionsList])


  const handlePreviewClick = () => {
    const emptyInputQuestion = questionsList.filter((eachQuestion) => eachQuestion.value.length === 0)
    if (emptyInputQuestion.length > 0) {
      setErrors(true)
    }
    else {
      setErrors(false)
      router.push("/preview")

    }
  }


  return (
    <>

      <div className="m-auto flex flex-col justify-between h-screen w-5/12 border-2 border-gray-medium">
        <Header formName={formName} disabled={disabled} handlePreviewClick={handlePreviewClick} setFormName={setFormName} />

        {/* <main className="flex flex-col items-center p-4 flex-grow">
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
        </main> */}
        <MainQuestions
          questionsList={questionsList} handleUpdateInputValue={handleUpdateInputValue}
          openEditQuestionModal={openEditQuestionModal} errors={errors} toggleAddQuestionModal={toggleAddQuestionModal}
        />


        <Footer disabled={disabled} />
      </div >

      {modalOpen && <QuestionTypeDropdown handleUpdateQuestionType={handleUpdateQuestionType} />}
    </>
  )
}


