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
      setQuestionsList((prev: any) =>
        prev.map((eachQuestion: any) => eachQuestion.id === selectedQuestionId ?
          { ...eachQuestion, type }
          : eachQuestion)
      )

    } else {
      const newQuestion: Question = { id: uuidv4(), type, value: "" }
      setQuestionsList((prev: any) => [...prev, newQuestion]);

    }
    setModalOpen(false)
    setSelectedQuestionId(null)

  }

  const handleUpdateInputValue = (id: string, newValue: string) => {
    setQuestionsList((prev: any) => prev.map((eachQuestion: Question) => eachQuestion.id === id ? { ...eachQuestion, value: newValue } : eachQuestion))
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


