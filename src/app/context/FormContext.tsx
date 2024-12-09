"use client"
import React, { createContext, useState, ReactNode, useContext } from 'react';
import { Question } from '../types/types';

type FormContextType = {
    formName: string;
    setFormName: (name: string) => void;
    questionsList: Question[];
    setQuestionsList: (question: any) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [formName, setFormName] = useState<string>('');
    const [questionsList, setQuestionsList] = useState<Question[]>([]);

    return (
        <FormContext.Provider value={{ formName, setFormName, questionsList, setQuestionsList }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('Something is wrong with context!');
    }
    return context;
};
