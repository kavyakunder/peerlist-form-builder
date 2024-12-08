'use client'

import React, { useEffect, useState } from 'react'


interface Answer {
    id: string;
    type: string;
    value: string;
    answer: string;
}

interface FormData {
    formName: string;
    answerList: Answer[];
}

function History() {
    const [filledForm, setFilledForm] = useState<FormData[] | null>([])

    useEffect(() => {

        const getHistory = localStorage.getItem("formData");
        console.log("gethis", getHistory)
        if (getHistory) {
            setFilledForm(JSON.parse(getHistory))

        }

    }, [])

    return (
        <div className="m-auto flex flex-col justify-between h-screen w-5/12 border-2 border-gray-medium">

            <main className="flex flex-col items-start p-4 flex-grow">
                {filledForm?.map((eachForm) => <>
                    <h1>{eachForm.formName || "Untitled Form"}</h1>
                    <div>
                        {eachForm?.answerList?.map(({ value, answer }, idx) => (
                            <div key={idx}>
                                <strong><p>{value}</p></strong>
                                <p>{answer}</p>
                            </div>
                        ))}
                    </div>

                </>)}
            </main>


        </div >
    )
}

export default History