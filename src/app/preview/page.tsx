"use client";

import React, { useEffect, useState } from 'react'
import { MdCheck } from "react-icons/md";
import { useFormContext } from '../context/FormContext';
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from 'next/navigation';



interface AnswerProps {
    type: string,
    id: string,
    value: string,
    answer: string
}

export default function PreviewPage() {


    const { formName, questionsList } = useFormContext()
    const [formData, setFormData] = useState<{ [key: string]: string }>({});

    const [completePercentage, setCompletePercentage] = useState(0)
    const [disabled, setDisabled] = useState(true)

    const [answerList, setAnswerList] = useState<AnswerProps[]>([]); // State with AnswerProps type
    const router = useRouter();

    const handleInputChange = (id: string, value: string) => {
        console.log("id and val", id, value)
        const getTrimmedAnswer = value.trim();
        setFormData(prev => ({
            ...prev,
            [id]: getTrimmedAnswer
        }));

        setAnswerList((prev) => {
            const updatedAnswerList = questionsList.map((question) => {
                if (question.id === id) {
                    return { ...question, answer: getTrimmedAnswer };  // Add answer to the question
                }
                return { ...question, answer: formData[question.id] || "" };  // Preserve previous answers
            });

            return updatedAnswerList;
        });


    }

    //for submit button
    useEffect(() => {
        const completedQuestions = Object.keys(formData).length;
        const hasEmptyFields = Object.values(formData).some((value) => value.trim() === "");
        console.log("hasmeptyyttt", hasEmptyFields)
        setDisabled(completedQuestions < questionsList.length || hasEmptyFields);
    }, [formData])


    //for percentage view
    useEffect(() => {
        const completedQuestions = Object.values(formData).filter(value => value.trim() !== "").length;
        const percentage = Math.round((completedQuestions / questionsList.length) * 100);
        setCompletePercentage(percentage);

    }, [formData]);


    console.log("the form ",)

    const handleFormSubmit = async () => {
        try {

            await new Promise(resolve => setTimeout(resolve, 1000));

            const storedForms = JSON.parse(localStorage.getItem('formData') || '[]');
            const updatedForms = [...storedForms, { formName, answerList }];

            localStorage.setItem('formData', JSON.stringify(updatedForms));

            toast.success("Form submitted successfully!", {
                duration: 3000,
                position: "top-center",
            });

            setTimeout(() => {
                router.push("/history")
            }, 3000);


        } catch (error) {
            console.error('Error submitting the form:', error);
            toast.error("An error occurred.Please try again!");
            setTimeout(() => {
                router.push("/")
            }, 3000);

        }

    }

    return (
        <>
            <div className="m-auto flex flex-col justify-between h-screen w-5/12 border-2 border-[#E1E4E8] text-sm">
                <div className="flex flex-col border-b-2 border-[#E1E4E8] h-16 w-full justify-between items-center px-4 md:flex-row">
                    <p className='font-semibold text-base'>Submit Form  {formName || ""}</p>
                    <div>
                        <p className='text-sm'>Form completeness - {completePercentage}%</p>
                        <div className="relative w-full h-1 bg-gray-200 rounded-md">
                            <div
                                className="absolute top-0 left-0 h-1 bg-green-medium rounded-md"
                                style={{ width: `${completePercentage}%` }}
                            />
                        </div>

                    </div>

                </div>

                <main className="flex flex-col items-start p-6 flex-grow gap-8 w-full overflow-y-auto">
                    {questionsList.map((question, index) => (
                        <div key={question.id} className='w-full'>
                            <p className='font-semibold text-sm leading-5 mb-1'>{question.value}</p>

                            {question.type === 'short-answer' && (
                                <input
                                    type="text"
                                    className='border-2 text-sm border-gray-200 w-full rounded-lg h-8'
                                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                                />
                            )}

                            {question.type === 'long-answer' && (
                                <textarea
                                    className='border-2 text-sm border-gray-200 w-full rounded-lg h-20'
                                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                                />
                            )}

                            {question.type === 'single-select' && (
                                <div className='text-sm flex flex-col gap-2'>
                                    <label className='flex items-center'>
                                        <input
                                            type='radio'
                                            name={`question-${question.id}`}
                                            value='Option 1'
                                            className='mr-2 text-sm accent-green-medium cursor-pointer'
                                            onChange={(e) => handleInputChange(question.id, e.target.value)}
                                        />
                                        Option 1
                                    </label>
                                    <label className='flex items-center'>
                                        <input
                                            type='radio'
                                            name={`question-${question.id}`}
                                            value='Option 2'
                                            className='mr-2 text-sm accent-green-medium cursor-pointer'
                                            onChange={(e) => handleInputChange(question.id, e.target.value)}
                                        />
                                        Option 2
                                    </label>
                                </div>
                            )}

                            {question.type === 'url' && (
                                <input
                                    type="url"
                                    className='border-2 text-sm border-gray-200 w-full rounded-lg h-8'
                                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                                />
                            )}

                            {question.type === 'date' && (
                                <input
                                    type="date"
                                    className='border-2 text-sm border-gray-200 w-full rounded-lg h-8'
                                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                                />
                            )}
                        </div>
                    ))}
                </main>

                <footer className="flex border-t-2 border-[#E1E4E8] h-16 w-full justify-end gap-4 items-center px-4">
                    <button
                        onClick={handleFormSubmit}
                        className={`text-[#ffffff] border-2 py-1 px-4  rounded-xl  flex items-center justify-around gap-1 ${disabled ? "border-[#8cc7a7] bg-[#8cc7a7] cursor-not-allowed" : "bg-green-medium border-[#1e874b]"}`}>
                        <MdCheck />
                        <span>Submit</span>
                    </button>
                </footer>
            </div >
            <Toaster />
        </>
    )
}

