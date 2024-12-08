"use client";

import React, { useState } from 'react'
import { MdCheck } from "react-icons/md";


export default function PreviewPage() {
    const [disabled, setDisabled] = useState(true)

    return (
        <>
            <div className="m-auto flex flex-col justify-between h-screen w-5/12 border-2 border-[#E1E4E8] text-sm">
                <div className="flex border-b-2 border-[#E1E4E8] h-16 w-full justify-between items-center px-4">
                    <p className='font-semibold text-base'>Submit Form</p>
                    <p className='text-sm'>Form completeness - 80%</p>
                </div>

                <main className="flex flex-col items-start p-6 flex-grow gap-8 w-full">

                    <div className='w-full'>
                        <p className='font-semibold text-sm leading-5 mb-1'>Link to your Portfolio</p>
                        <input type="text" className='border-2 border-gray-200 w-full rounded-lg h-8' />
                    </div>

                    <div className='w-full'>
                        <p className='font-semibold text-sm leading-5 mb-1'>Explain in single sentence why you are best fit fot this role?</p>
                        <input type="text" className='border-2 border-gray-200 w-full rounded-lg h-8' />
                    </div>
                    <div className='w-full'>
                        <p className='font-semibold text-sm leading-5 mb-1'>What is your preferred frontend framework?</p>
                        <input type="text" className='border-2 border-gray-200 w-full rounded-lg h-20' />
                    </div>
                    <div className='w-full'>
                        <p className='font-semibold text-sm leading-5 mb-1'>What is your preferred frontend framework?</p>

                        <div className='text-sm flex flex-col gap-2'>
                            <label className='flex items-center'>
                                <input
                                    type='radio'
                                    name='frontendFramework'
                                    value='React'
                                    className='mr-2 accent-[#00AA45] cursor-pointer'
                                />
                                React
                            </label>
                            <label className='flex items-center'>
                                <input
                                    type='radio'
                                    name='frontendFramework'
                                    value='Angular'
                                    className='mr-2 accent-[#00AA45] cursor-pointer'
                                />
                                Angular
                            </label>
                        </div>

                    </div>
                    <div className='w-full'>
                        <p className='font-semibold text-sm leading-5 mb-1'>Explain in single sentence why you are best fit for this role?</p>
                        <input type="text" className='border-2 border-gray-200 w-full rounded-lg h-8' />
                    </div>
                    <div className='w-full'>
                        <p className='font-semibold text-sm leading-5 mb-1'>Tentative date of joining</p>
                        <input type="date"
                            className='border-2 text-sm border-gray-200 w-full rounded-lg h-8' />
                    </div>
                </main>

                <footer className="flex border-t-2 border-[#E1E4E8] h-16 w-full justify-end gap-4 items-center px-4">
                    <button
                        className={`text-[#ffffff] border-2 py-1 px-4  rounded-xl  flex items-center justify-around gap-1 ${disabled ? "border-[#8cc7a7] bg-[#8cc7a7] cursor-not-allowed" : "bg-[#00AA45] border-[#1e874b]"}`}>
                        <MdCheck />
                        <span>Submit</span>
                    </button>
                </footer>
            </div >

        </>
    )
}

